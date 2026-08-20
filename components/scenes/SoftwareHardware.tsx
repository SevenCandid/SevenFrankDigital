"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Scene 04 — SOFTWARE → HARDWARE transition
// Background transitions dark→light; text is isolated on a high z-index
// and revealed AFTER the background completes for clear readability.
export function SoftwareHardware() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Phase 1: background transitions from near-black to warm-white over the first 60% of the scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "60% center",
      animation: gsap.to(typeof document !== 'undefined' ? document.body : "body", {
        backgroundColor: "#F4F3EF",
        color: "#111111",
        immediateRender: false,
      }),
      scrub: true,
    });

    // Phase 2: text fades in over the last 40% of the scroll (after background settles)
    gsap.set(textRef.current, { opacity: 0, y: 24 });
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "50% center",
      end: "80% center",
      animation: gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
      }),
      scrub: true,
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[140vh] w-full flex flex-col justify-center items-center px-6"
      id="hardware"
    >
      <div
        ref={textRef}
        className="sticky top-1/3 max-w-4xl mx-auto text-center z-10 py-20"
      >
        <h2
          className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-[1.05] tracking-tighter"
          style={{ color: "#111111" }}
        >
          BUT SOFTWARE DOESN&apos;T HAVE TO STAY ON A SCREEN.
        </h2>
      </div>
    </section>
  );
}
