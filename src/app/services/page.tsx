import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, SprayCan, HardHat, Droplets, Users2, Shield, Wrench } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: '1626228315',
      title: '경비보안 솔루션',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
      desc: '철저한 출입통제 및 방범 서비스로 고객의 안전과 자산을 완벽하게 보호합니다.',
      features: ['24시간 상주 경비', '첨단 방범 시스템 운영', '내방객 출입 통제', '시설물 순찰 및 점검'],
      details: '전문적인 교육을 이수한 보안 요원들이 현장에 배치되어 각종 사고를 미연에 방지하며, 신속한 초기 대응 체계를 구축하고 있습니다. 국가중요시설 및 일반 상업시설 모두 맞춤형 보안 계획을 수립합니다.'
    },
    {
      id: '1626228350',
      title: '시설유지관리',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      desc: '건축물 및 각종 설비의 체계적이고 안정적인 유지보수를 통해 건축물의 수명을 연장합니다.',
      features: ['전기/기계/소방설비 관리', '법정 점검 대행', '에너지 효율화 컨설팅', '긴급 출동 보수'],
      details: '전기, 소방, 기계 등 분야별 전문 기사들이 24시간 안전하게 시설물을 관리합니다. 정기적인 예방 점검을 통해 돌발적인 고장을 최소화하고 최적의 운전 상태를 유지합니다.'
    },
    {
      id: '1626228355',
      title: '환경미화',
      icon: SprayCan,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      desc: '첨단 장비와 친환경 세제를 활용하여 언제나 쾌적하고 청결한 공간을 조성합니다.',
      features: ['일상/정기 청소', '외벽 및 유리창 청소', '바닥 왁스 코팅', '입주/준공 청소'],
      details: '인체에 무해한 친환경 세제와 전문 장비를 사용하여 눈에 보이지 않는 유해물질까지 제거합니다. 병원, 관공서, 상업시설 등 공간 특성에 맞는 맞춤형 미화 메뉴얼을 적용합니다.'
    },
    {
      id: '1626228361',
      title: '근로자파견',
      icon: Users2,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      desc: '기업이 필요로 하는 검증된 우수 인력을 신속하고 정확하게 적재적소에 파견합니다.',
      features: ['사무/행정 보조', '생산/제조 인력', '물류/포장 인원', '콜센터/CS 상담원'],
      details: '체계적인 인재 풀(Pool)과 엄격한 선발 과정을 거친 인재만을 파견합니다. 노무 리스크를 최소화하고 고객사의 핵심 비즈니스 역량 강화를 지원하는 든든한 HR 파트너입니다.'
    },
    {
      id: '1626228413',
      title: '소독방역',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=800&q=80',
      desc: '감염병 예방 및 체계적인 해충방제를 통해 안전하고 위생적인 생활 환경을 보장합니다.',
      features: ['법정 의무소독', '해충/쥐 방제', '바이러스 살균소독', '수목 소독'],
      details: '식약처 승인을 받은 안전한 약품만을 사용하며, 대상 시설의 구조와 특성에 따른 1:1 맞춤형 방제 솔루션을 제공합니다. 정기적인 모니터링으로 해충의 서식과 유입을 원천 차단합니다.'
    },
    {
      id: '1626228418',
      title: '저수조청소',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1585728748176-455b5d09c1fa?w=800&q=80',
      desc: '안전하고 깨끗한 식수 공급을 위해 관련 법규에 따른 전문적인 수조 관리를 실시합니다.',
      features: ['반기 1회 정기청소', '수질 검사 대행', '물탱크 시설 점검', '녹조/슬러지 완벽제거'],
      details: '전문 교육을 이수한 작업자가 고압 세척 장비를 사용하여 저수조 내부의 이물질과 물때를 완벽하게 제거합니다. 청소 후 소독 작업을 통해 먹는 물의 안전성을 확보합니다.'
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* 1. 헤더 */}
      <div className="bg-blue-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/legacy/banner_1626171431.jpg" alt="Services Banner" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">사업분야</h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
            전문적이고 체계적인 케이두레만의 맞춤형 종합 관리 솔루션
          </p>
        </div>
      </div>

      {/* 2. 서비스 상세 목록 */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          {services.map((svc, index) => (
            <div key={svc.id} id={svc.id} className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="w-full md:w-1/2 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                  <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-2">
                  <svc.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{svc.title}</h2>
                <p className="text-xl text-blue-600 font-medium">{svc.desc}</p>
                <p className="text-gray-600 leading-relaxed text-lg">{svc.details}</p>
                
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">주요 서비스 내용</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {svc.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. 하단 CTA */}
      <section className="py-20 bg-gray-900 text-white mt-12 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">전문적인 관리가 필요하신가요?</h2>
          <p className="text-gray-400 mb-10 text-lg">케이두레의 전문가가 귀하의 시설에 최적화된 맞춤형 관리 솔루션을 제안해 드립니다.</p>
          <div className="flex justify-center gap-4">
            <Link href="/about#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-colors">
              상담 문의하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
