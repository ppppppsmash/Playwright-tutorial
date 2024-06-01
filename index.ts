import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://yahoo.co.jp");

  await page.close();
  await browser.close();
})();