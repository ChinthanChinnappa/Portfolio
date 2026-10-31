"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function GlowButton({
  children,
  className = "",
  variant = "primary",
  as = "button",
  ...props
}) {
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setGlow({ x, y });
  };

  const sharedProps = {
    className: `glow-button glow-button--${variant} ${className}`.trim(),
    onPointerMove: handlePointerMove,
    style: {
      "--glow-x": `${glow.x}%`,
      "--glow-y": `${glow.y}%`,
    },
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 260, damping: 18 },
  };

  if (as === "a") {
    return (
      <motion.a {...sharedProps} {...props}>
        <span>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...sharedProps} {...props}>
      <span>{children}</span>
    </motion.button>
  );
}
