import { generateImportMap } from 'payload/dist/bin/generateImportMap/index.js';
import config from './payload.config.mjs';

async function run() {
  await generateImportMap({
    config: (await config).default || await config,
  });
  console.log("Import map generated!");
}
run().catch(console.error);
