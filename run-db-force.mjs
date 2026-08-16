import pg from 'pg';
import fs from 'fs';
const { Client } = pg;
const client = new Client({
  connectionString: 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?sslmode=no-verify',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  const content = fs.readFileSync('src/app/api/db-force/route.ts', 'utf8');
  const sqlCommands = content.split('\`')[1]; // Extract the sql string
  await client.connect();
  await client.query(sqlCommands);
  console.log("SUCCESS!");
  await client.end();
}
run().catch(console.error);
