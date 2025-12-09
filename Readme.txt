/*
Exporting site to PDF or Word


Manual (fast):
1. Run the app: npm run dev
2. Open each page in the browser (http://localhost:5173)
3. Use the browser Print dialog (Ctrl/Cmd+P) -> Save as PDF.
4. To get a .docx, open the saved PDF in Word (Word can import PDF) or use pandoc.


Automated (Puppeteer to PDF):
- Install puppeteer: npm i -D puppeteer
- Create scripts/export.js:


const puppeteer = require('puppeteer');
(async ()=>{
const browser = await puppeteer.launch();
const page = await browser.newPage();
const routes = ['/', '/about', '/portfolio', '/edosema', '/contact', '/dashboard'];
for(const r of routes){
await page.goto('http://localhost:5173'+r, {waitUntil:'networkidle0'});
await page.pdf({ path: `export${r.replace(/\//g,'_') || '_home'}.pdf`, format: 'A4' });
}
await browser.close();
})();


Run this with `node scripts/export.js` while your dev server is running.


Pandoc to DOCX:
- Install pandoc
- pandoc index.html -o site.docx
*/