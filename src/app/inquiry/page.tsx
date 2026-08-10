import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: '고객문의 | K-Doore',
};

export default function InquiryPage() {
  return (
    <div className="bg-canvas-parchment text-ink min-h-screen">
      {/* Hero Section */}
      <section className={`${styles.heroSection} bg-surface-black text-on-dark`}>
        <div className={styles.heroBackground}>
          <Image 
            src="/images/inquiry/banner_1626228611.jpg" 
            alt="Inquiry Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            고객지원 및 문의
          </h1>
          <p className={`${styles.heroSubtitle} text-body-muted`}>
            궁금하신 점이나 문의사항을 남겨주시면 성심성의껏 답변해 드리겠습니다.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className="container-wide">
          <div className={styles.contactGrid}>
            
            {/* Contact Info */}
            <div className={`${styles.infoCard} apple-shadow`}>
              <h2 className={styles.infoTitle}>Contact Us</h2>
              
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Address</div>
                <div className={styles.infoValue}>
                  서울특별시 강서구 강서로 468<br />
                  7층 701호 (등촌동)
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Phone</div>
                <div className={styles.infoValue}>
                  02-2039-3353
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Fax</div>
                <div className={styles.infoValue}>
                  02-3665-2766
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Business Hours</div>
                <div className={styles.infoValue}>
                  평일 09:00 - 18:00<br />
                  (토/일요일 및 공휴일 휴무)
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className={`${styles.infoCard} apple-shadow`}>
              <h2 className={styles.infoTitle}>문의 남기기</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.infoLabel}>이름 / 회사명</label>
                  <input type="text" id="name" className={styles.input} placeholder="홍길동 / (주)회사명" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="contact" className={styles.infoLabel}>연락처 / 이메일</label>
                  <input type="text" id="contact" className={styles.input} placeholder="010-0000-0000 / email@example.com" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.infoLabel}>문의 제목</label>
                  <input type="text" id="subject" className={styles.input} placeholder="문의 제목을 입력해주세요" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.infoLabel}>문의 내용</label>
                  <textarea id="message" className={styles.textarea} placeholder="문의하실 내용을 상세히 적어주세요."></textarea>
                </div>
                
                <button type="button" className={styles.submitButton}>
                  문의 접수하기
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className="container-wide">
          <div className={`${styles.mapContainer} apple-shadow`}>
            {/* Google Maps Embed or Kakao Map Embed could go here. For now using a placeholder iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3161.7371587522513!2d126.83783931531235!3d37.58479797979435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c0f993d5be7%3A0x6b7db0bc9fc87747!2z7ISc7Jq47Yq567OE7IucIOqwmOyEnOq1rCDqsJXshJzroZwgNDY4!5e0!3m2!1sko!2skr!4v1627000000000!5m2!1sko!2skr" 
              className={styles.mapIframe}
              allowFullScreen={false} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
