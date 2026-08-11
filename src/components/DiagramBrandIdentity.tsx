import React from 'react';
import { HeartHandshake, ShieldCheck } from 'lucide-react';

export default function DiagramBrandIdentity() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 p-8 md:p-12 bg-white rounded-apple-lg shadow-sm border border-apple-hairline">
      
      {/* Left side: Meaning */}
      <div className="flex-1 flex flex-col gap-6 w-full">
        <div>
          <h3 className="text-apple-display-md font-bold text-apple-primary mb-2">
            Korea <br />
            Energizer (활력)
          </h3>
        </div>
        <div className="w-12 h-2 bg-apple-surface-chip-translucent rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-apple-ink">+</span>
        </div>
        <div>
          <h3 className="text-apple-display-md font-bold text-apple-ink mb-2">
            우리의 전통마을<br />
            공동체조직 (상생)
          </h3>
        </div>
        
        <div className="mt-6 pt-6 border-t border-apple-divider-soft">
          <p className="text-apple-lead font-medium text-apple-ink tracking-tight">
            일하는 즐거움, 함께하는 직장, 함께 멀리 가는 공동체 정신
          </p>
        </div>
      </div>

      {/* Right side: Interlocking loops visualization */}
      <div className="flex-1 w-full flex justify-center items-center">
        <div className="relative w-full max-w-[400px] aspect-[4/5] flex flex-col items-center justify-center">
          
          {/* Top Loop (Customer Trust - Green) */}
          <div className="relative w-64 h-64 rounded-full border-[12px] border-[#0f6a37] flex flex-col items-center justify-center z-10 shadow-sm bg-white hover:scale-105 transition-transform duration-300">
            {/* Arrow Head - Top right */}
            <div className="absolute -top-3 right-8 w-0 h-0 border-l-[16px] border-l-transparent border-t-[20px] border-t-[#0f6a37] border-r-[16px] border-r-transparent rotate-[60deg]" />
            
            <ShieldCheck className="w-10 h-10 text-[#0f6a37] mb-2" />
            <h4 className="text-xl font-bold text-apple-ink mb-2">고객 신뢰</h4>
            <span className="text-sm font-semibold text-[#0f6a37] mb-3">(Customer Trust)</span>
            <p className="text-xs text-center px-6 text-apple-ink-muted-80 leading-relaxed font-medium">
              신뢰를 바탕으로 축적된 Know-How를 발휘하여 고객사가 추구하는 높은가치와 함께합니다
            </p>
          </div>

          {/* Connection overlap styling */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-apple-hairline">
              <span className="text-[#0f6a37] font-bold text-2xl">Y</span>
            </div>
          </div>

          {/* Bottom Loop (Social Value - Orange) */}
          <div className="relative w-64 h-64 rounded-full border-[12px] border-[#f48c26] flex flex-col items-center justify-center -mt-12 z-0 shadow-sm bg-white hover:scale-105 transition-transform duration-300">
            {/* Arrow Head - Bottom left */}
            <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[16px] border-l-transparent border-b-[20px] border-b-[#f48c26] border-r-[16px] border-r-transparent -rotate-[60deg]" />
            
            <div className="h-8" /> {/* Spacer for overlap */}
            <HeartHandshake className="w-10 h-10 text-[#f48c26] mb-2" />
            <h4 className="text-xl font-bold text-apple-ink mb-1">나눔과 상생</h4>
            <span className="text-sm font-semibold text-[#f48c26] mb-2">(Social Value)</span>
            <p className="text-[11px] text-center px-4 text-apple-ink-muted-80 leading-relaxed font-medium">
              퇴직자들에게 힘과 용기를 주고, 삶의 보람을 느끼고자하는 사람들과 함께 일자리 창출 대표기업으로 자리매김합니다
            </p>
          </div>

        </div>
      </div>
      
    </div>
  );
}
