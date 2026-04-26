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

## Required workflow (do all of these, in this order)

1. Create a new branch named `claude/issue-<number>-<slug>`.
2. Implement the change.
3. Run `npm run build` to verify the project compiles. If it fails, fix and retry. **Do not push without a successful build.**
4. Run `npm run lint` if available. Fix all lint errors before pushing.
5. Commit and push the branch.
6. **Open the pull request immediately using `gh pr create`** — do not stop after pushing the branch. The PR must be opened in the same run, not left for the user to create manually.
   - Use `gh pr create --title "<conventional commit title>" --body "$(cat <<'EOF' ... EOF)" --base main --head <your-branch>`.
   - Include the `<!-- AFFECTED_ROUTES -->` block in the body (see below).
   - Include `Closes #<issue_number>` in the body to auto-close the issue on merge.

Never commit directly to `main`. Never refactor unrelated code. If the task is ambiguous, post a clarifying comment on the Issue and stop — do not guess.

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
- If you changed a shared component (in `src/app/shared/`) or global styles (`src/styles.css`), list ALL existing routes in the app.
- If the change is non-visual (refactor, build config, README), put a single line: `- none`.

The screenshots workflow parses this block and only renders the listed pages. **A wrong list = wrong screenshots = blocked review.** This block is mandatory — do not omit it. The Issue cannot be considered done if the PR body does not contain this block.

### Example PR body

```
Adds a new /about route with team biography and a contact form.

Closes #42

<!-- AFFECTED_ROUTES -->
- /about
- /contact
<!-- /AFFECTED_ROUTES -->
```

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
- Production build uses `--base-href "/test-claude-agent/"` (handled by the deploy workflow — do not change).
- For local dev and CI screenshots, base-href is `/`.

## Available bash commands

You can run these without further approval:
`npm ci`, `npm run build`, `npm run lint`, `npm test`, `npm run test`,
`npx ng <subcommand>`, `git <subcommand>`, `gh <subcommand>`,
`node`, `ls`, `cat`, `mkdir`, `rm`, `cp`, `mv`, `echo`, `pwd`.

Use `gh pr create`, `gh pr view`, `gh issue comment` for GitHub interactions.
