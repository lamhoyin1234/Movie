---
name: movie-api
description: "Fetch and integrate movie data from the TMDB API in this project. Use when: replacing hardcoded movie data with live API data, fetching movie details, cast, trailers, reviews, similar movies, or any other TMDB endpoint. Covers env setup, Server Component fetch patterns, TypeScript types, and image handling."
argument-hint: "Describe what data to fetch (e.g. 'fetch cast from TMDB' or 'get movie reviews')"
---

# Movie API — TMDB Integration

## Overview

The [TMDB API](https://developer.themoviedb.org/docs) provides movie details, cast, trailers, reviews, and more. This project uses Next.js Server Components for data fetching — no client-side `fetch` or `useEffect` needed.

---

## Step 1 — Get a TMDB API Key

1. Create a free account at [themoviedb.org](https://www.themoviedb.org)
2. Go to **Settings → API** and generate an API Read Access Token (v4 Bearer) or API Key (v3)
3. Add to `.env.local` in the project root (never commit this file):

```
TMDB_API_KEY=your_api_key_here
TMDB_ACCESS_TOKEN=your_bearer_token_here
```

`.env.local` is already git-ignored by Next.js.

---

## Step 2 — Base Configuration

Create a shared fetch helper at `src/lib/tmdb.ts`:

```ts
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

if (!API_KEY) {
  throw new Error("TMDB_API_KEY is not set in environment variables.");
}

export async function tmdbFetch<T>(path: string): Promise<T> {
  const url = `${BASE_URL}${path}${path.includes("?") ? "&" : "?"}api_key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1 hour
  if (!res.ok) throw new Error(`TMDB fetch failed: ${res.status} ${path}`);
  return res.json() as Promise<T>;
}
```

**Image base URL**: `https://image.tmdb.org/t/p/`

| Size | Usage |
|------|-------|
| `w92` | Tiny thumbnails |
| `w185` | Small images |
| `w342` | Cast profile photos |
| `w500` | Poster / backdrop medium |
| `w780` | Backdrop large |
| `original` | Full resolution |

```ts
export const tmdbImage = (path: string, size = "w500") =>
  `https://image.tmdb.org/t/p/${size}${path}`;
```

---

## Step 3 — TypeScript Interfaces

Add to `src/lib/tmdb.ts` or a dedicated `src/types/tmdb.ts`:

```ts
export interface Movie {
  id: number;
  title: string;
  overview: string;
  tagline: string;
  release_date: string;           // "YYYY-MM-DD"
  runtime: number;                // minutes
  vote_average: number;           // 0–10
  vote_count: number;
  genres: { id: number; name: string }[];
  poster_path: string | null;
  backdrop_path: string | null;
  status: string;
  revenue: number;
  budget: number;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path: string | null;
}

export interface CreditsResponse {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export interface Video {
  id: string;
  key: string;           // YouTube video ID
  name: string;
  site: string;          // "YouTube"
  type: string;          // "Trailer", "Teaser", "Clip", etc.
  official: boolean;
}

export interface VideosResponse {
  id: number;
  results: Video[];
}

export interface Review {
  id: string;
  author: string;
  author_details: {
    name: string;
    username: string;
    rating: number | null;
    avatar_path: string | null;
  };
  content: string;
  created_at: string;
}

export interface ReviewsResponse {
  id: number;
  results: Review[];
  total_results: number;
  total_pages: number;
}
```

---

## Step 4 — Common Endpoints

The movie ID for **Inception** is `27205`.

| Data | Endpoint |
|------|----------|
| Movie details | `/movie/27205` |
| Cast & crew | `/movie/27205/credits` |
| Trailers & videos | `/movie/27205/videos` |
| Reviews | `/movie/27205/reviews` |
| Similar movies | `/movie/27205/similar` |
| Recommendations | `/movie/27205/recommendations` |
| Images | `/movie/27205/images` |

---

## Step 5 — Server Component Data Fetching Pattern

Components that fetch data must be **Server Components** (no `"use client"`).

```tsx
// src/components/Cast.tsx
import { tmdbFetch, tmdbImage } from "@/lib/tmdb";
import type { CreditsResponse } from "@/types/tmdb";

export default async function Cast() {
  const data = await tmdbFetch<CreditsResponse>("/movie/27205/credits");
  const cast = data.cast.slice(0, 8); // show top 8

  return (
    <section id="cast" className="py-20 sm:py-28 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="...">CAST</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cast.map((member) => (
            <div key={member.id} className="...">
              {member.profile_path ? (
                <img
                  src={tmdbImage(member.profile_path, "w342")}
                  alt={member.name}
                  className="w-full rounded-xl"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">
                  {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
              )}
              <h3 className="text-white font-bold">{member.name}</h3>
              <p className="text-amber-400 text-sm">{member.character}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Trailer — pick the official trailer
```ts
const data = await tmdbFetch<VideosResponse>("/movie/27205/videos");
const trailer = data.results.find(
  (v) => v.type === "Trailer" && v.site === "YouTube" && v.official
) ?? data.results.find((v) => v.type === "Trailer" && v.site === "YouTube");
// YouTube embed: `https://www.youtube.com/embed/${trailer.key}`
```

---

## Step 6 — Next.js Image (recommended)

Use `next/image` instead of `<img>` for automatic optimization. Add the TMDB domain to `next.config.ts`:

```ts
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org" },
    ],
  },
};
export default nextConfig;
```

Then in components:
```tsx
import Image from "next/image";
<Image
  src={tmdbImage(member.profile_path, "w342")}
  alt={member.name}
  width={342}
  height={513}
  className="rounded-xl"
/>
```

---

## Security Notes

- **Never** expose `TMDB_API_KEY` in client components — only use in Server Components or Route Handlers
- **Never** commit `.env.local` — it is in `.gitignore` by default with Next.js
- Use `process.env.TMDB_API_KEY` only in server-side code (files without `"use client"`)
