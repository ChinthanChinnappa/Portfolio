"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = ["hero", ...nav.map((item) => item.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = top?.target.id;
        if (id) setActive(id);
      },
      { threshold: 0.28 },
    );
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="float-nav" aria-label="Primary">
        <a className="float-nav__mark" href="#hero">
          CC
        </a>
        <ul>
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? "is-active" : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{item.index}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "CLOSE" : "MENU"}
      </button>
      <div id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`}>
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            <span>{item.index}</span>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
