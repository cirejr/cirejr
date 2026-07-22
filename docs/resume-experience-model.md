# Resume Experience Model

## Overview

Enhance the `ResumeExperience` model to better represent modern career paths.

The current model assumes every experience is identical, making it difficult to distinguish between:

- Full-time employment
- Part-time roles
- Freelance work
- Contract engagements
- Multiple concurrent positions

Adding metadata improves both data consistency and resume presentation without affecting existing rendering logic.

---

## Proposed Interface

```ts
interface ResumeExperience {
  role: string;
  company: string;
  period: string;

  employmentType?:
    | "Full-time"
    | "Part-time"
    | "Contract"
    | "Freelance";

  current?: boolean;

  location?: string;

  projects?: ResumeExperienceProject[];

  bullets?: string[];
}
```

---

## New Fields

### `employmentType`

Describes the nature of the engagement.

Examples:

- Full-time
- Part-time
- Contract
- Freelance

This enables the UI to display labels such as:

```
Insoft SAS • Full-time
UCAD • Part-time
Independent • Freelance
```

---

### `current`

Indicates whether the position is currently active.

Benefits:

- Easier sorting of active experiences.
- Avoids parsing `"Present"` from the `period` string.
- Allows highlighting current positions in the UI.

---

### `location`

Optional work location.

Examples:

```
Dakar, Senegal
Remote
Hybrid
```

Useful for recruiters and future resume templates.

---

## Sorting Strategy

Experiences should be sorted using the following priority:

1. Current positions (`current === true`)
2. Most recent end date
3. Most recent start date

This avoids relying on string parsing and correctly supports multiple concurrent roles.

Example:

1. Insoft SAS — Full-time
2. UCAD — Part-time
3. Freelance — Freelance
4. DevPhantom
5. TechLabs

---

## Future Extensions

Potential additions if needed:

```ts
startDate?: string;
endDate?: string;

companyUrl?: string;

technologies?: string[];

achievements?: string[];

industry?: string;
```

These are intentionally excluded for now to keep the model lightweight.

---

## Goal

The objective is to better represent real-world career paths while maintaining an ATS-friendly resume structure and a flexible data model for future resume templates.
