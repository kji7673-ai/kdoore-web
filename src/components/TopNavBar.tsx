"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark") || 
                     localStorage.getItem("theme") === "dark";
      setIsDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-surface/90 dark:bg-surface-container-highest/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}>
        <div className="flex justify-between items-center max-w-container-max mx-auto px-6 md:px-margin-desktop h-20">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className={`font-headline-md text-headline-md font-bold tracking-tighter transition-colors ${
              scrolled || mobileMenuOpen ? "text-primary dark:text-inverse-primary" : "text-white drop-shadow-md"
            }`}
          >
            KDoore
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={`pb-1 font-title-lg text-title-lg transition-colors border-b-2 hover:border-primary ${
              scrolled 
                ? "text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary border-transparent" 
                : "text-white/80 hover:text-white border-transparent hover:border-white drop-shadow-sm"
            }`}>
              Home
            </Link>
            <Link href="/services" className={`pb-1 font-title-lg text-title-lg transition-colors border-b-2 border-transparent hover:border-primary ${
              scrolled 
                ? "text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary" 
                : "text-white/80 hover:text-white hover:border-white drop-shadow-sm"
            }`}>
              Services
            </Link>
            <Link href="/about" className={`pb-1 font-title-lg text-title-lg transition-colors border-b-2 border-transparent hover:border-primary ${
              scrolled 
                ? "text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary" 
                : "text-white/80 hover:text-white hover:border-white drop-shadow-sm"
            }`}>
              About
            </Link>
            <Link href="/contact" className={`pb-1 font-title-lg text-title-lg transition-colors border-b-2 border-transparent hover:border-primary ${
              scrolled 
                ? "text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary" 
                : "text-white/80 hover:text-white hover:border-white drop-shadow-sm"
            }`}>
              Contact
            </Link>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode} 
              aria-label="Toggle Dark Mode"
              className={`p-2 rounded-full transition-colors ${
                scrolled ? "text-on-surface-variant hover:bg-surface-variant" : "text-white hover:bg-white/20"
              }`}
            >
              <span className="material-symbols-outlined">
                {isDarkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </div>

          {/* Desktop Trailing Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`px-6 py-2 border font-label-md rounded transition-all hover:scale-105 ${
              scrolled 
                ? "border-secondary text-secondary hover:bg-secondary/10"
                : "border-white text-white hover:bg-white/20"
            }`}>
              Emergency
            </button>
            <button className={`px-6 py-2 font-label-md rounded transition-all shadow-sm hover:scale-105 ${
              scrolled 
                ? "bg-primary text-on-primary hover:bg-primary/90"
                : "bg-white text-primary hover:bg-white/90"
            }`}>
              Portal Access
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              aria-label="Toggle Dark Mode"
              className={`p-2 rounded-full transition-colors ${
                scrolled || mobileMenuOpen ? "text-on-surface-variant" : "text-white"
              }`}
            >
              <span className="material-symbols-outlined">
                {isDarkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className={`p-2 focus:outline-none transition-colors ${
                scrolled || mobileMenuOpen ? "text-on-surface-variant" : "text-white"
              }`}
            >
              <span className="material-symbols-outlined text-3xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface dark:bg-inverse-surface pt-24 px-6 flex flex-col md:hidden">
          <div className="flex flex-col space-y-6">
            <Link href="/" onClick={closeMenu} className="font-title-lg text-title-lg text-on-surface-variant dark:text-inverse-on-surface hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" onClick={closeMenu} className="font-title-lg text-title-lg text-on-surface-variant dark:text-inverse-on-surface hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" onClick={closeMenu} className="font-title-lg text-title-lg text-on-surface-variant dark:text-inverse-on-surface hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" onClick={closeMenu} className="font-title-lg text-title-lg text-on-surface-variant dark:text-inverse-on-surface hover:text-primary transition-colors">
              Contact
            </Link>
            
            <hr className="border-outline-variant my-4" />
            
            <button className="w-full px-6 py-3 border border-secondary text-secondary font-label-md rounded hover:bg-secondary/10 transition-colors">
              Emergency
            </button>
            <button className="w-full px-6 py-3 bg-primary text-on-primary font-label-md rounded hover:bg-primary/90 transition-colors shadow-sm">
              Portal Access
            </button>
          </div>
        </div>
      )}
    </>
  );
}
