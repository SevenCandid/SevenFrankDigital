"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export function DontWaitTransition() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // This scene strictly exists to transition the background from Dark to Light 
    // before the user reaches the DontWait number sequence, protecting its isolation.
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      animation: gsap.to(typeof document !== 'undefined' ? document.body : "body", {
        backgroundColor: "#F4F3EF",
        color: "#111111",
        immediateRender: false,
      }),
      scrub: true,
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[50vh]" // Just tall enough to scrub the color change
      id="dontwait-transition"
    />
  );
}
