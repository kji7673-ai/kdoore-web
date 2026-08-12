"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterItemProps {
  value: number;
  suffix?: string;
  title: string;
  desc: string;
  duration?: number;
}

export default function CounterItem({ value, suffix = "", title, desc, duration = 2 }: CounterItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
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
    <div className="flex flex-col items-center justify-center p-8 text-center bg-apple-canvas-parchment rounded-apple-lg border border-apple-hairline shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-baseline mb-4 text-apple-primary">
        <span ref={ref} className="text-[56px] md:text-[72px] font-bold tracking-tighter font-[family-name:var(--font-sf-display)] leading-none">
          0
        </span>
        <span className="text-3xl md:text-4xl font-bold ml-1">{suffix}</span>
      </div>
      <h3 className="text-apple-lead font-bold text-apple-ink mb-2">{title}</h3>
      <p className="text-apple-body text-apple-ink-muted-80">{desc}</p>
    </div>
  );
}
