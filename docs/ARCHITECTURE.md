# 02_ARCHITECTURE.md

# Portfolio CMS - System Architecture

> Dokumen ini menjelaskan arsitektur sistem Portfolio CMS berdasarkan **Project 1 Portfolio.docx**.
>
> Dokumen ini hanya mendokumentasikan arsitektur yang telah ditentukan pada requirement dan tidak menambahkan teknologi maupun komponen baru di luar dokumen sumber.

---

# 1. Architecture Overview

Portfolio CMS menggunakan pendekatan **Client-Server Architecture** dengan **Layered Architecture** pada sisi backend.

Website dibangun menggunakan React sebagai frontend yang berkomunikasi dengan Laravel melalui REST API. Seluruh data disimpan di MySQL dan seluruh konten website dikelola melalui Filament CMS.

---

# 2. High Level Architecture

```text
                    Visitor / Administrator
                              │
                              │
                    Web Browser (Client)
                              │
                              ▼
                 React Frontend (Vite)
                              │
                    HTTP / REST API
                              │
                              ▼
                 Laravel 12 REST API
                              │
          ┌───────────────────┴───────────────────┐
          │                                       │
          ▼                                       ▼
   Filament Admin Panel                     MySQL Database
          │
          ▼
   Content Management
```

---

# 3. Architecture Layers

## 3.1 Presentation Layer

Technology

- React
- Vite
- Tailwind CSS
- GSAP
- Axios
- React Router

### Responsibilities

Frontend bertanggung jawab untuk:

- Menampilkan Landing Page.
- Menampilkan seluruh data portfolio.
- Mengonsumsi REST API.
- Mengirim Contact Form.
- Menampilkan animasi halaman.
- Menampilkan website yang responsif.

Frontend **tidak mengakses database secara langsung**.

---

## 3.2 Business Layer

Technology

- Laravel 12

### Responsibilities

Backend bertanggung jawab untuk:

- Menyediakan REST API.
- Memproses request dari frontend.
- Menjalankan business rules.
- Mengelola validasi data.
- Mengelola autentikasi administrator.
- Berkomunikasi dengan database.

Seluruh logika aplikasi berada pada layer ini.

---

## 3.3 Data Layer

Technology

- MySQL

### Responsibilities

Database digunakan untuk menyimpan seluruh data aplikasi.

Contoh data yang disimpan:

- Hero
- About
- Skills
- Education
- Experience
- Projects
- Certificates
- Contact Messages
- Social Media
- Site Settings

> **Catatan:** Struktur tabel dijelaskan pada dokumen `03_DATABASE.md`.

---

## 3.4 CMS Layer

Technology

- Filament

### Responsibilities

Filament digunakan sebagai dashboard administrator untuk:

- Login Administrator
- CRUD seluruh konten website
- Upload Image
- Upload CV
- Mengelola Site Settings
- Mengelola SEO
- Mengelola Social Media

Seluruh perubahan konten dilakukan melalui dashboard ini.

---

## 3.5 Infrastructure Layer

Komponen infrastruktur yang direncanakan berdasarkan dokumen sumber.

| Component | Function |
|-----------|----------|
| Vercel | Hosting Frontend |
| Render / Platform Cloud (TBD) | Hosting Backend |
| Cloudflare | DNS dan keamanan dasar |
| GitHub Actions | CI/CD Pipeline |

> **Catatan:** Dokumen sumber juga menyebutkan Railway sebagai alternatif platform cloud pada diagram infrastruktur, namun deployment backend masih berstatus **TBD (Render / Platform Cloud)**.

---

# 4. Architecture Diagram

```text
                        ┌─────────────────────────────┐
                        │        Web Browser          │
                        │ Visitor / HR / Recruiter    │
                        └──────────────┬──────────────┘
                                       │
                                       ▼
                        ┌─────────────────────────────┐
                        │     React Frontend          │
                        │   Vite + Tailwind + GSAP    │
                        └──────────────┬──────────────┘
                                       │
                              REST API (HTTP)
                                       │
                                       ▼
                        ┌─────────────────────────────┐
                        │      Laravel REST API       │
                        └───────┬───────────┬─────────┘
                                │           │
                                │           │
                                ▼           ▼
                      ┌──────────────┐  ┌──────────────┐
                      │  Filament    │  │    MySQL     │
                      │ Admin Panel  │  │   Database   │
                      └──────────────┘  └──────────────┘
```

---

# 5. Request Flow

## Visitor Request

```text
Visitor

↓

React Frontend

↓

REST API Request

↓

Laravel API

↓

MySQL

↓

Laravel API

↓

JSON Response

↓

React Frontend

↓

Visitor
```

---

## Administrator Request

```text
Administrator

↓

Filament Login

↓

Laravel Authentication

↓

Dashboard

↓

CRUD Content

↓

MySQL

↓

Update Data

↓

Frontend otomatis menggunakan data terbaru melalui REST API
```

---

# 6. Communication Flow

## Frontend ↔ Backend

Protocol

- HTTP
- REST API

Data Format

- JSON

Frontend menggunakan Axios untuk melakukan komunikasi dengan backend melalui endpoint REST API.

---

## Backend ↔ Database

Backend menggunakan Laravel untuk melakukan komunikasi dengan MySQL.

Seluruh operasi CRUD dilakukan melalui backend.

---

# 7. Deployment Architecture

```text
                Internet
                    │
                    ▼
             Cloudflare (DNS)
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
 React Frontend            Laravel Backend
     (Vercel)          (Render / Platform Cloud)
                                 │
                                 ▼
                             MySQL Database
```

> **Catatan:** Jenis layanan database masih **TBD** sesuai dokumen sumber.

---

# 8. Technology Stack

| Layer | Technology |
|--------|------------|
| Frontend | React, Vite, Tailwind CSS, GSAP, Axios, React Router |
| Backend | Laravel 12 REST API |
| CMS | Filament |
| Database | MySQL |
| Authentication | Laravel Auth, Filament Login |
| Upload | Laravel Storage |
| Email | SMTP |
| Security | Cloudflare Turnstile, Rate Limiter |
| Frontend Hosting | Vercel |
| Backend Hosting | Render / Platform Cloud (TBD) |
| CI/CD | GitHub Actions |

---

# 9. Architectural Principles

Berdasarkan dokumen sumber, sistem menerapkan prinsip-prinsip berikut:

- Client-Server Architecture.
- Layered Architecture pada backend.
- Frontend dan backend dipisahkan (Headless CMS).
- Komunikasi menggunakan REST API.
- Seluruh konten dikelola melalui Filament CMS.
- Database hanya dapat diakses melalui backend.

---

# 10. Architecture Constraints

| Item | Constraint |
|------|------------|
| PHP | 8.2 |
| Laravel | 12 |
| React | 19 |
| Node.js | 24 |
| MySQL | 8 |
| Filament | 5 |

---

# 11. Future Architecture Notes

Berdasarkan dokumen sumber, beberapa bagian masih berstatus rencana atau belum ditentukan.

- Platform hosting backend masih TBD (Render / Platform Cloud).
- Jenis layanan database deployment masih TBD (MySQL / PostgreSQL).
- Rancangan CI/CD masih berupa perencanaan.
- Detail infrastruktur produksi belum dijelaskan lebih lanjut.