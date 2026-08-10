"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .harmony-pattern {
            background-image: radial-gradient(#000000 1px, transparent 1px);
            background-size: 24px 24px;
            opacity: 0.05;
        }
        @keyframes rotateLoop {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .ganggang-ring {
            border: 1px dashed rgba(255,255,255,0.2);
            border-radius: 50%;
            animation: rotateLoop 60s linear infinite;
        }
      `}} />

      {/* Hero Section */}
      <header className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-inverse-surface">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            alt="KDoore Main Background" 
            className="object-cover opacity-60" 
            src="/assets/main_banner.png"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/80 to-transparent"></div>
        </div>

        {/* Abstract Animated Rings (Ganggangsullae Concept) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
          <div className="w-[800px] h-[800px] ganggang-ring absolute"></div>
          <div className="w-[1000px] h-[1000px] ganggang-ring absolute" style={{ animationDirection: 'reverse', animationDuration: '90s' }}></div>
          <div className="w-[1200px] h-[1200px] ganggang-ring absolute" style={{ animationDuration: '120s' }}></div>
        </div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer} 
          className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-12 gap-gutter w-full mt-20"
        >
          {/* Text Content */}
          <motion.div variants={revealVariants} className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <span className="text-secondary-container font-label-md tracking-[0.2em] uppercase mb-4">Institutional Trust & Harmonious Cooperation</span>
            <h1 className="font-display-lg text-display-lg text-inverse-on-surface mb-6 leading-tight">
                상생과 협력으로<br/>만드는 새로운 가치
            </h1>
            <p className="font-body-lg text-body-lg text-inverse-on-surface/80 max-w-xl mb-10">
                KDoore는 단순한 시설 관리를 넘어, 사람과 공간이 조화롭게 공존하는 지속 가능한 환경을 창조하는 사회적 기업입니다.
            </p>
            <div className="flex space-x-4">
              <Link href="/about" className="inline-flex px-8 py-4 bg-secondary-container text-on-secondary-container font-label-md rounded hover:bg-secondary-container/90 transition-all hover:scale-105 shadow-sm text-center">
                우리의 비전 (Our Vision)
              </Link>
            </div>
          </motion.div>
          
          {/* Certificate Showcase */}
          <motion.div variants={revealVariants} className="col-span-12 md:col-span-5 relative mt-16 md:mt-0">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-float border border-white/10 transform md:rotate-3 md:hover:rotate-0 transition-transform duration-500 bg-white/5 backdrop-blur-sm p-4 group">
              <div className="relative w-full h-full">
                <Image 
                  alt="Commendation Certificate showcasing institutional trust" 
                  className="object-cover rounded-lg shadow-inner group-hover:scale-105 transition-transform duration-700" 
                  src="/assets/1626227895.jpg"
                  fill
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:bottom-4 md:-left-12 bg-surface text-on-surface px-6 py-4 rounded-lg shadow-lg border border-tertiary-fixed flex items-center space-x-3">
                <span className="material-symbols-outlined text-secondary text-3xl" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <div>
                  <p className="font-label-md text-label-md">국무총리 표창</p>
                  <p className="text-xs text-on-surface-variant">사회적 가치 창출 부문</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* Social Value Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 harmony-pattern z-0"></div>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10"
        >
          <motion.div variants={revealVariants} className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Social Value</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">사회적 책임을 다하며, 지역사회와 함께 성장하는 상생의 길을 걷습니다.</p>
          </motion.div>
          <div className="grid grid-cols-12 gap-8 auto-rows-[240px]">
            {/* Bento Item 1 */}
            <motion.div variants={revealVariants} className="col-span-12 md:col-span-8 row-span-2 bg-surface-container rounded-xl p-8 border border-tertiary-fixed relative overflow-hidden flex flex-col justify-between group hover:shadow-float transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">함께 일하는 기쁨</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">취약계층의 안정적인 일자리 창출을 최우선 목표로 삼아, 경제적 자립과 사회 참여를 적극적으로 지원합니다.</p>
              </div>
              <div className="relative self-end mt-8 w-full max-w-md h-48 rounded-lg shadow-sm overflow-hidden z-10">
                <Image 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Staff smiling" 
                  src="/assets/gallery_1625722219.jpg"
                  fill
                />
              </div>
            </motion.div>
            
            {/* Bento Item 2 */}
            <motion.div variants={revealVariants} className="col-span-12 md:col-span-4 row-span-1 bg-primary-container text-on-primary-container rounded-xl p-8 flex flex-col justify-center hover:shadow-float transition-all duration-300 transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-secondary-container text-3xl mb-3" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              <h3 className="font-title-lg text-title-lg mb-2">지속가능한 환경</h3>
              <p className="text-sm opacity-80">친환경 자재 사용 및 에너지 효율적인 관리 시스템 도입으로 녹색 경영을 실천합니다.</p>
            </motion.div>
            
            {/* Bento Item 3 */}
            <motion.div variants={revealVariants} className="col-span-12 md:col-span-4 row-span-1 border border-outline-variant bg-surface rounded-xl p-8 flex flex-col justify-center hover:shadow-float transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-display-lg text-display-lg text-primary mb-1">45%</h3>
              <p className="font-label-md text-label-md text-secondary uppercase tracking-wider">취약계층 고용률</p>
              <p className="text-sm text-on-surface-variant mt-2">법정 의무 비율을 상회하는 자발적 상생 실천.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-surface-container-lowest border-t border-tertiary/10 overflow-hidden">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-6 md:px-margin-desktop"
        >
          <div className="grid grid-cols-12 gap-8 items-center">
            <motion.div variants={revealVariants} className="col-span-12 md:col-span-5">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Expertise &<br/>Professionalism</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                국가 공공기관 및 대규모 시설물의 통합 관리 경험을 바탕으로, 체계적이고 신뢰할 수 있는 최상의 솔루션을 제공합니다.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <span className="material-symbols-outlined text-secondary mt-1 mr-4 transition-transform group-hover:scale-110" aria-hidden="true">domain_verification</span>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-primary">통합 시설 관리 (FM)</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">건물의 생애주기를 고려한 과학적인 유지보수 및 자산 가치 극대화.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="material-symbols-outlined text-secondary mt-1 mr-4 transition-transform group-hover:scale-110" aria-hidden="true">security</span>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-primary">첨단 보안 및 미화</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">스마트 모니터링 시스템과 친환경 미화 공법을 결합한 쾌적한 환경 조성.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={revealVariants} className="col-span-12 md:col-span-6 md:col-start-7 relative mt-12 md:mt-0 group">
              <div className="absolute inset-0 bg-surface-container-highest transform translate-x-4 translate-y-4 rounded-xl border border-tertiary-fixed-dim z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-float border border-tertiary/10 bg-white w-full aspect-[4/3]">
                <Image 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Professional facility management" 
                  src="/assets/gallery_1626228361.jpg"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Partnership List */}
      <section className="py-24 bg-surface overflow-hidden">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center"
        >
          <motion.h2 variants={revealVariants} className="font-headline-lg text-headline-lg text-primary mb-12">Trusted by Institutions</motion.h2>
          <motion.div variants={revealVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-l border-tertiary/10">
            <div className="border-b border-r border-tertiary/10 p-8 flex items-center justify-center h-32 hover:bg-surface-container-lowest transition-all hover:scale-105 grayscale hover:grayscale-0 shadow-sm hover:shadow-md cursor-default">
              <span className="font-title-lg text-title-lg text-on-surface-variant text-center">서울특별시교육청<br/><span className="text-sm font-normal">Seoul Education</span></span>
            </div>
            <div className="border-b border-r border-tertiary/10 p-8 flex items-center justify-center h-32 hover:bg-surface-container-lowest transition-all hover:scale-105 grayscale hover:grayscale-0 shadow-sm hover:shadow-md cursor-default">
              <span className="font-title-lg text-title-lg text-on-surface-variant text-center">한국장애인고용공단<br/><span className="text-sm font-normal">KEAD</span></span>
            </div>
            <div className="border-b border-r border-tertiary/10 p-8 flex items-center justify-center h-32 hover:bg-surface-container-lowest transition-all hover:scale-105 grayscale hover:grayscale-0 shadow-sm hover:shadow-md cursor-default">
              <span className="font-title-lg text-title-lg text-on-surface-variant text-center">보건복지부<br/><span className="text-sm font-normal">MOHW</span></span>
            </div>
            <div className="border-b border-r border-tertiary/10 p-8 flex items-center justify-center h-32 hover:bg-surface-container-lowest transition-all hover:scale-105 grayscale hover:grayscale-0 shadow-sm hover:shadow-md cursor-default">
              <span className="font-title-lg text-title-lg text-on-surface-variant text-center">고용노동부<br/><span className="text-sm font-normal">MOEL</span></span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
