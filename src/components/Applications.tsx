"use client";

const APPS = [
  {
    img: "/images/residential-modern.jpg",
    tag: "Residencial",
    title: "Casas e apartamentos",
    desc: "Splits, multi-split e bombas de calor para conforto silencioso e eficiente.",
  },
  {
    img: "/images/horeca.jpg",
    tag: "HORECA",
    title: "Restaurantes e bares",
    desc: "Refrigeração, vitrinas, arcas e câmaras frigoríficas com manutenção rápida.",
  },
  {
    img: "/images/commercial.jpg",
    tag: "Comercial",
    title: "Escritórios e lojas",
    desc: "Climatização dimensionada para áreas amplas com vários zonamentos.",
  },
  {
    img: "/images/office.jpg",
    tag: "Indústria",
    title: "Naves e armazéns",
    desc: "Soluções industriais e câmaras frigoríficas com registo legal de gases.",
  },
];

export default function Applications() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div
              data-reveal
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.18em] text-ice-400"
            >
              Aplicações
            </div>
            <h2
              data-reveal
              data-reveal-delay="80"
              className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight"
            >
              Cada espaço, a sua{" "}
              <span className="ice-gradient-text">solução térmica</span>.
            </h2>
          </div>
          <p
            data-reveal
            data-reveal-delay="160"
            className="text-white/60 max-w-md lg:text-right"
          >
            Trabalhamos com particulares, empresas e o sector HORECA. Equipamento
            dimensionado para a utilização real, não para o catálogo.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {APPS.map((a, i) => (
            <article
              key={a.title}
              data-reveal
              data-reveal-delay={String(i * 90)}
              data-reveal-direction="scale"
              className="tap-card group relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] cursor-pointer"
            >
              <img
                src={a.img}
                alt={a.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-ice-500/0 via-transparent to-ice-500/0 group-hover:from-ice-500/20 transition duration-700" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-ice-400 mb-2 sm:mb-3">
                  <span className="h-1 w-6 bg-ice-400/60" />
                  {a.tag}
                </div>
                <h3 className="font-display font-bold text-base sm:text-xl text-white leading-tight">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 overflow-hidden">
                  {a.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
