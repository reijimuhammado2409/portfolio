// ==========================================
// PORTFOLIO WEBSITE DATABASE SCHEMA (DBML)
// ==========================================

// --- USER & AUTHENTICATION ---
Table users {
  id bigint [pk, increment]
  name varchar
  email varchar [unique]
  email_verified_at timestamp
  password varchar
  remember_token varchar
  created_at timestamp
  updated_at timestamp
}

// --- SITE & HERO CONFIGURATION ---
Table site_settings {
  id bigint [pk, increment]
  site_name varchar
  site_description text
  logo varchar
  favicon varchar
  cv_file varchar
  email varchar
  phone varchar
  address text
  github_url varchar
  linkedin_url varchar
  instagram_url varchar
  whatsapp_url varchar
  seo_title varchar
  seo_description text
  seo_keywords text
  created_at timestamp
  updated_at timestamp
}

Table heroes {
  id bigint [pk, increment]
  headline varchar
  subheadline varchar
  description text
  hero_image varchar
  primary_button_text varchar
  primary_button_url varchar
  secondary_button_text varchar
  secondary_button_url varchar
  created_at timestamp
  updated_at timestamp
}

// --- PROFILE & CONTENT SECTIONS ---
Table abouts {
  id bigint [pk, increment]
  title varchar
  description text
  image varchar
  created_at timestamp
  updated_at timestamp
}

Table skills {
  id bigint [pk, increment]
  name varchar
  icon varchar
  level int
  sort_order int
  is_active boolean
  created_at timestamp
  updated_at timestamp
}git push origin main

Table social_links {
  id bigint [pk, increment]
  platform varchar
  url varchar
  icon varchar
  sort_order int
  is_active boolean
  created_at timestamp
  updated_at timestamp
}

Table contact_messages {
  id bigint [pk, increment]
  name varchar
  email varchar
  subject varchar
  message text
  is_read boolean
  created_at timestamp
  updated_at timestamp
}

Table certificates {
  id bigint [pk, increment]
  title varchar
  issuer varchar
  issue_date date
  credential_id varchar
  credential_url varchar
  image varchar
  sort_order int
  is_active boolean
  created_at timestamp
  updated_at timestamp
}

Table educations {
  id bigint [pk, increment]
  institution varchar
  major varchar
  degree varchar
  gpa decimal(3,2)
  start_date date
  end_date date
  description text
  logo varchar
  sort_order int
  is_active boolean
  created_at timestamp
  updated_at timestamp
}

Table experiences {
  id bigint [pk, increment]
  company varchar
  position varchar
  employment_type varchar
  location varchar
  company_url varchar
  start_date date
  end_date date
  description text
  logo varchar
  sort_order int
  is_active boolean
  created_at timestamp
  updated_at timestamp
}

// --- PROJECTS & TECH STACKS (RELATIONAL MODULE) ---
Table categories {
  id bigint [pk, increment]
  name varchar
  slug varchar [unique]
  created_at timestamp
  updated_at timestamp
}

Table tech_stacks {
  id bigint [pk, increment]
  name varchar
  icon varchar
  created_at timestamp
  updated_at timestamp
}

Table projects {
  id bigint [pk, increment]
  category_id bigint
  title varchar
  slug varchar [unique]
  short_description text
  description text
  thumbnail varchar
  is_featured boolean
  sort_order int
  is_active boolean
  created_at timestamp
  updated_at timestamp
}

Table project_images {
  id bigint [pk, increment]
  project_id bigint
  image varchar
  sort_order int
  created_at timestamp
  updated_at timestamp
}

Table project_links {
  id bigint [pk, increment]
  project_id bigint
  type varchar
  label varchar
  url varchar
  sort_order int
  created_at timestamp
  updated_at timestamp
}

// Pivot Table for Many-to-Many relationship between Projects and Tech Stacks
Table project_tech_stacks {
  project_id bigint [pk]
  tech_stack_id bigint [pk]
}

// --- RELATIONSHIPS / FOREIGN KEYS ---
Ref: projects.category_id > categories.id [delete: cascade]
Ref: project_images.project_id > projects.id [delete: cascade]
Ref: project_links.project_id > projects.id [delete: cascade]
Ref: project_tech_stacks.project_id > projects.id [delete: cascade]
Ref: project_tech_stacks.tech_stack_id > tech_stacks.id [delete: cascade]