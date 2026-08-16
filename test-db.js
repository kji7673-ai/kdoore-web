const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?supa=base-pooler.x',
  ssl: { rejectUnauthorized: false }
});
client.connect()
  .then(() => { console.log('Connected!'); process.exit(0); })
  .catch(err => { console.error('Connection error', err.stack); process.exit(1); });
setTimeout(() => { console.error('Timeout!'); process.exit(1); }, 5000);
