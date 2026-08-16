import { getPayload } from 'payload';
import configPromise from './src/payload.config.ts';

async function run() {
  try {
    const payload = await getPayload({ config: configPromise });
    const homepage = await payload.findGlobal({
      slug: 'homepage',
    });
    console.log(homepage);
  } catch (err) {
    console.error("PAYLOAD ERROR:", err);
  }
  process.exit(0);
}
run();
