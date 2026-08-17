import fs from 'fs';
let content = fs.readFileSync('src/payload.config.ts', 'utf-8');

const collections = ['news', 'recruitment', 'pages'];
for (const c of collections) {
  content = content.replace(
    new RegExp(`slug:\\s*'${c}',`),
    `slug: '${c}',\n      hooks: { afterChange: [revalidateCollectionHook] },`
  );
}

const globals = ['homepage', 'about', 'services', 'govSupport', 'dooremall', 'prcenter'];
for (const g of globals) {
  content = content.replace(
    new RegExp(`slug:\\s*'${g}',`),
    `slug: '${g}',\n      hooks: { afterChange: [revalidateGlobalHook] },`
  );
}

fs.writeFileSync('src/payload.config.ts', content);
