"use client";

import { COMPANY } from "@/lib/constants";

const POINTS = [
  "Equipa pequena, focada e disponível — falas sempre com quem executa.",
  "Material de marcas reconhecidas e dimensionado ao espaço, não ao catálogo.",
  "Registo de todas as intervenções e gases manuseados.",
  "Acompanhamento pós-instalação e plano de manutenção opcional.",
];

export default function About() {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-16 items-center">
        <div data-reveal="left" className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-ice-500/20 via-cyan-500/10 to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />

            {/* decorative tech pattern */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              viewBox="0 0 400 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {Array.from({ length: 12 }).map((_, i) => (
                <circle
                  key={i}
                  cx="200"
                  cy="250"
                  r={20 + i * 18}
                  stroke="url(#g1)"
                  strokeWidth="0.5"
                />
              ))}
              <circle cx="200" cy="250" r="60" fill="url(#g1)" opacity="0.4" />
            </svg>

            {/* big snowflake */}
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-ice-400 float-y"
              width="160"
              height="160"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeLinecap="round"
            >
              <path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15M12 5l-2 2M12 5l2 2M12 19l-2-2M12 19l2-2M5 12l2-2M5 12l2 2M19 12l-2-2M19 12l-2 2" />
            </svg>

            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-ice-400">
                Sede
              </div>
              <div className="mt-1 text-white font-medium text-sm leading-relaxed">
                {COMPANY.address}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            data-reveal
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.18em] text-ice-400"
          >
            Sobre nós
          </div>
          <h2
            data-reveal
            data-reveal-delay="80"
            className="mt-5 font-display font-extrabold text-4xl sm:text-5xl tracking-tight"
          >
            Local em <span className="ice-gradient-text">Vagos</span>,
            certificada para todo o país.
          </h2>
          <p
            data-reveal
            data-reveal-delay="160"
            className="mt-6 text-white/65 text-lg leading-relaxed"
          >
            A JN Ar Condicionado nasce da convicção de que climatização não é
            apenas instalar uma máquina — é resolver um problema térmico com
            engenharia, materiais certos e cumprimento legal. Servimos
            particulares, empresas e o sector HORECA com a mesma exigência.
          </p>

          <ul className="mt-9 space-y-4">
            {POINTS.map((p, i) => (
              <li
                key={p}
                data-reveal
                data-reveal-delay={String(200 + i * 80)}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 mt-0.5 h-6 w-6 rounded-full bg-ice-500/15 border border-ice-500/40 grid place-items-center text-ice-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2l11-11-1.5-1.5z" />
                  </svg>
                </div>
                <span className="text-white/75 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
