# Project rules for Claude

This is an Angular + Tailwind project deployed to GitHub Pages. Follow these rules on every task.

## Stack

- Angular 17+ with standalone components and signals
- Tailwind CSS for all styling (no SCSS, no inline styles)
- TypeScript strict mode
- Routing via `provideRouter` in `app.config.ts`
- Pages live in `src/app/pages/<page-name>/<page-name>.component.ts`

## How you receive tasks

A manager creates an Issue describing the change, then comments `@claude implement this`.
You implement the change end-to-end: code, routing, build verification, and open a PR.

## Workflow rules

1. Always create a new branch named `claude/issue-<number>-<slug>`.
2. Never commit directly to `main`.
3. Run `npm run build` before opening the PR. If it fails, fix it before pushing.
4. Run `npm run lint` if a script exists. Fix all lint errors.
5. Keep PRs focused on the single Issue. Do not refactor unrelated code.
6. If the task is ambiguous, ask a clarifying question in the Issue comment instead of guessing.

## CRITICAL: PR description format

Every PR you open MUST contain this block in the body, listing every route the change visually affects:

```
<!-- AFFECTED_ROUTES -->
- /
- /about
<!-- /AFFECTED_ROUTES -->
```

Rules:
- Use leading slash, no trailing slash.
- Home page is `/`.
- If you changed a shared component (in `src/app/shared/` or global styles), list ALL existing routes.
- If the change is non-visual (refactor, build config), put a single line `- none`.

The screenshots workflow parses this block and only renders the listed pages. Wrong list = wrong screenshots = blocked review.

## Routing convention

A page at `src/app/pages/about/about.component.ts` is reachable at `/about`.
A page at `src/app/pages/contact/form/form.component.ts` is reachable at `/contact/form`.
Always register routes in `src/app/app.routes.ts`.

## Styling rules

- Use Tailwind utility classes directly in templates.
- Do not write custom CSS unless absolutely necessary.
- Use semantic HTML (`<main>`, `<nav>`, `<article>`).
- Mobile-first: design for 375px width, then enhance with `md:` and `lg:` breakpoints.

## Don't

- Do not change `angular.json`, `tsconfig.json`, or `package.json` unless the Issue explicitly requests it.
- Do not add new dependencies without justification in the PR description.
- Do not commit secrets, API keys, or `.env` files.
- Do not change files in `.github/workflows/` unless the Issue is about the pipeline itself.

## Build & deploy notes

- The site is deployed to `https://<username>.github.io/test-claude-agent/`.
- Production build uses `--base-href "/test-claude-agent/"` (handled by the deploy workflow).
- For local dev and CI screenshots, base-href is `/`.
