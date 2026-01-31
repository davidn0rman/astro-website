# 🎨 David Norman - Personal Portfolio

A unique personal portfolio website featuring nostalgic MySpace and Windows XP aesthetics combined with modern web development practices.

Built with [Astro](https://astro.build) for blazing-fast performance and developer experience.

## ✨ Features

### 🚀 Modern Hero Section
- Full-height hero on desktop and mobile
- Animated gradient text with smooth transitions
- Floating background elements
- Smooth hover effects and call-to-action buttons

### 👤 Retro Social Profile About Section
- Custom MySpace-inspired profile layout
- Classic blue and orange color scheme with authentic styling
- Terminal-style coding section with blinking cursor
- Profile picture, bio, and interests sections
- Contact and interests tables with period-accurate design

### 💻 Windows XP Desktop Blog Interface
- Pixel-perfect Luna theme recreation
- Interactive desktop icons with selection states
- Draggable windows (Projects and Calculator can be repositioned!)
- **Functional taskbar** with live clock and window management:
  - Windows appear in taskbar when opened
  - Active window shown with highlighted taskbar button
  - Click to minimize/restore windows
  - Click unfocused windows to bring to front
- **"Back to Homepage" shortcut** with globe icon and shortcut arrow
- **Easter Eggs**:
  - Fully working calculator! 🧮
  - "Task failed successfully" error dialog (click My Computer or Start button)
- Windows Explorer-style blog posts folder with:
  - Sortable columns (Name, Type, Date Modified)
  - Dynamic content from markdown posts
  - Authentic XP window chrome and styling

### 📝 Blog System
- **Two blog views**:
  - `/blog` - Windows XP desktop interface
  - `/posts` - Modern clean list view
- Markdown-powered blog posts with frontmatter
- Code syntax highlighting (CSS, JavaScript, etc.)
- Tag-based organization
- Automatic date sorting (newest first)
- Beautiful typography and reading experience

### 🔗 Social Links & Footer
- LinkedIn, GitHub, and Twitter links
- Professional footer with quick links
- Responsive layout
- Built with Astro credit

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16
- **Language**: TypeScript (strict mode)
- **Content**: Markdown with Content Collections
- **Styling**: Vanilla CSS with scoped component styles
- **Fonts**: Google Fonts (Inter, system fonts for retro sections)
- **Icons**: Custom-generated icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to see your site!

### Building for Production

```bash
# Create a production build
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   └── images/              # Static images (icons, profile pic, globe icon)
├── src/
│   ├── components/
│   │   ├── Hero.astro       # Hero section with animated gradient
│   │   ├── About.astro      # Retro social profile section
│   │   ├── BlogPreview.astro # Homepage blog preview
│   │   ├── WindowsXPDesktop.astro # XP desktop with draggable windows
│   │   ├── SocialLinks.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── config.ts        # Content collection schema
│   │   └── posts/           # Blog posts (markdown files)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── blog.astro       # Windows XP blog interface
│   │   ├── posts.astro      # Modern blog list
│   │   └── posts/
│   │       └── [...slug].astro  # Dynamic blog post routes
│   └── styles/
│       ├── global.css       # Global styles and CSS variables
│       ├── about.css        # Retro profile styling
│       ├── blog-preview.css # Blog preview cards
│       └── windowsxp.css    # Windows XP theme (desktop, windows, taskbar)
└── astro.config.mjs
```

## ✍️ Adding Blog Posts

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

## 🎨 Customization

### Update Profile Information

Edit `src/components/About.astro` to update:
- Profile details
- Bio and interests
- Skills and experience

Add your profile picture to `/public/images/profile.jpg`

### Update Social Links

Edit `src/components/Footer.astro` to add your actual social media URLs:
- LinkedIn: `https://linkedin.com/in/yourprofile`
- GitHub: `https://github.com/yourusername`
- Twitter/X: `https://x.com/yourhandle`

### Change Colors

Modify CSS variables in `src/styles/global.css`:

```css
:root {
  --color-accent: #00d9ff;  /* Change accent color */
  --color-bg: #0a0a0a;      /* Change background */
  /* ... more variables */
}
```

## 🎮 Easter Eggs

- **Calculator**: Click the calculator icon on the Windows XP desktop for a fully functional calculator
- **Error Dialog**: Click "My Computer" or the "Start" button to see the classic "Task failed successfully" error
- **Draggable Windows**: Drag windows around the XP desktop and they'll pop to the front
- **Taskbar Management**: Open/close windows and watch them appear/disappear from the taskbar

## 🌐 Deployment

This is a static site that can be deployed to:
- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 🔮 Completed Features

- ✅ Windows XP desktop interface
- ✅ Draggable windows with z-index management
- ✅ Taskbar with window management
- ✅ Working calculator easter egg
- ✅ Error dialog easter eggs
- ✅ Homepage shortcut with globe icon
- ✅ Retro MySpace-style about section
- ✅ Modern blog preview on homepage
- ✅ Dynamic blog post loading from markdown
- ✅ Multiple blog views (XP and modern)
- ✅ Full-height hero on all devices
- ✅ Social media links in footer

## 📝 License

MIT License - feel free to use this as inspiration for your own portfolio!

## 🙏 Acknowledgments

- Inspired by the golden age of MySpace (2005-2008)
- Windows XP Luna theme nostalgia
- Built with love using Astro ❤️

---

**Ready to deploy!** 🚀 Just update your social media links and profile information, then ship it!
