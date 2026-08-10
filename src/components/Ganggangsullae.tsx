'use client';

import React from 'react';
import { motion } from 'framer-motion';

const KEYWORDS = ["상생", "협력", "사회적 가치", "전문성"];

export default function Ganggangsullae() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-[var(--surface-pearl)] my-12 rounded-[18px]">
      
      {/* Center text / logo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute z-10 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-[34px] font-semibold tracking-[-0.374px] text-[var(--ink)] mb-2">K-Doore</h2>
        <p className="text-[17px] font-normal tracking-[-0.374px] text-[var(--ink-muted-80)]">함께 도약하는 건강한 기업</p>
      </motion.div>

      {/* Rotating ring container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="relative w-[450px] h-[450px]"
      >
        {KEYWORDS.map((keyword, index) => {
          const angle = (index * 360) / KEYWORDS.length;
          // Position items in a circle using CSS transform
          const radius = 225; // half of 450px
          
          return (
            <div
              key={keyword}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
              }}
            >
              {/* Individual rotating items */}
              <motion.div 
                // Counter-rotate the text so it always stays upright
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="bg-[var(--canvas)] px-8 py-4 rounded-full shadow-[0_3px_15px_rgba(0,0,0,0.08)] border border-[var(--hairline)] whitespace-nowrap flex items-center justify-center"
              >
                <span className="text-[17px] font-semibold tracking-[-0.374px] text-[var(--primary)]">{keyword}</span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--surface-pearl)] opacity-50 pointer-events-none" />
    </div>
  );
}
