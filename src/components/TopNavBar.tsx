"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "사업분야" },
  { href: "/contact", label: "오시는 길" },
];

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen ? "nav-frosted-light" : "nav-frosted"
        }`}
        style={{ height: "44px" }}
      >
        <div
          className="flex justify-between items-center h-full"
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          {/* Brand */}
          <Link
            href="/"
            className="font-bold tracking-tight transition-colors"
            style={{
              fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif",
              fontSize: "17px",
              fontWeight: 600,
              color: scrolled || mobileMenuOpen ? "#1d1d1f" : "#ffffff",
              textDecoration: "none",
            }}
          >
            케이두레
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center" style={{ gap: "28px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-nav transition-opacity hover:opacity-60"
                style={{
                  color: scrolled ? "#1d1d1f" : "#f5f5f7",
                  textDecoration: "none",
                  fontSize: "12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center" style={{ gap: "12px" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 16px",
                backgroundColor: "#0066cc",
                color: "#ffffff",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0071e3")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0066cc")}
            >
              문의하기
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{ color: scrolled || mobileMenuOpen ? "#1d1d1f" : "#ffffff" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-16"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="flex flex-col" style={{ padding: "24px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  display: "block",
                  padding: "16px 0",
                  fontSize: "21px",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  textDecoration: "none",
                  borderBottom: "1px solid #f0f0f0",
                  fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: "32px" }}>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="btn-primary"
                style={{ width: "100%", textAlign: "center" }}
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
