import React from 'react';

const timelineData = [
  {
    date: '2025.01',
    title: 'ISO 9001 / 45001 인증획득',
    desc: '국제 표준 품질/안전보건경영시스템 공식 인증',
  },
  {
    date: '2020.08 - 12',
    title: '사회적가치 측정 최우수, 표창 2관왕',
    desc: '일자리 창출 대통령 표창, 제대군인 우수고용기업선정',
  },
  {
    date: '2019.06',
    title: '인허가 획득 및 사업 영역 확장',
    desc: '공동주택관리업 허가 및 근로자 파견업 인가획득',
  },
  {
    date: '2018.03',
    title: '사회적기업 인증',
    desc: '고용노동부 주관 사회적기업 인증',
  },
  {
    date: '2017.05',
    title: '장애인 표준사업장 인증 및 등록',
    desc: '콜센터업, 건물위생관리기업등록',
  },
  {
    date: '2014.12',
    title: '케이두레 법인설립',
    desc: '종합서비스업 법인 설립',
  }
];

export default function CompanyTimeline() {
  return (
    <div className="w-full relative py-12">
      {/* Center Line for Desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 bg-[#0f6a37] -translate-x-1/2 rounded-full opacity-20" />
      
      {/* Left Line for Mobile */}
      <div className="md:hidden absolute left-8 top-0 bottom-0 w-1.5 bg-[#0f6a37] rounded-full opacity-20" />

      <div className="flex flex-col gap-12 relative z-10">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 1; // Alternating sides
          
          return (
            <div key={index} className={`flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-start relative`}>
              
              {/* Timeline Dot (Desktop: Center, Mobile: Left) */}
              <div className="absolute md:left-1/2 left-8 -translate-x-1/2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#f48c26] border-4 border-white shadow-md z-20" />
              
              {/* Content Card */}
              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} flex ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                
                <div className="bg-white p-6 rounded-apple-md shadow-[0_4px_12px_rgba(10,37,64,0.06)] border border-apple-hairline hover:shadow-md transition-shadow hover:-translate-y-1 duration-300 w-full max-w-[400px]">
                  <div className="text-xl font-extrabold text-[#f48c26] tracking-tight mb-1">{item.date}</div>
                  <h4 className="text-lg font-bold text-apple-ink mb-2">{item.title}</h4>
                  <p className="text-apple-caption text-apple-ink-muted-80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
