# Portfolio Frontend — Page Sections Guide

This guide explains the key webpage sections — Navbar, Hero, Body, and Footer — and shows where to update each part in this Vite + React + TypeScript project.

## Overview

- **Navbar:** Site-wide top navigation with links to pages.
- **Hero:** Prominent intro section at the top of a page (usually the landing/about page).
- **Body:** Main content area (skills, projects, contact, etc.).
- **Footer:** Site-wide bottom section with links, copyright, and social info.

## Where Things Live

- **App bootstrap:** `src/main.tsx` mounts the React app and sets up the router.
- **Routing config:** `src/config/router.config.tsx` and `src/pagesRoutes.tsx/routes.tsx` define routes to pages.
- **Layout (header/footer/wrapper):** `src/Layout/layout.tsx` is a good place to render the Navbar at the top, the routed page in the middle, and the Footer at the bottom.
- **Pages (Body content):**
  - `src/pages/AboutMe.tsx`
  - `src/pages/skills.tsx`
  - `src/pages/projects.tsx`
  - `src/pages/contact.tsx`
  - `src/pages/PagenotFound.tsx` (fallback for unmatched routes)

## Navbar

- **Purpose:** Provide quick navigation between pages.
- **Typical contents:** Brand/logo, menu items (About, Skills, Projects, Contact), and optional theme toggle.
- **Suggested location:** Render the Navbar component inside `src/Layout/layout.tsx` so it appears site-wide.
- **How to update:**
  1. Add or edit nav links to match routes from `src/pagesRoutes.tsx/routes.tsx`.
  2. Ensure links use your router (e.g., `Link` from `react-router-dom`).
  3. Keep the active route highlighted for better UX.

## Hero

- **Purpose:** A strong introductory banner with your name, role, and a call to action.
- **Typical contents:** Headline, short bio/tagline, CTA buttons (View Projects, Contact Me), background image/illustration.
- **Suggested location:** At the top of your landing page (commonly `src/pages/AboutMe.tsx`).
- **How to update:**
  1. Edit the heading, tagline, and CTA copy in the hero section.
  2. Optionally extract a `Hero` component (e.g., `src/components/Hero.tsx`) for reuse and cleaner structure.
  3. Keep the hero concise with a clear primary action.

## Body

- **Purpose:** The main content area of each route/page.
- **Typical contents:** Skills, Projects, Contact forms, detailed About sections.
- **Where to edit:**
  - Skills: `src/pages/skills.tsx`
  - Projects: `src/pages/projects.tsx`
  - Contact: `src/pages/contact.tsx`
  - About: `src/pages/AboutMe.tsx`
- **Tips:**
  - Break content into small components for readability (e.g., `SkillCard`, `ProjectItem`).
  - Use consistent spacing and typography.
  - Keep routes focused: each page should have a clear purpose.

## Footer

- **Purpose:** Provide persistent site info and utility links.
- **Typical contents:** Copyright, social links, email, back-to-top.
- **Suggested location:** Render the Footer component inside `src/Layout/layout.tsx` so it appears site-wide.
- **How to update:**
  1. Add social/profile links and contact info.
  2. Keep it minimal and accessible.

## Routing Flow

1. `src/main.tsx` initializes the app and attaches the router.
2. `src/config/router.config.tsx` and `src/pagesRoutes.tsx/routes.tsx` define which URL renders which page.
3. `src/Layout/layout.tsx` wraps routed pages, placing the Navbar above and Footer below.

## Quick Editing Guide

- **Add a new page:** Create `src/pages/NewPage.tsx`, export your component, then add a matching route in `src/pagesRoutes.tsx/routes.tsx` and a nav link in the Navbar.
- **Edit Navbar items:** Update the links in the Navbar (inside `src/Layout/layout.tsx` or your Navbar component) to match your routes.
- **Tweak the Hero:** Update copy, visuals, and CTAs on the landing page (e.g., `src/pages/AboutMe.tsx`).
- **Update Body content:** Edit the respective page file (skills, projects, contact) and consider componentizing repeated UI.
- **Change Footer info:** Edit your Footer component (recommended inside `src/Layout/layout.tsx`).

## Styling & Accessibility Tips

- Keep color contrast high, add `aria-label`s for icons, and use semantic HTML (`header`, `main`, `footer`).
- Prefer responsive layouts (flex/grid) and test on mobile.
- Keep navigation keyboard-friendly and focus-visible.

---

Need help wiring up the Navbar or routes? Ask, and I can add a simple `Navbar` and `Footer` scaffold mapped to your current pages.
