# Resume PDF Refactor Specification

## ATS-Optimized Resume Implementation Specification

**Version:** 2.0
**Scope:** PDF Resume Only
**Objective:** Refactor the existing resume into a professional, ATS-compatible PDF while preserving all factual information and improving information hierarchy, readability, and recruiter perception.

---

# 1. Objective

Refactor the existing resume into a **single-column, ATS-friendly PDF** optimized for software engineering and frontend engineering positions.

The resulting resume MUST:

* Present a clear professional identity.
* Be easily parsed by Applicant Tracking Systems (ATS).
* Be easily scanned by recruiters within 10–15 seconds.
* Preserve factual accuracy.
* Avoid duplicated information.
* Prioritize engineering experience over implementation details.

This specification only concerns the **PDF resume**.

---

# 2. Non-Goals

The implementation MUST NOT:

* Invent accomplishments.
* Invent metrics.
* Invent responsibilities.
* Add technologies the candidate has not used.
* Remove genuine professional experience.
* Rewrite experience into fictional achievements.

---

# 3. Core Design Principles

Every implementation decision MUST support these principles.

## Principle 1 — One Professional Identity

The resume MUST consistently present the candidate as:

> **Frontend Engineer specializing in React, TypeScript, and modern web applications.**

Supporting expertise may include:

* SaaS
* AI integration
* Business applications
* Dashboard development
* Authentication
* Payment systems
* Backend integrations

No section should introduce a competing identity.

---

## Principle 2 — Experience First

Experience is the strongest proof of competency.

The resume should prioritize:

1. Experience
2. Projects
3. Skills
4. Education

---

## Principle 3 — Information Density

Every section must maximize professional value.

Every line should contribute toward demonstrating engineering ability.

Remove low-value information.

---

## Principle 4 — Authenticity

The resume MUST remain factually correct.

Never fabricate:

* users
* revenue
* percentages
* performance gains
* timelines
* team sizes

Only include measurable impact when supported by real information.

---

# 4. Target Information Architecture

The PDF MUST follow this exact order.

```text
Header

Professional Summary

Work Experience

Projects

Technical Skills

Education

Languages
```

No additional sections should appear unless explicitly requested.

---

# 5. Section Specifications

---

## 5.1 Header

### MUST contain

* Full name
* Professional title
* Email
* Phone
* GitHub
* LinkedIn

### SHOULD contain

Portfolio URL (if available)

### MUST NOT contain

* Interests
* Social media unrelated to recruiting
* Decorative icons replacing text

---

## 5.2 Professional Title

The title MUST immediately communicate the professional profile.

Examples:

* Frontend Engineer
* Frontend Developer
* Frontend Engineer • React & TypeScript

Avoid vague titles such as:

* IT Consultant
* Software Specialist
* Web Expert

unless they accurately reflect the target position.

---

## 5.3 Professional Summary

A Professional Summary MUST be added directly below the header.

Length:

* 3–5 sentences

Purpose:

* establish professional identity
* summarize years of experience
* mention specialization
* naturally include high-value keywords

The summary SHOULD naturally reference:

* React
* TypeScript
* Next.js
* Frontend Development
* SaaS
* Business Applications
* Authentication
* API Integration
* Responsive Web Applications

Do not keyword stuff.

---

## 5.4 Work Experience

This is the primary section of the resume.

It MUST occupy the largest portion of the document.

---

### Experience Ordering

Entries MUST be ordered:

Most Recent → Oldest

---

### Project Grouping

Flat task lists MUST be replaced by project-based grouping.

Preferred structure:

```text
Freelance Developer

Medical Learning Platform

• ...

Enterprise Management Platform

• ...

Additional Client Projects

• ...
```

The objective is to communicate ownership of products rather than isolated implementation tasks.

---

### Bullet Requirements

Every bullet SHOULD describe:

* context
* responsibility
* technical contribution

Avoid implementation-only descriptions.

Prefer:

* Built
* Developed
* Designed
* Delivered
* Implemented
* Integrated
* Collaborated
* Maintained

Avoid repetitive wording.

---

### Legacy Experience

Older WordPress experience MUST remain.

However:

* shorten it
* reduce emphasis
* present it as the beginning of the career progression

Career progression should naturally communicate:

```text
WordPress Developer

↓

Frontend Developer

↓

Frontend Engineer
```

---

# 6. Projects

Projects demonstrate technical capability independent of employment history.

---

## Project Ordering

Prioritize projects demonstrating modern engineering.

Recommended order:

1. SaaS Starter Kit
2. Excel-Genie
3. Medical Appointment Platform
4. Other significant projects

---

## Duplicate Content

Projects MUST NOT duplicate Work Experience.

If a project already serves as a major experience entry, the Projects section should instead highlight different technical aspects or omit it.

---

## Project Requirements

Each project SHOULD include:

* project name
* short description
* technologies used
* GitHub link (if available)
* live demo (if available)

Optional:

* architectural challenges
* interesting implementation details

---

# 7. Technical Skills

The Skills section should reinforce the professional identity.

Technologies MUST NOT all receive equal visual importance.

---

## Tier 1 — Core Stack

Highest priority.

Include:

* TypeScript
* JavaScript
* React
* Next.js
* Tailwind CSS

These technologies should appear repeatedly throughout the resume.

---

## Tier 2 — Strong Supporting Technologies

Include:

* Node.js
* Supabase
* PostgreSQL
* Auth.js
* Stripe
* REST APIs
* Git
* Vercel AI SDK

---

## Tier 3 — Complementary Technologies

Include:

* React Native
* Angular
* WordPress
* PrestaShop
* Sanity
* Hygraph

These should remain secondary.

---

## Legacy Technologies

Technologies such as:

* C
* Java
* PHP

SHOULD be removed unless specifically relevant to the target role.

---

# 8. Education

Education MUST appear after:

* Experience
* Projects
* Skills

---

Incomplete education MAY be removed if it weakens the professional narrative or creates unnecessary clutter.

---

# 9. Languages

Keep this section.

Preferred format:

```text
French — Fluent

English — Fluent

Bambara — Native
```

---

# 10. Content Normalization Rules

The implementation MUST normalize:

* capitalization
* terminology
* spelling

Examples:

Correct:

* Next.js
* TypeScript
* WordPress
* Developer
* shadcn/ui

Remove inconsistent capitalization.

---

# 11. Content Deduplication Rules

The same information MUST NOT appear multiple times.

Examples:

If authentication work appears under Work Experience, avoid repeating the same description under Projects.

Every section should contribute unique information.

---

# 12. Keyword Preservation Rules

The implementation MUST preserve important technologies already demonstrated by experience.

Examples include:

* React
* TypeScript
* Next.js
* Tailwind CSS
* React Native
* Angular
* Stripe
* Supabase
* OAuth
* REST APIs
* Authentication
* Dashboard Development
* SaaS
* AI
* Vercel AI SDK

Do not remove valuable keywords unless they become redundant.

---

# 13. Layout Constraints

The generated PDF MUST satisfy all of the following.

## Layout

* Single-column layout
* Consistent spacing
* Clear section separation
* Predictable reading order

---

## Typography

Maintain a professional hierarchy.

Sections should be visually distinguishable.

Avoid excessive decorative styling.

---

## Length

Target:

1 page preferred.

Maximum:

2 pages if necessary to preserve important professional experience.

---

## White Space

Use white space to improve readability.

Do not compress content excessively.

---

## Alignment

Dates should align consistently.

Headings should align consistently.

Bullet indentation should remain consistent throughout the document.

---

# 14. ATS Constraints

The PDF MUST:

* use standard section headings
* avoid tables for core information
* avoid sidebars
* avoid multi-column layouts
* avoid icons replacing text
* preserve natural reading order

Use plain text for:

* technologies
* company names
* dates
* job titles

---

# 15. Quality Rules

The implementation MUST verify:

* Every listed technology appears somewhere in Experience, Projects, or Skills.
* No technology is listed without supporting evidence.
* Every experience entry communicates business context.
* Every project demonstrates technical capability.
* No duplicated descriptions exist.
* No fabricated metrics exist.
* The resume communicates one consistent professional identity.

---

# 16. Acceptance Criteria

The task is complete only if all of the following are true.

## Identity

The resume consistently communicates:

> Frontend Engineer specializing in React, TypeScript, and modern web applications.

---

## Structure

The section order exactly matches:

```text
Header

Professional Summary

Work Experience

Projects

Technical Skills

Education

Languages
```

---

## Content

* No duplicated information
* No invented metrics
* No low-value filler sections
* Experience prioritized over implementation details

---

## ATS

The generated PDF:

* follows a single-column layout
* uses standard section headings
* maintains linear reading order
* contains clear technology keywords
* avoids parsing obstacles

---

## Readability

A recruiter should be able to identify within approximately 10 seconds:

* Professional role
* Years of experience
* Primary technologies
* Type of applications built
* Technical specialization

If these cannot be identified quickly, the implementation does not satisfy this specification.

