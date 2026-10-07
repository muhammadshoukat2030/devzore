import api from "./api";

// ======================================================
// HELPERS
// ======================================================

const requireId = (
  value,
  message = "ID is required."
) => {
  const cleanValue =
    String(value || "").trim();

  if (!cleanValue) {
    throw new Error(message);
  }

  return cleanValue;
};

// ======================================================
// CLEAN QUERY PARAMS
// ======================================================

const cleanParams = (
  params = {}
) => {
  if (
    !params ||
    typeof params !== "object" ||
    Array.isArray(params)
  ) {
    return {};
  }

  const cleaned = {};

  Object.entries(params).forEach(
    ([key, value]) => {
      if (
        value === undefined ||
        value === null ||
        value === ""
      ) {
        return;
      }

      if (
        typeof value === "string"
      ) {
        const trimmed =
          value.trim();

        if (!trimmed) {
          return;
        }

        cleaned[key] =
          trimmed;

        return;
      }

      cleaned[key] =
        value;
    }
  );

  return cleaned;
};

// ======================================================
// VALIDATE COMMENT DATA
// ======================================================

const validateCommentData = (
  commentData
) => {
  if (
    !commentData ||
    typeof commentData !==
      "object" ||
    Array.isArray(
      commentData
    )
  ) {
    throw new Error(
      "Comment data is required."
    );
  }

  const post =
    String(
      commentData.post || ""
    ).trim();

  const name =
    String(
      commentData.name || ""
    ).trim();

  const email =
    String(
      commentData.email || ""
    ).trim();

  const content =
    String(
      commentData.content || ""
    ).trim();

  if (!post) {
    throw new Error(
      "Post ID is required."
    );
  }

  if (!name) {
    throw new Error(
      "Name is required."
    );
  }

  if (
    name.length < 2
  ) {
    throw new Error(
      "Name must be at least 2 characters."
    );
  }

  if (
    name.length > 60
  ) {
    throw new Error(
      "Name cannot exceed 60 characters."
    );
  }

  if (!email) {
    throw new Error(
      "Email is required."
    );
  }

  /*
   * Practical frontend email validation.
   * Backend still remains source of truth.
   */
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !emailRegex.test(email)
  ) {
    throw new Error(
      "Please enter a valid email address."
    );
  }

  if (
    email.length > 120
  ) {
    throw new Error(
      "Email cannot exceed 120 characters."
    );
  }

  if (!content) {
    throw new Error(
      "Comment is required."
    );
  }

  if (
    content.length < 10
  ) {
    throw new Error(
      "Comment must be at least 10 characters."
    );
  }

  if (
    content.length > 500
  ) {
    throw new Error(
      "Comment cannot exceed 500 characters."
    );
  }

  return {
    post,

    name,

    email:
      email.toLowerCase(),

    content,
  };
};

// ======================================================
// ADMIN - GET ALL COMMENTS
//
// GET /api/comments/admin/all
//
// Supported:
//
// ?approved=true
// ?spam=false
// ?page=1
// ?limit=20
// ======================================================

const getComments = async (
  params = {}
) => {
  const response =
    await api.get(
      "/comments/admin/all",
      {
        params:
          cleanParams(
            params
          ),
      }
    );

  return response.data;
};

// ======================================================
// ADMIN - APPROVE COMMENT
//
// PATCH /api/comments/:id/approve
// ======================================================

const approveComment = async (
  id
) => {
  const cleanId =
    requireId(
      id,
      "Comment ID is required."
    );

  const response =
    await api.patch(
      `/comments/${encodeURIComponent(
        cleanId
      )}/approve`
    );

  return response.data;
};

// ======================================================
// ADMIN - MARK COMMENT AS SPAM
//
// PATCH /api/comments/:id/spam
// ======================================================

const markCommentAsSpam =
  async (id) => {
    const cleanId =
      requireId(
        id,
        "Comment ID is required."
      );

    const response =
      await api.patch(
        `/comments/${encodeURIComponent(
          cleanId
        )}/spam`
      );

    return response.data;
  };

// ======================================================
// ADMIN - DELETE COMMENT
//
// DELETE /api/comments/:id
// ======================================================

const deleteComment = async (
  id
) => {
  const cleanId =
    requireId(
      id,
      "Comment ID is required."
    );

  const response =
    await api.delete(
      `/comments/${encodeURIComponent(
        cleanId
      )}`
    );

  return response.data;
};

// ======================================================
// PUBLIC - GET APPROVED COMMENTS
//
// GET /api/comments/:postId
// ======================================================

const getPostComments =
  async (postId) => {
    const cleanPostId =
      requireId(
        postId,
        "Post ID is required."
      );

    const response =
      await api.get(
        `/comments/${encodeURIComponent(
          cleanPostId
        )}`
      );

    return response.data;
  };

// ======================================================
// PUBLIC - CREATE COMMENT
//
// POST /api/comments
//
// {
//   post: "...",
//   name: "...",
//   email: "...",
//   content: "..."
// }
// ======================================================

const createComment = async (
  commentData
) => {
  const payload =
    validateCommentData(
      commentData
    );

  const response =
    await api.post(
      "/comments",
      payload
    );

  return response.data;
};

// ======================================================
// SERVICE
// ======================================================

const commentService = {
  // ADMIN
  getComments,

  approveComment,

  markCommentAsSpam,

  deleteComment,

  // PUBLIC
  getPostComments,

  createComment,
};

// ======================================================
// EXPORT
// ======================================================

export default commentService;