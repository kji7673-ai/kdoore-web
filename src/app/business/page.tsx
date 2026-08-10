import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: '사업분야 | K-Doore',
};

const businessAreas = [
  {
    id: 1,
    title: '경비/보안관리',
    image: '/images/business/1626229925.jpg',
  },
  {
    id: 2,
    title: '청소미화',
    image: '/images/business/1626229930.jpg',
  },
  {
    id: 3,
    title: '시설관리(유지보수)',
    image: '/images/business/1626229933.jpg',
  },
  {
    id: 4,
    title: '공동주택관리',
    image: '/images/business/1626229940.jpg',
  },
  {
    id: 5,
    title: 'CCTV 관제',
    image: '/images/business/1626229949.jpg',
  },
  {
    id: 6,
    title: '주차관리',
    image: '/images/business/1626229956.jpg',
  },
  {
    id: 7,
    title: '콜센터',
    image: '/images/business/1626229964.jpg',
  },
  {
    id: 8,
    title: '근로자파견',
    image: '/images/business/1626229968.jpg',
  },
  {
    id: 9,
    title: '안내서비스',
    image: '/images/business/1626229972.jpg',
  },
];

export default function BusinessPage() {
  return (
    <div className="bg-canvas text-ink">
      {/* Hero Section */}
      <section className={`${styles.heroSection} bg-surface-tile-2 text-on-dark`}>
        <div className={styles.heroBackground}>
          <Image 
            src="/images/business/1626242353.jpg" 
            alt="Business Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            건물종합관리 및 인력파견
          </h1>
          <p className={`${styles.heroSubtitle} text-body-muted`}>
            전문적인 서비스로 건물의 가치를 높입니다
          </p>
        </div>
      </section>

      {/* Building Management Section */}
      <section className={`${styles.sectionPadding} bg-canvas-parchment`}>
        <div className="container-wide">
          <div className={styles.sectionHeader}>
            <h2 className="text-display-md mb-4">빌딩토탈케어서비스</h2>
            <p className="text-body-strong text-ink-muted-80">
              서울시교육청 학교시설용역, 관공서 및 일반 건물 등 다양한 시설의 환경을 쾌적하고 안전하게 유지합니다.
            </p>
          </div>

          <div className="grid-3">
            {businessAreas.map((area) => (
              <div key={area.id} className={`${styles.card} apple-shadow`}>
                <div className={styles.cardImageWrapper}>
                  <Image 
                    src={area.image} 
                    alt={area.title}
                    fill
                    className={`${styles.cardImage} object-cover`}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className="text-tagline text-ink text-center">{area.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Shopping Mall Section */}
      <section className={`${styles.shoppingMallSection} bg-canvas`}>
        <div className="container-wide">
          <h2 className="text-display-md mb-6">온라인 쇼핑몰 운영</h2>
          <p className="text-body-strong text-ink-muted-80">
            케이두레에서는 오프라인 및 온라인몰을 함께 운영하고 있습니다.<br />
            온라인몰 이용 시 제품 이미지 및 상세 설명 등을 통해 쉽고 편리하게 주문하실 수 있습니다.
          </p>
          
          <a 
            href="http://www.dooremall.kr" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.button}
          >
            두레몰 방문하기
          </a>
        </div>
      </section>
    </div>
  );
}
