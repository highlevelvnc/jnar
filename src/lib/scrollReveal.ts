"use client";

export function initScrollReveal(root: HTMLElement | Document = document) {
  const els = root.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!els.length) return () => {};

  els.forEach((el) => {
    if (!el.hasAttribute("data-revealed")) {
      el.setAttribute("data-revealed", "false");
    }
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay || 0);
          window.setTimeout(() => {
            el.setAttribute("data-revealed", "true");
          }, delay);
          io.unobserve(el);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
  );

  els.forEach((el) => io.observe(el));

  const fallback = window.setTimeout(() => {
    document
      .querySelectorAll<HTMLElement>('[data-reveal][data-revealed="false"]')
      .forEach((el) => el.setAttribute("data-revealed", "true"));
  }, 3500);

  return () => {
    io.disconnect();
    window.clearTimeout(fallback);
  };
}
