"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // 홈페이지 마운트 시 무조건 최상단으로 스크롤 이동
    if (typeof window !== "undefined") {
      // hash가 없을 때만 최상단으로 이동 (다른 페이지에서 #id 로 넘어올 때를 위해)
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  return null;
}
