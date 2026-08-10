"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

/* ── Data ───────────────────────────────────────────────────── */
const bannerSlides = [
  {
    img: "/images/legacy/1626227895.jpg",
    title: "더 멀리 함께 하는 기업",
    sub: "고객만족을 위하고 새로운 도약을 준비하는 케이두레",
    align: "center" as const,
  },
  {
    img: "/images/legacy/1626227899.jpg",
    title: "사회적 기업 및 장애인표준사업장으로 국가인증기업",
    sub: "사회적 기업으로 공공기관 우선구매 기업\n장애인표준사업장 연계고용으로 장애인 의무고용 부담금 감면",
    align: "left" as const,
  },
  {
    img: "/images/legacy/1626227902.jpg",
    title: "빌딩케어 토탈 서비스 사업",
    sub: "공동주택 · 관공서 · 학교 · 건물(시설)종합관리 효율적 운영\n경비 · 청소미화 · 시설관리 · CCTV관제 · 콜센터",
    align: "right" as const,
  },
  {
    img: "/images/legacy/1626227909.jpg",
    title: "맞춤형 플랜",
    sub: "도급 유형별 맞춤형 플랜으로\n비용절감은 물론 노무관리의 편리성을 제공하고 있습니다.",
    align: "left" as const,
  },
];

const services = [
  { img: "/images/legacy/1626229925.jpg", title: "경비/보안관리" },
  { img: "/images/legacy/1626229930.jpg", title: "청소미화" },
  { img: "/images/legacy/1626229933.jpg", title: "시설관리(유지보수)" },
  { img: "/images/legacy/1626229940.jpg", title: "공동주택관리" },
  { img: "/images/legacy/1626229949.jpg", title: "CCTV 관제" },
  { img: "/images/legacy/1626229956.jpg", title: "주차관리" },
  { img: "/images/legacy/1626229964.jpg", title: "콜센터" },
  { img: "/images/legacy/1626229968.jpg", title: "근로자파견" },
  { img: "/images/legacy/1626229972.jpg", title: "안내서비스" },
];

const partners = [
  "/images/legacy/gallery_1625722183.jpg",
  "/images/legacy/gallery_1625722188.jpg",
  "/images/legacy/gallery_1625722194.jpg",
  "/images/legacy/gallery_1625722199.jpg",
  "/images/legacy/gallery_1625722208.jpg",
  "/images/legacy/gallery_1625722213.jpg",
  "/images/legacy/gallery_1625722219.jpg",
  "/images/legacy/gallery_1625722227.jpg",
];

const quickLinks = [
  { icon: "🏛️", label: "회사연혁", href: "/about" },
  { icon: "🔧", label: "사업분야", href: "/services" },
  { icon: "🏅", label: "인증및허가", href: "/about" },
  { icon: "🛍️", label: "두레몰", href: "http://www.dooremall.kr" },
];

const recentNews = [
  { title: "2026년 안전보건관리계획 안내", date: "2026-01-02" },
  { title: "2026년 안전보건관리규정 안내", date: "2026-01-02" },
  { title: "2022년도 제대군인 고용 우수기업 선정", date: "2022-06-15" },
];

/* ── HeroBanner Component ───────────────────────────────────── */
function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % bannerSlides.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const slide = bannerSlides[current];

  const captionAlign = {
    left: { left: "8%", textAlign: "left" as const },
    right: { right: "8%", textAlign: "right" as const },
    center: { left: "50%", transform: "translateX(-50%)", textAlign: "center" as const },
  }[slide.align];

  return (
    <div style={{ position: "relative", width: "100%", height: "min(100vh, 700px)", overflow: "hidden" }}>
      {/* Images */}
      {bannerSlides.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          <Image src={s.img} alt={s.title} fill className="object-cover" priority={i === 0} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.42)" }} />
        </div>
      ))}

      {/* Caption */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          width: "80%",
          maxWidth: "700px",
          ...captionAlign,
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 52px)",
            fontWeight: 800,
            color: "#ffffff",
            textShadow: "0 2px 12px rgba(0,0,0,0.6)",
            marginBottom: "14px",
            lineHeight: 1.2,
            wordBreak: "keep-all",
          }}
        >
          {slide.title}
        </h1>
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 20px)",
            color: "#f0f4ff",
            textShadow: "0 1px 6px rgba(0,0,0,0.5)",
            whiteSpace: "pre-line",
            lineHeight: 1.7,
          }}
        >
          {slide.sub}
        </p>
      </div>

      {/* Indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 2,
        }}
      >
        {bannerSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); startTimer(); }}
            style={{
              width: i === current ? "28px" : "10px",
              height: "10px",
              borderRadius: "9999px",
              background: i === current ? "#ffffff" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Prev / Next */}
      {[
        { dir: "prev", onClick: () => { setCurrent((c) => (c - 1 + bannerSlides.length) % bannerSlides.length); startTimer(); }, label: "‹" },
        { dir: "next", onClick: () => { setCurrent((c) => (c + 1) % bannerSlides.length); startTimer(); }, label: "›" },
      ].map(({ dir, onClick, label }) => (
        <button
          key={dir}
          onClick={onClick}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            [dir === "prev" ? "left" : "right"]: "20px",
            zIndex: 2,
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.4)",
            color: "#fff",
            fontSize: "32px",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            cursor: "pointer",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

/* ── MarqueePartners Component ──────────────────────────────── */
function MarqueePartners() {
  const doubled = [...partners, ...partners];
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "32px 0", borderTop: "1px solid #e0e8f0", overflow: "hidden" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "#003087",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          협력 기관 · 파트너
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
          animation: "marquee 28s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            style={{
              width: "160px",
              height: "72px",
              position: "relative",
              flexShrink: 0,
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #e0e8f0",
              background: "#fff",
            }}
          >
            <Image src={src} alt={`협력업체 ${(i % partners.length) + 1}`} fill className="object-contain" style={{ padding: "8px" }} />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

/* ── Main Page ──────────────────────────────────────────────── */
export default function HomePage() {
  const [newsTab, setNewsTab] = useState<"news" | "recruit">("news");

  return (
    <div style={{ backgroundColor: "#f7f9fc" }}>
      {/* ① HERO BANNER */}
      <HeroBanner />

      {/* ② ABOUT US + Quick Links + Board */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 24px 0" }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}
            className="about-grid">
            {/* Left: About text */}
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#003087", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                About Us
              </p>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, color: "#0d1117", marginBottom: "4px", letterSpacing: "-0.02em" }}>
                케이두레 홈페이지 방문을 환영합니다.
              </h2>
              <div style={{ width: "48px", height: "4px", background: "linear-gradient(90deg,#003087,#0055cc)", borderRadius: "9999px", margin: "12px 0 20px" }} />
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.85, marginBottom: "20px" }}>
                케이두레는 사회적 기업, 장애인표준사업장으로 정부인증 기업임과 동시에 서울시교육청 학교시설용역,
                관공서 / 일반 건물 종합관리 등 우수한 수행능력 및 책임 있는 관리와 전문성을 겸비한{" "}
                <strong style={{ color: "#003087" }}>&ldquo;건물종합관리 및 근로자파견 전문기업&rdquo;</strong>입니다.
              </p>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.85 }}>
                저희 케이두레는 미래지향적인 <strong style={{ color: "#003087" }}>&ldquo;빌딩케어토탈서비스&rdquo;</strong>로
                경비·미화·시설·공공주택관리·근로자파견·콜센터 등 성공적인 서비스를 제공해 드릴 것을 약속드립니다.
              </p>

              {/* About slide image */}
              <div style={{ marginTop: "28px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,48,135,0.12)" }}>
                <Image
                  src="/images/legacy/1626227899.jpg"
                  alt="케이두레 소개"
                  width={560}
                  height={280}
                  className="object-cover w-full"
                  style={{ width: "100%", height: "240px", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right: Quick Links + News board + Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Quick menu bar */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                {quickLinks.map((item, i) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px 8px",
                      background: i % 2 === 0 ? "#003087" : "#0055cc",
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: 600,
                      gap: "8px",
                      transition: "opacity 0.15s ease",
                      borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  >
                    <span style={{ fontSize: "22px" }}>{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* News / Recruit tabs */}
              <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #d0dae8", overflow: "hidden" }}>
                <div style={{ display: "flex", borderBottom: "1px solid #d0dae8" }}>
                  {(["news", "recruit"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setNewsTab(tab)}
                      style={{
                        flex: 1,
                        padding: "14px 0",
                        fontSize: "14px",
                        fontWeight: 600,
                        background: newsTab === tab ? "#ffffff" : "#f7f9fc",
                        color: newsTab === tab ? "#003087" : "#718096",
                        border: "none",
                        borderBottom: newsTab === tab ? "2px solid #003087" : "2px solid transparent",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {tab === "news" ? "📰 케이두레 뉴스" : "💼 채용공고"}
                    </button>
                  ))}
                </div>
                <div style={{ padding: "8px 0" }}>
                  {newsTab === "news" ? (
                    recentNews.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "12px 16px",
                          textDecoration: "none",
                          transition: "background 0.15s ease",
                          borderBottom: i < recentNews.length - 1 ? "1px solid #f0f4fb" : "none",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#eef3fc")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                      >
                        <span style={{ fontSize: "14px", color: "#0d1117", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {item.title}
                        </span>
                        <span style={{ fontSize: "12px", color: "#718096", flexShrink: 0, marginLeft: "12px" }}>
                          {item.date}
                        </span>
                      </a>
                    ))
                  ) : (
                    <div style={{ padding: "32px 16px", textAlign: "center", color: "#718096", fontSize: "14px" }}>
                      현재 채용 중인 공고가 없습니다.
                    </div>
                  )}
                </div>
                <div style={{ padding: "10px 16px", borderTop: "1px solid #f0f4fb", textAlign: "right" }}>
                  <Link href="/pr-center" style={{ fontSize: "12px", color: "#003087", textDecoration: "none", fontWeight: 600 }}>
                    더보기 →
                  </Link>
                </div>
              </div>

              {/* Contact card */}
              <div
                style={{
                  background: "linear-gradient(135deg, #001a4d 0%, #003087 100%)",
                  borderRadius: "12px",
                  padding: "24px",
                  color: "#ffffff",
                }}
              >
                <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px", color: "#ffffff" }}>
                  Contact Us
                </h4>
                <p style={{ fontSize: "14px", color: "#c5d8f5", marginBottom: "6px" }}>
                  📞 02-2668-0311
                </p>
                <p style={{ fontSize: "14px", color: "#c5d8f5", marginBottom: "6px" }}>
                  ✉️ kedure@hanmail.net
                </p>
                <p style={{ fontSize: "13px", color: "#a0b8e0" }}>
                  서울특별시 강서구 강서로 468 7층 701호
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ FULL-WIDTH SECTION BANNER */}
      <section style={{ marginTop: "48px", position: "relative" }}>
        <Image
          src="/images/legacy/banner_1626227840.jpg"
          alt="빌딩종합관리 배너"
          width={1440}
          height={300}
          className="w-full object-cover"
          style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
        />
      </section>

      {/* ④ BUSINESS LINE */}
      <section style={{ backgroundColor: "#ffffff", padding: "64px 24px" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#003087", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
              Services
            </p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 800, color: "#0d1117", letterSpacing: "-0.02em" }}>
              빌딩토탈케어서비스
            </h2>
            <div style={{ width: "48px", height: "4px", background: "linear-gradient(90deg,#003087,#0055cc)", borderRadius: "9999px", margin: "12px auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
            {services.map((svc, i) => (
              <div key={i} className="card" style={{ cursor: "pointer" }}>
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ transition: "transform 0.5s ease" }}
                  />
                </div>
                <div style={{ padding: "16px 20px", borderTop: "3px solid #003087" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#003087", margin: 0 }}>
                    {svc.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/services" className="btn-primary">
              전체 서비스 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ⑤ GOVERNMENT SUPPORT + YouTube */}
      <section style={{ background: "linear-gradient(135deg, #f0f5ff 0%, #e8f0fe 100%)", padding: "64px 24px", borderTop: "1px solid #d0dae8" }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
            className="gov-grid">
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#003087", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                Government Support
              </p>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#0d1117", marginBottom: "8px", letterSpacing: "-0.02em" }}>
                사회적기업 및 장애인표준사업장
              </h2>
              <div style={{ width: "48px", height: "4px", background: "linear-gradient(90deg,#003087,#0055cc)", borderRadius: "9999px", margin: "12px 0 20px" }} />
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#003087", marginBottom: "16px" }}>
                사회적 기업으로 공공기관 우선구매 기업<br />
                기업들의 장애인 의무고용부담금을 해결해 주는 정부지원 기업
              </p>
              <div style={{ background: "#ffffff", borderRadius: "12px", padding: "24px", border: "1px solid #d0dae8" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "★ 사회적 기업으로 공공기관 우선구매 기업",
                    "- 관공서, 공기업 · 준정부기관에 건물종합관리 용역도급, 생산품 등 제공",
                    "- 취약계층에게 일자리를 제공하여 사회적 목적 추구",
                    "★ 장애인표준사업장 연계고용",
                    "- 계약은 1년 기준 / 도급(경비·미화 등), 생산품(위생지·피복류)",
                    "- 감면액: 도급 매출액의 50%, 고용부담금 총액의 60%",
                  ].map((line, i) => (
                    <li key={i} style={{ fontSize: "14px", color: line.startsWith("★") ? "#003087" : "#4a5568", fontWeight: line.startsWith("★") ? 700 : 400 }}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* YouTube embed */}
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,48,135,0.15)" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/DKPkOXFlY10?rel=0&controls=1&modestbranding=1"
                  title="케이두레 소개 영상"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ EMPLOYMENT BANNER */}
      <section style={{ position: "relative" }}>
        <Image
          src="/images/legacy/banner_1626229045.png"
          alt="채용정보 배너"
          width={1440}
          height={200}
          className="w-full object-cover"
          style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
        />
      </section>

      {/* ⑦ PARTNER LOGOS MARQUEE */}
      <MarqueePartners />

      {/* ⑧ CTA BANNER */}
      <section style={{ background: "linear-gradient(135deg, #003087 0%, #0055cc 100%)", padding: "56px 24px", textAlign: "center" }}>
        <div className="container-default">
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, color: "#ffffff", marginBottom: "12px", letterSpacing: "-0.02em" }}>
            지금 바로 상담 받아보세요
          </h2>
          <p style={{ fontSize: "16px", color: "#c5d8f5", marginBottom: "32px" }}>
            평일 AM 09:00 ~ PM 18:00, 전문 상담원이 친절하게 안내해 드립니다
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:02-2668-0311"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                background: "#ffffff",
                color: "#003087",
                fontWeight: 800,
                fontSize: "18px",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              }}
            >
              📞 02-2668-0311
            </a>
            <Link href="/contact" className="btn-ghost-dark" style={{ padding: "16px 28px", fontSize: "16px" }}>
              오시는 길
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .gov-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        .card:hover img { transform: scale(1.06); }
      `}</style>
    </div>
  );
}
