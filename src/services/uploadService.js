import api from "./api";

// CONFIG

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const MAX_IMAGE_WIDTH = 1600;
const MAX_IMAGE_HEIGHT = 1600;

const MIN_IMAGE_WIDTH = 640;
const MIN_IMAGE_HEIGHT = 640;

const TARGET_IMAGE_SIZE = 70 * 1024; // ~70 KB
const MAX_TARGET_SIZE = 80 * 1024; // ~80 KB

const START_QUALITY = 0.82;
const MIN_QUALITY = 0.38;
const QUALITY_STEP = 0.07;

const RESIZE_STEP = 0.88;

const MAX_COMPRESSION_ATTEMPTS = 20;

const OUTPUT_MIME_TYPE = "image/webp";
const OUTPUT_EXTENSION = "webp";

// SUPPORTED TYPES

const SUPPORTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/avif",
];

// SAFE FILE NAME

const createSafeFileName = (
  fileName = "image",
  extension = OUTPUT_EXTENSION
) => {
  const nameWithoutExtension = String(fileName)
    .replace(/\.[^/.]+$/, "")
    .trim();

  const safeName = nameWithoutExtension
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return `${safeName || "image"}.${extension}`;
};

// VALIDATION

const validateImage = (file) => {
  if (!file) {
    throw new Error("Please select an image.");
  }

  if (!(file instanceof File) && !(file instanceof Blob)) {
    throw new Error("Invalid image file.");
  }

  if (!file.type || !file.type.startsWith("image/")) {
    throw new Error("Only image files are allowed.");
  }

  if (file.type === "image/svg+xml") {
    throw new Error(
      "SVG images are not supported. Please use JPG, PNG, WebP or AVIF."
    );
  }

  if (
    file.type &&
    !SUPPORTED_IMAGE_TYPES.includes(file.type.toLowerCase())
  ) {
    throw new Error(
      "Unsupported image format. Please use JPG, PNG, WebP or AVIF."
    );
  }

  if (!file.size) {
    throw new Error("The selected image is empty.");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error(
      "Image must be 5 MB or smaller."
    );
  }

  return true;
};

// LOAD IMAGE

const loadImage = (file) => {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);

    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);

      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);

      reject(
        new Error(
          "The selected image could not be loaded."
        )
      );
    };

    image.src = objectUrl;
  });
};

// INITIAL DIMENSIONS

const calculateInitialDimensions = (
  originalWidth,
  originalHeight
) => {
  const scale = Math.min(
    MAX_IMAGE_WIDTH / originalWidth,
    MAX_IMAGE_HEIGHT / originalHeight,
    1
  );

  return {
    width: Math.max(
      1,
      Math.round(originalWidth * scale)
    ),

    height: Math.max(
      1,
      Math.round(originalHeight * scale)
    ),
  };
};

// CANVAS

const createCanvas = (
  image,
  width,
  height
) => {
  const canvas =
    document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const context =
    canvas.getContext("2d", {
      alpha: true,
    });

  if (!context) {
    throw new Error(
      "Your browser could not process the selected image."
    );
  }

  /*
   * Better resize quality.
   */
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";

  context.clearRect(
    0,
    0,
    width,
    height
  );

  context.drawImage(
    image,
    0,
    0,
    width,
    height
  );

  return canvas;
};

// CANVAS -> BLOB

const canvasToBlob = (
  canvas,
  mimeType,
  quality
) => {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(
            new Error(
              "Image compression failed."
            )
          );

          return;
        }

        resolve(blob);
      },

      mimeType,
      quality
    );
  });
};

// INTERNAL ADAPTIVE COMPRESSION

const compressImageWithMetadata = async (
  file
) => {
  validateImage(file);

  const image =
    await loadImage(file);

  const originalWidth =
    image.naturalWidth ||
    image.width;

  const originalHeight =
    image.naturalHeight ||
    image.height;

  if (
    !originalWidth ||
    !originalHeight
  ) {
    throw new Error(
      "Could not determine image dimensions."
    );
  }

  let { width, height } =
    calculateInitialDimensions(
      originalWidth,
      originalHeight
    );

  let quality = START_QUALITY;
  let blob = null;

  let attempts = 0;

  while (
    attempts <
    MAX_COMPRESSION_ATTEMPTS
  ) {
    attempts += 1;

    const canvas =
      createCanvas(
        image,
        width,
        height
      );

    blob = await canvasToBlob(
      canvas,
      OUTPUT_MIME_TYPE,
      quality
    );

    console.log(
      `📦 Compression attempt ${attempts}:`,
      {
        sizeKB: Math.round(
          blob.size / 1024
        ),

        width,
        height,

        quality: Number(
          quality.toFixed(2)
        ),
      }
    );

    /*
     * Ideal result reached.
     */
    if (
      blob.size <=
      TARGET_IMAGE_SIZE
    ) {
      break;
    }

    /*
     * First reduce quality.
     */
    if (
      quality - QUALITY_STEP >=
      MIN_QUALITY
    ) {
      quality -= QUALITY_STEP;

      continue;
    }

    /*
     * If quality has already reached minimum,
     * reduce dimensions slightly.
     */
    const canResizeFurther =
      width > MIN_IMAGE_WIDTH ||
      height > MIN_IMAGE_HEIGHT;

    if (canResizeFurther) {
      const nextWidth = Math.max(
        MIN_IMAGE_WIDTH,
        Math.round(
          width * RESIZE_STEP
        )
      );

      const nextHeight = Math.max(
        MIN_IMAGE_HEIGHT,
        Math.round(
          height * RESIZE_STEP
        )
      );

      /*
       * Preserve ratio if one dimension has
       * already reached minimum.
       */
      const ratio =
        originalWidth /
        originalHeight;

      if (
        originalWidth >=
        originalHeight
      ) {
        width = nextWidth;

        height = Math.max(
          1,
          Math.round(
            width / ratio
          )
        );
      } else {
        height = nextHeight;

        width = Math.max(
          1,
          Math.round(
            height * ratio
          )
        );
      }

      /*
       * After resize we can slightly restore
       * quality and try again.
       */
      quality = Math.min(
        0.72,
        START_QUALITY
      );

      continue;
    }

    /*
     * Nothing more useful to reduce.
     */
    break;
  }

  if (!blob) {
    throw new Error(
      "Image compression failed."
    );
  }

  const finalSizeKB =
    blob.size / 1024;

  if (
    blob.size >
    MAX_TARGET_SIZE
  ) {
    console.warn(
      "⚠️ Image is still above preferred 80 KB after compression:",
      `${finalSizeKB.toFixed(1)} KB`
    );
  } else {
    console.log(
      "✅ Image compressed below preferred limit:",
      `${finalSizeKB.toFixed(1)} KB`
    );
  }

  return {
    blob,

    width,
    height,

    size: blob.size,

    quality: Number(
      quality.toFixed(2)
    ),

    format: OUTPUT_EXTENSION,

    mimeType:
      OUTPUT_MIME_TYPE,

    originalWidth,
    originalHeight,

    originalSize:
      file.size,

    attempts,
  };
};

// PUBLIC COMPRESS FUNCTION

const compressImage = async (
  file
) => {
  const result =
    await compressImageWithMetadata(
      file
    );

  return result.blob;
};

// GOOGLE DRIVE PUBLIC URL

const createGoogleDrivePublicUrl = (
  fileId
) => {
  if (!fileId) {
    return "";
  }

  return `https://drive.google.com/uc?export=view&id=${encodeURIComponent(
    fileId
  )}`;
};

// GOOGLE DRIVE VIEW URL

const createGoogleDriveViewUrl = (
  fileId
) => {
  if (!fileId) {
    return "";
  }

  return `https://drive.google.com/file/d/${encodeURIComponent(
    fileId
  )}/view`;
};

// GET STABLE IMAGE URL

const getStableImageUrl = (
  data
) => {
  if (!data) {
    return "";
  }

  /*
   * If backend explicitly returns a permanent
   * public URL, always prefer it.
   */
  if (data.publicUrl) {
    return data.publicUrl;
  }

  if (data.driveUrl) {
    return data.driveUrl;
  }

  /*
   * Google Drive file ID is enough to create
   * a public browser-renderable URL.
   *
   * This avoids:
   *
   * /api/upload/image/:fileId
   *
   * for newly uploaded images.
   *
   * Therefore page rendering does not need the
   * Google OAuth refresh token on every image load.
   */
  const fileId =
    data.publicId ||
    data.fileId;

  if (fileId) {
    return createGoogleDrivePublicUrl(
      fileId
    );
  }

  /*
   * Fallback for compatibility with older backend.
   */
  return data.url || "";
};

// UPLOAD IMAGE

const uploadImage = async (
  file
) => {
  try {
    validateImage(file);

    console.log(
      "================================="
    );

    console.log(
      "📷 IMAGE SELECTED"
    );

    console.log({
      name:
        file.name ||
        "image",

      type:
        file.type,

      originalSizeKB:
        Number(
          (
            file.size / 1024
          ).toFixed(1)
        ),
    });

    console.log(
      "================================="
    );

    // Compress

    const compressed =
      await compressImageWithMetadata(
        file
      );

    const safeFileName =
      createSafeFileName(
        file.name ||
          "image",
        OUTPUT_EXTENSION
      );

    // Build upload file

    const compressedFile =
      new File(
        [compressed.blob],

        safeFileName,

        {
          type:
            OUTPUT_MIME_TYPE,

          lastModified:
            Date.now(),
        }
      );

    // FormData

    const formData =
      new FormData();

    formData.append(
      "image",
      compressedFile
    );

    console.log(
      "🚀 Uploading compressed image..."
    );

    /*
     * IMPORTANT:
     *
     * Do not manually add:
     *
     * Content-Type: multipart/form-data
     *
     * Browser must create the multipart boundary.
     *
     * api.js should attach Authorization token.
     */
    const response =
      await api.post(
        "/upload/image",
        formData
      );

    const data =
      response?.data;

    if (!data?.success) {
      throw new Error(
        data?.message ||
          "Image upload failed."
      );
    }

    const publicId =
      data.publicId ||
      data.fileId ||
      "";

    const stableUrl =
      getStableImageUrl(data);

    if (!stableUrl) {
      throw new Error(
        "The server did not return enough information to create the image URL."
      );
    }

    console.log(
      "================================="
    );

    console.log(
      "✅ IMAGE UPLOADED SUCCESSFULLY"
    );

    console.log(
      "Public ID:",
      publicId
    );

    console.log(
      "Stable URL:",
      stableUrl
    );

    console.log(
      "Final browser compression:",
      `${(
        compressed.size /
        1024
      ).toFixed(1)} KB`
    );

    console.log(
      "================================="
    );

    return {
      success: true,

      /*
       * IMPORTANT:
       *
       * AdminPostEditor should save this URL
       * into coverImage/content.
       *
       * For Google Drive uploads this is a
       * public Drive URL instead of backend
       * OAuth image proxy URL.
       */
      url: stableUrl,

      publicUrl:
        stableUrl,

      publicId,

      fileId:
        publicId,

      width:
        data.width ||
        compressed.width,

      height:
        data.height ||
        compressed.height,

      format:
        data.format ||
        compressed.format,

      mimeType:
        data.mimeType ||
        OUTPUT_MIME_TYPE,

      size:
        data.size ||
        compressed.size,

      localCompressedSize:
        compressed.size,

      originalSize:
        file.size,

      filename:
        data.filename ||
        safeFileName,

      webViewLink:
        data.webViewLink ||
        createGoogleDriveViewUrl(
          publicId
        ),

      downloadUrl:
        data.downloadUrl ||
        "",

      /*
       * Backend URL kept only for debugging /
       * backward compatibility.
       */
      backendUrl:
        data.url ||
        "",
    };
  } catch (error) {
    console.error(
      "❌ Image upload error:",
      error
    );

    if (error?.response) {
      console.error(
        "❌ Upload HTTP status:",
        error.response.status
      );

      console.error(
        "❌ Upload backend response:",
        error.response.data
      );
    }

    const message =
      error?.response?.data
        ?.message ||
      error?.message ||
      "Image upload failed.";

    const uploadError =
      new Error(message);

    uploadError.status =
      error?.response?.status ||
      null;

    uploadError.data =
      error?.response?.data ||
      null;

    throw uploadError;
  }
};

// DELETE IMAGE

const deleteImage = async (
  publicId
) => {
  try {
    const cleanPublicId =
      String(
        publicId || ""
      ).trim();

    if (!cleanPublicId) {
      throw new Error(
        "Image public ID is required."
      );
    }

    const encodedPublicId =
      encodeURIComponent(
        cleanPublicId
      );

    console.log(
      "🗑️ Deleting image:",
      cleanPublicId
    );

    const response =
      await api.delete(
        `/upload/image/${encodedPublicId}`
      );

    const data =
      response?.data;

    if (!data?.success) {
      throw new Error(
        data?.message ||
          "Image deletion failed."
      );
    }

    console.log(
      "✅ Image deleted successfully."
    );

    return data;
  } catch (error) {
    console.error(
      "❌ Image delete error:",
      error
    );

    const message =
      error?.response?.data
        ?.message ||
      error?.message ||
      "Image deletion failed.";

    const deleteError =
      new Error(message);

    deleteError.status =
      error?.response?.status ||
      null;

    deleteError.data =
      error?.response?.data ||
      null;

    throw deleteError;
  }
};

// PREVIEW URL

const createPreviewUrl = (
  file
) => {
  if (!file) {
    return "";
  }

  return URL.createObjectURL(
    file
  );
};

// REVOKE PREVIEW

const revokePreviewUrl = (
  url
) => {
  if (
    url &&
    typeof url === "string" &&
    url.startsWith("blob:")
  ) {
    URL.revokeObjectURL(
      url
    );
  }
};

// FILE SIZE FORMATTER

const formatFileSize = (
  bytes
) => {
  if (
    bytes === null ||
    bytes === undefined ||
    Number.isNaN(
      Number(bytes)
    )
  ) {
    return "";
  }

  const size =
    Number(bytes);

  if (size < 1024) {
    return `${size} B`;
  }

  if (
    size <
    1024 * 1024
  ) {
    return `${(
      size / 1024
    ).toFixed(1)} KB`;
  }

  return `${(
    size /
    (1024 * 1024)
  ).toFixed(2)} MB`;
};

// EXPORT

const uploadService = {
  validateImage,

  compressImage,

  uploadImage,

  deleteImage,

  createPreviewUrl,

  revokePreviewUrl,

  createGoogleDrivePublicUrl,

  createGoogleDriveViewUrl,

  getStableImageUrl,

  formatFileSize,
};

export default uploadService;