"use client";

import { useEffect, useState } from "react";
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
  
  const [touchStart, setTouchStart] = useState<{ x: number, y: number } | null>(null);

  useEffect(() => {
    // Only apply on mobile devices (simple heuristic)
    if (typeof window !== "undefined" && window.innerWidth > 768) return;

    const handleTouchStart = (e: TouchEvent) => {
      // Ignore swipes if interacting with horizontal scrollable elements
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

      // Ensure it's a horizontal swipe, not a vertical scroll
      if (Math.abs(deltaX) > 80 && Math.abs(deltaY) < 50) {
        const currentIndex = ROUTES.indexOf(pathname);
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
