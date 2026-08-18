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
- Adjust the Tailwind theme tokens in `src/index.css` and utility classes in `src/App.jsx`.
