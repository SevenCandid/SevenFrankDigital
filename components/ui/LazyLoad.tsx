"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface LazyLoadProps {
  children: ReactNode;
  height?: string;
}

export function LazyLoad({ children, height = "60vh" }: LazyLoadProps) {
  const [hasRendered, setHasRendered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasRendered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRendered(true);
          observer.disconnect();
        }
      },
      { rootMargin: "1000px" } // Load it a bit before it enters the viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasRendered]);

  return (
    <div ref={ref} style={{ minHeight: hasRendered ? "auto" : height }}>
      {hasRendered ? children : null}
    </div>
  );
}
