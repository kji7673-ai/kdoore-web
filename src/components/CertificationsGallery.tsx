"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function CertificationsGallery({ items }: { items: any[] }) {
  const [selectedImage, setSelectedImage] = useState<{ url: string; name: string; id: string | number } | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((cert: any, idx: number) => {
          const cName = cert.title || cert.name;
          const cImage = typeof cert.image === 'object' ? cert.image?.url : `/certifications/${cert.id}`;
          const isRedBorderImg = cert.id === '2.png';
          const uniqueId = cert.id || idx;

          return (
            <motion.div
              layoutId={`card-container-${uniqueId}`}
              key={uniqueId}
              className="bg-white border border-gray-100 p-4 rounded-[18px] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow cursor-pointer group flex flex-col items-center relative"
              onClick={() => setSelectedImage({ url: cImage, name: cName, id: uniqueId })}
              whileHover={{ y: -4 }}
            >
              <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-xl flex items-center justify-center bg-gray-50/50">
                <motion.div 
                  layoutId={`cert-image-${uniqueId}`}
                  className="relative w-full h-full"
                  style={isRedBorderImg ? { clipPath: 'inset(2.5%)' } : {}}
                >
                  <Image 
                    src={cImage} 
                    alt={cName} 
                    fill 
                    className={`transition-transform duration-700 ease-out group-hover:scale-[1.08] ${isRedBorderImg ? 'object-cover scale-[1.05]' : 'object-contain'}`} 
                    unoptimized 
                  />
                </motion.div>
                
                {/* Premium Hover Overlay: Frosted Glass Button */}
                <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50 text-apple-primary text-xs font-semibold transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="w-3 h-3" />
                    상세보기
                  </div>
                </div>
              </div>
              <h4 className="text-[15px] font-bold text-gray-800 text-center leading-snug group-hover:text-apple-primary transition-colors">{cName}</h4>
            </motion.div>
          );
        })}
      </div>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-apple-surface-black/60 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`card-container-${selectedImage.id}`}
              className="relative w-full max-w-3xl bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white/90 backdrop-blur-sm z-10">
                <h3 className="text-[17px] font-bold text-gray-900 ml-2 tracking-tight">{selectedImage.name}</h3>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="relative w-full h-[65vh] bg-apple-canvas-parchment p-8 flex items-center justify-center">
                <motion.div 
                  layoutId={`cert-image-${selectedImage.id}`}
                  className="relative w-full h-full"
                >
                  <Image 
                    src={selectedImage.url} 
                    alt={selectedImage.name} 
                    fill 
                    className="object-contain drop-shadow-xl" 
                    unoptimized 
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
