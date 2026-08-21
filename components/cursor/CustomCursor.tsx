"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export type CursorState = "DEFAULT" | "VIEW" | "OPEN ↗" | "EXPLORE ↗";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("DEFAULT");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const prefersReducedMotion = useReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Traverse up to find the closest data-cursor attribute
      const cursorElement = target.closest('[data-cursor]');
      
      if (cursorElement) {
        const state = cursorElement.getAttribute('data-cursor') as CursorState;
        setCursorState(state);
      } else {
        setCursorState("DEFAULT");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center"
      style={{
        x: smoothX,
        y: smoothY,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        className="relative flex items-center justify-center bg-white rounded-full text-black font-sans text-[10px] font-bold tracking-widest uppercase overflow-hidden"
        initial={false}
        animate={{
          width: cursorState === "DEFAULT" ? 12 : 80,
          height: cursorState === "DEFAULT" ? 12 : 80,
          x: "-50%",
          y: "-50%",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <motion.span
          initial={false}
          animate={{
            opacity: cursorState === "DEFAULT" ? 0 : 1,
            scale: cursorState === "DEFAULT" ? 0.5 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          {cursorState !== "DEFAULT" && cursorState}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
