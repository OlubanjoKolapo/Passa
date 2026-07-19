const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.md'));
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/JetBrains\+Mono/g, 'Geist+Mono');
  content = content.replace(/JetBrains Mono/g, 'Geist Mono');
  fs.writeFileSync(file, content);
}
console.log('Fonts updated successfully.');
