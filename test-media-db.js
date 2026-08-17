const { Client } = require('pg');
const dbUrl = "postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres";
const client = new Client({ connectionString: dbUrl + '?sslmode=no-verify', ssl: { rejectUnauthorized: false }});
client.connect().then(() => {
  return client.query("SELECT * FROM media");
}).then(res => {
  console.log(JSON.stringify(res.rows, null, 2));
  client.end();
}).catch(err => {
  console.error(err);
  client.end();
});
