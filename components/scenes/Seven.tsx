"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

import { LazyLoad } from "@/components/ui/LazyLoad";

const SevenDesktopVisual = dynamic(() => import("@/components/ui/SevenDesktopVisual").then((mod) => mod.SevenDesktopVisual), { ssr: false });

export function Seven() {
  const containerRef = useRef<HTMLElement>(null);
  const ideaRef = useRef<HTMLDivElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = containerRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    // 1. Background color transition (Light -> Dark)
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "top 20%",
      animation: gsap.to(typeof document !== 'undefined' ? document.body : "body", {
        backgroundColor: "#0A0A0A",
        color: "#EAEAE6",
        immediateRender: false,
      }),
      scrub: true,
    });

    // 2. Fade in Idea
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

    // 3. Fade in System Info
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
      
    // 4. Reveal Visual
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
      className="relative w-full flex flex-col px-6"
      id="seven-project"
    >
      {/* IDEA BLOCK */}
      <div 
        className="w-full min-h-[60vh] flex flex-col justify-center items-center py-32"
      >
        <div ref={ideaRef} className="max-w-2xl text-center flex flex-col gap-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40">
            THE QUESTION
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[1.1]">
            What if a computer could work alongside you?
          </h2>
        </div>
      </div>

      {/* SYSTEM BLOCK */}
      <div ref={systemRef} className="max-w-7xl mx-auto w-full flex flex-col gap-10 pb-32">
        {/* Label row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-current opacity-60 pb-6">
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] opacity-50">
            SEP 2024 — PRESENT
          </span>
          <div className="flex items-center gap-1.5 font-sans text-[9px] uppercase tracking-widest opacity-50">
            <span className="w-1.5 h-1.5 rounded-full bg-lime/60 inline-block" />
            IN DEVELOPMENT
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40">
            THE SYSTEM
          </span>
          <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-none">
            SEVEN
          </h2>
        </div>
        <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] opacity-50 -mt-6">
          LOCAL INTELLIGENT DESKTOP ASSISTANT
        </p>

        {/* Conceptual desktop visual */}
        <div className="mt-4" ref={visualRef}>
          <LazyLoad height="70vh">
            <SevenDesktopVisual />
          </LazyLoad>
        </div>

        {/* Statement + context */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pt-4">
          <h3 className="font-display text-2xl md:text-4xl uppercase leading-[1.1] tracking-tighter max-w-sm">
            TEACHING A COMPUTER TO WORK WITH ME.
          </h3>
          <div className="flex flex-col gap-4 max-w-sm font-sans text-xs md:text-sm leading-relaxed opacity-70">
            <p>
              Started September 2024. Original project files were lost. Development
              restarted June/July 2025.
            </p>
            <p>
              Currently exploring application launching, file search, system alerts, and OS
              interaction. AI functionality is planned — not yet implemented.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
