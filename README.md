# DesignLama

Portfolio site for [www.designlama.nl](https://www.designlama.nl), built with **Vite + React** (plain JavaScript).

## Develop

```bash
npm install
cp .env.example .env   # set VITE_BIRTH_DATE=YYYY-MM-DD for correct age
npm run dev
```

`VITE_BIRTH_DATE` is required for the About section age. Without it, age falls back to `0`.

## Test

```bash
npm test
```

## Build

```bash
npm run build
npm run preview
```

Optional env:

- `VITE_BIRTH_DATE` — ISO date (`YYYY-MM-DD`) used only to compute displayed age
- `BASE_PATH` — Vite public base when hosting under a subdirectory (e.g. `/repo-name/`)

## Deploy (GitHub Pages)

Pushes to `master` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes to the **`gh-pages`** branch (and tries the official Pages artifact deploy).

Add repository secret **`VITE_BIRTH_DATE`** (`YYYY-MM-DD`) so production builds show the correct age.

### Fix a blank / broken site

The live site must serve the **built** files, not the Vite source `index.html`.

In the repo on GitHub:

1. Open **Settings → Pages**
2. Set **Source** to one of:
   - **Deploy from a branch** → branch **`gh-pages`** → folder **/ (root)**  
   - or **GitHub Actions**
3. Save, wait a minute, then hard-refresh https://www.designlama.nl

If Actions never ran, open the **Actions** tab and re-run **Deploy to GitHub Pages**.
