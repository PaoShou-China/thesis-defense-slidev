import fs from 'node:fs'
const source = fs.readFileSync(new URL('../slides.md', import.meta.url), 'utf8')
const chunks = source.split(/^---\s*$/m)
const pages = []
for (let i = 1; i < chunks.length; i += 2) {
  const front = chunks[i] || ''
  const body = chunks[i + 1] || ''
  const layout = front.match(/layout:\s*([\w-]+)/)?.[1] || 'default'
  if (['cover', 'agenda'].includes(layout)) continue
  const heading = front.match(/heading:\s*["']?([^\n"']+)/)?.[1]?.trim()
  const takeaway = [...body.matchAll(/class="takeaway"[^>]*>([\s\S]*?)<\/div>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean).at(-1)
  const issues = []
  if (!heading) issues.push('missing heading')
  if (!takeaway && !front.match(/emphasis:\s*[^\n]+/)) issues.push('missing visible takeaway sentence')
  pages.push({ page: pages.length + 1, heading: heading || '', takeaway: takeaway || front.match(/emphasis:\s*([^\n]+)/)?.[1]?.trim() || '', sourceFontThresholdPx: 22, equivalentExportPt: 16.5, issues })
}
const report = { generatedAt: new Date().toISOString(), canvas: '960x540 CSS px, 16:9', exportPhysicalSize: '720 x 404.88 pt', unitScale: '1 CSS px = 0.75 exported PDF pt at current slide size', policy: '20pt minimum means at least 26.67 CSS px; 20px is only 15pt and fails.', note: 'Current content font threshold shown as 22px = 16.5pt. Physical size is reported for follow-up; this report does not certify minimum-size compliance.', pages }
fs.mkdirSync(new URL('../qa/', import.meta.url), { recursive: true })
fs.writeFileSync(new URL('../qa/slide-audit.json', import.meta.url), JSON.stringify(report, null, 2) + '\n')
console.log(`Audited ${pages.length} content slides`)
for (const p of pages.filter(p => p.issues.length)) console.error(`Slide ${p.page} ${p.heading}: ${p.issues.join(', ')}`)
if (pages.some(p => p.issues.length)) process.exitCode = 1
