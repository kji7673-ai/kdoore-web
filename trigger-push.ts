import { getPayload } from 'payload';
import config from './src/payload.config.ts';

async function run() {
  console.log('Initializing payload...');
  const payload = await getPayload({ config });
  console.log('Payload initialized!');
  process.exit(0);
}
run().catch(console.error);
