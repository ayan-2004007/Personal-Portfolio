# Personal Portfolio

Source code for my personal developer portfolio. Built with `Next.js` (static export), `React`, `Tailwind CSS`, `GSAP`, `Framer Motion` and `Lenis`. It covers my background, experience, expertise, featured projects with live previews, and contact details, in a clean, responsive design with smooth animations and page transitions.

<!-- > 🔗 **Live Site:** [ayanhere.netlify.app](https://ayanhere.netlify.app) -->

> 🔗 **Live Site:** [ayandev.site](https://ayandev.site)
<hr>

## Tech Stack

- **Framework:** Next.js 16 (App Router, `output: "export"`)
- **UI:** React 19, Tailwind CSS 4
- **Animation:** GSAP, Framer Motion, Lenis (smooth scroll)
- **SEO:** metadata API, `sitemap.js`, `robots.js`, `manifest.js`, Open Graph image
- **Hosting:** Netlify (auto-deploys from GitHub)

## Project Structure

```
Next/
├── app/          # routes, layout, sitemap, robots, manifest
├── components/   # UI sections and transitions
├── data/         # site, project, experience and expertise content
├── public/       # static assets (images, resume, video)
└── scripts/      # post-build helper (flatten-segments.mjs)
```

## Getting Started

```bash
cd Next
npm install
npm run dev       # http://localhost:3000
```

### Build

```bash
npm run build     # static site generated in Next/out
npm run preview   # serve the built output locally
```

## Deployment (Netlify)

| Setting | Value |
| --- | --- |
| Base directory | `Next` |
| Build command | `npm run build` |
| Publish directory | `Next/out` |
| Production branch | `master` |
| Env var | `NODE_VERSION=20` |

## Contact

Open to opportunities and collaborations. Reach me through the contact page on the live site.
