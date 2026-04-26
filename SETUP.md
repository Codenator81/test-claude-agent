# test-claude-agent — setup guide

This folder contains all the files needed to bootstrap an Angular project with a fully automated AI pipeline:

- `@claude` mention in an Issue → Claude opens a PR
- PR triggers screenshots (desktop + mobile) of the changed pages
- Merge to `main` → auto-deploy to GitHub Pages

## Prerequisites

- A GitHub account
- Claude Max subscription
- Local machine with Node 20+ and `claude` CLI installed
  - If `claude` is not installed: `npm install -g @anthropic-ai/claude-code`

---

## Step 1. Create the GitHub repo

1. Go to https://github.com/new
2. **Name:** `test-claude-agent`
3. **Visibility:** Public (free Actions, free Pages)
4. **Initialize:** leave empty (no README, no .gitignore — we'll push our own)
5. Create

---

## Step 2. Bootstrap Angular locally

In a parent folder of your choice:

```bash
npx -p @angular/cli@latest ng new test-claude-agent \
  --routing \
  --style=css \
  --ssr=false \
  --skip-git
cd test-claude-agent
```

When prompted about analytics, choose `No`.

---

## Step 3. Install Tailwind

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init
```

Then:

1. **Replace `tailwind.config.js`** with the file from this setup pack.
2. **Edit `src/styles.css`** — add at the very top:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## Step 4. Install Playwright + utilities

```bash
npm install -D @playwright/test http-server wait-on
```

---

## Step 5. Drop in the pipeline files

Copy the following from this setup pack into your project root, preserving paths:

```
test-claude-agent/
├── .github/workflows/claude.yml
├── .github/workflows/ci.yml
├── .github/workflows/screenshots.yml
├── .github/workflows/deploy.yml
├── e2e/screenshots.spec.ts
├── playwright.config.ts
├── tailwind.config.js   (overwrites the one created by tailwindcss init)
└── CLAUDE.md
```

---

## Step 6. Push to GitHub

```bash
git init
git add .
git commit -m "Initial Angular + Tailwind + AI pipeline"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/test-claude-agent.git
git push -u origin main
```

---

## Step 7. Install the Claude GitHub App

This is the step that authorizes the `@claude` agent against your Max subscription.

In the project folder, run:

```bash
claude
```

Inside Claude Code prompt, run:

```
/install-github-app
```

Follow the wizard:
- Pick the `test-claude-agent` repository
- Authorize the Claude GitHub App
- It will create a `CLAUDE_CODE_OAUTH_TOKEN` secret in your repo automatically

If `/install-github-app` is not available in your version, fall back to manual setup:

```bash
claude setup-token
```

Copy the token, then go to:
**GitHub → repo → Settings → Secrets and variables → Actions → New repository secret**
- Name: `CLAUDE_CODE_OAUTH_TOKEN`
- Value: paste the token

---

## Step 8. Enable GitHub Pages

1. **GitHub → repo → Settings → Pages**
2. **Source:** GitHub Actions (NOT "Deploy from a branch")
3. Save

After the first push to `main`, the deploy workflow will publish the site to:
```
https://<YOUR_USERNAME>.github.io/test-claude-agent/
```

---

## Step 9. Allow workflows to write to the repo

1. **GitHub → repo → Settings → Actions → General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Save

This is what lets Claude push branches and the screenshots workflow push to the cache branch.

---

## Step 10. Test the pipeline

1. Create your first Issue:
   - **Title:** `Add a simple About page`
   - **Body:**
     ```
     Add a new route /about with a page that shows:
     - A big heading "About this project"
     - A paragraph explaining this is an AI-built demo
     - A back link to home

     @claude implement this
     ```
2. Submit the Issue.
3. Within ~2 minutes, the **Claude Code** workflow runs.
4. Claude creates a branch `claude/issue-1-...` and opens a PR.
5. The **CI** workflow validates the build.
6. The **Screenshots** workflow renders desktop + mobile of `/about` and posts them as a comment.
7. Review, merge.
8. The **Deploy** workflow ships it to GitHub Pages.

---

## Troubleshooting

**Claude doesn't react to `@claude`**
→ Check Settings → Actions → General → Workflow permissions → "Read and write".
→ Confirm `CLAUDE_CODE_OAUTH_TOKEN` exists in repo secrets.
→ Look at the **Actions** tab for the failing run.

**Screenshots workflow fails on the build step**
→ Most often a TypeScript or Tailwind config error. Check the workflow log.
→ Ensure `npm run build` works locally.

**Pages deploy fails with 404**
→ Make sure Pages source is set to **GitHub Actions** in Settings.
→ Wait 1-2 minutes after first deploy for DNS to propagate.

**Screenshots show a blank page**
→ Likely SPA routing issue. Open the screenshot artifact and inspect.
→ Check that the route exists in `src/app/app.routes.ts`.

**OAuth token expired**
→ Known limitation: tokens last ~1 day if using the manual `setup-token` flow.
→ Re-run `/install-github-app` to use the Claude GitHub App which auto-refreshes.

---

## What's next

Once this works on a trivial task, real workflow looks like this:

1. Manager opens Issues with clear scope
2. Tags `@claude` to trigger
3. Reviews PR + screenshots
4. Comments inline on PR if changes needed (`@claude please change the heading color to blue`)
5. Merges when satisfied → auto-deploy

When you outgrow Issues UX (kanban, sprints, etc.) — wire Linear on top via Cyrus self-hosted on a small VPS. The repo and workflows stay the same.
