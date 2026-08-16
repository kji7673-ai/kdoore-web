import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export default function Logo({ className = '', isLight = true }: LogoProps) {
  // Using the exact colors from the CI provided
  const green = "#0f6a37";
  const orange = "#f48c26";
  const textColor = isLight ? "#1d1d1f" : "#ffffff";
  const subTextColor = orange;

  return (
    <svg 
      className={className} 
      viewBox="0 0 500 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ minWidth: '160px', height: 'auto' }}
    >
      {/* 
        The stylized "Y" (person shape)
        Left arm, right arm, and stem
      */}
      <path 
        d="M 12 40 C 45 40, 70 55, 90 90 L 90 115 L 115 115 L 115 90 C 135 55, 160 40, 193 40 L 193 15 C 150 15, 120 40, 102.5 70 C 85 40, 55 15, 12 15 Z" 
        fill={green} 
      />
      
      {/* The orange circle (head) */}
      <circle cx="102.5" cy="35" r="18" fill={orange} />

      {/* DOORE Text */}
      <text 
        x="210" 
        y="85" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontWeight="800" 
        fontSize="68" 
        fill={textColor}
        letterSpacing="-1"
      >
        DOORE
      </text>

      {/* Subtitle */}
      <text 
        x="212" 
        y="112" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontWeight="500" 
        fontSize="22" 
        fill={subTextColor}
        letterSpacing="0.5"
      >
        K-DooRe Corporate Profile
      </text>
    </svg>
  );
}
