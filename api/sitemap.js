// Dynamic sitemap that combines static pages + live WordPress posts

const STATIC_URLS = [
  { loc: '/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-03-09' },
  { loc: '/about', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/contact', priority: '0.9', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/portfolio', priority: '0.7', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/free-example', priority: '0.6', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/privacy', priority: '0.3', changefreq: 'yearly', lastmod: '2025-10-26' },
  { loc: '/terms', priority: '0.3', changefreq: 'yearly', lastmod: '2025-10-26' },
  { loc: '/services/websites', priority: '0.9', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/websites/custom', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/websites/ecommerce', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/websites/redesign', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/websites/seo', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/automations', priority: '0.9', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/automations/business', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/automations/chatbots', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/automations/workflow', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/cybersecurity', priority: '0.9', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/security-audits', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/password-management', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/multi-factor-authentication', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/managed-it', priority: '0.9', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/managed-it/helpdesk', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/managed-it/network-management', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/managed-it/cloud-services', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/managed-it/consulting', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/services/it-services', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/fredericton', priority: '0.9', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/fredericton/web-design', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/fredericton/cybersecurity', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/fredericton/managed-it', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/fredericton/automations', priority: '0.9', changefreq: 'monthly', lastmod: '2026-03-09' },
  { loc: '/locations/moncton', priority: '0.9', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/moncton/web-design', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/moncton/cybersecurity', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/moncton/managed-it', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/moncton/automations', priority: '0.9', changefreq: 'monthly', lastmod: '2026-03-09' },
  { loc: '/locations/saint-john', priority: '0.9', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/saint-john/web-design', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/saint-john/cybersecurity', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/saint-john/managed-it', priority: '0.8', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/locations/saint-john/automations', priority: '0.9', changefreq: 'monthly', lastmod: '2026-03-09' },
  { loc: '/contractors/plumbing', priority: '0.7', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/contractors/electrical', priority: '0.7', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/contractors/hvac', priority: '0.7', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/contractors/roofing', priority: '0.7', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/contractors/construction', priority: '0.7', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/contractors/landscaping', priority: '0.7', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/contractors/painting', priority: '0.7', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/contractors/flooring', priority: '0.7', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/contractors/concrete', priority: '0.7', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/contractors/remodeling', priority: '0.7', changefreq: 'monthly', lastmod: '2025-10-26' },
  { loc: '/blog', priority: '0.9', changefreq: 'weekly', lastmod: '2026-03-09' },
];

const BASE_URL = 'https://logicpros.ca';
const WP_URL = 'https://wordpressblog.logicpros.ca';

export default async function handler(req, res) {
  // Fetch all published posts from WordPress
  let posts = [];
  try {
    const wpRes = await fetch(`${WP_URL}/?rest_route=/wp/v2/posts&status=publish&per_page=100&_fields=slug,modified`);
    if (wpRes.ok) {
      posts = await wpRes.json();
    }
  } catch {
    // If WordPress is unreachable, serve sitemap without blog posts
  }

  const staticEntries = STATIC_URLS.map(({ loc, priority, changefreq, lastmod }) => `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('');

  const blogEntries = posts.map(post => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.modified.substring(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticEntries}${blogEntries}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.status(200).send(xml);
}
