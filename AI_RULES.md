# AI RULES

## General
- Always read PROJECT_CONTEXT.md before generating code.
- Treat PROJECT_CONTEXT.md as the current project state.
- Generate code only for the current task.
- If requirements are unclear, ask before making assumptions.
- Follow existing project architecture.
- Never modify project structure unless requested.
- Never rename folders.
- Never rename database tables.
- Follow the existing ERD exactly.
- Do not add unnecessary packages.
- Ask before changing dependencies.
- Do not modify the approved database design unless explicitly requested.
- Do not create files outside the requested task.

---

## Backend

- Use Laravel 12.
- Use REST API.
- Use Eloquent ORM.
- Follow Laravel naming conventions.
- Use Form Request Validation if needed.
- Use Resource Controllers when appropriate.
- Follow the approved ERD exactly.
- Use Laravel best practices.

---

## Frontend

- Use React Functional Components.
- Use React Router.
- Use Axios.
- Use Tailwind CSS.
- Use GSAP only for animations.
- Never use jQuery.

---

## CMS

- Use Filament Resources.
- Use Laravel Storage for uploads.
- Hero, About, Site Setting are single records.

---

## Git

- One task = one commit.
- Use Conventional Commit.

Examples:

feat:
fix:
docs:
refactor:
style:
test:
chore:

---

## Coding Style

- Write clean code.
- Keep files modular.
- Reuse components.
- Avoid duplicate code.
- Explain generated code when requested.
- Do not overengineer simple features.
- Prefer readability over clever code.