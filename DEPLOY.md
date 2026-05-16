# Deploying to cPanel (Apache shared hosting)

This project is a static React SPA. Two scenarios:

## 1. Domain root (e.g. `https://example.com/`)

```bash
npm install
npm run build
```

Upload everything inside `dist/` (including `.htaccess`) into `public_html/`.

## 2. Subfolder (e.g. `https://example.com/news/`)

Build with the base path set:

```bash
VITE_BASE_PATH=/news/ npm run build
```

Then:

1. Upload everything inside `dist/` into `public_html/news/`.
2. Open `public_html/news/.htaccess` and change `RewriteBase /` to `RewriteBase /news/`.

That's it. Deep links and page refreshes will work — Apache rewrites unknown paths to `index.html`, and React Router takes over.

## Notes

- `VITE_BASE_PATH` controls both the asset URLs (Vite `base`) and the React Router `basename`.
- The `.htaccess` is shipped from `public/` and copied automatically into `dist/`.
- Requires `mod_rewrite` and `mod_headers` (enabled by default on standard cPanel hosts).
