import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null); // Modal control state
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Engineering', 'SaaS', 'Cloud', 'UI/UX'];

  // Jab popup khule to piche wala page scroll na ho
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedBlog]);

  const blogPosts = [
    {
      id: 1,
      category: 'Engineering',
      title: 'Architecting Scalable MERN Stack Applications in 2026',
      excerpt: 'Enterprise-grade architecture patterns for high-traffic Node.js and React environments...',
      content: `
      <p>Building for millions of users requires moving beyond the basic MVC pattern. In 2026, scalability is defined by how well your system handles asynchronous loads and distributed data.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">1. The Transition to Microservices</h3>
      <p>Monoliths are easier to build but impossible to scale infinitely. By decoupling your <b>Express.js</b> backend into smaller, specialized microservices, you can scale specific parts of your app independently using <b>Docker</b> and <b>Kubernetes</b>.</p>
      <ul class="list-disc ml-6 mt-4 text-gray-400 space-y-2">
        <li>Independent Scaling: Scale your "Payment Service" without touching the "Auth Service".</li>
        <li>Fault Isolation: If one service fails, the whole app doesn't crash.</li>
        <li>Technology Agnostic: Use Python for AI and Node.js for APIs in the same ecosystem.</li>
      </ul>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">2. Advanced Database Layering</h3>
      <p>Directly hitting <b>MongoDB</b> for every request is a performance killer. At <b>DevZore</b>, we implement a multi-layer caching strategy using <b>Redis</b> to store session data and frequent query results, reducing database overhead by nearly 85%.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'April 15, 2026',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      readTime: '15 min read'
    },
    {
      id: 2,
      category: 'SaaS',
      title: 'Multi-Tenant Architecture: The Enterprise SaaS Playbook',
      excerpt: 'A deep dive into data isolation, schema strategies, and scaling SaaS platforms globally...',
      content: `
      <p>SaaS success depends on how you manage multiple clients (tenants) on a single platform. Choosing the right architecture affects both your security and your AWS bill.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Strategic Data Isolation Models</h3>
      <p>There are three primary ways to handle multi-tenant data in MongoDB:</p>
      <div class="bg-white/5 p-6 rounded-2xl my-6 border border-white/10">
        <p class="text-purple-400 font-bold">1. Logical Isolation (Shared Collections)</p>
        <p class="text-sm">Adding a tenantId to every document. Cost-effective but requires strict security middleware.</p>
        <p class="text-purple-400 font-bold mt-4">2. Schema Isolation (Separate DBs)</p>
        <p class="text-sm">Each client gets their own database. High security, but harder to maintain migrations.</p>
      </div>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Automated Provisioning</h3>
      <p>The hallmark of a premium SaaS is zero-touch onboarding. We use <b>Terraform</b> and <b>Node.js</b> triggers to spin up isolated resources as soon as a new client signs up.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'April 10, 2026',
      image: 'https://images.unsplash.com/photo-1518433278981-16c02460bb9c?auto=format&fit=crop&q=80&w=800',
      readTime: '18 min read'
    },
    {
      id: 3,
      category: 'UI/UX',
      title: 'High-Conversion Design: Beyond Tailwind CSS Aesthetics',
      excerpt: 'How to use cognitive load principles and design tokens to build trustworthy professional platforms...',
      content: `
      <p>A beautiful site that doesn't convert is just expensive art. In software engineering, UI/UX must serve the business logic.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">1. Reducing Cognitive Load</h3>
      <p>Users shouldn't have to think about where to click. We use <b>Fitts’s Law</b> to place high-value buttons (CTAs) in natural thumb zones and focal areas.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">2. The "Coffee-Dark" Design System</h3>
      <p>For <b>DevZore</b>, we developed a custom dark-themed palette that reduces eye strain. By using semantic tokens in <b>Tailwind CSS</b>, we ensure brand consistency across every dashboard, modal, and button.</p>
      <p class="mt-4 italic text-gray-500">Result: Increased average session duration by 40% through comfortable readability.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'March 28, 2026',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
      readTime: '12 min read'
    },
    {
      id: 4,
      category: 'Cloud',
      title: 'Serverless Excellence: Optimizing AWS Lambda for Node.js',
      excerpt: 'Solving cold starts and memory leakage in global serverless deployments...',
      content: `
      <p>Serverless architecture offers unparalleled cost-saving, but if misconfigured, it can lead to frustrating latencies. Here is our checklist for 100ms response times.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">The Cold Start Problem</h3>
      <p>When a Lambda function hasn't been used, it "goes to sleep". The next request takes seconds to wake up. We solve this using:</p>
      <ul class="list-disc ml-6 mt-4 text-gray-400 space-y-2">
        <li><b>Provisioned Concurrency:</b> Keeping functions warm for peak traffic hours.</li>
        <li><b>Tree Shaking:</b> Removing unused node_modules to reduce package size.</li>
        <li><b>Esbuild:</b> Compiling JavaScript into a single lightweight file for faster execution.</li>
      </ul>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Edge Computing</h3>
      <p>By deploying logic to <b>Lambda@Edge</b>, we move the compute closer to the user in Dubai, Qatar, or Pakistan, virtually eliminating round-trip latency.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'March 12, 2026',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      readTime: '14 min read'
    },
    {
      id: 5,
      category: 'Engineering',
      title: 'Redis Caching Patterns for Real-Time Performance',
      excerpt: 'Mastering Write-Through, Write-Back, and Cache-Aside patterns for distributed MERN apps...',
      content: `
      <p>If your backend is slow, your database is likely the bottleneck. <b>Redis</b> is the world’s fastest in-memory data store, but using it correctly is an art.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">1. The Cache-Aside Pattern</h3>
      <p>This is the standard for most <b>DevZore</b> projects. The app first checks Redis; if the data isn't there (Cache Miss), it fetches from <b>MongoDB</b> and updates the cache for the next user.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">2. Preventing Cache Stampede</h3>
      <p>When an expensive cache key expires, thousands of users might hit the DB at once. We implement "Locker" logic to ensure only one request refreshes the cache while others wait, protecting your server from crashing.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'April 20, 2026',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
      readTime: '16 min read'
    },
    {
      id: 6,
      category: 'SaaS',
      title: 'Enterprise Security: Secure RBAC in Microservices',
      excerpt: 'Building a bulletproof Authorization and Authentication layer using JWT and RSA256...',
      content: `
      <p>Security is the foundation of any SaaS enterprise. A simple "isLoggedIn" check is not enough for professional-grade software.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">RSA256 vs HS256</h3>
      <p>We use Asymmetric encryption (RSA256) where the Auth service has a Private Key to sign tokens, but other microservices only have a Public Key to verify them. This prevents a single compromised service from being able to forge tokens.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Granular Permissions</h3>
      <p>Move beyond "Admin" and "User". Our systems support specific "Scopes" (e.g., <code>report:read</code>, <code>invoice:write</code>), allowing clients to have total control over their team’s access.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'April 22, 2026',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      readTime: '13 min read'
    },
    {
      id: 7,
      category: 'Cloud',
      title: 'Dockerizing MERN: The Path to Infinite Deployment',
      excerpt: 'Streamlining CI/CD pipelines with multi-stage Docker builds and GitHub Actions...',
      content: `
      <p>The "works on my machine" era is over. <b>Docker</b> allows us to package our entire MERN environment into a portable container that runs exactly the same on a laptop as it does on a production server.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Multi-Stage Build Optimization</h3>
      <p>Standard Docker images can be 1GB+. We use multi-stage builds to compile the code and then move only the production assets to a tiny "Alpine" image, reducing size by up to 90% (from 1GB to 100MB).</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Zero-Downtime Pipelines</h3>
      <p>By integrating <b>GitHub Actions</b>, every push to the <code>main</code> branch triggers a health check. If the new build passes, the containers are swapped out automatically without the website ever going offline.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'April 24, 2026',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=800',
      readTime: '17 min read'
    },
    {
      id: 8,
      category: 'UI/UX',
      title: 'Framer Motion: Enhancing User Trust with Interaction',
      excerpt: 'Using physics-based animations to create a premium, high-end feel for SaaS dashboards...',
      content: `
      <p>In the luxury software market, the "feel" of the app is as important as its performance. Static interfaces feel dead; interactive ones feel alive.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Subtle vs Flashy</h3>
      <p>Animations should never be a distraction. We use <b>Framer Motion</b> to add "Spring" physics to buttons and page transitions. This mimics real-world physics, making the software feel more intuitive and expensive.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Layout Projections</h3>
      <p>Using <code>layoutId</code>, we can smoothly morph a small card into a full-screen modal, helping the user maintain visual context and reducing frustration during navigation.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'April 25, 2026',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
      readTime: '11 min read'
    },
    {
      id: 9,
      category: 'Engineering',
      title: 'Advanced MongoDB: Aggregations for Enterprise Reporting',
      excerpt: 'Building high-performance data processing engines for massive business datasets...',
      content: `
      <p>When dealing with millions of records—like in our recent project for a major paint company—standard find queries are not enough. You need the <b>Aggregation Framework</b>.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Optimization Stages</h3>
      <p>The secret to fast reports is the order of your pipeline stages. We always use <code>$match</code> and <code>$sort</code> at the very beginning to leverage indexes, ensuring the database only processes the necessary data.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Real-World Case Study</h3>
      <p>By implementing a custom facet-based aggregation, we enabled a client to generate complex annual inventory reports in under 300ms, down from an original 45-second manual process.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'April 26, 2026',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800',
      readTime: '19 min read'
    },
    {
      id: 10,
      category: 'Engineering',
      title: 'Zero Downtime Deployment: The Blue-Green Strategy',
      excerpt: 'How to update enterprise-grade applications without a single second of service interruption...',
      content: `
      <p>Modern software engineering demands 99.99% uptime. The "Under Maintenance" page is a relic of the past. At <b>DevZore</b>, we utilize Blue-Green deployment strategies to ensure seamless updates.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">1. Understanding the Blue-Green Model</h3>
      <p>The core concept is maintaining two identical production environments. "Blue" is the live version, while "Green" is where the new update is staged. Once the Green environment passes all automated health checks, we simply flip the <b>Nginx</b> or <b>Route 53</b> switch to point traffic to Green.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">2. Database Migration Challenges</h3>
      <p>The real challenge is data consistency. We use "Expand and Contract" patterns for database schemas. This allows both versions of the app to read/write to the same database during the transition period without causing crashes or data corruption.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'April 28, 2026',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      readTime: '16 min read'
    },
    {
      id: 11,
      category: 'SaaS',
      title: 'Building Global SaaS: Handling Timezones and Localization',
      excerpt: 'The complex engineering behind building multi-country platforms with UTC consistency...',
      content: `
      <p>Building for a global market like the Gulf (Qatar, Dubai) and South Asia (Pakistan) requires deep knowledge of how data is stored and displayed across borders.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">The UTC-First Rule</h3>
      <p>Never store local time in your database. We store everything in ISO-8601 UTC format. The conversion happens strictly at the UI layer using <b>Day.js</b> or <b>date-fns</b> based on the user's browser locale.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Internationalization (i18n) Architecture</h3>
      <p>For high-performance localization, we don't just translate text. We use <b>React-i18next</b> with lazy-loading namespaces. This ensures that a user in Dubai only loads the Arabic translation files, keeping the initial bundle size small and the application fast.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'April 30, 2026',
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800',
      readTime: '14 min read'
    },
    {
      id: 12,
      category: 'Cloud',
      title: 'Micro-Frontends: Scaling Large Scale React Apps',
      excerpt: 'Decoupling the frontend monolith into independently deployable modules using Module Federation...',
      content: `
      <p>When a team grows, a single React repository becomes a bottleneck. Micro-frontends allow multiple teams to work on different parts of the same dashboard simultaneously.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Webpack Module Federation</h3>
      <p>In 2026, we use <b>Vite</b> and Module Federation to share components between apps at runtime. Imagine the "Analytics" tab being a completely separate app that is injected into the main "DevZore" shell only when needed.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Shared State Management</h3>
      <p>Managing state across different micro-apps is tricky. We use custom events or shared <b>Zustand</b> stores to pass data between the shell and the remote modules without tight coupling.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'May 02, 2026',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
      readTime: '17 min read'
    },
    {
      id: 13,
      category: 'Engineering',
      title: 'Advanced Node.js: Event Loop and Worker Threads',
      excerpt: 'Mastering CPU-intensive tasks in a single-threaded environment without blocking the main thread...',
      content: `
      <p>Node.js is famous for being "Single Threaded," but to build a professional-grade backend, you must understand how to break that barrier when necessary.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Offloading Heavy Computations</h3>
      <p>If you are processing high-resolution images or calculating complex financial reports (like inventory stats), you risk blocking the Event Loop. We use <b>Worker Threads</b> to run these CPU-heavy tasks on separate processor cores.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Libuv and Thread Pool</h3>
      <p>Deep dive into how <b>Libuv</b> handles I/O. By fine-tuning the <code>UV_THREADPOOL_SIZE</code>, we can optimize how many concurrent database connections and file system operations your MERN app can handle before hitting a wall.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'May 05, 2026',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
      readTime: '20 min read'
    },
    {
      id: 14,
      category: 'UI/UX',
      title: 'The Psychology of Color in Enterprise Software',
      excerpt: 'How our "Coffee-Dark" theme influences user focus, trust, and long-term retention...',
      content: `
      <p>Color is more than just branding; it's a functional tool. In the DevZore design system, every hex code has a purpose.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Reducing Visual Noise</h3>
      <p>High-contrast white backgrounds cause "halatosis" or eye fatigue over long periods. Our dark-themed approach uses deep charcoals and muted purples to keep the user’s focus on the data, not the interface.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">Semantic Color Theory</h3>
      <p>We use specific tones of amber and red only for critical warnings. By limiting the use of vibrant colors to actionable items, we subconsciously train the user to identify important alerts within milliseconds, improving workplace safety and efficiency.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'May 08, 2026',
      image: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=800',
      readTime: '13 min read'
    },
    {
      id: 15,
      category: 'Engineering',
      title: 'API Security: Beyond Basic Rate Limiting',
      excerpt: 'Protecting your MERN stack from advanced DDoS and Brute Force attacks using Redis and IP-Fingerprinting...',
      content: `
      <p>Once your app goes global, it will be targeted by bots. Standard rate limiting isn't enough to stop a sophisticated attack.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">1. Dynamic Rate Limiting</h3>
      <p>Instead of a fixed "100 requests per minute," we implement dynamic throttling in <b>Express.js</b>. Using <b>Redis</b>, we track user behavior; if a user’s pattern looks like a bot, their limit is automatically tightened in real-time.</p>
      <h3 class="text-white text-2xl font-bold mt-8 mb-4">2. IP Fingerprinting and Geo-Fencing</h3>
      <p>By analyzing the request headers and JA3 fingerprints, we can identify malicious actors even if they use rotating proxies. For regional clients in Qatar or Dubai, we can also implement Geo-Fencing to block traffic from high-risk, non-target regions.</p>
    `,
      author: 'M-Shoukat Engineer',
      date: 'May 10, 2026',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      readTime: '18 min read'
    }
  ];


  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-purple-500/30">

      {/* --- AMBIENT GLOWS --- */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* --- HEADER SECTION --- */}
        <div className="mb-20 text-center lg:text-left">
          <span className="text-purple-500 text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">
            DevZore Insights
          </span>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 italic">
            TECHNICAL <span className="text-gray-500 not-italic">BLOGS</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Exploring the frontiers of full-stack engineering, cloud architecture, and high-performance software design.
          </p>
        </div>

        {/* --- CATEGORY TABS --- */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center lg:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeCategory === cat
                  ? 'bg-white text-black border-white'
                  : 'bg-white/5 text-gray-500 border-white/5 hover:border-purple-500/50 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-[#080808] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-purple-600/40 hover:bg-[#0c0c0c] transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => setSelectedBlog(post)}
            >
              <div className="h-60 overflow-hidden relative">
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[9px] font-black px-4 py-2 rounded-lg uppercase tracking-widest border border-white/10">
                    {post.category}
                  </span>
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">{post.date}</span>
                  <span className="text-[10px] text-purple-500 font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- NEWSLETTER CTA --- */}
        <div className="mt-32 p-12 lg:p-24 rounded-[4rem] bg-gradient-to-tr from-purple-900/20 to-blue-900/20 border border-white/10 relative overflow-hidden text-center group">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-white">Stay <span className="text-purple-500">Engineered</span></h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Get monthly engineering insights and architecture patterns directly in your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="name@company.com"
                className="flex-grow bg-black border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 transition-all text-sm text-white"
              />
              <button className="bg-purple-600 text-white font-black px-10 py-4 rounded-2xl hover:bg-purple-700 transition-all text-xs uppercase tracking-widest">
                Join Circle
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- FULL SCREEN MODAL --- */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop Blur */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setSelectedBlog(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-[#0a0a0a] w-full max-w-5xl h-full max-h-[90vh] rounded-[3rem] border border-white/10 overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-300">

            {/* Modal Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-20">
              <button
                onClick={() => setSelectedBlog(null)}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-all group"
              >
                <div className="bg-white/5 p-2 rounded-full group-hover:bg-purple-600 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">Back to Blogs</span>
              </button>
              <div className="hidden md:block text-[10px] font-bold text-gray-600 tracking-[0.3em] uppercase">DevZore Architecture v2.0</div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-16 lg:p-20">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-purple-600 text-white text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                    {selectedBlog.category}
                  </span>
                  <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">{selectedBlog.date} • {selectedBlog.readTime}</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-tight italic text-white uppercase">
                  {selectedBlog.title}
                </h1>

                <div className="w-full h-64 md:h-[450px] rounded-[2.5rem] overflow-hidden mb-12 border border-white/5 relative">
                  <img src={selectedBlog.image} className="w-full h-full object-cover" alt="Cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div
                  className="text-gray-400 text-lg leading-[1.8] space-y-6"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />

                {/* Author Card */}
                <div className="mt-20 pt-12 border-t border-white/5 flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                    MS
                  </div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-tight">{selectedBlog.author}</h4>
                    <p className="text-sm text-gray-500 font-medium">Software Engineer | Full-Stack Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- CUSTOM CSS --- */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #050505; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #7c3aed; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoom-in-95 { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-in { animation-fill-mode: forwards; }
        .fade-in { animation-name: fade-in; }
        .zoom-in-95 { animation-name: zoom-in-95; }
      `}</style>

    </div>
  );
};

export default BlogPage;