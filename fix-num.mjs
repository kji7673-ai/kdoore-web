import pg from 'pg';
const { Client } = pg;
const client = new Client({
  connectionString: 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?sslmode=no-verify',
  ssl: { rejectUnauthorized: false }
});
async function run() {
  await client.connect();
  await client.query('ALTER TABLE "homepage_highlights" ALTER COLUMN "value" TYPE double precision;');
  console.log("Altered homepage_highlights value to double precision");
  await client.end();
}
run().catch(console.error);
