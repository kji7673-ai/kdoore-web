"use client";

const contactItems = [
  {
    icon: "📞",
    label: "대표전화",
    value: "02-2668-0311",
    href: "tel:02-2668-0311",
  },
  {
    icon: "📠",
    label: "팩스",
    value: "02-3661-0311",
    href: null,
  },
  {
    icon: "✉️",
    label: "이메일",
    value: "kedure@hanmail.net",
    href: "mailto:kedure@hanmail.net",
  },
  {
    icon: "⏰",
    label: "운영시간",
    value: "AM 09:00 ~ PM 18:00\n(토·공휴일 휴무)",
    href: null,
  },
];

export default function ContactPage() {
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
          Contact Us
        </p>
        <h1 className="text-display fade-up" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
          오시는 길
        </h1>
        <p
          className="text-lead fade-up-delay-1"
          style={{ color: "#a1a1a6", maxWidth: "480px", margin: "0 auto" }}
        >
          케이두레를 방문해 주시거나 전화·이메일로 편하게 문의해 주세요.
        </p>
      </section>

      {/* ─── CONTACT INFO (White Tile) ───────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div className="container-default">
          {/* Address hero */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "64px",
              padding: "56px 40px",
              backgroundColor: "#f5f5f7",
              borderRadius: "18px",
            }}
          >
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
              Address
            </p>
            <h2
              className="text-title"
              style={{ color: "#1d1d1f", marginBottom: "8px", fontSize: "28px" }}
            >
              서울특별시 강서구 강서로 468
            </h2>
            <p className="text-body" style={{ color: "#6e6e73", marginBottom: "24px" }}>
              7층 701호 (등촌동)
            </p>
            <a
              href="https://map.kakao.com/link/search/서울특별시 강서구 강서로 468"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              카카오맵에서 보기 →
            </a>
          </div>

          {/* Contact grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {contactItems.map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: "#f5f5f7",
                  borderRadius: "18px",
                  padding: "32px 28px",
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "rgba(0,0,0,0.10) 0px 8px 24px";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "16px" }}>{item.icon}</div>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#6e6e73",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="link-blue"
                    style={{
                      fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif",
                      fontSize: "19px",
                      fontWeight: 600,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    style={{
                      fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif",
                      fontSize: "19px",
                      fontWeight: 600,
                      color: "#1d1d1f",
                      whiteSpace: "pre-line",
                      margin: 0,
                    }}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAP SECTION (Parchment Tile) ────────────────────────── */}
      <section style={{ backgroundColor: "#f5f5f7", padding: "80px 24px" }}>
        <div className="container-default">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="text-title" style={{ color: "#1d1d1f", marginBottom: "8px" }}>
              지도
            </h2>
            <p className="text-body" style={{ color: "#6e6e73" }}>
              지하철 9호선 등촌역 3번 출구에서 도보 5분
            </p>
          </div>
          <div
            style={{
              width: "100%",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "rgba(0,0,0,0.12) 0px 8px 32px",
              aspectRatio: "16/7",
              backgroundColor: "#e0e0e0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <iframe
              src="https://map.google.com/maps?q=서울특별시+강서구+강서로+468&output=embed&hl=ko&z=15"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="케이두레 위치"
            />
          </div>
        </div>
      </section>

      {/* ─── INQUIRY CTA (Dark Tile) ──────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#000000",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div className="container-default">
          <h2 className="text-display" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
            빠른 상담을<br />도와드립니다
          </h2>
          <p className="text-lead" style={{ color: "#a1a1a6", marginBottom: "40px" }}>
            평일 오전 9시 ~ 오후 6시 사이에 언제든지 연락 주세요.
          </p>
          <a href="tel:02-2668-0311" className="btn-primary">
            📞 02-2668-0311 전화하기
          </a>
        </div>
      </section>
    </div>
  );
}
