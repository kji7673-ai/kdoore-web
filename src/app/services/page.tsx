import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "경비/보안관리",
      image: "/images/legacy/1626229925.jpg",
      description: "시설물의 안전과 보안을 책임지는 철저한 경비 서비스",
    },
    {
      title: "청소미화",
      image: "/images/legacy/1626229930.jpg",
      description: "청결하고 쾌적한 환경을 위한 전문 미화 서비스",
    },
    {
      title: "시설관리(유지보수)",
      image: "/images/legacy/1626229933.jpg",
      description: "건물의 가치를 높이는 체계적인 시설 유지보수",
    },
    {
      title: "공동주택관리",
      image: "/images/legacy/1626229940.jpg",
      description: "입주민의 편의와 주거 환경 향상을 위한 통합 관리",
    },
    {
      title: "CCTV 관제",
      image: "/images/legacy/1626229949.jpg",
      description: "24시간 빈틈없는 모니터링을 통한 철통 보안 관제",
    },
    {
      title: "주차관리",
      image: "/images/legacy/1626229956.jpg",
      description: "안전하고 효율적인 주차장 운영 및 관리",
    },
    {
      title: "콜센터",
      image: "/images/legacy/1626229964.jpg",
      description: "신속하고 친절한 고객 응대 및 민원 처리 서비스",
    },
    {
      title: "근로자파견",
      image: "/images/legacy/1626229968.jpg",
      description: "적재적소에 필요한 우수 인력을 신속하게 파견",
    },
    {
      title: "안내서비스",
      image: "/images/legacy/1626229972.jpg",
      description: "방문객을 위한 친절하고 전문적인 안내 데스크 운영",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-surface-variant/30">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            건물종합관리 및 인력파견 전문 업체
          </h1>
          <p className="font-body text-body text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            빌딩토탈케어서비스. 서울시교육청 학교시설용역부터 관공서 및 일반 건물종합관리까지, 
            우수한 수행능력과 책임 있는 관리로 성공적인 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display-md text-display-md text-on-surface tracking-tight">
              빌딩종합관리
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant"
              >
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-surface-variant">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-body-strong text-body-strong text-on-surface mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-body text-on-surface-variant/80 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Shopping Mall Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface-variant/20 border-t border-outline-variant">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-display-md text-display-md text-on-surface tracking-tight">
                온라인 쇼핑몰
              </h2>
              <p className="font-body text-body text-on-surface-variant leading-relaxed">
                케이두레에서는 오프라인 및 온라인몰을 함께 운영하고 있습니다.<br />
                온라인몰 이용 시 제품 이미지 및 상세 설명 등을 통해 쉽고 편리하게 주문하실 수 있습니다.
              </p>
              <div className="pt-4">
                <a 
                  href="http://www.dooremall.kr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-on-primary font-body-strong text-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  두레몰 방문하기
                </a>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface shadow-lg border border-outline-variant/50">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-surface text-center p-8">
                <span className="material-symbols-outlined text-6xl text-primary mb-4">shopping_cart</span>
                <h3 className="font-display-sm text-display-sm text-on-surface mb-2">DOOREMALL</h3>
                <p className="font-body text-body text-on-surface-variant">다양한 상품을 편리하게 만나보세요</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
