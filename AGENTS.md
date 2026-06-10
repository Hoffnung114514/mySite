# AGENTS.md

## Project Overview

This is a personal technical portfolio website for Zhou Xiaole.

The website focuses on:

* Cloud Computing
* AI Engineering
* Robotics
* Automation
* Technical Writing

The first version should remain simple, static, clean, and deployment-friendly.

The primary goal of the first version is to build and deploy a personal homepage. Projects and articles will be expanded later.

## Tech Stack

Use only the following technologies unless explicitly approved:

* Next.js
* TypeScript
* Tailwind CSS
* App Router
* Vercel

Do not introduce unnecessary dependencies.

Do not add:

* Database
* Authentication
* Login system
* Admin dashboard
* Comment system
* CMS
* Backend API
* Payment service
* Complex animation library

## Design Direction

The website should use:

* Light technology style
* Modern minimalist design
* Card-based layout
* Clean spacing
* Soft shadows
* Subtle blue, cyan, or purple accents
* Responsive layout for desktop and mobile

Avoid:

* Dark cyberpunk style
* Game-like UI
* Overly complex animations
* Heavy visual effects
* Corporate marketing style
* Unnecessary decorative elements

The visual impression should be clean, professional, modern, and suitable for a personal technical portfolio.

## Current Priority

The current priority is:

1. Build the personal homepage.
2. Make sure the site runs locally.
3. Make sure the site can be pushed to GitHub.
4. Make sure the site can be deployed to Vercel.

Do not create full project detail pages or article detail pages unless explicitly requested.

## Workflow Rules

Before modifying code, always do the following:

1. Inspect the existing project structure.
2. Explain which files you plan to modify.
3. Explain why each file needs to be modified.
4. Wait for my confirmation before making changes.

When modifying code:

1. Keep changes minimal and focused.
2. Do not refactor unrelated files.
3. Do not delete existing files unless clearly necessary.
4. Do not change the tech stack.
5. Do not introduce new dependencies without asking first.
6. Do not redesign the whole website unless I explicitly request it.
7. Do not create extra pages or features beyond the current task.

## Coding Rules

Use:

* TypeScript types where appropriate
* Reusable components
* Clear file structure
* Tailwind CSS for styling
* Data files for repeated content when useful

Avoid putting all code into `app/page.tsx`.

Prefer this structure:

* `components/` for UI components
* `data/` for project, article, and technology data
* `app/` for routes and pages

## Commands

Use these commands when needed:

```bash
npm install
npm run dev
npm run build
```

Before saying the task is complete, check whether the project can build successfully.

## Response Format

When responding, always include:

1. What you plan to do
2. Which files will be changed
3. Why those changes are needed
4. Whether my confirmation is required before editing

After editing, always include:

1. What was changed
2. Which files were modified
3. How to test locally
4. Any remaining issues
