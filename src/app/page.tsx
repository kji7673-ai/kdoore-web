"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const businessLines = [
    { title: "경비/보안관리", icon: "security", image: "/assets/gallery_1626228315.jpg" },
    { title: "청소미화", icon: "cleaning_services", image: "/assets/gallery_1626228350.jpg" },
    { title: "시설관리(유지보수)", icon: "handyman", image: "/assets/gallery_1626228361.jpg" },
    { title: "공동주택관리", icon: "apartment", image: "/assets/gallery_1626228413.jpg" },
    { title: "CCTV관제", icon: "videocam", image: "/assets/gallery_1626228418.jpg" },
    { title: "주차관리", icon: "local_parking", image: "/assets/gallery_1626228423.jpg" },
    { title: "콜센터", icon: "headset_mic", image: "/assets/gallery_1626228429.jpg" },
    { title: "근로자파견", icon: "group", image: "/assets/gallery_1626228436.jpg" },
    { title: "안내서비스", icon: "support_agent", image: "/assets/1626227909.jpg" },
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full min-h-[90svh] flex items-center justify-center overflow-hidden bg-inverse-surface">
        <div className="absolute inset-0 z-0">
          <Image 
            alt="KDoore Main Background" 
            className="object-cover opacity-50" 
            src="/assets/main_banner.png"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/80 to-transparent"></div>
        </div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer} 
          className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-desktop w-full mt-20 text-center"
        >
          <motion.div variants={revealVariants} className="flex flex-col items-center justify-center">
            <span className="text-secondary font-label-md tracking-[0.2em] uppercase mb-4">더 멀리 함께 하는 기업</span>
            <h1 className="font-display-lg text-display-lg text-inverse-on-surface mb-6 leading-tight max-w-4xl">
                고객만족을 위하고<br/>새로운 도약을 준비하는 케이두레
            </h1>
            <p className="font-body-lg text-body-lg text-inverse-on-surface/80 max-w-xl mb-10">
                사회적 기업 및 장애인표준사업장으로 국가인증기업
            </p>
            <Link href="/about" className="inline-flex px-8 py-4 bg-primary text-on-primary font-label-md rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-sm text-center">
              자세히 보기
            </Link>
          </motion.div>
        </motion.div>
      </header>

      {/* About Us Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10"
        >
          <motion.div variants={revealVariants} className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4 tracking-tight">About Us</h2>
            <div className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto space-y-6 leading-relaxed">
              <p className="text-xl font-bold text-on-surface">케이두레 홈페이지 방문을 환영합니다.</p>
              <p>케이두레는 사회적 기업, 장애인표준사업장으로 정부인증 기업임과 동시에 서울시교육청 학교시설용역, 관공서 / 일반 건물 종합관리 등 우수한 수행능력 및 책임 있는 관리와 전문성을 겸비한 건물종합관리 및 근로자파견 전문기업 입니다.</p>
              <p>저희 케이두레는 미래지향적인 "빌딩케어토탈서비스"로 경비, 미화, 시설, 공공주택관리, 근로자파견, 콜센터 등 성공적인 서비스를 제공해 드릴 것을 약속드립니다.</p>
            </div>
          </motion.div>

          <motion.div variants={revealVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['회사연혁', '사업분야', '인증및허가', '두레몰'].map((item) => (
              <Link href="#" key={item} className="flex items-center justify-center p-6 rounded-2xl bg-surface-container hover:bg-surface-container-highest transition-colors border border-outline-variant shadow-sm hover:shadow-md">
                <span className="font-title-md text-title-md text-primary">{item}</span>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Business Line Section */}
      <section className="py-24 bg-surface-container-lowest border-y border-outline-variant">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-6 md:px-margin-desktop"
        >
          <motion.div variants={revealVariants} className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4 tracking-tight">빌딩토탈케어서비스</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessLines.map((line, idx) => (
              <motion.div key={idx} variants={revealVariants} className="group relative rounded-2xl overflow-hidden bg-surface shadow-sm hover:shadow-float transition-all duration-300 border border-outline-variant h-64">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={line.image} 
                    alt={line.title} 
                    fill 
                    className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/main_banner.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>{line.icon}</span>
                  <h3 className="font-title-lg text-title-lg text-on-surface">{line.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Government Certification Section */}
      <section className="py-24 bg-inverse-surface text-inverse-on-surface">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-6 md:px-margin-desktop"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={revealVariants} className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-inverse-primary tracking-tight">사회적기업 및 장애인표준사업장</h2>
              <div className="font-body-lg text-body-lg text-inverse-on-surface/90 space-y-4">
                <p>사회적 기업으로 공공기관 우선구매 기업. 기업들의 장애인 의무고용부담금을 해결해 주는 정부지원 기업.</p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-title-md text-title-md text-inverse-primary mb-2">★ 사회적 기업으로 공공기관 우선구매 기업</h4>
                  <ul className="list-disc list-inside text-sm text-inverse-on-surface/80 space-y-1">
                    <li>관공서, 공기업·준정부기관에 건물종합관리 용역도급, 생산품 등 제공</li>
                    <li>취약계층에게 일자리를 제공하여 사회적 목적을 추구</li>
                  </ul>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-title-md text-title-md text-inverse-primary mb-2">★ 장애인표준사업장 연계고용</h4>
                  <ul className="list-disc list-inside text-sm text-inverse-on-surface/80 space-y-1">
                    <li>계약은 1년 기준</li>
                    <li>종류는 도급 (경비, 미화 등 용역), 생산품 (위생지, 피복류)</li>
                    <li>감면액은 도급 매출액의 50%, 고용부담금 총액의 60%</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div variants={revealVariants} className="w-full aspect-video rounded-2xl overflow-hidden shadow-float border border-white/10">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/DKPkOXFlY10?rel=0&autoplay=0&controls=1&fs=1&loop=0&modestbranding=1&autohide=1" 
                title="KDoore YouTube Video" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Notice & Employment Boards Preview */}
      <section className="py-24 bg-surface">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={revealVariants}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-title-lg text-title-lg text-primary">케이두레뉴스</h3>
              <Link href="#" className="text-sm text-secondary hover:underline">더보기 +</Link>
            </div>
            <ul className="space-y-4">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex justify-between items-center p-4 rounded-xl hover:bg-surface-container-lowest transition-colors border-b border-outline-variant/50">
                  <span className="text-on-surface truncate pr-4">케이두레의 새로운 소식을 알려드립니다.</span>
                  <span className="text-sm text-on-surface-variant flex-shrink-0">2023-01-0{i}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={revealVariants}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-title-lg text-title-lg text-primary">채용공고</h3>
              <Link href="#" className="text-sm text-secondary hover:underline">더보기 +</Link>
            </div>
            <ul className="space-y-4">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex justify-between items-center p-4 rounded-xl hover:bg-surface-container-lowest transition-colors border-b border-outline-variant/50">
                  <span className="text-on-surface truncate pr-4">경비/미화/시설관리 채용공고</span>
                  <span className="text-sm text-on-surface-variant flex-shrink-0">2023-01-0{i}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Partnership List */}
      <section className="py-16 bg-surface-container-lowest overflow-hidden border-t border-outline-variant">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center"
        >
          <motion.div variants={revealVariants} className="flex flex-wrap justify-center gap-8 opacity-60">
            {['서울특별시교육청', '한국장애인고용공단', '보건복지부', '고용노동부', '한국주택금융공사', '건강보험심사평가원'].map((partner, idx) => (
              <div key={idx} className="font-label-lg text-label-lg text-on-surface-variant whitespace-nowrap px-4">
                {partner}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
