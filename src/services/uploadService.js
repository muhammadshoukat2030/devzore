import api from "./api";

// ======================================================
// CONSTANTS
// ======================================================

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
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
    .replace(/[^a-z0-9-_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return `${safeName || "image"}.jpg`;
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
              new Error("Could not determine image dimensions.")
            );
            return;
          }

          // ==============================================
          // RESIZE WHILE KEEPING ASPECT RATIO
          // ==============================================

          const scale = Math.min(
            MAX_WIDTH / width,
            MAX_HEIGHT / height,
            1
          );

          width = Math.round(width * scale);
          height = Math.round(height * scale);

          const canvas = document.createElement("canvas");

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

          // White background prevents transparent images
          // becoming black when converted to JPEG.
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, width, height);

          ctx.drawImage(
            img,
            0,
            0,
            width,
            height
          );

          // ==============================================
          // CONVERT TO JPEG BLOB
          // ==============================================

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(
                  new Error("Image compression failed.")
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

      img.src = event.target?.result;
    };

    reader.onerror = () => {
      reject(
        new Error("Failed to read the selected image.")
      );
    };

    reader.readAsDataURL(file);
  });
};

// ======================================================
// VALIDATE IMAGE
// ======================================================

const validateImage = (file) => {
  if (!file) {
    throw new Error("Please select an image.");
  }

  if (
    !file.type ||
    !file.type.startsWith("image/")
  ) {
    throw new Error(
      "Only image files are allowed."
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error(
      "Image must be smaller than 5MB."
    );
  }

  return true;
};

// ======================================================
// UPLOAD IMAGE
// ======================================================

const uploadImage = async (file) => {
  try {
    validateImage(file);

    console.log("📷 Selected image:", {
      name: file.name,
      type: file.type,
      size: file.size,
    });

    // ==============================================
    // CLIENT-SIDE OPTIMIZATION
    // ==============================================

    const compressedBlob = await compressImage(
      file,
      DEFAULT_QUALITY
    );

    console.log("📦 Compressed image:", {
      originalSize: file.size,
      compressedSize: compressedBlob.size,
      type: compressedBlob.type,
    });

    // ==============================================
    // CREATE MULTIPART FORM
    // ==============================================

    const formData = new FormData();

    formData.append(
      "image",
      compressedBlob,
      createSafeFileName(file.name)
    );

    // ==============================================
    // UPLOAD
    // ==============================================

    const response = await api.post(
      "/upload/image",
      formData
    );

    const data = response?.data;

    if (!data?.success) {
      throw new Error(
        data?.message || "Image upload failed."
      );
    }

    if (!data?.url) {
      throw new Error(
        "The server did not return an image URL."
      );
    }

    console.log("✅ Image uploaded:", data);

    return data;
  } catch (error) {
    console.error(
      "❌ Image upload error:",
      error
    );

    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Image upload failed.";

    const uploadError = new Error(message);

    uploadError.status =
      error?.response?.status || null;

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

    const response = await api.delete(
      `/upload/image/${encodedPublicId}`
    );

    if (!response?.data?.success) {
      throw new Error(
        response?.data?.message ||
          "Image deletion failed."
      );
    }

    return response.data;
  } catch (error) {
    console.error(
      "❌ Image delete error:",
      error
    );

    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Image deletion failed.";

    throw new Error(message);
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