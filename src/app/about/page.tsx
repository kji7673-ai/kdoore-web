export default function AboutPage() {
  const history = [
    { year: "2020", events: ["사회적가치 우수 기업 선정", "일자리창출 대통령 표창 수상"] },
    { year: "2022", events: ["제대군인 고용 우수기업 선정"] },
    { year: "2023", events: ["여성 중소기업 공공기관 우선구매 기업 지정", "빌딩토탈케어서비스 사업 확장"] },
    { year: "2024", events: ["온라인 쇼핑몰 (두레몰) 오픈"] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-surface-variant/30">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            더 멀리 함께 하는 기업
          </h1>
          <p className="font-body text-body text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            고객만족을 위하고 새로운 도약을 준비하는 케이두레.<br />
            사회적 기업 및 장애인표준사업장으로서 상생과 협력으로 새로운 가치를 창출합니다.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display-md text-display-md text-on-surface tracking-tight">
              케이두레 소개
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert mx-auto font-body text-on-surface-variant leading-relaxed">
            <p className="text-center font-body-strong text-xl mb-8">
              "케이두레 홈페이지 방문을 환영합니다."
            </p>
            <p>
              케이두레는 사회적 기업, 장애인표준사업장으로 정부인증 기업임과 동시에 서울시교육청 학교시설용역, 
              관공서 및 일반 건물 종합관리 등 우수한 수행능력과 책임 있는 관리, 전문성을 겸비한 
              <strong> "건물종합관리 및 근로자파견 전문기업" </strong>입니다.
            </p>
            <p>
              저희 케이두레는 미래지향적인 <strong>"빌딩케어토탈서비스"</strong>로 
              경비, 미화, 시설, 공공주택관리, 근로자파견, 콜센터 등 
              성공적인 서비스를 제공해 드릴 것을 약속드립니다.
            </p>
            <p>
              도급 유형별 맞춤형 플랜으로 비용절감은 물론 노무관리의 편리성을 제공하며, 
              장애인표준사업장 연계고용으로 장애인 의무고용 부담금 감면 혜택도 함께 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface-variant/20 border-t border-outline-variant">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display-md text-display-md text-on-surface tracking-tight">
              회사 연혁
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {history.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 group">
                <div className="md:w-32 flex-shrink-0">
                  <h3 className="font-display-sm text-display-sm text-primary md:text-right group-hover:scale-105 transition-transform origin-right">
                    {item.year}
                  </h3>
                </div>
                <div className="relative pb-12 md:pb-0 md:border-l border-outline-variant md:pl-12 flex-1">
                  <div className="hidden md:block absolute w-4 h-4 rounded-full bg-surface border-2 border-primary -left-[9px] top-2 group-hover:bg-primary transition-colors"></div>
                  <ul className="space-y-4">
                    {item.events.map((event, eventIdx) => (
                      <li key={eventIdx} className="font-body text-body text-on-surface-variant">
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
