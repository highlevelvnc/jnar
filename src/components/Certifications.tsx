"use client";

import { CERTIFICATIONS } from "@/lib/constants";

export default function Certifications() {
  return (
    <section id="certificacoes" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ice-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div
              data-reveal
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.18em] text-ice-400"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2l11-11-1.5-1.5z" />
              </svg>
              Certificações & Conformidade
            </div>
            <h2
              data-reveal
              data-reveal-delay="80"
              className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight"
            >
              O que separa um técnico <span className="ice-gradient-text">certificado</span> de um faz-tudo.
            </h2>
            <p
              data-reveal
              data-reveal-delay="160"
              className="mt-5 text-white/65 text-base sm:text-lg leading-relaxed"
            >
              Manusear gases fluorados sem certificação é ilegal em Portugal e na
              União Europeia. Trabalhamos dentro do quadro legal — com registo,
              ficha de intervenção e equipamento adequado para cada operação.
            </p>

            <div
              data-reveal
              data-reveal-delay="240"
              className="mt-8 p-5 rounded-2xl glass"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-white/40 mb-2">
                Quadro legal
              </div>
              <div className="text-sm text-white/75 leading-relaxed">
                Regulamento (UE) nº 517/2014 · Decreto-Lei nº 145/2017 ·
                Especificação Técnica APCER 3014
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={c.code}
                data-reveal
                data-reveal-delay={String(i * 100)}
                className="tap-card group relative rounded-2xl glass p-5 sm:p-7 hover:border-ice-500/40"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="shrink-0">
                    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-ice-500/30 grid place-items-center text-ice-400 font-display font-bold text-[11px] sm:text-xs tracking-tight px-1.5 text-center leading-tight">
                      {c.code}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                        {c.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                        <span className="h-1 w-1 rounded-full bg-green-400" />
                        Activa
                      </span>
                    </div>
                    <p className="mt-3 text-white/65 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
