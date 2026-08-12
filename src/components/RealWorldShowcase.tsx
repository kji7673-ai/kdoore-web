import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RealWorldShowcase() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-apple-surface-black overflow-hidden my-32">
      {/* Background Image with Parallax effect (disabled on mobile due to iOS Safari bg-fixed bug) and dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed transform scale-105 transition-transform duration-[10000ms] hover:scale-100" 
        style={{ backgroundImage: "url('/images/realworld_bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-[40px] md:text-apple-display-lg font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          타협 없는 기준.
        </h2>
        <p className="text-[18px] md:text-apple-lead text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          국제 ISO 인증이 증명하는 케이두레만의 완벽한 품질 관리. <br className="hidden md:block" />
          보이지 않는 곳의 먼지 하나까지 국제 표준의 잣대로 통제하며 현장의 안전과 위생을 책임집니다.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/about" className="inline-flex items-center gap-2 bg-apple-primary hover:bg-apple-primary-focus text-white px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300">
            품질 관리 시스템 보기 <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-1 text-white hover:underline px-4 py-2 text-[14px] font-semibold transition-all duration-300">
            상담 문의하기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
