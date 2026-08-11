import React from 'react';
import { Shield, Clock, Medal, Users, Building, CheckCircle2 } from 'lucide-react';

export default function PromotionalFeatures() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-apple-primary" />,
      title: "10분 Rule 준수",
      desc: "고객불만 및 일탈 발생 시 신속한 상황조치 및 자체 조치능력을 극대화하여 고객사의 리스크를 최소화합니다."
    },
    {
      icon: <Shield className="w-8 h-8 text-apple-primary" />,
      title: "ISO 품질경영 인증",
      desc: "ISO 9001/45001 인증 기반의 체계적인 품질관리 규정을 적용하여 세계적 수준의 시설관리를 제공합니다."
    },
    {
      icon: <Medal className="w-8 h-8 text-apple-primary" />,
      title: "제대군인 우수고용기업",
      desc: "탁월한 조직관리 및 위기 대응 능력을 겸비한 국가보훈부 연계 제대 군간부를 적극 채용하여 현장 안정성을 높입니다."
    },
    {
      icon: <Building className="w-8 h-8 text-apple-primary" />,
      title: "장애인 표준사업장",
      desc: "공공기관 및 기업의 장애인 의무고용 특례 적용(수의계약)이 가능한 표준사업장으로 상생과 가치를 실천합니다."
    }
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-apple-display-lg text-apple-ink mb-4">왜 케이두레를 선택하는가?</h2>
        <p className="text-apple-lead text-apple-ink-muted-80 max-w-2xl mx-auto">
          철저한 현장 관리 역량과 사회적 가치 실현을 통해 글로벌 기업이 신뢰하는 완벽한 파트너십을 구축합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feat, idx) => (
          <div key={idx} className="bg-white rounded-apple-lg shadow-sm border border-apple-hairline p-8 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-apple-canvas-parchment flex items-center justify-center mb-6">
              {feat.icon}
            </div>
            <h3 className="text-xl font-semibold text-apple-ink mb-3">{feat.title}</h3>
            <p className="text-apple-body text-apple-ink-muted-80 leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* TBM Info */}
      <div className="mt-12 bg-apple-surface-tile-1 rounded-apple-lg p-10 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <CheckCircle2 className="w-48 h-48" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-2xl font-bold mb-4">Daily TBM (Tool Box Meetings) 정례화</h3>
          <p className="text-lg text-apple-body-muted mb-6">
            매일 현장관리팀의 TBM 및 본사 담당 부장급 야간조 합동근무를 통해 잠재적 위험 요소를 사전에 차단하고 빈틈없는 무사고 현장을 유지합니다.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-apple-primary-on-dark" /> 위험성 사전평가 실시</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-apple-primary-on-dark" /> 상시 현장관리팀 기동화 운용</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-apple-primary-on-dark" /> 본사 ↔ 현장 간 실시간 Network 구성</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
