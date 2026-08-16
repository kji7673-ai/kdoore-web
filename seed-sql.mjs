import pg from 'pg';
import crypto from 'crypto';
const { Client } = pg;
const client = new Client({
  connectionString: 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?sslmode=no-verify',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  await client.connect();
  
  // Insert highlights
  const highlights = [
    { value: 12, suffix: '+', title: '업력', description: '축적된 전문 관리 노하우' },
    { value: 60, suffix: '%', title: '감면 혜택', description: '장애인고용부담금 최대 감면율' },
    { value: 300, suffix: '+명', title: '함께하는 전문 인력', description: '전국 각지에서 활약하는 케이두레인' }
  ];
  
  // Clear existing highlights for parent 1 just in case
  await client.query('DELETE FROM homepage_highlights WHERE _parent_id = 1');
  
  for (let i = 0; i < highlights.length; i++) {
    const h = highlights[i];
    const id = crypto.randomUUID().substring(0, 8); // Drizzle expects a string ID
    await client.query(
      'INSERT INTO homepage_highlights (_order, _parent_id, id, value, suffix, title, description) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [i + 1, 1, id, h.value, h.suffix, h.title, h.description]
    );
  }
  
  console.log("Successfully seeded homepage highlights!");
  await client.end();
}
run().catch(console.error);
