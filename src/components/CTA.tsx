"use client";

import {
  COMPANY,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
} from "@/lib/constants";

export default function CTA() {
  return (
    <section id="contacto" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass p-6 sm:p-10 lg:p-16">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-ice-500/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div
                data-reveal
                className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-ice-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ice-400 animate-pulse" />
                Resposta em 24h
              </div>
              <h2
                data-reveal
                data-reveal-delay="80"
                className="mt-5 font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight"
              >
                Pronto para climatizar com{" "}
                <span className="ice-gradient-text">tranquilidade</span>?
              </h2>
              <p
                data-reveal
                data-reveal-delay="160"
                className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed max-w-xl"
              >
                Conta-nos o espaço, a utilização e o que procuras. Devolvemos uma
                proposta clara, com equipamento adequado e prazo realista.
              </p>

              <div
                data-reveal
                data-reveal-delay="240"
                className="mt-9 flex flex-wrap gap-4"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-ice-500 to-cyan-500 text-navy-950 font-semibold px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base hover:shadow-2xl hover:shadow-ice-500/40 transition-all hover:-translate-y-0.5"
                >
                  Pedir orçamento no WhatsApp →
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base text-white hover:bg-white/10 transition"
                >
                  Enviar email
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {[
                {
                  label: "Telefone",
                  value: PHONE_DISPLAY,
                  href: PHONE_HREF,
                  icon: (
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  ),
                },
                {
                  label: "Email",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                  icon: (
                    <>
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 6 10-6" />
                    </>
                  ),
                },
                {
                  label: "Morada",
                  value: COMPANY.address,
                  href: "https://maps.google.com/?q=" + encodeURIComponent(COMPANY.address),
                  icon: (
                    <>
                      <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" />
                      <circle cx="12" cy="9" r="3" />
                    </>
                  ),
                },
              ].map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "Morada" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-reveal
                  data-reveal-delay={String(i * 80)}
                  className="tap-card group flex items-center gap-4 rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5 hover:bg-white/[0.06] hover:border-ice-500/30"
                >
                  <div className="h-11 w-11 rounded-xl bg-ice-500/10 border border-ice-500/30 grid place-items-center text-ice-400 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {c.icon}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                      {c.label}
                    </div>
                    <div className="mt-1 text-white text-sm font-medium truncate group-hover:text-ice-400 transition">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
