# 🏗️ FRONTEND ARCHITECTURE & GUIDELINES
> **Framework:** React + Vite + Tailwind CSS v3/v4
> **Design Pattern:** Feature-based Component Structure & Atomic Modular Layout

---

## 1. 📁 Folder Structure Mandate

All frontend files inside `src/` must adhere strictly to this organization:

```text
src/
├── assets/             # Static media (local icons, fallback images, logos)
├── components/
│   ├── layout/         # Base layout wrappers (Navbar, Footer, SectionWrapper)
│   ├── sections/       # Main portfolio sections (HeroSection, AboutSection, etc.)
│   └── ui/             # Reusable atomic UI (Button, Card, Badge, Modal, Input)
├── data/               # Mock JSON data for Sprint 3 slicing
│   └── mockData.js     # Mirrors Laravel API v1 response structure
├── hooks/              # Custom React Hooks (e.g., useLenis, useScrollPosition)
├── services/           # API integration (Axios client for Sprint 4)
├── types/              # JS/TS Doc definitions for data structures
├── App.jsx             # Main App Wrapper (Lenis + Router setup)
└── main.jsx            # Entry point