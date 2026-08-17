import type { Metadata } from "next";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import LivePreviewComponent from "@/components/LivePreviewComponent";
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

import Script from "next/script";

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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <LivePreviewComponent />
        <TopNavBar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
