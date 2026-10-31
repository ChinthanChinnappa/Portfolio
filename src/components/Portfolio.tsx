"use client";

import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Cursor } from "@/components/Cursor";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Engineering } from "@/sections/Engineering";
import { Experiments } from "@/sections/Experiments";
import { Hero } from "@/sections/Hero";
import { Systems } from "@/sections/Systems";
import { Work } from "@/sections/Work";
import { TempleNightBackdrop } from "@/three/TempleNightBackdrop";
import { useSectionAtmosphere } from "@/lib/useSectionAtmosphere";

export function Portfolio() {
  const veil = useSectionAtmosphere();

  return (
    <>
      <TempleNightBackdrop />
      <div className="ui-veil" style={{ opacity: veil }} />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main className="stage">
        <Hero />
        <Work />
        <Systems />
        <Engineering />
        <Experiments />
        <About />
        <Contact />
      </main>
    </>
  );
}
