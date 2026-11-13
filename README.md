# DesignLama

Portfolio site for [www.designlama.nl](https://www.designlama.nl), built with **Vite + React** (plain JavaScript).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

Pushes to `master` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to the **`gh-pages`** branch (and tries the official Pages artifact deploy).

### Fix a blank / broken site

The live site must serve the **built** files, not the Vite source `index.html`.

In the repo on GitHub:

1. Open **Settings → Pages**
2. Set **Source** to one of:
   - **Deploy from a branch** → branch **`gh-pages`** → folder **/ (root)**  
   - or **GitHub Actions**
3. Save, wait a minute, then hard-refresh https://www.designlama.nl

If Actions never ran, open the **Actions** tab and re-run **Deploy to GitHub Pages**.
