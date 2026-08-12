import type { Metadata } from "next";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import SwipeNavigator from "@/components/SwipeNavigator";
import "./globals.css";

export const metadata: Metadata = {
  title: "케이두레 - 건물종합관리 전문기업",
  description:
    "케이두레는 경비·미화·시설관리·공동주택관리·CCTV 관제·근로자 파견까지 빌딩토탈케어서비스를 제공하는 사회적 기업입니다.",
  openGraph: {
    title: "케이두레 - 건물종합관리 전문기업",
    description: "상생과 협력으로 만드는 새로운 가치",
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <TopNavBar />
        <SwipeNavigator />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
