# 01_REQUIREMENT.md

# Portfolio CMS - Requirement Specification

> Dokumen ini merupakan spesifikasi kebutuhan (Requirement Specification) untuk Project Portfolio CMS.
>
> Seluruh isi dokumen ini bersumber dari **Project 1 Portfolio.docx** dan disusun ulang agar mudah dipahami oleh AI Coding Agent (Antigravity).
>
> **Catatan**
>
> - Dokumen ini hanya mendokumentasikan requirement.
> - Tidak menambahkan fitur baru.
> - Jika terdapat informasi yang belum dijelaskan pada dokumen sumber maka akan diberi placeholder.

---

# 1. Project Overview

## Deskripsi

Portfolio CMS merupakan website portfolio pribadi yang menggunakan arsitektur **Headless CMS**, dimana:

- Frontend dibangun menggunakan React.
- Backend menggunakan Laravel REST API.
- Dashboard Admin menggunakan Filament.

Seluruh konten website dikelola secara dinamis melalui dashboard admin tanpa perlu mengubah kode frontend.

---

# 2. Project Goals

Tujuan utama aplikasi:

- Menampilkan informasi portfolio profesional.
- Mempermudah recruiter atau HR melihat pengalaman dan project.
- Memungkinkan administrator mengelola seluruh isi website melalui CMS.

---

# 3. Target Users

| Role | Deskripsi |
|-------|-----------|
| Visitor | Pengunjung umum yang melihat portfolio |
| HR / Recruiter | Melihat informasi kandidat dan menghubungi melalui Contact Form |
| Administrator | Mengelola seluruh konten website melalui Filament CMS |

---

# 4. Functional Requirements

## 4.1 Visitor Features

Visitor tidak memerlukan akun maupun login.

Visitor dapat melakukan aktivitas berikut:

| Feature | Deskripsi |
|----------|-----------|
| View Hero | Melihat Hero Section |
| View About | Melihat informasi About |
| View Skills | Melihat daftar skill |
| View Education | Melihat riwayat pendidikan |
| View Experience | Melihat pengalaman |
| View Projects | Melihat project portfolio |
| View Certificates | Melihat sertifikat |
| View Contact | Melihat informasi kontak |
| Download CV | Mengunduh CV aktif |
| Send Contact Message | Mengirim pesan melalui Contact Form |
| Open Social Media | Membuka link media sosial |

---

## 4.2 Administrator Features

Administrator memiliki akses penuh terhadap dashboard Filament.

### Authentication

Administrator dapat:

- Login
- Logout

---

### Content Management

Administrator dapat mengelola data berikut.

| Module | CRUD |
|----------|------|
| Hero | ✅ |
| About | ✅ |
| Skills | ✅ |
| Education | ✅ |
| Experience | ✅ |
| Projects | ✅ |
| Certificates | ✅ |

---

### Media Management

Administrator dapat:

- Upload Image
- Upload CV

---

### Settings Management

Administrator dapat mengelola:

- Social Media
- Contact Information
- Site Settings
- SEO Settings

---

### Utilities

Fitur utilitas yang tersedia:

- SMTP Test *(Optional)*

---

# 5. Non Functional Requirements

Website harus memenuhi kebutuhan non-fungsional berikut.

| Requirement | Keterangan |
|-------------|------------|
| Responsive | Mendukung Desktop, Tablet, Mobile |
| SEO Friendly | Mudah diindeks mesin pencari |
| Fast Loading | Performa website cepat |
| Accessibility | Mudah diakses pengguna |
| Animation | Mendukung animasi frontend |
| Security | Memiliki mekanisme keamanan |
| REST API | Frontend berkomunikasi melalui REST API |
| Maintainable | Mudah dikembangkan dan dipelihara |

---

# 6. Business Rules

Business rule merupakan aturan yang harus dipatuhi sistem.

## Authentication

- Hanya Administrator yang dapat login.
- Visitor tidak memiliki akun.

---

## Content Management

### Hero

- Hanya boleh terdapat **1 data Hero**.

---

### About

- Hanya boleh terdapat **1 data About**.

---

### Project

- Setiap Project wajib memiliki minimal **1 thumbnail**.

---

### CV

- Hanya boleh terdapat **1 file CV aktif**.

---

### Site Settings

- Site Settings hanya memiliki **1 record**.

---

### Contact Form

- Contact Form wajib menggunakan validasi.

---

### CMS

- Seluruh data portfolio dikelola melalui Filament CMS.

---

# 7. System Scope

## Yang termasuk dalam sistem

Frontend:

- Landing Page
- Hero
- About
- Skills
- Experience
- Projects
- Certificates
- Contact
- Download CV

Backend:

- REST API
- Authentication
- Content Management
- Media Upload
- Site Settings
- Social Media
- SEO Settings

Dashboard:

- Filament CMS

---

# 8. Assumptions

Dokumen sumber menetapkan beberapa asumsi berikut.

- Pengunjung menggunakan browser modern.
- Koneksi internet tersedia.
- Administrator memiliki akses dashboard.
- Storage server mencukupi untuk upload gambar.

---

# 9. Constraints

Implementasi sistem menggunakan batasan berikut.

| Item | Constraint |
|------|------------|
| PHP | 8.2 |
| Laravel | 12 |
| React | 19 |
| Node.js | 24 |
| MySQL | 8 |
| Filament | 5 |

---

# 10. Requirement Summary

## Visitor

- Melihat Hero
- Melihat About
- Melihat Skills
- Melihat Experience
- Melihat Projects
- Melihat Certificates
- Melihat Contact
- Download CV
- Kirim Contact Form
- Membuka Social Media

---

## Administrator

Authentication

- Login
- Logout

Content Management

- CRUD Hero
- CRUD About
- CRUD Skills
- CRUD Education
- CRUD Experience
- CRUD Projects
- CRUD Certificates

Media

- Upload Image
- Upload CV

Settings

- Social Media
- Contact Information
- Site Settings
- SEO Settings

Utilities

- SMTP Test (Optional)

---

# 11. Out of Scope

Dokumen sumber **tidak menjelaskan** requirement berikut secara rinci sehingga belum dimasukkan dalam requirement inti.

- Detail validasi setiap form.
- Hak akses selain Administrator.
- Struktur field setiap modul.
- Workflow upload media.
- Detail SEO configuration.
- Detail SMTP configuration.

Seluruh informasi tersebut akan didokumentasikan pada dokumen lain apabila tersedia.