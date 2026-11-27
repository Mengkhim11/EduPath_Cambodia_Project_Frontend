import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = {
  // Brand & Logos
  'edupath-logo.png': 'https://www.figma.com/api/mcp/asset/d5451c1c-8abe-4a66-8605-09e4cc60d8d6.png',
  'edupath-footer-logo.png': 'https://www.figma.com/api/mcp/asset/38dbaaf1-3511-447f-a047-216cf64498ac.png',
  
  // Skyline Hero
  'cambodia-skyline.png': 'https://www.figma.com/api/mcp/asset/241129a0-b298-4eb3-9e5b-caec4c0c5142.png',
  
  // AI Illustration
  'ai-assistant.png': 'https://www.figma.com/api/mcp/asset/095c1a6d-3654-4441-a435-90e6281140ed.png',
  
  // Universities
  'rupp-campus.png': 'https://www.figma.com/api/mcp/asset/9da323e9-f202-4052-9c7d-476b37aab967.png',
  'itc-campus.png': 'https://www.figma.com/api/mcp/asset/2f561f26-0139-47e5-a4e5-f5b6703186af.png',
  'cadt-campus.png': 'https://www.figma.com/api/mcp/asset/999a5f9c-3c15-4d64-8876-a8d751d3fcbc.png',
  'aupp-campus.png': 'https://www.figma.com/api/mcp/asset/956cbe3a-170d-46c7-b7d8-e237fb6746ab.png',
  
  // Scholarships
  'scholarship-stem.png': 'https://www.figma.com/api/mcp/asset/0c1613f2-e6e7-4fb0-b3a4-b05022a500ef.png',
  'scholarship-eiffel.png': 'https://www.figma.com/api/mcp/asset/8859374c-1c6d-4a14-a892-f9a34b914309.png',
  'scholarship-mext.png': 'https://www.figma.com/api/mcp/asset/19e5a005-d2c8-4d33-841d-69a60618b047.png',
  'scholarship-asean.png': 'https://www.figma.com/api/mcp/asset/9c35f9ab-ed2d-4a3b-9ce4-ddf7ece54bc9.png',
  
  // Events
  'event-engineering.png': 'https://www.figma.com/api/mcp/asset/1127b950-d932-489b-8572-7ff3941d4dab.png',
  'event-australia.png': 'https://www.figma.com/api/mcp/asset/006bf3e4-9d2f-47c8-bd02-486cca6d5530.png',
  'event-itc-openhouse.png': 'https://www.figma.com/api/mcp/asset/7aec581d-0fa2-43e2-a62e-fdd8784d6dcd.png',
  'event-workshop.png': 'https://www.figma.com/api/mcp/asset/46c95d6d-45a3-41f7-816f-5cc3d591f4f2.png',

  // SVGs
  'icon-book.svg': 'https://www.figma.com/api/mcp/asset/df4d942c-9fe1-490d-a657-a3077e76d75d.svg',
  'icon-save.svg': 'https://www.figma.com/api/mcp/asset/bdd56ab9-fd53-4b16-98c6-aa044645f267.svg',
  'icon-cap.svg': 'https://www.figma.com/api/mcp/asset/dd64e6c0-ed6b-45b4-9a7b-9a8b8744d900.svg',
  'icon-chevron.svg': 'https://www.figma.com/api/mcp/asset/fc0cf2b6-82d8-4f5d-a1c0-b9127265226f.svg',
  'icon-search.svg': 'https://www.figma.com/api/mcp/asset/405cac88-e95a-4215-b3fd-bb219bb3d85e.svg',
  'icon-calendar.svg': 'https://www.figma.com/api/mcp/asset/d46cc864-aed3-4fc2-a2b6-eef0e6db925f.svg',
  'nav-favorites.svg': 'https://www.figma.com/api/mcp/asset/185642ea-e24e-439a-a107-0424462fa0b9.svg',
  'icon-check.svg': 'https://www.figma.com/api/mcp/asset/1baaff65-4fa6-460b-8aca-3dd58a6650fe.svg'
};

const outputDir = path.resolve('public/assets');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  console.log(`Downloading ${Object.keys(assets).length} assets...`);
  for (const [filename, url] of Object.entries(assets)) {
    const dest = path.join(outputDir, filename);
    try {
      await downloadFile(url, dest);
      console.log(`Downloaded ${filename}`);
    } catch (err) {
      console.error(`Error downloading ${filename}: ${err.message}`);
    }
  }
  console.log('Finished downloading assets.');
}

main();
