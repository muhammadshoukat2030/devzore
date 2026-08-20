import api from "./api";

const getComments = async () => {
  const response = await api.get("/comments");
  return response.data;
};

const updateComment = async (id, data) => {
  const response = await api.put(`/comments/${id}`, data);
  return response.data;
};

const deleteComment = async (id) => {
  const response = await api.delete(`/comments/${id}`);
  return response.data;
};

export default {
  getComments,
  updateComment,
  deleteComment,
};