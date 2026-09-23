import { chromium } from "playwright";
import { pathToFileURL } from "node:url";

const htmlPath = "/workspace/.grok/og-card.html";
const outPath = "/workspace/.grok/card-raw.png";

const browser = await chromium.launch({
  args: ["--disable-web-security", "--font-render-hinting=none"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
await page.evaluate(async () => {
  if (document.fonts?.ready) await document.fonts.ready;
});
await page.waitForTimeout(250);
await page.screenshot({ path: outPath, type: "png", clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log(`wrote ${outPath}`);
