---
name: movie-section
description: "Add new movie page sections or components to this project. Use when: creating a new section like Soundtrack, Awards, Similar Movies, Gallery, or any new block for the Inception movie page. Handles component file creation, dark-theme styling, section registration in page.tsx, and optional Navbar link."
argument-hint: "Describe the new section (e.g. 'Soundtrack section with a tracklist')"
---

# Movie Section — Add a New Page Section

## Project Context

This is a Next.js 16 + Tailwind CSS 4 movie detail page for **Inception**. All sections are React Server Components (no `"use client"` unless hooks are needed). Sections are assembled in `src/app/page.tsx` and optionally linked in `src/components/Navbar.tsx`.

## Design System

| Token | Value |
|-------|-------|
| Background | `bg-black`, `bg-zinc-900`, `bg-gray-950` |
| Primary accent | `text-amber-400`, `border-amber-400/60`, `bg-amber-400` |
| Body text | `text-gray-300` |
| Secondary text | `text-gray-400` |
| Section heading | uppercase, `font-black`, gradient text (see below) |
| Max-width container | `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` |
| Section padding | `py-20 sm:py-28` |

Gradient heading:
```tsx
<h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-4">
  SECTION TITLE
</h2>
```

Amber section label (above heading):
```tsx
<span className="inline-block mb-4 px-3 py-1 rounded-full border border-amber-400/60 text-amber-400 text-xs font-semibold uppercase tracking-widest">
  Label
</span>
```

Card pattern:
```tsx
<div className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-colors duration-200">
  ...
</div>
```

## Section Component Template

Create the file at `src/components/<SectionName>.tsx`:

```tsx
export default function SectionName() {
  return (
    <section
      id="section-id"
      className="py-20 sm:py-28 bg-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <span className="inline-block mb-4 px-3 py-1 rounded-full border border-amber-400/60 text-amber-400 text-xs font-semibold uppercase tracking-widest">
          Label
        </span>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-4">
          SECTION TITLE
        </h2>

        {/* Subheading (optional) */}
        <p className="text-gray-400 text-lg mb-12">Supporting description here.</p>

        {/* Content */}
      </div>
    </section>
  );
}
```

## Procedure

### Step 1 — Create the component file
- File: `src/components/<SectionName>.tsx`
- Use the template above, replacing `section-id` with a kebab-case anchor (e.g. `id="soundtrack"`)
- Alternate background colors between sections to create visual rhythm:
  - Odd sections: `bg-black`
  - Even sections: `bg-zinc-900` or `bg-gray-950`

### Step 2 — Register in page.tsx
Open `src/app/page.tsx` and add the import and JSX element in the correct visual order:

```tsx
import SectionName from "@/components/SectionName";

// Inside <main>:
<SectionName />
```

### Step 3 — Add Navbar link (optional)
If the section warrants a top-level navigation link, add it to the `navLinks` array in `src/components/Navbar.tsx`:

```tsx
{ label: "SectionName", href: "#section-id" },
```

### Step 4 — Client interactivity (if needed)
Only add `"use client"` at the top of the file if the component uses:
- React hooks (`useState`, `useEffect`, `useRef`)
- Browser event handlers (`onClick`, `onChange`, etc.)

## Examples

Existing sections for reference:
- `src/components/Hero.tsx` — full-screen hero with gradient background and CTA buttons
- `src/components/Cast.tsx` — grid of cast member cards with avatar initials
- `src/components/Overview.tsx` — text + stats layout
- `src/components/Reviews.tsx` — review cards with star ratings
- `src/components/Trailer.tsx` — embedded YouTube iframe section
