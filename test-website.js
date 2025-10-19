const puppeteer = require('puppeteer');
const fs = require('fs');

async function testWebsite() {
  let browser;
  try {
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    console.log('Navigating to localhost:3000...');
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    console.log('Taking screenshot...');
    await page.screenshot({
      path: 'homepage-screenshot.png',
      fullPage: true
    });

    console.log('Analyzing navigation menu...');
    const navAnalysis = await page.evaluate(() => {
      // Check for navigation links
      const services = document.querySelector('a[href="/services"]');

      // Find locations link by checking text content
      let locations = null;
      const allLinks = document.querySelectorAll('a, .nav-link');
      for (let link of allLinks) {
        if (link.textContent && link.textContent.toLowerCase().includes('locations')) {
          locations = link;
          break;
        }
      }

      const about = document.querySelector('a[href="/about"]');
      const contact = document.querySelector('a[href="/contact"]');

      // Find Get free button
      let getFreeBtn = document.querySelector('.btn-nav-cta') || document.querySelector('a[href="/free-example"]');
      if (!getFreeBtn) {
        for (let link of allLinks) {
          if (link.textContent && link.textContent.toLowerCase().includes('get free')) {
            getFreeBtn = link;
            break;
          }
        }
      }

      // Check Get free button styling
      let getFreeButtonStyle = null;
      if (getFreeBtn) {
        const computedStyle = window.getComputedStyle(getFreeBtn);
        getFreeButtonStyle = {
          background: computedStyle.background,
          backgroundColor: computedStyle.backgroundColor,
          border: computedStyle.border,
          borderRadius: computedStyle.borderRadius,
          color: computedStyle.color
        };
      }

      // Check for animated background elements
      const animatedElements = {
        floatingParticles: document.querySelectorAll('.floating-particle').length,
        techNodes: document.querySelectorAll('.tech-nodes').length,
        heroBackgroundSvg: document.querySelectorAll('.hero-background-svg').length,
        glowingOrbs: document.querySelectorAll('.glowing-orbs').length
      };

      return {
        navigationFound: {
          services: !!services,
          locations: !!locations,
          about: !!about,
          contact: !!contact,
          getFreeButton: !!getFreeBtn
        },
        getFreeButtonText: getFreeBtn ? getFreeBtn.textContent.trim() : null,
        getFreeButtonStyle,
        animatedElements,
        title: document.title,
        heroHeading: document.querySelector('h1') ? document.querySelector('h1').textContent.trim() : null
      };
    });

    console.log('Analysis Results:');
    console.log('=================');
    console.log('Navigation Menu Found:');
    console.log('- Services:', navAnalysis.navigationFound.services ? '✓' : '✗');
    console.log('- Locations:', navAnalysis.navigationFound.locations ? '✓' : '✗');
    console.log('- About:', navAnalysis.navigationFound.about ? '✓' : '✗');
    console.log('- Contact:', navAnalysis.navigationFound.contact ? '✓' : '✗');
    console.log('- Get free button:', navAnalysis.navigationFound.getFreeButton ? '✓' : '✗');

    if (navAnalysis.getFreeButtonText) {
      console.log('Get free button text:', navAnalysis.getFreeButtonText);
    }

    if (navAnalysis.getFreeButtonStyle) {
      console.log('Get free button styling:');
      console.log('- Background:', navAnalysis.getFreeButtonStyle.background);
      console.log('- Border:', navAnalysis.getFreeButtonStyle.border);
      console.log('- Color:', navAnalysis.getFreeButtonStyle.color);
    }

    console.log('\nAnimated Background Elements:');
    console.log('- Floating particles:', navAnalysis.animatedElements.floatingParticles);
    console.log('- Tech nodes:', navAnalysis.animatedElements.techNodes);
    console.log('- Hero background SVG:', navAnalysis.animatedElements.heroBackgroundSvg);
    console.log('- Glowing orbs:', navAnalysis.animatedElements.glowingOrbs);

    console.log('\nPage Title:', navAnalysis.title);
    console.log('Hero Heading:', navAnalysis.heroHeading);

    console.log('\nScreenshot saved as: homepage-screenshot.png');

  } catch (error) {
    console.error('Error testing website:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testWebsite();