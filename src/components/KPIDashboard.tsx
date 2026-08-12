'use client';

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Building2, Users, ShieldCheck, MapPin } from 'lucide-react';

const COLORS = ['#1A365D', '#2C5282', '#63B3ED', '#e2e8f0'];

const businessData = [
  { name: '학교 및 공공기관', value: 49 },
  { name: 'Bio생산·복지·주차', value: 28 },
  { name: '건물시설종합(FM)', value: 20 },
  { name: '기타 (콜센터 등)', value: 3 },
];

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <div className="flex items-baseline gap-1">
      <span className="text-[56px] font-semibold text-apple-ink leading-none tracking-tight">{count}</span>
      <span className="text-apple-body-strong text-apple-ink-muted-80 ml-1">{suffix}</span>
    </div>
  );
}

export default function KPIDashboard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="w-full">
      {/* Top Row: Data Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mb-16">
        {/* Left: Donut Chart for Business Areas */}
        <div className="bg-white rounded-apple-lg shadow-sm border border-apple-hairline p-10 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-apple-ink mb-2">핵심 사업 영역</h3>
          <p className="text-apple-caption text-apple-ink-muted-80 mb-8">안정적인 공공/특수 시설 중심의 포트폴리오</p>
          
          <div className="w-full h-[300px]">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={businessData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {businessData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => [`${value}%`, '비중']}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e0e0e0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Right: Key Performance Counters */}
        <div className="bg-white rounded-apple-lg shadow-sm border border-apple-hairline p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-apple-ink mb-12">경영 성과 지표</h3>
          
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-apple-primary" />
                <span className="text-apple-caption-strong text-apple-ink-muted-80 tracking-[0.1em]">연간 매출규모</span>
              </div>
              <AnimatedCounter end={198} suffix="억원" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-apple-primary" />
                <span className="text-apple-caption-strong text-apple-ink-muted-80 tracking-[0.1em]">전문 임직원</span>
              </div>
              <AnimatedCounter end={720} suffix="명" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-apple-primary" />
                <span className="text-apple-caption-strong text-apple-ink-muted-80 tracking-[0.1em]">전국 관리 현장</span>
              </div>
              <AnimatedCounter end={317} suffix="곳" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-apple-primary" />
                <span className="text-apple-caption-strong text-apple-ink-muted-80 tracking-[0.1em]">기업 고객사</span>
              </div>
              <AnimatedCounter end={29} suffix="개사" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-apple-surface-tile-1 rounded-apple-lg p-6 flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-apple-primary-on-dark" />
          </div>
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-2 leading-snug">대통령 표창 및<br/>사회적 가치 우수기업</h4>
            <p className="text-apple-body-muted text-[13px] leading-relaxed">사회적 가치와 일자리 창출 성과를 공식적으로 인정받았습니다.</p>
          </div>
        </div>
        
        <div className="bg-apple-surface-tile-2 rounded-apple-lg p-6 flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6 text-apple-primary-on-dark" />
          </div>
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-2 leading-snug">삼성바이오로직스<br/>협력사 평가 우수</h4>
            <p className="text-apple-body-muted text-[13px] leading-relaxed">작업 품질, 사내 안전, GMP Compliance 부문 우수 평가.</p>
          </div>
        </div>

        <div className="bg-apple-surface-tile-3 rounded-apple-lg p-6 flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-apple-primary-on-dark" />
          </div>
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-2 leading-snug">ISO 9001 / 45001<br/>인증 획득</h4>
            <p className="text-apple-body-muted text-[13px] leading-relaxed">품질과 안전보건 관리 체계를 국제 기준에 맞춰 운영합니다.</p>
          </div>
        </div>

        <div className="bg-apple-surface-tile-1 rounded-apple-lg p-6 flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-apple-primary-on-dark" />
          </div>
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-2 leading-snug">전국 317개 현장<br/>운영 경험</h4>
            <p className="text-apple-body-muted text-[13px] leading-relaxed">다양한 시설 유형에서 축적된 현장 대응 경험으로 안정적 운영 제공.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
