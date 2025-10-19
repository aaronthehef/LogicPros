const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/#/locations/saint-john/web-design');
  await page.waitForTimeout(3000);

  // Scroll to section
  await page.evaluate(() => {
    const heading = [...document.querySelectorAll('h4')].find(h => h.textContent.includes('Ready to Get Started'));
    if (heading) heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  await page.waitForTimeout(1000);

  // Check if hover effects are working by looking at computed styles after hover
  const result = await page.evaluate(() => {
    const heroButton = document.querySelector('.no-hover-card .hero-button');
    const secondaryButton = document.querySelector('.no-hover-card .secondary-button');

    if (!heroButton || !secondaryButton) {
      return { error: 'Buttons not found' };
    }

    // Get initial styles
    const heroInitial = {
      transform: window.getComputedStyle(heroButton).transform,
      boxShadow: window.getComputedStyle(heroButton).boxShadow
    };

    const secondaryInitial = {
      background: window.getComputedStyle(secondaryButton).background,
      color: window.getComputedStyle(secondaryButton).color
    };

    // Trigger hover programmatically
    heroButton.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    const heroHover = {
      transform: window.getComputedStyle(heroButton).transform,
      boxShadow: window.getComputedStyle(heroButton).boxShadow
    };
    heroButton.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));

    secondaryButton.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    const secondaryHover = {
      background: window.getComputedStyle(secondaryButton).background,
      color: window.getComputedStyle(secondaryButton).color
    };

    return {
      heroInitial,
      heroHover,
      secondaryInitial,
      secondaryHover,
      heroTransformChanged: heroInitial.transform !== heroHover.transform,
      heroShadowChanged: heroInitial.boxShadow !== heroHover.boxShadow,
      secondaryBgChanged: secondaryInitial.background !== secondaryHover.background,
      secondaryColorChanged: secondaryInitial.color !== secondaryHover.color
    };
  });

  console.log('\n=== TEST RESULTS ===');
  console.log(JSON.stringify(result, null, 2));

  await browser.close();
})();
