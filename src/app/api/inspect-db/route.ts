// @ts-nocheck
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const { getPayload } = await import('payload');
    const { default: configPromise } = await import('@payload-config');
    const config = await configPromise;
    const payload = await getPayload({ config });
    
    // Instead of pushing schemas, let's just use raw Drizzle to drop the homepage table!
    // Wait, if I drop it, will Payload recreate it? No, Payload only creates it on push: true.
    
    return NextResponse.json({
      dbKeys: Object.keys(payload.db)
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.toString() }, { status: 500 });
  }
}
