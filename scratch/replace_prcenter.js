const fs = require('fs');
const configPath = 'src/payload.config.ts';
let content = fs.readFileSync(configPath, 'utf-8');

const prcenterGlobal = `    {
      slug: 'prcenter',
      label: '홍보센터 페이지 관리',
      access: { read: () => true },
      fields: [
        { name: 'heroTitle', label: '배너 제목', type: 'text', defaultValue: '홍보센터' },
        { name: 'heroSubtitle', label: '배너 서브타이틀', type: 'textarea', defaultValue: '케이두레의 새로운 소식과 채용 정보를 알려드립니다' },
      ]
    },`;

content = content.replace(
  "        if (global === 'dooremall') return `${serverURL}/dooremall`;",
  "        if (global === 'dooremall') return `${serverURL}/dooremall`;\n        if (global === 'prcenter') return `${serverURL}/prcenter`;"
);

content = content.replace(
  "globals: ['homepage', 'about', 'services', 'govSupport', 'dooremall'],",
  "globals: ['homepage', 'about', 'services', 'govSupport', 'dooremall', 'prcenter'],"
);

// We need to inject prcenterGlobal right before `  ],\n  editor:`
const insertPoint = content.lastIndexOf('  ],\n  editor:');
if (insertPoint !== -1) {
  content = content.substring(0, insertPoint) + prcenterGlobal + '\n' + content.substring(insertPoint);
  fs.writeFileSync(configPath, content);
  console.log('Successfully added prcenter global');
} else {
  console.error('Failed to find insert point for prcenter');
}
