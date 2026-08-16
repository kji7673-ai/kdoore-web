const fs = require('fs');

const configPath = 'src/payload.config.ts';
let content = fs.readFileSync(configPath, 'utf-8');

const globalsPath = 'scratch/payload_globals.ts';
const newGlobals = fs.readFileSync(globalsPath, 'utf-8');

// 1. Update livePreview URL routing
content = content.replace(
  "        if (global === 'certifications') return `${serverURL}/about`;",
  "        if (global === 'about') return `${serverURL}/about`;\n        if (global === 'services') return `${serverURL}/services`;\n        if (global === 'govSupport') return `${serverURL}/gov-support`;\n        if (global === 'dooremall') return `${serverURL}/dooremall`;"
);

// 2. Update livePreview globals array
content = content.replace(
  "globals: ['homepage', 'certifications'],",
  "globals: ['homepage', 'about', 'services', 'govSupport', 'dooremall'],"
);

// 3. Update the main globals array.
// We know it starts around line 173 with `  globals: [` and ends with `  ],\n  editor: lexicalEditor({}),`
// Let's use a regex to replace everything between `collections: [\n    // ... \n  ],\n  globals: [` and `  ],\n  editor:`

const mainGlobalsMatch = content.match(/  globals: \[\n[\s\S]*?  \],\n  editor:/);
if (mainGlobalsMatch) {
  content = content.replace(mainGlobalsMatch[0], '  globals: [\n' + newGlobals + '\n  ],\n  editor:');
  fs.writeFileSync(configPath, content);
  console.log('Successfully updated payload.config.ts');
} else {
  console.error('Failed to find main globals block');
}
