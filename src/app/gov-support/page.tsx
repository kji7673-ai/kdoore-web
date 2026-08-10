import React from 'react';
import styles from './page.module.css';

export const metadata = {
  title: '정부지원기업안내 | K-Doore',
};

export default function GovSupportPage() {
  return (
    <div className="bg-canvas-parchment text-ink min-h-screen">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container-wide">
          <h1 className={styles.heroTitle}>
            사회적기업 및 장애인표준사업장
          </h1>
          <p className={styles.heroSubtitle}>
            사회적 기업으로 공공기관 우선구매 대상이며,<br />
            기업들의 장애인 의무고용부담금을 해결해 주는 정부지원 기업입니다.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className="container-wide">
          <div className={styles.grid2}>
            
            {/* Social Enterprise */}
            <div className={styles.infoCard}>
              <h2 className={styles.cardTitle}>사회적 기업으로 공공기관 우선구매 기업</h2>
              <ul className={styles.cardList}>
                <li>관공서, 공기업 · 준정부기관에 건물종합관리 용역도급, 생산품 등 제공</li>
                <li>취약계층에게 일자리를 제공하여 사회적 목적을 추구</li>
              </ul>
            </div>

            {/* Disabled Standard Workplace */}
            <div className={styles.infoCard}>
              <h2 className={styles.cardTitle}>장애인표준사업장 연계고용</h2>
              <ul className={styles.cardList}>
                <li>계약은 1년 기준</li>
                <li>종류는 도급 (경비, 미화 등 용역), 생산품 (위생지, 피복류)</li>
                <li>감면액은 도급 매출액의 50%, 고용부담금 총액의 60%</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={`${styles.videoSection} bg-canvas`}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="text-center mb-8">
            <h2 className="text-display-md mb-4">홍보 영상</h2>
            <p className="text-body-strong text-ink-muted-80">케이두레의 비전과 가치를 영상으로 만나보세요.</p>
          </div>
          <div className={styles.videoContainer}>
            <iframe 
              src="https://www.youtube.com/embed/DKPkOXFlY10?rel=0&autoplay=0&controls=1&fs=1&loop=0&modestbranding=1" 
              allowFullScreen
              title="케이두레 홍보 영상"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
