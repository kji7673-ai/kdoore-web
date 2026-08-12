import React from 'react';

export default function RealWorldShowcase() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-apple-surface-black overflow-hidden my-32">
      {/* Background Image with Parallax effect and dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105 transition-transform duration-[10000ms] hover:scale-100" 
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
        
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a href="/about" className="bg-apple-primary hover:bg-apple-primary-focus text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-apple-primary/30">
            품질 관리 시스템 보기
          </a>
          <a href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-full font-semibold transition-all duration-300">
            상담 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
