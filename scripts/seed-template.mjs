import pg from 'pg';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

const { Client } = pg;
const dbUrl = process.env.POSTGRES_URL;

if (!dbUrl) {
  console.error('❌ POSTGRES_URL is not set in .env file');
  process.exit(1);
}

const client = new Client({
  connectionString: dbUrl.includes('sslmode=') ? dbUrl : `${dbUrl}?sslmode=no-verify`,
  ssl: { rejectUnauthorized: false }
});

function genId() { return crypto.randomUUID().substring(0, 8); }

async function run() {
  console.log('🌱 Starting database seeding for new template...');
  await client.connect();

  try {
    // 1. Homepage Highlights
    console.log('Seeding Homepage...');
    await client.query('DELETE FROM homepage_highlights WHERE _parent_id = 1');
    const highlights = [
      { value: 10, suffix: '+', title: '업력', description: '축적된 전문 노하우' },
      { value: 100, suffix: '%', title: '고객 만족', description: '완벽한 서비스 품질' },
      { value: 50, suffix: '+', title: '파트너사', description: '함께 성장하는 기업' }
    ];
    for (let i = 0; i < highlights.length; i++) {
      await client.query(
        'INSERT INTO homepage_highlights (_order, _parent_id, id, value, suffix, title, description) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [i + 1, 1, genId(), highlights[i].value, highlights[i].suffix, highlights[i].title, highlights[i].description]
      );
    }

    // 2. Homepage Core Values
    await client.query('DELETE FROM homepage_core_values WHERE _parent_id = 1');
    const coreValues = [
      { icon: 'Safety', title: '핵심가치 1', description: '첫 번째 핵심가치 설명입니다.' },
      { icon: 'Coexistence', title: '핵심가치 2', description: '두 번째 핵심가치 설명입니다.' },
      { icon: 'Innovation', title: '핵심가치 3', description: '세 번째 핵심가치 설명입니다.' }
    ];
    for (let i = 0; i < coreValues.length; i++) {
      await client.query(
        'INSERT INTO homepage_core_values (_order, _parent_id, id, icon, title, description) VALUES ($1, $2, $3, $4, $5, $6)',
        [i + 1, 1, genId(), coreValues[i].icon, coreValues[i].title, coreValues[i].description]
      );
    }

    // 3. Homepage Services
    await client.query('DELETE FROM homepage_services WHERE _parent_id = 1');
    const services = [
      { icon: 'Security', title: '주요 서비스 1', description: '서비스에 대한 간략한 설명입니다.' },
      { icon: 'Maintenance', title: '주요 서비스 2', description: '서비스에 대한 간략한 설명입니다.' },
      { icon: 'Cleaning', title: '주요 서비스 3', description: '서비스에 대한 간략한 설명입니다.' }
    ];
    for (let i = 0; i < services.length; i++) {
      await client.query(
        'INSERT INTO homepage_services (_order, _parent_id, id, icon, title, description) VALUES ($1, $2, $3, $4, $5, $6)',
        [i + 1, 1, genId(), services[i].icon, services[i].title, services[i].description]
      );
    }

    // Update basic homepage text
    await client.query(`
      UPDATE homepage SET 
        hero_badge = 'New Template Project',
        hero_title = '비즈니스를 위한 최고의 선택',
        hero_subtitle = '기본 템플릿 서브타이틀입니다. 관리자 페이지에서 이 문구를 수정하세요.',
        core_values_title = '3대 핵심 가치',
        core_values_subtitle = '비전과 목표',
        partners_title = '함께하는 파트너스',
        partners_subtitle = 'Trust & Partners',
        services_title = '종합 솔루션',
        services_subtitle = 'Premium Services',
        pr_title = '새로운 소식',
        pr_description = '홍보 영상을 확인해 보세요.',
        pr_video_id = 'dQw4w9WgXcQ',
        process_title = '서비스 프로세스',
        process_subtitle = 'Service Process',
        cta_title = '지금 바로 시작하세요',
        cta_subtitle = '언제든 친절하게 상담해 드립니다.',
        cta_phone = '1588-0000'
      WHERE id = 1
    `);

    console.log('✅ Seeding completed successfully!');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    await client.end();
  }
}

run();
