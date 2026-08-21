"use client";
import { motion } from "framer-motion";

export function Entrance() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden" id="entrance">
      
      {/* Ambient background noise/grain (very subtle) */}
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
          backgroundSize: "256px 256px"
        }}
      />

      <div className="absolute top-1/4 flex justify-center w-full">
        <span className="font-sans text-xs uppercase tracking-widest opacity-50">SEVEN / 001</span>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-4 relative z-10"
      >
        <h1 className="font-display text-5xl md:text-8xl tracking-tight uppercase">SEVEN</h1>
        <h2 className="font-sans text-lg md:text-xl uppercase tracking-widest opacity-70">FRANK BEDIAKO</h2>
      </motion.div>
      
      <div className="absolute bottom-[20%] flex justify-center w-full px-4 text-center">
        <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40">
          SOFTWARE / SYSTEMS / INTELLIGENCE / HARDWARE
        </span>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center h-24">
        <motion.div
          animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-full bg-ink/30 origin-top"
        />
      </div>
    </section>
  );
}
