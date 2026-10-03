'use client';

import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { rootMargin: "250px 0px", threshold: 0 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
      }}
    >
      {children}
    </div>
  );
}


export function Card({ children, className = "", style = {} }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden h-full w-full ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function CardLabel({ children }) {
  return (
    <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
      {children}
    </p>
  );
}

export const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};