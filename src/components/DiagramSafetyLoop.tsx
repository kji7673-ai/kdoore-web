import React from 'react';
import { ShieldAlert, RefreshCw, ChevronRight, AlertTriangle } from 'lucide-react';

export default function DiagramSafetyLoop() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 p-10 md:p-16 bg-white rounded-apple-lg shadow-sm border border-apple-divider-soft relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-apple-canvas-parchment rounded-full opacity-50 blur-3xl pointer-events-none" />

      {/* Left side: Safety Control Tower */}
      <div className="flex flex-col relative z-10">
        <h3 className="text-apple-display-md font-bold text-apple-ink mb-12 text-center lg:text-left">
          안전보건 컨트롤타워
        </h3>
        
        <div className="flex flex-col gap-6 w-full max-w-sm mx-auto lg:mx-0">
          
          {/* CEO Box */}
          <div className="bg-white/80 backdrop-blur-xl px-8 py-6 rounded-apple-lg shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-apple-hairline text-center group hover:-translate-y-1 transition-transform duration-300">
            <h4 className="font-bold text-xl text-apple-ink mb-1">안전보건관리책임자</h4>
            <p className="text-apple-ink-muted-80 text-sm font-medium">CEO 안언숙</p>
          </div>
          
          {/* Direct Line Arrow */}
          <div className="flex flex-col items-center justify-center -my-2 z-10">
            <div className="px-4 py-1.5 bg-apple-primary/10 rounded-full text-apple-primary text-xs font-bold mb-1 tracking-wide">
              직보 라인
            </div>
            <div className="w-[2px] h-8 bg-gradient-to-b from-apple-primary/40 to-apple-primary" />
          </div>
          
          {/* Control Room Box & Sub-teams */}
          <div className="flex flex-col gap-4">
            <div className="bg-white/80 backdrop-blur-xl px-8 py-6 rounded-apple-lg shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-apple-hairline text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-apple-primary" />
              <h4 className="font-bold text-lg text-apple-ink mb-1">안전보건관리실</h4>
              <p className="text-apple-ink-muted-80 text-xs font-medium">전담조직 / 본부장</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-2">
              {['담당현장관리팀', '시설관리팀', '당직관리팀', '미화배식팀'].map((team, idx) => (
                <div key={idx} className="bg-apple-surface-pearl px-4 py-3 rounded-apple-md text-center border border-apple-hairline">
                  <span className="font-semibold text-apple-ink text-sm">{team}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-apple-divider-soft text-center lg:text-left">
          <p className="text-apple-body-strong text-apple-ink-muted-80">
            위험사항 인지·발굴 및 先 조치 後 대표 직보 라인 구축
          </p>
        </div>
      </div>

      {/* Right side: 360 Feedback Loop */}
      <div className="flex flex-col items-center justify-center relative z-10 mt-12 lg:mt-0">
        <h3 className="text-apple-display-md font-bold text-apple-ink mb-12">
          360도 피드백 루프
        </h3>
        
        <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
          
          {/* Outer Orbit */}
          <div className="absolute inset-0 rounded-full border border-apple-divider-soft" />
          
          {/* Inner Orbit */}
          <div className="absolute inset-16 rounded-full border border-dashed border-apple-divider-soft opacity-60 animate-[spin_40s_linear_infinite]" />
          
          {/* Center Content */}
          <div className="z-20 bg-white/90 backdrop-blur-xl rounded-full w-44 h-44 flex flex-col items-center justify-center shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-apple-hairline p-4 text-center">
            <AlertTriangle className="w-8 h-8 text-apple-primary mb-3" />
            <span className="font-bold text-[17px] text-apple-ink leading-tight tracking-tight">작업중지권<br/>적극 활용 보장</span>
          </div>
          
          {/* Orbital Nodes */}
          
          {/* Top: Daily/Weekly */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-apple-full shadow-sm border border-apple-hairline text-center whitespace-nowrap z-30 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-apple-primary block text-sm mb-0.5 tracking-wide">Daily / Weekly</span>
            <span className="text-xs text-apple-ink font-medium">일일 TBM 및 합동근무</span>
          </div>

          {/* Right: Monthly */}
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white px-5 py-3 rounded-apple-full shadow-sm border border-apple-hairline text-center z-30 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-apple-primary block text-sm mb-0.5 tracking-wide">Monthly</span>
            <span className="text-xs text-apple-ink font-medium">안전교육</span>
          </div>

          {/* Bottom: Quarterly/Bi-annual */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-apple-full shadow-sm border border-apple-hairline text-center whitespace-nowrap z-30 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-apple-primary block text-sm mb-0.5 tracking-wide">Quarterly/Bi-annual</span>
            <span className="text-xs text-apple-ink font-medium">간담회 및 세미나</span>
          </div>

          {/* Left: Annual */}
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white px-5 py-3 rounded-apple-full shadow-sm border border-apple-hairline text-center z-30 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-apple-primary block text-sm mb-0.5 tracking-wide">Annual</span>
            <span className="text-xs text-apple-ink font-medium">사고예방 결의</span>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
