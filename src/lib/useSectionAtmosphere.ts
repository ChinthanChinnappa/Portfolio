"use client";

import { useEffect, useState } from "react";

const SECTION_VEIL: Record<string, number> = {
  hero: 0.22,
  work: 0.34,
  systems: 0.28,
  experiments: 0.26,
  about: 0.14,
  contact: 0.08,
};

export function useSectionAtmosphere() {
  const [veil, setVeil] = useState(SECTION_VEIL.hero);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-atmosphere]"));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.getAttribute("data-atmosphere");
        if (id && id in SECTION_VEIL) setVeil(SECTION_VEIL[id]);
      },
      { threshold: [0.18, 0.35, 0.55] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return veil;
}
