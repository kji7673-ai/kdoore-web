import type { Metadata } from "next";
import { Hanken_Grotesk, Source_Serif_4 } from "next/font/google";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif-4",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "KDoore - Harmonious Facility Management",
  description: "KDoore는 단순한 시설 관리를 넘어 사람과 공간이 조화롭게 공존하는 지속 가능한 환경을 창조하는 사회적 기업입니다.",
  openGraph: {
    title: "KDoore - Harmonious Facility Management",
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
    <html lang="ko" className={`${hankenGrotesk.variable} ${sourceSerif4.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col">
        <TopNavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
