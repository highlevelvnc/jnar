"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const fadeAt = window.setTimeout(() => setHidden(true), 700);
    const removeAt = window.setTimeout(() => setRemoved(true), 1500);
    return () => {
      clearTimeout(fadeAt);
      clearTimeout(removeAt);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] grid place-items-center bg-navy-950 transition-opacity duration-700 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-ice-500/20 blur-2xl animate-pulse" />
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          className="relative text-ice-400 animate-spin"
          style={{ animationDuration: "2.4s" }}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        >
          <path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15M12 5l-2 2M12 5l2 2M12 19l-2-2M12 19l2-2M5 12l2-2M5 12l2 2M19 12l-2-2M19 12l-2 2" />
        </svg>
      </div>
    </div>
  );
}
