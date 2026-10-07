import api from "./api";

// ======================================================
// HELPERS
// ======================================================

const requireValue = (
  value,
  message
) => {
  const cleanValue =
    String(value || "").trim();

  if (!cleanValue) {
    throw new Error(message);
  }

  return cleanValue;
};

// ======================================================
// NORMALIZE PAGE
// ======================================================

const normalizePage = (
  value,
  fallback = 1
) => {
  const number =
    Number(value);

  if (
    !Number.isFinite(number) ||
    number < 1
  ) {
    return fallback;
  }

  return Math.floor(number);
};

// ======================================================
// NORMALIZE LIMIT
// ======================================================

const normalizeLimit = (
  value,
  fallback = 20
) => {
  const number =
    Number(value);

  if (
    !Number.isFinite(number) ||
    number < 1
  ) {
    return fallback;
  }

  return Math.min(
    Math.floor(number),
    100
  );
};

// ======================================================
// CLEAN FILTERS
// ======================================================

const cleanFilters = (
  filters = {}
) => {
  if (
    !filters ||
    typeof filters !== "object" ||
    Array.isArray(filters)
  ) {
    return {};
  }

  const cleaned = {};

  Object.entries(filters).forEach(
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
// VALIDATE POST PAYLOAD
// ======================================================

const validatePostData = (
  postData
) => {
  if (
    !postData ||
    typeof postData !== "object" ||
    Array.isArray(postData)
  ) {
    throw new Error(
      "Post data is required."
    );
  }

  if (
    !String(
      postData.title || ""
    ).trim()
  ) {
    throw new Error(
      "Post title is required."
    );
  }

  if (
    !String(
      postData.excerpt || ""
    ).trim()
  ) {
    throw new Error(
      "Post excerpt is required."
    );
  }

  if (
    !String(
      postData.content || ""
    ).trim()
  ) {
    throw new Error(
      "Post content is required."
    );
  }

  if (
    !String(
      postData.category || ""
    ).trim()
  ) {
    throw new Error(
      "Post category is required."
    );
  }

  return true;
};

// ======================================================
// PUBLIC POSTS
// ======================================================

// GET /api/posts

const getPosts = async (
  page = 1,
  limit = 20,
  filters = {}
) => {
  const params = {
    page: normalizePage(
      page,
      1
    ),

    limit: normalizeLimit(
      limit,
      20
    ),

    ...cleanFilters(
      filters
    ),
  };

  const response =
    await api.get(
      "/posts",
      {
        params,
      }
    );

  return response.data;
};

// ======================================================
// GET SINGLE POST
// ======================================================

// GET /api/posts/:slug

const getPostBySlug = async (
  slug
) => {
  const cleanSlug =
    requireValue(
      slug,
      "Blog slug is required."
    );

  const response =
    await api.get(
      `/posts/${encodeURIComponent(
        cleanSlug
      )}`
    );

  return response.data;
};

// ======================================================
// FEATURED POSTS
// ======================================================

// GET /api/posts/featured

const getFeaturedPosts =
  async () => {
    const response =
      await api.get(
        "/posts/featured"
      );

    return response.data;
  };

// ======================================================
// LATEST POSTS
// ======================================================

// GET /api/posts/latest

const getLatestPosts =
  async () => {
    const response =
      await api.get(
        "/posts/latest"
      );

    return response.data;
  };

// ======================================================
// COMMENTS
// ======================================================
//
// IMPORTANT:
//
// server.js currently mounts:
//
// app.use("/api/comments", commentRoutes)
//
// Is liye comments ka exact URL backend/routes/comments.js
// dekh kar final karna chahiye.
//
// Current old implementation:
// /api/posts/:slug/comments
//
// posts.js mein ye routes موجود nahi hain.
//
// Filhal functions rakhe hain, lekin next comments.js
// check karna zaroori hai.
// ======================================================

const getComments = async (
  slug
) => {
  const cleanSlug =
    requireValue(
      slug,
      "Blog slug is required."
    );

  /*
   * TEMPORARY compatibility path.
   *
   * comments.js inspect karne ke baad isko exact
   * backend route se match karenge.
   */
  const response =
    await api.get(
      `/posts/${encodeURIComponent(
        cleanSlug
      )}/comments`
    );

  return response.data;
};

// ======================================================
// ADD COMMENT
// ======================================================

const addComment = async (
  slug,
  commentData
) => {
  const cleanSlug =
    requireValue(
      slug,
      "Blog slug is required."
    );

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

  /*
   * TEMPORARY compatibility path.
   *
   * Exact route comments.js inspect karne ke baad
   * final hogi.
   */
  const response =
    await api.post(
      `/posts/${encodeURIComponent(
        cleanSlug
      )}/comments`,
      commentData
    );

  return response.data;
};

// ======================================================
// ADMIN POSTS
// ======================================================

// GET /api/posts/admin/all

const getAdminPosts = async (
  page = 1,
  limit = 10,
  status = "",
  search = ""
) => {
  const params = {
    page: normalizePage(
      page,
      1
    ),

    limit: normalizeLimit(
      limit,
      10
    ),
  };

  const cleanStatus =
    String(
      status || ""
    ).trim();

  const cleanSearch =
    String(
      search || ""
    ).trim();

  if (cleanStatus) {
    params.status =
      cleanStatus;
  }

  if (cleanSearch) {
    params.search =
      cleanSearch;
  }

  const response =
    await api.get(
      "/posts/admin/all",
      {
        params,
      }
    );

  return response.data;
};

// ======================================================
// ADMIN SINGLE POST
// ======================================================

// GET /api/posts/admin/:id

const getAdminPostById =
  async (id) => {
    const cleanId =
      requireValue(
        id,
        "Post ID is required."
      );

    const response =
      await api.get(
        `/posts/admin/${encodeURIComponent(
          cleanId
        )}`
      );

    return response.data;
  };

// ======================================================
// CREATE POST
// ======================================================

// POST /api/posts

const createPost = async (
  postData
) => {
  validatePostData(
    postData
  );

  const response =
    await api.post(
      "/posts",
      postData
    );

  return response.data;
};

// ======================================================
// UPDATE POST
// ======================================================

// PUT /api/posts/:id

const updatePost = async (
  id,
  postData
) => {
  const cleanId =
    requireValue(
      id,
      "Post ID is required."
    );

  validatePostData(
    postData
  );

  const response =
    await api.put(
      `/posts/${encodeURIComponent(
        cleanId
      )}`,
      postData
    );

  return response.data;
};

// ======================================================
// DELETE POST
// ======================================================

// DELETE /api/posts/:id

const deletePost = async (
  id
) => {
  const cleanId =
    requireValue(
      id,
      "Post ID is required."
    );

  const response =
    await api.delete(
      `/posts/${encodeURIComponent(
        cleanId
      )}`
    );

  return response.data;
};

// ======================================================
// TOGGLE FEATURED
// ======================================================

// PATCH /api/posts/:id/toggle-featured

const toggleFeatured = async (
  id
) => {
  const cleanId =
    requireValue(
      id,
      "Post ID is required."
    );

  const response =
    await api.patch(
      `/posts/${encodeURIComponent(
        cleanId
      )}/toggle-featured`
    );

  return response.data;
};

// ======================================================
// SERVICE
// ======================================================

const postService = {
  // PUBLIC
  getPosts,
  getPostBySlug,
  getFeaturedPosts,
  getLatestPosts,

  // COMMENTS
  getComments,
  addComment,

  // ADMIN
  getAdminPosts,
  getAdminPostById,
  createPost,
  updatePost,
  deletePost,
  toggleFeatured,
};

export default postService;