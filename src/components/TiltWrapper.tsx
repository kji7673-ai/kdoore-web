"use client";

import Tilt from "react-parallax-tilt";
import React from "react";

export default function TiltWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor="#ffffff"
      glarePosition="all"
      transitionSpeed={1000}
      scale={1.02}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </Tilt>
  );
}
