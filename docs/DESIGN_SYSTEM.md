# 🎨 DESIGN SYSTEM: Editorial Dark Modern Portfolio
> **Design Reference:** Inspired by [landonorris.com](https://landonorris.com/) & Lenis Smooth Scroll aesthetic.
> **Core Concept:** High-contrast typography, ultra-clean layout, dark obsidian surfaces, and subtle micro-interactions.

---

## 1. 🎨 Color Tokens & Palette

Strict color variables to be used via Tailwind CSS or CSS Custom Properties. Do NOT use default Tailwind colors like `bg-black` or `bg-slate-900` directly.

### Background & Surface
* **Obsidian Background (`bg-primary`):** `#0d0d0f` *(Deep dark canvas)*
* **Surface Card (`bg-surface`):** `#141419` *(Elevated containers/cards)*
* **Surface Hover (`bg-surface-hover`):** `#1c1c24` *(Hover state for cards/buttons)*
* **Glassmorphism Nav (`bg-glass`):** `rgba(13, 13, 15, 0.75)` with `backdrop-blur-md`

### Typography & Icons
* **Text Primary (`text-primary`):** `#f4f4f6` *(Off-white for high legibility without harsh glare)*
* **Text Muted (`text-muted`):** `#71717a` *(Zinc-500 for secondary descriptions, tags, dates)*
* **Text Subtle (`text-subtle`):** `#a1a1aa` *(Zinc-400 for secondary headers & meta info)*

### Accent & Borders
* **Border Default (`border-subtle`):** `rgba(255, 255, 255, 0.08)` *(Ultra-thin modern subtle dividers)*
* **Border Active (`border-active`):** `rgba(255, 255, 255, 0.25)` *(Focus/Active state)*
* **Accent Monochrome:** `#ffffff` *(Clean high-contrast highlights)*
* **Status Badge Available:** `#22c55e` *(Emerald green dot for "Available for Work")*

---

## 2. 🔤 Typography Hierarchy & Rules

Typography dictates 80% of the visual quality. Always pair Display font for Headings with Clean Sans-Serif for Body text.

### Font Families
* **Font Display (Headings):** `'Plus Jakarta Sans'`, `'Syne'`, or `'Cabinet Grotesk'`, sans-serif *(Bold, geometric, editorial look)*.
* **Font Body (Paragraphs/Code):** `'Inter'`, sans-serif *(Clean, readable, neutral)*.

### Scale & Weight Rules
* **Hero Title (Massive):** `text-5xl sm:text-7xl lg:text-8xl`, `font-extrabold`, `tracking-tight`, `leading-[1.05]`
* **Section Header:** `text-3xl sm:text-5xl`, `font-bold`, `tracking-tight`
* **Section Tag / Subhead:** `text-xs sm:text-sm`, `font-semibold`, `uppercase`, `tracking-[0.2em]`, `text-muted`
* **Card Title:** `text-xl sm:text-2xl`, `font-bold`
* **Body Text:** `text-base sm:text-lg`, `font-normal`, `leading-relaxed`, `text-muted`
* **Meta / Micro Copy:** `text-xs`, `font-medium`, `uppercase`, `tracking-wider`

---

## 3. 📐 Layout Grid, Spacing & Container

* **Max Container Width:** `max-w-7xl` centered (`mx-auto px-4 sm:px-8 lg:px-12`).
* **Section Vertical Padding:** Minimum `py-20 sm:py-32` per section to preserve large whitespace (breathing room).
* **Grid Structures:**
  * **Projects:** Asymmetric 2-column grid (`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12`).
  * **Experience / Education:** Split-column layout (Left 30% for Timeline/Company, Right 70% for Roles & Achievements).
  * **Tech Stack:** Grid or Horizontal Ticker (`flex flex-wrap gap-3` or infinite auto-scroll marquee).

---

## 4. 🧩 Component Styling Standards

### Buttons
* **Primary CTA:** Solid White background (`bg-[#f4f4f6] text-[#0d0d0f] font-semibold px-6 py-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.03]`).
* **Secondary / Outline Button:** Bordered glass (`border border-white/10 bg-white/5 text-white px-6 py-3 rounded-full hover:border-white/30 hover:bg-white/10 transition-all duration-300`).

### Cards (Project, Experience, Certificate)
* **Base Style:** `bg-[#141419] border border-white/[0.08] rounded-2xl overflow-hidden p-6 sm:p-8 transition-all duration-500`.
* **Hover Behavior:** `hover:border-white/20 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-black/50`.
* **Image Container:** Image MUST have `overflow-hidden rounded-xl bg-neutral-900` with image transition `transition-transform duration-700 ease-out group-hover:scale-105`.

### Badges & Pill Tags
* **Tech Stack Tags:** `bg-white/5 border border-white/10 text-xs text-zinc-300 px-3 py-1.5 rounded-full font-medium tracking-wide`.

---

## 5. ✨ Animation & Micro-Interactions Mandate

1. **Lenis Smooth Scroll:** Global smooth scroll wrapper enabled at root application level.
2. **Scroll Entrance (Framer Motion):** 
   * Fade-Up effect on section headers and cards: `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}`.
3. **Stagger Children:** Lists/Grids must animate sequentially with `staggerChildren: 0.1`.
4. **No Excessive Animations:** Do NOT use bouncy spring physics. Keep all transitions linear, smooth, and luxury-oriented.

---

## 6. 🚨 Strict AI Coding Guardrails

When generating frontend code for this project:
1. **NEVER** use bright or random hex colors. Stick strictly to the defined color variables in this document.
2. **NEVER** mix different font families randomly.
3. **NEVER** compress section paddings (`py-4` or `py-8` on major sections is strictly forbidden).
4. **ALWAYS** wrap main page layouts inside the Lenis provider and maintain responsive design for Mobile, Tablet, and Desktop.

### Premium Bezier & Timing (Directly Extracted from landonorris.com)
* **Custom Easing Curve:** `cubic-bezier(0.65, 0.05, 0, 1)` (Gunakan nilai ini pada Framer Motion / CSS Transitions untuk rasa animasi yang berat & mewah).
* **Default Duration:** `0.75s` (Jangan terlalu cepat agar menguatkan kesan editorial).