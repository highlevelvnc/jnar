"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t1 = window.setTimeout(() => setTooltip(true), 1200);
    const t2 = window.setTimeout(() => setTooltip(false), 5200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [visible]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-end gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {tooltip && (
        <div className="hidden sm:block mb-1 rounded-xl bg-white text-navy-900 text-sm font-medium px-4 py-2.5 shadow-xl relative">
          Pedir orçamento agora
          <span className="absolute -right-1 bottom-3 h-2.5 w-2.5 rotate-45 bg-white" />
        </div>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="wa-pulse h-14 w-14 rounded-full grid place-items-center text-white shadow-2xl ring-4 ring-white/30 transition hover:scale-110"
        style={{ background: "#25D366" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.3 0-.5 0-.1-.6-1.6-.9-2.2-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1 2.9 1.2 3.1.2.2 2.1 3.2 5.1 4.5 1.8.8 2.5.9 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
          <path d="M12 0a12 12 0 00-9.9 18.7L0 24l5.5-1.7A12 12 0 1012 0zm0 22a10 10 0 01-5.3-1.5l-.4-.2-3.6 1.1 1.2-3.5-.3-.4A10 10 0 1112 22z" />
        </svg>
      </a>
    </div>
  );
}
