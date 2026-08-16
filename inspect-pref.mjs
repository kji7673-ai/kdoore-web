import pg from 'pg';
const { Client } = pg;
const client = new Client({
  connectionString: 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?sslmode=no-verify',
  ssl: { rejectUnauthorized: false }
});
async function run() {
  await client.connect();
  const res = await client.query("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'payload_preferences'");
  console.log(res.rows);
  await client.end();
}
run().catch(console.error);
