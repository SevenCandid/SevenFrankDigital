"use client";
import { useState, useEffect } from "react";

export function useReducedMotion() {
  const [matches, setMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMatch(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setMatch(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return matches;
}
