# HYDRATEST — Skin Diagnostic Microsite

A premium, minimal skincare diagnostic experience. Customers enter their HYDRATEST hydration % and oil level readings and receive personalised skin profiles, routines, and ingredient recommendations.

---

## Project Structure

```
hydratest/
├── index.html              ← Home / diagnostic form
├── results/
│   └── index.html          ← Results page (reads from sessionStorage)
├── src/
│   ├── data/
│   │   └── skinData.js     ← All 20 skin combinations (single source of truth)
│   ├── pages/
│   │   ├── home.js         ← Form logic + routing
│   │   └── results.js      ← Results rendering
│   └── styles/
│       ├── global.css      ← Shared tokens, logo, utilities
│       ├── home.css        ← Home page styles
│       └── results.css     ← Results page styles
├── netlify.toml            ← Netlify config + redirects
├── vercel.json             ← Vercel config + redirects
└── README.md
```

---

## How It Works

1. User enters hydration % and selects oil level (1–5 bars) on the home page
2. JavaScript maps those to a skin profile key (e.g. `normal_3`)
3. Readings are stored in `sessionStorage`
4. User is redirected to `/results/`
5. Results page reads from `sessionStorage`, looks up the profile in `skinData.js`, and renders the full diagnostic

---

## Skin Combination Logic

| Hydration Key | Range   |
|---------------|---------|
| `dehydrated`  | < 31%   |
| `dry`         | 32–36%  |
| `normal`      | 37–41%  |
| `high`        | > 41%   |

| Oil Key | Level        |
|---------|--------------|
| `1`     | Low          |
| `2`     | Medium       |
| `3`     | Normal       |
| `4`     | Normal/High  |
| `5`     | High         |

This produces 20 unique profiles (4 hydration × 5 oil levels), each defined in `src/data/skinData.js`.

---

## Adding or Updating Skin Profiles

All content lives in **`src/data/skinData.js`** — edit the relevant key's object:

```js
normal_3: {
  condition:      "Perfectly Balanced",
  story:          "...",
  aim:            "...",
  note:           "...",
  ingredients:    ["Vitamin C", "Retinol", ...],
  ingredientRoles:["Brightening", "Anti-Ageing", ...],
  routine: [
    { step: "Cleanse", name: "...", desc: "..." },
    ...
  ],
}
```

The HTML and JS pages never need to change for content updates.

---

## Deploying to Netlify

1. Push this folder to a GitHub repository
2. Connect the repo in Netlify → **New site from Git**
3. Build command: *(leave blank — static site)*
4. Publish directory: `.`
5. Deploy — the `netlify.toml` handles routing automatically

---

## Deploying to Vercel

1. Push to GitHub
2. Import in Vercel → **Add New Project**
3. Framework preset: **Other**
4. Root directory: `.`
5. Deploy — `vercel.json` handles routing automatically

---

## Local Development

No build step needed. Open with any static file server:

```bash
# Using Node (npx)
npx serve .

# Using Python
python3 -m http.server 3000
```

Then visit `http://localhost:3000`.

> ⚠️ ES modules (`type="module"`) require a real HTTP server — opening `index.html` directly in a browser via `file://` will not work.

---

## Future Expansion

- **Product recommendations**: add a `products` array to each profile in `skinData.js`
- **New pages**: create additional HTML pages and add routes to `netlify.toml` / `vercel.json`
- **Analytics**: sessionStorage readings can easily be sent to an analytics endpoint before redirect
- **CMS**: `skinData.js` can be replaced with a fetch from a headless CMS (Sanity, Contentful) if content editing needs to move out of code
