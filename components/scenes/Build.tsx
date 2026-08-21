"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export function Build() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

    gsap.fromTo(containerRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "bottom center",
          scrub: true,
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-[150vh] w-full flex flex-col items-center pt-32 pb-64" id="build">
      <div ref={containerRef} className="sticky top-1/3 flex flex-col items-center gap-12 text-center w-full px-6">
        <h2 className="font-display text-6xl md:text-[8vw] uppercase leading-none tracking-tight">I BUILD.</h2>
        <div className="flex flex-col gap-2 font-display text-2xl md:text-5xl uppercase opacity-80">
          <span>SOFTWARE.</span>
          <span>SYSTEMS.</span>
          <span>INTELLIGENCE.</span>
          <span>HARDWARE.</span>
        </div>
      </div>
    </section>
  );
}
