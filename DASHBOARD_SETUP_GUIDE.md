# Dashboard Setup Guide

## System Overview

Your dashboard system has been upgraded to a **multi-business/multi-tenant architecture**. This means:

- ✅ Each user gets their own isolated dashboard
- ✅ User data is completely separate and private
- ✅ Each business can have custom WordPress and n8n workflow configurations
- ✅ No user can access another user's data

## How It Works

### 1. User Authentication Flow

```
User Logs In
    ↓
authService checks Firebase Authentication
    ↓
businessService checks if user has businesses
    ↓
    ├─→ HAS Business → MultiBusinessDashboardPage (Full Dashboard)
    └─→ NO Business → BlankDashboardPage (Setup Required Message)
```

### 2. Database Structure

#### Firestore Collections:

```
/users/{userId}
  - profile: { email, displayName, photoURL }
  - businesses: [businessId1, businessId2, ...]  // Array of business IDs
  - currentBusiness: businessId  // Currently active business
  - preferences: { defaultBusiness: businessId }
  - createdAt: timestamp

/businesses/{businessId}
  - name: "Business Name"
  - domain: "example.com"
  - status: "active" | "setup"
  - wordpressConfig:
      - siteUrl: "https://wordpress.example.com"
      - username: "wordpress_username"
      - appPassword: "xxxx xxxx xxxx xxxx"
      - categories: []
      - defaultAuthor: 0
  - branding:
      - logo: "url"
      - primaryColor: "#1F7CFF"
      - secondaryColor: "#FFC600"
      - companyName: "Business Name"
  - users: [userId1, userId2, ...]  // Users who have access
  - roles:
      - {userId1}:
          - role: "admin" | "editor" | "viewer"
          - permissions: ["manage_business", "manage_wordpress", ...]
          - joinedAt: timestamp
  - subscription:
      - plan: "basic" | "pro" | "enterprise"
      - limits:
          - postsPerMonth: 50
          - users: 5
          - wordpressSites: 1
  - createdAt: timestamp
  - createdBy: userId
  - updatedAt: timestamp

/businesses/{businessId}/posts/{postId}
  - type: "social" | "blog"
  - platform: "Instagram" | "Facebook" | "Twitter/X" | "LinkedIn"
  - content: "Post content..."
  - imageUrls: ["url1", "url2"]
  - status: "draft" | "published"
  - wordpressPostId: 123  // WordPress post ID if published
  - publishedUrl: "https://..."
  - createdAt: timestamp
  - createdBy: userId

/businesses/{businessId}/generatedPosts/{postId}
  - Generated AI posts from n8n workflow
  - Same structure as posts but specifically for AI-generated content
```

## Your Setup (LogicPros Admin Account)

### Current Status:
- ✅ You are logged in with your Google account
- ✅ Your account should have a business record in Firestore
- ✅ Your business is configured with:
  - WordPress site: `https://wordpressblog.logicpros.ca`
  - n8n workflow: `https://n8n.logicpros.ca/webhook/3f8e4aac-da20-42e1-ad5d-3aa49de2c98a`

### To Check Your Business Record:

1. Go to Firebase Console: https://console.firebase.google.com
2. Select project: `logicprosmediaposter`
3. Go to Firestore Database
4. Find your user document in `/users/{your-uid}`
5. Check the `businesses` array - it should contain your business ID

## Setting Up New Users

When someone new logs in (like your client), they will see the **BlankDashboardPage** with a message that their account needs to be configured.

### Steps to Set Up a New User's Dashboard:

#### Option 1: Manual Setup via Firebase Console

1. **Get the new user's UID:**
   - User logs in for the first time
   - Go to Firebase Console → Authentication
   - Find the user and copy their UID

2. **Create a business for them:**
   - Go to Firestore Database
   - Create a new document in `/businesses` collection:
   ```json
   {
     "name": "Client Business Name",
     "domain": "client-domain.com",
     "status": "active",
     "wordpressConfig": {
       "siteUrl": "https://client-wordpress-site.com",
       "username": "client_wp_username",
       "appPassword": "xxxx xxxx xxxx xxxx",
       "categories": [],
       "defaultAuthor": 1
     },
     "branding": {
       "logo": "",
       "primaryColor": "#1F7CFF",
       "secondaryColor": "#FFC600",
       "companyName": "Client Business Name"
     },
     "users": ["new-user-uid"],
     "roles": {
       "new-user-uid": {
         "role": "admin",
         "permissions": ["manage_business", "manage_users", "manage_wordpress", "view_analytics"],
         "joinedAt": "2025-01-05T00:00:00Z"
       }
     },
     "subscription": {
       "plan": "pro",
       "limits": {
         "postsPerMonth": 100,
         "users": 10,
         "wordpressSites": 3
       }
     },
     "createdAt": "2025-01-05T00:00:00Z",
     "createdBy": "your-uid",
     "updatedAt": "2025-01-05T00:00:00Z"
   }
   ```

3. **Update the user's document:**
   - Go to `/users/{new-user-uid}`
   - Update the document:
   ```json
   {
     "businesses": ["new-business-id"],
     "currentBusiness": "new-business-id",
     "preferences": {
       "defaultBusiness": "new-business-id"
     }
   }
   ```

#### Option 2: Programmatic Setup (Recommended for Scale)

Create an admin dashboard page where you can:
- View all users
- Create businesses
- Assign users to businesses
- Configure WordPress and n8n settings

This would use the `BusinessManagementService` methods already in your code:
- `BusinessManagementService.createBusiness()`
- `BusinessManagementService.configureWordPress()`
- `BusinessManagementService.addUserToBusiness()`

## n8n Workflow Configuration

Your n8n workflow endpoint is currently hardcoded in `MultiBusinessDashboardPage.js`:

```javascript
const response = await fetch('https://n8n.logicpros.ca/webhook/3f8e4aac-da20-42e1-ad5d-3aa49de2c98a', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    action: 'generate_posts',
    userId: authState.user?.uid,
    businessId: authState.currentBusiness?.businessId,
    timestamp: new Date().toISOString(),
    platforms: posts.map(p => p.platform)
  })
});
```

### To Support Multiple n8n Workflows (Per Business):

Add to the business document:
```json
{
  "n8nConfig": {
    "webhookUrl": "https://n8n.logicpros.ca/webhook/{unique-id}",
    "apiKey": "optional-api-key"
  }
}
```

Then update the code to use:
```javascript
const n8nUrl = authState.currentBusiness?.business?.n8nConfig?.webhookUrl ||
               'https://n8n.logicpros.ca/webhook/3f8e4aac-da20-42e1-ad5d-3aa49de2c98a';
```

## Testing the System

### Test as Your Account (Should Work):
1. Log in with your Google account
2. You should see the full dashboard with WordPress integration
3. You can generate AI posts and publish to WordPress

### Test as New User (Will See Blank Dashboard):
1. Create a test Google account or use incognito mode
2. Log in with the new account
3. You should see the BlankDashboardPage with setup message
4. After you configure their business in Firestore, they'll see the full dashboard

## Security & Privacy

✅ **User Isolation:** Each user only sees their own businesses
✅ **Data Separation:** Posts are stored under `/businesses/{businessId}/posts`
✅ **Role-Based Access:** Permissions control what each user can do
✅ **WordPress Credentials:** Stored per-business, not shared
✅ **Firestore Rules:** Enforced at the database level (see `public/firestore.rules`)

## Common Issues & Solutions

### Issue: "My dashboard is blank after login"
**Solution:** Check if your user document has a `businesses` array with a valid business ID.

### Issue: "WordPress posts not showing up"
**Solution:** Check the `wordpressConfig` in your business document is correct.

### Issue: "n8n workflow not generating posts"
**Solution:**
- Verify the webhook URL is correct
- Check that n8n workflow is running
- Check that it writes to `/businesses/{businessId}/generatedPosts`

### Issue: "New user can't access dashboard"
**Solution:** Create a business for them and add their UID to the `businesses` array in their user document.

## Next Steps

1. ✅ **BlankDashboardPage is now created** - New users will see a friendly message
2. 📝 **Document your business ID** - Find it in Firebase Console
3. 🔧 **Test with a new account** - Verify the blank dashboard shows correctly
4. 🎨 **Create admin tools** - Build an interface to manage users and businesses
5. 🚀 **Scale** - Set up new clients with their own isolated dashboards

## Questions?

Contact: support@logicpros.ca
