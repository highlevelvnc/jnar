"use client";

const ITEMS = [
  "Ar Condicionado",
  "Bombas de Calor",
  "Refrigeração HORECA",
  "Câmaras Frigoríficas",
  "Manutenção Preventiva",
  "Carregamento de Gás",
  "Reparação de Frio",
  "Vitrinas e Arcas",
];

export default function Stats() {
  return (
    <section className="relative py-12 border-y border-white/5 bg-navy-950/40">
      <div className="overflow-hidden">
        <div className="flex marquee-track gap-12 whitespace-nowrap">
          {[...ITEMS, ...ITEMS].map((t, i) => (
            <div key={i} className="flex items-center gap-12 text-white/40">
              <span className="font-display text-2xl">{t}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-ice-400/40">
                <path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
