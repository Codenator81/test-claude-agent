import { test } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const routes = (process.env.AFFECTED_ROUTES || '/')
  .split(',')
  .map((r) => r.trim())
  .filter(Boolean);

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 375, height: 812 },
];

const outDir = 'screenshots';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const safeName = (route: string) => {
  const cleaned = route.replace(/^\/+|\/+$/g, '');
  return cleaned.length === 0 ? 'home' : cleaned.replace(/\//g, '_');
};

for (const route of routes) {
  for (const vp of viewports) {
    test(`${vp.name} ${route}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(route, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      await page.screenshot({
        path: path.join(outDir, `${vp.name}_${safeName(route)}.png`),
        fullPage: true,
      });
    });
  }
}
