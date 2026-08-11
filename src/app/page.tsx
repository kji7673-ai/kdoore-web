import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Building, Sparkles, CheckCircle2, Users, Award, TrendingUp, Phone, ChevronRight, BarChart } from "lucide-react";

export default async function Home() {
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
      
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative w-full h-[85vh] min-h-[700px] flex flex-col justify-center items-center bg-apple-surface-black pt-20 overflow-hidden">
        {/* Subtle radial gradient for depth, no distracting photos */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-apple-surface-tile-1 to-apple-surface-black opacity-90" />
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-10">
          {/* Elegant Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-apple-surface-tile-2 border border-white/10 mb-10 animate-fade-in-up">
            <span className="text-xl">🏆</span>
            <span className="text-white text-sm font-medium tracking-wide">대통령 표창 및 사회적 가치 우수기업</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-apple-hero-display text-white mb-8 animate-fade-in-up animation-delay-200 leading-[1.1]">
            세계적인 기업이 신뢰하는<br />
            <span className="text-apple-primary-on-dark">프리미엄 공간 관리.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mb-14 animate-fade-in-up animation-delay-400">
            삼성바이오로직스, 벤츠 코리아 등 글로벌 기업과 주요 공공기관이 선택한 케이두레. 압도적인 전문성으로 귀하의 자산 가치를 극대화합니다.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up animation-delay-600">
            <Link href="/services" className="bg-apple-primary text-white hover:bg-apple-primary-focus px-8 py-4 rounded-full text-[17px] font-medium transition-colors">
              솔루션 자세히 보기
            </Link>
            <Link href="/about#contact" className="bg-apple-surface-tile-2 text-white hover:bg-apple-surface-tile-1 border border-white/10 px-8 py-4 rounded-full text-[17px] font-medium transition-colors">
              전문가 상담 신청
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. KPI DASHBOARD SECTION ─── */}
      <section className="relative w-full py-24 bg-apple-canvas-parchment">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-apple-lg shadow-sm border border-apple-hairline p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-apple-divider-soft">
              
              <div className="flex flex-col items-center md:items-start md:px-8 pt-6 md:pt-0">
                <span className="text-apple-caption-strong text-apple-ink-muted-80 mb-2 tracking-[0.1em]">연간 매출규모</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[56px] font-semibold text-apple-ink leading-none tracking-tight">198</span>
                  <span className="text-apple-body-strong text-apple-ink-muted-80 ml-1">억원</span>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start md:px-8 pt-6 md:pt-0">
                <span className="text-apple-caption-strong text-apple-ink-muted-80 mb-2 tracking-[0.1em]">전문 임직원</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[56px] font-semibold text-apple-ink leading-none tracking-tight">720</span>
                  <span className="text-apple-body-strong text-apple-ink-muted-80 ml-1">명</span>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start md:px-8 pt-6 md:pt-0">
                <span className="text-apple-caption-strong text-apple-ink-muted-80 mb-2 tracking-[0.1em]">전국 관리 현장</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[56px] font-semibold text-apple-ink leading-none tracking-tight">317</span>
                  <span className="text-apple-body-strong text-apple-ink-muted-80 ml-1">곳</span>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start md:px-8 pt-6 md:pt-0">
                <span className="text-apple-caption-strong text-apple-ink-muted-80 mb-2 tracking-[0.1em]">글로벌·공공 고객사</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[56px] font-semibold text-apple-ink leading-none tracking-tight">29</span>
                  <span className="text-apple-body-strong text-apple-ink-muted-80 ml-1">개사</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. TRUST & PARTNERS SECTION ─── */}
      <section className="relative w-full pt-16 pb-32 bg-apple-canvas-parchment overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-apple-display-md text-apple-ink font-semibold mb-4">최고의 기업들이 증명합니다</h2>
          <p className="text-apple-body text-apple-ink-muted-80 mb-16">
            엄격한 심사와 검증을 거쳐 대한민국 주요 공공기관 및 대기업의 시설 관리를 전담하고 있습니다.
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex flex-col gap-6">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-apple-canvas-parchment to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-apple-canvas-parchment to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[1, 2, 3].map((set) => (
              <div key={set} className="flex items-center gap-8 px-4">
                {partners.map((partner, idx) => (
                  <div key={`${set}-${idx}`} className="flex flex-col items-center justify-center w-64 h-36 bg-white rounded-apple-lg border border-apple-hairline shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer group">
                    <div className="relative w-40 h-20 mb-3 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                      <Image src={`/partners/gallery_${partner.id}.jpg`} alt={partner.name} fill className="object-contain" />
                    </div>
                    <span className="text-apple-caption text-apple-ink-muted-80 font-medium tracking-wide">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. PREMIUM SERVICES ─── */}
      <section className="relative w-full py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-6">빈틈없는 종합 시설 관리 솔루션</h2>
            <p className="text-apple-lead-airy text-apple-ink-muted-80 max-w-3xl mx-auto">
              공간의 용도와 특성을 정확히 분석하여 최적화된 맞춤형 관리 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-apple-canvas-parchment p-10 rounded-apple-lg border border-apple-divider-soft group hover:bg-apple-surface-tile-1 hover:text-white transition-colors duration-300">
              <Shield className="w-12 h-12 text-apple-primary mb-8 group-hover:text-apple-primary-on-dark transition-colors" />
              <h3 className="text-apple-display-md font-bold mb-4 group-hover:text-white">경비 및 보안</h3>
              <p className="text-apple-body text-apple-ink-muted-80 mb-8 group-hover:text-apple-body-muted">
                첨단 보안 장비와 고도로 훈련된 보안 요원을 배치하여 24시간 철저한 출입통제 및 방범 시스템을 운영합니다.
              </p>
              <Link href="/services" className="text-apple-primary text-apple-body-strong flex items-center group-hover:text-apple-primary-on-dark">
                상세 솔루션 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-apple-canvas-parchment p-10 rounded-apple-lg border border-apple-divider-soft group hover:bg-apple-surface-tile-1 hover:text-white transition-colors duration-300">
              <Building className="w-12 h-12 text-apple-primary mb-8 group-hover:text-apple-primary-on-dark transition-colors" />
              <h3 className="text-apple-display-md font-bold mb-4 group-hover:text-white">건축물 유지관리</h3>
              <p className="text-apple-body text-apple-ink-muted-80 mb-8 group-hover:text-apple-body-muted">
                전기, 소방, 기계 설비에 대한 정기적 예방 점검과 신속한 유지보수를 통해 건축물의 수명과 자산 가치를 보존합니다.
              </p>
              <Link href="/services" className="text-apple-primary text-apple-body-strong flex items-center group-hover:text-apple-primary-on-dark">
                상세 솔루션 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-apple-canvas-parchment p-10 rounded-apple-lg border border-apple-divider-soft group hover:bg-apple-surface-tile-1 hover:text-white transition-colors duration-300">
              <Sparkles className="w-12 h-12 text-apple-primary mb-8 group-hover:text-apple-primary-on-dark transition-colors" />
              <h3 className="text-apple-display-md font-bold mb-4 group-hover:text-white">위생 및 환경 미화</h3>
              <p className="text-apple-body text-apple-ink-muted-80 mb-8 group-hover:text-apple-body-muted">
                프리미엄 세제와 최신 장비를 활용해 공간의 특성에 맞는 맞춤형 미화 및 법정 전염병 예방 방역을 실시합니다.
              </p>
              <Link href="/services" className="text-apple-primary text-apple-body-strong flex items-center group-hover:text-apple-primary-on-dark">
                상세 솔루션 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. DIFFERENTIATION SECTION ─── */}
      <section className="relative w-full py-32 bg-apple-canvas-parchment border-y border-apple-divider-soft">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-apple-display-lg text-apple-ink font-bold mb-4">왜 케이두레인가?</h2>
            <p className="text-apple-body text-apple-ink-muted-80">수많은 공공기관과 대기업이 신뢰할 수밖에 없는 4가지 핵심 경쟁력</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-apple-sm shadow-[0_4px_12px_rgba(10,37,64,0.04)]">
              <div className="w-12 h-12 bg-apple-surface-pearl rounded-full flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-apple-primary" />
              </div>
              <h4 className="text-apple-body-strong text-apple-ink mb-3">압도적인 공공·기업 경험</h4>
              <p className="text-apple-caption text-apple-ink-muted-80 leading-relaxed">
                엄격한 보안과 체계가 요구되는 대규모 공공기관 및 대기업 사업장의 전담 운영 노하우를 보유하고 있습니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-apple-sm shadow-[0_4px_12px_rgba(10,37,64,0.04)]">
              <div className="w-12 h-12 bg-apple-surface-pearl rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-apple-primary" />
              </div>
              <h4 className="text-apple-body-strong text-apple-ink mb-3">검증된 전문 인력 운영</h4>
              <p className="text-apple-caption text-apple-ink-muted-80 leading-relaxed">
                분야별 국가 기술 자격증을 보유한 720명의 정예 임직원이 체계적인 교육을 이수하고 현장에 투입됩니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-apple-sm shadow-[0_4px_12px_rgba(10,37,64,0.04)]">
              <div className="w-12 h-12 bg-apple-surface-pearl rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-apple-primary" />
              </div>
              <h4 className="text-apple-body-strong text-apple-ink mb-3">신속한 현장 대응력</h4>
              <p className="text-apple-caption text-apple-ink-muted-80 leading-relaxed">
                전국 317개 관리 현장을 유기적으로 연결하여 긴급 상황 발생 시 24시간 즉각적인 대처가 가능합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-apple-sm shadow-[0_4px_12px_rgba(10,37,64,0.04)]">
              <div className="w-12 h-12 bg-apple-surface-pearl rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-apple-primary" />
              </div>
              <h4 className="text-apple-body-strong text-apple-ink mb-3">체계적 품질 관리 프로세스</h4>
              <p className="text-apple-caption text-apple-ink-muted-80 leading-relaxed">
                정기적인 본사 순회 점검 및 KPI 기반의 객관적 서비스 평가를 통해 무결점 품질을 유지합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. PROCESS SECTION (Horizontal Timeline) ─── */}
      <section className="relative w-full py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-apple-display-lg text-apple-ink font-bold mb-20">투명하고 체계적인 업무 프로세스</h2>
          
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center max-w-5xl mx-auto">
            {/* Background Line */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-apple-divider-soft z-0" />

            {[
              { step: '01', title: '전문가 상담', desc: '고객 요구사항 및 현장 특성 사전 파악' },
              { step: '02', title: '현장 정밀 진단', desc: '본사 전문가 파견 및 맞춤형 솔루션 도출' },
              { step: '03', title: '운영 계획 수립', desc: '인력 배치, 장비 세팅 및 예산 최적화 제안' },
              { step: '04', title: '실행 및 관리', desc: '현장 투입 및 철저한 매뉴얼 기반 업무 수행' },
              { step: '05', title: '정기 품질 보고', desc: '운영 성과 측정 및 월간/분기별 리포트 제공' },
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
        </div>
      </section>

      {/* ─── 6. CONVERSION CTA SECTION ─── */}
      <section className="relative w-full py-32 bg-apple-surface-tile-1 flex flex-col items-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-apple-display-lg text-white font-bold mb-6">검증된 시설관리 파트너가 필요하신가요?</h2>
          <p className="text-apple-lead text-apple-body-muted mb-12 max-w-2xl mx-auto">
            자산 가치를 높이는 가장 확실한 선택, 케이두레 전문가 그룹과 지금 바로 상담해 보세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:02-2668-0311" className="bg-white text-apple-primary px-10 py-4 rounded-apple-sm text-apple-body-strong hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> 대표전화 02-2668-0311
            </a>
            <Link href="/about#contact" className="bg-apple-surface-tile-2 text-white border border-apple-surface-tile-3 hover:bg-apple-surface-tile-3 px-10 py-4 rounded-apple-sm text-apple-body-strong transition-colors flex items-center justify-center gap-2">
              <BarChart className="w-5 h-5" /> 온라인 견적 문의
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
