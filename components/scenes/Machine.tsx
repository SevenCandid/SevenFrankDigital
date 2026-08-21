// Machine scene — editorial technical annotation composition
// Readability pass: annotations lowered, primary text at full contrast
"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

export function Machine() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Fade in from Build, fade out to Nexra
    gsap.fromTo(contentRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        }
      }
    );

    // Parallax for images
    gsap.fromTo(imagesRef.current,
      { y: 50, opacity: 0 },
      {
        y: -30,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      }
    );

    gsap.to(contentRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom 80%",
        end: "bottom 30%",
        scrub: true,
      }
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#F4F4F0]"
      id="machine"
    >
      {/* Fine grid — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Hardware Editorial Images (Desktop: Absolute layered, Mobile: Flex stacked) */}
      <div ref={imagesRef} className="absolute inset-0 z-0 hidden md:block pointer-events-auto">
        {/* Primary Anchor: Frank Electronics */}
        <div className="absolute right-[5%] bottom-[10%] w-[35vw] group" data-cursor="VIEW">
          <div className="relative w-full aspect-[4/3] bg-black/5 p-2 pb-8 border border-black/10 shadow-lg transform transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:shadow-2xl bg-white">
             <div className="relative w-full h-full overflow-hidden">
               <Image src="/assets/frank_electronic.png" alt="Frank Bediako working with electronic components" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
             </div>
             <span className="absolute bottom-2 left-3 font-sans text-[8px] uppercase tracking-widest text-black/40">HARDWARE / 01</span>
          </div>
        </div>

        {/* Secondary: ESP32 */}
        <div className="absolute left-[8%] top-[25%] w-[18vw] group" data-cursor="VIEW">
          <div className="relative w-full aspect-square p-1.5 pb-6 border border-black/5 shadow-md transform transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:shadow-xl bg-white -rotate-2">
             <div className="relative w-full h-full overflow-hidden">
               <Image src="/assets/esp32.jpg" alt="ESP32 microcontroller" fill className="object-cover" />
             </div>
             <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">ESP32 MICROCONTROLLER</span>
          </div>
        </div>

        {/* Technical: Schematic */}
        <div className="absolute right-[12%] top-[15%] w-[25vw] group opacity-90 mix-blend-multiply" data-cursor="VIEW">
          <div className="relative w-full aspect-[16/9] border border-black/10 shadow-sm transform transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:shadow-md bg-white/50 rotate-1">
             <Image src="/assets/schema_clap.png" alt="Clap switch circuit schematic" fill className="object-contain p-2" />
             <span className="absolute -bottom-5 right-0 font-sans text-[7px] uppercase tracking-widest text-black/30">CLAP SWITCH SCHEMATIC</span>
          </div>
        </div>

        {/* Technical: Breadboard */}
        <div className="absolute left-[15%] bottom-[15%] w-[22vw] group" data-cursor="VIEW">
          <div className="relative w-full aspect-[3/2] p-1 pb-6 border border-black/10 shadow-md transform transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:shadow-lg bg-[#f0f0f0] rotate-3">
             <div className="relative w-full h-full overflow-hidden mix-blend-darken">
               <Image src="/assets/circuit_clap.jpg" alt="Clap switch breadboard" fill className="object-cover" />
             </div>
             <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">CLAP SWITCH BREADBOARD</span>
          </div>
        </div>
      </div>

      <div ref={contentRef} className="relative z-10 w-full max-w-5xl px-6 md:px-12 flex flex-col gap-20 py-32 pointer-events-none">
        
        {/* Mobile-only stacked images */}
        <div className="flex flex-col gap-8 md:hidden w-full mb-12 pointer-events-auto">
          <div className="relative w-full aspect-[4/3] bg-white p-2 pb-8 border border-black/10 shadow-md">
             <div className="relative w-full h-full overflow-hidden">
               <Image src="/assets/frank_electronic.png" alt="Frank Bediako working with electronic components" fill className="object-cover" />
             </div>
             <span className="absolute bottom-2 left-3 font-sans text-[8px] uppercase tracking-widest text-black/40">HARDWARE / 01</span>
          </div>
          <div className="flex gap-4 w-full">
            <div className="relative flex-1 aspect-square bg-white p-1 pb-6 border border-black/5 shadow-sm">
               <div className="relative w-full h-full overflow-hidden">
                 <Image src="/assets/esp32.jpg" alt="ESP32 microcontroller" fill className="object-cover" />
               </div>
               <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">ESP32</span>
            </div>
            <div className="relative flex-1 aspect-[3/2] bg-[#f0f0f0] p-1 pb-6 border border-black/10 shadow-sm self-center">
               <div className="relative w-full h-full overflow-hidden mix-blend-darken">
                 <Image src="/assets/circuit_clap.jpg" alt="Clap switch breadboard" fill className="object-cover" />
               </div>
               <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">BREADBOARD</span>
            </div>
          </div>
        </div>

        {/* Top annotation row */}
        <div className="flex justify-between items-start pointer-events-auto">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] uppercase tracking-[0.25em]" style={{ color: "rgba(17,17,17,0.4)" }}>
              LAYER 01 / BACKEND
            </span>
            <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "rgba(17,17,17,0.6)" }}>
              FASTAPI · POSTGRESQL · PYTHON
            </span>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="font-sans text-[8px] uppercase tracking-[0.25em]" style={{ color: "rgba(17,17,17,0.4)" }}>
              LAYER 02 / INTERFACE
            </span>
            <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "rgba(17,17,17,0.6)" }}>
              REACT · TYPESCRIPT
            </span>
          </div>
        </div>

        {/* Main statements — full contrast */}
        <div className="flex flex-col gap-6 md:gap-8 pointer-events-none">
          <div className="flex items-baseline gap-6">
            <span
              className="font-sans text-[9px] uppercase tracking-widest shrink-0 hidden md:block"
              style={{ color: "rgba(17,17,17,0.3)" }}
            >
              //01
            </span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-[6.5vw] uppercase leading-[0.9] tracking-tighter mix-blend-difference" style={{ color: "#111111" }}>
              IDEAS ARE CHEAP.
            </h2>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(17,17,17,0.1)" }} />
            <span className="font-sans text-[8px] uppercase tracking-[0.3em]" style={{ color: "rgba(17,17,17,0.4)" }}>
              SYSTEM DESIGN · ESP32 · HARDWARE
            </span>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(17,17,17,0.1)" }} />
          </div>

          <div className="flex items-baseline gap-6">
            <span
              className="font-sans text-[9px] uppercase tracking-widest shrink-0 hidden md:block"
              style={{ color: "rgba(17,17,17,0.3)" }}
            >
              //02
            </span>
            <h2
              className="font-display text-4xl md:text-7xl lg:text-[6.5vw] uppercase leading-[0.9] tracking-tighter mix-blend-difference"
              style={{ color: "rgba(17,17,17,0.85)" }}
            >
              SYSTEMS TAKE WORK.
            </h2>
          </div>
        </div>

        {/* Bottom annotation row */}
        <div className="flex justify-between items-end pointer-events-auto">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] uppercase tracking-[0.25em]" style={{ color: "rgba(17,17,17,0.4)" }}>
              LAYER 03 / HARDWARE
            </span>
            <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "rgba(17,17,17,0.6)" }}>
              ESP32 · SENSORS · AUTOMATION
            </span>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="font-sans text-[8px] uppercase tracking-[0.25em]" style={{ color: "rgba(17,17,17,0.4)" }}>
              STATUS
            </span>
            <span className="font-sans text-[10px] tracking-widest uppercase flex items-center gap-1.5 justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-lime inline-block" />
              <span className="text-[#111111]">BUILDING</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
