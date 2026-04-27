---
name: nextjs-component
description: "Scaffold Next.js 16 components and pages correctly in this project. Use when: creating new components, deciding between Server and Client components, setting up file structure, using import aliases, exporting types, or troubleshooting hydration or hook errors. Covers Server vs Client rules, naming conventions, and TypeScript patterns."
argument-hint: "Describe the component to create (e.g. 'a modal dialog' or 'a search bar with state')"
---

# Next.js Component — Scaffolding Guide

## Project Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- Import alias: `@/` → `src/`

---

## Server vs Client Components

### Default: Server Component
Every new component is a Server Component by default. **Do not add `"use client"`** unless required.

```tsx
// src/components/MovieDetails.tsx — Server Component (default)
export default function MovieDetails() {
  return <section>...</section>;
}
```

**Server Components can:**
- `async/await` data fetching directly
- Access environment variables (`process.env`)
- Import server-only modules

**Server Components cannot:**
- Use React hooks (`useState`, `useEffect`, `useRef`, `useContext`, etc.)
- Attach browser event handlers (`onClick`, `onChange`, `onSubmit`)
- Use browser APIs (`window`, `document`, `localStorage`)

### Client Component — add `"use client"` only when needed

```tsx
"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

**Trigger for `"use client"`:**
- Any React hook
- Any event handler prop (`onClick`, `onChange`, etc.)
- `useRouter`, `usePathname`, `useSearchParams`

### Minimize client surface
Keep client components small — push `"use client"` as far down the tree as possible. Wrap only the interactive part, not entire sections.

---

## File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Component | PascalCase | `src/components/MovieCard.tsx` |
| Page (App Router) | `page.tsx` in route folder | `src/app/movie/[id]/page.tsx` |
| Layout | `layout.tsx` | `src/app/layout.tsx` |
| Loading state | `loading.tsx` | `src/app/movie/[id]/loading.tsx` |
| Error boundary | `error.tsx` | `src/app/movie/[id]/error.tsx` |
| Utility/lib | camelCase | `src/lib/tmdb.ts` |
| Types file | camelCase | `src/types/tmdb.ts` |

---

## Import Aliases

Always use the `@/` alias. Never use relative `../../` paths for `src/` imports.

```tsx
// Correct
import Hero from "@/components/Hero";
import { tmdbFetch } from "@/lib/tmdb";
import type { Movie } from "@/types/tmdb";

// Wrong — avoid
import Hero from "../../components/Hero";
```

---

## Export Patterns

| What | Pattern |
|------|---------|
| Component | `export default function ComponentName()` |
| TypeScript type/interface | `export interface MovieProps { ... }` or `export type ...` |
| Utility function | `export function helperName()` or `export const helperName = () =>` |
| Constants / data arrays | `const myData = [...]` (no export if file-local) |

Props interface goes in the same file as the component:

```tsx
interface MovieCardProps {
  title: string;
  rating: number;
  posterPath: string | null;
}

export default function MovieCard({ title, rating, posterPath }: MovieCardProps) {
  ...
}
```

---

## Async Server Component Pattern

```tsx
// src/components/MovieData.tsx
import { tmdbFetch } from "@/lib/tmdb";
import type { Movie } from "@/types/tmdb";

export default async function MovieData() {
  const movie = await tmdbFetch<Movie>("/movie/27205");

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}
```

---

## Dynamic Route Page

```tsx
// src/app/movie/[id]/page.tsx
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MoviePage({ params }: PageProps) {
  const { id } = await params;
  // fetch data using id...
  return <main>...</main>;
}
```

Note: In Next.js 15+, `params` and `searchParams` are Promises — always `await` them.

---

## Component Registration in page.tsx

After creating a component, register it in `src/app/page.tsx`:

```tsx
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <Overview />
      <Cast />
      <Trailer />
      <Reviews />
      <NewSection />   {/* ← add here in visual order */}
      <Footer />
    </main>
  );
}
```

---

## Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| `"use client"` on a section that only renders static HTML | Remove it — Server Component is default |
| `import Image from "next/image"` without configuring `remotePatterns` | Add hostname to `next.config.ts` |
| `params.id` without awaiting | Use `const { id } = await params` |
| Relative imports (`../../`) | Use `@/` alias |
| Putting API keys in client components | Server Component only, or Route Handler |
