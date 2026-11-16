import React from "react";
import { MessageCircle } from "lucide-react";

/**
 * Mobile-safe Floating WhatsApp Button
 * Positioned on the bottom right with clear margins to avoid covering form buttons or text on mobile.
 */
export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20a%20project.";

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6 pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DevZore on WhatsApp"
        className="group relative flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_12px_36px_rgba(37,211,102,0.45)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <MessageCircle size={22} className="fill-current text-white stroke-[1.8]" />
        </span>
        <span className="hidden sm:inline-block text-[13px] font-semibold tracking-tight text-white pr-1">
          Chat on WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
      </a>
    </aside>
  );
}
