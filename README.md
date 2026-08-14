# Darrell Cheng — Portfolio

Personal site for **Darrell Cheng**, senior full-stack developer. Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Local

```bash
npm install
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173).

```bash
npm run build
npm run preview
```

## Edit content

Copy and experience live in one file so the UI stays dumb:

| Path | What to change |
|------|----------------|
| `src/data/content.ts` | Name, contact, skills, jobs, projects |
| `src/types/index.ts` | Shapes for that data |
| `src/components/sections/` | Page sections |
| `src/components/layout/` | Header / footer |
| `public/Darrell_Cheng_Resume.pdf` | Downloadable resume |

## Go live (recommended)

**Vercel** is the simplest host for this Vite app, and it is what I would use for a custom domain.

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) (framework: Vite).
3. After the first deploy, open the project → **Settings → Domains**.

### Domain

`darrell-cheng-porfolio.dev` works, but a shorter name reads better on a resume:

- `darrellcheng.dev` (best)
- `cheng.dev`
- `darrell-cheng.dev`

Buy the name at [Porkbun](https://porkbun.com) or [Namecheap](https://www.namecheap.com), then in Vercel add the domain and copy the DNS records they show (usually an A record and a CNAME for `www`). HTTPS is automatic.

**GitHub Pages** is a free alternative (`username.github.io/repo`). For a custom `.dev` domain, Vercel or Netlify is less friction with Vite.

## Stack

- Vite 6 + React 18 + TypeScript
- Tailwind CSS 3
- Lucide icons
