"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "사업분야" },
  { href: "/prcenter", label: "홍보센터" },
  { href: "/inquiry", label: "고객문의" },
  { href: "/contact", label: "오시는 길" },
];

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);
  const isLight = scrolled || mobileMenuOpen;

  return (
    <>
      <nav
        className={isLight ? "nav-frosted-light" : "nav-frosted"}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 50,
          transition: "all 0.3s ease",
          height: "60px",
        }}
      >
        <div
          className="container-wide"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Brand */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <Logo isLight={isLight} className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center" style={{ gap: "8px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-nav"
                style={{
                  color: isLight ? "#4a5568" : "rgba(240,244,255,0.8)",
                  textDecoration: "none",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  transition: "background 0.15s ease, color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = isLight
                    ? "#eef3fc"
                    : "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = isLight ? "#003087" : "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = isLight
                    ? "#4a5568"
                    : "rgba(240,244,255,0.8)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center" style={{ gap: "10px" }}>
            <a
              href="tel:02-2668-0311"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "8px",
                border: isLight ? "1.5px solid #003087" : "1.5px solid rgba(255,255,255,0.3)",
                color: isLight ? "#003087" : "#f0f4ff",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              📞 02-2668-0311
            </a>
            <Link href="/contact" className="btn-primary" style={{ padding: "8px 20px", fontSize: "13px" }}>
              문의하기
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{
              color: isLight ? "#003087" : "#f0f4ff",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            backgroundColor: "#ffffff",
            paddingTop: "70px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "16px 24px", flex: 1 }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "18px 4px",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#0d1117",
                  textDecoration: "none",
                  borderBottom: "1px solid #eef3fc",
                }}
              >
                {link.label}
                <span style={{ color: "#003087", fontSize: "18px" }}>›</span>
              </Link>
            ))}
            <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="tel:02-2668-0311" className="btn-secondary" style={{ textAlign: "center" }}>
                📞 02-2668-0311 전화하기
              </a>
              <Link href="/contact" onClick={closeMenu} className="btn-primary" style={{ textAlign: "center" }}>
                온라인 문의하기
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
