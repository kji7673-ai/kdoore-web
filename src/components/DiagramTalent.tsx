import React from 'react';
import { Award, GraduationCap, Briefcase, Star, ChevronRight } from 'lucide-react';

export default function DiagramTalent() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-12 p-8 md:p-12 bg-white rounded-apple-lg shadow-sm border border-apple-hairline overflow-hidden relative">
      
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full object-cover">
          <circle cx="50" cy="30" r="40" fill="none" stroke="#0f6a37" strokeWidth="15" />
          <circle cx="50" cy="70" r="40" fill="none" stroke="#0f6a37" strokeWidth="15" />
        </svg>
      </div>

      {/* Left side: Infinite Loop / Center graphic */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="relative w-64 h-80 flex flex-col items-center justify-center">
          {/* Top circle */}
          <div className="absolute top-0 w-48 h-48 rounded-full border-[16px] border-[#0f6a37]/80" />
          {/* Bottom circle */}
          <div className="absolute bottom-0 w-48 h-48 rounded-full border-[16px] border-[#0f6a37]" />
          
          {/* Center text overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-md z-10">
            <h3 className="font-bold text-2xl text-[#0f6a37] text-center leading-tight">
              인재 중심<br />시스템
            </h3>
          </div>
        </div>

        {/* Badges */}
        <div className="flex gap-4 mt-8 w-full justify-center">
          <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 px-4 py-3 rounded-apple-sm shadow-sm">
            <Award className="w-8 h-8 text-[#f48c26]" />
            <div>
              <span className="font-bold text-apple-ink block text-sm">우수사원 포상</span>
              <span className="text-xs text-apple-ink-muted-80">무사고/장기근속</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 px-4 py-3 rounded-apple-sm shadow-sm text-white">
            <Star className="w-8 h-8 text-yellow-400" />
            <div>
              <span className="font-bold text-white block text-sm">제대군인고용</span>
              <span className="text-xs text-white/80">우수기업 인증</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Core 3 Pillars */}
      <div className="flex-1 flex flex-col justify-center gap-8 relative z-10">
        
        {/* Pillar 1 */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 bg-[#0f6a37] text-white px-4 py-2 rounded-apple-sm self-start mb-3 shadow-sm">
            <span className="font-bold text-lg">동기부여 및 정서 관리</span>
          </div>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2 text-apple-ink text-sm">
              <ChevronRight className="w-4 h-4 text-[#f48c26] shrink-0 mt-0.5" />
              <span>연간 무사고 인센티브 (휴가 및 회식비 지원)</span>
            </li>
            <li className="flex items-start gap-2 text-apple-ink text-sm">
              <ChevronRight className="w-4 h-4 text-[#f48c26] shrink-0 mt-0.5" />
              <span>청소장비 운용 숙련자 기술수당 지급</span>
            </li>
            <li className="flex items-start gap-2 text-apple-ink text-sm">
              <ChevronRight className="w-4 h-4 text-[#f48c26] shrink-0 mt-0.5" />
              <span>우수사원, 장기근속자, 생일자 포상 시스템</span>
            </li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 bg-[#0f6a37] text-white px-4 py-2 rounded-apple-sm self-start mb-3 shadow-sm">
            <span className="font-bold text-lg">철저한 직무 교육</span>
          </div>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2 text-apple-ink text-sm">
              <ChevronRight className="w-4 h-4 text-[#f48c26] shrink-0 mt-0.5" />
              <span>소장/반장/조장 업무분장에 의한 1:1 현장지도</span>
            </li>
            <li className="flex items-start gap-2 text-apple-ink text-sm">
              <ChevronRight className="w-4 h-4 text-[#f48c26] shrink-0 mt-0.5" />
              <span>CS 강사를 통한 직업의식 및 서비스 교육 (월간 산업안전, 반기 서비스 교육)</span>
            </li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 bg-[#0f6a37] text-white px-4 py-2 rounded-apple-sm self-start mb-3 shadow-sm">
            <span className="font-bold text-lg">전문 인력 확보</span>
          </div>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2 text-apple-ink text-sm">
              <ChevronRight className="w-4 h-4 text-[#f48c26] shrink-0 mt-0.5" />
              <span>국가보훈부 연계 제대 군간부 채용 (조직관리 및 위기 대응 능력 겸비)</span>
            </li>
            <li className="flex items-start gap-2 text-apple-ink text-sm">
              <ChevronRight className="w-4 h-4 text-[#f48c26] shrink-0 mt-0.5" />
              <span>수의계약 대상 업체 (장애인 의무고용 특례 적용 가능)</span>
            </li>
          </ul>
        </div>

      </div>
      
    </div>
  );
}
