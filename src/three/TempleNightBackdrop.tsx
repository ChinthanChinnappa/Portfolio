"use client";

import { useEffect } from "react";
import { TempleNightScene } from "@/shaders/temple-night/TempleNightScene";
import "@/shaders/threeui.css";

function forwardPointerToCanvas() {
  const findCanvas = () => document.querySelector<HTMLCanvasElement>(".temple-night-canvas");

  const dispatch = (type: string, event: PointerEvent) => {
    const canvas = findCanvas();
    if (!canvas) return;
    canvas.dispatchEvent(
      new PointerEvent(type, {
        clientX: event.clientX,
        clientY: event.clientY,
        pointerType: event.pointerType,
        bubbles: false,
      }),
    );
  };

  const onMove = (event: PointerEvent) => dispatch("pointermove", event);
  const onEnter = (event: PointerEvent) => dispatch("pointerenter", event);
  const onLeave = (event: PointerEvent) => dispatch("pointerleave", event);

  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerenter", onEnter, { passive: true });
  window.addEventListener("pointerleave", onLeave, { passive: true });

  return () => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerenter", onEnter);
    window.removeEventListener("pointerleave", onLeave);
  };
}

export function TempleNightBackdrop() {
  useEffect(() => forwardPointerToCanvas(), []);

  return (
    <div className="shader-frame">
      <TempleNightScene variant="temple-night" />
    </div>
  );
}
