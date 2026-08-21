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
        <div className="flex flex-col gap-8">
          <span className="font-sans text-xs uppercase tracking-[0.25em]" style={{ color: "rgba(234,234,230,0.5)" }}>
            SOMETHING BIGGER.
          </span>
          <div className="relative w-48 md:w-64 h-16 md:h-20 opacity-90 transition-opacity hover:opacity-100">
             <Image 
               src="/assets/veroseven_logo_png.png" 
               alt="VeroSeven Logo" 
               fill 
               className="object-contain object-left" 
               sizes="(max-width: 768px) 192px, 256px"
               priority
             />
          </div>
        </div>

        {/* Description + CTA */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          <p className="font-sans text-sm md:text-base leading-relaxed max-w-sm" style={{ color: "rgba(234,234,230,0.75)" }}>
            A technology innovation company being built around products, digital systems,
            and emerging technologies.
          </p>
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
