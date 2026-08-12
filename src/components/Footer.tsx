"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer style={{ backgroundColor: "#f5f5f7", borderTop: "1px solid #e0e0e0" }}>
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        {/* Main footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Brand column */}
          <div>
            <h2
              style={{
                fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif",
                fontSize: "17px",
                fontWeight: 600,
                color: "#1d1d1f",
                marginBottom: "8px",
                letterSpacing: "-0.01em",
              }}
            >
              주식회사 케이두레
            </h2>
            <p style={{ fontSize: "12px", color: "#1d1d1f", fontWeight: 500, marginBottom: "12px" }}>
              공공기관·학교·기업시설의 운영 안정성을 높이는 종합 시설관리 전문기업
            </p>
            <p style={{ fontSize: "12px", color: "#6e6e73", lineHeight: 1.6, marginBottom: "8px" }}>
              서울특별시 강서구 강서로 468<br />7층 701호 (등촌동)
            </p>
            <p style={{ fontSize: "12px", color: "#6e6e73", lineHeight: 1.6 }}>
              AM 09:00 ~ PM 18:00<br />(토·공휴일 휴무)
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#1d1d1f",
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              연락처
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "6px" }}>
                <a href="tel:02-2668-0311" className="link-blue" style={{ fontSize: "12px" }}>
                  📞 02-2668-0311
                </a>
              </li>
              <li style={{ marginBottom: "6px" }}>
                <span style={{ fontSize: "12px", color: "#6e6e73" }}>팩스: 02-3661-0311</span>
              </li>
              <li>
                <a href="mailto:kedure@hanmail.net" className="link-blue" style={{ fontSize: "12px" }}>
                  ✉️ kedure@hanmail.net
                </a>
              </li>
            </ul>
          </div>

          {/* Links column */}
          <div>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#1d1d1f",
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              바로가기
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/about", label: "회사 소개" },
                { href: "/services", label: "서비스 안내" },
                { href: "/about#history", label: "운영 사례" },
                { href: "/about#contact", label: "상담 문의" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: "6px" }}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="link-blue"
                    style={{ fontSize: "12px" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info column */}
          <div>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#1d1d1f",
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              사업자 정보
            </h3>
            <p style={{ fontSize: "12px", color: "#6e6e73", lineHeight: 1.8 }}>
              사업자등록번호: 107-88-37994<br />
              대표이사: 임준길
            </p>
            <button
              onClick={() =>
                window.open(
                  "http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=107-88-37994",
                  "onpopup",
                  "width=750, height=700, scrollbars=yes"
                )
              }
              className="link-blue"
              style={{
                fontSize: "12px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                marginTop: "8px",
              }}
            >
              사업자정보 확인 →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #e0e0e0",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#6e6e73" }}>
            Copyright © {new Date().getFullYear()} 주식회사 케이두레. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#6e6e73" }}>이메일무단수집거부</span>
            <button
              onClick={() => router.push("/admin")}
              title="Admin Portal"
              aria-label="Open admin portal"
              style={{ background: "none", border: "none", cursor: "pointer", color: "#c6c6cc", padding: "2px" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }} aria-hidden="true">
                key
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
