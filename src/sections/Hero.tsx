"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Hero() {
  const reduced = useReducedMotion();
  const delay = (index: number) => (reduced ? 0 : 0.12 * index);

  return (
    <section id="hero" className="section hero" data-atmosphere="hero">
      <div className="hero__meta">
        <span className="status">
          <i />
          {profile.statusLabel}
          <em>{profile.statusValue}</em>
        </span>
        <span className="meta-loc">{profile.location}</span>
      </div>
      <motion.p className="eyebrow" initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: delay(0) }}>
        {profile.role}
      </motion.p>
      <motion.h1 initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: delay(1) }}>
        {profile.name}
      </motion.h1>
      <motion.p className="hero__domains" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: delay(2) }}>
        {profile.domains}
      </motion.p>
      <motion.p className="lede" initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: delay(3) }}>
        {profile.statement}
      </motion.p>
    </section>
  );
}
