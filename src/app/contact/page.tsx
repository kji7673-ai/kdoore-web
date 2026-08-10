export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-surface-variant/30">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            Contact Us
          </h1>
          <p className="font-body text-body text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            케이두레와 함께할 파트너를 기다립니다.<br />
            궁금하신 사항이나 서비스 문의를 남겨주시면 친절하게 안내해 드리겠습니다.
          </p>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-surface rounded-2xl p-8 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <h3 className="font-body-strong text-body-strong text-on-surface">전화 문의</h3>
                </div>
                <p className="font-display-sm text-display-sm text-on-surface-variant">02-2668-0311</p>
              </div>

              <div className="bg-surface rounded-2xl p-8 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <h3 className="font-body-strong text-body-strong text-on-surface">이메일 문의</h3>
                </div>
                <p className="font-body text-body text-on-surface-variant">kedure@hanmail.net</p>
              </div>

              <div className="bg-surface rounded-2xl p-8 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <h3 className="font-body-strong text-body-strong text-on-surface">오시는 길</h3>
                </div>
                <p className="font-body text-body text-on-surface-variant">
                  서울특별시 강서구 강서로 468<br />
                  7층 701호 (등촌동)
                </p>
              </div>
            </div>

            {/* Map Area */}
            <div className="lg:col-span-2">
              <div className="w-full h-full min-h-[400px] bg-surface-variant rounded-2xl overflow-hidden shadow-sm border border-outline-variant relative flex items-center justify-center">
                {/* Fallback for Map */}
                <div className="text-center p-8">
                  <span className="material-symbols-outlined text-6xl text-on-surface-variant/50 mb-4 block">map</span>
                  <p className="font-body text-body text-on-surface-variant mb-4">
                    카카오맵 또는 구글 지도 연동 영역입니다.<br />
                    (현재는 주소 기반으로 찾아오실 수 있습니다.)
                  </p>
                  <a 
                    href="https://map.kakao.com/link/search/서울특별시 강서구 강서로 468" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary text-on-primary font-body-strong text-sm transition-transform hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    <span>카카오맵에서 보기</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
