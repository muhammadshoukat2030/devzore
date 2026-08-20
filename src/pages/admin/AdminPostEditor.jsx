import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import toast from "react-hot-toast";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TiptapLink from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

import postService from "../../services/postService";
import categoryService from "../../services/categoryService";

const AdminPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] =
    useState(isEditMode);

  const [categories, setCategories] =
    useState([]);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    coverImage: "",
    coverImageAlt: "",
    category: "",
    status: "draft",
  });

  const editor = useEditor({
    extensions: [
      StarterKit,

      Image.configure({
        inline: false,
        allowBase64: false,
      }),

      TiptapLink.configure({
        openOnClick: false,
      }),

      Placeholder.configure({
        placeholder:
          "Write your blog content here...",
      }),
    ],

    content: "",

    editorProps: {
      attributes: {
        class:
          "prose prose-slate max-w-none min-h-[350px] focus:outline-none p-5",
      },
    },
  });

  useEffect(() => {
    const loadCategories = async () => {
      try {
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
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    if (!isEditMode) {
      setPageLoading(false);
      return;
    }

    const loadPost = async () => {
      try {
        const data =
          await postService.getPostById(id);

        const post =
          data?.post ||
          data?.data ||
          data;

        setFormData({
          title: post.title || "",
          slug: post.slug || "",
          excerpt: post.excerpt || "",
          coverImage:
            post.coverImage || "",
          coverImageAlt:
            post.coverImageAlt || "",
          category:
            post.category?._id ||
            post.category ||
            "",
          status:
            post.status || "draft",
        });

        if (editor && post.content) {
          editor.commands.setContent(
            post.content
          );
        }
      } catch (error) {
        console.error(error);

        toast.error(
          error.response?.data?.message ||
            "Failed to load post."
        );

        navigate("/admin/posts");
      } finally {
        setPageLoading(false);
      }
    };

    loadPost();
  }, [id, isEditMode, editor, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateSlug = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-");
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;

    setFormData((prev) => ({
      ...prev,
      title,
      slug:
        prev.slug ||
        generateSlug(title),
    }));
  };

  const addLink = () => {
    if (!editor) return;

    const previousUrl =
      editor.getAttributes("link").href;

    const url = window.prompt(
      "Enter URL",
      previousUrl || "https://"
    );

    if (url === null) return;

    if (url === "") {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .unsetLink()
        .run();

      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  };

  const addImage = () => {
    if (!editor) return;

    const url = window.prompt(
      "Enter image URL"
    );

    if (!url) return;

    editor
      .chain()
      .focus()
      .setImage({ src: url })
      .run();
  };

  const handleSubmit = async (status) => {
    if (!formData.title.trim()) {
      toast.error("Post title is required.");
      return;
    }

    if (!formData.slug.trim()) {
      toast.error("Post slug is required.");
      return;
    }

    if (!editor) {
      toast.error("Editor is not ready.");
      return;
    }

    const content = editor.getHTML();

    const postData = {
      ...formData,
      status,
      content,
    };

    try {
      setLoading(true);

      if (isEditMode) {
        await postService.updatePost(
          id,
          postData
        );

        toast.success(
          "Post updated successfully."
        );
      } else {
        await postService.createPost(
          postData
        );

        toast.success(
          "Post created successfully."
        );
      }

      navigate("/admin/posts");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to save post."
      );
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="py-20 text-center text-slate-500">
        Loading post...
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isEditMode
              ? "Edit Post"
              : "Create Post"}
          </h1>

          <p className="text-slate-500 mt-1">
            Write and publish your blog content.
          </p>
        </div>

        <Link
          to="/admin/posts"
          className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-medium hover:bg-slate-50"
        >
          ← Back to Posts
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
        {/* Main */}
        <div className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
            <h2 className="font-bold text-lg text-slate-900 mb-5">
              Post Information
            </h2>

            <div className="space-y-5">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={
                    handleTitleChange
                  }
                  placeholder="Enter post title"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Slug
                </label>

                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="your-post-slug"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Excerpt
                </label>

                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Short description of your post..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none resize-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            </div>
          </div>

          {/* Editor */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="px-5 sm:px-6 py-4 border-b border-slate-200">
              <h2 className="font-bold text-lg text-slate-900">
                Content
              </h2>
            </div>

            {/* Toolbar */}
            {editor && (
              <div className="flex flex-wrap items-center gap-1 p-3 border-b border-slate-200 bg-slate-50">
                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleBold()
                      .run()
                  }
                  className={`px-3 py-2 rounded-lg font-bold text-sm ${
                    editor.isActive("bold")
                      ? "bg-slate-900 text-white"
                      : "hover:bg-slate-200"
                  }`}
                >
                  B
                </button>

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleItalic()
                      .run()
                  }
                  className={`px-3 py-2 rounded-lg italic text-sm ${
                    editor.isActive("italic")
                      ? "bg-slate-900 text-white"
                      : "hover:bg-slate-200"
                  }`}
                >
                  I
                </button>

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleStrike()
                      .run()
                  }
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-200"
                >
                  S
                </button>

                <div className="w-px h-6 bg-slate-300 mx-1" />

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({
                        level: 2,
                      })
                      .run()
                  }
                  className="px-3 py-2 rounded-lg text-sm font-bold hover:bg-slate-200"
                >
                  H2
                </button>

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({
                        level: 3,
                      })
                      .run()
                  }
                  className="px-3 py-2 rounded-lg text-sm font-bold hover:bg-slate-200"
                >
                  H3
                </button>

                <div className="w-px h-6 bg-slate-300 mx-1" />

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleBulletList()
                      .run()
                  }
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-200"
                >
                  • List
                </button>

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleOrderedList()
                      .run()
                  }
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-200"
                >
                  1. List
                </button>

                <div className="w-px h-6 bg-slate-300 mx-1" />

                <button
                  type="button"
                  onClick={addLink}
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-200"
                >
                  🔗 Link
                </button>

                <button
                  type="button"
                  onClick={addImage}
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-200"
                >
                  🖼 Image
                </button>
              </div>
            )}

            <EditorContent editor={editor} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h2 className="font-bold text-lg text-slate-900 mb-5">
              Publish
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white outline-none focus:border-slate-900"
                >
                  <option value="draft">
                    Draft
                  </option>

                  <option value="published">
                    Published
                  </option>
                </select>
              </div>

              <button
                type="button"
                disabled={loading}
                onClick={() =>
                  handleSubmit(
                    formData.status
                  )
                }
                className="w-full py-3 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800 disabled:opacity-50"
              >
                {loading
                  ? "Saving..."
                  : isEditMode
                  ? "Update Post"
                  : "Save Post"}
              </button>
            </div>
          </div>

          {/* Category */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h2 className="font-bold text-lg text-slate-900 mb-5">
              Category
            </h2>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white outline-none focus:border-slate-900"
            >
              <option value="">
                Select category
              </option>

              {categories.map((category) => (
                <option
                  key={
                    category._id ||
                    category.id
                  }
                  value={
                    category._id ||
                    category.id
                  }
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Cover Image */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h2 className="font-bold text-lg text-slate-900 mb-5">
              Cover Image
            </h2>

            <input
              type="text"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900"
            />

            {formData.coverImage && (
              <img
                src={formData.coverImage}
                alt={
                  formData.coverImageAlt ||
                  "Cover preview"
                }
                className="w-full h-40 object-cover rounded-xl mt-4"
              />
            )}
          </div>

          {/* Image Alt */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h2 className="font-bold text-lg text-slate-900 mb-4">
              Image SEO
            </h2>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Cover Image Alt
            </label>

            <input
              type="text"
              name="coverImageAlt"
              value={formData.coverImageAlt}
              onChange={handleChange}
              placeholder="Describe the image"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostEditor;