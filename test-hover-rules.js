const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/#/locations/saint-john/web-design');
  await page.waitForTimeout(3000);

  const result = await page.evaluate(() => {
    const sheets = Array.from(document.styleSheets);
    const hoverRules = [];

    sheets.forEach((sheet, idx) => {
      try {
        const cssRules = Array.from(sheet.cssRules || []);
        cssRules.forEach(rule => {
          if (rule.selectorText && rule.selectorText.includes(':hover')) {
            if (rule.selectorText.includes('hero-button') || rule.selectorText.includes('secondary-button')) {
              hoverRules.push({
                sheet: idx,
                selector: rule.selectorText,
                styles: rule.style.cssText
              });
            }
          }
        });
      } catch (e) {
        // Skip sheets we can't access
      }
    });

    return hoverRules;
  });

  console.log('\n=== HOVER RULES FOUND ===');
  console.log(JSON.stringify(result, null, 2));

  await browser.close();
})();
