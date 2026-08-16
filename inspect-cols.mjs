import pg from 'pg';
const { Client } = pg;

const url = 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?sslmode=no-verify';
const client = new Client({
  connectionString: url,
  ssl: { rejectUnauthorized: false }
});

async function run() {
  await client.connect();
  const res = await client.query("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'homepage'");
  console.log('--- HOMEPAGE COLUMNS ---');
  console.log(res.rows);
  await client.end();
}
run().catch(console.error);
