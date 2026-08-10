import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "경비/보안관리",
    img: "/images/legacy/1626229925.jpg",
    desc: "시설물의 안전과 보안을 책임지는 24시간 철통 경비 서비스",
  },
  {
    title: "청소미화",
    img: "/images/legacy/1626229930.jpg",
    desc: "청결하고 쾌적한 환경을 위한 전문 미화 서비스",
  },
  {
    title: "시설관리(유지보수)",
    img: "/images/legacy/1626229933.jpg",
    desc: "건물의 가치를 높이는 체계적인 시설 유지보수",
  },
  {
    title: "공동주택관리",
    img: "/images/legacy/1626229940.jpg",
    desc: "입주민의 편의와 주거 환경 향상을 위한 통합 관리",
  },
  {
    title: "CCTV 관제",
    img: "/images/legacy/1626229949.jpg",
    desc: "24시간 빈틈없는 모니터링을 통한 철통 보안 관제",
  },
  {
    title: "주차관리",
    img: "/images/legacy/1626229956.jpg",
    desc: "안전하고 효율적인 주차장 운영 및 관리",
  },
  {
    title: "콜센터",
    img: "/images/legacy/1626229964.jpg",
    desc: "신속하고 친절한 고객 응대 및 민원 처리",
  },
  {
    title: "근로자파견",
    img: "/images/legacy/1626229968.jpg",
    desc: "적재적소에 필요한 우수 인력을 신속하게 파견",
  },
  {
    title: "안내서비스",
    img: "/images/legacy/1626229972.jpg",
    desc: "방문객을 위한 전문적인 안내 데스크 운영",
  },
];

export default function ServicesPage() {
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
          Services
        </p>
        <h1 className="text-display fade-up" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
          빌딩토탈케어서비스
        </h1>
        <p
          className="text-lead fade-up-delay-1"
          style={{ color: "#a1a1a6", maxWidth: "560px", margin: "0 auto 0" }}
        >
          경비·미화·시설관리부터 CCTV 관제, 근로자 파견까지<br />
          모든 건물 관리 솔루션을 하나로.
        </p>
      </section>

      {/* ─── SERVICES GRID (White Tile) ──────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div className="container-wide">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {services.map((svc, i) => (
              <div key={i} className="card-service">
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ transition: "transform 0.6s ease" }}
                  />
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <h2
                    style={{
                      fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif",
                      fontSize: "19px",
                      fontWeight: 600,
                      color: "#1d1d1f",
                      marginBottom: "10px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {svc.title}
                  </h2>
                  <p className="text-caption" style={{ color: "#6e6e73", lineHeight: 1.6 }}>
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOOREMALL SECTION (Parchment Tile) ──────────────────── */}
      <section style={{ backgroundColor: "#f5f5f7", padding: "80px 24px" }}>
        <div className="container-default">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
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
                  marginBottom: "16px",
                }}
              >
                Online Shopping
              </p>
              <h2 className="text-display" style={{ color: "#1d1d1f", marginBottom: "20px" }}>
                두레몰
              </h2>
              <p className="text-body" style={{ color: "#6e6e73", lineHeight: 1.7, marginBottom: "32px" }}>
                케이두레의 온라인 쇼핑몰 두레몰에서 다양한 제품을
                편리하게 만나보세요. 상품 이미지와 상세 설명으로
                쉽고 편리하게 주문하실 수 있습니다.
              </p>
              <a
                href="http://www.dooremall.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                두레몰 방문하기 →
              </a>
            </div>

            {/* Visual card */}
            <div
              style={{
                backgroundColor: "#1d1d1f",
                borderRadius: "18px",
                aspectRatio: "4/3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "40px",
                boxShadow: "rgba(0,0,0,0.22) 3px 5px 30px 0",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif",
                  fontWeight: 700,
                  color: "#2997ff",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                DOORE<span style={{ color: "#f5f5f7" }}>MALL</span>
              </p>
              <p style={{ fontSize: "14px", color: "#a1a1a6" }}>
                www.dooremall.kr
              </p>
            </div>
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
            서비스 문의
          </h2>
          <p className="text-lead" style={{ color: "#a1a1a6", marginBottom: "40px" }}>
            맞춤형 솔루션이 필요하신가요?<br />지금 바로 전문 상담원에게 문의해 보세요.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:02-2668-0311" className="btn-primary">
              📞 02-2668-0311
            </a>
            <Link href="/contact" className="btn-ghost-dark">
              오시는 길
            </Link>
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
        .card-service:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
