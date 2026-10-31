"use client";

import { useScrollProgress } from "@/lib/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ transform: `scaleY(${progress})` }} />
    </div>
  );
}
