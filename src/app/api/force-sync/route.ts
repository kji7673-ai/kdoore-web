// @ts-nocheck
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 1. Force environment to development to bypass Payload production guards
    const originalEnv = process.env.NODE_ENV
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true })

    // 2. Import Payload and Config dynamically so they read the new NODE_ENV
    const { getPayload } = await import('payload')
    const { default: configPromise } = await import('@/payload.config')
    
    // 3. Initialize Payload
    const config = await configPromise
    
    // Override config to force push
    config.db = {
      ...config.db,
      push: true
    }

    const payload = await getPayload({ config })
    
    // 4. Restore environment
    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true })

    return NextResponse.json({ success: true, message: 'Schema forcefully pushed via API!' })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
