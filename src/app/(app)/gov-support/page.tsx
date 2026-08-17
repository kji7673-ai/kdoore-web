import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, TrendingUp, Building2, Users } from 'lucide-react';
import styles from './page.module.css';
import { getPayload } from 'payload';
import config from '@payload-config';

export const metadata = {
  title: '정부지원기업안내 | K-Doore',
};

export const revalidate = 60;

export default async function GovSupportPage() {
  let cmsData: any = null;
  const dbUrl = process.env.POSTGRES_URL;
  if (dbUrl && !dbUrl.includes('placeholder')) {
    try {
      const payload = await getPayload({ config });
      cmsData = await payload.findGlobal({ slug: 'govSupport' });
    } catch (e) {
      console.warn("Payload DB connection failed", e);
    }
  }

  const defaultBenefit1Items = [
    '국가계약법 제4조 및 동법 시행령 제26조 제1항',
    '지방자치단체를 당사자로 하는 계약에 관한 법률 제9조',
    '공공기관의 운영에 관한 법률 등',
    '우선구매 관련 경영평가 가점 반영'
  ];

  const benefit1Items = cmsData?.benefit1Items?.length > 0 
    ? cmsData.benefit1Items.map((b: any) => b.item) 
    : defaultBenefit1Items;

  const defaultBenefit2Cards = [
    {
      label: '고용부담금 감면',
      title: '감면 혜택',
      desc: '장애인표준사업장 연계고용 시 부담금의 최대 60%까지 감면 가능',
      isHighlight: true
    },
    {
      label: '기업 이미지 제고',
      title: 'ESG 경영 실천',
      desc: '취약계층 고용 창출 기여로 사회적 책임(CSR) 이행 및 기업 평판 향상',
      isHighlight: false
    },
    {
      label: '안정적 서비스',
      title: '전문적인 관리',
      desc: '다년간의 노하우와 전문 인력을 통한 고품질 종합 관리 솔루션 제공',
      isHighlight: false
    }
  ];

  const benefit2Cards = cmsData?.benefit2Cards?.length > 0 
    ? cmsData.benefit2Cards 
    : defaultBenefit2Cards;

  return (
    <div className="bg-apple-canvas-parchment text-apple-ink min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="bg-apple-canvas text-center py-32 border-b border-apple-divider-soft">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-apple-display-lg md:text-apple-hero-display font-bold mb-6 tracking-tight">
            {cmsData?.heroTitle || '사회적기업 및 장애인표준사업장'}
          </h1>
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mx-auto whitespace-pre-wrap">
            {cmsData?.heroSubtitle || '공공기관 우선구매 대상 기업이자, \n귀사의 장애인 의무고용부담금을 실질적으로 감면해 드리는 정부지원 파트너입니다.'}
          </p>
        </div>
      </section>

      {/* 우선구매 대상 안내 */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-apple-display-md font-bold mb-6">
                {cmsData?.benefit1Title || '공공기관 우선구매 대상'}
              </h2>
              <p className="text-apple-body text-apple-ink-muted-80 mb-8 whitespace-pre-wrap">
                {cmsData?.benefit1Desc || '케이두레는 사회적 기업으로 인증받아 국가 및 지방자치단체, 공기업, 준정부기관의 우선구매 대상 기업입니다. 취약계층에게 양질의 일자리를 제공하며 지역사회와 상생하는 사회적 목적을 추구합니다.'}
              </p>
              
              <ul className="space-y-4">
                {benefit1Items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-apple-primary mr-3 shrink-0" />
                    <span className="text-apple-body-strong">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
               <div className="relative aspect-square md:aspect-[4/3] rounded-apple-lg overflow-hidden border border-apple-hairline shadow-lg">
                  <Image 
                    src="/images/legacy/about1.jpg"
                    alt="사회적 기업"
                    fill
                    className="object-cover"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 장애인표준사업장 혜택 */}
      <section className="py-24 bg-apple-surface-tile-1 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-apple-display-md font-bold mb-6">
              {cmsData?.benefit2Title || '장애인표준사업장 연계고용 혜택'}
            </h2>
            <p className="text-apple-lead-airy text-apple-body-muted whitespace-pre-wrap">
              {cmsData?.benefit2Desc || '장애인 의무고용률을 달성하지 못한 기업이 장애인표준사업장인 케이두레와 도급 계약을 맺거나 물품을 구매할 경우, 납부해야 할 부담금을 대폭 감면받을 수 있습니다.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefit2Cards.map((card: any, idx: number) => (
              <div key={idx} className={`p-10 rounded-apple-lg border ${card.isHighlight ? 'bg-apple-primary border-apple-primary text-white shadow-xl transform md:-translate-y-4' : 'bg-apple-surface-tile-2 border-apple-surface-tile-3'}`}>
                <div className={`text-sm font-semibold mb-4 tracking-wider ${card.isHighlight ? 'text-blue-100' : 'text-apple-primary-on-dark'}`}>
                  {card.label}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className={card.isHighlight ? 'text-white' : 'text-apple-body-muted'}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 영상 영역 */}
      <section className="py-24">
         <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-apple-display-md font-bold mb-6">
              {cmsData?.videoTitle || '홍보 영상'}
            </h2>
            <p className="text-apple-body text-apple-ink-muted-80 mb-12">
              {cmsData?.videoDesc || '케이두레의 비전과 가치를 영상으로 만나보세요.'}
            </p>
            <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-apple-lg overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${cmsData?.videoId || 'DKPkOXFlY10'}`}
                title="K-Doore Promotional Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
         </div>
      </section>
    </div>
  );
}
