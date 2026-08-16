import pg from 'pg';
import crypto from 'crypto';
const { Client } = pg;
const client = new Client({
  connectionString: 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?sslmode=no-verify',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  await client.connect();
  
  // Seed Core Values
  const coreValues = [
    { icon: 'Safety', title: '안전제일', description: '체계적인 안전관리 시스템으로 사고 예방 및 근로자의 생명 보호를 최우선으로 합니다.' },
    { icon: 'Coexistence', title: '상생경영', description: '협력사와의 동반 성장을 추구하며, 공정한 거래와 상호 존중의 기업문화를 조성합니다.' },
    { icon: 'Innovation', title: '지속혁신', description: '끊임없는 기술 개발과 프로세스 개선으로 차별화된 고객 가치를 창출합니다.' }
  ];
  await client.query('DELETE FROM homepage_core_values WHERE _parent_id = 1');
  for (let i = 0; i < coreValues.length; i++) {
    const v = coreValues[i];
    await client.query(
      'INSERT INTO homepage_core_values (_order, _parent_id, id, icon, title, description) VALUES ($1, $2, $3, $4, $5, $6)',
      [i + 1, 1, crypto.randomUUID().substring(0, 8), v.icon, v.title, v.description]
    );
  }
  
  // Seed Services
  const services = [
    { icon: 'Security', title: '보안 및 경비 솔루션', description: '전문 교육을 이수한 보안 요원들이 24시간 철저한 감시와 순찰을 통해 고객의 자산을 안전하게 보호합니다.' },
    { icon: 'Maintenance', title: '시설물 유지관리', description: '첨단 장비와 전문 인력을 바탕으로 건축물의 수명을 연장하고 쾌적한 환경을 유지하는 체계적인 관리 시스템을 제공합니다.' },
    { icon: 'Cleaning', title: '위생 및 환경 미화', description: '친환경 세제와 전문 장비를 사용하여 업무 환경을 청결하게 유지하며 정기적인 방역으로 건강한 공간을 만듭니다.' }
  ];
  await client.query('DELETE FROM homepage_services WHERE _parent_id = 1');
  for (let i = 0; i < services.length; i++) {
    const s = services[i];
    await client.query(
      'INSERT INTO homepage_services (_order, _parent_id, id, icon, title, description) VALUES ($1, $2, $3, $4, $5, $6)',
      [i + 1, 1, crypto.randomUUID().substring(0, 8), s.icon, s.title, s.description]
    );
  }

  // Seed Process Steps
  const processSteps = [
    { stepNumber: '01', title: '컨설팅 요청', description: '고객의 니즈를 파악하고 현장 실사를 통해 맞춤형 관리 방안을 제안합니다.' },
    { stepNumber: '02', title: '계약 체결', description: '서비스 범위와 기준을 명확히 하고 상호 신뢰를 바탕으로 계약을 체결합니다.' },
    { stepNumber: '03', title: '서비스 투입', description: '전문 인력과 장비를 현장에 투입하여 본격적인 관리 서비스를 시작합니다.' },
    { stepNumber: '04', title: '사후 관리', description: '정기적인 점검과 고객 피드백을 통해 서비스 품질을 지속적으로 개선합니다.' }
  ];
  await client.query('DELETE FROM homepage_process_steps WHERE _parent_id = 1');
  for (let i = 0; i < processSteps.length; i++) {
    const p = processSteps[i];
    await client.query(
      'INSERT INTO homepage_process_steps (_order, _parent_id, id, step_number, title, description) VALUES ($1, $2, $3, $4, $5, $6)',
      [i + 1, 1, crypto.randomUUID().substring(0, 8), p.stepNumber, p.title, p.description]
    );
  }

  // Seed basic text fields in homepage
  await client.query(`
    UPDATE homepage SET 
      hero_badge = 'K-Doore Facility Management',
      hero_title = '고객 만족을 향한 끝없는 집념',
      hero_subtitle = '도약과 혁신을 넘어, K-Doore\n\n케이두레는 최고의 서비스와 완벽한 신뢰를 바탕으로,\n당신의 비즈니스가 더 높은 곳으로 도약할 수 있도록 최선을 다합니다.',
      core_values_title = 'K-Doore 3대 핵심 가치',
      core_values_subtitle = '안전, 상생, 혁신',
      partners_title = '함께 성장하는 파트너스',
      partners_subtitle = 'Trust & Partners',
      services_title = '종합 관리 솔루션',
      services_subtitle = 'Premium Services',
      pr_title = 'K-Doore 소식 및 홍보',
      pr_description = '케이두레의 새로운 소식과 언론보도, 기업 홍보 영상을 확인해 보세요.',
      pr_video_id = 'dQw4w9WgXcQ',
      process_title = '체계적인 서비스 프로세스',
      process_subtitle = 'Service Process',
      cta_title = '케이두레와 함께 빛나는 비즈니스를 시작하세요',
      cta_subtitle = '24시간 고객 센터 운영으로 언제든 빠르고 친절하게 상담해 드립니다.',
      cta_phone = '1588-0000'
    WHERE id = 1
  `);

  console.log("Successfully seeded more homepage data!");
  await client.end();
}
run().catch(console.error);
