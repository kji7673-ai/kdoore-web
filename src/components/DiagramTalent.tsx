import React from 'react';
import { Award, Star, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function DiagramTalent() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-16 p-10 md:p-16 bg-apple-surface-pearl rounded-apple-lg shadow-sm border border-apple-divider-soft relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-gradient-to-tr from-apple-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Left side: Infinite Loop / Center graphic */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        
        <div className="relative w-64 h-80 flex flex-col items-center justify-center mb-8">
          {/* Infinite Loop Shape using two intersecting glowing rings */}
          <div className="absolute top-4 w-44 h-44 rounded-full border-[8px] border-apple-primary/20 backdrop-blur-sm" />
          <div className="absolute bottom-4 w-44 h-44 rounded-full border-[8px] border-apple-primary/40 backdrop-blur-sm" />
          
          {/* Center text overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(0,102,204,0.12)] border border-apple-hairline z-10">
            <h3 className="font-bold text-xl text-apple-ink text-center leading-snug tracking-tight">
              인재 중심<br />시스템
            </h3>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-xl border border-apple-hairline px-5 py-4 rounded-apple-lg shadow-sm hover:-translate-y-1 transition-transform duration-300">
            <Award className="w-8 h-8 text-apple-primary" />
            <div>
              <span className="font-bold text-apple-ink block text-[15px]">우수사원 포상</span>
              <span className="text-xs text-apple-ink-muted-80 font-medium">무사고/장기근속</span>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-apple-surface-tile-1 border border-apple-surface-tile-2 px-5 py-4 rounded-apple-lg shadow-sm text-white hover:-translate-y-1 transition-transform duration-300">
            <Star className="w-8 h-8 text-yellow-400" />
            <div>
              <span className="font-bold text-white block text-[15px]">제대군인고용</span>
              <span className="text-xs text-white/80 font-medium">우수기업 인증</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Core 3 Pillars */}
      <div className="flex-1 flex flex-col justify-center gap-6 relative z-10">
        
        {/* Pillar 1 */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-apple-lg border border-apple-hairline shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-apple-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-apple-primary" />
            </div>
            <span className="font-bold text-[17px] text-apple-ink tracking-tight">동기부여 및 정서 관리</span>
          </div>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2 text-apple-ink-muted-80 text-[14px]">
              <ChevronRight className="w-4 h-4 text-apple-primary shrink-0 mt-0.5 opacity-70" />
              <span>연간 무사고 인센티브 (휴가 및 회식비 지원)</span>
            </li>
            <li className="flex items-start gap-2 text-apple-ink-muted-80 text-[14px]">
              <ChevronRight className="w-4 h-4 text-apple-primary shrink-0 mt-0.5 opacity-70" />
              <span>청소장비 운용 숙련자 기술수당 지급</span>
            </li>
            <li className="flex items-start gap-2 text-apple-ink-muted-80 text-[14px]">
              <ChevronRight className="w-4 h-4 text-apple-primary shrink-0 mt-0.5 opacity-70" />
              <span>우수사원, 장기근속자, 생일자 포상 시스템</span>
            </li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-apple-lg border border-apple-hairline shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-apple-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-apple-primary" />
            </div>
            <span className="font-bold text-[17px] text-apple-ink tracking-tight">철저한 직무 교육</span>
          </div>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2 text-apple-ink-muted-80 text-[14px]">
              <ChevronRight className="w-4 h-4 text-apple-primary shrink-0 mt-0.5 opacity-70" />
              <span>소장/반장/조장 업무분장에 의한 1:1 현장지도</span>
            </li>
            <li className="flex items-start gap-2 text-apple-ink-muted-80 text-[14px]">
              <ChevronRight className="w-4 h-4 text-apple-primary shrink-0 mt-0.5 opacity-70" />
              <span>CS 강사를 통한 직업의식 및 서비스 교육 정례화</span>
            </li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-apple-lg border border-apple-hairline shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-apple-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-apple-primary" />
            </div>
            <span className="font-bold text-[17px] text-apple-ink tracking-tight">전문 인력 확보</span>
          </div>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2 text-apple-ink-muted-80 text-[14px]">
              <ChevronRight className="w-4 h-4 text-apple-primary shrink-0 mt-0.5 opacity-70" />
              <span>제대 군간부 채용 연계 (조직관리 및 위기대응 능력)</span>
            </li>
            <li className="flex items-start gap-2 text-apple-ink-muted-80 text-[14px]">
              <ChevronRight className="w-4 h-4 text-apple-primary shrink-0 mt-0.5 opacity-70" />
              <span>수의계약 대상 업체 (장애인 의무고용 특례 적용)</span>
            </li>
          </ul>
        </div>

      </div>
      
    </div>
  );
}
