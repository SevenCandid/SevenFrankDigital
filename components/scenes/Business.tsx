"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

import { LazyLoad } from "@/components/ui/LazyLoad";

const BusinessVisual = dynamic(() => import("@/components/ui/BusinessVisual").then((mod) => mod.BusinessVisual), { ssr: false });

export function Business() {
  const containerRef = useRef<HTMLElement>(null);
  const ideaRef = useRef<HTMLDivElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

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
      className="relative w-full flex flex-col px-6"
      id="business-systems"
    >
      {/* IDEA BLOCK */}
      <div 
        className="w-full min-h-[60vh] flex flex-col justify-center items-center py-32"
      >
        <div ref={ideaRef} className="max-w-2xl text-center flex flex-col gap-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#111111]/40">
            THE NEED
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[1.1] text-[#111111]">
            Different organizations work differently.<br/>
            Their software should too.
          </h2>
        </div>
      </div>

      {/* SYSTEM BLOCK */}
      <div ref={systemRef} className="max-w-7xl mx-auto w-full flex flex-col gap-12 pb-32">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-black/[0.08] pb-8">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#111111]/40">
              THE SYSTEMS
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-none text-[#111111]">
              BUILT FOR<br className="hidden md:block" /> REAL WORK.
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-[#111111]/70 max-w-lg leading-relaxed">
            Separate, privately owned management systems built for different organizations with real operational requirements.
            Includes UPP, GREEN LITE, and DIN.
          </p>
        </div>

        {/* Systems collage visual */}
        <div>
          <LazyLoad height="90vh">
            <BusinessVisual />
          </LazyLoad>
        </div>

        {/* Modules + stack */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pt-2">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-ink/40">
              SYSTEM CAPABILITIES INCLUDE:
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 max-w-md">
              {[
                "INVENTORY", "SALES", "USERS",
                "REPORTS", "FILE STORAGE", "ATTENDANCE", 
                "STAFF MANAGEMENT", "OPERATIONS",
              ].map((m) => (
                <span key={m} className="font-sans text-[9px] text-ink/50 uppercase tracking-widest">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4 md:mt-0">
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-ink/40">
              CORE STACK
            </span>
            <div className="flex flex-wrap gap-2 max-w-xs">
              {["REACT", "TYPESCRIPT", "SQL", "SUPABASE", "VERCEL"].map((t) => (
                <span
                  key={t}
                  className="font-sans text-[8px] uppercase tracking-widest border border-black/[0.12] text-ink/50 px-2.5 py-1 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
