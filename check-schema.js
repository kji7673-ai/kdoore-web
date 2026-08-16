const { Client } = require('pg');

async function checkSchema() {
  const client = new Client({
    connectionString: 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?sslmode=no-verify'
  });

  try {
    await client.connect();
    
    // Check if homepage table exists
    const res = await client.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'homepage';
    `);
    
    console.log("Columns in homepage table:");
    res.rows.forEach(row => console.log(`${row.column_name}: ${row.data_type}`));
    
    // Also list all tables related to homepage
    const tables = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name LIKE 'homepage%';
    `);
    console.log("\nTables related to homepage:");
    tables.rows.forEach(row => console.log(row.table_name));

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

checkSchema();
