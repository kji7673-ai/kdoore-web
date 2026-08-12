import React from 'react';
import { HeartHandshake, ShieldCheck, Users } from 'lucide-react';

export default function DiagramBrandIdentity() {
  return (
    <div className="w-full bg-apple-surface-pearl rounded-apple-lg shadow-sm border border-apple-divider-soft p-10 md:p-16 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-apple-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        <h3 className="text-apple-display-lg font-bold text-apple-ink tracking-tight mb-8">
          고객 신뢰를 최우선으로,<br className="md:hidden" /> 나눔과 상생을 실천하며<br />
          <span className="text-apple-primary">함께 멀리 가겠습니다.</span>
        </h3>
        
        <p className="text-apple-lead-airy text-apple-ink-muted-80 mb-16 max-w-2xl mx-auto leading-relaxed">
          케이두레는 일하는 즐거움과 함께하는 직장 문화를 바탕으로, 고객과 사회 모두에 가치를 더하는 공동체 정신을 이어갑니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-apple-lg border border-apple-hairline shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-apple-primary/10 rounded-full flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6 text-apple-primary" />
            </div>
            <h4 className="text-lg font-bold text-apple-ink mb-2">고객 신뢰</h4>
            <p className="text-[14px] text-apple-ink-muted-80 leading-relaxed">
              검증된 노하우와 전문성으로 고객사의 자산 가치를 지킵니다.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-8 rounded-apple-lg border border-apple-hairline shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#f48c26]/10 rounded-full flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6 text-[#f48c26]" />
            </div>
            <h4 className="text-lg font-bold text-apple-ink mb-2">나눔과 상생</h4>
            <p className="text-[14px] text-apple-ink-muted-80 leading-relaxed">
              일자리 창출과 사회적 가치를 실현하며 지역사회와 함께 성장합니다.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-8 rounded-apple-lg border border-apple-hairline shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#0f6a37]/10 rounded-full flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-[#0f6a37]" />
            </div>
            <h4 className="text-lg font-bold text-apple-ink mb-2">공동체 정신</h4>
            <p className="text-[14px] text-apple-ink-muted-80 leading-relaxed">
              K-DOORE(전통마을 공동체)의 정신으로 일하는 즐거움을 만듭니다.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
