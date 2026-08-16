import { NextResponse } from 'next/server';
import { Client } from 'pg';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const rawEnvUrl = process.env.POSTGRES_URL || 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?supa=base-pooler.x';
    const url = new URL(rawEnvUrl);
    url.searchParams.set('sslmode', 'no-verify');
    
    const client = new Client({
      connectionString: url.toString(),
      ssl: { rejectUnauthorized: false }
    });

    await client.connect();
    
    const res = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    await client.end();
    
    return NextResponse.json({ success: true, tables: res.rows.map(r => r.table_name) });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.toString() }, { status: 500 });
  }
}
