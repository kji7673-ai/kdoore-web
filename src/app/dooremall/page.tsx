import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowUpRight, Package, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata = {
  title: '두레몰 소개 | K-Doore',
};

const products = [
  {
    id: 1,
    title: '위생용품 및 점보롤',
    desc: '관공서 및 기업용 대용량 화장지, 핸드타올, 위생용품',
    image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=800&q=80',
  },
  {
    id: 2,
    title: '근무복 및 피복류',
    desc: '경비, 미화, 시설관리 등 직무별 맞춤형 특수 근무복',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80',
  },
  {
    id: 3,
    title: '복사용지 및 사무용품',
    desc: '고품질 복사용지 및 사무실 필수 문구류 일체',
    image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=800&q=80',
  },
  {
    id: 4,
    title: '안전보호구',
    desc: '산업안전보건법 기준을 충족하는 각종 안전 장비',
    image: 'https://images.unsplash.com/photo-1588609559336-e0ce677f52a7?w=800&q=80',
  }
];

export default function DooremallPage() {
  return (
    <div className="bg-apple-canvas-parchment text-apple-ink min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="bg-apple-surface-tile-1 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-apple-surface-tile-1">
          <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80" alt="Dooremall Banner" fill className="object-cover opacity-20 mix-blend-luminosity" priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-apple-surface-tile-1 via-apple-surface-tile-1/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-apple-primary text-white mb-8 shadow-xl">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h1 className="text-apple-display-lg md:text-apple-hero-display font-bold mb-6">
            두레몰
          </h1>
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mx-auto">
            장애인표준사업장 생산품 전용 쇼핑몰.<br />
            기업에 필요한 모든 물품을 두레몰에서 편리하게 구매하고<br />
            고용부담금 감면 혜택까지 받아보세요.
          </p>
          <div className="mt-12">
            <a href="http://www.dooremall.kr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-apple-ink hover:bg-apple-surface-pearl px-8 py-4 rounded-full text-lg font-bold transition-colors shadow-lg group">
              두레몰 공식 홈페이지 가기
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white border-b border-apple-divider-soft">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-apple-display-md font-bold mb-4">두레몰 이용 혜택</h2>
            <p className="text-apple-body-strong text-apple-ink-muted-80">합리적인 가격과 확실한 감면 혜택을 동시에 누리세요.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-apple-canvas-parchment p-8 rounded-apple-lg border border-apple-hairline text-center">
              <ShieldCheck className="w-10 h-10 text-apple-primary mx-auto mb-4" />
              <h3 className="text-apple-body-strong font-bold mb-2">고용부담금 감면</h3>
              <p className="text-apple-caption text-apple-ink-muted-80">장애인표준사업장 생산품 구매 실적으로 인정되어 확실한 부담금 감면 혜택을 제공합니다.</p>
            </div>
            <div className="bg-apple-canvas-parchment p-8 rounded-apple-lg border border-apple-hairline text-center">
              <Package className="w-10 h-10 text-apple-primary mx-auto mb-4" />
              <h3 className="text-apple-body-strong font-bold mb-2">원스톱 구매</h3>
              <p className="text-apple-caption text-apple-ink-muted-80">사무용품부터 특수 근무복까지, 기업 운영에 필요한 다양한 품목을 한 곳에서 구매할 수 있습니다.</p>
            </div>
            <div className="bg-apple-canvas-parchment p-8 rounded-apple-lg border border-apple-hairline text-center">
              <Truck className="w-10 h-10 text-apple-primary mx-auto mb-4" />
              <h3 className="text-apple-body-strong font-bold mb-2">대량 구매 및 정기 납품</h3>
              <p className="text-apple-caption text-apple-ink-muted-80">관공서 및 대기업의 대량 주문 및 월/분기별 정기 납품에 최적화된 물류 시스템을 갖추고 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-apple-display-md font-bold mb-4">주요 취급 품목</h2>
            <p className="text-apple-body-strong text-apple-ink-muted-80">다양한 맞춤형 물품을 공급하고 있습니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative rounded-apple-lg overflow-hidden bg-white border border-apple-hairline shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                <div className="p-8">
                  <h3 className="text-apple-lead font-bold mb-2">{product.title}</h3>
                  <p className="text-apple-body text-apple-ink-muted-80">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <a href="http://www.dooremall.kr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-apple-primary font-bold hover:text-apple-primary-focus transition-colors">
              <span>더 많은 상품 보러가기</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
