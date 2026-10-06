import { useEffect, useRef, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import toast from "react-hot-toast";

import {
  EditorContent,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TiptapLink from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

import postService from "../../services/postService";
import categoryService from "../../services/categoryService";
import uploadService from "../../services/uploadService";

// HELPERS

const getBlogImageUrl = (post) =>
  post?.coverImage || "";

const generateSlug = (value = "") => {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const getFileAltText = (
  fileName = ""
) => {
  return String(fileName)
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const normalizeLinkUrl = (
  value = ""
) => {
  const url = value.trim();

  if (!url) {
    return "";
  }

  if (
    url.startsWith("/") ||
    url.startsWith("#") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:") ||
    /^https?:\/\//i.test(url)
  ) {
    return url;
  }

  return `https://${url}`;
};

const toDateTimeLocalValue = (
  value
) => {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return "";
  }

  const localDate = new Date(
    date.getTime() -
      date.getTimezoneOffset() *
        60 *
        1000
  );

  return localDate
    .toISOString()
    .slice(0, 16);
};

// CUSTOM CONTENT IMAGE

const ContentImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),

      publicId: {
        default: null,

        parseHTML: (element) =>
          element.getAttribute(
            "data-public-id"
          ),

        renderHTML: (attributes) => {
          if (
            !attributes.publicId
          ) {
            return {};
          }

          return {
            "data-public-id":
              attributes.publicId,
          };
        },
      },

      loading: {
        default: "lazy",

        parseHTML: (element) =>
          element.getAttribute(
            "loading"
          ) || "lazy",

        renderHTML: (attributes) => ({
          loading:
            attributes.loading ||
            "lazy",
        }),
      },

      decoding: {
        default: "async",

        parseHTML: (element) =>
          element.getAttribute(
            "decoding"
          ) || "async",

        renderHTML: (attributes) => ({
          decoding:
            attributes.decoding ||
            "async",
        }),
      },
    };
  },
}).configure({
  inline: false,
  allowBase64: false,
});

// MAIN

const AdminPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode =
    Boolean(id);

  const contentImageInputRef =
    useRef(null);

  const contentImagePositionRef =
    useRef(null);

  // STATE

  const [loading, setLoading] =
    useState(false);

  const [
    pageLoading,
    setPageLoading,
  ] = useState(isEditMode);

  const [
    uploadingCoverImage,
    setUploadingCoverImage,
  ] = useState(false);

  const [
    uploadingContentImage,
    setUploadingContentImage,
  ] = useState(false);

  const [
    categories,
    setCategories,
  ] = useState([]);

  const [
    slugManuallyEdited,
    setSlugManuallyEdited,
  ] = useState(false);

  const [
    formData,
    setFormData,
  ] = useState({
    title: "",
    slug: "",
    excerpt: "",

    content: "",

    coverImage: "",
    coverImagePublicId: "",
    coverImageAlt: "",

    category: "",

    status: "draft",

    scheduledAt: "",

    featured: false,

    tags: "",

    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
  });

  // EDITOR

  const editor = useEditor({
    extensions: [
      StarterKit,

      ContentImage,

      TiptapLink.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
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
          "admin-post-editor min-h-[420px] focus:outline-none px-5 sm:px-6 py-5",
      },
    },
  });

  // CATEGORIES

  useEffect(() => {
    let cancelled = false;

    const loadCategories =
      async () => {
        try {
          const response =
            await categoryService.getCategories();

          const list =
            Array.isArray(response)
              ? response
              : Array.isArray(
                    response?.data
                  )
                ? response.data
                : Array.isArray(
                      response
                        ?.data
                        ?.categories
                    )
                  ? response.data
                      .categories
                  : Array.isArray(
                        response?.categories
                      )
                    ? response.categories
                    : [];

          if (!cancelled) {
            setCategories(list);
          }
        } catch (error) {
          console.error(
            "Load categories error:",
            error
          );

          if (!cancelled) {
            toast.error(
              error?.response
                ?.data?.message ||
                "Failed to load categories."
            );
          }
        }
      };

    loadCategories();

    return () => {
      cancelled = true;
    };
  }, []);

  // LOAD POST

  useEffect(() => {
    if (
      !isEditMode ||
      !id
    ) {
      setPageLoading(false);
      return;
    }

    let cancelled = false;

    const loadPost =
      async () => {
        try {
          setPageLoading(true);

          const response =
            await postService.getAdminPostById(
              id
            );

          const post =
            response?.data?.post ||
            response?.data ||
            response?.post ||
            response;

          if (
            !post ||
            !post._id
          ) {
            throw new Error(
              "Post not found."
            );
          }

          if (cancelled) {
            return;
          }

          setFormData({
            title:
              post.title || "",

            slug:
              post.slug || "",

            excerpt:
              post.excerpt || "",

            content:
              post.content || "",

            coverImage:
              post.coverImage || "",

            coverImagePublicId:
              post.coverImagePublicId ||
              "",

            coverImageAlt:
              post.coverImageAlt ||
              "",

            category:
              post.category?._id ||
              post.category ||
              "",

            status:
              post.status ||
              "draft",

            scheduledAt:
              toDateTimeLocalValue(
                post.scheduledAt
              ),

            featured:
              Boolean(
                post.featured
              ),

            tags:
              Array.isArray(
                post.tags
              )
                ? post.tags.join(
                    ", "
                  )
                : post.tags || "",

            seoTitle:
              post.seoTitle ||
              "",

            seoDescription:
              post.seoDescription ||
              "",

            seoKeywords:
              post.seoKeywords ||
              "",
          });

          setSlugManuallyEdited(
            Boolean(post.slug)
          );
        } catch (error) {
          if (cancelled) {
            return;
          }

          console.error(
            "Load post error:",
            error
          );

          toast.error(
            error?.response
              ?.data?.message ||
              error?.message ||
              "Failed to load post."
          );

          navigate(
            "/admin/posts"
          );
        } finally {
          if (!cancelled) {
            setPageLoading(
              false
            );
          }
        }
      };

    loadPost();

    return () => {
      cancelled = true;
    };
  }, [
    id,
    isEditMode,
    navigate,
  ]);

  // LOAD HTML INTO EDITOR

  useEffect(() => {
    if (
      !editor ||
      pageLoading
    ) {
      return;
    }

    try {
      const currentHTML =
        editor.getHTML();

      const incomingHTML =
        formData.content ||
        "";

      if (
        currentHTML !==
        incomingHTML
      ) {
        editor.commands.setContent(
          incomingHTML,
          false
        );
      }
    } catch (error) {
      console.error(
        "Editor content error:",
        error
      );
    }
  }, [
    editor,
    pageLoading,
    formData.content,
  ]);

  // INPUT CHANGE

  const handleChange = (
    event
  ) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData(
      (previous) => ({
        ...previous,

        [name]:
          type ===
          "checkbox"
            ? checked
            : value,
      })
    );
  };

  // TITLE

  const handleTitleChange = (
    event
  ) => {
    const title =
      event.target.value;

    setFormData(
      (previous) => ({
        ...previous,

        title,

        slug:
          slugManuallyEdited
            ? previous.slug
            : generateSlug(
                title
              ),
      })
    );
  };

  // SLUG

  const handleSlugChange = (
    event
  ) => {
    setSlugManuallyEdited(
      true
    );

    setFormData(
      (previous) => ({
        ...previous,

        slug: generateSlug(
          event.target.value
        ),
      })
    );
  };

  // COVER URL

  const handleCoverUrlChange = (
    event
  ) => {
    const value =
      event.target.value;

    setFormData(
      (previous) => ({
        ...previous,

        coverImage:
          value,

        /*
         * Manually pasted URL ka Google
         * Drive publicId unknown hota hai.
         */
        coverImagePublicId:
          value ===
          previous.coverImage
            ? previous.coverImagePublicId
            : "",
      })
    );
  };

  // COVER IMAGE UPLOAD

  const handleCoverImageUpload =
    async (event) => {
      const file =
        event.target.files?.[0];

      if (!file) {
        return;
      }

      try {
        setUploadingCoverImage(
          true
        );

        const response =
          await uploadService.uploadImage(
            file
          );

        if (
          !response?.success ||
          !response?.url
        ) {
          throw new Error(
            "Image upload failed."
          );
        }

        setFormData(
          (previous) => ({
            ...previous,

            coverImage:
              response.url,

            coverImagePublicId:
              response.publicId ||
              "",

            coverImageAlt:
              previous.coverImageAlt ||
              getFileAltText(
                file.name
              ),
          })
        );

        const sizeText =
          uploadService.formatFileSize?.(
            response
              .localCompressedSize ||
              response.size
          );

        toast.success(
          sizeText
            ? `Cover image uploaded (${sizeText}).`
            : "Cover image uploaded successfully."
        );
      } catch (error) {
        console.error(
          "Cover image upload error:",
          error
        );

        toast.error(
          error?.response
            ?.data?.message ||
            error?.message ||
            "Failed to upload cover image."
        );
      } finally {
        setUploadingCoverImage(
          false
        );

        event.target.value =
          "";
      }
    };

  // REMOVE COVER

  const handleRemoveCoverImage =
    () => {
      setFormData(
        (previous) => ({
          ...previous,

          coverImage: "",
          coverImagePublicId:
            "",
          coverImageAlt: "",
        })
      );

      /*
       * Drive image ko yahan immediately
       * delete nahi karte.
       *
       * Agar user post save kiye baghair
       * page leave kare to existing post
       * ki image break nahi hogi.
       */
      toast.success(
        "Cover image removed from this post. Save the post to apply the change."
      );
    };

  // CONTENT IMAGE PICKER

  const openContentImagePicker =
    () => {
      if (
        !editor ||
        uploadingContentImage
      ) {
        return;
      }

      /*
       * Upload ke dauran current cursor
       * position preserve karte hain.
       */
      contentImagePositionRef.current =
        editor.state.selection.from;

      contentImageInputRef.current?.click();
    };

  // CONTENT IMAGE UPLOAD

  const handleContentImageUpload =
    async (event) => {
      const file =
        event.target.files?.[0];

      if (
        !file ||
        !editor
      ) {
        return;
      }

      try {
        setUploadingContentImage(
          true
        );

        const response =
          await uploadService.uploadImage(
            file
          );

        if (
          !response?.success ||
          !response?.url
        ) {
          throw new Error(
            "Image upload failed."
          );
        }

        const imageAlt =
          getFileAltText(
            file.name
          ) ||
          "Article image";

        const maxPosition =
          editor.state.doc
            .content.size;

        const storedPosition =
          contentImagePositionRef.current;

        const safePosition =
          typeof storedPosition ===
          "number"
            ? Math.min(
                Math.max(
                  storedPosition,
                  1
                ),
                maxPosition
              )
            : null;

        let chain =
          editor
            .chain()
            .focus();

        if (safePosition) {
          chain =
            chain.setTextSelection(
              safePosition
            );
        }

        const inserted =
          chain
            .setImage({
              src: response.url,

              alt: imageAlt,

              title: imageAlt,

              publicId:
                response.publicId ||
                null,

              loading: "lazy",

              decoding: "async",
            })
            .run();

        if (!inserted) {
          throw new Error(
            "The image uploaded but could not be inserted into the editor."
          );
        }

        /*
         * Image ke baad ek paragraph add kar
         * dete hain taa-ke typing continue
         * karna easy ho.
         */
        editor
          .chain()
          .focus()
          .createParagraphNear()
          .run();

        const sizeText =
          uploadService.formatFileSize?.(
            response
              .localCompressedSize ||
              response.size
          );

        toast.success(
          sizeText
            ? `Article image added (${sizeText}).`
            : "Article image added successfully."
        );
      } catch (error) {
        console.error(
          "Content image upload error:",
          error
        );

        toast.error(
          error?.response
            ?.data?.message ||
            error?.message ||
            "Failed to add article image."
        );
      } finally {
        setUploadingContentImage(
          false
        );

        contentImagePositionRef.current =
          null;

        event.target.value =
          "";
      }
    };

  // LINK

  const addLink = () => {
    if (!editor) {
      return;
    }

    const previousUrl =
      editor.getAttributes(
        "link"
      )?.href || "";

    const url =
      window.prompt(
        "Enter link URL",
        previousUrl ||
          "https://"
      );

    if (url === null) {
      return;
    }

    const cleanUrl =
      normalizeLinkUrl(url);

    if (!cleanUrl) {
      editor
        .chain()
        .focus()
        .extendMarkRange(
          "link"
        )
        .unsetLink()
        .run();

      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange(
        "link"
      )
      .setLink({
        href: cleanUrl,
        target: "_blank",
        rel: "noopener noreferrer",
      })
      .run();
  };

  // ERROR MESSAGE

  const getErrorMessage = (
    error
  ) => {
    const responseData =
      error?.response?.data;

    if (
      responseData?.message
    ) {
      return responseData.message;
    }

    if (
      Array.isArray(
        responseData?.errors
      ) &&
      responseData.errors
        .length > 0
    ) {
      return responseData.errors
        .map(
          (item) =>
            item?.msg ||
            item?.message ||
            "Validation error"
        )
        .join(", ");
    }

    if (error?.message) {
      return error.message;
    }

    return "Failed to save post.";
  };

  // VALIDATION

  const validateForm = (
    selectedStatus
  ) => {
    if (
      !formData.title.trim()
    ) {
      toast.error(
        "Post title is required."
      );

      return false;
    }

    if (
      !formData.excerpt.trim()
    ) {
      toast.error(
        "Post excerpt is required."
      );

      return false;
    }

    if (
      !formData.category
    ) {
      toast.error(
        "Please select a category."
      );

      return false;
    }

    if (!editor) {
      toast.error(
        "Editor is not ready."
      );

      return false;
    }

    const html =
      editor
        .getHTML()
        .trim();

    const text =
      editor
        .getText()
        .trim();

    if (
      !text &&
      !html.includes("<img")
    ) {
      toast.error(
        "Post content is required."
      );

      return false;
    }

    if (
      formData.seoTitle
        .length > 70
    ) {
      toast.error(
        "SEO title cannot exceed 70 characters."
      );

      return false;
    }

    if (
      formData
        .seoDescription
        .length > 160
    ) {
      toast.error(
        "SEO description cannot exceed 160 characters."
      );

      return false;
    }

    if (
      selectedStatus ===
      "scheduled"
    ) {
      if (
        !formData.scheduledAt
      ) {
        toast.error(
          "Please select a publish date and time."
        );

        return false;
      }

      const scheduledDate =
        new Date(
          formData.scheduledAt
        );

      if (
        Number.isNaN(
          scheduledDate.getTime()
        )
      ) {
        toast.error(
          "Invalid scheduled publish date."
        );

        return false;
      }

      if (
        scheduledDate.getTime() <=
        Date.now()
      ) {
        toast.error(
          "Scheduled publish time must be in the future."
        );

        return false;
      }
    }

    return true;
  };

  // SUBMIT

  const handleSubmit =
    async (
      selectedStatus
    ) => {
      if (
        loading ||
        uploadingCoverImage ||
        uploadingContentImage
      ) {
        return;
      }

      if (
        !validateForm(
          selectedStatus
        )
      ) {
        return;
      }

      try {
        setLoading(true);

        const content =
          editor.getHTML();

        const tags =
          formData.tags
            .split(",")
            .map((tag) =>
              tag
                .trim()
                .toLowerCase()
            )
            .filter(Boolean);

        const finalSlug =
          formData.slug.trim()
            ? generateSlug(
                formData.slug
              )
            : generateSlug(
                formData.title
              );

        let scheduledAt =
          null;

        if (
          selectedStatus ===
          "scheduled"
        ) {
          scheduledAt =
            new Date(
              formData.scheduledAt
            ).toISOString();
        }

        const postData = {
          title:
            formData.title.trim(),

          slug:
            finalSlug,

          excerpt:
            formData.excerpt.trim(),

          content,

          coverImage:
            formData.coverImage.trim(),

          coverImagePublicId:
            formData.coverImagePublicId.trim(),

          coverImageAlt:
            formData.coverImageAlt.trim(),

          category:
            formData.category,

          status:
            selectedStatus,

          scheduledAt,

          featured:
            Boolean(
              formData.featured
            ),

          tags,

          seoTitle:
            formData.seoTitle.trim(),

          seoDescription:
            formData.seoDescription.trim(),

          seoKeywords:
            formData.seoKeywords.trim(),
        };

        console.log(
          "Submitting post:",
          postData
        );

        if (isEditMode) {
          await postService.updatePost(
            id,
            postData
          );

          if (
            selectedStatus ===
            "published"
          ) {
            toast.success(
              "Post updated and published successfully!"
            );
          } else if (
            selectedStatus ===
            "scheduled"
          ) {
            toast.success(
              "Post updated and scheduled successfully!"
            );
          } else {
            toast.success(
              "Post updated successfully!"
            );
          }
        } else {
          await postService.createPost(
            postData
          );

          if (
            selectedStatus ===
            "published"
          ) {
            toast.success(
              "Post published successfully!"
            );
          } else if (
            selectedStatus ===
            "scheduled"
          ) {
            toast.success(
              "Post scheduled successfully!"
            );
          } else {
            toast.success(
              "Post saved as draft successfully!"
            );
          }
        }

        navigate(
          "/admin/posts"
        );
      } catch (error) {
        console.error(
          "Save post error:",
          error
        );

        toast.error(
          getErrorMessage(
            error
          )
        );
      } finally {
        setLoading(false);
      }
    };

  // LOADING

  if (pageLoading) {
    return (
      <div className="flex min-h-[450px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-9 w-9 animate-spin rounded-full border-[3px] border-slate-200 border-t-[#0796A8]" />

          <p className="mt-3 text-sm font-medium text-slate-500">
            Loading post...
          </p>
        </div>
      </div>
    );
  }

  // UI

  return (
    <div className="pb-10">
      {/* CONTENT IMAGE FILE INPUT */}

      <input
        ref={
          contentImageInputRef
        }
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif"
        onChange={
          handleContentImageUpload
        }
        className="hidden"
      />

      {/* HEADER */}

      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-[2px] w-5 bg-[#0796A8]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#07899a]">
              Blog Management
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-[-0.025em] text-[#071923] sm:text-3xl">
            {isEditMode
              ? "Edit Post"
              : "Create Post"}
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Create, format and
            publish DevZore Journal
            articles.
          </p>
        </div>

        <Link
          to="/admin/posts"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-[#071923]"
        >
          ← Back to Posts
        </Link>
      </div>

      {/* GRID */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        {/* MAIN */}

        <div className="min-w-0 space-y-6">
          {/* INFORMATION */}

          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="mb-5 text-lg font-bold text-[#071923]">
              Post Information
            </h2>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="post-title"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Title
                </label>

                <input
                  id="post-title"
                  type="text"
                  name="title"
                  value={
                    formData.title
                  }
                  onChange={
                    handleTitleChange
                  }
                  placeholder="Enter post title"
                  maxLength={200}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[14px] outline-none transition focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="post-slug"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Slug
                </label>

                <input
                  id="post-slug"
                  type="text"
                  name="slug"
                  value={
                    formData.slug
                  }
                  onChange={
                    handleSlugChange
                  }
                  placeholder="your-post-slug"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[14px] outline-none transition focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
                />

                <p className="mt-1.5 text-[11px] text-slate-400">
                  Example:
                  your-blog-post-title
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="post-excerpt"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Excerpt
                  </label>

                  <span className="text-[11px] text-slate-400">
                    {
                      formData
                        .excerpt
                        .length
                    }
                    /300
                  </span>
                </div>

                <textarea
                  id="post-excerpt"
                  name="excerpt"
                  value={
                    formData.excerpt
                  }
                  onChange={
                    handleChange
                  }
                  rows={4}
                  maxLength={300}
                  placeholder="Write a concise introduction that explains what the article covers..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-[14px] leading-6 outline-none transition focus:border-[#0796A8] focus:ring-4 focus:ring-[#0796A8]/10"
                />

                <p className="mt-1.5 text-[11px] leading-5 text-slate-400">
                  This appears below
                  the article title and
                  can also be used as a
                  short article summary.
                </p>
              </div>
            </div>
          </section>

          {/* EDITOR */}

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
              <h2 className="text-lg font-bold text-[#071923]">
                Article Content
              </h2>

              <p className="mt-1 text-[11px] text-slate-500">
                Use headings,
                paragraphs, lists,
                links and images to
                structure the article.
              </p>
            </div>

            {/* TOOLBAR */}

            {editor && (
              <div className="sticky top-0 z-10 flex flex-wrap items-center gap-1 border-b border-slate-200 bg-[#f8fafb] p-3">
                <ToolbarButton
                  active={editor.isActive(
                    "paragraph"
                  )}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .setParagraph()
                      .run()
                  }
                >
                  P
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton
                  active={editor.isActive(
                    "heading",
                    {
                      level: 1,
                    }
                  )}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({
                        level: 1,
                      })
                      .run()
                  }
                >
                  H1
                </ToolbarButton>

                <ToolbarButton
                  active={editor.isActive(
                    "heading",
                    {
                      level: 2,
                    }
                  )}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({
                        level: 2,
                      })
                      .run()
                  }
                >
                  H2
                </ToolbarButton>

                <ToolbarButton
                  active={editor.isActive(
                    "heading",
                    {
                      level: 3,
                    }
                  )}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({
                        level: 3,
                      })
                      .run()
                  }
                >
                  H3
                </ToolbarButton>

                <ToolbarButton
                  active={editor.isActive(
                    "heading",
                    {
                      level: 4,
                    }
                  )}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({
                        level: 4,
                      })
                      .run()
                  }
                >
                  H4
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton
                  active={editor.isActive(
                    "bold"
                  )}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleBold()
                      .run()
                  }
                >
                  <strong>B</strong>
                </ToolbarButton>

                <ToolbarButton
                  active={editor.isActive(
                    "italic"
                  )}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleItalic()
                      .run()
                  }
                >
                  <em>I</em>
                </ToolbarButton>

                <ToolbarButton
                  active={editor.isActive(
                    "strike"
                  )}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleStrike()
                      .run()
                  }
                >
                  <span className="line-through">
                    S
                  </span>
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton
                  active={editor.isActive(
                    "bulletList"
                  )}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleBulletList()
                      .run()
                  }
                >
                  • List
                </ToolbarButton>

                <ToolbarButton
                  active={editor.isActive(
                    "orderedList"
                  )}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleOrderedList()
                      .run()
                  }
                >
                  1. List
                </ToolbarButton>

                <ToolbarButton
                  active={editor.isActive(
                    "blockquote"
                  )}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleBlockquote()
                      .run()
                  }
                >
                  Quote
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton
                  active={editor.isActive(
                    "link"
                  )}
                  onClick={addLink}
                >
                  🔗 Link
                </ToolbarButton>

                <ToolbarButton
                  disabled={
                    uploadingContentImage
                  }
                  onClick={
                    openContentImagePicker
                  }
                >
                  {uploadingContentImage
                    ? "Uploading..."
                    : "🖼 Image"}
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton
                  disabled={
                    !editor.can().undo()
                  }
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .undo()
                      .run()
                  }
                >
                  ↶
                </ToolbarButton>

                <ToolbarButton
                  disabled={
                    !editor.can().redo()
                  }
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .redo()
                      .run()
                  }
                >
                  ↷
                </ToolbarButton>
              </div>
            )}

            {/* EDITOR AREA */}

            <div className="admin-tiptap-content">
              <EditorContent
                editor={editor}
              />
            </div>

            <div className="border-t border-slate-200 bg-slate-50 px-5 py-3">
              <p className="text-[10px] leading-5 text-slate-500">
                Image button opens your
                computer file selector.
                Uploaded images are
                compressed automatically
                before being stored.
              </p>
            </div>
          </section>
        </div>

        {/* SIDEBAR */}

        <aside className="space-y-6">
          {/* PUBLISH */}

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-5 text-lg font-bold text-[#071923]">
              Publish
            </h2>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="post-status"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Status
                </label>

                <select
                  id="post-status"
                  name="status"
                  value={
                    formData.status
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[13px] outline-none transition focus:border-[#0796A8]"
                >
                  <option value="draft">
                    Draft
                  </option>

                  <option value="published">
                    Published
                  </option>

                  <option value="scheduled">
                    Scheduled
                  </option>
                </select>
              </div>

              {formData.status ===
                "scheduled" && (
                <div>
                  <label
                    htmlFor="post-scheduled-at"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Publish Date &
                    Time
                  </label>

                  <input
                    id="post-scheduled-at"
                    type="datetime-local"
                    name="scheduledAt"
                    value={
                      formData.scheduledAt
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-[12px] outline-none transition focus:border-[#0796A8]"
                  />

                  <p className="mt-2 text-[10px] leading-5 text-slate-500">
                    Time is selected in
                    your browser's local
                    timezone and converted
                    to UTC before saving.
                  </p>
                </div>
              )}

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-3 py-3">
                <input
                  type="checkbox"
                  name="featured"
                  checked={
                    formData.featured
                  }
                  onChange={
                    handleChange
                  }
                  className="h-4 w-4 accent-[#0796A8]"
                />

                <span className="text-sm text-slate-700">
                  Featured post
                </span>
              </label>

              <button
                type="button"
                disabled={
                  loading ||
                  uploadingCoverImage ||
                  uploadingContentImage ||
                  !formData.category ||
                  (formData.status ===
                    "scheduled" &&
                    !formData.scheduledAt)
                }
                onClick={() =>
                  handleSubmit(
                    formData.status
                  )
                }
                className="w-full rounded-xl bg-[#071923] py-3 text-[12px] font-semibold text-white transition hover:bg-[#0b2a37] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Saving..."
                  : isEditMode
                    ? formData.status ===
                      "published"
                      ? "Update & Publish"
                      : formData.status ===
                          "scheduled"
                        ? "Update Schedule"
                        : "Update Post"
                    : formData.status ===
                        "published"
                      ? "Publish Post"
                      : formData.status ===
                          "scheduled"
                        ? "Schedule Post"
                        : "Save Draft"}
              </button>

              {!formData.category && (
                <p className="text-[10px] text-red-500">
                  Select a category
                  before saving.
                </p>
              )}
            </div>
          </section>

          {/* CATEGORY */}

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-4 text-lg font-bold text-[#071923]">
              Category
            </h2>

            <select
              name="category"
              value={
                formData.category
              }
              onChange={
                handleChange
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[13px] outline-none transition focus:border-[#0796A8]"
            >
              <option value="">
                Select category
              </option>

              {categories.map(
                (category) => {
                  const categoryId =
                    category._id ||
                    category.id;

                  return (
                    <option
                      key={
                        categoryId
                      }
                      value={
                        categoryId
                      }
                    >
                      {
                        category.name
                      }
                    </option>
                  );
                }
              )}
            </select>

            {categories.length ===
              0 && (
              <p className="mt-2 text-[10px] text-red-500">
                No categories found.
                Create a category first.
              </p>
            )}
          </section>

          {/* COVER IMAGE */}

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-[#071923]">
                  Cover Image
                </h2>

                <p className="mt-1 text-[10px] leading-5 text-slate-500">
                  Optional. Recommended
                  for blog cards and
                  article sharing.
                </p>
              </div>

              {formData.coverImage && (
                <button
                  type="button"
                  onClick={
                    handleRemoveCoverImage
                  }
                  className="text-[10px] font-semibold text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              )}
            </div>

            <input
              type="file"
              id="coverImageUpload"
              accept="image/jpeg,image/png,image/webp,image/avif"
              onChange={
                handleCoverImageUpload
              }
              disabled={
                uploadingCoverImage
              }
              className="hidden"
            />

            <label
              htmlFor="coverImageUpload"
              className={`flex min-h-[46px] w-full items-center justify-center rounded-xl border border-dashed px-4 py-3 text-center text-[12px] font-semibold transition ${
                uploadingCoverImage
                  ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400"
                  : "cursor-pointer border-[#0796A8]/40 bg-[#0796A8]/5 text-[#07899a] hover:bg-[#0796A8]/10"
              }`}
            >
              {uploadingCoverImage
                ? "Compressing & Uploading..."
                : formData.coverImage
                  ? "Replace Cover Image"
                  : "📸 Choose Cover Image"}
            </label>

            <p className="mt-2 text-[10px] leading-5 text-slate-400">
              JPG, PNG, WebP or AVIF ·
              Max 5 MB · Auto compressed
              before upload.
            </p>

            {/* OPTIONAL URL */}

            <div className="my-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                or
              </span>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <label
              htmlFor="cover-image-url"
              className="mb-2 block text-[11px] font-medium text-slate-600"
            >
              Image URL
            </label>

            <input
              id="cover-image-url"
              type="url"
              name="coverImage"
              value={
                formData.coverImage
              }
              onChange={
                handleCoverUrlChange
              }
              placeholder="https://..."
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-[11px] outline-none transition focus:border-[#0796A8]"
            />

            {getBlogImageUrl(
              formData
            ) && (
              <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <img
                  key={
                    formData.coverImage
                  }
                  src={
                    formData.coverImage
                  }
                  alt={
                    formData.coverImageAlt ||
                    "Cover preview"
                  }
                  className="h-44 w-full object-cover"
                />
              </div>
            )}

            {formData
              .coverImagePublicId && (
              <p className="mt-2 truncate text-[9px] text-slate-400">
                Drive ID:{" "}
                {
                  formData.coverImagePublicId
                }
              </p>
            )}
          </section>

          {/* IMAGE SEO */}

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-4 text-lg font-bold text-[#071923]">
              Image SEO
            </h2>

            <label
              htmlFor="cover-image-alt"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Cover Image Alt
            </label>

            <input
              id="cover-image-alt"
              type="text"
              name="coverImageAlt"
              value={
                formData.coverImageAlt
              }
              onChange={
                handleChange
              }
              maxLength={160}
              placeholder="Describe the image naturally"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[12px] outline-none transition focus:border-[#0796A8]"
            />

            <p className="mt-2 text-[10px] leading-5 text-slate-400">
              Optional, but recommended
              when a cover image is used.
            </p>
          </section>

          {/* TAGS */}

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-4 text-lg font-bold text-[#071923]">
              Tags
            </h2>

            <input
              type="text"
              name="tags"
              value={
                formData.tags
              }
              onChange={
                handleChange
              }
              placeholder="web development, saas, seo"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[12px] outline-none transition focus:border-[#0796A8]"
            />

            <p className="mt-2 text-[10px] text-slate-400">
              Separate tags with commas.
            </p>
          </section>

          {/* SEO */}

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="mb-5 text-lg font-bold text-[#071923]">
              SEO Settings
            </h2>

            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    SEO Title
                  </label>

                  <span className="text-[10px] text-slate-400">
                    {
                      formData
                        .seoTitle
                        .length
                    }
                    /70
                  </span>
                </div>

                <input
                  type="text"
                  name="seoTitle"
                  value={
                    formData.seoTitle
                  }
                  onChange={
                    handleChange
                  }
                  maxLength={70}
                  placeholder="SEO title"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[12px] outline-none transition focus:border-[#0796A8]"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    SEO Description
                  </label>

                  <span className="text-[10px] text-slate-400">
                    {
                      formData
                        .seoDescription
                        .length
                    }
                    /160
                  </span>
                </div>

                <textarea
                  name="seoDescription"
                  value={
                    formData.seoDescription
                  }
                  onChange={
                    handleChange
                  }
                  maxLength={160}
                  rows={4}
                  placeholder="SEO description"
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-[12px] leading-5 outline-none transition focus:border-[#0796A8]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  SEO Keywords
                </label>

                <input
                  type="text"
                  name="seoKeywords"
                  value={
                    formData.seoKeywords
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="software development, web development"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[12px] outline-none transition focus:border-[#0796A8]"
                />
              </div>
            </div>
          </section>
        </aside>
      </div>

      {/* EDITOR STYLES */}

      <style>{`
        .admin-tiptap-content .ProseMirror {
          min-height: 420px;
          color: #475569;
          font-size: 15px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .admin-tiptap-content .ProseMirror:focus {
          outline: none;
        }

        .admin-tiptap-content .ProseMirror p {
          margin: 0 0 1rem;
        }

        .admin-tiptap-content .ProseMirror h1,
        .admin-tiptap-content .ProseMirror h2,
        .admin-tiptap-content .ProseMirror h3,
        .admin-tiptap-content .ProseMirror h4 {
          color: #071923 !important;
          line-height: 1.2 !important;
          letter-spacing: -0.03em !important;
          font-weight: 800 !important;
          margin-top: 1.75rem !important;
          margin-bottom: 0.75rem !important;
        }

        .admin-tiptap-content .ProseMirror h1 {
          font-size: 2rem !important;
          font-weight: 850 !important;
        }

        .admin-tiptap-content .ProseMirror h2 {
          font-size: 1.65rem !important;
          font-weight: 800 !important;
        }

        .admin-tiptap-content .ProseMirror h3 {
          font-size: 1.35rem !important;
          font-weight: 800 !important;
        }

        .admin-tiptap-content .ProseMirror h4 {
          font-size: 1.12rem !important;
          font-weight: 800 !important;
        }

        .admin-tiptap-content .ProseMirror strong {
          color: #071923;
          font-weight: 800 !important;
        }

        .admin-tiptap-content .ProseMirror ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin: 0.75rem 0 1.25rem;
        }

        .admin-tiptap-content .ProseMirror ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin: 0.75rem 0 1.25rem;
        }

        .admin-tiptap-content .ProseMirror li {
          margin-bottom: 0.4rem;
        }

        .admin-tiptap-content .ProseMirror li::marker {
          color: #0796a8;
          font-weight: 700;
        }

        .admin-tiptap-content .ProseMirror a {
          color: #07899a;
          text-decoration: underline;
          text-underline-offset: 3px;
          font-weight: 600;
        }

        .admin-tiptap-content .ProseMirror blockquote {
          margin: 1.4rem 0;
          border-left: 3px solid #0796a8;
          background: #edf6f7;
          border-radius: 0 0.75rem 0.75rem 0;
          padding: 0.9rem 1rem;
          color: #334155;
        }

        .admin-tiptap-content .ProseMirror blockquote p:last-child {
          margin-bottom: 0;
        }

        .admin-tiptap-content .ProseMirror img {
          display: block;
          width: auto;
          max-width: 100%;
          max-height: 520px;
          height: auto;
          object-fit: contain;
          margin: 1.5rem auto;
          border-radius: 0.85rem;
          border: 1px solid #e2e8f0;
        }

        .admin-tiptap-content .ProseMirror img.ProseMirror-selectednode {
          outline: 3px solid rgba(7, 150, 168, 0.22);
          border-color: #0796a8;
        }

        .admin-tiptap-content .ProseMirror pre {
          overflow-x: auto;
          margin: 1.4rem 0;
          border-radius: 0.75rem;
          background: #04111a;
          color: #e2e8f0;
          padding: 1rem;
          font-size: 0.8rem;
          line-height: 1.7;
        }

        .admin-tiptap-content .ProseMirror code {
          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Monaco,
            Consolas,
            "Liberation Mono",
            monospace;
        }

        .admin-tiptap-content .ProseMirror p code,
        .admin-tiptap-content .ProseMirror li code {
          padding: 0.15rem 0.35rem;
          border-radius: 0.3rem;
          background: #e8f1f2;
          color: #075f70;
        }

        .admin-tiptap-content .ProseMirror hr {
          border: 0;
          border-top: 1px solid #e2e8f0;
          margin: 2rem 0;
        }

        .admin-tiptap-content
          .ProseMirror
          p.is-editor-empty:first-child::before {
          color: #94a3b8;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .admin-tiptap-content .ProseMirror {
            min-height: 360px;
            font-size: 14px;
            line-height: 1.75;
          }

          .admin-tiptap-content .ProseMirror h1 {
            font-size: 1.7rem !important;
          }

          .admin-tiptap-content .ProseMirror h2 {
            font-size: 1.45rem !important;
          }

          .admin-tiptap-content .ProseMirror h3 {
            font-size: 1.25rem !important;
          }

          .admin-tiptap-content .ProseMirror h4 {
            font-size: 1.05rem !important;
          }

          .admin-tiptap-content .ProseMirror img {
            max-height: 360px;
          }
        }
      `}</style>
    </div>
  );
};

// TOOLBAR

const ToolbarButton = ({
  children,
  active = false,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex min-h-[34px] items-center justify-center rounded-lg px-2.5 py-1.5 text-[11px] font-semibold transition ${
        active
          ? "bg-[#071923] text-white"
          : "text-slate-600 hover:bg-slate-200 hover:text-[#071923]"
      } ${
        disabled
          ? "cursor-not-allowed opacity-40"
          : ""
      }`}
    >
      {children}
    </button>
  );
};

const ToolbarDivider = () => (
  <span className="mx-1 h-6 w-px bg-slate-300" />
);

export default AdminPostEditor;