"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GridOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on 'G' or 'g', but ignore if typing in an input
      if (
        e.key.toLowerCase() === "g" &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] pointer-events-none"
        >
          {/* Main 12-column architectural grid */}
          <div className="w-full h-full max-w-7xl mx-auto px-6">
            <div className="w-full h-full flex justify-between">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-[1px] h-full bg-current opacity-[0.07]"
                />
              ))}
              {/* Closing line for the grid */}
              <div className="w-[1px] h-full bg-current opacity-[0.07]" />
            </div>
          </div>

          {/* Horizontal blueprint lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-full h-[1px] bg-current opacity-[0.05]"
              />
            ))}
          </div>
          
          {/* Label indicating system mode */}
          <div className="absolute bottom-4 right-4 bg-lime text-black font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-sm shadow-lg">
            SYSTEM GRID: ACTIVE
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
