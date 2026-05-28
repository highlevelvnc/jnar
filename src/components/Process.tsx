"use client";

import { PROCESS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="processo" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/40 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <div
            data-reveal
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.18em] text-ice-400"
          >
            Processo
          </div>
          <h2
            data-reveal
            data-reveal-delay="80"
            className="mt-5 font-display font-extrabold text-4xl sm:text-5xl tracking-tight"
          >
            Do primeiro <span className="ice-gradient-text">contacto</span> ao primeiro grau.
          </h2>
          <p
            data-reveal
            data-reveal-delay="160"
            className="mt-5 text-white/65 text-lg"
          >
            Um caminho claro, sem surpresas e sem custos escondidos.
          </p>
        </div>

        <div className="mt-20 relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-ice-500/40 to-transparent"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                data-reveal
                data-reveal-delay={String(i * 120)}
                className="relative text-center"
              >
                <div className="relative inline-grid place-items-center mb-6">
                  <div className="absolute inset-0 rounded-full bg-ice-500/20 blur-xl" />
                  <div className="relative h-24 w-24 rounded-full glass border-ice-500/30 grid place-items-center">
                    <span className="font-display font-bold text-2xl ice-gradient-text">
                      {p.step}
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs mx-auto">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
