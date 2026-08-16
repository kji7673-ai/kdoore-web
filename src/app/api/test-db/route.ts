// @ts-nocheck
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const { getPayload } = await import('payload');
    const { default: configPromise } = await import('@payload-config');
    const config = await configPromise;
    const payload = await getPayload({ config });
    
    let result = {};
    try {
      result.homepage = await payload.findGlobal({ slug: 'homepage' });
    } catch(e) {
      result.homepageError = e.toString();
    }
    
    try {
      result.about = await payload.findGlobal({ slug: 'about' });
    } catch(e) {
      result.aboutError = e.toString();
    }
    
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.toString() }, { status: 500 });
  }
}
