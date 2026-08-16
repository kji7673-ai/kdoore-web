import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function sync() {
  try {
    console.log('Initializing Payload to sync database schema...')
    const config = await configPromise
    const payload = await getPayload({ config })
    console.log('Successfully initialized payload and pushed schema!')
    process.exit(0)
  } catch (err) {
    console.error('Error syncing database:', err)
    process.exit(1)
  }
}

sync()
