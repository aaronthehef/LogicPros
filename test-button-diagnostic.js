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

  const result = await page.evaluate(() => {
    const heroButton = document.querySelector('.no-hover-card .hero-button');
    const secondaryButton = document.querySelector('.no-hover-card .secondary-button');

    if (!heroButton || !secondaryButton) {
      return { error: 'Buttons not found' };
    }

    // Check all applied CSS rules
    const getMatchingRules = (element) => {
      const sheets = Array.from(document.styleSheets);
      const rules = [];

      sheets.forEach(sheet => {
        try {
          const cssRules = Array.from(sheet.cssRules || []);
          cssRules.forEach(rule => {
            if (rule.selectorText && element.matches && element.matches(rule.selectorText)) {
              rules.push({
                selector: rule.selectorText,
                styles: rule.style.cssText
              });
            }
          });
        } catch (e) {
          // Skip sheets we can't access
        }
      });

      return rules;
    };

    return {
      heroButton: {
        classes: heroButton.className,
        inlineStyle: heroButton.getAttribute('style'),
        matchingRules: getMatchingRules(heroButton),
        computedTransform: window.getComputedStyle(heroButton).transform,
        computedBoxShadow: window.getComputedStyle(heroButton).boxShadow,
        computedBackground: window.getComputedStyle(heroButton).background
      },
      secondaryButton: {
        classes: secondaryButton.className,
        inlineStyle: secondaryButton.getAttribute('style'),
        matchingRules: getMatchingRules(secondaryButton)
      }
    };
  });

  console.log('\n=== BUTTON DIAGNOSTIC ===');
  console.log(JSON.stringify(result, null, 2));

  await browser.close();
})();
