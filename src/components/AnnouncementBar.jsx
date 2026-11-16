import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { announcement } from "../data/announcement";

const AnnouncementBar = () => {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const isDismissed = sessionStorage.getItem("devzore_announcement_dismissed");
      if (isDismissed === "true") {
        setDismissed(true);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  if (!announcement?.enabled || (mounted && dismissed)) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("devzore_announcement_dismissed", "true");
    } catch {
      // ignore
    }
  };

  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 bg-[#05141c] text-white border-b border-cyan-500/20 text-xs py-2 px-4 transition-all"
    >
      <div className="max-w-[1260px] mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-2.5 text-center min-w-0">
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/15 text-[#1bbac8] text-[10px] font-bold uppercase tracking-wider shrink-0 border border-cyan-500/30">
            <Sparkles size={11} />
            Update
          </span>
          <span className="text-[11px] sm:text-[12px] font-medium text-slate-200 truncate sm:overflow-visible">
            {announcement.text}
          </span>
          {announcement.linkUrl && announcement.linkText && (
            <Link
              to={announcement.linkUrl}
              className="inline-flex items-center gap-1 font-bold text-[#1bbac8] hover:text-white transition-colors shrink-0 underline decoration-[#1bbac8]/40 hover:decoration-white"
            >
              <span>{announcement.linkText}</span>
              <ArrowRight size={11} />
            </Link>
          )}
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.08] transition shrink-0 cursor-pointer"
        >
          <X size={14} />
        </button>
      </div>
    </aside>
  );
};

export default AnnouncementBar;
