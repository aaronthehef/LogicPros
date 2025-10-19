const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to Saint John page
  await page.goto('http://localhost:3000/#/locations/saint-john/web-design');
  await page.waitForTimeout(2000);

  // Scroll to the "Ready to Get Started" section
  await page.evaluate(() => {
    const heading = [...document.querySelectorAll('h4')].find(h => h.textContent.includes('Ready to Get Started'));
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
  await page.waitForTimeout(1000);

  // Find the buttons
  const heroButton = page.locator('a.hero-button').filter({ hasText: 'Get Free Quote' }).last();
  const secondaryButton = page.locator('a.secondary-button').filter({ hasText: 'See Example' }).last();

  console.log('\n=== BEFORE HOVER ===');

  // Get initial styles
  const initialHeroStyles = await heroButton.evaluate(el => {
    const computed = window.getComputedStyle(el);
    return {
      background: el.style.background || computed.background,
      boxShadow: el.style.boxShadow || computed.boxShadow,
      transform: el.style.transform || computed.transform
    };
  });
  console.log('Hero Button (Get Free Quote) - Initial:', initialHeroStyles);

  const initialSecondaryStyles = await secondaryButton.evaluate(el => {
    const computed = window.getComputedStyle(el);
    return {
      background: el.style.background || computed.background,
      color: el.style.color || computed.color,
      transform: el.style.transform || computed.transform
    };
  });
  console.log('Secondary Button (See Example) - Initial:', initialSecondaryStyles);

  console.log('\n=== AFTER HOVER ===');

  // Hover over hero button
  await heroButton.hover();
  await page.waitForTimeout(500);

  const hoveredHeroStyles = await heroButton.evaluate(el => {
    const computed = window.getComputedStyle(el);
    return {
      background: el.style.background || computed.background,
      boxShadow: el.style.boxShadow || computed.boxShadow,
      transform: el.style.transform || computed.transform
    };
  });
  console.log('Hero Button (Get Free Quote) - Hovered:', hoveredHeroStyles);

  // Hover over secondary button
  await secondaryButton.hover();
  await page.waitForTimeout(500);

  const hoveredSecondaryStyles = await secondaryButton.evaluate(el => {
    const computed = window.getComputedStyle(el);
    return {
      background: el.style.background || computed.background,
      color: el.style.color || computed.color,
      transform: el.style.transform || computed.transform
    };
  });
  console.log('Secondary Button (See Example) - Hovered:', hoveredSecondaryStyles);

  console.log('\n=== ANALYSIS ===');
  console.log('Hero button transform changed?', initialHeroStyles.transform !== hoveredHeroStyles.transform);
  console.log('Hero button shadow changed?', initialHeroStyles.boxShadow !== hoveredHeroStyles.boxShadow);
  console.log('Secondary button background changed?', initialSecondaryStyles.background !== hoveredSecondaryStyles.background);
  console.log('Secondary button transform changed?', initialSecondaryStyles.transform !== hoveredSecondaryStyles.transform);

  await page.waitForTimeout(5000);
  await browser.close();
})();
