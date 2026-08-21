"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

export function VeroSeven() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

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
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full px-6 py-32 flex flex-col justify-center"
      id="veroseven"
    >
      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(234,234,230,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(234,234,230,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-16">
        {/* Label */}
        <div className="flex flex-col gap-2">
          <span className="font-sans text-[9px] uppercase tracking-[0.3em]" style={{ color: "rgba(234,234,230,0.4)" }}>
            11 / VEROSEVEN
          </span>
          <div className="h-px w-8" style={{ backgroundColor: "rgba(234,234,230,0.2)" }} />
        </div>

        {/* Main Brand Reveal */}
        <div className="flex flex-col gap-4">
          <span className="font-sans text-xs uppercase tracking-[0.25em]" style={{ color: "rgba(234,234,230,0.5)" }}>
            SOMETHING BIGGER.
          </span>
          <div className="flex flex-col md:items-start gap-4 md:gap-8">
            <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter leading-[0.9] flex flex-col gap-2" style={{ color: "#EAEAE6" }}>
              <span className="flex items-start gap-4">
                VEROSEVEN
                <span className="relative inline-block h-[0.8em] w-[0.8em] md:h-[0.9em] md:w-[0.9em] opacity-40 mix-blend-screen transition-opacity hover:opacity-100 self-center">
                   <Image 
                     src="/assets/veroseven_logo_png.png" 
                     alt="VeroSeven Logo" 
                     fill 
                     className="object-contain" 
                     sizes="(max-width: 768px) 128px, 256px"
                     priority
                   />
                </span>
              </span>
              <span>INNOVATIONS</span>
            </h2>
          </div>
        </div>

        {/* Description + CTA + Logo Signature */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start mt-4">
          <div className="flex flex-col gap-8 max-w-sm">
            <p className="font-sans text-sm md:text-base leading-relaxed" style={{ color: "rgba(234,234,230,0.75)" }}>
              A technology innovation company being built around products, digital systems,
              and emerging technologies.
            </p>
          </div>

          <a
            href="#"
            className="font-sans text-[10px] uppercase tracking-widest border-b pb-0.5 hover:opacity-100 transition-opacity mt-2 md:mt-1 self-start"
            style={{ color: "rgba(234,234,230,0.6)", borderColor: "rgba(234,234,230,0.4)" }}
            data-cursor="EXPLORE ↗"
          >
            EXPLORE VEROSEVEN ↗
          </a>
        </div>
      </div>
    </section>
  );
}
