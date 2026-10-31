import { experiments } from "@/data/content";

export function Experiments() {
  return (
    <section id="experiments" className="section experiments" data-atmosphere="experiments">
      <header className="section-head">
        <span>03 — EXPERIMENTS</span>
        <h2>EXPERIMENTS</h2>
      </header>
      <p className="lede compact">A laboratory of personal technical exploration — not a metrics wall.</p>
      <ul className="lab">
        {experiments.map((item) => (
          <li key={item.name}>
            <strong>{item.name}</strong>
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
