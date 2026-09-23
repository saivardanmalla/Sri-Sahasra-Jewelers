
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { writeFileSync } from "node:fs";

const svg = `file:///workspace/public/favicon.svg`;
const browser = await chromium.launch();
for (const size of [16, 32, 64]) {
  const page = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
  await page.goto("file:///workspace/public/favicon.svg", { waitUntil: "load" });
  await page.setContent(`<!DOCTYPE html><html><head><style>
    html,body{margin:0;padding:0;width:${size}px;height:${size}px;background:transparent}
    img,svg{width:${size}px;height:${size}px;display:block}
  </style></head><body>
    <img src="/workspace/public/favicon.svg" width="${size}" height="${size}" />
  </body></html>`);
  // file img src won't work; use object url via file
  await page.setContent(`<!DOCTYPE html><html><head><style>
    html,body{margin:0;background:#fff}
    svg{width:${size}px;height:${size}px;display:block}
  </style></head><body></body></html>`);
  const svgText = await page.evaluate(async () => {
    const r = await fetch("file:///workspace/public/favicon.svg");
    return r.text();
  }).catch(() => null);
}
await browser.close();
