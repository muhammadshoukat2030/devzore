import api from "./api";

const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

const getPostById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

const getPostBySlug = async (slug) => {
  const response = await api.get(`/posts/${slug}`);
  return response.data;
};

const createPost = async (postData) => {
  const response = await api.post("/posts", postData);
  return response.data;
};

const updatePost = async (id, postData) => {
  const response = await api.put(`/posts/${id}`, postData);
  return response.data;
};

const deletePost = async (id) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
};

export default {
  getPosts,
  getPostById,
  getPostBySlug,
  createPost,
  updatePost,
  deletePost,
};