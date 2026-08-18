"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface HeroCounterItemProps {
  value: number;
  suffix?: string;
  title: string;
  desc: string;
  duration?: number;
}

export default function HeroCounterItem({ value, suffix = "", title, desc, duration = 2 }: HeroCounterItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 250,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center transition-transform hover:-translate-y-1 duration-300">
      <div className="flex items-baseline mb-3 text-white">
        <span ref={ref} className="text-[48px] md:text-[56px] font-bold tracking-tighter font-[family-name:var(--font-sf-display)] leading-none drop-shadow-md">
          0
        </span>
        <span className="text-2xl md:text-3xl font-bold ml-1 drop-shadow-md">{suffix}</span>
      </div>
      <h3 className="text-[17px] font-bold text-white/90 mb-1">{title}</h3>
      <p className="text-[14px] text-white/70 leading-snug">{desc}</p>
    </div>
  );
}
