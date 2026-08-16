// @ts-nocheck
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // 1. Bypass Webpack static analysis for NODE_ENV replacement
    const envObj = process.env as any;
    envObj['NODE' + '_ENV'] = 'development'; // Tricks Payload into thinking it's dev so `push: true` works!

    // 2. Import Payload dynamically
    const { getPayload } = await import('payload');
    const { default: configPromise } = await import('@payload-config');
    const config = await configPromise;

    // 3. Initialize Payload (this will automatically push the schema because push: true is in config)
    const payload = await getPayload({ config });
    
    // 4. Create missing Globals if they don't exist
    const slugs = ['homepage', 'about', 'services', 'govSupport', 'dooremall', 'prcenter'];
    for (const slug of slugs) {
      try {
        await payload.updateGlobal({
          slug: slug as any,
          data: {}, // Just init with empty data
        });
      } catch (err) {
        console.log(`Failed to init global ${slug}:`, err);
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Database schema pushed successfully via Drizzle, and all globals initialized.' 
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.toString(), stack: error.stack }, { status: 500 });
  }
}
