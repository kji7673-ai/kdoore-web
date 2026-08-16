import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { getPayload } = await import('payload');
    const { default: configPromise } = await import('@payload-config');
    const config = await configPromise;
    const payload = await getPayload({ config });
    
    console.log('Querying homepage global...');
    const data = await payload.findGlobal({
      slug: 'homepage',
    });
    
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error fetching global:', error);
    return NextResponse.json({ success: false, error: error.toString(), stack: error.stack }, { status: 500 });
  }
}
