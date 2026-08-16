import pg from 'pg';
const { Client } = pg;

const url = 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?sslmode=no-verify';
const client = new Client({
  connectionString: url,
  ssl: { rejectUnauthorized: false }
});

async function run() {
  await client.connect();
  const res = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
  console.log('--- TABLES ---');
  console.log(res.rows.map(r => r.table_name));
  await client.end();
}
run().catch(console.error);
