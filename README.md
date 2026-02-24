# 🚀 Portfolio & Blog

A professional portfolio website built with **[Astro 5](https://astro.build/) + [Tailwind CSS 4](https://tailwindcss.com/)**. Showcase your projects, case studies, and share your insights through blog posts.

<br>

[![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat-square&logo=astro)](https://astro.build/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](./LICENSE)

<br>

## Features

- ✅ **Portfolio Showcase**: Display your best work with case studies
- ✅ **Blog Platform**: Share insights, tutorials, and thoughts
- ✅ **Dark & Light Mode**: Clean theme implementation
- ✅ **Optimized SEO**: Meta tags, Structured Data, RSS Feed, Open Graph, Twitter Cards, and Sitemap
- ✅ **Clean Architecture**: Organized and scalable code structure
- ✅ **Responsive Design**: Works perfectly on all devices

<br>

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

<br>

## Configuration

Update your personal information in `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Portfolio",
  description: "Your description",
  url: "https://yourportfolio.com",
  author: "Your Name",
  // ...
};
```

<br>

## Content Structure

### Case Studies
Add your project case studies in `src/content/case-studies/`:

```markdown
---
title: "Project Title"
description: "Brief description"
client: "Client Name"
date: 2024-01-15
image: "/case-studies/project.webp"
tags: ["React", "Next.js"]
category: "Web Development"
link: "https://project-url.com"
---

Your case study content here...
```

### Blog Posts
Add blog posts in `src/content/blog/`:

```markdown
---
title: "Post Title"
description: "Post description"
pubDate: 2024-01-15
author: "Your Name"
image: "/blog/post.webp"
tags: ["JavaScript", "Tutorial"]
category: "Development"
---

Your blog content here...
```

<br>

## Commands

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm run dev`       | Starts the development server at `localhost:4321`. |
| `npm run build`     | Generates the static site in the `dist/` folder.   |
| `npm run preview`   | Previews the production build locally.             |
| `npm run lint`      | Runs ESLint to ensure code quality.                |
| `npm run format`    | Formats code with Prettier.                        |
| `npm run fix`       | Runs format and lint auto-fix.                     |
| `npm run check`     | Runs astro check for diagnostics.                  |
| `npm run typecheck` | Verifies TypeScript types.                         |

<br>

## Pages

- **Home** (`/`) - Hero section with featured work
- **About** (`/about`) - Your story and skills
- **Case Studies** (`/case-studies`) - Portfolio projects
- **Blog** (`/blog`) - Articles and insights
- **Contact** (`/contact`) - Get in touch

<br>

## Customization

1. Update `src/config/site.ts` with your information
2. Replace images in `public/` with your own
3. Add your case studies to `src/content/case-studies/`
4. Write blog posts in `src/content/blog/`
5. Customize colors and styles in `src/styles/global.css`

<br>

## License

This project is under the **MIT** license. See the [LICENSE](./LICENSE) file for more details.

---

Built with [Astro Starter Pro](https://github.com/devgelo-labs/astro-starter-pro) by [Devgelo Labs](https://github.com/devgelo-labs)
