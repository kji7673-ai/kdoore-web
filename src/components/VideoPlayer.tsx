"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  videoId: string;
  thumbnailSrc: string;
}

export default function VideoPlayer({ videoId, thumbnailSrc }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="aspect-video w-full bg-black rounded-[20px] overflow-hidden border border-apple-divider-soft shadow-lg relative">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="Corporate Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div 
      className="aspect-video w-full bg-apple-surface-pearl rounded-[20px] overflow-hidden border border-apple-divider-soft flex items-center justify-center relative group cursor-pointer shadow-lg"
      onClick={() => setIsPlaying(true)}
    >
      <Image 
        src={thumbnailSrc} 
        alt="Video Thumbnail" 
        fill 
        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
      
      {/* Play Button */}
      <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform">
        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-apple-primary border-b-8 border-b-transparent ml-1"></div>
      </div>
    </div>
  );
}
