# Security Setup for LogicPros Website

## ⚠️ IMPORTANT: Exposed Credentials Fixed

WordPress credentials were previously hardcoded in `api/wordpress-proxy.js` and exposed in GitHub. This has been fixed by moving them to environment variables.

## 🔒 Vercel Environment Variables Setup

**CRITICAL: You must set these environment variables in Vercel for production to work:**

1. Go to your Vercel project dashboard: https://vercel.com/dashboard
2. Navigate to your LogicPros project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

### Required Variables:

```
WORDPRESS_SITE_URL=https://wordpressblog.logicpros.ca
WORDPRESS_USERNAME=admin
WORDPRESS_APP_PASSWORD=<your-new-app-password>
```

## 🔐 WordPress Application Password - MUST REGENERATE

**Your old password was exposed in GitHub history. You MUST revoke it and create a new one:**

1. Log in to your WordPress admin at: https://wordpressblog.logicpros.ca/wp-admin/
2. Go to **Users** → **Profile**
3. Scroll down to **Application Passwords**
4. **REVOKE** the existing password (the one that was exposed: `PmWS 6lyc gPhb jm7Y dq4Q ns5t`)
5. Create a **NEW** application password with name: "Vercel Proxy"
6. Copy the new password (it will be in format: `xxxx xxxx xxxx xxxx xxxx xxxx`)
7. Update the environment variables:
   - In Vercel: Update `WORDPRESS_APP_PASSWORD` with the new password
   - In your local `.env` file: Update both `REACT_APP_WORDPRESS_APP_PASSWORD` and `WORDPRESS_APP_PASSWORD`

## 📝 Local Development

Your `.env` file is already configured but **NOT tracked in git** (it's in `.gitignore`).

After regenerating your WordPress password, update these lines in `.env`:

```
REACT_APP_WORDPRESS_APP_PASSWORD=<new-password-here>
WORDPRESS_APP_PASSWORD=<new-password-here>
```

## ✅ What Was Fixed

1. ✅ Removed hardcoded credentials from `api/wordpress-proxy.js`
2. ✅ Added environment variable support with security checks
3. ✅ Updated `.env` file for local development
4. ✅ `.env` is already in `.gitignore` (not committed to GitHub)

## 🔍 Firebase Security

Firebase API keys are already in `src/firebase.js`. These are designed to be public, but you should:

1. Verify Firebase Security Rules are properly configured
2. Go to: https://console.firebase.google.com/
3. Select your project: logicprosmediaposter
4. Go to **Firestore Database** → **Rules**
5. Ensure your rules properly restrict access (e.g., require authentication)

## 🚀 Deployment Steps

After you regenerate the WordPress password:

1. Update Vercel environment variables (as described above)
2. Redeploy your Vercel project (it will auto-deploy on the next git push, or manually trigger in Vercel dashboard)
3. Test the WordPress integration on production

## 📋 Security Checklist

- [ ] Revoked old WordPress application password
- [ ] Generated new WordPress application password
- [ ] Updated Vercel environment variables with new password
- [ ] Updated local `.env` file with new password
- [ ] Tested WordPress proxy functionality locally
- [ ] Verified Firebase security rules are properly configured
- [ ] Confirmed Vercel deployment works with new credentials
