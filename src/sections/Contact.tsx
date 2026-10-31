import { GlowButton } from "@/components/GlowButton";
import { profile } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="section contact" data-atmosphere="contact">
      <header className="section-head">
        <span>05 — CONTACT</span>
        <h2>LET&apos;S BUILD SOMETHING.</h2>
      </header>
      <p className="status contact-status">
        <i />
        CONNECTION READY
      </p>
      <div className="contact-actions">
        <GlowButton as="a" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </GlowButton>
        <GlowButton as="a" href={`mailto:${profile.email}`} variant="secondary">
          Email me
        </GlowButton>
      </div>
      <ul className="contact-links">
        <li>
          <span>GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/ChinthanChinnappa
          </a>
        </li>
        <li>
          <span>LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/chinthanchinnappapt
          </a>
        </li>
        <li>
          <span>Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
      </ul>
    </section>
  );
}
