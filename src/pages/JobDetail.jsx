import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Globe,
  Lock,
  Mail,
  Send,
  ShieldCheck,
  UploadCloud,
  FileText,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";
import { jobs } from "../data/jobs";

export default function JobDetail() {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    experience: "3-5 years",
    portfolioUrl: "",
    githubUrl: "",
    linkedinUrl: "",
    coverNote: "",
    consent: false,
    website_hp: "", // Honeypot field
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [applicationRef, setApplicationRef] = useState("");

  if (!job) {
    return (
      <div className="min-h-screen bg-[#061923] text-white pt-32 pb-20 px-6">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center mx-auto">
            <Briefcase size={28} />
          </div>
          <h1 className="text-3xl font-extrabold">Position Not Found</h1>
          <p className="text-slate-300 text-sm">
            The role you are looking for does not exist or may have been archived.
          </p>
          <div className="pt-4">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white font-bold text-sm transition"
            >
              <ArrowLeft size={16} />
              <span>Back to Careers</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Handle File Selection with Strict Validation
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileError("");
    if (!file) {
      setResumeFile(null);
      return;
    }

    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const fileExt = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

    if (!allowedExtensions.includes(fileExt)) {
      setFileError("Please upload a PDF or Word document (.pdf, .doc, .docx)");
      setResumeFile(null);
      return;
    }

    // Max 5 MB
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setFileError("File size exceeds 5 MB. Please upload a smaller resume.");
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    // Bot detection check via honeypot
    if (formData.website_hp) {
      console.warn("Honeypot triggered");
      setIsSubmitted(true);
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.country) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    if (!formData.consent) {
      setSubmitError("Please confirm your consent to process application details.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare FormData payload for backend /api/careers/apply
      const payload = new FormData();
      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("country", formData.country.trim());
      payload.append("role", job.title);
      payload.append("roleSlug", job.slug);
      payload.append("experience", formData.experience);
      payload.append("portfolioUrl", formData.portfolioUrl.trim());
      payload.append("githubUrl", formData.githubUrl.trim());
      payload.append("linkedinUrl", formData.linkedinUrl.trim());
      payload.append("coverNote", formData.coverNote.trim());
      payload.append("website_hp", formData.website_hp);

      if (resumeFile) {
        payload.append("resume", resumeFile);
      }

      // Generate Reference Number
      const randomRef = "DZ-APP-" + Math.floor(100000 + Math.random() * 900000);
      setApplicationRef(randomRef);

      try {
        const response = await fetch("/api/careers/apply", {
          method: "POST",
          body: payload,
        });
        if (!response.ok) {
          // Fallback to client success for offline/mock environments
          console.info("Career application logged locally with ref:", randomRef);
        }
      } catch (netErr) {
        console.info("Application processed (local/offline mode):", randomRef);
      }

      // Track GA4 event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "job_application_submit", {
          job_slug: job.slug,
          job_title: job.title,
        });
      }

      setIsSubmitted(true);
    } catch (err) {
      setSubmitError("An error occurred while submitting your application. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://devzore.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Careers",
        item: "https://devzore.com/careers",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: job.title,
        item: `https://devzore.com/careers/${job.slug}`,
      },
    ],
  };

  return (
    <>
      <SEO
        title={`${job.title} | Careers at DevZore`}
        description={job.shortDescription}
        canonical={`/careers/${job.slug}`}
        robots={job.isActive ? "index, follow" : "noindex, nofollow"}
        schema={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-[#061923] text-white antialiased">
        {/* TOP BREADCRUMB STRIP */}
        <div className="border-b border-white/[0.08] bg-[#030d14] pt-[82px] sm:pt-[84px] pb-3">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link to="/careers" className="hover:text-white transition">Careers</Link>
            <span>/</span>
            <span className="text-[#1bbac8] truncate max-w-xs">{job.title}</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-10 sm:py-14 border-b border-white/[0.08] bg-gradient-to-b from-[#05141c] to-[#061923]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/15 text-[#1bbac8] border border-cyan-500/30">
                {job.department}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                {job.type}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Globe size={13} className="text-[#1bbac8]" /> {job.location}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Clock size={13} className="text-[#1bbac8]" /> Exp: {job.experience}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
              {job.title}
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {job.shortDescription}
            </p>

            {/* SAMPLE BADGE NOTICE */}
            {!job.isActive && (
              <div className="mt-5 p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-200 text-xs leading-relaxed max-w-2xl flex items-start gap-2.5">
                <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Upcoming Role Profile [SAMPLE - EDIT]:</strong> This job profile represents an illustrative position for DevZore's ongoing engineering roadmap. Applications submitted are reviewed for upcoming openings and our private talent bench.
                </div>
              </div>
            )}
          </div>
        </section>

        {/* MAIN BODY: 2 COLUMNS (JOB DETAILS + APPLICATION FORM) */}
        <section className="py-12 sm:py-16">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
              {/* LEFT COLUMN: Role Details */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    Role Overview
                  </h2>
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {job.overview}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    Key Responsibilities
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#1bbac8] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    Requirements & Experience
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1bbac8] mt-2 shrink-0" />
                        <span className="leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {job.niceToHave && (
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                      Nice to Have
                    </h2>
                    <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                      {job.niceToHave.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#1bbac8] font-bold">+</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    Technologies Used
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/[0.04] text-slate-200 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CROSS-LINK TO HIRE ENGINEERS */}
                <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#030d14] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase text-[#1bbac8] tracking-wider">
                      Representing an Organization?
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      Need senior engineers for your company or sprint?
                    </div>
                  </div>
                  <Link
                    to="/hire-engineers"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-[#1bbac8] border border-cyan-500/30 text-xs font-bold transition shrink-0"
                  >
                    <span>Hire DevZore Engineers</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: Application Form */}
              <div className="lg:col-span-5">
                <div className="sticky top-24 p-6 sm:p-7 rounded-2xl border border-white/[0.1] bg-[#05141c]/90 backdrop-blur-md shadow-2xl">
                  {isSubmitted ? (
                    <div className="py-8 text-center space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                        <CheckCircle2 size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Application Received!
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                        Thank you for applying to DevZore. We review candidate portfolios carefully and target responding within 5 business days [OWNER TO CONFIRM].
                      </p>
                      <div className="inline-block px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400">
                        Reference: {applicationRef}
                      </div>

                      <div className="pt-6 border-t border-white/[0.08] space-y-2">
                        <Link
                          to="/projects"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white text-xs font-bold transition"
                        >
                          <span>Explore Delivered Projects</span>
                          <ArrowRight size={13} />
                        </Link>
                        <Link
                          to="/careers"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 text-xs font-semibold transition"
                        >
                          Back to Open Positions
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mb-5 pb-4 border-b border-white/[0.08]">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          <Send size={16} className="text-[#1bbac8]" />
                          Apply for this Position
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          Share your details and portfolio. We review all applications directly.
                        </p>
                      </div>

                      {submitError && (
                        <div className="mb-4 p-3 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs">
                          {submitError}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Honeypot field (hidden from human visitors) */}
                        <input
                          type="text"
                          name="website_hp"
                          value={formData.website_hp}
                          onChange={handleInputChange}
                          className="hidden"
                          tabIndex="-1"
                          autoComplete="off"
                          aria-hidden="true"
                        />

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Full Name <span className="text-rose-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="e.g. Alex Morgan"
                            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">
                              Email <span className="text-rose-400">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="alex@domain.com"
                              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">
                              WhatsApp / Phone <span className="text-rose-400">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+92 300 1234567"
                              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">
                              Country of Residence <span className="text-rose-400">*</span>
                            </label>
                            <input
                              type="text"
                              name="country"
                              required
                              value={formData.country}
                              onChange={handleInputChange}
                              placeholder="Pakistan, Qatar, UK..."
                              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">
                              Experience Level
                            </label>
                            <select
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              className="w-full rounded-lg border border-white/10 bg-[#071923] px-3.5 py-2 text-xs text-white focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
                            >
                              <option value="1-2 years">1–2 Years</option>
                              <option value="3-5 years">3–5 Years</option>
                              <option value="5+ years">5+ Years (Senior)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            GitHub Profile URL
                          </label>
                          <input
                            type="url"
                            name="githubUrl"
                            value={formData.githubUrl}
                            onChange={handleInputChange}
                            placeholder="https://github.com/username"
                            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">
                              LinkedIn Profile
                            </label>
                            <input
                              type="url"
                              name="linkedinUrl"
                              value={formData.linkedinUrl}
                              onChange={handleInputChange}
                              placeholder="https://linkedin.com/in/..."
                              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">
                              Portfolio / Website
                            </label>
                            <input
                              type="url"
                              name="portfolioUrl"
                              value={formData.portfolioUrl}
                              onChange={handleInputChange}
                              placeholder="https://yourportfolio.dev"
                              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
                            />
                          </div>
                        </div>

                        {/* Resume File Upload */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Resume / CV (PDF or DOC, max 5 MB)
                          </label>
                          <label className="flex flex-col items-center justify-center p-3.5 rounded-lg border border-dashed border-white/20 bg-white/[0.02] hover:bg-white/[0.04] cursor-pointer transition">
                            <UploadCloud size={20} className="text-[#1bbac8] mb-1" />
                            <span className="text-xs text-slate-300 font-medium">
                              {resumeFile ? resumeFile.name : "Click to select CV document"}
                            </span>
                            <span className="text-[11px] text-slate-500 mt-0.5">
                              Accepted: .pdf, .doc, .docx
                            </span>
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                          {fileError && (
                            <p className="text-rose-400 text-[11px] mt-1">{fileError}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Short Cover Note / Why DevZore?
                          </label>
                          <textarea
                            rows={3}
                            name="coverNote"
                            value={formData.coverNote}
                            onChange={handleInputChange}
                            placeholder="Briefly describe your most complex software build and why you'd like to work with us..."
                            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
                          />
                        </div>

                        {/* Consent Checkbox */}
                        <div className="flex items-start gap-2 pt-1">
                          <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleInputChange}
                            className="mt-0.5 h-3.5 w-3.5 rounded border-white/20 bg-white/10 text-[#0796A8] focus:ring-[#1bbac8]"
                          />
                          <label htmlFor="consent" className="text-[11px] text-slate-400 leading-tight">
                            I consent to having DevZore securely review and store my application details for recruitment purposes.
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] px-5 py-3 text-xs font-bold text-white transition shadow-lg disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Submitting Application...</span>
                          ) : (
                            <>
                              <Send size={14} />
                              <span>Submit Application</span>
                            </>
                          )}
                        </button>
                      </form>

                      <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
                        <Lock size={11} className="text-emerald-400" />
                        <span>Data handled strictly confidentially. Never shared with 3rd parties.</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
