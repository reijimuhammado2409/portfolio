# 04_API.md

# Portfolio CMS - REST API Specification (Detailed)

> Dokumen ini merupakan spesifikasi teknis lengkap untuk REST API Portfolio CMS.
>
> Digunakan sebagai panduan mutlak bagi AI Coding Agent (Antigravity) dalam membuat Controller, API Resource, Request Validation, dan Route pada Backend Laravel 12.

---

# 1. Standard API Response Structure

Semua response dari backend WAJIB dibungkus menggunakan kelas `Illuminate\Http\Resources\Json\JsonResource` atau helper terstruktur.

### 1.1 Success Response (Single Object)
```json
{
  "success": true,
  "message": "Data retrieved successfully",
  "data": {
    "id": 1,
    "key": "value"
  }
}
```

### 1.2 Success Response (Collection / Array)
```json
{
  "success": true,
  "message": "Data retrieved successfully",
  "data": [
    {
      "id": 1,
      "key": "value"
    }
  ]
}
```

### 1.3 Validation Error Response (HTTP 422)
```json
{
  "success": false,
  "message": "Validation errors occurred",
  "errors": {
    "email": [
      "The email field is required."
    ],
    "message": [
      "The message field is required."
    ]
  }
}
```

### 1.4 Rate Limit / Error Response (HTTP 429 / 500)
```json
{
  "success": false,
  "message": "Too Many Attempts."
}
```

---

# 2. Endpoints Technical Specification

## 2.1 Site Settings
* **Method:** `GET`
* **Endpoint:** `/api/site-settings`
* **Controller:** `SiteSettingController@index`
* **Resource:** `SiteSettingResource`
* **Response Schema (HTTP 200):**
```json
{
  "success": true,
  "message": "Site settings retrieved successfully",
  "data": {
    "id": 1,
    "site_name": "Developer Portfolio",
    "site_description": "Portfolio & Resume",
    "logo": "http://localhost:8000/storage/settings/logo.png",
    "favicon": "http://localhost:8000/storage/settings/favicon.ico",
    "cv_file": "http://localhost:8000/storage/cv/resume.pdf",
    "email": "developer@example.com",
    "phone": "+628123456789",
    "address": "Jakarta, Indonesia",
    "github_url": "https://github.com/username",
    "linkedin_url": "https://linkedin.com/in/username",
    "instagram_url": "https://instagram.com/username",
    "whatsapp_url": "https://wa.me/628123456789",
    "seo_title": "Developer Portfolio - Fullstack Engineer",
    "seo_description": "Personal website of Fullstack Engineer",
    "seo_keywords": "developer, fullstack, react, laravel"
  }
}
```

---

## 2.2 Hero Section
* **Method:** `GET`
* **Endpoint:** `/api/hero`
* **Controller:** `HeroController@index`
* **Resource:** `HeroResource`
* **Response Schema (HTTP 200):**
```json
{
  "success": true,
  "message": "Hero data retrieved successfully",
  "data": {
    "id": 1,
    "headline": "Hi, I'm John Doe",
    "subheadline": "Fullstack Developer & UI Designer",
    "description": "I build web and mobile applications.",
    "hero_image": "http://localhost:8000/storage/heroes/hero.png",
    "primary_button_text": "View Projects",
    "primary_button_url": "#projects",
    "secondary_button_text": "Contact Me",
    "secondary_button_url": "#contact"
  }
}
```

---

## 2.3 About Section
* **Method:** `GET`
* **Endpoint:** `/api/about`
* **Controller:** `AboutController@index`
* **Resource:** `AboutResource`
* **Response Schema (HTTP 200):**
```json
{
  "success": true,
  "message": "About data retrieved successfully",
  "data": {
    "id": 1,
    "title": "About Me",
    "description": "Detailed information about background and passions.",
    "image": "http://localhost:8000/storage/abouts/about.png"
  }
}
```

---

## 2.4 Skills
* **Method:** `GET`
* **Endpoint:** `/api/skills`
* **Controller:** `SkillController@index`
* **Logic:** `Skill::where('is_active', true)->orderBy('sort_order', 'asc')->get()`
* **Response Schema (HTTP 200):**
```json
{
  "success": true,
  "message": "Skills retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "React.js",
      "icon": "http://localhost:8000/storage/skills/react.svg",
      "level": 90,
      "sort_order": 1
    }
  ]
}
```

---

## 2.5 Educations
* **Method:** `GET`
* **Endpoint:** `/api/educations`
* **Controller:** `EducationController@index`
* **Logic:** `Education::where('is_active', true)->orderBy('sort_order', 'asc')->get()`
* **Response Schema (HTTP 200):**
```json
{
  "success": true,
  "message": "Educations retrieved successfully",
  "data": [
    {
      "id": 1,
      "institution": "State University",
      "major": "Computer Science",
      "degree": "Bachelor of Science",
      "gpa": "3.85",
      "start_date": "2020-09-01",
      "end_date": "2024-06-30",
      "description": "Graduated with honors.",
      "logo": "http://localhost:8000/storage/educations/university.png",
      "sort_order": 1
    }
  ]
}
```

---

## 2.6 Experiences
* **Method:** `GET`
* **Endpoint:** `/api/experiences`
* **Controller:** `ExperienceController@index`
* **Logic:** `Experience::where('is_active', true)->orderBy('sort_order', 'asc')->get()`
* **Response Schema (HTTP 200):**
```json
{
  "success": true,
  "message": "Experiences retrieved successfully",
  "data": [
    {
      "id": 1,
      "company": "Tech Corp",
      "position": "Frontend Developer",
      "employment_type": "Full-time",
      "location": "Jakarta, Indonesia",
      "company_url": "https://techcorp.com",
      "start_date": "2024-07-01",
      "end_date": null,
      "description": "Developing modern web apps.",
      "logo": "http://localhost:8000/storage/experiences/company.png",
      "sort_order": 1
    }
  ]
}
```

---

## 2.7 Projects List
* **Method:** `GET`
* **Endpoint:** `/api/projects`
* **Query Parameters:** `?category={slug}` (Optional)
* **Controller:** `ProjectController@index`
* **Logic:** Filter `is_active = true`, optional filter by `category.slug`, eager load `['category', 'techStacks']`.
* **Response Schema (HTTP 200):**
```json
{
  "success": true,
  "message": "Projects retrieved successfully",
  "data": [
    {
      "id": 1,
      "title": "Portfolio CMS",
      "slug": "portfolio-cms",
      "short_description": "Personal website CMS",
      "thumbnail": "http://localhost:8000/storage/projects/thumb.png",
      "is_featured": true,
      "sort_order": 1,
      "category": {
        "id": 1,
        "name": "Web Development",
        "slug": "web-development"
      },
      "tech_stacks": [
        {
          "id": 1,
          "name": "Laravel",
          "icon": "http://localhost:8000/storage/techs/laravel.svg"
        }
      ]
    }
  ]
}
```

---

## 2.8 Project Detail
* **Method:** `GET`
* **Endpoint:** `/api/projects/{slug}`
* **Controller:** `ProjectController@show`
* **Logic:** `Project::where('slug', $slug)->where('is_active', true)->with(['category', 'techStacks', 'images', 'links'])->firstOrFail()`
* **Response Schema (HTTP 200):**
```json
{
  "success": true,
  "message": "Project detail retrieved successfully",
  "data": {
    "id": 1,
    "title": "Portfolio CMS",
    "slug": "portfolio-cms",
    "short_description": "Personal website CMS",
    "description": "<p>Detailed description of the project in HTML/Text format.</p>",
    "thumbnail": "http://localhost:8000/storage/projects/thumb.png",
    "is_featured": true,
    "category": {
      "id": 1,
      "name": "Web Development",
      "slug": "web-development"
    },
    "tech_stacks": [
      {
        "id": 1,
        "name": "Laravel",
        "icon": "http://localhost:8000/storage/techs/laravel.svg"
      }
    ],
    "images": [
      {
        "id": 10,
        "image": "http://localhost:8000/storage/projects/screen1.png",
        "sort_order": 1
      }
    ],
    "links": [
      {
        "id": 1,
        "type": "github",
        "label": "Source Code",
        "url": "https://github.com/user/repo"
      }
    ]
  }
}
```

---

## 2.9 Certificates
* **Method:** `GET`
* **Endpoint:** `/api/certificates`
* **Controller:** `CertificateController@index`
* **Logic:** `Certificate::where('is_active', true)->orderBy('sort_order', 'asc')->get()`
* **Response Schema (HTTP 200):**
```json
{
  "success": true,
  "message": "Certificates retrieved successfully",
  "data": [
    {
      "id": 1,
      "title": "Laravel Certified Developer",
      "issuer": "Laravel LLC",
      "issue_date": "2025-01-15",
      "credential_id": "CERT-123456",
      "credential_url": "https://certificate.laravel.com/123456",
      "image": "http://localhost:8000/storage/certificates/cert.png",
      "sort_order": 1
    }
  ]
}
```

---

## 2.10 Social Links
* **Method:** `GET`
* **Endpoint:** `/api/social-links`
* **Controller:** `SocialLinkController@index`
* **Logic:** `SocialLink::where('is_active', true)->orderBy('sort_order', 'asc')->get()`
* **Response Schema (HTTP 200):**
```json
{
  "success": true,
  "message": "Social links retrieved successfully",
  "data": [
    {
      "id": 1,
      "platform": "GitHub",
      "url": "https://github.com/username",
      "icon": "http://localhost:8000/storage/socials/github.svg",
      "sort_order": 1
    }
  ]
}
```

---

## 2.11 Categories
* **Method:** `GET`
* **Endpoint:** `/api/categories`
* **Controller:** `CategoryController@index`
* **Response Schema (HTTP 200):**
```json
{
  "success": true,
  "message": "Categories retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Web Development",
      "slug": "web-development"
    }
  ]
}
```

---

## 2.12 Send Contact Message
* **Method:** `POST`
* **Endpoint:** `/api/contact`
* **Controller:** `ContactController@store`
* **Form Request:** `StoreContactRequest`
* **Middleware:** `throttle:3,1`
* **Request Payload (JSON):**
```json
{
  "name": "Jane Doe",
  "email": "janedoe@example.com",
  "subject": "Job Inquiry",
  "message": "Hi, I am interested in hiring you for a freelance project."
}
```
* **Validation Rules:**
  * `name`: `['required', 'string', 'max:255']`
  * `email`: `['required', 'email', 'max:255']`
  * `subject`: `['required', 'string', 'max:255']`
  * `message`: `['required', 'string', 'min:10']`
* **Response Schema (HTTP 201 Created):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```