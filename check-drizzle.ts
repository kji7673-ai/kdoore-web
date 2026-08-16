import { buildConfig } from 'payload/config';
import { postgresAdapter } from '@payloadcms/db-postgres';
import path from 'path';

async function run() {
  const { default: config } = await import('./src/payload.config.ts');
  const adapter = postgresAdapter({
    pool: { connectionString: 'postgres://dummy:dummy@localhost:5432/dummy' }
  });
  
  // init adapter with config
  await adapter.init({ payload: { config: config, logger: console } });
  
  // Print schema
  const schema = adapter.schema;
  console.log(JSON.stringify(Object.keys(schema), null, 2));
  
  console.log(schema.homepage);
}

run().catch(console.error);
