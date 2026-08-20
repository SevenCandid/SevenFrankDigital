"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useGSAP(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";
    // If lenis is active, stop it
    // @ts-ignore
    if (window.lenis) window.lenis.stop();

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        // @ts-ignore
        if (window.lenis) window.lenis.start();
        setIsComplete(true);
      },
    });

    // Simple counter animation 0 to 100
    const counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 1.5,
      ease: "power4.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(counter.value).toString();
        }
      },
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
    }, "+=0.2");

  }, { scope: containerRef });

  if (isComplete) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-[#0A0A0A] text-[#EAEAE6] flex flex-col justify-end items-end p-6 md:p-10 pointer-events-none"
    >
      <div className="flex items-end leading-none font-display text-[25vw] tracking-tighter">
        <span ref={counterRef}>0</span>
        <span className="text-[12vw] mb-[2vw]">%</span>
      </div>
    </div>
  );
}
