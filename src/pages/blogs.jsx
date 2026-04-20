import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'MERN Stack', 'SEO', 'Business'];

  const blogPosts = [
    {
      id: 1,
      title: "How to Build Scalable MERN Stack Applications in 2026",
      excerpt: "Learn how to build scalable MERN stack apps using MongoDB, Express, React, and Node.js with best practices.",
      category: "MERN Stack",
      date: "2026-04-15",
      author: "M-Shoukat",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      slug: "scalable-mern-stack-2026"
    },
    {
      id: 2,
      title: "Top SEO Strategies for Developers to Rank on Google",
      excerpt: "Best SEO techniques for developers to rank websites on Google and get international clients.",
      category: "SEO",
      date: "2026-04-01",
      author: "DevZore",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1571721738239-7b3c1175883d",
      slug: "seo-for-developers"
    }
  ];

  const filteredBlogs =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      {/* 🔥 SEO META */}
      <Helmet>
        <title>DevZore Blog | Web Development, SEO & MERN Stack Articles</title>
        <meta name="description" content="Read latest blogs on web development, MERN stack, SEO strategies, SaaS, and software engineering. Updated every 15 days." />
        <meta name="keywords" content="web development blog, MERN stack blog, SEO blog, software engineering articles, React blog, Node.js tutorials, DevZore blog" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* 🔥 BLOG SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "DevZore Blog",
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "datePublished": post.date,
            "author": { "@type": "Person", "name": post.author },
            "url": `https://devzore.com/blog/${post.slug}`
          }))
        })}
      </script>

      <section className="bg-[#030303] min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Web Development & SEO Blog
            </h1>
            <p className="text-gray-400">
              Latest insights on MERN stack, SEO, SaaS, and software development.
            </p>
          </div>

          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* BLOGS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map(post => (
              <article key={post.id} className="bg-[#0a0a0a] p-6 rounded-xl border border-white/10">
                <img src={post.image} alt={post.title} className="rounded-lg mb-4" />

                <h2 className="text-xl font-bold text-white mb-2">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h2>

                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>

                <span className="text-xs text-gray-500">{post.date}</span>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Blogs;