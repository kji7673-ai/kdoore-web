import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "경비/보안관리", img: "/images/legacy/1626229925.jpg", icon: "🛡️", desc: "시설물 안전과 보안을 책임지는 24시간 전문 경비 서비스. 숙련된 경비원이 상주하여 불법 침입, 도난, 사고를 예방합니다." },
  { title: "청소미화", img: "/images/legacy/1626229930.jpg", icon: "✨", desc: "청결하고 쾌적한 환경을 위한 전문 미화 서비스. 정기 청소부터 특수 청소까지 체계적으로 운영합니다." },
  { title: "시설관리(유지보수)", img: "/images/legacy/1626229933.jpg", icon: "🔧", desc: "건물의 가치를 높이는 체계적인 시설 유지보수. 전기·설비·소방 전문 인력이 신속하게 대응합니다." },
  { title: "공동주택관리", img: "/images/legacy/1626229940.jpg", icon: "🏢", desc: "입주민의 편의와 주거 환경 향상을 위한 통합 관리. 아파트, 주상복합 등 다양한 형태의 공동주택을 담당합니다." },
  { title: "CCTV 관제", img: "/images/legacy/1626229949.jpg", icon: "📹", desc: "24시간 스마트 영상 모니터링 서비스. 실시간 감시와 즉각적인 경보 대응으로 안전을 지킵니다." },
  { title: "주차관리", img: "/images/legacy/1626229956.jpg", icon: "🚗", desc: "안전하고 효율적인 주차장 운영 및 관리. 입출차 통제부터 요금 관리까지 원스톱 서비스를 제공합니다." },
  { title: "콜센터", img: "/images/legacy/1626229964.jpg", icon: "📞", desc: "신속하고 친절한 고객 응대 및 민원 처리. 전문 상담원이 고객의 불편을 즉시 해결합니다." },
  { title: "근로자파견", img: "/images/legacy/1626229968.jpg", icon: "👥", desc: "적재적소에 필요한 우수 인력을 신속하게 파견. 다양한 직종의 검증된 인재를 보유하고 있습니다." },
  { title: "안내서비스", img: "/images/legacy/1626229972.jpg", icon: "🎯", desc: "방문객을 위한 전문적인 안내 데스크 운영. 친절한 안내원이 첫인상부터 다릅니다." },
];

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: "#f7f9fc" }}>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(150deg, #001a4d 0%, #003087 50%, #0055cc 100%)",
          padding: "120px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(74,144,226,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="section-badge-dark">Services</span>
          <h1 className="text-display fade-up" style={{ color: "#ffffff", marginBottom: "16px" }}>
            빌딩토탈케어서비스
          </h1>
          <p className="text-lead fade-up-delay-1" style={{ color: "#c5d8f5", maxWidth: "540px", margin: "0 auto" }}>
            경비·미화·시설관리부터 CCTV 관제, 근로자 파견까지<br />
            모든 건물 관리 솔루션을 하나로 제공합니다
          </p>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-badge">9가지 전문 서비스</span>
            <h2 className="text-display" style={{ color: "#0d1117" }}>
              전문 서비스 분야
            </h2>
            <div className="divider" style={{ margin: "12px auto 0" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="services-grid"
          >
            {services.map((svc, i) => (
              <div key={i} className="card">
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ transition: "transform 0.5s ease" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      fontSize: "28px",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
                    }}
                  >
                    {svc.icon}
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#003087",
                      marginBottom: "10px",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-caption" style={{ color: "#4a5568", lineHeight: 1.7 }}>
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOOREMALL ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#f7f9fc",
          padding: "80px 24px",
          borderTop: "1px solid #d0dae8",
        }}
      >
        <div className="container-wide">
          <div
            style={{
              background: "linear-gradient(135deg, #001a4d 0%, #003087 100%)",
              borderRadius: "24px",
              padding: "64px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
            className="dooremall-grid"
          >
            <div>
              <span className="section-badge-dark">Online Shop</span>
              <h2 className="text-display" style={{ color: "#ffffff", marginBottom: "16px" }}>
                온라인 쇼핑몰<br />두레몰
              </h2>
              <p className="text-lead" style={{ color: "#c5d8f5", marginBottom: "32px" }}>
                케이두레의 온라인 쇼핑몰에서 청소용품, 소모품 등
                다양한 제품을 편리하게 구매하세요.
              </p>
              <a
                href="http://www.dooremall.kr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  backgroundColor: "#ffffff",
                  color: "#003087",
                  fontWeight: 700,
                  fontSize: "15px",
                  borderRadius: "10px",
                  textDecoration: "none",
                }}
              >
                두레몰 방문하기 →
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "clamp(36px, 5vw, 60px)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                <span style={{ color: "#7ab4ff" }}>DOORE</span>
                <span style={{ color: "#ffffff" }}>MALL</span>
              </p>
              <p style={{ fontSize: "14px", color: "#a0b8e0", marginTop: "12px" }}>
                www.dooremall.kr
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#003087", padding: "60px 24px", textAlign: "center" }}>
        <div className="container-default">
          <h2 className="text-title" style={{ color: "#ffffff", marginBottom: "12px" }}>
            서비스 도입을 검토 중이신가요?
          </h2>
          <p className="text-body" style={{ color: "#c5d8f5", marginBottom: "28px" }}>
            맞춤형 제안서를 무료로 받아보세요
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:02-2668-0311" className="btn-primary" style={{ background: "#ffffff", color: "#003087" }}>
              📞 02-2668-0311
            </a>
            <Link href="/contact" className="btn-ghost-dark">이메일 문의</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .dooremall-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 580px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .dooremall-grid { padding: 36px 24px !important; }
        }
        .card:hover img { transform: scale(1.05); }
      `}</style>
    </div>
  );
}
