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

## Adding Content

### Adding a New Blog Post

1. **Create a new markdown file** in `src/content/blog/`:
   ```bash
   src/content/blog/my-new-post.md
   ```

2. **Add frontmatter** at the top of the file:
   ```markdown
   ---
   title: "Getting Started with Databricks"
   description: "A comprehensive guide to Databricks for data engineers"
   pubDate: 2024-01-15
   author: "Vasu Bajaj"
   image: "/blog/databricks-guide.webp"
   tags: ["Databricks", "Data Engineering", "Apache Spark"]
   category: "Databricks"
   ---
   ```

3. **Write your content** below the frontmatter using Markdown:
   ```markdown
   ## Introduction
   
   Databricks is a unified analytics platform...
   
   ## Key Features
   
   - Feature 1
   - Feature 2
   ```

4. **Add an image** (optional):
   - Place your image in `public/blog/`
   - Reference it in the frontmatter: `image: "/blog/your-image.webp"`

5. **Save the file** - The blog post will automatically appear on your site!

**Note:** Blogs are organized by `category` field. Use categories like:
- `Databricks`
- `GCP`
- `AWS`
- `Azure`
- `Snowflake`
- `Governance`

---

### Adding a New Case Study

1. **Create a new markdown file** in `src/content/case-studies/`:
   ```bash
   src/content/case-studies/my-project.md
   ```

2. **Add frontmatter** at the top:
   ```markdown
   ---
   title: "Cloud Migration for Enterprise Client"
   description: "Migrated 50TB data warehouse from on-prem to GCP BigQuery"
   client: "Fortune 500 Company"
   date: 2024-01-15
   image: "/case-studies/cloud-migration.webp"
   tags: ["GCP", "BigQuery", "Data Migration", "Terraform"]
   category: "Cloud Architecture"
   link: "https://project-url.com"
   ---
   ```

3. **Write your case study** using this structure:
   ```markdown
   ## Project Overview
   
   Brief description of the project and objectives.
   
   ## Challenge
   
   What problems needed to be solved?
   
   ## Solution
   
   - Approach taken
   - Technologies used
   - Implementation details
   
   ## Results
   
   - 50% cost reduction
   - 3x performance improvement
   - Zero downtime migration
   
   ## Technologies Used
   
   GCP, BigQuery, Terraform, Python, Apache Airflow
   ```

4. **Add an image** (optional):
   - Place your image in `public/case-studies/`
   - Reference it: `image: "/case-studies/your-image.webp"`

5. **Save the file** - The case study will appear automatically!

---

### Quick Tips

- **File naming**: Use lowercase with hyphens (e.g., `databricks-optimization.md`)
- **Dates**: Use format `YYYY-MM-DD` (e.g., `2024-01-15`)
- **Images**: Use `.webp` format for best performance
- **Tags**: Use relevant keywords for better organization
- **Categories**: Keep consistent naming for proper grouping

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
