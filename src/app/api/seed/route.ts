import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  const payload = await getPayload({ config })

  try {
    // Check if users exist
    const users = await payload.find({ collection: 'users' })
    if (users.totalDocs > 0) {
      return NextResponse.json({ message: 'Admin already exists' })
    }

    // Create admin user
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@kdoore.com',
        password: 'T1004',
      },
    })

    return NextResponse.json({ 
      message: 'Admin created successfully', 
      email: 'admin@kdoore.com', 
      password: 'T1004' 
    })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
