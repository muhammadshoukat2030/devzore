import api from "./api";

// ======================================================
// CONSTANTS
// ======================================================

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;
const DEFAULT_QUALITY = 0.82;

// ======================================================
// CREATE SAFE FILE NAME
// ======================================================

const createSafeFileName = (fileName = "image") => {
  const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

  const safeName = nameWithoutExtension
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return `${safeName || "image"}.jpg`;
};

// ======================================================
// VALIDATE IMAGE
// ======================================================

const validateImage = (file) => {
  if (!file) {
    throw new Error("Please select an image.");
  }

  if (!file.type || !file.type.startsWith("image/")) {
    throw new Error("Only image files are allowed.");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Image must be smaller than 5MB.");
  }

  return true;
};

// ======================================================
// COMPRESS IMAGE
// ======================================================

const compressImage = async (
  file,
  quality = DEFAULT_QUALITY
) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("Please select an image."));
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();

      img.onload = () => {
        try {
          let width = img.naturalWidth || img.width;
          let height = img.naturalHeight || img.height;

          if (!width || !height) {
            reject(
              new Error(
                "Could not determine image dimensions."
              )
            );
            return;
          }

          // ------------------------------------------
          // Resize while preserving aspect ratio
          // ------------------------------------------

          const scale = Math.min(
            MAX_WIDTH / width,
            MAX_HEIGHT / height,
            1
          );

          width = Math.round(width * scale);
          height = Math.round(height * scale);

          const canvas =
            document.createElement("canvas");

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");

          if (!ctx) {
            reject(
              new Error(
                "Your browser could not process the selected image."
              )
            );
            return;
          }

          // White background prevents transparency
          // becoming black after JPEG conversion.
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, width, height);

          ctx.drawImage(
            img,
            0,
            0,
            width,
            height
          );

          // ------------------------------------------
          // Convert to JPEG
          // ------------------------------------------

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
            "image/jpeg",
            quality
          );
        } catch (error) {
          reject(
            new Error(
              error?.message ||
                "Failed to process selected image."
            )
          );
        }
      };

      img.onerror = () => {
        reject(
          new Error(
            "The selected image could not be loaded."
          )
        );
      };

      if (!event.target?.result) {
        reject(
          new Error(
            "Failed to read the selected image."
          )
        );
        return;
      }

      img.src = event.target.result;
    };

    reader.onerror = () => {
      reject(
        new Error(
          "Failed to read the selected image."
        )
      );
    };

    reader.readAsDataURL(file);
  });
};

// ======================================================
// UPLOAD IMAGE
// ======================================================

const uploadImage = async (file) => {
  try {
    // ------------------------------------------
    // Validate
    // ------------------------------------------

    validateImage(file);

    console.log("📷 Selected image:", {
      name: file.name,
      type: file.type,
      size: file.size,
    });

    // ------------------------------------------
    // Compress image
    // ------------------------------------------

    const compressedBlob =
      await compressImage(
        file,
        DEFAULT_QUALITY
      );

    console.log("📦 Compressed image:", {
      originalSize: file.size,
      compressedSize: compressedBlob.size,
      type: compressedBlob.type,
    });

    // ------------------------------------------
    // Create upload file
    // ------------------------------------------

    const safeFileName =
      createSafeFileName(file.name);

    const compressedFile = new File(
      [compressedBlob],
      safeFileName,
      {
        type: "image/jpeg",
        lastModified: Date.now(),
      }
    );

    // ------------------------------------------
    // FormData
    // ------------------------------------------

    const formData = new FormData();

    formData.append(
      "image",
      compressedFile
    );

    console.log(
      "🚀 Uploading image through authenticated API..."
    );

    // IMPORTANT:
    // Do NOT manually set Content-Type here.
    //
    // api.js will:
    // 1. attach Authorization: Bearer <JWT>
    // 2. allow browser to generate multipart boundary

    const response = await api.post(
      "/upload/image",
      formData
    );

    const data = response?.data;

    // ------------------------------------------
    // Validate server response
    // ------------------------------------------

    if (!data?.success) {
      throw new Error(
        data?.message ||
          "Image upload failed."
      );
    }

    if (!data?.url) {
      throw new Error(
        "The server did not return an image URL."
      );
    }

    console.log(
      "✅ Image uploaded successfully:",
      data
    );

    return {
      success: true,

      url: data.url,

      publicId:
        data.publicId ||
        data.filename ||
        "",

      width:
        data.width ||
        null,

      height:
        data.height ||
        null,

      format:
        data.format ||
        "webp",
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
      error?.response?.data?.message ||
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

// ======================================================
// DELETE IMAGE
// ======================================================

const deleteImage = async (publicId) => {
  try {
    if (!publicId) {
      throw new Error(
        "Image public ID is required."
      );
    }

    const encodedPublicId =
      encodeURIComponent(publicId);

    console.log(
      "🗑️ Deleting image:",
      publicId
    );

    const response = await api.delete(
      `/upload/image/${encodedPublicId}`
    );

    const data = response?.data;

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
      error?.response?.data?.message ||
      error?.message ||
      "Image deletion failed.";

    const deleteError =
      new Error(message);

    deleteError.status =
      error?.response?.status ||
      null;

    throw deleteError;
  }
};

// ======================================================
// CREATE IMAGE PREVIEW
// ======================================================

const createPreviewUrl = (file) => {
  if (!file) {
    return "";
  }

  return URL.createObjectURL(file);
};

// ======================================================
// REVOKE IMAGE PREVIEW
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
// EXPORT
// ======================================================

const uploadService = {
  compressImage,
  validateImage,
  uploadImage,
  deleteImage,
  createPreviewUrl,
  revokePreviewUrl,
};

export default uploadService;