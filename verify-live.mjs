import { chromium } from 'playwright';

const URL = process.env.URL || 'https://udvash-ds.vercel.app';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const consoleErrors = [];
page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
page.on('pageerror', err => consoleErrors.push(`PAGEERROR: ${err.message}`));

console.log('GET', URL);
await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
await page.screenshot({ path: '/tmp/live-light.png', fullPage: true });

const checks = await page.evaluate(() => {
  const text = document.body.innerText;
  return {
    title: document.title,
    h1: document.querySelector('h1')?.innerText || null,
    h2Count: document.querySelectorAll('h2').length,
    sections: Array.from(document.querySelectorAll('h2')).map(h => h.innerText),
    iconSection: text.includes('Iconography'),
    logoSection: text.includes('Logo'),
    homeGridSection: text.includes('Home Grid'),
    subjectWise: text.includes('Subject Wise'),
    componentsCount: text.match(/77 React components/) ? 'mentioned' : 'not-mentioned',
  };
});
console.log(JSON.stringify(checks, null, 2));

// Toggle dark
const toggle = page.locator('button').filter({ hasText: /Dark|Light/ }).first();
if (await toggle.isVisible()) {
  await toggle.click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: '/tmp/live-dark.png', fullPage: true });
  const dark = await page.evaluate(() => ({
    isDark: document.documentElement.classList.contains('dark'),
    bodyBg: getComputedStyle(document.body).backgroundColor,
  }));
  console.log('Dark:', JSON.stringify(dark));
}

console.log('Console errors:', consoleErrors.length);
consoleErrors.forEach(e => console.log('  -', e));

await browser.close();
