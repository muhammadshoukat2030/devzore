import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import commentService from "../../services/commentService";

const AdminComments = () => {
  const [comments, setComments] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const loadComments = async () => {
    try {
      setLoading(true);

      const data =
        await commentService.getComments();

      const list = Array.isArray(data)
        ? data
        : data?.comments ||
          data?.data ||
          [];

      setComments(list);
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to load comments."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Delete this comment?"
      )
    ) {
      return;
    }

    try {
      await commentService.deleteComment(
        id
      );

      setComments((prev) =>
        prev.filter(
          (comment) =>
            (comment._id ||
              comment.id) !== id
        )
      );

      toast.success(
        "Comment deleted successfully."
      );
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to delete comment."
      );
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Comments
        </h1>

        <p className="text-slate-500 mt-1">
          Manage comments submitted by visitors.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-slate-400">
            Loading comments...
          </div>
        ) : comments.length === 0 ? (
          <div className="py-16 text-center text-slate-400">
            No comments found.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {comments.map((comment) => {
              const id =
                comment._id ||
                comment.id;

              return (
                <div
                  key={id}
                  className="p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-semibold text-slate-900">
                          {comment.name ||
                            "Anonymous"}
                        </h3>

                        {comment.email && (
                          <span className="text-xs text-slate-400">
                            {comment.email}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-slate-700 mt-3 leading-6">
                        {comment.comment ||
                          comment.content ||
                          "No comment content"}
                      </p>

                      {comment.createdAt && (
                        <p className="text-xs text-slate-400 mt-3">
                          {new Date(
                            comment.createdAt
                          ).toLocaleString()}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() =>
                        handleDelete(id)
                      }
                      className="self-start px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminComments;