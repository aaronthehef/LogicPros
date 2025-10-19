const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/#/locations/saint-john/web-design');
  await page.waitForTimeout(3000);

  // Scroll to section
  await page.evaluate(() => {
    const heading = [...document.querySelectorAll('h4')].find(h => h.textContent.includes('Ready to Get Started'));
    if (heading) heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  await page.waitForTimeout(2000);

  console.log('\n=== Testing REAL mouse hover ===\n');

  // Get button locator
  const heroButton = page.locator('.no-hover-card .hero-button');

  console.log('Before hover - getting initial styles...');
  const before = await page.evaluate(() => {
    const btn = document.querySelector('.no-hover-card .hero-button');
    const computed = window.getComputedStyle(btn);
    return {
      transform: computed.transform,
      boxShadow: computed.boxShadow
    };
  });
  console.log('Initial:', before);

  console.log('\nHovering over button...');
  await heroButton.hover();
  await page.waitForTimeout(1000);

  const after = await page.evaluate(() => {
    const btn = document.querySelector('.no-hover-card .hero-button');
    const computed = window.getComputedStyle(btn);
    return {
      transform: computed.transform,
      boxShadow: computed.boxShadow
    };
  });
  console.log('After hover:', after);

  console.log('\nDid it change?', {
    transform: before.transform !== after.transform,
    boxShadow: before.boxShadow !== after.boxShadow
  });

  console.log('\nKeeping browser open for 10 seconds so you can manually test...');
  await page.waitForTimeout(10000);

  await browser.close();
})();
