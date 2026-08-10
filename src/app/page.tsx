"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  { title: "경비/보안관리", img: "/images/legacy/1626229925.jpg", icon: "🛡️" },
  { title: "청소미화", img: "/images/legacy/1626229930.jpg", icon: "✨" },
  { title: "시설관리", img: "/images/legacy/1626229933.jpg", icon: "🔧" },
  { title: "공동주택관리", img: "/images/legacy/1626229940.jpg", icon: "🏢" },
  { title: "CCTV 관제", img: "/images/legacy/1626229949.jpg", icon: "📹" },
  { title: "주차관리", img: "/images/legacy/1626229956.jpg", icon: "🚗" },
];

const stats = [
  { value: "20년+", label: "업계 경력", color: "#003087" },
  { value: "1,000+", label: "고객사", color: "#0055cc" },
  { value: "5,000+", label: "전문 인력", color: "#003087" },
  { value: "3개", label: "정부 인증", color: "#0055cc" },
];

const certBadges = [
  { icon: "🏅", text: "사회적 기업 인증" },
  { icon: "♿", text: "장애인표준사업장" },
  { icon: "🏆", text: "일자리창출 대통령 표창" },
  { icon: "🎖️", text: "서울시교육청 우수업체" },
];

function NewsBoard() {
  const [news, setNews] = useState<{ title: string; date: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news?limit=4&sort=-date")
      .then((res) => res.json())
      .then((data) => {
        if (data?.docs?.length) setNews(data.docs);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const items =
    news.length > 0
      ? news
      : [
          { title: "2024 하반기 경비 서비스 강화 안내", date: "2024-09-01" },
          { title: "케이두레 사회적 기업 재인증 완료", date: "2024-07-15" },
          { title: "두레몰 온라인 쇼핑몰 정식 오픈", date: "2024-06-01" },
          { title: "일자리 창출 우수기업 표창 수상", date: "2024-03-20" },
        ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "18px" }}>📰</span>
          <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0d1117", margin: 0 }}>케이두레 뉴스</h3>
        </div>
        <Link href="/pr-center" style={{ fontSize: "13px", color: "#003087", textDecoration: "none", fontWeight: 600 }}>
          더보기 →
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {loading ? (
          <p style={{ fontSize: "14px", color: "#718096" }}>로딩 중...</p>
        ) : (
          items.map((item, i) => (
            <div key={i} className="card-news">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "14px", color: "#0d1117", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.title}
                </span>
                <span style={{ fontSize: "12px", color: "#718096", flexShrink: 0 }}>
                  {new Date(item.date).toLocaleDateString("ko-KR")}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function RecruitmentBoard() {
  const [items, setItems] = useState<{ title: string; date: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/recruitment?limit=4&sort=-date")
      .then((res) => res.json())
      .then((data) => {
        if (data?.docs?.length) setItems(data.docs);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const recruitItems =
    items.length > 0
      ? items
      : [
          { title: "서울 강서구 아파트 경비원 채용", date: "2024-09-10" },
          { title: "영등포 오피스빌딩 미화원 모집", date: "2024-09-05" },
          { title: "CCTV 관제 요원 정규직 채용", date: "2024-08-28" },
          { title: "시설관리 기술직 경력직 모집", date: "2024-08-20" },
        ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "18px" }}>💼</span>
          <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0d1117", margin: 0 }}>채용공고</h3>
        </div>
        <Link href="/inquiry" style={{ fontSize: "13px", color: "#003087", textDecoration: "none", fontWeight: 600 }}>
          더보기 →
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {loading ? (
          <p style={{ fontSize: "14px", color: "#718096" }}>로딩 중...</p>
        ) : (
          recruitItems.map((item, i) => (
            <div key={i} className="card-news" style={{ position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "14px", color: "#0d1117", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.title}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#0055cc",
                    background: "#e8f0ff",
                    padding: "2px 8px",
                    borderRadius: "100px",
                    flexShrink: 0,
                  }}
                >
                  접수중
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#f7f9fc" }}>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(150deg, #001a4d 0%, #003087 45%, #0055cc 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "100px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,144,226,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left: Text */}
            <div>
              <div
                className="fade-up"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "100px",
                  marginBottom: "28px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#4ade80",
                    animation: "pulse-dot 2s ease infinite",
                    display: "inline-block",
                  }}
                />
                <span style={{ fontSize: "13px", color: "#e0eaff", fontWeight: 600 }}>
                  빌딩종합관리 전문기업 · 사회적 기업 인증
                </span>
              </div>

              <h1 className="text-hero fade-up-delay-1" style={{ color: "#ffffff", marginBottom: "20px" }}>
                더 안전하게,<br />더 깨끗하게,<br />
                <span style={{ color: "#7ab4ff" }}>케이두레</span>가<br />함께합니다
              </h1>

              <p className="text-lead fade-up-delay-2" style={{ color: "#c5d8f5", marginBottom: "40px", maxWidth: "480px" }}>
                경비·미화·시설관리·공동주택관리까지<br />
                20년 경험의 빌딩토탈케어 전문 파트너
              </p>

              <div className="fade-up-delay-2" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link href="/services" className="btn-primary">
                  사업분야 살펴보기
                </Link>
                <a href="tel:02-2668-0311" className="btn-ghost-dark">
                  📞 상담 전화
                </a>
              </div>

              {/* Trust badges */}
              <div
                style={{
                  marginTop: "48px",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                {certBadges.map((badge) => (
                  <div
                    key={badge.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "100px",
                      fontSize: "12px",
                      color: "#c5d8f5",
                      fontWeight: 500,
                    }}
                  >
                    <span>{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Service Photo Grid */}
            <div className="hero-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {services.slice(0, 4).map((svc, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    aspectRatio: i === 0 ? "1/1.2" : "1/1",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    gridRow: i === 0 ? "span 2" : "span 1",
                  }}
                >
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,21,72,0.7) 0%, transparent 50%)",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "16px",
                    }}
                  >
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                      {svc.icon} {svc.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #d0dae8" }}>
        <div className="container-wide">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}
            className="stats-grid"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: "28px 24px",
                  textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid #d0dae8" : "none",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: 800,
                    color: stat.color,
                    letterSpacing: "-0.03em",
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ fontSize: "13px", color: "#718096", fontWeight: 500 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT INTRO ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div className="container-wide">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
            className="two-col-grid"
          >
            <div>
              <span className="section-badge">About Us</span>
              <h2 className="text-display" style={{ color: "#0d1117", marginBottom: "20px" }}>
                케이두레를<br />소개합니다
              </h2>
              <div className="divider" />
              <p className="text-body" style={{ color: "#4a5568", marginBottom: "20px" }}>
                케이두레는 사회적 기업이자 장애인표준사업장으로,
                서울시교육청 학교시설용역부터 관공서 및 일반 건물종합관리까지
                우수한 수행능력과 전문성을 겸비한 <strong style={{ color: "#003087" }}>건물종합관리 및 근로자파견 전문기업</strong>입니다.
              </p>
              <p className="text-body" style={{ color: "#4a5568", marginBottom: "32px" }}>
                도급 유형별 맞춤형 플랜으로 비용 절감과 노무관리의 편리성을 제공하며,
                장애인 의무고용 부담금 감면 혜택까지 드립니다.
              </p>
              <Link href="/about" className="btn-primary">
                회사 소개 더 보기
              </Link>
            </div>

            {/* Service Cards Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {[
                { icon: "🛡️", title: "경비/보안관리", desc: "24시간 철통 보안" },
                { icon: "✨", title: "청소미화", desc: "전문 미화 서비스" },
                { icon: "🔧", title: "시설관리", desc: "체계적 유지보수" },
                { icon: "🏢", title: "공동주택관리", desc: "통합 관리 솔루션" },
                { icon: "📹", title: "CCTV 관제", desc: "스마트 모니터링" },
                { icon: "🚗", title: "주차관리", desc: "효율적 주차 운영" },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "20px",
                    backgroundColor: "#f7f9fc",
                    borderRadius: "12px",
                    border: "1px solid #d0dae8",
                    transition: "background 0.2s ease, box-shadow 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#eef3fc";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,48,135,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#f7f9fc";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>{item.icon}</div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#0d1117", marginBottom: "4px" }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: "12px", color: "#718096" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWS + RECRUITMENT ────────────────────────────────── */}
      <section style={{ backgroundColor: "#f7f9fc", padding: "80px 24px", borderTop: "1px solid #d0dae8" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-badge">새소식</span>
            <h2 className="text-display" style={{ color: "#0d1117" }}>
              공지 및 채용
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
            className="two-col-grid"
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid #d0dae8",
                padding: "28px",
              }}
            >
              <NewsBoard />
            </div>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid #d0dae8",
                padding: "28px",
              }}
            >
              <RecruitmentBoard />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GALLERY ──────────────────────────────────── */}
      <section style={{ backgroundColor: "#001a4d", padding: "80px 24px" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-badge-dark">Services</span>
            <h2 className="text-display" style={{ color: "#f0f4ff" }}>
              전문 서비스 분야
            </h2>
            <p className="text-lead" style={{ color: "#a0b8e0", marginTop: "12px" }}>
              하나의 파트너로, 모든 건물 관리를 맡기세요
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
            className="services-gallery-grid"
          >
            {services.map((svc, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  cursor: "pointer",
                }}
                className="gallery-item"
              >
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className="object-cover gallery-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,21,72,0.85) 0%, rgba(0,21,72,0.1) 60%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "20px",
                  }}
                >
                  <span style={{ fontSize: "22px", marginBottom: "6px" }}>{svc.icon}</span>
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                    {svc.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/services" className="btn-ghost-dark">
              전체 서비스 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #003087 0%, #0055cc 100%)",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <div className="container-default">
          <h2 className="text-display" style={{ color: "#ffffff", marginBottom: "16px" }}>
            지금 바로 상담 받아보세요
          </h2>
          <p className="text-lead" style={{ color: "#c5d8f5", marginBottom: "36px" }}>
            평일 09:00 ~ 18:00, 전문 상담원이 친절하게 안내해 드립니다
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
                fontWeight: 700,
                fontSize: "17px",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                transition: "transform 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "none")}
            >
              📞 02-2668-0311
            </a>
            <Link href="/contact" className="btn-ghost-dark">
              오시는 길 · 이메일 문의
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-grid { display: none !important; }
          .two-col-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-gallery-grid { grid-template-columns: 1fr !important; }
        }
        .gallery-item:hover .gallery-img { transform: scale(1.06); }
        .gallery-img { transition: transform 0.5s ease !important; }
      `}</style>
    </div>
  );
}
