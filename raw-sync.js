import { Client } from 'pg'

const connectionString = 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?supa=base-pooler.x'

async function sync() {
  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } })
  try {
    await client.connect()
    console.log('Connected to Supabase Postgres!')

    // Execute raw SQL to add columns to homepage
    await client.query(`
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS hero_badge varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS hero_bg_image_id integer;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS core_values_title varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS core_values_subtitle varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS partners_title varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS partners_subtitle varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS services_title varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS services_subtitle varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS pr_title varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS pr_description varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS pr_video_id varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS process_title varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS process_subtitle varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS cta_title varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS cta_subtitle varchar;
      ALTER TABLE homepage ADD COLUMN IF NOT EXISTS cta_phone varchar;
    `)
    console.log('Added all missing columns to homepage table!')
    
  } catch (err) {
    console.error('Error syncing database:', err)
  } finally {
    await client.end()
  }
}

sync()
