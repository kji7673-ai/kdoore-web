import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "경비/보안관리", img: "/images/legacy/1626229925.jpg" },
  { title: "청소미화", img: "/images/legacy/1626229930.jpg" },
  { title: "시설관리(유지보수)", img: "/images/legacy/1626229933.jpg" },
  { title: "공동주택관리", img: "/images/legacy/1626229940.jpg" },
  { title: "CCTV 관제", img: "/images/legacy/1626229949.jpg" },
  { title: "주차관리", img: "/images/legacy/1626229956.jpg" },
];

const stats = [
  { value: "20+", label: "년간 경력" },
  { value: "1,000+", label: "고객사" },
  { value: "5,000+", label: "전문 인력" },
  { value: "3", label: "정부 인증" },
];

const certifications = [
  "사회적 기업 인증",
  "장애인표준사업장 인증",
  "서울시교육청 우수 협력사",
  "일자리창출 대통령 표창",
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#ffffff", overflowX: "hidden" }}>
      {/* ─── HERO TILE (Dark) ────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#000000",
          color: "#f5f5f7",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,102,204,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <p
          className="fade-up"
          style={{
            fontSize: "17px",
            fontWeight: 600,
            color: "#2997ff",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "20px",
            fontFamily: "'SF Pro Text', system-ui, -apple-system, sans-serif",
          }}
        >
          K-Doore&nbsp;&nbsp;케이두레
        </p>
        <h1
          className="text-hero fade-up-delay-1"
          style={{ color: "#f5f5f7", marginBottom: "24px", maxWidth: "800px" }}
        >
          더 멀리,<br />함께 하는 기업
        </h1>
        <p
          className="text-lead fade-up-delay-2"
          style={{ color: "#a1a1a6", maxWidth: "560px", marginBottom: "48px" }}
        >
          빌딩종합관리 전문 기업 케이두레는 상생과 협력으로<br className="hidden md:block" />
          사람과 공간이 조화로운 지속 가능한 환경을 만들어갑니다.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/services" className="btn-primary">
            사업분야 보기
          </Link>
          <Link href="/contact" className="btn-ghost-dark">
            문의하기
          </Link>
        </div>

        {/* scroll cue */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            opacity: 0.4,
          }}
        >
          <div
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#f5f5f7",
              animation: "fadeUp 1.5s ease infinite",
            }}
          />
          <span style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#f5f5f7" }}>SCROLL</span>
        </div>
      </section>

      {/* ─── STATS TILE (White) ──────────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div className="container-default">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.value}>
                <p
                  className="text-display"
                  style={{ color: "#1d1d1f", marginBottom: "8px" }}
                >
                  {stat.value}
                </p>
                <p className="text-caption" style={{ color: "#6e6e73" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO TILE (Parchment) ──────────────────────────────── */}
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
                About Us
              </p>
              <h2 className="text-display" style={{ color: "#1d1d1f", marginBottom: "24px" }}>
                건물종합관리<br />전문기업
              </h2>
              <p className="text-body" style={{ color: "#6e6e73", marginBottom: "32px", lineHeight: 1.7 }}>
                케이두레는 사회적 기업이자 장애인표준사업장으로,
                경비·미화·시설·공동주택 관리부터 근로자 파견, 콜센터까지
                "빌딩케어토탈서비스"를 제공하는 전문 기업입니다.
              </p>
              <Link href="/about" className="link-blue" style={{ fontSize: "17px" }}>
                회사 소개 보기 →
              </Link>
            </div>
            <div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "20px 24px",
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      fontSize: "15px",
                      color: "#1d1d1f",
                      fontWeight: 500,
                      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    }}
                  >
                    <span style={{ color: "#0066cc", fontSize: "18px" }}>✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES TILE (Dark) ────────────────────────────────── */}
      <section style={{ backgroundColor: "#1d1d1f", padding: "80px 24px" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            <h2 className="text-display" style={{ color: "#f5f5f7" }}>
              빌딩종합관리 서비스
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "2px",
            }}
          >
            {services.map((svc) => (
              <div
                key={svc.title}
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                className="service-tile-item"
              >
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ transition: "transform 0.6s ease" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "24px",
                  }}
                >
                  <p
                    className="text-tagline"
                    style={{ color: "#ffffff", margin: 0 }}
                  >
                    {svc.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/services" className="btn-primary">
              전체 서비스 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA TILE (White) ────────────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div className="container-default" style={{ textAlign: "center" }}>
          <h2 className="text-display" style={{ color: "#1d1d1f", marginBottom: "20px" }}>
            지금 바로 문의하세요
          </h2>
          <p
            className="text-lead"
            style={{ color: "#6e6e73", marginBottom: "40px", maxWidth: "480px", margin: "0 auto 40px" }}
          >
            경험 많은 전문 상담원이 고객의 상황에 맞는 최적의 솔루션을 제안해 드립니다.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:02-2668-0311" className="btn-primary">
              📞 02-2668-0311
            </a>
            <Link href="/contact" className="btn-secondary">
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
        .service-tile-item:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
