import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, TrendingUp, Building2, Users } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: '정부지원기업안내 | K-Doore',
};

export default function GovSupportPage() {
  return (
    <div className="bg-apple-canvas-parchment text-apple-ink min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="bg-apple-canvas text-center py-32 border-b border-apple-divider-soft">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-apple-display-lg md:text-apple-hero-display font-bold mb-6 tracking-tight">
            사회적기업 및 장애인표준사업장
          </h1>
          <p className="text-apple-lead-airy text-apple-body-muted max-w-2xl mx-auto">
            공공기관 우선구매 대상 기업이자, <br className="hidden md:block"/>
            귀사의 장애인 의무고용부담금을 실질적으로 감면해 드리는 정부지원 파트너입니다.
          </p>
        </div>
      </section>

      {/* Feature 1: Social Enterprise */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-apple-divider-soft text-apple-primary mb-6 shadow-sm">
                <Building2 className="w-7 h-7" />
              </div>
              <h2 className="text-apple-display-md font-bold mb-6">공공기관 우선구매 대상</h2>
              <p className="text-apple-body text-apple-ink-muted-80 mb-8 leading-relaxed">
                케이두레는 사회적 기업으로 인증받아 국가 및 지방자치단체, 공기업, 준정부기관의 우선구매 대상 기업입니다. 취약계층에게 양질의 일자리를 제공하며 지역사회와 상생하는 사회적 목적을 추구합니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-apple-primary mr-3 mt-0.5" />
                  <span className="text-apple-body-strong">관공서 및 공기업 건물종합관리 용역도급</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-apple-primary mr-3 mt-0.5" />
                  <span className="text-apple-body-strong">사회적 책임 완수 및 취약계층 일자리 창출 기여</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 bg-apple-surface-tile-1 rounded-apple-lg p-12 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Building2 className="w-48 h-48" />
               </div>
               <div className="relative z-10">
                 <h3 className="text-apple-lead font-semibold mb-2">사회적 가치 창출</h3>
                 <p className="text-apple-display-lg font-bold text-apple-primary-on-dark mb-4">ESG 경영 파트너</p>
                 <p className="text-apple-body text-apple-body-muted">케이두레와 함께하는 것만으로도 귀사의 ESG 경영 지표가 향상됩니다.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Disabled Standard Workplace with detailed table/grid */}
      <section className="py-24 bg-white border-y border-apple-divider-soft">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-apple-surface-parchment border border-apple-divider-soft text-apple-primary mb-6 shadow-sm">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h2 className="text-apple-display-md font-bold mb-6">장애인표준사업장 연계고용 혜택</h2>
            <p className="text-apple-body text-apple-ink-muted-80 leading-relaxed">
              장애인 의무고용률을 달성하지 못한 기업이 장애인표준사업장인 케이두레와 도급 계약을 맺거나 물품을 구매할 경우, 납부해야 할 부담금을 대폭 감면받을 수 있습니다.
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-apple-canvas-parchment p-8 rounded-apple-lg border border-apple-hairline">
              <h3 className="text-apple-body-strong mb-2 text-apple-ink-muted-80">계약 조건</h3>
              <p className="text-apple-lead font-bold">1년 단위 연계고용</p>
              <p className="text-apple-caption text-apple-ink-muted-80 mt-2">안정적인 서비스 제공을 위한 연간 계약 기준</p>
            </div>
            <div className="bg-apple-canvas-parchment p-8 rounded-apple-lg border border-apple-hairline">
              <h3 className="text-apple-body-strong mb-2 text-apple-ink-muted-80">적용 대상 종류</h3>
              <p className="text-apple-lead font-bold">용역 도급 및 물품</p>
              <p className="text-apple-caption text-apple-ink-muted-80 mt-2">경비, 미화 등 용역 도급 또는 위생지, 피복류 구매</p>
            </div>
            <div className="bg-apple-primary p-8 rounded-apple-lg text-white shadow-xl transform md:-translate-y-4">
              <h3 className="text-apple-body-strong mb-2 text-white/80">최대 감면 한도</h3>
              <p className="text-apple-lead font-bold">부담금 총액의 60%</p>
              <p className="text-apple-caption text-white/80 mt-2">또는 도급/구매 매출액의 50% 중 적은 금액 적용</p>
            </div>
          </div>
          
          <div className="bg-apple-surface-pearl rounded-apple-lg p-8 border border-apple-hairline text-center">
            <p className="text-apple-body text-apple-ink-muted-80">
              상세한 부담금 감면액 시뮬레이션 및 연계고용 절차는 케이두레 담당자가 직접 컨설팅 해드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-apple-canvas-parchment">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-apple-display-md font-bold mb-4">홍보 영상</h2>
          <p className="text-apple-body-strong text-apple-ink-muted-80 mb-12">케이두레의 비전과 가치를 영상으로 만나보세요.</p>
          <div className="relative aspect-video rounded-apple-lg overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-apple-hairline">
            <iframe 
              src="https://www.youtube.com/embed/DKPkOXFlY10?rel=0&autoplay=0&controls=1&fs=1&loop=0&modestbranding=1" 
              allowFullScreen
              title="케이두레 홍보 영상"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
