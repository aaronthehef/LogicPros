# SEO Issues — logicpros.ca
Source: Semrush audit · Score: 27/100 · Date: 2026-03-10

---

## Priority 1 — Fix in code (high impact, straightforward)

### 1. H1 missing from pre-rendered HTML
- **Problem:** The homepage H1 is rendered by React JS — Googlebot sees no H1 in the static HTML
- **Fix:** Inject the H1 into the pre-rendered `build/index.html` via `scripts/prerender.js`, same way title/meta are injected
- **Target:** "Web Design Fredericton — Websites That Actually Work" (or similar)

### 2. Title too long — homepage
- **Problem:** 76 characters. Google truncates at ~60.
- **Current:** `Web Design Fredericton | Professional Websites for NB Businesses | LogicPros`
- **Fix:** Shorten to ≤60 chars. Example: `Web Design Fredericton | LogicPros` (35 chars)
- **File:** `scripts/prerender.js` route `''`

### 3. Meta description too long — homepage
- **Problem:** 184 characters. Ideal is 100–130.
- **Fix:** Trim to one clear sentence. Example: `Professional web design for Fredericton businesses. Custom websites with local SEO that get you found on Google.` (114 chars)
- **File:** `scripts/prerender.js` route `''`

### 4. H2–H6 structure missing from pre-rendered HTML
- **Problem:** Semrush sees 0 H2s, 0 H3s — all headings are inside the React bundle, invisible to crawlers
- **Fix:** Same approach as H1 — inject key headings into static HTML in prerender script
- **Note:** Lower priority than H1 but same root cause

### 5. Content too thin — homepage (241 words)
- **Problem:** Semrush wants 500+ words. Pre-rendered HTML has almost no body text.
- **Fix:** Add a visible text block to the pre-rendered HTML (hidden or visible) with core copy summarizing services
- **Alternative:** Ensure the homepage React component has enough crawlable text

---

## Priority 2 — Mobile friendliness (score 1/3)
- **Problem:** Semrush flagged tiny text, missing responsive layouts, or hard-to-tap buttons
- **Note:** FCP is 0.2s and TTFB is 0.001s — the site loads fast, so this is likely a layout/viewport issue not a performance issue
- **Fix:** Audit on real mobile device — check font sizes < 16px, button tap targets < 48px, horizontal scrolling
- **Tool:** Google Search Console → Mobile Usability report (more reliable than Semrush for this)

---

## Priority 3 — Social media links missing
Semrush flagged: Facebook, Instagram, LinkedIn, YouTube, X (Twitter)

- **LinkedIn:** logicpros already has a LinkedIn — add link to footer
- **Facebook / Instagram:** Only add if actively posting — a dead linked profile is worse than none
- **YouTube / X:** Skip for now, no active presence

---

## Not real issues (Semrush crawl artifacts)

| Issue | Why it's not real |
|-------|------------------|
| Performance score "unable to retrieve" | FCP 0.2s, TTFB 0.001s, Speed Index 2.6s — site is fast, Semrush API just couldn't load the React app |
| LCP / TBT / INP / DOM Size "unable to retrieve" | Same — Semrush's headless browser likely hit the React shell before JS executed |
| Off-page SEO 0% | Site is new, expected |
| Backlinks all from crawfordsplumbing.ca | That's a client site — legitimate backlinks, low authority but real |

---

## Tracking

| # | Issue | Status |
|---|-------|--------|
| 1 | H1 missing in pre-rendered HTML | ⬜ todo |
| 2 | Title too long | ⬜ todo |
| 3 | Meta description too long | ⬜ todo |
| 4 | H2–H6 missing in pre-rendered HTML | ⬜ todo |
| 5 | Content too thin | ⬜ todo |
| 6 | Mobile friendliness | ⬜ investigate |
| 7 | LinkedIn link in footer | ⬜ todo |
