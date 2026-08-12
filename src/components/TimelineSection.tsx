"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  {
    year: "2014",
    title: "설립 및 기반 조성",
    events: ["케이두레 설립", "건물관리업 등록"],
  },
  {
    year: "2015",
    title: "사업 인프라 확대",
    events: ["장애인 표준사업장 등록", "콜센터업 등록"],
  },
  {
    year: "2016",
    title: "서비스 다각화",
    events: ["시설경비업 허가", "점보롤휴지제조업 등록"],
  },
  {
    year: "2017",
    title: "도약의 발판",
    events: ["건물위생관리업 등록", "강서구 사옥 이전"],
  },
  {
    year: "2018",
    title: "공공 및 사회적 기여",
    events: ["사회적 기업 인증", "서울교육청 용역 수주"],
  },
  {
    year: "2019",
    title: "사업 영역 확장",
    events: ["공공주택관리업 허가", "근로자파견업 허가", "증미지점/경기지점 설치"],
  },
  {
    year: "2020",
    title: "가치 입증",
    events: ["일자리창출 유공 대통령 표창 수상", "사회적가치 측정 우수기업 선정", "관공서 용역 다수 수주"],
  },
  {
    year: "2021",
    title: "대형 프로젝트 수주",
    events: ["에스원 협력사 등록", "삼성바이오로직스 개발동 미화용역 수주"],
  },
  {
    year: "2022",
    title: "우수 고용 입증",
    events: ["제대군인 고용 우수기업 선정"],
  },
  {
    year: "2023",
    title: "지속 가능한 성장",
    events: ["삼성바이오로직스 주차타워 미화용역 수주"],
  },
];

export default function TimelineSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // X축 이동 (전체 카드 개수에 맞춰 화면 밖으로 스크롤)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-apple-surface-tile-1">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* 거대 타이포그래피 배경 (고정) */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
          <h2 className="text-[25vw] font-bold text-white whitespace-nowrap tracking-tighter">
            HISTORY
          </h2>
        </div>

        {/* 하단 진행 바 (Progress Bar) */}
        <div className="absolute bottom-0 left-0 h-1 bg-apple-surface-tile-3 w-full">
          <motion.div
            className="h-full bg-apple-primary"
            style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          />
        </div>

        {/* 상단 타이틀 */}
        <div className="absolute top-24 left-12 md:left-24 z-10">
          <h2 className="text-apple-display-lg font-bold text-white mb-2">끊임없는 성장의 발자취</h2>
          <p className="text-apple-lead-airy text-apple-body-muted">케이두레가 걸어온 혁신과 상생의 기록</p>
        </div>

        {/* 가로 스크롤 영역 */}
        <motion.div style={{ x }} className="flex gap-16 pl-12 md:pl-24 pr-[50vw] pt-24">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative w-[320px] md:w-[400px] shrink-0 group flex flex-col justify-center h-full"
            >
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 h-[50%] w-[1px] bg-white/10" />
              
              <div className="mb-6">
                <span className="text-[70px] md:text-[100px] font-bold text-white/20 tracking-tighter group-hover:text-white/40 transition-colors duration-500 leading-none">
                  {item.year}
                </span>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-500">
                <h3 className="text-apple-display-md text-white font-bold mb-6">{item.title}</h3>
                <ul className="space-y-4">
                  {item.events.map((event, eventIdx) => (
                    <li key={eventIdx} className="flex items-start text-apple-body-muted text-[17px]">
                      <span className="text-apple-primary mr-3 mt-0.5 font-bold">―</span>
                      <span className="leading-relaxed">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
