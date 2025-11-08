# Firebase Anti-Repetition Integration Guide

This guide shows you how to integrate Firebase with your Polish Implementation Agent workflow to prevent repetitive content by checking previous posts.

## Overview

The Polish Agent now accepts a `recentPosts` parameter containing the last 3-5 published posts. When provided, it will:
- Analyze the endings/CTAs of recent posts
- Identify which CTA pattern was used
- Check for repeated phrases like "When you're ready to move, we move"
- Deliberately choose a different CTA pattern
- Avoid repeating similar hooks or metaphors

## Workflow Setup (n8n or similar automation platform)

### Step 1: Query Firebase for Recent Posts

**Before the Polish Agent runs**, add a Firebase Query node:

```javascript
// Firebase Query Configuration
Collection: "posts" (or your posts collection name)
Filter: status == "published"
Order By: publishedDate (descending)
Limit: 5
```

**Firebase REST API Example:**
```
GET /posts.json?orderBy="publishedDate"&limitToFirst=5
```

### Step 2: Extract Post Content

Add a Function node to extract just the content endings:

```javascript
// Function Node: Extract Recent Post Endings
const recentPosts = [];

for (const post of items[0].json.posts) {
  // Extract last 200 characters (where CTAs usually are)
  const ending = post.content.slice(-200);

  recentPosts.push({
    title: post.title,
    ending: ending,
    fullContent: post.content, // Optional: include full content for deeper analysis
    publishedDate: post.publishedDate
  });
}

return [{
  json: {
    recentPosts: recentPosts
  }
}];
```

### Step 3: Format for Polish Agent Input

Pass the recent posts to your Polish Agent as part of the input data:

```javascript
// Merge with other Polish Agent inputs
{
  "originalPost": "{{ $json.originalPost }}",
  "originalTitle": "{{ $json.originalTitle }}",
  "proposedTitle": "{{ $json.proposedTitle }}",
  "hookSuggestions": "{{ $json.hookSuggestions }}",
  "shareabilitySuggestions": "{{ $json.shareabilitySuggestions }}",
  "memorabilitySuggestions": "{{ $json.memorabilitySuggestions }}",
  "authenticitySuggestions": "{{ $json.authenticitySuggestions }}",
  "recentPosts": "{{ $json.recentPosts }}" // ← Add this line
}
```

### Step 4: Format Recent Posts as String (for prompt injection)

The Polish Agent prompt expects recent posts as readable text. Format them like this:

```javascript
// Function Node: Format Recent Posts for Prompt
const posts = items[0].json.recentPosts;

let formattedPosts = "Recent Posts:\n\n";

posts.forEach((post, index) => {
  formattedPosts += `Post ${index + 1}: "${post.title}"\n`;
  formattedPosts += `Ending: "${post.ending}"\n\n`;
});

return [{
  json: {
    recentPostsFormatted: formattedPosts
  }
}];
```

**Example Output:**
```
Recent Posts:

Post 1: "Why Your Backups Probably Don't Work"
Ending: "Test your backups today. If you can't restore a file in under 10 minutes, give us a shout. We're a New Brunswick company that answers in 3 rings and fixes IT emergencies within 1 hour — not 'we'll get to it in 48 hours' nonsense. When you're ready to move, we move."

Post 2: "The Real Cost of IT Downtime"
Ending: "Calculate your downtime costs using the formula above. If the number scares you, that's normal. Give us a shout. We're not the IT company that disappears when stuff breaks. When you're ready to move, we move."

Post 3: "Password Managers: Stop Making Excuses"
Ending: "Set up a password manager this week. If you need help getting your team onboarded, we're here. Local New Brunswick company, we actually answer the phone. When you're ready to move, we move."
```

## Complete n8n Workflow Example

```
[1. Trigger: New Post Approved]
          ↓
[2. Firebase Query: Get Last 5 Posts]
          ↓
[3. Function: Extract Post Endings]
          ↓
[4. Function: Format for Prompt]
          ↓
[5. Polish Implementation Agent (with recentPosts)]
          ↓
[6. Save to Firebase]
          ↓
[7. Publish]
```

## Firebase Collection Structure

Your Firebase posts collection should include:

```json
{
  "posts": {
    "post-id-123": {
      "title": "Why Your Backups Probably Don't Work",
      "content": "Full blog post content here...",
      "status": "published",
      "publishedDate": "2025-11-01T10:30:00Z",
      "category": "managed-it",
      "ctaPattern": "A" // Optional: Track which pattern was used
    }
  }
}
```

**Optional Enhancement:** Store which CTA pattern was used (A, B, C, D, or E) in Firebase, making it even easier to ensure rotation.

## Testing the Anti-Repetition Logic

### Test Case 1: Detect "When you're ready to move, we move" repetition

**Input (recentPosts):**
```
Post 1 ending: "...When you're ready to move, we move."
Post 2 ending: "...When you're ready to move, we move."
```

**Expected Output:**
Polish Agent should use Pattern B, C, D, or E (not A) and avoid the phrase "When you're ready to move, we move" entirely.

### Test Case 2: Vary CTA structures

**Input (recentPosts):**
```
Post 1: Pattern A (Test & Call)
Post 2: Pattern A (Test & Call)
Post 3: Pattern B (Question & Answer)
```

**Expected Output:**
Polish Agent should use Pattern C, D, or E to create variety.

### Test Case 3: No recent posts provided

**Input (recentPosts):** `"None provided"`

**Expected Output:**
Polish Agent can use any pattern (A-E), but should still vary over time by rotating through the options.

## Monitoring Repetition Over Time

Create a Firebase Cloud Function or n8n workflow to analyze published posts:

```javascript
// Check for repetitive endings across last 10 posts
const lastTenPosts = await firebase.collection('posts')
  .where('status', '==', 'published')
  .orderBy('publishedDate', 'desc')
  .limit(10)
  .get();

const endings = [];
const repeatedPhrases = {};

lastTenPosts.forEach(doc => {
  const content = doc.data().content;
  const ending = content.slice(-100); // Last 100 chars
  endings.push(ending);

  // Check for common repeated phrases
  if (ending.includes("When you're ready to move, we move")) {
    repeatedPhrases["ready_to_move"] = (repeatedPhrases["ready_to_move"] || 0) + 1;
  }
  if (ending.includes("Give us a shout")) {
    repeatedPhrases["give_us_shout"] = (repeatedPhrases["give_us_shout"] || 0) + 1;
  }
});

// Alert if repetition is too high
if (repeatedPhrases["ready_to_move"] > 3) {
  console.log("⚠️ WARNING: 'When you're ready to move, we move' used in 3+ of last 10 posts");
}
```

## Troubleshooting

### Issue: Polish Agent still uses repetitive CTAs
**Solution:** Check that `recentPosts` is being passed correctly. Log the input to verify the agent is receiving recent post data.

### Issue: Firebase query returns empty results
**Solution:**
- Verify collection name is correct
- Check that posts have `status: "published"` field
- Ensure `publishedDate` field exists and is properly formatted

### Issue: CTA patterns aren't rotating
**Solution:** The agent might need more explicit recent post endings. Increase the ending extraction from 200 to 300 characters to capture full CTAs.

## Advanced: Semantic Similarity Check

For even better anti-repetition, consider adding a semantic similarity check using OpenAI embeddings:

```javascript
// Generate embedding for new post CTA
const newPostCTA = newPost.content.slice(-200);
const newEmbedding = await openai.embeddings.create({
  model: "text-embedding-3-small",
  input: newPostCTA
});

// Compare with recent posts
for (const recentPost of recentPosts) {
  const recentEmbedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: recentPost.ending
  });

  const similarity = cosineSimilarity(newEmbedding, recentEmbedding);

  if (similarity > 0.85) {
    console.log(`⚠️ WARNING: New post CTA is ${similarity}% similar to recent post`);
    // Trigger regeneration with stronger anti-repetition instructions
  }
}
```

## Summary

1. **Query Firebase** before Polish Agent runs (last 5 posts)
2. **Extract endings** (last 200 characters where CTAs live)
3. **Format as readable text** for the prompt
4. **Pass as `recentPosts` parameter** to Polish Agent
5. **Agent analyzes** and deliberately chooses different CTA pattern
6. **Store CTA pattern used** (optional) in Firebase for tracking

With this setup, your Polish Agent will automatically avoid repetitive endings and keep content fresh by checking what came before.
