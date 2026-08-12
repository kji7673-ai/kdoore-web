import React from 'react';
import { AlertTriangle, Clock, Calendar, RefreshCcw, CalendarDays } from 'lucide-react';

export default function SafetyFeedbackLoop() {
  return (
    <div className="w-full flex flex-col items-center py-12">
      
      <div className="text-center mb-12">
        <h3 className="text-apple-display-md font-bold text-apple-ink mb-3 tracking-tight">360도 피드백 루프</h3>
        <p className="text-apple-body text-apple-ink-muted-80">위험사항 인지·발굴 및 先 조치 後 대표 직보 라인 구축</p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Visual 360 Loop Track (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border-[24px] border-[#0f6a37]/5 z-0" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border-[2px] border-[#0f6a37]/20 border-dashed z-0 animate-[spin_40s_linear_infinite]" />

        {/* Center Primary Action */}
        <div className="relative z-20 bg-[#f48c26] text-white p-8 rounded-full aspect-square w-64 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(244,140,38,0.3)] mb-12 md:mb-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 border-8 border-white">
          <AlertTriangle className="w-8 h-8 mb-3" />
          <h4 className="text-xl font-bold leading-tight">작업중지권<br/>적극 활용 보장</h4>
        </div>

        {/* Desktop Circular Layout / Mobile Stack Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[360px] md:gap-y-32 relative z-10">
          
          {/* Daily / Weekly */}
          <div className="bg-white p-6 rounded-apple-lg shadow-sm border border-apple-divider-soft flex flex-col items-center text-center group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
            <div className="w-10 h-10 bg-[#0f6a37]/10 rounded-full flex items-center justify-center mb-4 text-[#0f6a37]">
              <Clock className="w-5 h-5" />
            </div>
            <h5 className="text-lg font-bold text-[#0f6a37] mb-2">Daily / Weekly</h5>
            <p className="text-sm text-apple-ink-muted-80">일일 TBM 및 본사 부장급<br/>야간조 합동근무 정례화</p>
          </div>

          {/* Monthly */}
          <div className="bg-white p-6 rounded-apple-lg shadow-sm border border-apple-divider-soft flex flex-col items-center text-center group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all md:mt-16">
            <div className="w-10 h-10 bg-[#0f6a37]/10 rounded-full flex items-center justify-center mb-4 text-[#0f6a37]">
              <CalendarDays className="w-5 h-5" />
            </div>
            <h5 className="text-lg font-bold text-[#0f6a37] mb-2">Monthly</h5>
            <p className="text-sm text-apple-ink-muted-80">안전교육<br/>(소장주관)</p>
          </div>

          {/* Quarterly / Bi-annual */}
          <div className="bg-white p-6 rounded-apple-lg shadow-sm border border-apple-divider-soft flex flex-col items-center text-center group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
            <div className="w-10 h-10 bg-[#0f6a37]/10 rounded-full flex items-center justify-center mb-4 text-[#0f6a37]">
              <RefreshCcw className="w-5 h-5" />
            </div>
            <h5 className="text-lg font-bold text-[#0f6a37] mb-2">Quarterly / Bi-annual</h5>
            <p className="text-sm text-apple-ink-muted-80">간담회(본사 부장)<br/>세미나(본부장)</p>
          </div>

          {/* Annual */}
          <div className="bg-white p-6 rounded-apple-lg shadow-sm border border-apple-divider-soft flex flex-col items-center text-center group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all md:-mt-16">
            <div className="w-10 h-10 bg-[#0f6a37]/10 rounded-full flex items-center justify-center mb-4 text-[#0f6a37]">
              <Calendar className="w-5 h-5" />
            </div>
            <h5 className="text-lg font-bold text-[#0f6a37] mb-2">Annual</h5>
            <p className="text-sm text-apple-ink-muted-80">사고예방 결의대회<br/>(책임대표 주관)</p>
          </div>

        </div>

      </div>
    </div>
  );
}
