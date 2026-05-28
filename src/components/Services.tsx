"use client";

import { SERVICES, WHATSAPP_URL } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  snowflake: (
    <path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3-3M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3" />
  ),
  heat: <path d="M12 22a7 7 0 007-7c0-5-7-13-7-13S5 10 5 15a7 7 0 007 7zM12 14v6M9 17h6" />,
  wrench: <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.8-2.8 2.3-2.7z" />,
  fridge: <path d="M5 3h14v18H5zM5 10h14M9 6v1M9 13v3" />,
  ice: <path d="M4 7l8-5 8 5v10l-8 5-8-5V7zM4 7l8 5 8-5M12 12v10" />,
  gas: <path d="M9 2h6v4l3 2v12H6V8l3-2V2zM9 12h6M9 16h6" />,
};

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <div
            data-reveal
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.18em] text-ice-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ice-400" />
            Serviços
          </div>
          <h2
            data-reveal
            data-reveal-delay="80"
            className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight"
          >
            Do <span className="ice-gradient-text">split residencial</span> à câmara frigorífica industrial.
          </h2>
          <p
            data-reveal
            data-reveal-delay="160"
            className="mt-5 text-white/65 text-base sm:text-lg leading-relaxed"
          >
            Soluções completas para casas, escritórios, restaurantes, supermercados
            e indústria. Equipamento dimensionado, instalação certificada e
            manutenção que prolonga a vida útil.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              data-reveal-delay={String(i * 60)}
              className="group relative rounded-2xl glass p-7 hover:border-ice-500/40 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ice-500/0 via-ice-500/0 to-ice-500/10 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-ice-500/20 to-cyan-500/10 border border-ice-500/30 grid place-items-center text-ice-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {ICONS[s.icon]}
                  </svg>
                </div>

                <h3 className="mt-6 font-display font-bold text-xl text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {s.desc}
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-ice-400 hover:text-ice-500 transition"
                >
                  Pedir orçamento
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
