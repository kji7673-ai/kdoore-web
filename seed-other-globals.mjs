import pg from 'pg';
import crypto from 'crypto';
const { Client } = pg;
const client = new Client({
  connectionString: 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?sslmode=no-verify',
  ssl: { rejectUnauthorized: false }
});

function genId() { return crypto.randomUUID().substring(0, 8); }

async function run() {
  await client.connect();

  // 1. ABOUT
  await client.query('DELETE FROM about_timeline WHERE _parent_id = 1');
  const timeline = [
    { year: '2023', title: '사회적 기업 인증', events: ['취약계층 고용 창출 기여', '장애인표준사업장 지정'] },
    { year: '2022', title: '사업 영역 확장', events: ['종합 시설 관리 서비스 론칭', '전국 주요 지점 설립'] },
    { year: '2021', title: '케이두레 설립', events: ['법인 설립 및 라이선스 취득'] }
  ];
  for (let i=0; i<timeline.length; i++) {
    const t = timeline[i];
    const tId = genId();
    await client.query('INSERT INTO about_timeline (_order, _parent_id, id, year, title) VALUES ($1, $2, $3, $4, $5)', [i+1, 1, tId, t.year, t.title]);
    for (let j=0; j<t.events.length; j++) {
      await client.query('INSERT INTO about_timeline_events (_order, _parent_id, id, event) VALUES ($1, $2, $3, $4)', [j+1, tId, genId(), t.events[j]]);
    }
  }

  // 2. SERVICES
  await client.query('DELETE FROM services_services_list WHERE _parent_id = 1');
  const servicesList = [
    { 
      title: '보안/경비 서비스', desc: '전문 보안 요원을 통한 철저한 안전 관리', details: '건물 및 시설물의 내/외부 안전을 책임지며, 돌발 상황에 신속히 대응할 수 있는 전문적인 훈련을 받은 보안 요원들이 24시간 철저히 관리합니다.', icon: 'Shield',
      scopes: [
        { title: '인력 경비', items: ['시설물 순찰 및 도난 방지', '방문객 출입 통제 및 안내'] },
        { title: '기계 경비 연동', items: ['CCTV 모니터링', '긴급 출동 서비스 연계'] }
      ]
    },
    { 
      title: '건물/시설 유지관리', desc: '건축물 수명 연장 및 쾌적한 환경 조성', details: '설비, 전기, 소방 시설 등 건물의 모든 시스템이 최적의 상태로 작동하도록 정기적으로 점검하고 보수합니다.', icon: 'Wrench',
      scopes: [
        { title: '설비 점검', items: ['전기/기계 설비 정기 점검', '소방 시설 유지 관리'] },
        { title: '건축물 보수', items: ['노후 시설 교체 및 수리', '에너지 효율화 컨설팅'] }
      ]
    },
    { 
      title: '환경/미화 관리', desc: '청결하고 건강한 업무 공간 유지', details: '첨단 청소 장비와 친환경 세제를 사용하여 고객의 건강을 최우선으로 생각하는 청결한 환경을 제공합니다.', icon: 'SprayCan',
      scopes: [
        { title: '일상 미화', items: ['사무실, 화장실, 공용 공간 청소', '쓰레기 분리 수거 및 배출'] },
        { title: '특수 크리닝', items: ['외벽 청소 및 대리석 광택', '카펫 및 바닥재 딥 크리닝'] }
      ]
    }
  ];
  for (let i=0; i<servicesList.length; i++) {
    const s = servicesList[i];
    const sId = genId();
    await client.query('INSERT INTO services_services_list (_order, _parent_id, id, title, desc, details, icon) VALUES ($1, $2, $3, $4, $5, $6, $7)', [i+1, 1, sId, s.title, s.desc, s.details, s.icon]);
    for (let j=0; j<s.scopes.length; j++) {
      const scope = s.scopes[j];
      const scopeId = genId();
      await client.query('INSERT INTO services_services_list_scopes (_order, _parent_id, id, title) VALUES ($1, $2, $3, $4)', [j+1, sId, scopeId, scope.title]);
      for (let k=0; k<scope.items.length; k++) {
        await client.query('INSERT INTO services_services_list_scopes_items (_order, _parent_id, id, item) VALUES ($1, $2, $3, $4)', [k+1, scopeId, genId(), scope.items[k]]);
      }
    }
  }

  // 3. GOV SUPPORT
  await client.query('DELETE FROM gov_support_benefit1_items WHERE _parent_id = 1');
  await client.query('DELETE FROM gov_support_benefit2_cards WHERE _parent_id = 1');
  const b1Items = ['국가기관, 지자체, 공기업의 의무구매 실적 인정', '수의계약이 가능한 법적 근거 마련 (지방계약법 시행령 등)', '기업의 ESG 경영 실천 및 사회적 가치 기여도 상승'];
  for (let i=0; i<b1Items.length; i++) {
    await client.query('INSERT INTO gov_support_benefit1_items (_order, _parent_id, id, item) VALUES ($1, $2, $3, $4)', [i+1, 1, genId(), b1Items[i]]);
  }
  const b2Cards = [
    { label: '감면 대상', title: '상시근로자 50인 이상 기업', desc: '의무고용률을 초과하지 못한 민간기업 및 공공기관', isHighlight: false },
    { label: '최대 감면 혜택', title: '부담금의 최대 60%', desc: '장애인표준사업장(케이두레) 거래 금액의 일부를 납부해야 할 부담금에서 공제', isHighlight: true }
  ];
  for (let i=0; i<b2Cards.length; i++) {
    const c = b2Cards[i];
    await client.query('INSERT INTO gov_support_benefit2_cards (_order, _parent_id, id, label, title, desc, is_highlight) VALUES ($1, $2, $3, $4, $5, $6, $7)', [i+1, 1, genId(), c.label, c.title, c.desc, c.isHighlight]);
  }

  // 4. DOOREMALL
  await client.query('DELETE FROM dooremall_benefits WHERE _parent_id = 1');
  const dBenefits = [
    { icon: 'ShieldCheck', title: '고품질 제품 보장', desc: '엄격한 품질 테스트를 통과한 검증된 제품만을 취급합니다.' },
    { icon: 'Package', title: '원스톱 구매', desc: '사무용품부터 위생용품까지 기업에 필요한 모든 물품을 한 곳에서 구매 가능합니다.' },
    { icon: 'Truck', title: '신속하고 안전한 배송', desc: '전국 어디든 신속한 배송 시스템으로 원하시는 시간에 맞춰 배달해 드립니다.' }
  ];
  for (let i=0; i<dBenefits.length; i++) {
    const b = dBenefits[i];
    await client.query('INSERT INTO dooremall_benefits (_order, _parent_id, id, icon, title, desc) VALUES ($1, $2, $3, $4, $5, $6)', [i+1, 1, genId(), b.icon, b.title, b.desc]);
  }

  console.log("Successfully seeded all other globals!");
  await client.end();
}
run().catch(console.error);
