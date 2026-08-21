"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

import { LazyLoad } from "@/components/ui/LazyLoad";

const SmartHomeVisual = dynamic(() => import("@/components/ui/SmartHomeVisual").then((mod) => mod.SmartHomeVisual), { ssr: false });

export function SmartHome() {
  const containerRef = useRef<HTMLElement>(null);
  const ideaRef = useRef<HTMLDivElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = containerRef.current;
    if (!section) return;

    // Fade in Idea
    gsap.fromTo(ideaRef.current, 
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0,
        scrollTrigger: {
          trigger: ideaRef.current,
          start: "top 75%",
          end: "top 40%",
          scrub: true,
        }
      }
    );

    // Fade in System Info
    gsap.fromTo(systemRef.current, 
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0,
        scrollTrigger: {
          trigger: systemRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: true,
        }
      }
    );
      
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col"
      id="smarthome"
    >
      {/* IDEA BLOCK */}
      <div 
        className="w-full min-h-[60vh] flex flex-col justify-center items-center py-32 px-6"
      >
        <div ref={ideaRef} className="max-w-2xl text-center flex flex-col gap-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#111111]/40">
            THE QUESTION
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[1.1]">
            What happens when software moves beyond the screen?
          </h2>
        </div>
      </div>

      {/* SYSTEM BLOCK */}
      <div ref={systemRef} className="relative z-0 w-full flex flex-col pb-32">
        {/* Full-bleed image area */}
        <div className="w-full">
          <LazyLoad height="100vh">
            <SmartHomeVisual />
          </LazyLoad>
        </div>

        {/* Text below image */}
        <div className="max-w-7xl mx-auto w-full px-6 py-16 md:py-20 flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#111111]/40">
              THE SYSTEM
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#111111]/30 mt-2">
              DEC 2025 — PRESENT
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-none">
              SMART HOME
              <br />
              AUTOMATION
            </h2>
          </div>

          <div className="flex flex-col gap-5 max-w-xs md:max-w-sm md:pt-14">
            <p className="font-sans text-xs md:text-sm text-[#111111]/60 leading-relaxed">
              Software meets hardware. Automating physical environments through code, sensors, and connectivity.
            </p>
            <div className="flex items-center gap-2 font-sans text-[9px] uppercase tracking-widest text-[#111111]/40">
              <span>SOFTWARE</span>
              <span className="opacity-30">×</span>
              <span>HARDWARE</span>
              <span className="opacity-30">×</span>
              <span>AUTOMATION</span>
            </div>
            <div className="flex items-center gap-1.5 font-sans text-[9px] uppercase tracking-widest text-[#111111]/50 mt-2">
              <span className="w-1.5 h-1.5 rounded-full border border-[#111111]/30 inline-block" />
              IN DEVELOPMENT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
