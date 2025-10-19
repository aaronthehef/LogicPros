const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function checkHeroBackground() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Wait a bit for any animations to load
    await page.waitForTimeout(3000);

    // Take a full page screenshot
    const screenshotPath = path.join(__dirname, 'hero_background_check.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Full page screenshot saved to: ${screenshotPath}`);

    // Try to find the hero section specifically
    const heroSection = await page.locator('.hero, #hero, [class*="hero"], .hero-section, #hero-section').first();

    if (await heroSection.count() > 0) {
      console.log('Hero section found, taking focused screenshot...');
      const heroScreenshotPath = path.join(__dirname, 'hero_section_only.png');
      await heroSection.screenshot({ path: heroScreenshotPath });
      console.log(`Hero section screenshot saved to: ${heroScreenshotPath}`);

      // Get the computed styles of the hero section
      const heroStyles = await heroSection.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          backgroundImage: computed.backgroundImage,
          backgroundColor: computed.backgroundColor,
          background: computed.background,
          position: computed.position,
          overflow: computed.overflow
        };
      });

      console.log('Hero section computed styles:');
      console.log(JSON.stringify(heroStyles, null, 2));

    } else {
      console.log('Could not find hero section with common selectors');
    }

    // Check for any canvas elements (which might contain the circuit board)
    const canvasElements = await page.locator('canvas').count();
    console.log(`Found ${canvasElements} canvas element(s) on the page`);

    if (canvasElements > 0) {
      for (let i = 0; i < canvasElements; i++) {
        const canvas = page.locator('canvas').nth(i);
        const canvasInfo = await canvas.evaluate((el, index) => {
          return {
            index: index,
            width: el.width,
            height: el.height,
            id: el.id,
            className: el.className,
            style: el.style.cssText,
            parentElement: el.parentElement ? el.parentElement.className : 'no parent'
          };
        }, i);
        console.log(`Canvas ${i}:`, canvasInfo);
      }
    }

    // Check for any SVG elements that might contain the circuit board
    const svgElements = await page.locator('svg').count();
    console.log(`Found ${svgElements} SVG element(s) on the page`);

    // Check for elements with specific circuit board related classes or IDs
    const circuitElements = await page.locator('[class*="circuit"], [id*="circuit"], [class*="background"], [id*="background"]').count();
    console.log(`Found ${circuitElements} element(s) with circuit/background related classes or IDs`);

    // Get page title to confirm we're on the right page
    const pageTitle = await page.title();
    console.log(`Page title: ${pageTitle}`);

    // Check console for any errors
    const consoleMessages = [];
    page.on('console', (msg) => {
      consoleMessages.push(`${msg.type()}: ${msg.text()}`);
    });

    // Wait a bit more to capture any console messages
    await page.waitForTimeout(2000);

    if (consoleMessages.length > 0) {
      console.log('\nConsole messages:');
      consoleMessages.forEach(msg => console.log(msg));
    }

  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await browser.close();
  }
}

checkHeroBackground();