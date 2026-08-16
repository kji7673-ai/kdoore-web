import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const config = await configPromise
    const payload = await getPayload({ config })
    
    // Explicitly initializing payload will trigger push: true if configured
    return NextResponse.json({ success: true, message: 'Database schema successfully synced!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
