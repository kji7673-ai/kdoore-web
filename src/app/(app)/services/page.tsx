import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, SprayCan, HardHat, Droplets, Users2, Shield, Wrench } from "lucide-react";
import { getPayload } from 'payload';
import config from '@payload-config';

const ICON_MAP: Record<string, any> = {
  'Shield': Shield,
  'Wrench': Wrench,
  'SprayCan': SprayCan,
  'Users2': Users2,
  'ShieldCheck': ShieldCheck,
  'Droplets': Droplets,
};

export default async function ServicesPage() {
  let cmsData: any = null;
  const dbUrl = process.env.POSTGRES_URL;
  if (dbUrl && !dbUrl.includes('placeholder')) {
    try {
      const payload = await getPayload({ config });
      cmsData = await payload.findGlobal({ slug: 'services' });
    } catch (e) {
      console.warn("Payload DB connection failed", e);
    }
  }

  const defaultServices = [
    {
      id: '1626228315',
      title: '경비보안 솔루션',
      icon: 'Shield',
      image: { url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80' },
      desc: '철저한 출입통제 및 방범 서비스로 고객의 안전과 자산을 완벽하게 보호합니다.',
      details: '전문적인 교육을 이수한 보안 요원들이 현장에 배치되어 각종 사고를 미연에 방지하며, 신속한 초기 대응 체계를 구축하고 있습니다. 국가중요시설 및 일반 상업시설 모두 맞춤형 보안 계획을 수립합니다.',
      scopes: [
        { title: '출입 통제', items: [{ item: '상주 근무자 및 내방객 출입 확인' }, { item: '물품 반출입 통제 및 기록' }, { item: '잡상인 및 위험인물 출입 차단' }] },
        { title: '방범 및 순찰', items: [{ item: '주·야간 정기 및 수시 순찰' }, { item: '도난, 화재 등 사고 예방' }, { item: 'CCTV 모니터링 및 이상징후 파악' }] },
        { title: '긴급 대응', items: [{ item: '비상사태 발생 시 초기 진압' }, { item: '경찰, 소방 등 유관기관 신속 연락체계 가동' }, { item: '상황 종료 후 재발방지 보고서 작성' }] }
      ]
    },
    {
      id: '1626228350',
      title: '시설유지관리 (FM)',
      icon: 'Wrench',
      image: { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80' },
      desc: '건축물 및 각종 설비의 체계적이고 안정적인 유지보수를 통해 건축물의 수명을 연장합니다.',
      details: '전기, 소방, 기계 등 분야별 전문 기사들이 24시간 안전하게 시설물을 관리합니다. 정기적인 예방 점검을 통해 돌발적인 고장을 최소화하고 최적의 운전 상태를 유지합니다.',
      scopes: [
        { title: '전기/기계 설비', items: [{ item: '수배전반, 발전기, 승강기 정기 점검' }, { item: '공조, 냉난방, 보일러 설비 최적화 운전' }, { item: '에너지 사용량 모니터링 및 절감 컨설팅' }] },
        { title: '소방 및 방재', items: [{ item: '화재 수신기 및 소화 펌프 상시 점검' }, { item: '법정 소방 점검 대행 및 지적사항 보수' }, { item: '화재 예방 시뮬레이션 훈련' }] },
        { title: '건축물 유지보수', items: [{ item: '외벽, 지붕, 방수 상태 점검' }, { item: '내부 마감재 및 구조물 하자 보수' }, { item: '법정 시설물 안전 진단 지원' }] }
      ]
    },
    {
      id: '1626228355',
      title: '환경미화 솔루션',
      icon: 'SprayCan',
      image: { url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80' },
      desc: '첨단 장비와 친환경 세제를 활용하여 언제나 쾌적하고 청결한 공간을 조성합니다.',
      details: '인체에 무해한 친환경 세제와 전문 장비를 사용하여 눈에 보이지 않는 유해물질까지 제거합니다. 병원, 관공서, 상업시설 등 공간 특성에 맞는 맞춤형 미화 메뉴얼을 적용합니다.',
      scopes: [
        { title: '일상 미화', items: [{ item: '로비, 복도, 화장실 등 공용부 일일 청소' }, { item: '사무실 내부 바닥, 쓰레기 분리수거' }, { item: '엘리베이터 및 계단실 청결 유지' }] },
        { title: '특수 청소', items: [{ item: '카페트 스팀 세척 및 얼룩 제거' }, { item: '대리석 연마 광택 및 원목 바닥 코팅' }, { item: '초미립자 살균 방역 및 냄새 제거' }] },
        { title: '외벽 및 준공', items: [{ item: '고층 건물 유리창 및 외벽 고압 세척' }, { item: '신축/리모델링 건물 입주 전 준공 청소' }, { item: '에어컨 및 환풍기 필터 분해 세척' }] }
      ]
    },
    {
      id: '1626228361',
      title: '근로자파견 및 아웃소싱',
      icon: 'Users2',
      image: { url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80' },
      desc: '기업이 필요로 하는 검증된 우수 인력을 신속하고 정확하게 적재적소에 파견합니다.',
      details: '체계적인 인재 풀(Pool)과 엄격한 선발 과정을 거친 인재만을 파견합니다. 노무 리스크를 최소화하고 고객사의 핵심 비즈니스 역량 강화를 지원하는 든든한 HR 파트너입니다.',
      scopes: [
        { title: '사무지원', items: [{ item: '일반 사무, 행정, 경리 보조 인력' }, { item: '비서, 리셉션, 안내데스크 요원' }, { item: '단기 프로젝트 투입 사무 인원' }] },
        { title: '콜센터 (CS)', items: [{ item: '인바운드/아웃바운드 전문 상담원' }, { item: '고객 불만 처리 및 해피콜 요원' }, { item: '텔레마케팅 및 리서치 요원' }] },
        { title: '생산/물류', items: [{ item: '제조 공정 단순 조립 및 검사 인력' }, { item: '물류센터 입출고, 포장, 피킹 요원' }, { item: '시설 식당 조리보조 및 배식 인원' }] }
      ]
    },
    {
      id: '1626228413',
      title: '전문 소독·방역',
      icon: 'ShieldCheck',
      image: { url: '/images/services/disinfection.jpg' },
      desc: '감염병 예방 및 체계적인 해충방제를 통해 안전하고 위생적인 생활 환경을 보장합니다.',
      details: '식약처 승인을 받은 안전한 약품만을 사용하며, 대상 시설의 구조와 특성에 따른 1:1 맞춤형 방제 솔루션을 제공합니다. 정기적인 모니터링으로 해충의 서식과 유입을 원천 차단합니다.',
      scopes: [
        { title: '해충 방제', items: [{ item: '바퀴벌레, 개미, 쥐 등 혐오 해충 퇴치' }, { item: '비래해충(모기, 파리) 포충기 설치 및 관리' }, { item: '서식지 파악 및 약제 분무/독먹이 시공' }] },
        { title: '살균 소독', items: [{ item: '코로나19 등 바이러스 예방 초미립자(ULV) 분무 살균' }, { item: '접촉 빈도가 높은 손잡이, 승강기 버튼 집중 표면 소독' }, { item: '화장실 및 배수구 악취 원인균 살균' }] },
        { title: '법정 소독', items: [{ item: '감염병의 예방 및 관리에 관한 법률에 따른 의무 소독' }, { item: '소독 증명서 발급 및 관할 보건소 실적 보고' }, { item: '수목 소독 및 건물 외부 조경 병해충 방제' }] }
      ]
    },
    {
      id: '1626228418',
      title: '저수조청소',
      icon: 'Droplets',
      image: { url: '/images/services/watertank.jpg' },
      desc: '안전하고 깨끗한 식수 공급을 위해 관련 법규에 따른 전문적인 수조 관리를 실시합니다.',
      details: '전문 교육을 이수한 작업자가 고압 세척 장비를 사용하여 저수조 내부의 이물질과 물때를 완벽하게 제거합니다. 청소 후 소독 작업을 통해 먹는 물의 안전성을 확보합니다.',
      scopes: [
        { title: '반기 정기청소', items: [{ item: '수도법에 따른 반기 1회 의무 청소' }, { item: '수조 내부 슬러지 및 물때 완벽 제거' }, { item: '벽면 및 바닥 고압 세척' }] },
        { title: '수질 관리', items: [{ item: '수질 검사 대행 및 성적서 발급' }, { item: '잔류 염소 측정 및 수질 안전성 확보' }, { item: '수조 환기 및 내부 소독' }] },
        { title: '시설 점검', items: [{ item: '수위 조절 밸브 및 펌프류 상태 확인' }, { item: '맨홀 뚜껑 시건 장치 점검' }, { item: '오버플로우관 방충망 상태 점검' }] }
      ]
    }
  ];

  const services = cmsData?.servicesList?.length > 0 ? cmsData.servicesList : defaultServices;

  return (
    <main className="min-h-screen bg-apple-canvas-parchment pt-24 pb-12">
      {/* 1. 헤더 */}
      <div className="bg-apple-surface-tile-1 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-apple-surface-tile-1">
          <Image 
            src={cmsData?.heroBgImage?.url || "/images/legacy/banner_1626171431.jpg"} 
            alt="Services Banner" 
            fill 
            className="object-cover opacity-40 mix-blend-luminosity" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-apple-surface-tile-1 via-apple-surface-tile-1/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <h1 className="text-apple-display-lg md:text-apple-hero-display font-bold mb-6">
            {cmsData?.heroTitle || '사업분야'}
          </h1>
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mx-auto">
            {cmsData?.heroSubtitle || '전문적이고 체계적인 케이두레만의 맞춤형 종합 관리 솔루션.\n세부 과업 지시서와 업무 범위를 확인하세요.'}
          </p>
        </div>
      </div>

      {/* 2. 서비스 상세 목록 */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl space-y-32">
          {services.map((svc: any, index: number) => {
            const Icon = ICON_MAP[svc.icon] || Shield;
            return (
              <div key={svc.id || index} id={svc.id || `service-${index}`} className="scroll-mt-32">
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Side (Sticky on Desktop) */}
                  <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
                    <div className="relative aspect-[4/3] rounded-apple-lg overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-apple-hairline group">
                      <Image 
                        src={svc.image?.url || ''} 
                        alt={svc.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        unoptimized 
                      />
                      <div className="absolute inset-0 bg-apple-surface-tile-1/5 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-[55%] flex flex-col pt-4 group-hover:opacity-100">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border border-blue-100 text-apple-primary mb-6 shadow-sm group-hover:bg-apple-primary group-hover:text-white transition-colors duration-500">
                      <Icon className="w-8 h-8 transition-colors duration-500" />
                    </div>
                    <h2 className="text-apple-display-md font-bold text-apple-ink mb-4">{svc.title}</h2>
                    <p className="text-apple-lead text-apple-primary font-medium mb-6">{svc.desc}</p>
                    <p className="text-apple-body text-apple-ink-muted-80 leading-relaxed mb-10 whitespace-pre-wrap">{svc.details}</p>
                    
                    {/* Scope of Work (Accordions) */}
                    {svc.scopes && svc.scopes.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-apple-ink mb-4 border-b border-apple-divider-soft pb-2">상세 업무 범위</h3>
                        {svc.scopes.map((scope: any, i: number) => (
                          <details key={i} className="group bg-white rounded-apple-md border border-apple-hairline shadow-sm overflow-hidden" open={i === 0}>
                            <summary className="cursor-pointer font-semibold text-apple-ink p-5 bg-apple-surface-pearl hover:bg-white transition-colors flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                              <span>{scope.title}</span>
                              <span className="text-apple-primary font-light text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                            </summary>
                            <div className="p-5 border-t border-apple-hairline bg-white">
                              <ul className="space-y-3">
                                {scope.items?.map((itemObj: any, idx: number) => (
                                  <li key={idx} className="flex items-start text-apple-ink-muted-80 text-[15px]">
                                    <CheckCircle2 className="w-5 h-5 text-apple-primary mr-3 shrink-0 mt-0.5" />
                                    <span>{itemObj.item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </details>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 하단 CTA */}
      <section className="py-24 bg-apple-surface-tile-1 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-apple-display-md font-bold mb-6">{cmsData?.ctaTitle || '전문적인 관리가 필요하신가요?'}</h2>
          <p className="text-apple-lead-airy text-apple-body-muted mb-12 whitespace-pre-wrap">
            {cmsData?.ctaSubtitle || '케이두레의 전문가가 귀하의 시설에 최적화된 맞춤형 관리 솔루션과 비교 견적을 제안해 드립니다.'}
          </p>
          <div className="flex justify-center">
            <Link href={cmsData?.ctaButtonLink || "/about#contact"} className="bg-apple-primary hover:bg-apple-primary-focus text-white px-8 py-4 rounded-full text-lg font-medium transition-colors shadow-lg">
              {cmsData?.ctaButtonText || '현장 방문 상담 요청하기'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
