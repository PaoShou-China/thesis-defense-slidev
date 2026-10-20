import { chromium } from 'playwright-chromium'
import fs from 'node:fs'
const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 })
const errors = []
page.on('pageerror', e => errors.push(e.message))
await page.goto('http://localhost:3030', { waitUntil: 'networkidle' })
await page.waitForTimeout(1000)
const count = await page.locator('.slidev-page').count()
fs.mkdirSync(new URL('../qa/rendered/', import.meta.url), { recursive: true })
const metrics = []
for (let i = 1; i <= count; i++) {
  await page.goto(`http://localhost:3030/${i}`, { waitUntil: 'networkidle' })
  const detail = await page.evaluate(() => {
    const root = document.querySelector('.slidev-page') || document.body
    const text = [...root.querySelectorAll('h1,h2,h3,p,li,td,th,.title,.takeaway,.small,.caption')]
    return {
      overflow: root.scrollWidth > root.clientWidth || root.scrollHeight > root.clientHeight,
      minFontPx: Math.min(...text.map(e => parseFloat(getComputedStyle(e).fontSize)).filter(Number.isFinite)),
      bodyFont: getComputedStyle(root).fontFamily,
      fontFallback: !document.fonts.check('700 16px "Microsoft YaHei"'),
      takeaway: !!root.querySelector('.takeaway'),
      focus: !!root.querySelector('.takeaway,.red,.active'),
    }
  })
  metrics.push({ page: i, ...detail })
  await page.screenshot({ path: new URL(`../qa/rendered/slide-${String(i).padStart(2, '0')}.png`, import.meta.url).pathname })
}
fs.writeFileSync(new URL('../qa/render-report.json', import.meta.url), JSON.stringify({ count, errors, metrics }, null, 2) + '\n')
await browser.close()
if (errors.length || metrics.some(m => m.overflow)) process.exitCode = 1
console.log(`Rendered ${count} slides; report: qa/render-report.json`)
