# WordPress Blog Integration Setup

This guide will help you configure your WordPress site to display blog posts on your LogicPros website.

## Security First

Your WordPress credentials are handled securely:

- **Environment Variables**: Credentials are stored in environment variables (`.env` file)
- **Git Safe**: `.env` is already in `.gitignore`, so credentials won't be committed to Git
- **Vercel Safe**: Use Vercel Environment Variables for production deployment
- **Application Passwords**: Uses WordPress Application Passwords (not your main password)

## Quick Setup

### 1. WordPress Site Configuration

#### Enable REST API
Ensure your WordPress site has the REST API enabled (default in modern WordPress).

#### Create Application Password
1. Log into your WordPress admin dashboard
2. Go to **Users → Profile**
3. Scroll down to **Application Passwords**
4. Enter a name like "LogicPros Blog"
5. Click **Add New Application Password**
6. Copy the generated password (you won't see it again)

#### Verify API Access
Test that your site allows API access:
```
https://your-wordpress-site.com/wp-json/wp/v2/posts?per_page=1
```

### 2. Local Development Setup

#### Create Environment File
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your credentials:
   ```env
   REACT_APP_WORDPRESS_SITE_URL=https://your-wordpress-site.com
   REACT_APP_WORDPRESS_USERNAME=your-wordpress-username
   REACT_APP_WORDPRESS_APP_PASSWORD=your-application-password
   ```

#### Restart Development Server
```bash
npm start
```

### 3. Production Deployment (Vercel)

#### Set Environment Variables
1. Go to your Vercel project dashboard
2. Go to **Settings → Environment Variables**
3. Add these variables:
   - `REACT_APP_WORDPRESS_SITE_URL`: Your WordPress site URL
   - `REACT_APP_WORDPRESS_USERNAME`: Your WordPress username
   - `REACT_APP_WORDPRESS_APP_PASSWORD`: Your application password

#### Redeploy
Vercel will automatically redeploy with the new environment variables.

## Configuration Options

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_WORDPRESS_SITE_URL` | Your WordPress site URL | `https://myblog.com` |
| `REACT_APP_WORDPRESS_USERNAME` | WordPress username | `admin` |
| `REACT_APP_WORDPRESS_APP_PASSWORD` | Application password | `abcd efgh ijkl mnop` |
| `REACT_APP_WORDPRESS_POSTS_PER_PAGE` | Posts per page (optional) | `10` |
| `REACT_APP_WORDPRESS_EXCERPT_LENGTH` | Excerpt length (optional) | `150` |

### File-based Configuration (Alternative)

If you prefer not to use environment variables, you can edit `src/config/wordpress.js` directly:

```javascript
const WORDPRESS_CONFIG = {
  SITE_URL: 'https://your-wordpress-site.com',
  USERNAME: 'your-username',
  APP_PASSWORD: 'your-application-password',
  // ... other settings
};
```

## Testing Your Integration

### 1. Local Testing
1. Start your development server: `npm start`
2. Navigate to `http://localhost:3000/blog`
3. You should see your WordPress posts

### 2. Production Testing
1. Deploy to Vercel
2. Visit your production site `/blog` page
3. Verify posts are displaying correctly

## Troubleshooting

### Common Issues

#### "Failed to fetch" Error
- Check your WordPress site URL is correct
- Verify the REST API is enabled on your WordPress site
- Ensure CORS is properly configured if needed

#### "401 Unauthorized" Error
- Verify your username and application password are correct
- Ensure the user has proper permissions in WordPress
- Check that the application password hasn't been revoked

#### "No posts found" Message
- Verify your WordPress site has published posts
- Check that posts are set to "Published" status
- Ensure the posts are not password protected

#### CORS Issues
If you get CORS errors, add this to your WordPress site's functions.php:

```php
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
}, 15);
```

### Debug Mode

To enable debug logging, temporarily add this to your WordPress config:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

## Security Best Practices

1. **Use Application Passwords**: Never use your main WordPress password
2. **Limit Permissions**: Create a dedicated user with just the necessary permissions
3. **Regular Rotation**: Rotate application passwords periodically
4. **HTTPS Only**: Ensure your WordPress site uses HTTPS
5. **Monitor Access**: Check your WordPress logs for API access patterns

## Support

If you encounter issues:

1. Check the browser console for error messages
2. Verify your WordPress site is accessible
3. Test the API endpoints directly in your browser
4. Review WordPress REST API documentation

## WordPress REST API Documentation

- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Application Passwords Guide](https://wordpress.org/support/article/application-passwords/)
- [REST API Authentication](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/)