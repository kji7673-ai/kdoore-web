import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  const config = await configPromise
  return NextResponse.json({
    globals: config.globals.map(g => g.slug),
    collections: config.collections.map(c => c.slug),
    adminRoutes: config.admin.routes,
    adminLivePreviewGlobals: config.admin.livePreview?.globals,
    hasHomepage: config.globals.some(g => g.slug === 'homepage'),
  })
}
