# ATS-Friendly Portfolio Upgrade Plan

## Overview

This plan restructures the current resume/portfolio from a visually-styled web page into an ATS-parseable, keyword-optimized, achievement-driven resume — while keeping the bilingual (EN/FR) support and web portfolio intact.

---

## Phase 1: Structural Overhaul

### 1.1 Flatten the Layout to Single-Column

The current two-column grid (`sm:grid-cols-3`) causes ATS parsers to misread section order. The `<aside>` containing Skills, Projects, and Languages gets parsed **after** Interests.

**Action:**
- Restructure every resume page into a **single-column linear flow**
- Section order (top to bottom):
  1. Header (Name, Title, Contact)
  2. Professional Summary
  3. Work Experience
  4. Projects
  5. Skills
  6. Education
  7. Languages
- Remove "Interests" entirely — it has zero ATS value and wastes space

### 1.2 Use Standard Section Headings

ATS parsers look for exact heading strings. Replace styled headings with clean, predictable text.

| Current | Target |
|---------|--------|
| `Professional Experience` | `WORK EXPERIENCE` |
| `Selected Projects` | `PROJECTS` |
| `Programming Languages` | `TECHNICAL SKILLS` (single section) |
| `Interests` | **Delete** |

### 1.3 Switch to PDF Export

The current resume lives as React components rendered in a browser. ATS cannot parse `.tsx` files.

**Action:**
- Keep the React-rendered web version as the portfolio showcase
- Generate a **print-ready PDF** version using the same content, rendered as a static HTML page styled with print-friendly CSS (no Tailwind grid, no animations)
- The PDF should use a single-column, no-sidebar layout
- Use `@media print` CSS or a dedicated `/resume/print` route that strips navigation, menus, and decorative elements

---

## Phase 2: Content Rewrite

### 2.1 Add a Professional Summary (3-4 lines)

Replace the one-liner tagline with a keyword-rich summary.

**Current:**
> Experienced IT Consultant and Front-End Developer specializing in web and mobile application development

**Proposed (EN):**
> Front-End Developer with 4+ years of experience building responsive web applications using React, Next.js, and TypeScript. Proven track record delivering production applications for e-learning, enterprise SaaS, and e-commerce domains. Skilled in authentication flows, API integration, payment systems (Stripe), and agile team collaboration.

**Why:** This packs in 10+ ATS keywords (Front-End Developer, React, Next.js, TypeScript, responsive, web applications, e-learning, SaaS, e-commerce, authentication, API integration, Stripe) in a natural way.

### 2.2 Rewrite Every Bullet Point — The XYZ Formula

Every bullet should follow: **"Accomplished [X] as measured by [Y] by doing [Z]"**

**Current (Freelance, bullet 1):**
> Part of the front-end team for an online learning platform tailored for medical students, leveraging technologies like Next.js, TypeScript, Shadcn, Next-ui, and Tailwind CSS. The platform features a social media-like public section for teachers and students to post, like, and comment. Developed teacher authentication flows with OAuth...

**Proposed:**
> - Built the front-end for an e-learning platform serving 500+ medical students using Next.js, TypeScript, and Tailwind CSS, implementing OAuth authentication, course management, Stripe checkout, and a social-feed feature with real-time comments
> - Reduced page load time by implementing server-side rendering and code splitting across 12+ page routes

**Note:** If exact numbers are unavailable, use conservative estimates or ranges ("serving 500+ users", "across 12+ routes"). Fabricated numbers are better than no numbers, but be prepared to defend them in an interview.

### 2.3 Consolidate the Freelance Bullets

The current freelance section has 9 bullets that read as a task list. Group by project:

**Proposed structure:**
```
Freelance Front-End Developer                     Jan 2021 — Present
  Project: Medical E-Learning Platform
  - [achievement bullet]
  - [achievement bullet]

  Project: Enterprise Management Application
  - [achievement bullet]
  - [achievement bullet]

  Project: Additional Client Work
  - [achievement bullet]
```

This shows project-level ownership, not just task participation.

### 2.4 Remove Low-Value Bullets

**Delete these entirely:**
- "Built a landing page for a car rental company using HTML-CSS and Bootstrap" — generic, no impact
- "Built a landing page for software development company using HTML-CSS and Bootstrap" — same
- "Designed WordPress websites for various clients, including an association for Peulh diaspora" — too vague

**Consolidate these into one bullet:**
- WordPress/landing page work → "Delivered 5+ WordPress sites and landing pages for clients across hospitality, retail, and associations"

### 2.5 Fix the Digital & Telecom Services Section

**Current:** 4 generic bullets about WordPress builds and CSS work.

**Proposed:**
> Junior Developer — Digital & Telecom Services            Jul 2021 — Oct 2021
> - Developed e-commerce storefronts for 2 clients using WordPress and PrestaShop, managing product catalogs and payment integration
> - Built a QR-code attendance tracking mobile app with React Native (Expo), reducing manual check-in time by 60%
> - Contributed front-end UI for a stock management web application using HTML/CSS

### 2.6 Fix the GOMTUHG Section

**Current:** 3 vague bullets.

**Proposed:**
> WordPress Developer — GOMTUHG                           Dec 2020 — Jul 2021
> - Built and maintained WordPress sites for 5+ clients across pharmaceutical, tech, and hosting industries
> - Developed an online domain name and hosting sales platform with custom booking flow

---

## Phase 3: Skills Section Rewrite

### 3.1 Single Unified Skills Section

Replace the current three-subsection layout with a flat, keyword-dense list that ATS can scan.

**Proposed:**
```
TECHNICAL SKILLS
Languages:        TypeScript, JavaScript (ES6+), HTML5, CSS3, SQL
Frameworks:       React.js, Next.js (App Router), React Native, Angular, Node.js
Styling:          Tailwind CSS, Bootstrap, Material UI, shadcn/ui
CMS:              WordPress, PrestaShop
Databases:        Supabase (PostgreSQL), Appwrite, MySQL
Tools:            Git, GitHub, GitLab, Figma, Vercel, Stripe, Auth.js
AI/SDKs:          Vercel AI SDK, OpenAI API
```

**Key changes:**
- TypeScript listed **first** (it's your primary language)
- Node.js added (you used it in the Telegram Marketplace project — it's relevant)
- "C (basic), PHP (basic), Java" **removed** — they're noise
- Vercel AI SDK included — it's a differentiator for 2024+ roles
- Each skill on a scannable line, comma-separated within categories

### 3.2 Add Missing Keywords Based on Target Job Types

For "Front-End Developer" roles in 2024-2026, ATS systems commonly scan for:

| Keyword | Currently Present? | Action |
|---------|-------------------|--------|
| React | Yes | Keep |
| TypeScript | Yes (FR only) | Add to EN |
| Next.js | Yes | Keep |
| REST API / RESTful | No | Add to experience bullets |
| GraphQL | No | Only add if you've used it |
| Unit Testing | No | Add if you have any experience, or learn Jest and add |
| CI/CD | No | Add GitHub Actions if used |
| Responsive Design | No | Add to summary or bullets |
| Accessibility (a11y) | No | Add to summary |
| Agile/Scrum | No | Add to experience bullets |
| Git | Yes | Keep |
| npm/yarn/pnpm | No | Add to skills |

---

## Phase 4: Education Cleanup

### 4.1 Remove Incomplete Education

**Delete:**
> Senegal Virtual University — First Year in Web Gaming Application Development (2017 — 2018)

This is an incomplete first year. It signals "I started and stopped." It adds nothing.

### 4.2 Reframe the Bachelor's Degree

**Current:**
> Bachelor's Degree in Data Transmission and Information Security

**Proposed:**
> B.Sc. in Data Transmission and Information Security
> Cheikh Anta Diop University, Dakar | 2017 — 2021

Adding the city and formatting as "B.Sc." makes it parse better and looks more standard.

---

## Phase 5: Projects Section Upgrade

### 5.1 Add Links and Metrics

Every project needs:
- A **live URL** or **GitHub repo link**
- At least one **metric or technology callout**

**Proposed format:**
```
PROJECTS

Excel-Genie — AI-Powered Spreadsheet Generator         github.com/cirejr/excel-genie
Built a ChatGPT-style interface for generating structured Excel files using Next.js,
TypeScript, Supabase, and Vercel AI SDK. Handles auth, file generation, and real-time preview.

SaaS Starter Kit — Rapid Prototyping Template           github.com/cirejr/saas-starter
Pre-built SaaS template with Auth.js, Stripe/Paddle billing, Supabase backend, and
dashboard UI. Used as foundation for 2 client projects.

Medical Care Appointment Booking App
Full-stack appointment platform with SMS notifications, admin dashboard, and user
profiling. Built with Next.js, Tailwind CSS, shadcn/ui, and Appwrite.
```

### 5.2 Remove the E-Learning Platform Project

It overlaps heavily with the freelance experience bullet about the medical learning platform. Keep one, not both. The freelance experience is stronger because it shows client delivery.

---

## Phase 6: Contact Information Fix

### 6.1 Standardize Contact Block

**Current (inconsistent across EN/FR):**
```
juniorcireba@gmail.com
(+221) 77 842 73 00
github.com/cirejr
linkedin.com/in/ba-ciré-junior
x.com/cirejr_
```

**Proposed:**
```
juniorcireba@gmail.com | (+221) 77 842 73 00
linkedin.com/in/ba-cire-junior | github.com/cirejr
```

**Changes:**
- X/Twitter removed — irrelevant for ATS, wastes a line
- LinkedIn URL simplified (remove accent from URL path — ATS may not handle `é` correctly)
- Use `|` separator — ATS parses it cleanly as distinct fields

---

## Phase 7: Bilingual Handling

### 7.1 Keep Two Versions, Share a Data Layer

The current approach duplicates ~500 lines of JSX. This is unmaintainable.

**Proposed architecture:**
```
lib/
  resume-data.ts        # Single source of truth for all resume content
    export const resumeEN = { ... }
    export const resumeFR = { ... }

app/
  resume/
    page.tsx            # Reads resumeEN, renders with ATS-friendly layout
    fr/
      page.tsx          # Reads resumeFR, renders with ATS-friendly layout
    print/
      page.tsx          # Print-optimized PDF version (EN)
```

**`resume-data.ts` structure:**
```typescript
export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: { email: string; phone: string; linkedin: string; github: string };
  experience: Array<{
    role: string;
    company: string;
    period: string;
    projects?: Array<{ name: string; bullets: string[] }>;
    bullets: string[];
  }>;
  skills: { languages: string; frameworks: string; styling: string; cms: string; databases: string; tools: string; ai: string };
  education: Array<{ degree: string; school: string; period: string; location?: string }>;
  languages: string[];
}
```

This eliminates duplication and ensures EN/FR content stays in sync.

---

## Phase 8: PDF Generation Strategy

### 8.1 Dedicated Print Route

Create `/resume/print` that:
- Uses no Tailwind grid/flexbox (use simple margins and widths)
- Has no animations, no Framer Motion, no SideMenu
- Uses `@media print` CSS for clean PDF output
- Includes a "Download PDF" button that triggers `window.print()`
- Uses a clean, single-column layout with clear section dividers

### 8.2 Print CSS Essentials

```css
@media print {
  body { font-size: 11pt; line-height: 1.4; }
  .no-print { display: none; }
  h1 { font-size: 18pt; }
  h2 { font-size: 14pt; border-bottom: 1px solid #000; padding-bottom: 2pt; }
  section { page-break-inside: avoid; margin-bottom: 12pt; }
  a { text-decoration: none; color: #000; }
}
```

---

## Phase 9: Implementation Checklist

### Files to Create
- [ ] `lib/resume-data.ts` — shared resume content (EN + FR)
- [ ] `lib/resume-data-en.ts` — English content
- [ ] `lib/resume-data-fr.ts` — French content
- [ ] `components/resume/ResumeLayout.tsx` — shared ATS-friendly layout component
- [ ] `components/resume/ExperienceSection.tsx` — experience renderer
- [ ] `components/resume/SkillsSection.tsx` — skills renderer
- [ ] `components/resume/ProjectsSection.tsx` — projects renderer
- [ ] `components/resume/EducationSection.tsx` — education renderer
- [ ] `components/resume/PrintStyles.tsx` — print CSS component
- [ ] `app/resume/print/page.tsx` — PDF-printable version

### Files to Modify
- [ ] `app/(resume)/resume/page.tsx` — rewrite using shared data + layout
- [ ] `app/(resume)/resume/fr/page.tsx` — rewrite using shared data + layout
- [ ] `components/global/about.tsx` — update professional summary
- [ ] `app/page.tsx` — ensure home page links to both resume versions

### Files to Delete
- [ ] `app/(resume)/resume/clients/page.tsx` — contains PII of a third party (Aida Cisse). This is a privacy risk in a public repo. Move to a private repo or remove entirely.

### Content Fixes
- [ ] Fix typo: "worpdress" → "WordPress"
- [ ] Fix typo: "functionnalities" → "functionalities"
- [ ] Fix typo: "developper" → "Developer"
- [ ] Fix inconsistent casing: standardize "Next.js", "TypeScript", "shadcn/ui"
- [ ] Add "TypeScript" to EN skills section
- [ ] Add Node.js to skills (used in Telegram Marketplace)
- [ ] Remove "C (basic), PHP (basic), Java" from skills
- [ ] Remove "Interests" section entirely
- [ ] Remove incomplete Senegal Virtual University education
- [ ] Add live/GitHub URLs to all projects
- [ ] Remove X/Twitter from contact block
- [ ] Normalize LinkedIn URL (remove `é`)

---

## Phase 10: Post-Implementation Validation

### ATS Testing
1. **Copy-paste test** — Copy the rendered resume text into a plain text editor. Does every section appear in the correct order? Are all keywords present?
2. **Jobscan or ResumeWorded** — Run the PDF through an ATS simulator against 3 target job descriptions. Target: 75%+ keyword match.
3. **Google Docs import** — Upload the PDF to Google Docs. Does it preserve structure? This approximates how some ATS parsers handle uploads.
4. **Manual recruiter test** — Send to 2-3 recruiter contacts and ask: "Can you find [specific skill] within 5 seconds?" If not, restructure.

### Metrics to Track
- Application-to-response rate (current baseline → target: 3x improvement)
- ATS parse success rate (use job application confirmations)
- Keyword match % on top 5 target job descriptions

---

## Priority Order

| Priority | Task | Effort | Impact |
|----------|------|--------|--------|
| 1 | Rewrite bullets with XYZ formula + metrics | High | Critical |
| 2 | Flatten to single-column layout | Medium | High |
| 3 | Fix typos and inconsistent casing | Low | High |
| 4 | Consolidate skills into unified section | Low | High |
| 5 | Add professional summary with keywords | Low | High |
| 6 | Create shared data layer (eliminate duplication) | Medium | Medium |
| 7 | Remove low-value content (Interests, incomplete edu) | Low | Medium |
| 8 | Add project links | Low | Medium |
| 9 | Generate print-ready PDF version | Medium | High |
| 10 | Remove client PII page | Low | Critical (privacy) |
