import React from 'react';
import Link from 'next/link';
import { Shield, Clock, Medal, Users, Building, CheckCircle2, AlertTriangle, UserCheck, ArrowRight } from 'lucide-react';

export default function PromotionalFeatures() {
  const features = [
    {
      colorName: "blue",
      icon: <Clock className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />,
      title: "10분 Rule 신속 대응",
      desc: "현장 이슈 발생 시 빠르게 초기 대응합니다"
    },
    {
      colorName: "emerald",
      icon: <Shield className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-500" />,
      title: "ISO 인증 품질관리",
      desc: "국제 기준 기반으로 운영 품질을 유지합니다"
    },
    {
      colorName: "rose",
      icon: <AlertTriangle className="w-8 h-8 text-rose-600 group-hover:text-white transition-colors duration-500" />,
      title: "Daily TBM 운영",
      desc: "위험요소를 사전에 점검하고 대응합니다"
    },
    {
      colorName: "amber",
      icon: <Building className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-500" />,
      title: "맞춤형 현장 운영 경험",
      desc: "공공기관과 기업시설에 맞는 운영 전략을 제안합니다"
    }
  ];

  // Helper to map colorName to actual Tailwind classes (since dynamic interpolation may fail in Purge/JIT)
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return "bg-blue-100 group-hover:bg-blue-500 group-hover:shadow-blue-500/30";
      case 'emerald': return "bg-emerald-100 group-hover:bg-emerald-500 group-hover:shadow-emerald-500/30";
      case 'rose': return "bg-rose-100 group-hover:bg-rose-500 group-hover:shadow-rose-500/30";
      case 'amber': return "bg-amber-100 group-hover:bg-amber-500 group-hover:shadow-amber-500/30";
      default: return "bg-gray-100 group-hover:bg-gray-500 group-hover:shadow-gray-500/30";
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-apple-display-lg text-apple-ink mb-4">왜 케이두레인가</h2>
        <p className="text-apple-lead text-apple-ink-muted-80 max-w-2xl mx-auto">
          현장 대응력과 품질관리 체계로 차이를 만듭니다
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feat, idx) => (
          <div key={idx} className="group relative bg-apple-canvas-parchment p-10 rounded-[24px] border border-apple-divider-soft overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,102,204,0.1)] hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-apple-canvas-parchment to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
              <div className={`shrink-0 w-16 h-16 rounded-[18px] flex items-center justify-center group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-500 ${getColorClasses(feat.colorName)}`}>
                {feat.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-apple-ink mb-2 tracking-tight group-hover:text-apple-primary transition-colors">{feat.title}</h3>
                <p className="text-[16px] text-apple-ink-muted-80 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/about" className="inline-flex bg-apple-primary text-white hover:bg-apple-primary-focus px-8 py-4 rounded-full text-[17px] font-medium transition-colors">
          핵심 경쟁력 보기
        </Link>
      </div>
    </div>
  );
}
