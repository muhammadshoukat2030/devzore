import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import toast from "react-hot-toast";
import postService from "../../services/postService";

const AdminPosts = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const extractPosts = (data) => {
    if (Array.isArray(data)) return data;

    return data?.posts || data?.data || [];
  };

  const loadPosts = async () => {
    try {
      setLoading(true);

      const data = await postService.getPosts();

      setPosts(extractPosts(data));
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to load posts."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmed) return;

    try {
      await postService.deletePost(id);

      setPosts((prev) =>
        prev.filter(
          (post) =>
            (post._id || post.id) !== id
        )
      );

      toast.success("Post deleted successfully.");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to delete post."
      );
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Posts
          </h1>

          <p className="text-slate-500 mt-1">
            Create and manage your blog posts.
          </p>
        </div>

        <Link
          to="/admin/posts/new"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800 transition"
        >
          <span>+</span>
          Create Post
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                  Post
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                  Category
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                  Date
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-16 text-slate-400"
                  >
                    Loading posts...
                  </td>
                </tr>
              )}

              {!loading &&
                posts.map((post) => {
                  const id =
                    post._id || post.id;

                  return (
                    <tr
                      key={id}
                      className="border-t border-slate-100 hover:bg-slate-50/70"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                            {post.coverImage ? (
                              <img
                                src={post.coverImage}
                                alt={
                                  post.coverImageAlt ||
                                  post.title
                                }
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-400">
                                IMG
                              </div>
                            )}
                          </div>

                          <div>
                            <p className="font-semibold text-slate-900 line-clamp-1">
                              {post.title ||
                                "Untitled"}
                            </p>

                            <p className="text-xs text-slate-400 mt-1">
                              {post.slug || "No slug"}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-500">
                        {post.category?.name ||
                          post.category ||
                          "Uncategorized"}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                            post.status ===
                            "published"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {post.status ||
                            "draft"}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-500">
                        {post.createdAt
                          ? new Date(
                              post.createdAt
                            ).toLocaleDateString()
                          : "—"}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() =>
                              navigate(
                                `/admin/posts/edit/${id}`
                              )
                            }
                            className="px-3 py-2 rounded-lg text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(id)
                            }
                            className="px-3 py-2 rounded-lg text-sm font-medium bg-red-50 hover:bg-red-100 text-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

              {!loading &&
                posts.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-16"
                    >
                      <div className="text-slate-400">
                        <div className="text-4xl mb-3">
                          ✎
                        </div>

                        <p className="font-medium text-slate-600">
                          No posts yet
                        </p>

                        <p className="text-sm mt-1">
                          Create your first blog
                          post.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPosts;