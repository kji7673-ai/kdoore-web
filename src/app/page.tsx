import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Users, ShieldCheck, Leaf, Briefcase, Phone, MapPin, ChevronRight, CheckCircle2, Shield, Search, Lightbulb, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. 메인 히어로 슬라이더 (CSS 애니메이션으로 원본 4장 교체) */}
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="animate-hero-slide absolute inset-0 w-[400%] h-full flex">
            <div className="relative w-1/4 h-full">
              <Image src="/images/legacy/main_banner_1.jpg" alt="Hero 1" fill className="object-cover object-center" priority />
            </div>
            <div className="relative w-1/4 h-full">
              <Image src="/images/legacy/main_banner_2.jpg" alt="Hero 2" fill className="object-cover object-center" />
            </div>
            <div className="relative w-1/4 h-full">
              <Image src="/images/legacy/main_banner_3.jpg" alt="Hero 3" fill className="object-cover object-center" />
            </div>
            <div className="relative w-1/4 h-full">
              <Image src="/images/legacy/main_banner_4.jpg" alt="Hero 4" fill className="object-cover object-center" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight animate-fade-in-up">
            더 멀리 함께하는 기업!<br />
            <span className="text-blue-400">케이두레</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto opacity-90 animate-fade-in-up animation-delay-200">
            고객만족을 위하고 새로운 도약을 준비합니다
          </p>
          <div className="flex gap-4 animate-fade-in-up animation-delay-400">
            <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
              회사소개
            </Link>
            <Link href="/services" className="bg-white/20 hover:bg-white/30 backdrop-blur text-white px-8 py-3 rounded-full font-medium transition-colors border border-white/50">
              사업분야
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 빠른 메뉴 / 통계 (NEW) */}
      <section className="py-12 bg-white relative -mt-16 z-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 shadow-xl bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
            <Link href="/about#history" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900">회사연혁</h3>
            </Link>
            <Link href="/services" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900">사업분야</h3>
            </Link>
            <Link href="/about#certifications" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900">인증 및 허가</h3>
            </Link>
            <a href="http://www.dooremall.kr" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-gray-900">두레몰 가기</h3>
            </a>
          </div>
        </div>
      </section>

      {/* 3. 새로운 비전 및 가치 섹션 (NEW) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">우리의 가치와 비전</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">케이두레는 최고의 서비스로 고객의 자산가치를 높이고, 사회적 약자와 함께하는 따뜻한 일터를 만들어갑니다.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">최고의 품질 서비스</h3>
              <p className="text-gray-600 leading-relaxed">
                다년간 축적된 노하우와 전문 인력을 바탕으로 고객의 니즈를 정확히 파악하고, 최적화된 맞춤형 솔루션을 제공합니다.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">사회적 가치 실현</h3>
              <p className="text-gray-600 leading-relaxed">
                사회적 기업 및 장애인표준사업장으로서 취약계층의 안정적인 일자리 창출에 앞장서며 동반성장을 추구합니다.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">지속적인 혁신</h3>
              <p className="text-gray-600 leading-relaxed">
                변화하는 시장 환경에 발맞추어 끊임없이 연구하고 혁신하여, 고객에게 새로운 가치와 만족을 선사합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 사업분야 갤러리 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">빌딩 종합 관리 솔루션</h2>
              <p className="text-lg text-gray-600">전문적이고 체계적인 맞춤형 관리 서비스를 제공합니다</p>
            </div>
            <Link href="/services" className="hidden md:flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              전체보기 <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '1626228315', title: '경비보안', desc: '철저한 출입통제 및 방범 서비스' },
              { id: '1626228350', title: '시설관리', desc: '건축물 설비의 안정적 유지보수' },
              { id: '1626228355', title: '환경미화', desc: '쾌적하고 청결한 공간 조성' },
              { id: '1626228361', title: '근로자파견', desc: '검증된 우수 인력 적재적소 파견' },
              { id: '1626228413', title: '소독방역', desc: '체계적인 해충방제 및 살균소독' },
              { id: '1626228418', title: '저수조청소', desc: '안전한 식수 공급을 위한 수조 관리' }
            ].map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all h-[300px]">
                <Image 
                  src={`/images/legacy/gallery_${item.id}.jpg`}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              사업분야 전체보기 <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 정부지원 및 사회적 가치 (유튜브 포함 원본 구조) */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/legacy/banner_1626227840.jpg" alt="Background" fill className="object-cover" />
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">정부지원기업 및 사회적 가치 실현</h2>
            <p className="text-xl text-gray-300">정부 우선구매 대상 기업으로서 신뢰와 책임을 다합니다</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <Shield className="w-12 h-12 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">사회적 기업</h3>
                  <p className="text-gray-300 leading-relaxed">
                    국가기관 및 지자체 등 공공기관의 공공구매 대상으로 취약계층에게 사회서비스 또는 일자리를 제공하여 지역주민의 삶의 질을 높이는 등의 사회적 목적을 추구합니다.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-400">
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-400" /> 공공기관 우선구매 대상</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-400" /> 지역사회 발전 기여</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <Users className="w-12 h-12 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">장애인표준사업장</h3>
                  <p className="text-gray-300 leading-relaxed">
                    취업이 어려운 장애인에게 안정된 일자리를 제공하며, 국가기관 및 자치단체는 총 구매액의 일정비율 이상을 우선 구매해야 하는 대상기업입니다.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-400">
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-400" /> 장애인 고용 창출 (부담금 감면)</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-400" /> 안정적 일자리 및 편의시설 제공</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="aspect-video w-full bg-black">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/zOIfK7v0c5I" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 우리의 주요 인증서 (NEW) */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">보유 인증 및 허가</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: '1626230357', name: '건물위생관리업' },
              { id: '1626230359', name: '경비업 허가증' },
              { id: '1626230361', name: '근로자파견사업' },
              { id: '1626230363', name: '소독업 신고증' },
              { id: '1626230366', name: '위생관리용역업' },
              { id: '1626230368', name: '저수조청소업' },
            ].map((cert) => (
              <div key={cert.id} className="bg-white border border-gray-200 p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-32 h-40 border border-gray-100 mb-2">
                  <Image src={`/images/legacy/cert_${cert.id}.jpg`} alt={cert.name} fill className="object-contain" />
                </div>
                <p className="text-sm font-medium text-gray-700">{cert.name}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Link href="/about#certifications" className="text-blue-600 font-medium hover:underline inline-flex items-center">
              모든 인증서 보기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. 협력업체 마퀴 애니메이션 (원본 슬라이더 복원) */}
      <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Our Partners</h3>
        </div>
        
        <div className="relative flex overflow-x-hidden w-full group">
          <div className="animate-marquee flex whitespace-nowrap items-center min-w-full">
            {[
              '1625722183', '1625722188', '1625722194', '1625722199', 
              '1625722208', '1625722213', '1625722219', '1625722227'
            ].map((id, idx) => (
              <div key={idx} className="flex-shrink-0 w-48 h-24 relative mx-6 grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={`/images/legacy/gallery_${id}.jpg`} alt={`Partner ${idx}`} fill className="object-contain" />
              </div>
            ))}
            {/* Seamless loop duplication */}
            {[
              '1625722183', '1625722188', '1625722194', '1625722199', 
              '1625722208', '1625722213', '1625722219', '1625722227'
            ].map((id, idx) => (
              <div key={`dup-${idx}`} className="flex-shrink-0 w-48 h-24 relative mx-6 grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={`/images/legacy/gallery_${id}.jpg`} alt={`Partner ${idx}`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA 배너 */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/legacy/banner_1626229045.png" alt="CTA Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            성공적인 비즈니스를 위한 최고의 파트너<br/>
            케이두레와 함께 하십시오
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <p className="text-blue-200 font-medium mb-1">고객상담센터</p>
                  <p className="text-4xl font-bold tracking-tight">02-2668-0311</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-24 bg-white/20" />
              <Link href="/about#contact" className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-2" />
                오시는 길
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
