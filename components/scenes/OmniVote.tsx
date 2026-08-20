"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

import { LazyLoad } from "@/components/ui/LazyLoad";

const OmniVoteVisual = dynamic(() => import("@/components/ui/OmniVoteVisual").then((mod) => mod.OmniVoteVisual), { ssr: false });

export function OmniVote() {
  const containerRef = useRef<HTMLElement>(null);
  const ideaRef = useRef<HTMLDivElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

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
      
    // Parallax/Reveal Visual
    gsap.fromTo(visualRef.current, 
      { opacity: 0, scale: 0.98 },
      {
        opacity: 1, 
        scale: 1,
        scrollTrigger: {
          trigger: visualRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full px-6 flex flex-col bg-[#0A0A0A] text-[#EAEAE6]"
      id="omnivote"
    >
      {/* IDEA BLOCK */}
      <div 
        className="w-full min-h-[60vh] flex flex-col justify-center items-center py-32"
      >
        <div ref={ideaRef} className="max-w-2xl text-center flex flex-col gap-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">
            THE PROBLEM
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[1.1]">
            Large elections need more than a ballot.<br/>
            They need a system.
          </h2>
        </div>
      </div>

      {/* SYSTEM BLOCK */}
      <div 
        ref={systemRef}
        className="max-w-7xl mx-auto w-full flex flex-col gap-10 pb-32"
      >
        {/* Header row */}
        <div className="flex flex-col gap-6 border-b border-white/[0.08] pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">
                THE SYSTEM
              </span>
              <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-none">
                OMNIVOTE
              </h2>
            </div>
            <div className="flex flex-col gap-2 text-left md:text-right font-sans text-[9px] uppercase tracking-widest">
              <span className="text-white/40">CATEGORY: DIGITAL VOTING</span>
              <span className="flex items-center gap-1.5 md:justify-end mt-1">
                <span className="w-1.5 h-1.5 rounded-full border border-white/40 inline-block" />
                <span className="text-white/40">IN DEVELOPMENT</span>
              </span>
            </div>
          </div>
          <p className="font-sans text-xs md:text-sm text-white/50 max-w-sm">
            Digital Voting Platform.
          </p>
        </div>

        {/* Conceptual interface visual */}
        <div className="mt-2" ref={visualRef}>
          <LazyLoad height="80vh">
            <OmniVoteVisual />
          </LazyLoad>
        </div>

        {/* Footer row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pt-2">
          <div className="flex flex-wrap gap-2 font-sans text-[8px] uppercase tracking-widest">
            {["REACT", "TAILWIND CSS", "FASTAPI", "POSTGRESQL", "REDIS"].map(
              (t) => (
                <span
                  key={t}
                  className="border border-white/[0.12] text-white/40 px-2.5 py-1 rounded-sm"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
