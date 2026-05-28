"use client";

import { useEffect, useRef } from "react";
import { WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY } from "@/lib/constants";

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!orbRef.current) return;
      const y = window.scrollY;
      orbRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20"
    >
      {/* grid bg */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* floating orb */}
      <div
        ref={orbRef}
        className="absolute -right-40 sm:-right-32 top-1/4 h-[320px] w-[320px] sm:h-[520px] sm:w-[520px] rounded-full bg-gradient-to-br from-ice-500/30 sm:from-ice-500/40 via-cyan-500/20 to-transparent blur-3xl pointer-events-none"
      />
      <div className="hidden sm:block absolute left-10 bottom-10 h-72 w-72 rounded-full bg-ice-600/15 blur-3xl pointer-events-none" />

      {/* snowflakes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[15, 35, 55, 75, 88].map((left, i) => (
          <svg
            key={i}
            className="absolute float-y text-ice-400/30"
            style={{
              left: `${left}%`,
              top: `${20 + i * 12}%`,
              animationDelay: `${i * 0.7}s`,
            }}
            width={i % 2 ? 18 : 26}
            height={i % 2 ? 18 : 26}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
        <div className="lg:col-span-7">
          <div
            data-reveal
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.18em] text-ice-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ice-400 animate-pulse" />
            Certificado GFEE · APCER · CAT I
          </div>

          <h1
            data-reveal
            data-reveal-delay="80"
            className="mt-6 font-display font-extrabold text-[2.5rem] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            <span className="text-white">Climatização</span>
            <br />
            <span className="ice-gradient-text">de outra dimensão.</span>
          </h1>

          <p
            data-reveal
            data-reveal-delay="160"
            className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
          >
            Instalação e manutenção de ar condicionado, bombas de calor e
            refrigeração comercial em Vagos, Aveiro e Centro do país. Trabalho
            executado por técnico certificado — com garantia, conformidade legal
            e zero improviso.
          </p>

          <div
            data-reveal
            data-reveal-delay="240"
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-ice-500 to-cyan-500 text-navy-950 font-semibold px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base hover:shadow-2xl hover:shadow-ice-500/50 transition-all hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.3 0-.5 0-.1-.6-1.6-.9-2.2-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1 2.9 1.2 3.1.2.2 2.1 3.2 5.1 4.5 1.8.8 2.5.9 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
                <path d="M12 0a12 12 0 00-9.9 18.7L0 24l5.5-1.7A12 12 0 1012 0zm0 22a10 10 0 01-5.3-1.5l-.4-.2-3.6 1.1 1.2-3.5-.3-.4A10 10 0 1112 22z" />
              </svg>
              Falar agora no WhatsApp
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 rounded-full glass px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base text-white font-medium hover:bg-white/5 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" />
              </svg>
              {PHONE_DISPLAY}
            </a>
          </div>

          <div
            data-reveal
            data-reveal-delay="320"
            className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg"
          >
            {[
              { n: "100%", l: "Equipa certificada" },
              { n: "24/48h", l: "Resposta a orçamento" },
              { n: "UE 517", l: "Conformidade legal" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-bold text-xl sm:text-2xl text-white">
                  {s.n}
                </div>
                <div className="text-[11px] sm:text-xs text-white/50 mt-1 leading-tight">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual card */}
        <div className="lg:col-span-5" data-reveal data-reveal-delay="200">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-ice-500/30 to-transparent blur-2xl" />

            {/* Photo behind dashboard */}
            <div
              className="absolute -right-6 -top-10 hidden md:block w-72 h-96 rounded-3xl overflow-hidden border border-white/10 opacity-90 float-y"
              style={{ animationDuration: "9s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent z-10" />
              <img
                src="/images/residential-modern.jpg"
                alt="Casa moderna com climatização"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <div className="relative glass rounded-3xl p-6 sm:p-8 glow-ring">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.18em] text-ice-400">
                  Painel · Equipamento
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="font-display text-6xl sm:text-7xl font-extrabold ice-gradient-text leading-none">
                  21°
                </div>
                <div className="mt-2 text-sm text-white/60">
                  Modo Frio · Inverter A+++
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2">
                {["AUTO", "FRIO", "QUENTE"].map((m, i) => (
                  <div
                    key={m}
                    className={`text-center text-xs py-3 rounded-xl border ${
                      i === 1
                        ? "bg-ice-500/10 border-ice-500/40 text-ice-400"
                        : "border-white/5 text-white/40"
                    }`}
                  >
                    {m}
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { k: "Consumo", v: "0.48 kWh", w: "32%" },
                  { k: "Eficiência", v: "SEER 8.5", w: "92%" },
                  { k: "Ruído", v: "19 dB", w: "18%" },
                ].map((row) => (
                  <div key={row.k}>
                    <div className="flex justify-between text-xs text-white/60 mb-1.5">
                      <span>{row.k}</span>
                      <span className="text-white/90 font-medium">{row.v}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-ice-500 to-cyan-500 rounded-full"
                        style={{ width: row.w }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-white/50">Estado</span>
                <span className="inline-flex items-center gap-2 text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Operacional
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs flex flex-col items-center gap-2">
        <span className="uppercase tracking-[0.3em]">scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-ice-400/60 to-transparent" />
      </div>
    </section>
  );
}
