import { getPayload } from 'payload';
import configPromise from './src/payload.config.ts';

async function run() {
  try {
    const payload = await getPayload({ config: configPromise });
    
    // Fetch current homepage
    const homepage = await payload.findGlobal({
      slug: 'homepage',
    });
    
    // Update with default data
    await payload.updateGlobal({
      slug: 'homepage',
      data: {
        highlights: [
          { value: 12, suffix: '+', title: '업력', description: '축적된 전문 관리 노하우' },
          { value: 60, suffix: '%', title: '감면 혜택', description: '장애인고용부담금 최대 감면율' },
          { value: 300, suffix: '+명', title: '함께하는 전문 인력', description: '전국 각지에서 활약하는 케이두레인' }
        ]
      }
    });
    console.log("Successfully seeded homepage highlights!");
  } catch (err) {
    console.error("ERROR:", err);
  }
  process.exit(0);
}
run();
