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
import { getPayload } from 'payload';
import config from '@payload-config';

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
  const partners = [
    { id: '1625722183', name: '서울특별시교육청' },
    { id: '1625722188', name: '사회적경제지원센터' },
    { id: '1625722194', name: '한국공항공사' },
    { id: '1625722199', name: '해양환경공단' },
    { id: '1625722208', name: '한국사회복지협의회' },
    { id: '1625722213', name: '한국사회적기업진흥원' },
    { id: '1625722219', name: '한국장애인고용공단' },
    { id: '1625722227', name: '삼성바이오로직스' } 
  ];

  return (
    <main className="min-h-screen bg-apple-canvas-parchment font-apple-text text-apple-ink overflow-x-hidden selection:bg-apple-primary selection:text-white">
      
      {/* ─── 1. HERO SECTION (Parallax) ─── */}
      <section className="relative w-full h-[85vh] min-h-[700px] flex flex-col justify-center items-center bg-apple-surface-black pt-20 overflow-hidden">
        {/* Impactful Background Image with Overlay and Parallax (bg-fixed) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
          style={{ backgroundImage: "url('/images/legacy/main_banner_1.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0A2540]/85" />
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-10">
          {/* Main Headline */}
          <h1 
            className="text-apple-hero-display text-white mb-8 leading-[1.1]"
            dangerouslySetInnerHTML={{ __html: cmsData?.heroTitle || '공공기관·학교·대기업이 선택한<br /><span class="text-apple-primary-on-dark">시설관리 전문기업</span>' }}
          />
          
          {/* Subheadline */}
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mb-14">
            {cmsData?.heroSubtitle || '대통령 표창 수상, 전문 임직원 720명, 전국 317개 현장 운영 경험. 케이두레는 공공기관·학교·기업시설의 운영 안정성과 관리 효율을 높이는 종합 시설관리 서비스를 제공합니다.'}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/services" className="bg-apple-primary text-white hover:bg-apple-primary-focus px-8 py-4 rounded-full text-[17px] font-medium transition-colors shadow-md">
              서비스 알아보기
            </Link>
            <Link href="/about#contact" className="bg-apple-surface-tile-2 text-white hover:bg-apple-surface-tile-1 border border-white/10 px-8 py-4 rounded-full text-[17px] font-medium transition-colors">
              상담 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 1.5 HIGHLIGHT NUMBERS & CORE VALUES ─── */}
      <section className="relative w-full py-24 bg-white border-b border-apple-hairline">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Number Counters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            <CounterItem value={new Date().getFullYear() - 2014} suffix="+" title="업력" desc="축적된 전문 관리 노하우" duration={2} />
            <CounterItem value={60} suffix="%" title="감면 혜택" desc="장애인고용부담금 최대 감면율" duration={2} />
            <CounterItem value={300} suffix="+명" title="함께하는 전문 인력" desc="전국 각지에서 활약하는 케이두레인" duration={2.5} />
            <CounterItem value={100} suffix="%" title="고객 만족" desc="신뢰 기반의 책임 운영제" duration={2} />
          </div>

          {/* Core Values */}
          <div className="text-center mb-16">
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-4">케이두레의 3대 핵심 가치</h2>
            <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-2xl mx-auto">
              안전, 상생, 전문성을 바탕으로 더 나은 사회적 가치를 실현합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Core Value Card 1 */}
            <div className="group relative bg-apple-canvas-parchment p-10 rounded-[24px] border border-apple-divider-soft overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,102,204,0.1)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-apple-canvas-parchment to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-[20px] flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Shield className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-apple-display-md font-bold mb-3 text-apple-ink">안전 (Safety)</h3>
                <p className="text-apple-body text-apple-ink-muted-80">
                  중대재해를 예방하는 체계적인 관리와 철저한 현장 안전 수칙 준수로 생명과 자산을 보호합니다.
                </p>
              </div>
            </div>

            {/* Core Value Card 2 */}
            <div className="group relative bg-apple-canvas-parchment p-10 rounded-[24px] border border-apple-divider-soft overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,102,204,0.1)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-apple-canvas-parchment to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-[20px] flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-amber-500/30 transition-all duration-500">
                  <Building className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-apple-display-md font-bold mb-3 text-apple-ink">상생 (Coexistence)</h3>
                <p className="text-apple-body text-apple-ink-muted-80">
                  장애인 표준사업장으로서 취약계층 일자리를 창출하며, 파트너사와 함께 동반 성장합니다.
                </p>
              </div>
            </div>

            {/* Core Value Card 3 */}
            <div className="group relative bg-apple-canvas-parchment p-10 rounded-[24px] border border-apple-divider-soft overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,102,204,0.1)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-apple-canvas-parchment to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-[20px] flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-purple-600/30 transition-all duration-500">
                  <Sparkles className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-apple-display-md font-bold mb-3 text-apple-ink">전문성 (Professional)</h3>
                <p className="text-apple-body text-apple-ink-muted-80">
                  오랜 업력을 바탕으로 한 현장 노하우와 분야별 매뉴얼을 통해 프리미엄 관리 서비스를 제공합니다.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 2. TRUST & PARTNERS SECTION (신뢰 근거) ─── */}
      <section className="relative w-full py-32 bg-apple-canvas-parchment overflow-hidden">
        <div className="w-full text-center overflow-hidden">
          <h2 className="text-apple-display-lg text-apple-ink font-bold mb-6">검증된 실적이 신뢰를 만듭니다</h2>
          <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-3xl mx-auto mb-16">
            공공기관과 대기업 현장에서 증명된 운영 경험
          </p>
          
          <div className="relative w-full max-w-[100vw] overflow-hidden mb-16">
            <div className="flex w-max animate-marquee gap-8 items-center">
              {[...partners, ...partners, ...partners].map((partner, idx) => {
                // If CMS has custom partners, use them. Otherwise fallback to static
                const cmsPartner = cmsData?.partners?.[idx % partners.length];
                const pName = cmsPartner?.name || partner.name;
                const pImage = cmsPartner?.logo?.url || `/partners/gallery_${partner.id}.jpg`;
                
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

      {/* ─── 3. PREMIUM SERVICES (서비스) ─── */}
      <section className="relative w-full py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-6">종합 관리 솔루션</h2>
            <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-3xl mx-auto">
              보안, 유지관리, 위생 서비스를 통합 운영합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-apple-canvas-parchment p-10 rounded-apple-lg border border-apple-divider-soft flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-apple-primary transition-colors duration-300">
                  <Shield className="w-8 h-8 text-apple-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-apple-display-md font-bold mb-4">경비 및 보안</h3>
                <p className="text-apple-body text-apple-ink-muted-80 mb-8">
                  철저한 <strong className="text-apple-ink font-bold">출입 통제</strong>와 24시간 <strong className="text-apple-ink font-bold">방범 운영</strong>으로 시설의 보안 리스크를 원천 차단합니다.
                </p>
              </div>
              <Link href="/services" className="text-apple-primary text-apple-body-strong flex items-center mt-auto hover:text-apple-primary-focus">
                서비스 자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-apple-canvas-parchment p-10 rounded-apple-lg border border-apple-divider-soft flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors duration-300">
                  <Building className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-apple-display-md font-bold mb-4">건축물 유지관리</h3>
                <p className="text-apple-body text-apple-ink-muted-80 mb-8">
                  전문가의 <strong className="text-apple-ink font-bold">예방 점검</strong>과 <strong className="text-apple-ink font-bold">신속 대응</strong>으로 운영 중단 위험을 낮추고 자산 가치를 보존합니다.
                </p>
              </div>
              <Link href="/services" className="text-orange-600 text-apple-body-strong flex items-center mt-auto hover:text-orange-700">
                운영 방식 보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-apple-canvas-parchment p-10 rounded-apple-lg border border-apple-divider-soft flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors duration-300">
                  <Sparkles className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-apple-display-md font-bold mb-4">위생 및 환경 미화</h3>
                <p className="text-apple-body text-apple-ink-muted-80 mb-8">
                  공간 특성에 맞춘 <strong className="text-apple-ink font-bold">프리미엄 미화</strong>와 철저한 <strong className="text-apple-ink font-bold">방역 솔루션</strong>으로 쾌적함을 극대화합니다.
                </p>
              </div>
              <Link href="/services" className="text-emerald-600 text-apple-body-strong flex items-center mt-auto hover:text-emerald-700">
                서비스 자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3.5 PR VIDEO & NEWS SECTION (홍보 영상 및 뉴스) ─── */}
      <section className="relative w-full py-32 bg-white border-t border-apple-hairline">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* PR Video */}
            <div className="w-full lg:w-3/5">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-6 h-6 text-apple-primary" />
                <h2 className="text-apple-display-md text-apple-ink font-bold tracking-tight">케이두레 스토리</h2>
              </div>
              <div className="relative w-full aspect-video rounded-apple-lg overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/DKPkOXFlY10?rel=0&autoplay=0&controls=1&modestbranding=1" 
                  title="케이두레 홍보 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
            </div>

            {/* Recent News */}
            <div className="w-full lg:w-2/5 flex flex-col">
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

      {/* ─── NEW: RealWorld Showcase (Background Image) ─── */}
      <RealWorldShowcase />

      {/* ─── 4. PROMOTIONAL FEATURES ─── */}
      <section className="py-20 bg-apple-surface-pearl">
        <div className="container mx-auto px-6">
          <PromotionalFeatures />
        </div>
      </section>

      {/* ─── 5. PROCESS SECTION (프로세스) ─── */}
      <section className="relative w-full py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-apple-display-lg text-apple-ink font-bold mb-6">체계적인 업무 프로세스</h2>
          <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-3xl mx-auto mb-20">
            상담부터 실행·보고까지 일관되게 관리합니다
          </p>
          
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center max-w-5xl mx-auto mb-16">
            {/* Background Line */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-apple-divider-soft z-0" />

            {[
              { step: '01', title: '전문가 상담', desc: '요구사항과 시설 특성을 파악합니다' },
              { step: '02', title: '현장 정밀 진단', desc: '리스크와 운영 범위를 점검합니다' },
              { step: '03', title: '운영 계획 수립', desc: '인력, 장비, 예산을 최적화합니다' },
              { step: '04', title: '실행 및 관리', desc: '매뉴얼 기반으로 현장을 운영합니다' },
              { step: '05', title: '정기 품질 보고', desc: '성과와 개선 사항을 공유합니다' },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center w-full md:w-48 mb-12 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-apple-primary text-white flex items-center justify-center text-apple-title-lg font-bold shadow-[0_4px_16px_rgba(10,37,64,0.2)] mb-6 ring-4 ring-white">
                  {item.step}
                </div>
                <h4 className="text-apple-body-strong text-apple-ink mb-2">{item.title}</h4>
                <p className="text-apple-caption text-apple-ink-muted-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/about#contact" className="inline-flex bg-apple-primary text-white hover:bg-apple-primary-focus px-8 py-4 rounded-full text-[17px] font-medium transition-colors">
            현장 진단 요청하기
          </Link>
        </div>
      </section>

      {/* ─── 6. KPI DASHBOARD SECTION (성과/증빙) ─── */}
      <section className="relative w-full py-32 bg-apple-canvas-parchment">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-apple-display-lg text-apple-ink font-bold mb-6">숫자와 인증으로 증명하는 운영 역량</h2>
          <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-3xl mx-auto mb-16">
            수상, 인증, 현장 경험으로 검증된 관리 체계
          </p>
          
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

      {/* ─── 7. VISION QUOTE & CONVERSION CTA SECTION (최종 CTA) ─── */}
      <section className="relative w-full py-32 bg-[#1A365D] flex flex-col items-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-apple-display-lg text-white font-bold mb-6">검증된 시설관리 파트너가 필요하신가요?</h2>
          <p className="text-apple-lead text-[#a0aec0] mb-12 max-w-2xl mx-auto">
            귀사에 맞는 시설관리 체계를 제안드립니다
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/about#contact" className="bg-apple-primary text-white hover:bg-apple-primary-focus px-10 py-4 rounded-apple-sm text-apple-body-strong transition-colors flex items-center justify-center gap-2">
              <BarChart className="w-5 h-5" /> 상담 문의하기
            </Link>
            <a href="tel:02-2668-0311" className="bg-apple-surface-tile-2 text-white border border-apple-surface-tile-3 hover:bg-apple-surface-tile-3 px-10 py-4 rounded-apple-sm text-apple-body-strong transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> 대표전화 02-2668-0311
            </a>
          </div>
        </div>
      </section>

      {/* ─── 8. BRAND IDENTITY SECTION (Moved to Bottom) ─── */}
      <section className="relative w-full py-24 bg-apple-canvas-parchment border-t border-apple-divider-soft">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-4">함께 오래 가는 운영 파트너</h2>
            <p className="text-apple-body text-apple-ink-muted-80">고객 신뢰와 상생의 가치를 바탕으로 성장합니다</p>
          </div>
          <DiagramBrandIdentity />
        </div>
      </section>

      {/* ─── 9. COMPANY TIMELINE SECTION ─── */}
      <section className="relative w-full pb-32 pt-16 bg-apple-canvas-parchment">
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
