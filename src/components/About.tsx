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
    <section id="sobre" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-16 items-center">
        <div data-reveal="left" className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-ice-500/30 via-cyan-500/10 to-transparent blur-2xl" />

          <div className="relative grid grid-cols-5 gap-3 sm:gap-4 auto-rows-[80px] sm:auto-rows-[90px]">
            <div className="relative col-span-5 sm:col-span-3 row-span-3 sm:row-span-4 rounded-2xl sm:rounded-3xl overflow-hidden glass min-h-[220px]">
              <img
                src="/images/residential-cozy.jpg"
                alt="Sala com climatização"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 glass rounded-xl p-3 sm:p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-ice-400">
                  Sede
                </div>
                <div className="mt-1 text-white text-xs leading-relaxed">
                  {COMPANY.address}
                </div>
              </div>
            </div>

            <div className="relative col-span-3 sm:col-span-2 row-span-2 sm:row-span-3 rounded-2xl sm:rounded-3xl overflow-hidden glass min-h-[140px]">
              <img
                src="/images/kitchen-team.jpg"
                alt="Equipa em campo"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>

            <div className="relative col-span-2 sm:col-span-2 row-span-2 sm:row-span-3 rounded-2xl sm:rounded-3xl overflow-hidden glass min-h-[140px]">
              <img
                src="/images/horeca.jpg"
                alt="Refrigeração HORECA"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[10px] uppercase tracking-[0.18em] text-ice-400">
                HORECA
              </div>
            </div>

            <div className="relative col-span-5 sm:col-span-3 row-span-2 rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-ice-500/15 to-navy-800/60 border border-ice-500/30 p-4 sm:p-5 flex flex-col justify-between min-h-[120px]">
              <div className="text-xs uppercase tracking-[0.18em] text-ice-400">
                Experiência
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl ice-gradient-text">
                  +500
                </div>
                <div className="text-xs text-white/60 mt-1">
                  intervenções realizadas
                </div>
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
            className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight"
          >
            Local em <span className="ice-gradient-text">Vagos</span>,
            certificada para todo o país.
          </h2>
          <p
            data-reveal
            data-reveal-delay="160"
            className="mt-6 text-white/65 text-base sm:text-lg leading-relaxed"
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
