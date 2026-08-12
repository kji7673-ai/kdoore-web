import React from 'react';
import Link from 'next/link';
import { Shield, Clock, Medal, Users, Building, CheckCircle2, AlertTriangle, UserCheck, ArrowRight } from 'lucide-react';

export default function PromotionalFeatures() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-apple-primary" />,
      title: "10분 Rule 신속 대응",
      desc: "현장 이슈 발생 시 빠르게 초기 대응합니다"
    },
    {
      icon: <Shield className="w-8 h-8 text-apple-primary" />,
      title: "ISO 인증 품질관리",
      desc: "국제 기준 기반으로 운영 품질을 유지합니다"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-apple-primary" />,
      title: "Daily TBM 운영",
      desc: "위험요소를 사전에 점검하고 대응합니다"
    },
    {
      icon: <Building className="w-8 h-8 text-apple-primary" />,
      title: "맞춤형 현장 운영 경험",
      desc: "공공기관과 기업시설에 맞는 운영 전략을 제안합니다"
    }
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-apple-display-lg text-apple-ink mb-4">왜 케이두레인가</h2>
        <p className="text-apple-lead text-apple-ink-muted-80 max-w-2xl mx-auto">
          현장 대응력과 품질관리 체계로 차이를 만듭니다
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {features.map((feat, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-xl rounded-apple-lg shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-apple-hairline p-8 transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-apple-primary/10 flex items-center justify-center mb-6">
              {feat.icon}
            </div>
            <h3 className="text-lg font-bold text-apple-ink mb-3 tracking-tight">{feat.title}</h3>
            <p className="text-[14px] text-apple-ink-muted-80 leading-relaxed">
              {feat.desc}
            </p>
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
