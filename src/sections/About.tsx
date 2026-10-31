import { about, achievements } from "@/data/content";

export function About() {
  return (
    <section id="about" className="section about" data-atmosphere="about">
      <header className="section-head">
        <span>04 — ABOUT</span>
        <h2>ABOUT THE ENGINEER</h2>
      </header>
      <p className="lede">{about.text}</p>
      <div className="about-grid">
        <div>
          <h3>EDUCATION</h3>
          <p>{about.education}</p>
          <p className="muted">{about.school}</p>
        </div>
        <div>
          <h3>INTERESTS</h3>
          <ul className="interest">
            {about.interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="timeline-wrap">
        <h3>SIGNAL LOG</h3>
        <ol className="timeline">
          {achievements.map((item) => (
            <li key={item.event}>
              <span>{item.note}</span>
              <strong>{item.event}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
