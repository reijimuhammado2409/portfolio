/**
 * Mock Data for Frontend Slicing (Sprint 3)
 * Structure 100% aligned with Laravel API v1 JSON Responses
 */

export const mockLandingPageData = {
  hero: {
    id: 1,
    headline: "CRAFTING DIGITAL EXPERIENCES WITH PRECISION & ELEGANCE.",
    subheadline: "Full Stack Engineer & Creative UI/UX Specialist",
    description: "Specializing in high-performance web applications, scalable backend systems, and modern editorial dark user interfaces.",
    hero_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
    primary_button_text: "Explore Projects",
    primary_button_url: "#projects",
    secondary_button_text: "Contact Me",
    secondary_button_url: "#contact",
  },
  about: {
    id: 1,
    title: "PASSIONATE ABOUT BUILDING SCALABLE & BEAUTIFUL WEB SYSTEMS",
    description: "With years of experience in modern web development, I bridge the gap between complex software architecture and intuitive human-centered design. Based in Indonesia, I build digital products that leave a lasting impression.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
  },
  site_settings: {
    id: 1,
    site_name: "Muhammad Reiji Portfolio",
    site_description: "Editorial Dark Modern Portfolio of Muhammad Reiji",
    logo: null,
    favicon: null,
    cv_file: "#",
    email: "reijimuhammad24@gmail.com",
    phone: "+62 812 3456 7890",
    address: "Jakarta, Indonesia",
    github_url: "https://github.com/reijimuhammado2409",
    linkedin_url: "https://linkedin.com/in/muhammad-reiji",
    instagram_url: "https://instagram.com/reijimuhammad",
    whatsapp_url: "https://wa.me/6281234567890",
    seo_title: "Muhammad Reiji | Full Stack Developer",
    seo_description: "Portfolio of Full Stack Developer Muhammad Reiji",
    seo_keywords: "Laravel, React, Tailwind, Full Stack, Portfolio",
  },
  social_links: [
    { id: 1, platform: "GitHub", url: "https://github.com/reijimuhammado2409", icon: "Github", sort_order: 1 },
    { id: 2, platform: "LinkedIn", url: "https://linkedin.com/in/muhammad-reiji", icon: "Linkedin", sort_order: 2 },
    { id: 3, platform: "Instagram", url: "https://instagram.com/reijimuhammad", icon: "Instagram", sort_order: 3 },
    { id: 4, platform: "Mail", url: "mailto:reijimuhammad24@gmail.com", icon: "Mail", sort_order: 4 },
  ],
};

export const mockCategories = [
  { id: 1, name: "All", slug: "all" },
  { id: 2, name: "Full Stack", slug: "full-stack" },
  { id: 3, name: "Frontend", slug: "frontend" },
  { id: 4, name: "Backend API", slug: "backend-api" },
];

export const mockTechStacks = [
  { id: 1, name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 2, name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { id: 3, name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { id: 4, name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { id: 5, name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: 6, name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { id: 7, name: "Filament CMS", icon: "https://filamentphp.com/images/icon.svg" },
  { id: 8, name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export const mockProjects = [
  {
    id: 1,
    title: "Editorial Dark Portfolio Platform",
    slug: "editorial-dark-portfolio-platform",
    short_description: "A high-performance portfolio CMS built with Laravel Filament v5 and React Vite UI.",
    description: "Comprehensive portfolio management system featuring custom Filament CMS resources, RESTful API v1, Lenis smooth scrolling, and dark editorial aesthetic.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    is_featured: true,
    sort_order: 1,
    category: { id: 2, name: "Full Stack", slug: "full-stack" },
    tech_stacks: [
      { id: 1, name: "Laravel", icon: null },
      { id: 2, name: "React.js", icon: null },
      { id: 3, name: "Filament v5", icon: null },
      { id: 4, name: "Tailwind CSS", icon: null },
    ],
    images: [
      { id: 1, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000", sort_order: 1 },
      { id: 2, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", sort_order: 2 },
    ],
    links: [
      { id: 1, type: "github", label: "Source Code", url: "https://github.com/reijimuhammado2409/portfolio", sort_order: 1 },
      { id: 2, type: "demo", label: "Live Demo", url: "https://demo.portfolio.dev", sort_order: 2 },
    ],
  },
  {
    id: 2,
    title: "Enterprise Inventory & CMS Dashboard",
    slug: "enterprise-inventory-cms-dashboard",
    short_description: "Full-featured web admin dashboard for tracking corporate assets and metrics.",
    description: "Designed with modular components, role-based authentication, and automated data seeders for rapid deployment.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    is_featured: true,
    sort_order: 2,
    category: { id: 4, name: "Backend API", slug: "backend-api" },
    tech_stacks: [
      { id: 1, name: "Laravel", icon: null },
      { id: 2, name: "MySQL", icon: null },
    ],
    images: [],
    links: [
      { id: 1, type: "github", label: "GitHub Repository", url: "https://github.com/reijimuhammado2409", sort_order: 1 },
    ],
  },
  {
    id: 3,
    title: "SaaS Analytics & Performance Monitoring",
    slug: "saas-analytics-performance-monitoring",
    short_description: "Real-time interactive dashboard visualizing web app telemetry and user retention.",
    description: "Clean data charts, responsive grid system, and instant dark mode toggle.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    is_featured: false,
    sort_order: 3,
    category: { id: 3, name: "Frontend", slug: "frontend" },
    tech_stacks: [
      { id: 1, name: "React.js", icon: null },
      { id: 2, name: "Tailwind CSS", icon: null },
    ],
    images: [],
    links: [
      { id: 1, type: "demo", label: "Live Demo", url: "https://demo.portfolio.dev", sort_order: 1 },
    ],
  },
];

export const mockExperiences = [
  {
    id: 1,
    company: "Tech Development Studio",
    position: "Lead Full Stack Developer",
    employment_type: "Full-time",
    location: "Jakarta, Indonesia",
    company_url: "https://company.dev",
    start_date: "2024-01-01",
    end_date: null,
    description: "Architecting web platforms using Laravel 12 API and React Vite, directing UI design systems, and supervising database seeders.",
    logo: null,
    sort_order: 1,
  },
  {
    id: 2,
    company: "Digital Solutions Agency",
    position: "Frontend Developer",
    employment_type: "Contract",
    location: "Remote",
    company_url: "https://agency.dev",
    start_date: "2022-06-01",
    end_date: "2023-12-31",
    description: "Developed modern interactive web interfaces with Tailwind CSS and Framer Motion for international clients.",
    logo: null,
    sort_order: 2,
  },
];

export const mockEducations = [
  {
    id: 1,
    institution: "PPKD Jakarta (Pusat Pelatihan Kerja Daerah)",
    major: "Web Programming & Full Stack Development",
    degree: "Intensive Vocational Certification",
    gpa: 3.90,
    start_date: "2024-01-01",
    end_date: "2024-07-01",
    description: "Comprehensive training in PHP Laravel, MySQL, REST API engineering, modern JavaScript frameworks, and database architecture.",
    logo: null,
    sort_order: 1,
  },
  {
    id: 2,
    institution: "State University",
    major: "Computer Science / Information Technology",
    degree: "Bachelor of Computer Science (S.Kom)",
    gpa: 3.85,
    start_date: "2020-09-01",
    end_date: "2024-01-01",
    description: "Focused on software engineering principles, algorithm optimization, database design, and web architecture.",
    logo: null,
    sort_order: 2,
  },
];

export const mockCertificates = [
  {
    id: 1,
    title: "Full Stack Web Developer Certification",
    issuer: "PPKD & National Professional Certification Board (BNSP)",
    issue_date: "2024-07-15",
    credential_id: "BNSP-WEB-2024-8891",
    credential_url: "https://credential.bnsp.go.id",
    image: "https://images.unsplash.com/photo-1589330694653-aded6f78657f?auto=format&fit=crop&q=80&w=1000",
    sort_order: 1,
  },
  {
    id: 2,
    title: "Advanced Laravel & Enterprise API Development",
    issuer: "Global Tech Certification",
    issue_date: "2024-03-10",
    credential_id: "GTC-LARAVEL-9901",
    credential_url: "https://credential.globaltech.org",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=1000",
    sort_order: 2,
  },
];
