"use client";

import { motion } from "framer-motion";
import { systems } from "@/data/content";

const path = ["Python", "FastAPI / REST", "Kafka", "Data Processing", "Database"];

export function Systems() {
  return (
    <section id="systems" className="section systems" data-atmosphere="systems">
      <header className="section-head">
        <span>02 — SYSTEMS</span>
        <h2>SYSTEMS</h2>
      </header>
      <div className="sys-grid">
        {Object.entries(systems).map(([group, items]) => (
          <motion.div key={group} className="sys-col" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h3>{group}</h3>
            <ul>
              {items.map((item) => (
                <motion.li key={item} whileHover={{ x: 6, color: "#fff" }} transition={{ type: "spring", stiffness: 250, damping: 18 }}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="sys-flow" aria-label="Example processing path">
        {path.map((node, index) => (
          <motion.div
            key={node}
            className="sys-node"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <motion.span whileHover={{ boxShadow: "0 0 24px rgba(224,35,28,0.18)" }}>{node}</motion.span>
            {index < path.length - 1 ? <b aria-hidden="true" /> : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
