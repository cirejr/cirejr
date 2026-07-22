# Resume PDF Generation Strategy

## Overview

The resume application uses a data-driven architecture where resume information is stored in TypeScript objects and rendered through React components.

PDF generation should reuse the same source of truth instead of introducing a separate PDF implementation.

The chosen approach is:

**React Resume Components → Playwright → Static PDF Files**

This keeps the resume website and exported PDF synchronized while avoiding runtime PDF generation complexity.

---

# Goals

- Generate professional ATS-friendly PDFs.
- Preserve selectable text (no image/raster rendering).
- Reuse existing React resume components.
- Support multiple languages (English/French).
- Avoid runtime dependencies during user downloads.
- Keep PDFs instantly available from the website.

---

# Chosen Approach

## Build-Time PDF Generation

Generate PDFs during development/deployment instead of generating them on every visitor request.

Workflow:

```
resumeEN / resumeFR data
        |
        ↓
React Resume Components
        |
        ↓
Print-specific Resume Page
        |
        ↓
Playwright Chromium Rendering
        |
        ↓
Static PDF Files
        |
        ↓
public/files/resume-en.pdf
public/files/resume-fr.pdf
```

---

# Why Not Runtime Generation?

An API route such as:

```
GET /api/resume/pdf?lang=en
```

would dynamically launch Chromium and generate PDFs.

This is unnecessary for a personal resume.

Problems:

- Requires browser binaries on the server.
- Adds server/runtime complexity.
- Introduces cold starts.
- Can fail due to serverless execution limits.
- Consumes resources for identical documents.

The resume only changes occasionally, making static generation the better approach.

---

# Implementation Structure

Recommended structure:

```
app/
 └── resume/
      ├── page.tsx
      └── print/
           └── page.tsx

components/
 └── resume/
      ├── ResumeLayout.tsx
      └── ResumePrintLayout.tsx

scripts/
 └── generate-resume-pdf.mjs

public/
 └── files/
      ├── resume-en.pdf
      └── resume-fr.pdf
```

---

# Print Page

The print page should:

- Render only the resume document.
- Remove navigation.
- Remove interactive controls.
- Avoid animations.
- Be optimized for A4 output.

Examples:

```
/resume/print?lang=en

/resume/print?lang=fr
```

The page should use the same resume data source as the normal resume page.

---

# Playwright Generator

Install:

```
npm install -D playwright

npx playwright install chromium
```

The generator script should:

1. Launch Chromium.
2. Open the print resume page.
3. Wait for fonts and assets.
4. Generate the PDF.
5. Save the output files.

Pseudo workflow:

```
for each language:
    open /resume/print?lang={language}

    wait until document.fonts.ready

    generate A4 PDF

    save to public/files/
```

---

# PDF Requirements

Generated PDFs must:

- Use A4 format.
- Keep selectable text.
- Preserve fonts.
- Include backgrounds when necessary.
- Support ATS parsing.

Playwright configuration:

```
format: "A4"

printBackground: true
```

---

# Font Handling

Do not rely only on page loading.

Before generating:

```
await page.evaluate(() => document.fonts.ready)
```

This prevents PDFs being generated before custom fonts finish loading.

---

# Print CSS

The resume requires dedicated print styles.

Example:

```css
@page {
  size: A4;
  margin: 12mm;
}

@media print {
  .no-print {
    display: none;
  }

  section {
    break-inside: avoid;
  }
}
```

Important considerations:

- Prevent experience sections from splitting.
- Keep project titles with their bullet points.
- Avoid unnecessary page breaks.
- Optimize typography for paper dimensions.

---

# Download Links

Since PDFs are static files, the UI should simply link to them:

```
/files/resume-en.pdf

/files/resume-fr.pdf
```

Example:

```tsx
<a href="/files/resume-en.pdf" download>
  Download PDF
</a>
```

No API calls are required.

---

# NPM Scripts

Add:

```json
{
  "scripts": {
    "resume:pdf": "node scripts/generate-resume-pdf.mjs"
  }
}
```

Optional:

Automatically generate PDFs during production builds:

```json
{
  "scripts": {
    "build": "npm run resume:pdf && next build"
  }
}
```

---

# Future Extensions

The architecture should allow future resume variants:

- English resume.
- French resume.
- One-page resume.
- Technical resume.
- Recruiter-focused resume.
- Portfolio PDF export.

The generator should only receive:

- A language.
- A resume variant.
- An output path.

The rendering system should remain shared.

---

# Final Decision

Use:

✅ Playwright  
✅ Build-time generation  
✅ React-based rendering  
✅ Dedicated print route  
✅ Static PDF files  
✅ Shared resume data model  

Avoid:

❌ React-PDF  
❌ jsPDF  
❌ Runtime PDF generation API  
❌ Separate PDF templates  
❌ Maintaining duplicated resume content
