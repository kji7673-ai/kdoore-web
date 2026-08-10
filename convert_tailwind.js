const fs = require('fs');

const tsConfig = fs.readFileSync('tailwind.config.ts', 'utf8');

const colorsMatch = tsConfig.match(/colors:\s*\{([\s\S]*?)\},[\s\S]*borderRadius:/);
let colorsCss = '';
if (colorsMatch) {
  const colorsStr = colorsMatch[1];
  const lines = colorsStr.split('\n');
  for (let line of lines) {
    const match = line.match(/"([^"]+)":\s*"([^"]+)"/);
    if (match) {
      colorsCss += `  --color-${match[1]}: ${match[2]};\n`;
    }
  }
}

const spacingMatch = tsConfig.match(/spacing:\s*\{([\s\S]*?)\},[\s\S]*fontFamily:/);
let spacingCss = '';
if (spacingMatch) {
  const spacingStr = spacingMatch[1];
  const lines = spacingStr.split('\n');
  for (let line of lines) {
    const match = line.match(/"([^"]+)":\s*"([^"]+)"/);
    if (match) {
      spacingCss += `  --spacing-${match[1]}: ${match[2]};\n`;
    }
  }
}

let themeBlock = `@theme {\n${colorsCss}\n${spacingCss}}\n`;
fs.writeFileSync('theme.css', themeBlock);
