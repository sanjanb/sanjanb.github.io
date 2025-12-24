# Development Guide

Comprehensive guide for developers working on the sanjanb.github.io portfolio website.

## Table of Contents

- [Quick Start](#quick-start)
- [Architecture Overview](#architecture-overview)
- [Development Workflow](#development-workflow)
- [File Organization](#file-organization)
- [Key Technologies](#key-technologies)
- [Common Tasks](#common-tasks)
- [Debugging](#debugging)
- [Performance Optimization](#performance-optimization)
- [Deployment](#deployment)

## Quick Start

### Initial Setup (5 minutes)

```bash
# 1. Clone repository
git clone https://github.com/sanjanb/sanjanb.github.io.git
cd sanjanb.github.io

# 2. Install dependencies
bundle install
npm install

# 3. Start development server
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# 4. Open browser
# Navigate to http://localhost:4000
```

### First-Time Configuration

```bash
# Install ImageMagick (required for responsive images)
# macOS
brew install imagemagick

# Ubuntu/Debian
sudo apt-get install imagemagick

# Windows
# Download from https://imagemagick.org/script/download.php
```

## Architecture Overview

### Technology Stack

```
┌─────────────────────────────────────────────────┐
│              GitHub Pages Hosting               │
├─────────────────────────────────────────────────┤
│                Jekyll 4.x                       │
│     (Static Site Generator - Ruby)              │
├─────────────────────────────────────────────────┤
│     Liquid Templates + Markdown Content         │
├─────────────────────────────────────────────────┤
│  Bootstrap 4 + Custom CSS + JavaScript          │
├─────────────────────────────────────────────────┤
│     Firebase (Analytics, Comments)              │
└─────────────────────────────────────────────────┘
```

### Build Process Flow

```
Markdown Files (*.md)
        ↓
  Liquid Processing
        ↓
  Layout Application
        ↓
  Plugin Processing
        ↓
  Asset Pipeline
        ↓
  Minification
        ↓
  Static HTML Output (_site/)
```

## Development Workflow

### Standard Development Cycle

```bash
# 1. Create feature branch
git checkout -b feature/new-component

# 2. Make changes
# Edit files in _includes/, _layouts/, _sass/, etc.

# 3. Preview changes
# Jekyll auto-rebuilds, refresh browser

# 4. Test changes
bundle exec jekyll build
# Check for errors

# 5. Commit and push
git add .
git commit -m "feat: add new component"
git push origin feature/new-component

# 6. Create pull request
# On GitHub, create PR to main branch
```

### Hot Reload Development

```bash
# Start server with live reload
bundle exec jekyll serve --livereload --incremental

# Options explained:
# --livereload: Auto-refresh browser on changes
# --incremental: Only rebuild changed files
# --drafts: Include draft posts
# --future: Show posts with future dates
```

## File Organization

### Content Files Structure

```
Content Organization:
├── _posts/          → Blog articles (YYYY-MM-DD-title.md)
├── _projects/       → Portfolio projects
├── _work/           → Work experience case studies
├── _achievements/   → Awards and achievements
├── _teaching/       → Teaching materials
├── _books/          → Book reviews
├── _pages/          → Static pages (About, CV, etc.)
└── _data/           → Structured data (YAML/JSON)
    ├── cv.yml       → Resume/CV data
    ├── socials.yml  → Social media links
    └── venues.yml   → Publication venues
```

### Template Files Structure

```
Template Organization:
├── _layouts/        → Page templates
│   ├── default.liquid     → Base template
│   ├── page.liquid        → Standard page
│   ├── post.liquid        → Blog post
│   ├── about.liquid       → About page
│   └── work_case_study.liquid → Work experience
├── _includes/       → Reusable components
│   ├── header.liquid      → Site header
│   ├── footer.liquid      → Site footer
│   ├── navigation.liquid  → Nav menu
│   └── scripts.liquid     → JavaScript includes
└── _sass/           → SCSS stylesheets
    ├── _variables.scss    → Design tokens
    ├── _mixins.scss       → Reusable styles
    └── _layout.scss       → Layout styles
```

### Asset Organization

```
assets/
├── css/
│   └── main.css              # Compiled CSS (generated)
├── img/
│   ├── projects/             # Project screenshots
│   ├── achievements/         # Achievement images
│   ├── blog/                 # Blog post images
│   ├── work/                 # Work experience images
│   └── profile/              # Personal photos
├── js/
│   ├── search/               # Search functionality
│   └── custom/               # Custom scripts
├── pdf/
│   ├── resume.pdf            # Resume/CV
│   └── certificates/         # Certificates
└── json/
    └── resume.json           # JSON Resume format
```

### Plugin Files

```
_plugins/
├── cache-bust.rb             # Cache busting for assets
├── external-posts.rb         # Fetch external blog posts
├── google-scholar-citations.rb # Academic citations
└── remove-accents.rb         # Text normalization
```

## Key Technologies

### Jekyll Configuration (_config.yml)

```yaml
# Core settings
title: blank
first_name: Sanjan
last_name: B M
email: sanjanacharaya1234@gmail.com

# URLs
url: https://sanjanb.github.io
baseurl: ""

# Features
enable_darkmode: true
enable_google_analytics: true
enable_math: true
enable_tooltips: true

# Collections
collections:
  projects:
    output: true
    permalink: /:collection/:title/
  work:
    output: true
    permalink: /:collection/:title/
```

### Liquid Templating

```liquid
<!-- Variables -->
{{ page.title }}
{{ site.author.name }}

<!-- Conditionals -->
{% if page.featured %}
  <div class="featured-badge">Featured</div>
{% endif %}

<!-- Loops -->
{% for post in site.posts limit:5 %}
  <article>
    <h3>{{ post.title }}</h3>
  </article>
{% endfor %}

<!-- Includes -->
{% include header.liquid %}

<!-- Filters -->
{{ post.date | date: "%B %d, %Y" }}
{{ content | strip_html | truncate: 150 }}
```

### Front Matter Examples

```yaml
# Blog Post Front Matter
---
layout: post
title: "Building Scalable AI Systems"
date: 2025-01-10
tags: [AI, machine-learning, architecture]
categories: [technical]
featured: true
related_posts: true
giscus_comments: true
---

# Project Front Matter
---
layout: page
title: AI-Powered CTI System
description: NLP-based threat intelligence
img: assets/img/cti-nlp-banner.jpg
importance: 1
category: work
github: https://github.com/sanjanb/cti-nlp-system
---

# Work Experience Front Matter
---
layout: work_case_study
title: "Farm To Table Platform"
company: "Karnataka Government"
role: "Lead Developer"
date: 2025-12-17
technologies: [Next.js, Firebase, React]
impact:
  - value: "State-Level"
    description: "Government initiative"
---
```

## Common Tasks

### Adding a New Blog Post

```bash
# 1. Create file with date prefix
touch _posts/2025-12-24-my-new-post.md

# 2. Add front matter and content
cat > _posts/2025-12-24-my-new-post.md << EOF
---
layout: post
title: "My New Post"
date: 2025-12-24
tags: [tag1, tag2]
categories: [category]
---

Your content here...
EOF

# 3. Add images (if needed)
cp image.jpg assets/img/blog/

# 4. Preview
# Server auto-reloads, check http://localhost:4000/blog/
```

### Adding a New Project

```bash
# 1. Create project file
touch _projects/my-new-project.md

# 2. Add front matter
cat > _projects/my-new-project.md << EOF
---
layout: page
title: My New Project
description: Brief project description
img: assets/img/projects/project-preview.jpg
importance: 1
category: work
github: https://github.com/username/repo
---

## Project Overview
Your detailed project description...
EOF

# 3. Add project images
mkdir -p assets/img/projects/my-new-project/
cp screenshots/* assets/img/projects/my-new-project/
```

### Updating CV Data

```yaml
# Edit _data/cv.yml

# Add new work experience
- title: Professional Evolution
  type: career_timeline
  contents:
    - title: New Position
      company: Company Name
      period: "2025 - Present"
      story: "Description of role..."
      impact:
        - "Achievement 1"
        - "Achievement 2"
      technologies: ["Tech1", "Tech2"]
```

### Adding Social Media Links

```yaml
# Edit _data/socials.yml

github_username: sanjanb
linkedin_username: sanjan-bm
kaggle_id: sanjanbm
scholar_userid: xeTdWMwAAAAJ
email: sanjanacharaya1234@gmail.com
```

### Creating Custom Layouts

```liquid
<!-- Create _layouts/custom-layout.liquid -->
---
layout: default
---

<div class="custom-wrapper">
  <header class="custom-header">
    <h1>{{ page.title }}</h1>
  </header>
  
  <main class="custom-content">
    {{ content }}
  </main>
  
  <footer class="custom-footer">
    {% include footer.liquid %}
  </footer>
</div>
```

## Debugging

### Common Build Errors

```bash
# Error: Dependency version conflict
# Solution: Update Gemfile.lock
bundle update

# Error: Liquid syntax error
# Solution: Check template syntax
# Look for unclosed {% %} tags or {{ }} variables

# Error: YAML parsing error
# Solution: Validate YAML front matter
# Use https://www.yamllint.com/

# Error: ImageMagick not found
# Solution: Install ImageMagick
brew install imagemagick  # macOS
```

### Verbose Build Output

```bash
# See detailed build information
bundle exec jekyll build --verbose

# Trace build errors
bundle exec jekyll build --trace

# Profile build performance
bundle exec jekyll build --profile
```

### Liquid Debugging

```liquid
<!-- Output variable value -->
{{ variable | inspect }}

<!-- Debug object contents -->
<pre>{{ page | jsonify }}</pre>

<!-- Check if variable exists -->
{% if variable %}
  Variable exists: {{ variable }}
{% else %}
  Variable is nil
{% endif %}
```

## Performance Optimization

### Image Optimization

```bash
# Enable responsive images in _config.yml
imagemagick:
  enabled: true
  widths: [480, 800, 1400]
  output_formats:
    webp: "-quality 85"

# Images auto-generate WebP versions
# Original: assets/img/photo.jpg
# Generated:
#   - assets/img/photo-480.webp
#   - assets/img/photo-800.webp
#   - assets/img/photo-1400.webp
```

### CSS Optimization

```yaml
# Enable minification in _config.yml
jekyll-minifier:
  compress_javascript: false  # Using terser instead
  
terser:
  compress:
    drop_console: true  # Remove console.log in production
```

### Lazy Loading

```html
<!-- Enable lazy loading for images -->
<img 
  src="image.jpg" 
  loading="lazy" 
  alt="Description"
  width="800" 
  height="600"
>
```

### Caching Strategy

```ruby
# _plugins/cache-bust.rb adds hash to assets
# CSS/JS files get cache-busting hashes
# main.css → main.css?v=abc123
```

## Deployment

### GitHub Pages Deployment

```bash
# Automatic deployment
# Push to main branch triggers GitHub Pages build

git add .
git commit -m "Update content"
git push origin main

# GitHub Actions automatically:
# 1. Builds Jekyll site
# 2. Deploys to GitHub Pages
# 3. Available at https://sanjanb.github.io
```

### Local Production Build

```bash
# Build for production
JEKYLL_ENV=production bundle exec jekyll build

# Output goes to _site/
# Deploy _site/ contents to hosting
```

### Pre-deployment Checklist

```bash
# 1. Clean build
bundle exec jekyll clean
bundle exec jekyll build

# 2. Check for broken links
# Use tool like broken-link-checker
npm install -g broken-link-checker
blc http://localhost:4000 -ro

# 3. Lighthouse audit
# Run in Chrome DevTools
# Target: 90+ in all categories

# 4. Test responsive design
# Chrome DevTools Device Mode
# Test mobile, tablet, desktop

# 5. Accessibility check
# Use axe DevTools extension
# Fix any violations
```

### Environment Variables

```bash
# Set environment for production optimizations
export JEKYLL_ENV=production

# Build with production settings
bundle exec jekyll build

# Enables:
# - Google Analytics
# - Minification
# - Production URLs
# - Optimized assets
```

## Advanced Topics

### Custom Plugins Development

```ruby
# _plugins/my_custom_plugin.rb
module Jekyll
  class MyCustomTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    def render(context)
      "<div class='custom'>#{@text}</div>"
    end
  end
end

Liquid::Template.register_tag('mycustom', Jekyll::MyCustomTag)
```

### Custom Collections

```yaml
# _config.yml
collections:
  custom_collection:
    output: true
    permalink: /:collection/:name/
    
# Create _custom_collection/ directory
# Add markdown files with front matter
```

### Advanced Liquid Filters

```liquid
<!-- Chain multiple filters -->
{{ post.content | strip_html | truncate: 150 | capitalize }}

<!-- Custom date formatting -->
{{ page.date | date: "%B %d, %Y" }}

<!-- JSON output -->
{{ site.data.cv | jsonify }}

<!-- Array manipulation -->
{{ site.tags | array_to_sentence_string }}
```

## Resources

### Official Documentation
- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [GitHub Pages](https://docs.github.com/en/pages)

### Tools
- [Jekyll Compose](https://github.com/jekyll/jekyll-compose) - CLI helpers
- [Jekyll Admin](https://github.com/jekyll/jekyll-admin) - Web-based admin
- [VSCode Jekyll Extension](https://marketplace.visualstudio.com/items?itemName=ginfuru.ginfuru-vscode-jekyll-syntax)

### Community
- [Jekyll Talk Forum](https://talk.jekyllrb.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/jekyll)

---

**Happy developing!** For questions or issues, check [CONTRIBUTING.md](CONTRIBUTING.md) or create an issue.
