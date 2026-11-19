# Muhammad Sajid — Premium Dark Developer Portfolio

A fully responsive single-page portfolio built with **React, TypeScript, Vite and CSS**, featuring original CSS-based illustrations, project filters, mobile navigation, accessible buttons and a contact section.

## Sections

- Hero and UAE job-availability banner
- About and verified development/deployment experience
- Seven curated projects with company/personal/freelance categorization
- Frontend, backend, database and deployment skills
- Experience timeline and ongoing BCA education
- Engineering interests and contact links

## Run locally

Install **Node.js 22.12+** (or an otherwise supported Vite Node version) and npm.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually http://localhost:5173).

Build for deployment:

```bash
npm run build
npm run preview
```

> The project was packaged in an environment where dependency installation timed out. The production build has **not** been verified here; run the above commands and fix any locally reported issues before deployment.

## Where to edit content

| What | File |
| --- | --- |
| Projects, descriptions, stacks and GitHub links | `src/data.ts` |
| Name, introduction, experience, skills presentation, email and social links | `src/App.tsx` |
| Layout, design, mobile responsiveness and transitions | `src/styles.css` |
| Site title, meta and social preview | `index.html` |
| Favicon | `public/favicon.svg` |

Project classifications are explicit: **company work** (Allora, Travel Agency, SPA Employee Dashboard), **freelance** (Tahfeel), **independent/private** (SmartDukaan), and **portfolio projects** (WorkflowPro, HiMate). Do not imply that company-owned repositories were solo projects.

### Important before publishing

1. **Travel Agency public repository contains potentially active exposed credentials and insecure admin bootstrap logic.** Rotate/revoke affected credentials, fix the source, and remove secrets from Git history. Until reviewed, consider removing the GitHub source link from `src/data.ts` or linking to a company-approved case study instead. Hiding the link in this portfolio does **not** make that repo private.
2. Ensure appropriate permission to display company and freelance project names, repositories and client assets.
3. Replace any text that is outdated (employment dates, qualifications or location).
4. Contact uses `mailto:` and a copy-email button—no backend, email delivery API or contact form is included.
5. The old CV is not linked because it requires updating. Add a `public/resume.pdf` only after you finalize and verify your new CV, then add a download button pointing to `/resume.pdf`.
6. Visual project graphics are **conceptual illustrations**, not screenshots or claims about live product interfaces.

## GitHub upload — recommended approach

1. Open GitHub and create a **new public repository** named `muhammad-sajid-portfolio` (empty: don't add README or license).
2. Unzip this project locally and open the unzipped folder in VS Code.
3. Use the VS Code terminal in the folder:

```bash
git init
git add .
git commit -m "feat: launch developer portfolio"
git branch -M main
git remote add origin https://github.com/Muhammedsajid10/muhammad-sajid-portfolio.git
git push -u origin main
```

If Git requests authentication, use Git Credential Manager or another supported GitHub authentication method; never paste your password or tokens into source files.

## Deploy to Vercel

1. Open [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import `Muhammedsajid10/muhammad-sajid-portfolio`.
3. Keep **Root Directory** `/` and choose **Vite** as the framework preset.
4. Set **Build Command** to `npm run build` and **Output Directory** to `dist` if Vercel does not auto-detect them.
5. Click **Deploy**. After success, Vercel provides a `*.vercel.app` domain.
6. Add the deployed URL to your GitHub profile Website field and LinkedIn/CV.

The included `vercel.json` rewrites routes to `index.html` for SPA-compatible direct visits.

## Maintenance

After local edits:

```bash
git add .
git commit -m "docs: refresh portfolio content"
git push
```

Connected Vercel Git repositories deploy new pushes automatically.
