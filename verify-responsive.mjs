import { chromium } from 'playwright';

const URL = process.env.URL || 'https://udvash-ds.vercel.app';
const VIEWS = [
  { name: 'mobile',  w: 376, h: 812 },
  { name: 'tab',     w: 768, h: 1024 },
  { name: 'desktop', w: 1280, h: 800 },
];

const browser = await chromium.launch();
for (const v of VIEWS) {
  const ctx = await browser.newContext({ viewport: { width: v.w, height: v.h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  console.log(`\n=== ${v.name} ${v.w}x${v.h} ===`);
  await page.goto(URL, { waitUntil: 'networkidle' });

  // Find each named card and measure
  const measure = await page.evaluate(() => {
    const find = (selectorFn) => {
      const all = Array.from(document.querySelectorAll('article'));
      const node = all.find(selectorFn);
      return node ? Math.round(node.getBoundingClientRect().width) : null;
    };
    return {
      liveClassCard: find(a => a.textContent?.includes('পদার্থ')),
      masterClassCard: find(a => a.textContent?.includes('Periodic')),
      practiceExamCard: find(a => a.textContent?.includes('Math Practice')),
      profileCard: find(a => a.textContent?.includes('তানজিন')),
      headerHeight: Math.round(document.querySelector('header').getBoundingClientRect().height),
      h1Size: parseFloat(getComputedStyle(document.querySelector('h1')).fontSize),
      h2Size: parseFloat(getComputedStyle(document.querySelector('h2')).fontSize),
    };
  });
  console.log('  card widths:', JSON.stringify({
    liveClass: measure.liveClassCard,
    masterClass: measure.masterClassCard,
    practiceExam: measure.practiceExamCard,
    profile: measure.profileCard,
  }));
  console.log(`  header: ${measure.headerHeight}px  h1: ${measure.h1Size}px  h2: ${measure.h2Size}px`);

  await page.screenshot({ path: `/tmp/resp-${v.name}.png`, fullPage: false });
  await ctx.close();
}
await browser.close();
