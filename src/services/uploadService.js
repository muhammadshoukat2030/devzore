import api from "./api";

// ======================================================
// CONFIG
// ======================================================

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const MAX_IMAGE_WIDTH = 1600;
const MAX_IMAGE_HEIGHT = 1600;

const TARGET_IMAGE_SIZE = 70 * 1024; // preferred ~70 KB
const MAX_TARGET_SIZE = 80 * 1024; // preferred maximum ~80 KB

const START_QUALITY = 0.82;
const MIN_QUALITY = 0.4;
const QUALITY_STEP = 0.07;

const RESIZE_STEP = 0.88;
const MIN_LONG_SIDE = 480;

const MAX_COMPRESSION_ATTEMPTS = 20;

const OUTPUT_MIME_TYPE = "image/webp";
const OUTPUT_EXTENSION = "webp";

// ======================================================
// PUBLIC BACKEND
// ======================================================

/*
 * IMPORTANT:
 *
 * MongoDB mein localhost image URL save nahi honi chahiye.
 *
 * Production website aur localhost dono same stable
 * production image URL use kar sakte hain.
 *
 * Agar future mein backend domain change ho:
 *
 * VITE_PUBLIC_BACKEND_URL=https://api.devzore.com
 *
 * frontend environment variable add kar dena.
 */

const DEFAULT_PUBLIC_BACKEND_URL =
  "https://devzore-backend.vercel.app";

// ======================================================
// SUPPORTED TYPES
// ======================================================

const SUPPORTED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/avif",
]);

// ======================================================
// HELPERS
// ======================================================

const cleanBaseUrl = (value = "") => {
  return String(value || "")
    .trim()
    .replace(/\/+$/, "")
    .replace(/\/api$/i, "");
};

const getPublicBackendUrl = () => {
  const configured =
    import.meta.env.VITE_PUBLIC_BACKEND_URL ||
    "";

  if (configured.trim()) {
    return cleanBaseUrl(configured);
  }

  return DEFAULT_PUBLIC_BACKEND_URL;
};

// ======================================================
// SAFE FILE NAME
// ======================================================

const createSafeFileName = (
  fileName = "image",
  extension = OUTPUT_EXTENSION
) => {
  const nameWithoutExtension = String(
    fileName || "image"
  )
    .replace(/\.[^/.]+$/, "")
    .trim();

  const safeName = nameWithoutExtension
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return `${safeName || "image"}.${extension}`;
};

// ======================================================
// FILE VALIDATION
// ======================================================

const validateImage = (file) => {
  if (!file) {
    throw new Error("Please select an image.");
  }

  const isFile =
    typeof File !== "undefined" &&
    file instanceof File;

  const isBlob =
    typeof Blob !== "undefined" &&
    file instanceof Blob;

  if (!isFile && !isBlob) {
    throw new Error("Invalid image file.");
  }

  const type = String(file.type || "")
    .trim()
    .toLowerCase();

  if (!type || !type.startsWith("image/")) {
    throw new Error(
      "Only image files are allowed."
    );
  }

  if (type === "image/svg+xml") {
    throw new Error(
      "SVG images are not supported. Please use JPG, PNG, WebP or AVIF."
    );
  }

  if (!SUPPORTED_IMAGE_TYPES.has(type)) {
    throw new Error(
      "Unsupported image format. Please use JPG, PNG, WebP or AVIF."
    );
  }

  if (!file.size) {
    throw new Error(
      "The selected image is empty."
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error(
      "Image must be 5 MB or smaller."
    );
  }

  return true;
};

// ======================================================
// LOAD IMAGE
// ======================================================

const loadImage = (file) => {
  return new Promise((resolve, reject) => {
    const objectUrl =
      URL.createObjectURL(file);

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

// ======================================================
// INITIAL DIMENSIONS
// ======================================================

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

// ======================================================
// CANVAS
// ======================================================

const createCanvas = (
  image,
  width,
  height
) => {
  const canvas =
    document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d", {
    alpha: true,
  });

  if (!context) {
    throw new Error(
      "Your browser could not process the selected image."
    );
  }

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

// ======================================================
// CANVAS -> BLOB
// ======================================================

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

// ======================================================
// OPTIONAL BROWSER COMPRESSION
// ======================================================

const compressImageWithMetadata = async (
  file
) => {
  validateImage(file);

  const image = await loadImage(file);

  const originalWidth =
    image.naturalWidth || image.width;

  const originalHeight =
    image.naturalHeight || image.height;

  if (!originalWidth || !originalHeight) {
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
    attempts < MAX_COMPRESSION_ATTEMPTS
  ) {
    attempts += 1;

    const canvas = createCanvas(
      image,
      width,
      height
    );

    blob = await canvasToBlob(
      canvas,
      OUTPUT_MIME_TYPE,
      quality
    );

    if (blob.size <= TARGET_IMAGE_SIZE) {
      break;
    }

    // First lower quality
    if (
      quality - QUALITY_STEP >=
      MIN_QUALITY
    ) {
      quality -= QUALITY_STEP;
      continue;
    }

    // Then reduce dimensions
    const longSide = Math.max(
      width,
      height
    );

    if (longSide <= MIN_LONG_SIDE) {
      break;
    }

    const newWidth = Math.max(
      1,
      Math.round(width * RESIZE_STEP)
    );

    const newHeight = Math.max(
      1,
      Math.round(height * RESIZE_STEP)
    );

    width = newWidth;
    height = newHeight;

    quality = 0.72;
  }

  if (!blob) {
    throw new Error(
      "Image compression failed."
    );
  }

  if (blob.size > MAX_TARGET_SIZE) {
    console.warn(
      `Image remains above preferred size: ${(
        blob.size / 1024
      ).toFixed(1)} KB`
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

    mimeType: OUTPUT_MIME_TYPE,

    originalWidth,
    originalHeight,

    originalSize: file.size,

    attempts,
  };
};

// ======================================================
// PUBLIC COMPRESS FUNCTION
// ======================================================

const compressImage = async (file) => {
  const result =
    await compressImageWithMetadata(file);

  return result.blob;
};

// ======================================================
// GOOGLE DRIVE FILE ID EXTRACTION
// ======================================================

const extractGoogleDriveFileId = (
  value
) => {
  if (!value) {
    return "";
  }

  const raw = String(value).trim();

  if (!raw) {
    return "";
  }

  // Already a plain Drive ID
  if (
    /^[a-zA-Z0-9_-]{10,}$/.test(raw)
  ) {
    return raw;
  }

  // Backend proxy URL
  const backendMatch = raw.match(
    /\/api\/upload\/image\/([a-zA-Z0-9_-]+)/i
  );

  if (backendMatch?.[1]) {
    return backendMatch[1];
  }

  // drive.google.com/file/d/FILE_ID/view
  const driveFileMatch = raw.match(
    /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/i
  );

  if (driveFileMatch?.[1]) {
    return driveFileMatch[1];
  }

  // Google Drive URLs containing ?id=
  try {
    const parsed = new URL(raw);

    const id = parsed.searchParams.get("id");

    if (
      id &&
      /^[a-zA-Z0-9_-]{10,}$/.test(id)
    ) {
      return id;
    }
  } catch {
    // Not a full URL.
  }

  return "";
};

// ======================================================
// GOOGLE DRIVE DIRECT URL
// ======================================================

const createGoogleDrivePublicUrl = (
  fileId
) => {
  const cleanFileId =
    extractGoogleDriveFileId(fileId);

  if (!cleanFileId) {
    return "";
  }

  return `https://drive.google.com/uc?export=view&id=${encodeURIComponent(
    cleanFileId
  )}`;
};

// ======================================================
// GOOGLE DRIVE VIEW URL
// ======================================================

const createGoogleDriveViewUrl = (
  fileId
) => {
  const cleanFileId =
    extractGoogleDriveFileId(fileId);

  if (!cleanFileId) {
    return "";
  }

  return `https://drive.google.com/file/d/${encodeURIComponent(
    cleanFileId
  )}/view`;
};

// ======================================================
// STABLE DEVZORE IMAGE URL
// ======================================================

const createBackendImageUrl = (
  fileId
) => {
  const cleanFileId =
    extractGoogleDriveFileId(fileId);

  if (!cleanFileId) {
    return "";
  }

  return `${getPublicBackendUrl()}/api/upload/image/${encodeURIComponent(
    cleanFileId
  )}`;
};

// ======================================================
// RESOLVE ANY EXISTING IMAGE URL
// ======================================================

/*
 * Supports:
 *
 * Google Drive URL
 * localhost backend URL
 * production backend URL
 * raw Drive file ID
 *
 * Result:
 *
 * https://devzore-backend.vercel.app/api/upload/image/FILE_ID
 */

const resolveImageUrl = (value) => {
  if (!value) {
    return "";
  }

  const fileId =
    extractGoogleDriveFileId(value);

  if (fileId) {
    return createBackendImageUrl(fileId);
  }

  const raw = String(value).trim();

  if (!raw) {
    return "";
  }

  /*
   * Non-Google external images are left unchanged.
   */
  return raw;
};

// ======================================================
// GET STABLE IMAGE URL FROM UPLOAD RESPONSE
// ======================================================

const getStableImageUrl = (data) => {
  if (!data) {
    return "";
  }

  if (typeof data === "string") {
    return resolveImageUrl(data);
  }

  const fileId =
    data.publicId ||
    data.fileId ||
    extractGoogleDriveFileId(data.url) ||
    extractGoogleDriveFileId(
      data.publicUrl
    ) ||
    extractGoogleDriveFileId(
      data.driveUrl
    ) ||
    extractGoogleDriveFileId(
      data.webViewLink
    ) ||
    extractGoogleDriveFileId(
      data.downloadUrl
    );

  /*
   * File ID is preferred because the DevZore backend
   * proxy is more reliable than Drive direct URLs.
   */
  if (fileId) {
    return createBackendImageUrl(fileId);
  }

  if (data.url) {
    return resolveImageUrl(data.url);
  }

  if (data.publicUrl) {
    return resolveImageUrl(
      data.publicUrl
    );
  }

  return "";
};

// ======================================================
// UPLOAD IMAGE
// ======================================================

const uploadImage = async (file) => {
  try {
    validateImage(file);

    const formData = new FormData();

    /*
     * IMPORTANT:
     *
     * Backend already uses Sharp and performs the final
     * WebP compression.
     *
     * So we send the original image here.
     *
     * This avoids:
     * Browser compression -> backend compression
     *
     * which would otherwise compress the image twice
     * and reduce quality unnecessarily.
     */

    formData.append(
      "image",
      file,
      file.name || "image"
    );

    /*
     * Do NOT manually set multipart Content-Type.
     * Browser/Axios must generate the boundary.
     */

    const response = await api.post(
      "/upload/image",
      formData
    );

    const data = response?.data;

    if (!data?.success) {
      throw new Error(
        data?.message ||
          "Image upload failed."
      );
    }

    const publicId =
      data.publicId ||
      data.fileId ||
      extractGoogleDriveFileId(
        data.url
      ) ||
      "";

    if (!publicId) {
      throw new Error(
        "Google Drive file ID was not returned by the server."
      );
    }

    /*
     * PERMANENT URL
     *
     * This is what should be stored in:
     *
     * coverImage
     * article content <img src="">
     * MongoDB
     */

    const stableUrl =
      createBackendImageUrl(publicId);

    if (!stableUrl) {
      throw new Error(
        "Could not create the permanent image URL."
      );
    }

    /*
     * IMMEDIATE LOCAL PREVIEW
     *
     * Backend response may contain:
     *
     * http://localhost:5000/api/upload/image/FILE_ID
     *
     * AdminPostEditor can optionally use previewUrl
     * immediately after upload.
     *
     * But persistent MongoDB value should use `url`.
     */

    const previewUrl =
      data.url || stableUrl;

    return {
      success: true,

      // Permanent production-safe URL
      url: stableUrl,

      publicUrl: stableUrl,

      stableUrl,

      // Immediate editor preview
      previewUrl,

      publicId,

      fileId: publicId,

      width: data.width || null,

      height: data.height || null,

      format:
        data.format ||
        OUTPUT_EXTENSION,

      mimeType:
        data.mimeType ||
        OUTPUT_MIME_TYPE,

      size: data.size || null,

      originalSize:
        data.originalSize ||
        file.size,

      quality:
        data.quality || null,

      filename:
        data.filename ||
        createSafeFileName(
          file.name || "image"
        ),

      // Google Drive references
      driveUrl:
        data.driveUrl ||
        createGoogleDrivePublicUrl(
          publicId
        ),

      webViewLink:
        data.webViewLink ||
        createGoogleDriveViewUrl(
          publicId
        ),

      webContentLink:
        data.webContentLink || "",

      downloadUrl:
        data.downloadUrl || "",

      /*
       * Original backend-generated URL.
       *
       * Useful only for debugging / immediate local
       * preview.
       */
      backendUrl:
        data.url || "",
    };
  } catch (error) {
    console.error(
      "Image upload error:",
      error
    );

    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Image upload failed.";

    const uploadError =
      new Error(message);

    uploadError.status =
      error?.response?.status || null;

    uploadError.code =
      error?.response?.data?.code ||
      null;

    uploadError.data =
      error?.response?.data || null;

    throw uploadError;
  }
};

// ======================================================
// DELETE IMAGE
// ======================================================

const deleteImage = async (
  publicIdOrUrl
) => {
  try {
    const publicId =
      extractGoogleDriveFileId(
        publicIdOrUrl
      );

    if (!publicId) {
      throw new Error(
        "Image public ID is required."
      );
    }

    const response = await api.delete(
      `/upload/image/${encodeURIComponent(
        publicId
      )}`
    );

    const data = response?.data;

    if (!data?.success) {
      throw new Error(
        data?.message ||
          "Image deletion failed."
      );
    }

    return data;
  } catch (error) {
    console.error(
      "Image delete error:",
      error
    );

    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Image deletion failed.";

    const deleteError =
      new Error(message);

    deleteError.status =
      error?.response?.status || null;

    deleteError.code =
      error?.response?.data?.code ||
      null;

    deleteError.data =
      error?.response?.data || null;

    throw deleteError;
  }
};

// ======================================================
// PREVIEW URL
// ======================================================

const createPreviewUrl = (file) => {
  if (!file) {
    return "";
  }

  return URL.createObjectURL(file);
};

// ======================================================
// REVOKE PREVIEW URL
// ======================================================

const revokePreviewUrl = (url) => {
  if (
    url &&
    typeof url === "string" &&
    url.startsWith("blob:")
  ) {
    URL.revokeObjectURL(url);
  }
};

// ======================================================
// FILE SIZE FORMATTER
// ======================================================

const formatFileSize = (bytes) => {
  if (
    bytes === null ||
    bytes === undefined ||
    Number.isNaN(Number(bytes))
  ) {
    return "";
  }

  const size = Number(bytes);

  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(
      size / 1024
    ).toFixed(1)} KB`;
  }

  return `${(
    size /
    (1024 * 1024)
  ).toFixed(2)} MB`;
};

// ======================================================
// EXPORT
// ======================================================

const uploadService = {
  validateImage,

  // Optional utility
  compressImage,

  uploadImage,
  deleteImage,

  createPreviewUrl,
  revokePreviewUrl,

  extractGoogleDriveFileId,

  createGoogleDrivePublicUrl,
  createGoogleDriveViewUrl,

  createBackendImageUrl,

  resolveImageUrl,
  getStableImageUrl,

  formatFileSize,
};

export default uploadService;