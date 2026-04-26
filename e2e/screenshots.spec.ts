import { test, expect } from '@playwright/test';
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

      const consoleErrors: string[] = [];
      page.on('pageerror', (err) => consoleErrors.push(`pageerror: ${err.message}`));
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(`console: ${msg.text()}`);
      });

      const response = await page.goto(route, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });

      if (response && !response.ok()) {
        throw new Error(`HTTP ${response.status()} for ${route}`);
      }

      await page
        .waitForFunction(
          () => {
            const root = document.querySelector('app-root');
            if (!root) return false;
            return root.children.length > 0 && (root.textContent ?? '').trim().length > 0;
          },
          { timeout: 15000 },
        )
        .catch((e) => {
          throw new Error(
            `Angular did not render content for ${route}. Errors: ${consoleErrors.join(' | ') || '(none)'}. Reason: ${e.message}`,
          );
        });

      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
      await page.waitForTimeout(800);

      const bodyText = (await page.locator('body').textContent()) ?? '';
      expect(bodyText.trim().length, `Body is empty on ${route}`).toBeGreaterThan(20);

      await page.screenshot({
        path: path.join(outDir, `${vp.name}_${safeName(route)}.png`),
        fullPage: true,
      });
    });
  }
}
