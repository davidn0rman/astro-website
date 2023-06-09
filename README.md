# Welcome to my personal website.

Ultimately my slice of the internet where I can showcase my work, share my thoughts, and connect with others. While I cannot showcase a lot of my work here (due to the nature of some of my work), I can share some what I've learned through smaller projects or pieces of this website.

This website is built with [Astro](https://astro.build) because I bloody love Astro!

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16
- **Language**: TypeScript (strict mode)
- **Content**: Markdown with Content Collections
- **Styling**: Vanilla CSS with scoped component styles
- **Fonts**: Google Fonts
- **Icons**: Custom-generated icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm (personally I use PNPM, but it should work with npm)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to see the site!

### Building for Production

```bash
# Create a production build
pnpm run build

# Preview the production build
pnpm run preview
```

## Blog Post format

Create a new `.md` file in `src/content/posts/`:

```markdown
---
title: "Your Post Title"
description: "A brief description"
date: 2026-01-31
tags: ["Tag1", "Tag2"]
---

# Your Content Here

Write your blog post in markdown...

\`\`\`javascript
// Code examples with syntax highlighting!
console.log('Hello World');
\`\`\`
```

Posts automatically appear in:
- Homepage blog preview (latest 2 posts)
- `/blog` Windows XP Projects folder
- `/posts` modern list view

## 📝 License

MIT License - feel free to use this as inspiration for your own portfolio!

## 🙏 Acknowledgments

- Built with love using Astro ❤️
