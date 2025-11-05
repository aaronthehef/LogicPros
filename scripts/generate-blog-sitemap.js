// Dynamic Blog Sitemap Generator
// Run this script when new blog posts are published to update sitemap.xml

const fs = require('fs');
const https = require('https');

const WORDPRESS_URL = 'https://logicpros.ca';
const SITEMAP_PATH = './public/sitemap.xml';

async function fetchBlogPosts() {
  return new Promise((resolve, reject) => {
    const url = `${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=100&_embed`;
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const posts = JSON.parse(data);
          resolve(posts);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

function generateBlogPostEntries(posts) {
  return posts.map(post => {
    const pubDate = new Date(post.date).toISOString().split('T')[0];
    const modDate = new Date(post.modified || post.date).toISOString().split('T')[0];
    
    return `  <url>
    <loc>${WORDPRESS_URL}/blog/${post.slug}</loc>
    <lastmod>${modDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }).join('\n');
}

async function updateSitemap() {
  try {
    console.log('Fetching blog posts from WordPress...');
    const posts = await fetchBlogPosts();
    
    console.log(`Found ${posts.length} blog posts`);
    
    // Read current sitemap
    const currentSitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');
    
    // Find where to insert blog entries (before closing </urlset>)
    const insertIndex = currentSitemap.lastIndexOf('</urlset>');
    
    // Generate blog entries
    const blogEntries = generateBlogPostEntries(posts);
    
    // Create new sitemap content
    const newSitemap = currentSitemap.slice(0, insertIndex) + 
      blogEntries + '\n' + 
      currentSitemap.slice(insertIndex);
    
    // Write updated sitemap
    fs.writeFileSync(SITEMAP_PATH, newSitemap, 'utf8');
    
    console.log('✅ Sitemap updated successfully!');
    console.log(`Added ${posts.length} blog post URLs to sitemap`);
    console.log('📄 Submit updated sitemap to Google Search Console');
    
  } catch (error) {
    console.error('❌ Error updating sitemap:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  updateSitemap();
}

module.exports = { updateSitemap, fetchBlogPosts, generateBlogPostEntries };