const history = [
  {
    year: "2014",
    events: ["주식회사 케이두레 법인 설립"],
  },
  {
    year: "2017",
    events: ["사회적 기업 인증 취득", "장애인표준사업장 인증"],
  },
  {
    year: "2019",
    events: ["서울시교육청 학교시설용역 우수업체 선정"],
  },
  {
    year: "2020",
    events: ["사회적가치 우수 기업 선정", "일자리창출 대통령 표창 수상"],
  },
  {
    year: "2022",
    events: ["제대군인 고용 우수기업 선정"],
  },
  {
    year: "2023",
    events: ["여성 중소기업 공공기관 우선구매 기업 지정", "빌딩토탈케어서비스 사업 확장"],
  },
  {
    year: "2024",
    events: ["온라인 쇼핑몰 두레몰(dooremall.kr) 오픈"],
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#ffffff", overflowX: "hidden" }}>
      {/* ─── HERO (Dark Tile) ──────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#000000",
          color: "#f5f5f7",
          padding: "140px 24px 80px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#2997ff",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          About
        </p>
        <h1 className="text-display fade-up" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
          더 멀리<br />함께 하는 기업
        </h1>
        <p
          className="text-lead fade-up-delay-1"
          style={{ color: "#a1a1a6", maxWidth: "560px", margin: "0 auto" }}
        >
          상생과 협력으로 새로운 가치를 창출하는 케이두레입니다.
        </p>
      </section>

      {/* ─── GREETING (White Tile) ───────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div className="container-default">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "64px",
              alignItems: "start",
            }}
            className="grid-cols-responsive"
          >
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#0066cc",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                CEO Message
              </p>
              <h2
                className="text-title"
                style={{ color: "#1d1d1f", marginBottom: "8px" }}
              >
                인사말
              </h2>
            </div>
            <div>
              <p
                className="text-body"
                style={{ color: "#1d1d1f", lineHeight: 1.8, marginBottom: "20px", fontWeight: 500, fontSize: "19px" }}
              >
                "케이두레 홈페이지 방문을 환영합니다."
              </p>
              <p className="text-body" style={{ color: "#6e6e73", lineHeight: 1.8, marginBottom: "16px" }}>
                케이두레는 사회적 기업, 장애인표준사업장으로 정부인증 기업임과 동시에
                서울시교육청 학교시설용역, 관공서 및 일반 건물 종합관리 등
                우수한 수행능력과 책임 있는 관리, 전문성을 겸비한
                <strong style={{ color: "#1d1d1f" }}> "건물종합관리 및 근로자파견 전문기업"</strong>입니다.
              </p>
              <p className="text-body" style={{ color: "#6e6e73", lineHeight: 1.8, marginBottom: "16px" }}>
                저희 케이두레는 미래지향적인 <strong style={{ color: "#1d1d1f" }}>"빌딩케어토탈서비스"</strong>로
                경비, 미화, 시설, 공동주택관리, 근로자파견, 콜센터 등
                성공적인 서비스를 제공해 드릴 것을 약속드립니다.
              </p>
              <p className="text-body" style={{ color: "#6e6e73", lineHeight: 1.8 }}>
                도급 유형별 맞춤형 플랜으로 비용 절감은 물론 노무관리의 편리성을 제공하며,
                장애인표준사업장 연계고용으로 장애인 의무고용 부담금 감면 혜택도 함께 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HISTORY (Parchment Tile) ────────────────────────────── */}
      <section style={{ backgroundColor: "#f5f5f7", padding: "80px 24px" }}>
        <div className="container-default">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#0066cc",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              History
            </p>
            <h2 className="text-display" style={{ color: "#1d1d1f" }}>
              회사 연혁
            </h2>
          </div>

          <div
            style={{
              maxWidth: "640px",
              margin: "0 auto",
              position: "relative",
              paddingLeft: "32px",
              borderLeft: "2px solid #e0e0e0",
            }}
          >
            {history.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  marginBottom: "48px",
                  paddingBottom: i < history.length - 1 ? "0" : "0",
                }}
              >
                {/* dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-41px",
                    top: "4px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#0066cc",
                    border: "2px solid #ffffff",
                    boxShadow: "0 0 0 2px #0066cc",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif",
                    fontSize: "28px",
                    fontWeight: 600,
                    color: "#0066cc",
                    marginBottom: "8px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.year}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {item.events.map((event, ei) => (
                    <li
                      key={ei}
                      className="text-body"
                      style={{ color: "#1d1d1f", marginBottom: "4px" }}
                    >
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA (Dark Tile) ─────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#000000",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div className="container-default">
          <h2 className="text-display" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
            함께 성장할 파트너를<br />찾고 있습니다
          </h2>
          <p className="text-lead" style={{ color: "#a1a1a6", marginBottom: "40px" }}>
            케이두레와 함께 더 나은 환경을 만들어가세요.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:02-2668-0311" className="btn-primary">
              📞 02-2668-0311
            </a>
            <a
              href="mailto:kedure@hanmail.net"
              className="btn-ghost-dark"
            >
              이메일 문의
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .grid-cols-responsive {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}
