"use client";

import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setOn(true);
    const move = (event: PointerEvent) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  if (!on) return null;

  return (
    <div
      className="cursor"
      aria-hidden="true"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    />
  );
}
