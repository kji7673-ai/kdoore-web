import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: '홍보센터 | K-Doore',
};

// Extracted from the static backup PR gallery images
const galleryImages = [
  '/images/prcenter/gallery_1626228315.jpg',
  '/images/prcenter/gallery_1626228350.jpg',
  '/images/prcenter/gallery_1626228355.jpg',
  '/images/prcenter/gallery_1626228361.jpg',
  '/images/prcenter/gallery_1626228413.jpg',
  '/images/prcenter/gallery_1626228418.jpg',
  '/images/prcenter/gallery_1626228423.jpg',
  '/images/prcenter/gallery_1626228429.jpg',
  '/images/prcenter/gallery_1626228436.jpg',
];

export default function PRCenterPage() {
  return (
    <div className="bg-canvas text-ink min-h-screen">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container-wide">
          <h1 className={styles.heroTitle}>
            홍보센터
          </h1>
          <p className={styles.heroSubtitle}>
            케이두레의 다양한 활동과 현장을 사진으로 확인하세요.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`${styles.gallerySection} bg-canvas-parchment`}>
        <div className="container-wide">
          <div className={styles.galleryGrid}>
            {galleryImages.map((src, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image 
                  src={src} 
                  alt={`PR Center Gallery Image ${index + 1}`}
                  fill
                  className={`${styles.galleryImage} object-cover`}
                />
                <div className={styles.overlay}>
                  <p className={styles.overlayTitle}>현장 스케치 {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
