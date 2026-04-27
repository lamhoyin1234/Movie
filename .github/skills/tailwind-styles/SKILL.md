---
name: tailwind-styles
description: "Apply consistent Tailwind CSS styles for this movie project. Use when: styling components, choosing colors, applying typography, creating buttons, cards, borders, or gradients that match the dark cinema aesthetic of the Inception page. Reference for all design decisions in this project."
argument-hint: "Describe what you need to style (e.g. 'a rating badge' or 'a card grid')"
---

# Tailwind Styles — Project Design Reference

## Stack

- **Tailwind CSS v4** via `@tailwindcss/postcss`
- No `tailwind.config.js` — v4 uses CSS-first configuration via `src/app/globals.css`
- Dark cinema aesthetic: deep blacks, amber gold accents, white text

---

## Color Palette

| Role | Classes |
|------|---------|
| Page background | `bg-black` |
| Section alt background | `bg-zinc-900`, `bg-gray-950` |
| Card background | `bg-white/5` |
| Card hover | `hover:bg-white/10` |
| Primary accent | `text-amber-400`, `bg-amber-400`, `border-amber-400` |
| Accent muted | `border-amber-400/60`, `text-amber-400/80` |
| Heading text | `text-white` |
| Body text | `text-gray-300` |
| Secondary text | `text-gray-400` |
| Dividers / borders | `border-white/10`, `border-white/20` |

---

## Typography

### Gradient hero heading
```tsx
<h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight leading-none bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
  TITLE
</h1>
```

### Section heading (h2)
```tsx
<h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-4">
  SECTION
</h2>
```

### Card heading (h3)
```tsx
<h3 className="text-lg font-bold text-white mb-1">Card Title</h3>
```

### Body / description
```tsx
<p className="text-gray-400 text-sm leading-relaxed">Description text here.</p>
```

### Italic quote / tagline
```tsx
<p className="text-lg sm:text-2xl text-gray-300 font-light italic leading-relaxed">
  &ldquo;Quote here.&rdquo;
</p>
```

---

## Buttons

### Primary (solid amber)
```tsx
<a
  href="#anchor"
  className="px-8 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition-colors duration-200 text-sm uppercase tracking-wider"
>
  Button Label
</a>
```

### Secondary (outline)
```tsx
<a
  href="#anchor"
  className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-200 text-sm uppercase tracking-wider"
>
  Button Label
</a>
```

### Small action button
```tsx
<button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider border border-amber-400/60 text-amber-400 rounded-full hover:bg-amber-400/10 transition-colors duration-200">
  Action
</button>
```

---

## Badges & Labels

### Section label (above headings)
```tsx
<span className="inline-block mb-4 px-3 py-1 rounded-full border border-amber-400/60 text-amber-400 text-xs font-semibold uppercase tracking-widest">
  Label
</span>
```

### Genre / meta badge
```tsx
<span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-amber-400/60 text-amber-400 text-xs font-semibold uppercase tracking-widest">
  2010 · Sci-Fi · Thriller
</span>
```

### Status pill
```tsx
<span className="px-2 py-0.5 text-xs rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/40">
  Status
</span>
```

---

## Cards

### Standard dark card
```tsx
<div className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-colors duration-200">
  ...
</div>
```

### Avatar / initials circle
```tsx
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
  AB
</div>
```

Available gradient colors for avatars: `from-blue-500 to-blue-700`, `from-purple-500 to-purple-700`, `from-teal-500 to-teal-700`, `from-orange-500 to-orange-700`, `from-red-500 to-red-700`, `from-pink-500 to-pink-700`, `from-green-500 to-green-700`, `from-yellow-500 to-yellow-700`.

---

## Layout Patterns

### Section wrapper
```tsx
<section id="anchor" className="py-20 sm:py-28 bg-black">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    ...
  </div>
</section>
```

### Two-column grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
```

### Three-column card grid
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Four-column card grid (cast-style)
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

### Horizontal stat row
```tsx
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400">
  <span>⭐ 8.8 / 10</span>
  <span>•</span>
  <span>🕐 2h 28min</span>
</div>
```

---

## Transitions & Effects

- Hover transitions: always use `transition-colors duration-200`
- Backdrop blur (navbar): `backdrop-blur-sm`
- Subtle overlay: `opacity-10`
- Radial grid overlay:
```tsx
<div
  className="absolute inset-0 opacity-10"
  style={{
    backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
    backgroundSize: "40px 40px",
  }}
/>
```

---

## Responsive Breakpoints

| Prefix | Width |
|--------|-------|
| (none) | Mobile-first default |
| `sm:` | ≥ 640px |
| `md:` | ≥ 768px |
| `lg:` | ≥ 1024px |

Always design mobile-first. Use `sm:` for tablet and `lg:` for desktop adjustments.
