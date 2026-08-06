# Portfolio CMS

Personal portfolio website built using React as the frontend and Laravel as the backend REST API. The project uses Filament as the CMS so all website content can be managed dynamically without modifying the code.

---

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- GSAP
- Axios
- React Router DOM

### Backend
- Laravel 12
- Filament 5
- REST API

### Database
- MySQL

### Deployment (Planned)
- Frontend : Vercel
- Backend : Render / Platform.sh (TBD)
- DNS : Cloudflare
- CI/CD : GitHub Actions

---

## Features

- Portfolio Landing Page
- Admin Dashboard (Filament)
- Hero Management
- About Management
- Skills Management
- Experience Management
- Projects Management
- Certificate Management
- Contact Form
- Download CV
- SEO Settings

---

## Architecture

React
↓
REST API
↓
Laravel
↓
MySQL

---

## Installation

### Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Folder Structure

```
Portfolio
│
├── backend
├── frontend
├── docs
├── README.md
└── .gitignore
```

---

## License

Personal Portfolio Project.