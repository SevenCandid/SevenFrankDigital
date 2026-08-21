"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

import { LazyLoad } from "@/components/ui/LazyLoad";

const DontWaitVisual = dynamic(() => import("@/components/ui/DontWaitVisual").then((mod) => mod.DontWaitVisual), { ssr: false });

export function DontWait() {
  const containerRef = useRef<HTMLElement>(null);
  const numberSceneRef = useRef<HTMLDivElement>(null);
  const q47 = useRef<HTMLDivElement>(null);
  const q46 = useRef<HTMLDivElement>(null);
  const q45 = useRef<HTMLDivElement>(null);
  const msg = useRef<HTMLDivElement>(null);
  const ideaRef = useRef<HTMLDivElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Scene C (Numbers) - untouched
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: numberSceneRef.current,
        start: "top top", // Pin when the scene hits the top of the viewport
        end: "+=200%", // Scroll distance to keep it pinned
        pin: true,
        pinSpacing: true, // Pushes subsequent content down
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      },
      paused: true, // Start paused, let scrollTrigger play it
    });

    // Ensure all elements are initially hidden but occupy space/position correctly
    gsap.set([q47.current, q46.current, q45.current, msg.current], { 
      opacity: 0,
      visibility: "hidden"
    });
    
    // 047 fades in, then fades out
    tl.to(q47.current, { opacity: 1, autoAlpha: 1, duration: 1 })
      .to(q47.current, { opacity: 0, autoAlpha: 0, duration: 1 })
      
      // 046 fades in, then fades out
      .to(q46.current, { opacity: 1, autoAlpha: 1, duration: 1 })
      .to(q46.current, { opacity: 0, autoAlpha: 0, duration: 1 })
      
      // 045 fades in and stays
      .to(q45.current, { opacity: 1, autoAlpha: 1, duration: 1 })
      
      // Message appears below 045
      .to(msg.current, { opacity: 1, autoAlpha: 1, duration: 1 });

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

  }, { scope: containerRef }); // Context cleanup handles strict mode double-renders

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col items-center"
      id="dontwait"
    >
      {/* 
        SCENE C: DONTWAIT QUEUE NUMBER
        Own viewport, pinned independently.
        Uses absolute positioning inside a relative wrapper so numbers stack.
      */}
      <div 
        className="w-full h-screen flex flex-col justify-center items-center px-6 relative z-10" 
        ref={numberSceneRef}
      >
        <div className="relative w-full h-64 flex flex-col items-center justify-center">
          <div ref={q47} className="absolute inset-0 flex items-center justify-center font-display text-[22vw] md:text-[12vw] leading-none tracking-tighter text-[#111111]">
            047
          </div>
          <div ref={q46} className="absolute inset-0 flex items-center justify-center font-display text-[22vw] md:text-[12vw] leading-none tracking-tighter text-[#111111]">
            046
          </div>
          <div ref={q45} className="absolute inset-0 flex items-center justify-center font-display text-[22vw] md:text-[12vw] leading-none tracking-tighter text-[#111111]">
            045
          </div>
        </div>
        
        {/* Message sits below the numbers */}
        <div className="h-16 flex items-center justify-center mt-4">
          <div ref={msg} className="px-5 py-2.5 border border-ink/20 rounded-full font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#111111]">
            YOUR TURN IS APPROACHING
          </div>
        </div>
      </div>

      {/* 
        SCENE D: DONTWAIT PROJECT INFORMATION
        Normal scrolling foreground section.
        Not inside the pinned container!
      */}
      <div className="w-full max-w-7xl mx-auto px-6 relative z-20 flex flex-col">
        
        {/* IDEA BLOCK */}
        <div 
          className="w-full min-h-[60vh] flex flex-col justify-center items-center py-32"
        >
          <div ref={ideaRef} className="max-w-2xl text-center flex flex-col gap-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#111111]/40">
              THE FRICTION
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[1.1] text-[#111111]">
              Waiting shouldn&apos;t require being physically present.
            </h2>
          </div>
        </div>

        {/* SYSTEM BLOCK */}
        <div ref={systemRef} className="flex flex-col md:flex-row gap-12 items-start pb-32 pt-10 border-t border-black/[0.08]">
          {/* Left: info */}
          <div className="flex flex-col gap-6 w-full md:w-2/5 shrink-0">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#111111]/40 mb-1">
                THE SYSTEM
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#111111]/50">
                MAY 2026 — PRESENT
              </span>
              <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tighter leading-none mt-2 text-[#111111]">
                DONTWAIT
              </h2>
            </div>

            <p className="font-sans text-sm md:text-base leading-relaxed max-w-sm text-[#111111]/80">
              DONTWAIT is a smart queue management system where users can join a queue remotely, receive an estimated wait time and queue position, and receive notification when their turn is approaching.
            </p>

            <div className="flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-widest mt-2 text-[#111111]/60">
              <span className="w-1.5 h-1.5 rounded-full border border-ink/40 inline-block" />
              IN DEVELOPMENT
            </div>

            {/* Flow */}
            <div className="flex flex-col gap-1 font-sans text-[10px] uppercase tracking-[0.25em] mt-4 text-[#111111]/40">
              {["JOIN", "ESTIMATE", "WAIT", "NOTIFY", "ARRIVE"].map((step, i, arr) => (
                <div key={step} className="flex flex-col gap-1">
                  <span className={i === arr.length - 1 ? "text-[#111111]/80" : ""}>{step}</span>
                  {i < arr.length - 1 && <span className="opacity-40">↓</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Right: conceptual interface */}
          <div className="w-full md:w-3/5">
            <LazyLoad height="80vh">
              <DontWaitVisual />
            </LazyLoad>
          </div>
        </div>
      </div>
    </section>
  );
}
