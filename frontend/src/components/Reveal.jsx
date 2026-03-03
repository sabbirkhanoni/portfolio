import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.06 }
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
        transform: vis ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}s`,
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