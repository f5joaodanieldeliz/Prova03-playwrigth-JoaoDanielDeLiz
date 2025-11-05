import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('zerostep example', async ({ page }) => {
  await page.goto('https://www.google.com');

  const aiArgs = { page, test };
  await ai('pesquisa delicia', aiArgs);
});
