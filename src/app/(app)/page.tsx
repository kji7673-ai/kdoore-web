import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Building, Sparkles, Phone, BarChart } from "lucide-react";
import KPIDashboard from "@/components/KPIDashboard";
import PromotionalFeatures from "@/components/PromotionalFeatures";
import RealWorldShowcase from "@/components/RealWorldShowcase";
import DiagramBrandIdentity from "@/components/DiagramBrandIdentity";
import CompanyTimeline from "@/components/CompanyTimeline";
import SafetyFeedbackLoop from "@/components/SafetyFeedbackLoop";
import CounterItem from "@/components/CounterItem";
import ScrollToTop from "@/components/ScrollToTop";
import FadeUp from "@/components/FadeUp";
import VideoPlayer from "@/components/VideoPlayer";
import { getPayload } from 'payload';
import config from '@payload-config';

// Icon Map for dynamic components
const IconMap: Record<string, any> = {
  Safety: Shield,
  Coexistence: Building,
  Innovation: Sparkles,
  Security: Shield,
  Maintenance: Building,
  Cleaning: Sparkles,
};

export default async function Home() {
  let cmsData: any = null;
  let newsDocs: any[] = [];
  const dbUrl = process.env.POSTGRES_URL;
  if (dbUrl && !dbUrl.includes('placeholder')) {
    try {
      const payload = await getPayload({ config });
      cmsData = await payload.findGlobal({ slug: 'homepage' });
      const newsResult = await payload.find({ collection: 'news', sort: '-date', limit: 3 });
      newsDocs = newsResult.docs;
    } catch (e) {
      console.warn("Payload DB connection failed, using fallbacks.", e);
    }
  }

  if (newsDocs.length === 0) {
    newsDocs = [
      { id: '1', title: '2026년 안전보건관리계획 안내', date: '2026-01-10T00:00:00.000Z' },
      { id: '2', title: '2026년 안전보건관리규정 안내', date: '2026-01-05T00:00:00.000Z' },
      { id: '3', title: '2022년도 제대군인 고용 우수기업 선정', date: '2022-12-01T00:00:00.000Z' },
    ];
  }

  // --- Fallbacks for CMS Data ---
  const heroBadge = cmsData?.heroBadge || '고객 만족을 향한 끝없는 집념';
  const heroTitle = cmsData?.heroTitle || '도약과 혁신을 넘어, K-Doore';
  const heroSubtitle = cmsData?.heroSubtitle || '케이두레는 최고의 서비스와 완벽한 신뢰를 바탕으로,\n당신의 비즈니스가 더 높은 곳으로 도약할 수 있도록 최선을 다합니다.';
  const heroBgImage = cmsData?.heroBgImage?.url || '/images/legacy/main_banner_1.jpg';

  const defaultHighlights = [
    { value: new Date().getFullYear() - 2014, suffix: '+', title: '업력', description: '축적된 전문 관리 노하우' },
    { value: 60, suffix: '%', title: '감면 혜택', description: '장애인고용부담금 최대 감면율' },
    { value: 300, suffix: '+명', title: '함께하는 전문 인력', description: '전국 각지에서 활약하는 케이두레인' },
    { value: 100, suffix: '%', title: '고객 만족', description: '신뢰 기반의 책임 운영제' },
  ];
  const highlights = cmsData?.highlights?.length === 4 ? cmsData.highlights : defaultHighlights;

  const coreValuesTitle = cmsData?.coreValuesTitle || '케이두레의 3대 핵심 가치';
  const coreValuesSubtitle = cmsData?.coreValuesSubtitle || '안전, 상생, 전문성을 바탕으로 더 나은 사회적 가치를 실현합니다.';
  const defaultCoreValues = [
    { icon: 'Safety', title: '안전 (Safety)', description: '사고 제로(0)를 향한 집념. 철저한 예방 시스템과 빈틈없는 현장 통제로 가장 완벽한 안전을 약속합니다.' },
    { icon: 'Coexistence', title: '상생 (Coexistence)', description: '장애인 표준사업장으로서의 확고한 책임감. 차별 없는 일자리 창출로 동반 성장의 길을 증명합니다.' },
    { icon: 'Innovation', title: '전문성 (Expertise)', description: '10년 이상의 축적된 노하우와 300명 이상의 맨파워. 공간의 품격을 결정짓는 프리미엄 스탠다드를 제시합니다.' },
  ];
  const coreValues = cmsData?.coreValues?.length === 3 ? cmsData.coreValues : defaultCoreValues;

  const partnersTitle = cmsData?.partnersTitle || '검증된 실적이 신뢰를 만듭니다';
  const partnersSubtitle = cmsData?.partnersSubtitle || '주요 공공기관 및 대기업과의 장기 파트너십이 케이두레의 안정적인 운영 능력을 증명합니다.';
  const defaultPartners = [
    { id: '1625722183', name: '서울특별시교육청' },
    { id: '1625722188', name: '사회적경제지원센터' },
    { id: '1625722194', name: '한국공항공사' },
    { id: '1625722199', name: '해양환경공단' },
    { id: '1625722208', name: '한국사회복지협의회' },
    { id: '1625722213', name: '한국사회적기업진흥원' },
    { id: '1625722219', name: '한국장애인고용공단' },
    { id: '1625722227', name: '삼성바이오로직스' } 
  ];
  const partners = cmsData?.partners?.length > 0 ? cmsData.partners : defaultPartners;

  const servicesTitle = cmsData?.servicesTitle || '종합 관리 솔루션';
  const servicesSubtitle = cmsData?.servicesSubtitle || '분산된 관리 업무를 하나로 통합하여\n비용은 절감하고 관리 품질은 높입니다.';
  const defaultServices = [
    { icon: 'Security', title: '경비 및 보안', description: '철저한 출입 통제와 24시간 방범 운영으로 시설의 보안 리스크를 원천 차단합니다.', link: '/services' },
    { icon: 'Maintenance', title: '건축물 유지관리', description: '전문가의 예방 점검과 신속 대응으로 운영 중단 위험을 낮추고 자산 가치를 보존합니다.', link: '/services' },
    { icon: 'Cleaning', title: '위생 및 환경 미화', description: '공간 특성에 맞춘 프리미엄 미화와 철저한 방역 솔루션으로 쾌적함을 극대화합니다.', link: '/services' },
  ];
  const services = cmsData?.services?.length > 0 ? cmsData.services : defaultServices;

  const prTitle = cmsData?.prTitle || '케이두레의 기업가치를 영상으로 만나보세요';
  const prDescription = cmsData?.prDescription || '사람과 공간을 잇는 종합 시설관리 전문기업 케이두레의 철학과 비전, 그리고 생생한 현장의 이야기를 소개합니다.';
  const prVideoId = cmsData?.prVideoId || 'DKPkOXFlY10';

  const processTitle = cmsData?.processTitle || '체계적인 업무 프로세스';
  const processSubtitle = cmsData?.processSubtitle || '상담부터 사후 관리까지, 고객의 불편을 최소화하는 원스톱 솔루션을 제공합니다.';
  const defaultProcess = [
    { stepNumber: '01', title: '전문가 상담', description: '요구사항과 시설 특성을 파악합니다' },
    { stepNumber: '02', title: '현장 정밀 진단', description: '리스크와 운영 범위를 점검합니다' },
    { stepNumber: '03', title: '운영 계획 수립', description: '인력, 장비, 예산을 최적화합니다' },
    { stepNumber: '04', title: '실행 및 관리', description: '매뉴얼 기반으로 현장을 운영합니다' },
    { stepNumber: '05', title: '정기 품질 보고', description: '성과와 개선 사항을 공유합니다' },
  ];
  const processSteps = cmsData?.processSteps?.length > 0 ? cmsData.processSteps : defaultProcess;

  const ctaTitle = cmsData?.ctaTitle || '검증된 시설관리 파트너가 필요하신가요?';
  const ctaSubtitle = cmsData?.ctaSubtitle || '귀사에 맞는 시설관리 체계를 제안드립니다';
  const ctaPhone = cmsData?.ctaPhone || '02-2668-0311';

  return (
    <main className="min-h-screen bg-apple-canvas-parchment font-apple-text text-apple-ink overflow-x-hidden selection:bg-apple-primary selection:text-white">
      <ScrollToTop />
      
      {/* ─── 1. HERO SECTION (Parallax) ─── */}
      <section className="relative w-full h-[85vh] min-h-[700px] flex flex-col justify-center items-center bg-apple-surface-black pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
          style={{ backgroundImage: `url('${heroBgImage}')` }}
        />
        <div className="absolute inset-0 bg-[#0A2540]/85" />
        
        <div className="relative z-10 text-center container mx-auto px-6 mt-16">
          <FadeUp delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 shadow-lg shadow-black/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-apple-primary-on-dark opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-apple-primary-on-dark"></span>
              </span>
              {heroBadge}
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <h1 className="text-apple-hero-display text-white mb-6 drop-shadow-lg tracking-tight max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: heroTitle.replace(/\n/g, '<br/>') }}>
            </h1>
          </FadeUp>

          <FadeUp delay={0.5}>
            <p className="text-apple-lead text-white/90 mb-12 max-w-2xl mx-auto font-light drop-shadow-md whitespace-pre-line">
              {heroSubtitle}
            </p>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/services" className="inline-flex items-center gap-2 bg-apple-primary text-white hover:bg-apple-primary-focus px-6 py-2.5 rounded-full text-[15px] font-semibold transition-colors">
                서비스 알아보기 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about#contact" className="inline-flex items-center gap-1 text-white hover:text-apple-primary-on-dark hover:underline px-4 py-2.5 text-[15px] font-semibold transition-colors">
                상담 문의하기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── 1.5 HIGHLIGHT NUMBERS & CORE VALUES ─── */}
      <section className="relative w-full py-40 bg-white border-b border-apple-hairline">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {highlights.map((h: any, idx: number) => (
              <CounterItem key={idx} value={h.value} suffix={h.suffix} title={h.title} desc={h.description} duration={2 + (idx * 0.2)} />
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-4">{coreValuesTitle}</h2>
            <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-2xl mx-auto whitespace-pre-line">
              {coreValuesSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((cv: any, idx: number) => {
              const IconComp = IconMap[cv.icon] || Shield;
              const bgColors = ['bg-emerald-100', 'bg-amber-100', 'bg-purple-100'];
              const textColors = ['text-emerald-600', 'text-amber-600', 'text-purple-600'];
              const hoverBgs = ['group-hover:bg-emerald-500', 'group-hover:bg-amber-500', 'group-hover:bg-purple-600'];
              const shadowColors = ['group-hover:shadow-emerald-500/30', 'group-hover:shadow-amber-500/30', 'group-hover:shadow-purple-600/30'];
              return (
                <div key={idx} className="group relative bg-apple-canvas-parchment p-10 rounded-[24px] border border-apple-divider-soft overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,102,204,0.1)] hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-apple-canvas-parchment to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`w-20 h-20 ${bgColors[idx]} rounded-[20px] flex items-center justify-center mb-6 ${hoverBgs[idx]} group-hover:-translate-y-2 group-hover:shadow-lg ${shadowColors[idx]} transition-all duration-500`}>
                      <IconComp className={`w-10 h-10 ${textColors[idx]} group-hover:text-white transition-colors duration-500`} />
                    </div>
                    <h3 className="text-apple-display-md font-bold mb-3 text-apple-ink">{cv.title}</h3>
                    <p className="text-apple-body text-apple-ink-muted-80 whitespace-pre-line">
                      {cv.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── 2. TRUST & PARTNERS SECTION ─── */}
      <section className="relative w-full py-48 bg-apple-canvas-parchment overflow-hidden">
        <div className="w-full text-center overflow-hidden">
          <FadeUp>
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-6">{partnersTitle}</h2>
            <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-3xl mx-auto mb-16 whitespace-pre-line">
              {partnersSubtitle}
            </p>
          </FadeUp>
          
          <div className="relative w-full max-w-[100vw] overflow-hidden mb-16">
            <div className="flex w-max animate-marquee gap-8 items-center">
              {[...partners, ...partners, ...partners].map((partner: any, idx: number) => {
                const pName = partner.name;
                const pImage = partner.logo?.url || partner.logo || `/partners/gallery_${partner.id}.jpg`;
                return (
                  <div key={`top-${idx}`} className="flex flex-col items-center justify-center py-8 bg-white rounded-apple-lg border border-apple-hairline shadow-sm w-56 md:w-72 flex-shrink-0">
                    <div className="relative w-40 h-20 md:w-56 md:h-28 mb-2">
                      <Image src={pImage} alt={pName} fill className="object-contain" unoptimized />
                    </div>
                    <span className="text-[14px] md:text-[16px] text-apple-ink-muted-80 font-bold tracking-wide">
                      {pName}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <Link href="/about#history" className="text-apple-primary hover:text-apple-primary-focus font-medium flex items-center justify-center gap-1">
            운영 사례 보기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── 3. PREMIUM SERVICES ─── */}
      <section className="relative w-full py-48 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-20">
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-6">{servicesTitle}</h2>
            <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-3xl mx-auto whitespace-pre-line">
              {servicesSubtitle}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc: any, idx: number) => {
              const IconComp = IconMap[svc.icon] || Shield;
              const bgColors = ['bg-blue-100', 'bg-orange-100', 'bg-emerald-100'];
              const textColors = ['text-apple-primary', 'text-orange-600', 'text-emerald-600'];
              const hoverBgs = ['group-hover:bg-apple-primary', 'group-hover:bg-orange-500', 'group-hover:bg-emerald-500'];
              const linkColors = ['text-apple-primary hover:text-apple-primary-focus', 'text-orange-600 hover:text-orange-700', 'text-emerald-600 hover:text-emerald-700'];
              return (
                <div key={idx} className="bg-apple-canvas-parchment p-10 rounded-apple-lg border border-apple-divider-soft flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300">
                  <div>
                    <div className={`w-16 h-16 ${bgColors[idx%3]} rounded-full flex items-center justify-center mb-8 ${hoverBgs[idx%3]} transition-colors duration-300`}>
                      <IconComp className={`w-8 h-8 ${textColors[idx%3]} group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <h3 className="text-apple-display-md font-bold mb-4">{svc.title}</h3>
                    <p className="text-apple-body text-apple-ink-muted-80 mb-8 whitespace-pre-line">
                      {svc.description}
                    </p>
                  </div>
                  <Link href={svc.link || '/services'} className={`${linkColors[idx%3]} text-apple-body-strong flex items-center mt-auto`}>
                    서비스 자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3.5 PR VIDEO & NEWS SECTION ─── */}
      <section className="relative w-full py-48 bg-white border-t border-apple-hairline">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            <FadeUp className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="section-badge mb-4 w-fit">Corporate Video</span>
              <h2 className="text-apple-display-md text-apple-ink font-bold mb-6">{prTitle}</h2>
              <p className="text-apple-body text-apple-ink-muted-80 mb-8 whitespace-pre-line">
                {prDescription}
              </p>
              <VideoPlayer videoId={prVideoId} />
            </FadeUp>

            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-apple-display-md text-apple-ink font-bold tracking-tight">케이두레 뉴스</h2>
                <Link href="/news" className="text-sm font-medium text-apple-primary hover:text-apple-primary-focus flex items-center transition-colors">
                  더보기 <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="flex flex-col gap-4 flex-1">
                {newsDocs.map((news) => {
                  const dateStr = new Date(news.date).toLocaleDateString('ko-KR', {
                    year: 'numeric', month: '2-digit', day: '2-digit'
                  });
                  return (
                    <Link key={news.id} href={`/news/${news.id}`} className="group block bg-apple-canvas-parchment hover:bg-apple-surface-pearl p-6 rounded-apple-lg transition-colors border border-transparent hover:border-apple-divider-soft">
                      <div className="text-xs font-semibold text-apple-primary mb-2">{dateStr}</div>
                      <h3 className="text-apple-body-strong text-apple-ink group-hover:text-apple-primary-focus transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── NEW: RealWorld Showcase ─── */}
      <RealWorldShowcase />

      {/* ─── 4. PROMOTIONAL FEATURES ─── */}
      <section className="py-40 bg-apple-surface-pearl">
        <div className="container mx-auto px-6">
          <PromotionalFeatures />
        </div>
      </section>

      {/* ─── 5. PROCESS SECTION ─── */}
      <section className="relative w-full py-48 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <FadeUp>
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-6">{processTitle}</h2>
            <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-3xl mx-auto mb-20 whitespace-pre-line">
              {processSubtitle}
            </p>
          </FadeUp>
          
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center max-w-5xl mx-auto mb-16">
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-apple-divider-soft z-0" />

            {processSteps.map((item: any, idx: number) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center w-full md:w-48 mb-12 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-apple-primary text-white flex items-center justify-center text-apple-title-lg font-bold shadow-[0_4px_16px_rgba(10,37,64,0.2)] mb-6 ring-4 ring-white">
                  {item.stepNumber}
                </div>
                <h4 className="text-apple-body-strong text-apple-ink mb-2">{item.title}</h4>
                <p className="text-apple-caption text-apple-ink-muted-80 leading-relaxed whitespace-pre-line">{item.description}</p>
              </div>
            ))}
          </div>

          <Link href="/about#contact" className="inline-flex bg-apple-primary text-white hover:bg-apple-primary-focus px-8 py-4 rounded-full text-[17px] font-medium transition-colors">
            현장 진단 요청하기
          </Link>
        </div>
      </section>

      {/* ─── 6. KPI DASHBOARD SECTION ─── */}
      <section className="relative w-full py-48 bg-apple-canvas-parchment">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <FadeUp>
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-6">숫자와 인증으로 증명하는 운영 역량</h2>
            <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-3xl mx-auto mb-16">
              투명한 KPI 관리와 엄격한 국내외 인증을 통해 서비스 품질을 객관적으로 입증합니다.
            </p>
          </FadeUp>
          
          <div className="mb-24">
            <KPIDashboard />
          </div>

          <div className="border-t border-apple-divider-soft pt-24 mb-16">
            <h3 className="text-apple-display-md text-apple-ink font-bold mb-6">현장 안전과 품질을 놓치지 않는 운영 체계</h3>
            <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-3xl mx-auto mb-16">
              본사와 현장이 분리되지 않는 관리 구조로 위험요소를 사전에 점검하고, 문제가 생기기 전에 대응합니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-8 rounded-apple-lg border border-apple-hairline shadow-sm text-left flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-apple-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-apple-primary" />
                </div>
                <h4 className="text-xl font-semibold text-apple-ink mb-3">위험요소 사전 점검</h4>
                <p className="text-[15px] text-apple-ink-muted-80">현장 중심 점검 체계로 잠재 리스크를 미리 확인합니다.</p>
              </div>

              <div className="bg-white p-8 rounded-apple-lg border border-apple-hairline shadow-sm text-left flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-apple-primary/10 flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-apple-primary" />
                </div>
                <h4 className="text-xl font-semibold text-apple-ink mb-3">본사-현장 실시간 대응</h4>
                <p className="text-[15px] text-apple-ink-muted-80">현장관리팀과 본사가 긴밀히 연결되어 빠르게 대응합니다.</p>
              </div>

              <div className="bg-white p-8 rounded-apple-lg border border-apple-hairline shadow-sm text-left flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-apple-primary/10 flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-apple-primary" />
                </div>
                <h4 className="text-xl font-semibold text-apple-ink mb-3">정기 교육 및 보고 체계</h4>
                <p className="text-[15px] text-apple-ink-muted-80">일일 TBM, 정기 교육, 보고 체계를 통해 안정적인 운영 품질을 유지합니다.</p>
              </div>
            </div>
            
            <SafetyFeedbackLoop />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/about#history" className="bg-white text-apple-primary border border-apple-hairline hover:bg-apple-surface-pearl px-8 py-4 rounded-full text-[17px] font-medium transition-colors">
              안전 운영 체계 보기
            </Link>
            <Link href="/about#contact" className="bg-apple-primary text-white hover:bg-apple-primary-focus px-8 py-4 rounded-full text-[17px] font-medium transition-colors">
              현장 운영 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 7. VISION QUOTE & CONVERSION CTA ─── */}
      <section className="relative w-full py-48 bg-[#1A365D] flex flex-col items-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-apple-display-lg text-white font-bold mb-6">{ctaTitle}</h2>
          <p className="text-apple-lead text-[#a0aec0] mb-12 max-w-2xl mx-auto whitespace-pre-line">
            {ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/about#contact" className="bg-apple-primary text-white hover:bg-apple-primary-focus px-10 py-4 rounded-apple-sm text-apple-body-strong transition-colors flex items-center justify-center gap-2">
              <BarChart className="w-5 h-5" /> 상담 문의하기
            </Link>
            <a href={`tel:${ctaPhone}`} className="bg-apple-surface-tile-2 text-white border border-apple-surface-tile-3 hover:bg-apple-surface-tile-3 px-10 py-4 rounded-apple-sm text-apple-body-strong transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> 대표전화 {ctaPhone}
            </a>
          </div>
        </div>
      </section>

      {/* ─── 8. BRAND IDENTITY ─── */}
      <section className="relative w-full py-32 bg-apple-canvas-parchment border-t border-apple-divider-soft">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-4">함께 오래 가는 운영 파트너</h2>
            <p className="text-apple-body text-apple-ink-muted-80">고객 신뢰와 상생의 가치를 바탕으로 성장합니다</p>
          </div>
          <DiagramBrandIdentity />
        </div>
      </section>

      {/* ─── 9. COMPANY TIMELINE ─── */}
      <section className="relative w-full pb-48 pt-24 bg-apple-canvas-parchment">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-4">끊임없는 성장의 발자취</h2>
          </div>
          <CompanyTimeline />
          <div className="text-center mt-12">
            <Link href="/about" className="text-apple-primary hover:text-apple-primary-focus font-medium flex items-center justify-center gap-1">
              상세 연혁 및 회사 소개 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
