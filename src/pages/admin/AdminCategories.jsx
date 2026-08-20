import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import categoryService from "../../services/categoryService";

const AdminCategories = () => {
  const [categories, setCategories] =
    useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const loadCategories = async () => {
    try {
      setLoading(true);

      const data =
        await categoryService.getCategories();

      const list = Array.isArray(data)
        ? data
        : data?.categories ||
          data?.data ||
          [];

      setCategories(list);
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to load categories."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error(
        "Category name is required."
      );
      return;
    }

    try {
      const data =
        await categoryService.createCategory({
          name,
          description,
        });

      const newCategory =
        data?.category ||
        data?.data ||
        data;

      setCategories((prev) => [
        newCategory,
        ...prev,
      ]);

      setName("");
      setDescription("");

      toast.success(
        "Category created successfully."
      );
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to create category."
      );
    }
  };

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Delete this category?"
      )
    ) {
      return;
    }

    try {
      await categoryService.deleteCategory(
        id
      );

      setCategories((prev) =>
        prev.filter(
          (category) =>
            (category._id ||
              category.id) !== id
        )
      );

      toast.success(
        "Category deleted successfully."
      );
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to delete category."
      );
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Categories
        </h1>

        <p className="text-slate-500 mt-1">
          Organize your blog posts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6">
        {/* Add */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 h-fit">
          <h2 className="font-bold text-lg text-slate-900 mb-5">
            Add Category
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="React"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                rows="4"
                placeholder="Category description..."
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none resize-none focus:border-slate-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800"
            >
              Add Category
            </button>
          </form>
        </div>

        {/* List */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200">
            <h2 className="font-bold text-lg text-slate-900">
              All Categories
            </h2>
          </div>

          {loading ? (
            <div className="py-16 text-center text-slate-400">
              Loading...
            </div>
          ) : categories.length === 0 ? (
            <div className="py-16 text-center text-slate-400">
              No categories found.
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {categories.map(
                (category) => {
                  const id =
                    category._id ||
                    category.id;

                  return (
                    <div
                      key={id}
                      className="px-6 py-5 flex items-center justify-between gap-4"
                    >
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {category.name}
                        </h3>

                        <p className="text-sm text-slate-500 mt-1">
                          {category.description ||
                            "No description"}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          handleDelete(id)
                        }
                        className="px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;