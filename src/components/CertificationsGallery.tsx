"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function CertificationsGallery({ items }: { items: any[] }) {
  const [selectedImage, setSelectedImage] = useState<{ url: string; name: string } | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((cert: any, idx: number) => {
          const cName = cert.title || cert.name;
          const cImage = typeof cert.image === 'object' ? cert.image?.url : `/certifications/${cert.id}`;
          
          // 2.png에 있는 빨간 테두리를 가려주기 위한 CSS 처리 (scale 및 clipPath 혼합)
          const isRedBorderImg = cert.id === '2.png';

          return (
            <div
              key={cert.id || idx}
              className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-apple-primary/30 transition-all cursor-pointer group flex flex-col items-center relative overflow-hidden"
              onClick={() => setSelectedImage({ url: cImage, name: cName })}
            >
              <div className="relative w-full aspect-[3/4] mb-3 overflow-hidden rounded-md flex items-center justify-center bg-white">
                {isRedBorderImg ? (
                  // 빨간 테두리가 있는 이미지의 경우, 약간 확대하고 가장자리를 잘라내어 테두리를 없앰
                  <div className="relative w-full h-full" style={{ clipPath: 'inset(2.5%)' }}>
                     <Image 
                      src={cImage} 
                      alt={cName} 
                      fill 
                      className="object-cover scale-[1.05] transition-transform duration-500 group-hover:scale-[1.08]" 
                      unoptimized 
                    />
                  </div>
                ) : (
                  <Image 
                    src={cImage} 
                    alt={cName} 
                    fill 
                    className="object-contain transition-transform duration-500 group-hover:scale-105" 
                    unoptimized 
                  />
                )}
                
                {/* 호버 시 나타나는 돋보기 오버레이 */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="w-6 h-6 text-apple-primary" />
                  </div>
                </div>
              </div>
              <h4 className="text-sm font-bold text-gray-800 text-center leading-snug group-hover:text-apple-primary transition-colors">{cName}</h4>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
                <h3 className="text-lg font-bold text-gray-900 ml-2">{selectedImage.name}</h3>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="relative w-full h-[70vh] bg-gray-50 p-6 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image 
                    src={selectedImage.url} 
                    alt={selectedImage.name} 
                    fill 
                    className="object-contain drop-shadow-xl" 
                    unoptimized 
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
