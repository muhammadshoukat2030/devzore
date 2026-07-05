import React, { useState } from 'react';
import SectionTag from '../components/SectionTag';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Helmet } from 'react-helmet-async';
import { Send, Rocket, ShieldCheck, Globe2, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "923358004900";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.target;
    const formData = new FormData(form);
    formData.append("phone_full", phoneNumber);

    try {
      const response = await fetch("https://formspree.io/f/mgozjzql", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        Swal.fire({
          title: 'Message Sent 🚀',
          text: 'DevZore team will contact you within 24 hours.',
          icon: 'success',
          confirmButtonColor: '#7c3aed',
          background: '#0a0a0a',
          color: '#fff'
        }).then(() => {
          form.reset();
          setPhoneNumber("");
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      } else throw new Error();
    } catch {
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        background: '#0a0a0a',
        color: '#fff'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>

      <Helmet>
        <title>Contact DevZore | Hire a Developer in Islamabad, Pakistan</title>
        <meta name="description" content="Get in touch with DevZore to start your web or mobile app project. Based in Islamabad, Pakistan — we work with clients globally. Free consultation, response within 24 hours." />
        <link rel="canonical" href="https://devzore.com/contact" />
        <meta property="og:title" content="Contact DevZore | Hire a Developer in Islamabad" />
        <meta property="og:description" content="Start your project with DevZore. Free consultation for web, mobile and SaaS development. Response within 24 hours." />
        <meta property="og:url" content="https://devzore.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative text-white overflow-hidden bg-[#050505] font-sans">
        {/* BACKGROUND DECOR */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" className="w-full h-full object-cover grayscale" alt="bg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

          {/* HEADER */}
          <div className="text-center mb-16">
            <SectionTag text="GLOBAL PARTNER" />
            <h1 className="text-4xl md:text-6xl font-black mt-6 tracking-tight">
              Work with <span className="text-purple-500">DevZore</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              Engineering scalable solutions for international clients. From Islamabad to the World.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">

            {/* LEFT: Trust Badges */}
            <div className="lg:col-span-5 space-y-8">
              <div className="glass-card p-8 rounded-3xl border border-white/5">
                <h2 className="text-2xl font-bold mb-8">Why Partner With Us?</h2>
                <div className="space-y-8">
                  {[
                    { icon: <ShieldCheck className="text-purple-500" />, title: "Enterprise Security", desc: "Data isolation & secure RBAC protocols." },
                    { icon: <Rocket className="text-blue-500" />, title: "Rapid Deployment", desc: "CI/CD pipelines for zero-downtime updates." },
                    { icon: <Globe2 className="text-green-500" />, title: "Global Compliance", desc: "Handling UTC timezones and ISO standards." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="p-3.5 bg-white/5 rounded-2xl border border-white/5">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a href={`https://wa.me/${whatsappNumber}`} className="bg-green-600/10 border border-green-600/20 p-6 rounded-2xl text-center hover:bg-green-600/20 transition group">
                  <span className="block text-xl font-black text-green-500 uppercase group-hover:scale-105 transition">WhatsApp</span>
                  <span className="text-[10px] text-green-600/80 font-bold tracking-widest italic">LIVE SUPPORT</span>
                </a>
                <div className="glass-card p-6 rounded-2xl text-center border border-white/5">
                  <span className="block text-xl font-black text-white uppercase">Islamabad</span>
                  <span className="text-[10px] text-gray-500 font-bold tracking-widest italic">HEADQUARTERS</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Main Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-6 sm:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Full Identity</label>
                      <input name="name" placeholder="John Doe" required className="modern-input" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Work Email</label>
                      <input name="email" type="email" placeholder="email@company.com" required className="modern-input" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone Input with Global Search */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Phone Number</label>
                      <div className="relative phone-wrapper">
                        <PhoneInput
                          country={'pk'}
                          enableSearch={true}
                          value={phoneNumber}
                          onChange={setPhoneNumber}
                          containerClass="phone-container"
                          inputClass="modern-input !pl-[60px] !h-[51px] padding-38px"
                          buttonClass="phone-dropdown-btn"
                          dropdownClass="phone-dropdown-list"
                          searchClass="phone-search-field"
                        />
                      </div>
                    </div>

                    {/* Complete Service Dropdown */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Core Service</label>
                      <div className="relative">
                        <select name="project_type" required className="modern-input appearance-none pr-10">
                          <option value="">Select Service</option>
                          <option>🚀 Full Stack Web App (MERN)</option>
                          <option>⚡ Next.js / React Development</option>
                          <option>💎 Personal Portfolio & Resume</option>
                          <option>🛒 E-commerce Solution (Custom/Shopify)</option>
                          <option>📱 Mobile App Development</option>
                          <option>🎨 UI/UX Design & Branding</option>
                          <option>🏢 Corporate/Business Website</option>
                          <option>⚙️ Backend API & Architecture</option>
                          <option>🔥 Landing Page Optimization</option>
                          <option>🛠 Bug Fixing, Audit & Maintenance</option>
                          <option>📦 Product Management Application</option>
                          <option>🌍 Localization & Multilingual SEO</option>
                          <option>✨ Custom Digital Transformation</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* UX OPTIMIZED BUDGET DROPDOWN */}
                  {/* <div className="space-y-3">
                    <label className="text-[11px] uppercase tracking-[0.3em] font-black text-purple-500/80 ml-1">Project Investment (Flexible)</label>
                    <div className="relative">
                      <select name="budget" required className="modern-input appearance-none pr-10 cursor-pointer">
                        <option value="">Choose your investment range</option>
                        <option value="startup">$199 – $499 (Landing / Personal Portfolio)</option>
                        <option value="business">$500 – $1,299 (Corporate / Business Site)</option>
                        <option value="pro">$1,300 – $2,999 (E-commerce / MERN App)</option>
                        <option value="enterprise">$3,000 – $7,000+ (Custom SaaS / Enterprise)</option>
                        <option value="undecided">I prefer to discuss based on requirements</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-4 h-4" />
                    </div>
                    <p className="text-[10px] text-gray-500 italic ml-1">*Ranges are estimated. Final quote provided after brief analysis.</p>
                  </div> */}

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Technical Brief</label>
                    <textarea name="message" placeholder="Briefly describe your requirements..." required className="modern-input h-32 resize-none leading-relaxed"></textarea>
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 py-4.5 rounded-2xl font-black text-lg shadow-[0_10px_30px_rgba(124,58,237,0.3)] flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70"
                  >
                    {isSubmitting ? "PROCESSING..." : "INITIATE PROJECT"}
                    <Send size={20} className={isSubmitting ? "animate-pulse" : "group-hover:translate-x-1 transition-transform"} />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

        <style jsx global>{`
            .glass-card {
              background: rgba(12, 12, 12, 0.6);
              backdrop-filter: blur(25px);
            }

            .modern-input {
              width: 100% !important;
              background: rgba(255, 255, 255, 0.03) !important;
              border: 1px solid rgba(255, 255, 255, 0.08) !important;
              padding: 15px 20px !important;
              border-radius: 16px !important;
              outline: none !important;
              color: white !important;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
              font-size: 0.95rem !important;
            }

            .modern-input:focus {
              border-color: #7c3aed !important;
              background: rgba(255, 255, 255, 0.07) !important;
              box-shadow: 0 0 20px rgba(124, 58, 237, 0.15) !important;
            }

            /* Phone Input Styling */
            .phone-container { border: none !important; width: 100% !important; }
            .phone-dropdown-btn {
              background: transparent !important;
              border: none !important;
              border-radius: 16px 0 0 16px !important;
              width: 60px !important;
            }
            .phone-dropdown-btn .selected-flag { width: 100% !important; padding: 0 !important; display: flex !important; justify-content: center !important; }
            
            .phone-dropdown-list {
              background: #0d0d0d !important;
              color: white !important;
              border: 1px solid #222 !important;
              border-radius: 14px !important;
              box-shadow: 0 10px 40px rgba(0,0,0,0.8) !important;
              width: 300px !important;
            }
            
            .phone-dropdown-list .country:hover { background: #7c3aed !important; }
            .phone-search-field {
              background: #1a1a1a !important;
              color: white !important;
              border: 1px solid #333 !important;
              border-radius: 8px !important;
              margin: 10px !important;
              width: calc(100% - 20px) !important;
            }

            select option { background: #0a0a0a; color: white; padding: 10px; }
            
            input::placeholder, textarea::placeholder {
              color: rgba(255,255,255,0.2) !important;
            }

            .py-4\.5 { padding-top: 1.125rem; padding-bottom: 1.125rem; }
            /* Mobile Optimization for Select and Inputs */
            @media (max-width: 640px) {
            .modern-input { 
              padding: 14px 18px !important; 
              /* Font size ko 0.85rem kiya gaya hai take dropdown options fit aayein */
              font-size: 0.85rem !important; 
            }
      
            /* Safari aur Chrome mobile ke liye specific font adjustment */
            select.modern-input {
              font-size: 0.82rem !important;
              letter-spacing: -0.01em;
            }

              /* Dropdown ke andar jo options hain unka size control karne ke liye */
              select.modern-input option {
                font-size: 0.85rem !important;
              }
            }
          `}</style>

      </section>
    </>
  );
};

export default Contact;
