#!/bin/bash

# Automated Sitemap Cron Job Setup Script
# This script sets up automated daily sitemap updates

echo "🔧 Setting up automated sitemap cron job..."

# Get the current directory (where this script is run)
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "📁 Project directory: $PROJECT_DIR"

# Create the cron job
CRON_JOB="0 2 * * * cd $PROJECT_DIR && node scripts/generate-blog-sitemap.js"

echo "⏰ Adding cron job: $CRON_JOB"

# Add to crontab
(crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -

echo "✅ Cron job added successfully!"
echo ""
echo "📋 What happens now:"
echo "  • Every day at 2:00 AM"
echo "  • Script fetches all WordPress posts"
echo "  • Updates sitemap.xml with new blog post URLs"
echo "  • Google discovers new content faster"
echo ""
echo "🔍 To verify cron job:"
echo "  crontab -l"
echo ""
echo "🗑️ To remove cron job (if needed):"
echo "  crontab -l | grep -v 'generate-blog-sitemap'"
echo "  crontab -l | grep -v 'generate-blog-sitemap' | xargs crontab -r"
echo ""
echo "🚀 Setup complete! Your sitemap will update automatically every day."