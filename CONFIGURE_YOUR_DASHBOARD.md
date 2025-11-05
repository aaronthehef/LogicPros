# Configure Your Dashboard

## Your Dashboard is Now Per-User!

The system now creates a separate dashboard for each user automatically. However, **YOUR account needs to be marked as "configured"** so you see your full dashboard with WordPress and n8n integration.

## Quick Setup - Mark Your Account as Configured

### Option 1: Via Firebase Console (Easiest)

1. **Go to Firebase Console:**
   - https://console.firebase.google.com
   - Select project: `logicprosmediaposter`

2. **Navigate to Firestore Database:**
   - Click "Firestore Database" in the left sidebar

3. **Find Your User Document:**
   - Go to the `users` collection
   - Find the document with your UID (use your email to identify it)
   - If you don't see a document yet, log in to the dashboard once to create it

4. **Edit Your User Document:**
   - Click on your user document
   - Add/edit the field: `dashboardConfigured`
   - Set value to: `true` (boolean, not string)
   - Click "Update"

5. **Done!** Refresh your dashboard and you should see the full interface

### Option 2: Via Browser Console (Quick)

1. **Log in to your dashboard** at https://logicpros.ca/dashboard

2. **Open browser developer console:**
   - Chrome/Edge: Press `F12` or `Ctrl+Shift+J`
   - Firefox: Press `F12` or `Ctrl+Shift+K`
   - Safari: Enable Dev Menu, then `Cmd+Opt+C`

3. **Paste this code** in the console:

```javascript
// Get Firebase from window
const { db, doc, updateDoc, auth } = window;

// Update your user document
const updateDashboard = async () => {
  const user = auth.currentUser;
  if (!user) {
    console.error('Not logged in');
    return;
  }

  console.log('Configuring dashboard for:', user.email);

  const userRef = doc(db, 'users', user.uid);
  await updateDoc(userRef, {
    dashboardConfigured: true
  });

  console.log('✅ Dashboard configured! Refresh the page.');
};

updateDashboard();
```

4. **Press Enter** and wait for the success message

5. **Refresh the page** - you should now see your full dashboard!

## How It Works Now

### For YOUR Account (After Configuration):
```
You log in
    ↓
System checks: users/{your-uid}/dashboardConfigured
    ↓
dashboardConfigured === true
    ↓
✅ Full dashboard with WordPress + n8n
```

### For NEW Users:
```
New user logs in
    ↓
System creates: users/{their-uid}
    ↓
dashboardConfigured === false (default)
    ↓
📧 Blank dashboard: "Contact us to set up"
```

### When They Return:
```
User logs in again
    ↓
System checks: users/{their-uid}/dashboardConfigured
    ↓
Still false
    ↓
📧 Same blank dashboard (persistent!)
```

## Configuring Client Dashboards

When you want to give a client full dashboard access:

1. **Get their UID:**
   - Firebase Console → Authentication → Find their email
   - Copy their User UID

2. **Update their user document:**
   - Firebase Console → Firestore Database
   - Navigate to `users/{their-uid}`
   - Set `dashboardConfigured` to `true`

3. **They're set!** Next time they log in, they'll see the full dashboard

### What Each User Gets:

**Unconfigured Dashboard (`dashboardConfigured: false`):**
- 🚀 Welcome message
- 📞 Contact information
- ❌ No WordPress access
- ❌ No n8n workflow access
- ❌ No post history

**Configured Dashboard (`dashboardConfigured: true`):**
- ✅ Full social media poster
- ✅ WordPress integration
- ✅ n8n AI generation
- ✅ Post history
- ✅ All features enabled

## User Data Structure

Each user gets their own document in Firestore:

```
/users/{userId}
  - email: "user@example.com"
  - displayName: "User Name"
  - photoURL: "https://..."
  - dashboardConfigured: false  // ← This controls everything!
  - createdAt: timestamp
  - lastLogin: timestamp

/users/{userId}/posts/{postId}
  - type: "social" | "blog"
  - platform: "Instagram", etc.
  - content: "..."
  - createdAt: timestamp
  - ... (all post data)
```

## Complete Isolation

✅ **Each user has their own:**
- Dashboard configuration
- Post history (in `users/{uid}/posts/`)
- WordPress credentials (when configured)
- n8n workflow settings (when configured)

✅ **Users CANNOT see:**
- Other users' posts
- Other users' WordPress sites
- Other users' data

✅ **You control:**
- Who has full dashboard access
- Who sees the blank "contact us" page
- All configurations via Firestore

## Troubleshooting

### Issue: I'm seeing the blank dashboard
**Solution:** Set `dashboardConfigured: true` in your user document

### Issue: Client still sees blank dashboard after I configured them
**Solution:**
1. Check the user UID matches
2. Ensure `dashboardConfigured` is boolean `true`, not string `"true"`
3. Have them log out and log back in

### Issue: New users aren't creating profiles
**Solution:** Check Firestore security rules allow user document creation

## Next Steps

1. ✅ **Configure your account** using Option 1 or 2 above
2. 🧪 **Test with a different Google account** to see the blank dashboard
3. 🎨 **Customize BlankDashboardPage.js** if you want different messaging
4. 🚀 **Configure client dashboards** when you're ready to onboard them

Your dashboard system is now production-ready with proper per-user isolation! 🎉
