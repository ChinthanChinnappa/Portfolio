"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.25,
      lerp: 0.08,
      infinite: false,
    });

    const tick = (time: number) => {
      lenis.raf(time);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project, .sys-col, .eng-flow li").forEach((element, index) => {
        gsap.set(element, { autoAlpha: 0, y: 42, scale: 0.98, rotateX: 7 });

        gsap.to(element, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.05,
          ease: "power3.out",
          delay: index * 0.05,
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true,
          },
        });

        gsap.to(element, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(tick);
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
