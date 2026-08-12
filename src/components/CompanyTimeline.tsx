import React from 'react';

const timelineData = [
  {
    date: '2023.04',
    title: '삼성바이오로직스 주차타워 미화용역 수주',
    desc: '주요 앵커 고객사 시설관리 파트너십 확대',
  },
  {
    date: '2022.12',
    title: '제대군인 고용 우수기업 선정',
    desc: '국가보훈처 지정 (제2022-12호)',
  },
  {
    date: '2021.05',
    title: '삼성바이오로직스 개발동 미화용역 수주',
    desc: '에스원 협력사 등록 및 서비스 개시',
  },
  {
    date: '2020.11 - 12',
    title: '대통령 표창 및 사회적 가치 우수기업 선정',
    desc: '2020년 일자리창출 유공 대통령 표창 수상 및 사회적가치 측정 우수기업 지정',
  },
  {
    date: '2020.09 - 11',
    title: '전국 지점망 및 사업영역 확대',
    desc: '증미지점(교육서비스업) 및 경기지점(도매/소매업, 시설관리) 설치, 관공서 용역 다수 수주',
  },
  {
    date: '2014.12',
    title: '케이두레 법인설립',
    desc: '종합 시설관리 서비스 전문 법인 출범',
  }
];

export default function CompanyTimeline() {
  return (
    <div className="w-full relative py-20 px-4 md:px-0 bg-apple-surface-pearl rounded-apple-lg border border-apple-divider-soft shadow-sm overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-apple-primary/0 via-apple-primary/20 to-apple-primary/0 hidden md:block" />
      <div className="absolute top-0 left-8 w-[1px] h-full bg-gradient-to-b from-apple-primary/0 via-apple-primary/20 to-apple-primary/0 md:hidden" />

      <div className="flex flex-col gap-16 relative z-10">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 1; // Alternating sides
          
          return (
            <div key={index} className={`flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-start relative group`}>
              
              {/* Timeline Dot (Desktop: Center, Mobile: Left) */}
              <div className="absolute md:left-1/2 left-8 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-white border-[3px] border-apple-primary/40 shadow-sm z-20 group-hover:border-apple-primary group-hover:scale-125 transition-all duration-300" />
              
              {/* Content Card */}
              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] ml-16 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} flex ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-apple-lg shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-apple-hairline transition-all duration-500 w-full max-w-[480px]">
                  <div className="text-2xl font-bold text-apple-primary tracking-tight mb-2 font-[number:600]">{item.date}</div>
                  <h4 className="text-[19px] font-bold text-apple-ink mb-2 tracking-tight leading-snug">{item.title}</h4>
                  <p className="text-[15px] text-apple-ink-muted-80 leading-relaxed">
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
