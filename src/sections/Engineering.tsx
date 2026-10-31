"use client";

import { motion } from "framer-motion";
import { engineering } from "@/data/content";

export function Engineering() {
  return (
    <section className="section engineering" data-atmosphere="systems">
      <header className="section-head">
        <span>LAYER</span>
        <h2>ENGINEERING SYSTEM</h2>
      </header>
      <p className="lede compact">
        I enjoy working on the layer beneath applications — APIs, data pipelines, distributed systems and the
        infrastructure that makes software reliable.
      </p>
      <ol className="eng-flow">
        {engineering.map((step) => (
          <motion.li key={step} whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
            <span>{step}</span>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
