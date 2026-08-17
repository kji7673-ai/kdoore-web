import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowUpRight, Package, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { getPayload } from 'payload';
import config from '@payload-config';

export const metadata = {
  title: '두레몰 소개 | K-Doore',
};

const ICON_MAP: Record<string, any> = {
  'ShieldCheck': ShieldCheck,
  'Package': Package,
  'Truck': Truck,
};

export const revalidate = 60;

export default async function DooremallPage() {
  let cmsData: any = null;
  const dbUrl = process.env.POSTGRES_URL;
  if (dbUrl && !dbUrl.includes('placeholder')) {
    try {
      const payload = await getPayload({ config });
      cmsData = await payload.findGlobal({ slug: 'dooremall' });
    } catch (e) {
      console.warn("Payload DB connection failed", e);
    }
  }

  const defaultBenefits = [
    {
      icon: 'ShieldCheck',
      title: '믿을 수 있는 품질',
      desc: '철저한 검수를 거친 우수한 품질의 제품만을 엄선하여 공급합니다.',
    },
    {
      icon: 'Package',
      title: '맞춤형 대량 공급',
      desc: '기업 및 관공서의 수요에 맞춘 대용량 포장 및 안정적인 물량 확보가 가능합니다.',
    },
    {
      icon: 'Truck',
      title: '신속하고 정확한 배송',
      desc: '전국 어디든 고객이 원하는 장소와 시간에 정확하게 납품합니다.',
    },
  ];

  const benefits = cmsData?.benefits?.length > 0 ? cmsData.benefits : defaultBenefits;

  const defaultProducts = [
    {
      title: '위생용품 및 점보롤',
      desc: '관공서 및 기업용 대용량 화장지, 핸드타올, 위생용품',
      image: { url: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=800&q=80' },
    },
    {
      title: '근무복 및 피복류',
      desc: '경비, 미화, 시설관리 등 직무별 맞춤형 특수 근무복',
      image: { url: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80' },
    },
    {
      title: '복사용지 및 사무용품',
      desc: '업무 효율을 높이는 최고급 복사용지 및 각종 전산용품',
      image: { url: 'https://images.unsplash.com/photo-1568227452187-51147cc15c63?w=800&q=80' },
    },
    {
      title: '청소장비 및 세제',
      desc: '건물 관리에 최적화된 산업용 청소 장비 및 친환경 약품',
      image: { url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80' },
    },
  ];

  const products = cmsData?.products?.length > 0 ? cmsData.products : defaultProducts;

  return (
    <div className="bg-apple-canvas-parchment text-apple-ink min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative bg-apple-surface-tile-1 text-white py-32 overflow-hidden border-b border-apple-divider-soft">
        <div className="absolute inset-0 z-0">
          <Image 
            src={cmsData?.heroBgImage?.url || "/images/legacy/banner_1626171431.jpg"} 
            alt="Dooremall Background" 
            fill 
            className="object-cover opacity-30 mix-blend-luminosity" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-apple-surface-tile-1 to-transparent" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-apple-primary text-white mb-8 shadow-[0_0_40px_rgba(41,151,255,0.4)]">
             <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="text-apple-display-lg md:text-apple-hero-display font-bold mb-6 tracking-tight">
            {cmsData?.heroTitle || '두레몰'}
          </h1>
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mx-auto whitespace-pre-wrap mb-10">
            {cmsData?.heroSubtitle || '장애인표준사업장 생산품 전용 쇼핑몰.\n기업에 필요한 모든 물품을 두레몰에서 편리하게 구매하고\n고용부담금 감면 혜택까지 받아보세요.'}
          </p>
          
          <a 
            href={cmsData?.linkUrl || "http://www.dooremall.kr"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-apple-primary hover:bg-apple-primary-focus text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-[0_0_20px_rgba(41,151,255,0.4)]"
          >
            {cmsData?.linkText || '두레몰 공식 홈페이지 가기'}
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* 특징 및 혜택 */}
      <section className="py-24 bg-apple-canvas">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-apple-display-md font-bold mb-4">{cmsData?.benefitsTitle || '두레몰 이용 혜택'}</h2>
            <p className="text-apple-body text-apple-ink-muted-80">{cmsData?.benefitsSubtitle || '합리적인 가격과 확실한 감면 혜택을 동시에 누리세요.'}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit: any, idx: number) => {
              const Icon = ICON_MAP[benefit.icon] || ShieldCheck;
              return (
                <div key={idx} className="bg-apple-canvas-parchment p-10 rounded-apple-lg border border-apple-hairline hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-apple-hairline text-apple-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-apple-body text-apple-ink-muted-80">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 제품 갤러리/카테고리 */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-apple-display-md font-bold mb-4">{cmsData?.productsTitle || '주요 취급 품목'}</h2>
                <p className="text-apple-body text-apple-ink-muted-80">{cmsData?.productsSubtitle || '다양한 맞춤형 물품을 공급하고 있습니다.'}</p>
             </div>
             <a href={cmsData?.linkUrl || "http://www.dooremall.kr"} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-apple-primary hover:text-apple-primary-focus font-medium">
               전체 상품 보기 <ArrowRight className="w-4 h-4 ml-1" />
             </a>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {products.map((product: any, idx: number) => (
               <div key={idx} className="group cursor-pointer">
                 <div className="relative aspect-square rounded-apple-md overflow-hidden mb-4 border border-apple-hairline shadow-sm">
                   <Image 
                     src={product.image?.url || ''} 
                     alt={product.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                 </div>
                 <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                 <p className="text-sm text-apple-ink-muted-80 line-clamp-2">{product.desc}</p>
               </div>
             ))}
           </div>
           
           <div className="mt-10 text-center md:hidden">
             <a href={cmsData?.linkUrl || "http://www.dooremall.kr"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-apple-primary font-medium px-6 py-3 rounded-full border border-apple-primary bg-blue-50/50">
               전체 상품 보기 <ArrowRight className="w-4 h-4 ml-2" />
             </a>
           </div>
        </div>
      </section>
    </div>
  );
}
