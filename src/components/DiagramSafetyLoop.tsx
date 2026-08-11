import React from 'react';
import { ShieldAlert, RefreshCw, ChevronRight, AlertTriangle } from 'lucide-react';

export default function DiagramSafetyLoop() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 bg-white rounded-apple-lg shadow-sm border border-apple-hairline">
      
      {/* Left side: Safety Control Tower */}
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-[#0f6a37] mb-8 text-center lg:text-left">
          안전보건 컨트롤타워
        </h3>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full mt-4">
          {/* CEO Box */}
          <div className="bg-[#0f6a37] text-white px-6 py-8 rounded-apple-md shadow-md text-center flex-1 min-w-[200px]">
            <h4 className="font-bold text-lg mb-1">안전보건관리책임자</h4>
            <p className="text-white/80 text-sm">(CEO 안언숙)</p>
          </div>
          
          {/* Direct Line Arrow */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <span className="text-[#f48c26] font-bold text-sm mb-1">[직보 라인]</span>
            <div className="w-16 h-2 bg-gradient-to-r from-[#f48c26] to-[#f48c26] relative flex items-center">
              <ChevronRight className="absolute -right-3 text-[#f48c26] w-6 h-6" />
            </div>
          </div>
          
          {/* Control Room Box & Sub-teams */}
          <div className="flex-1 flex flex-col gap-4 min-w-[240px]">
            <div className="bg-[#0f6a37] text-white px-6 py-4 rounded-apple-md shadow-md text-center border-2 border-[#0f6a37]">
              <h4 className="font-bold text-lg mb-1">안전보건관리실</h4>
              <p className="text-white/80 text-xs">(전담조직 / 본부장)</p>
            </div>
            
            <div className="flex pl-8 relative">
              {/* Connecting line */}
              <div className="absolute left-4 top-0 bottom-6 w-[2px] bg-[#0f6a37]" />
              
              <div className="flex flex-col gap-3 w-full">
                {['담당현장관리팀', '시설관리팀', '당직관리팀'].map((team, idx) => (
                  <div key={idx} className="relative bg-white border-2 border-[#0f6a37] px-4 py-2 rounded-apple-sm text-center">
                    <div className="absolute -left-4 top-1/2 w-4 h-[2px] bg-[#0f6a37]" />
                    <span className="font-bold text-apple-ink text-sm">{team}</span>
                  </div>
                ))}
                <div className="relative bg-white border-2 border-[#0f6a37] px-4 py-2 rounded-apple-sm text-center">
                  <div className="absolute -left-4 top-1/2 w-4 h-[2px] bg-[#0f6a37]" />
                  <span className="font-bold text-apple-ink text-sm block">미화배식팀</span>
                  <span className="text-xs text-[#0f6a37] block mt-1">(현장 중심 인프라 구축)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-apple-divider-soft text-center lg:text-left">
          <p className="text-apple-body-strong text-apple-ink">
            위험사항 인지·발굴 및 先 조치 後 대표 직보 라인 구축
          </p>
        </div>
      </div>

      {/* Right side: 360 Feedback Loop */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-[#0f6a37] mb-8">
          360도 피드백 루프
        </h3>
        
        <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
          {/* Animated spinning background to simulate loop */}
          <div className="absolute inset-4 rounded-full border-[16px] border-t-[#f48c26] border-r-[#0f6a37] border-b-[#f48c26] border-l-[#0f6a37] opacity-20 animate-[spin_10s_linear_infinite]" />
          
          <div className="absolute inset-4 rounded-full border-[16px] border-dashed border-[#0f6a37] opacity-40 animate-[spin_20s_linear_infinite_reverse]" />
          
          {/* Center Content */}
          <div className="z-20 bg-[#f48c26] text-white rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-lg p-4 text-center">
            <AlertTriangle className="w-8 h-8 mb-2" />
            <span className="font-bold text-lg leading-tight">작업중지권<br/>적극 활용 보장</span>
          </div>
          
          {/* Nodes */}
          {/* Top: Daily/Weekly */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-apple-sm shadow-md border border-apple-hairline text-center w-[260px] z-30">
            <span className="font-bold text-[#0f6a37] block mb-1">Daily / Weekly</span>
            <span className="text-xs text-apple-ink block">일일 TBM 및 본사 부장급 야간조 합동근무 정례화</span>
          </div>

          {/* Right: Monthly */}
          <div className="absolute top-1/2 -right-16 -translate-y-1/2 bg-white px-4 py-2 rounded-apple-sm shadow-md border border-apple-hairline text-center z-30">
            <span className="font-bold text-[#0f6a37] block mb-1">Monthly</span>
            <span className="text-xs text-apple-ink block">안전교육<br/>(소장주관)</span>
          </div>

          {/* Bottom: Quarterly/Bi-annual */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-apple-sm shadow-md border border-apple-hairline text-center w-[240px] z-30">
            <span className="font-bold text-[#0f6a37] block mb-1">Quarterly/Bi-annual</span>
            <span className="text-xs text-apple-ink block">간담회(본사 부장)/세미나(본부장)</span>
          </div>

          {/* Left: Annual */}
          <div className="absolute top-1/2 -left-16 -translate-y-1/2 bg-white px-4 py-2 rounded-apple-sm shadow-md border border-apple-hairline text-center z-30">
            <span className="font-bold text-[#0f6a37] block mb-1">Annual</span>
            <span className="text-xs text-apple-ink block">사고예방<br/>결의대회<br/>(책임대표 주관)</span>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
