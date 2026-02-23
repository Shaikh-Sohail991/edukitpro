# EduKit Pro — Next.js Website

Professional educational training kit website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 🏗️ Project Structure

```
edukitpro/
├── app/
│   ├── layout.tsx        # Root layout — Google Fonts (Syne + DM Sans) via next/font
│   ├── page.tsx          # Main page — assembles all sections
│   └── globals.css       # Tailwind base + custom utilities + animations
├── components/
│   ├── Header.tsx        # "use client" — sticky nav, scroll effect, mobile menu
│   ├── Hero.tsx          # Hero banner with circuit SVG and stats
│   ├── CircuitSVG.tsx    # Extracted PCB circuit illustration
│   ├── About.tsx         # About section with lab visual
│   ├── Products.tsx      # Product grid + CTA banner
│   ├── Features.tsx      # 6 feature cards on dark background
│   ├── Specifications.tsx # Spec table + highlight cards
│   ├── HowItWorks.tsx    # 4-step process with timeline
│   ├── Testimonials.tsx  # 3 testimonial cards
│   ├── Contact.tsx       # "use client" — quote request form with state
│   ├── Footer.tsx        # Landscape links footer
│   └── FadeUp.tsx        # "use client" — reusable scroll animation wrapper
├── tailwind.config.ts    # Custom colors, fonts
├── postcss.config.js
├── next.config.ts
└── tsconfig.json
```

## 🎨 Tech Stack

- **Next.js 14** — App Router
- **TypeScript** — strict mode
- **Tailwind CSS** — utility-first styling
- **Google Fonts** — Syne (headings) + DM Sans (body) via `next/font`
- **IntersectionObserver** — scroll-triggered fade-up animations

## 🔑 Key Patterns

- `"use client"` used only where needed: `Header`, `Contact`, `FadeUp`
- All server components are async-friendly (no client state)
- Custom CSS vars (`--font-syne`, `--font-dm-sans`) injected at `<html>` level
- Reusable `<FadeUp>` component wraps any content needing scroll animation
- All colors defined in `tailwind.config.ts` for consistency

## 📦 Build for Production

```bash
npm run build
npm start
```
