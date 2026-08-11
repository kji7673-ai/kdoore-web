import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-apple-canvas font-apple-text text-apple-ink overflow-x-hidden selection:bg-apple-primary selection:text-white">
      
      {/* TILE 1: Light Hero & Scale (Full Bleed Light Canvas) */}
      <section className="relative w-full h-screen min-h-[800px] flex flex-col justify-between bg-apple-canvas-parchment pt-32 pb-16">
        {/* Background Image Layer with very subtle opacity for the "museum gallery" feel */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/legacy/main_banner_1.jpg" 
            alt="Hero Background" 
            fill 
            className="object-cover object-center opacity-40 mix-blend-multiply" 
            priority 
          />
          {/* Faint gradient to ensure text readability at the top */}
          <div className="absolute inset-0 bg-gradient-to-b from-apple-canvas-parchment via-transparent to-apple-canvas-parchment/90" />
        </div>

        {/* Hero Copy & Partners */}
        <div className="relative z-10 container mx-auto px-6 text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-apple-pill bg-apple-surface-pearl border border-apple-divider-soft mb-6 animate-fade-in-up">
            <span className="text-apple-primary">🏆</span>
            <span className="text-apple-caption-strong text-apple-ink">대통령 표창 수상 및 사회적 가치 우수기업</span>
          </div>
          
          <h1 className="text-apple-hero-display text-apple-ink mb-6 animate-fade-in-up animation-delay-200">
            글로벌 리더가 선택한<br />무결점 공간 관리.
          </h1>
          <p className="text-apple-lead text-apple-ink-muted-80 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
            삼성바이오로직스, 메르세데스-벤츠 등 세계적인 기업들이<br/>케이두레의 압도적인 전문성과 신뢰를 선택했습니다.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 mix-blend-multiply animate-fade-in-up animation-delay-600 mb-12">
            {[
              '1625722183', '1625722188', '1625722194', '1625722199', 
              '1625722208', '1625722213', '1625722219', '1625722227'
            ].map((id, idx) => (
              <div key={idx} className="relative w-24 h-8 md:w-32 md:h-12 grayscale hover:grayscale-0 transition-all duration-500">
                <Image src={`/partners/gallery_${id}.jpg`} alt={`Partner`} fill className="object-contain" />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-800">
            <Link href="/services" className="bg-apple-primary hover:bg-apple-primary-focus text-white px-6 py-3 rounded-apple-pill text-apple-button transition-colors">
              관리 솔루션 보기
            </Link>
            <Link href="/about" className="bg-apple-surface-pearl text-apple-ink px-6 py-3 rounded-apple-pill text-apple-button border border-apple-hairline hover:bg-gray-100 transition-colors">
              신뢰의 이유
            </Link>
          </div>
        </div>

        {/* The "By the Numbers" Scale Sub-Nav (Minimalist) */}
        <div className="relative z-10 w-full mt-auto pt-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-apple-hairline">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <span className="block text-apple-caption text-apple-ink-muted-80 mb-1">연간 매출규모</span>
                <span className="text-apple-display-md text-apple-ink">198억</span>
              </div>
              <div className="text-center md:text-left mb-6 md:mb-0">
                <span className="block text-apple-caption text-apple-ink-muted-80 mb-1">전문 임직원</span>
                <span className="text-apple-display-md text-apple-ink">720명</span>
              </div>
              <div className="text-center md:text-left mb-6 md:mb-0">
                <span className="block text-apple-caption text-apple-ink-muted-80 mb-1">전국 관리 현장</span>
                <span className="text-apple-display-md text-apple-ink">317개</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-apple-caption text-apple-ink-muted-80 mb-1">기업 고객사</span>
                <span className="text-apple-display-md text-apple-ink">29개</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TILE 2: Services (Near-Black Tile 1) */}
      <section className="relative w-full py-apple-section bg-apple-surface-tile-1 text-apple-body-on-dark flex flex-col items-center">
        <div className="container mx-auto px-6 text-center mb-24">
          <h2 className="text-apple-display-lg mb-6">시설 관리의 새로운 기준.</h2>
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mx-auto">
            첨단 장비와 숙련된 전문가가 제공하는 무결점 종합 관리 서비스. 케이두레가 당신의 공간 가치를 극대화합니다.
          </p>
        </div>

        {/* Alternating Edge-to-Edge Service Grid without traditional cards */}
        <div className="w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16">
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-apple-display-md mb-4">경비 및 보안</h3>
            <p className="text-apple-body text-apple-body-muted mb-8">
              철저한 출입통제 및 첨단 방범 서비스로 고객의 안전과 자산을 24시간 완벽하게 보호합니다.
            </p>
            <Link href="/services" className="text-apple-primary-on-dark text-apple-body-strong flex items-center hover:underline">
              자세히 알아보기 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="relative w-full h-[400px] md:h-[500px] rounded-apple-lg overflow-hidden">
             <Image src="/images/legacy/gallery_1626228315.jpg" alt="경비보안" fill className="object-cover" />
             <div className="absolute inset-0 border border-apple-surface-tile-3 rounded-apple-lg pointer-events-none" />
          </div>

          <div className="relative w-full h-[400px] md:h-[500px] rounded-apple-lg overflow-hidden order-last md:order-none">
             <Image src="/images/legacy/gallery_1626228350.jpg" alt="시설관리" fill className="object-cover" />
             <div className="absolute inset-0 border border-apple-surface-tile-3 rounded-apple-lg pointer-events-none" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-apple-display-md mb-4">건축물 시설관리</h3>
            <p className="text-apple-body text-apple-body-muted mb-8">
              전기, 소방, 설비 등 건축물의 핵심 기계장치를 안정적으로 유지보수하여 건물의 수명을 연장시킵니다.
            </p>
            <Link href="/services" className="text-apple-primary-on-dark text-apple-body-strong flex items-center hover:underline">
              자세히 알아보기 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-center w-full">
           <Link href="/services" className="bg-apple-surface-tile-2 hover:bg-apple-surface-tile-3 text-white px-6 py-3 rounded-apple-pill text-apple-caption transition-colors">
              모든 솔루션 살펴보기
           </Link>
        </div>
      </section>



      {/* TILE 4: Clean Footer CTA (White Canvas) */}
      <section className="relative w-full py-24 bg-apple-canvas flex flex-col items-center border-t border-apple-hairline">
        <div className="text-center">
          <h2 className="text-apple-display-md text-apple-ink mb-8">케이두레와 함께 비즈니스의 격을 높이세요.</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="tel:02-2668-0311" className="text-apple-display-lg text-apple-primary hover:text-apple-primary-focus transition-colors">
              02-2668-0311
            </a>
            <span className="hidden md:block w-px h-12 bg-apple-divider-soft" />
            <Link href="/about#contact" className="text-apple-body-strong text-apple-primary hover:underline">
              오시는 길 안내 <ArrowRight className="inline-block ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
