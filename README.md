# Priyanshi Shah Portfolio

A responsive React and Vite portfolio built from resume-verified content.

## Local development

```powershell
npm install
npm run dev
```

## Validation

```powershell
npm run lint
npm run build
```

## Hosting

The site deploys automatically to GitHub Pages on every push to `main`.

- Workflow: `.github/workflows/deploy-pages.yml`
- Production URL: `https://priyanshii.com/`
- Dependency and GitHub Actions updates: `.github/dependabot.yml`

The project is also ready for Cloudflare Pages when a Cloudflare account is connected:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `24`
- Security headers: `public/_headers`
- Single-page routing: `public/_redirects`

Connect this repository to Cloudflare Pages for automatic preview and production deployments. Cloudflare provides managed HTTPS, CDN caching, DDoS protection, deployment rollbacks, and custom-domain support on the free plan.

## Updating content

- Edit portfolio copy, links, skills, projects, and experience in `src/data/portfolio.js`.
- Replace `public/Priyanshi_Shah_Resume.pdf` to update the downloadable resume.
- Replace `public/priyanshi-shah.jpg` to update the profile photo.
- Adjust the theme tokens and responsive layout styles in `src/index.css`.
- Edit the introduction and section layout in `src/App.jsx`. All sections are on one page with hash navigation; `#resume` remains an alias for `#experience`.
- Company and school logos use the assets referenced in `src/data/portfolio.js`. Icons are inline SVGs; no external icon service is required.
- The header color picker changes the accent only (brown, purple, rose, teal, or blue). It remembers the choice in browser local storage under `portfolio-accent`; blocked storage displays a notice and still allows changes for the current visit.
