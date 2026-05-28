import { COMPANY, EMAIL, NAV_LINKS, PHONE_DISPLAY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:py-16 grid md:grid-cols-3 gap-10 md:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-ice-500 to-cyan-500 grid place-items-center font-display font-bold text-navy-950">
              JN
            </div>
            <div className="font-display font-bold text-white">
              {COMPANY.name}
            </div>
          </div>
          <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-xs">
            {COMPANY.tagline}. Servimos {COMPANY.region}.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">
            Navegação
          </div>
          <ul className="space-y-1 -mx-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block px-2 py-2.5 rounded-lg text-sm text-white/70 hover:text-ice-400 active:bg-white/5 transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">
            Contacto
          </div>
          <ul className="space-y-1 -mx-2 text-sm text-white/70">
            <li>
              <a href="tel:+351912307599" className="block px-2 py-2.5 rounded-lg hover:text-ice-400 active:bg-white/5 transition">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="block px-2 py-2.5 rounded-lg hover:text-ice-400 active:bg-white/5 transition break-words">
                {EMAIL}
              </a>
            </li>
            <li className="text-white/55 leading-relaxed pt-2 px-2">
              {COMPANY.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 pb-safe flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos
            reservados.
          </div>
          <div>Certificado GFEE · CAT I AIPOR · APCER ET 3014</div>
        </div>
      </div>
    </footer>
  );
}
