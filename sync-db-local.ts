import { getPayload } from 'payload';
import configPromise from './src/payload.config';
import { postgresAdapter } from '@payloadcms/db-postgres';

async function sync() {
  console.log('Fetching config...');
  const config = await configPromise;
  
  console.log('Forcing push: true...');
  // Override the DB adapter to FORCE push: true
  const rawEnvUrl = 'postgres://postgres.drkkvjajcriifgwxfhsf:Wx3kftWPB2yj9tmB@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?supa=base-pooler.x';
  const url = new URL(rawEnvUrl);
  url.searchParams.set('sslmode', 'no-verify');
  const safeConnectionString = url.toString();
  
  config.db = postgresAdapter({
    pool: {
      connectionString: safeConnectionString,
      ssl: { rejectUnauthorized: false },
    },
    push: true, // Force push schema!
  });

  console.log('Initializing payload to push schema...');
  const payload = await getPayload({ config });
  
  console.log('Schema pushed! Initializing globals...');
  const slugs = ['homepage', 'about', 'services', 'govSupport', 'dooremall', 'prcenter'];
  for (const slug of slugs) {
    try {
      await payload.updateGlobal({
        slug: slug as any,
        data: {},
      });
      console.log(`Initialized global: ${slug}`);
    } catch (e) {
      console.error(`Failed to init ${slug}:`, e);
    }
  }
  
  console.log('Done!');
  process.exit(0);
}

sync().catch(e => {
  console.error(e);
  process.exit(1);
});
