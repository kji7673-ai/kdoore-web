"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/prcenter",
  "/news",
  "/dooremall",
  "/inquiry",
  "/contact"
];

export default function SwipeNavigator() {
  const router = useRouter();
  const pathname = usePathname();
  
  // pathname의 최신 상태를 유지하기 위한 ref
  const pathnameRef = useRef(pathname);
  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  const [touchStart, setTouchStart] = useState<{ x: number, y: number } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) return;

    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.overflow-x-auto') || target.closest('.swiper-container') || target.closest('.no-swipe')) {
        return;
      }
      setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart) return;

      const touchEnd = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
      const deltaX = touchEnd.x - touchStart.x;
      const deltaY = touchEnd.y - touchStart.y;

      // 스와이프 조건: 좌우 이동이 100px 이상이고, 상하 이동이 40px 미만일 때만 (수직 스크롤 오작동 방지)
      if (Math.abs(deltaX) > 100 && Math.abs(deltaY) < 40) {
        const currentPath = pathnameRef.current;
        const currentIndex = ROUTES.indexOf(currentPath);
        if (currentIndex === -1) {
          setTouchStart(null);
          return;
        }

        if (deltaX > 0) {
          // Swipe Right (Go to Previous Page)
          if (currentIndex > 0) {
            router.push(ROUTES[currentIndex - 1]);
          }
        } else {
          // Swipe Left (Go to Next Page)
          if (currentIndex < ROUTES.length - 1) {
            router.push(ROUTES[currentIndex + 1]);
          }
        }
      }
      setTouchStart(null);
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStart, pathname, router]);

  return null; // This component has no UI
}
