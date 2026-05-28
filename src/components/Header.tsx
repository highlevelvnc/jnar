"use client";

import { useEffect, useState } from "react";
import { COMPANY, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-ice-500 to-cyan-500 grid place-items-center font-display font-bold text-navy-950 text-lg shadow-lg shadow-ice-500/30">
            JN
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/30 group-hover:ring-white/60 transition" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="font-display font-bold text-sm tracking-wide text-white">
              {COMPANY.name}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-ice-400/80">
              Climatização certificada
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-white/70 hover:text-white transition relative group"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-ice-400 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ice-500 to-cyan-500 text-navy-950 font-semibold text-sm px-5 py-2.5 hover:shadow-lg hover:shadow-ice-500/40 transition-all hover:-translate-y-0.5"
          >
            Pedir orçamento
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
            </svg>
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden h-10 w-10 grid place-items-center rounded-lg bg-white/5 border border-white/10 text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-5 mt-3 rounded-2xl glass p-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
