# Contributing to sanjanb.github.io

Thank you for your interest in contributing to my portfolio website! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contribution Guidelines](#contribution-guidelines)
- [Submitting Changes](#submitting-changes)
- [Style Guidelines](#style-guidelines)
- [Testing](#testing)

## Code of Conduct

This project follows a standard code of conduct. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Ruby** (version 2.7 or higher)
- **Bundler** gem
- **Node.js** (version 18.0 or higher)
- **npm** package manager
- **ImageMagick** (for responsive image generation)
- **Git** for version control

### Verifying Prerequisites

```bash
# Check Ruby version
ruby -v

# Check Bundler
bundle -v

# Check Node.js
node -v

# Check npm
npm -v

# Check ImageMagick
convert -version
```

## Development Setup

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/sanjanb.github.io.git
cd sanjanb.github.io
```

### 2. Install Dependencies

```bash
# Install Ruby dependencies
bundle install

# Install Node.js dependencies
npm install
```

### 3. Run Development Server

```bash
# Start Jekyll development server
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# The site will be available at http://localhost:4000
```

### 4. Watch for Changes

The Jekyll server automatically watches for changes and regenerates the site. However, for some changes (like `_config.yml`), you'll need to restart the server.

## Project Structure

```
sanjanb.github.io/
├── _achievements/          # Achievement entries (markdown)
├── _bibliography/          # Academic citations (BibTeX)
├── _books/                 # Book reviews
├── _data/                  # Site data (YAML)
│   ├── cv.yml             # CV/Resume data
│   ├── socials.yml        # Social media links
│   └── venues.yml         # Publication venues
├── _includes/             # Reusable HTML/Liquid components
├── _layouts/              # Page layout templates
├── _pages/                # Static pages (About, CV, etc.)
├── _plugins/              # Custom Jekyll plugins
├── _posts/                # Blog posts (markdown)
├── _projects/             # Project entries
├── _sass/                 # SCSS stylesheets
├── _teaching/             # Teaching materials
├── _work/                 # Work experience entries
├── assets/                # Static assets (images, CSS, JS, PDFs)
│   ├── css/              # Compiled CSS
│   ├── img/              # Images
│   ├── js/               # JavaScript files
│   ├── json/             # JSON data files
│   └── pdf/              # PDF documents
├── _config.yml            # Jekyll configuration
├── Gemfile               # Ruby dependencies
├── package.json          # Node.js dependencies
└── README.md             # Project documentation
```

## Contribution Guidelines

### What Can You Contribute?

1. **Bug Fixes**: Fix broken links, typos, layout issues
2. **Feature Enhancements**: Improve existing features
3. **Documentation**: Improve guides and documentation
4. **Accessibility**: Enhance WCAG compliance
5. **Performance**: Optimize load times and rendering
6. **New Features**: Add new functionality (discuss first)

### Before Starting Work

1. **Check existing issues** to avoid duplicate work
2. **Create an issue** describing what you plan to do
3. **Wait for feedback** before starting major changes
4. **Create a branch** for your work

## Submitting Changes

### 1. Create a Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

### 2. Make Your Changes

- Follow the style guidelines below
- Test your changes thoroughly
- Update documentation if needed

### 3. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat: add new achievement showcase component"

# Use conventional commits format:
# feat: new feature
# fix: bug fix
# docs: documentation changes
# style: formatting changes
# refactor: code restructuring
# test: adding tests
# chore: maintenance tasks
```

### 4. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name

# Then create a Pull Request on GitHub
```

### Pull Request Guidelines

- **Clear title**: Summarize the change in one line
- **Description**: Explain what changed and why
- **Reference issues**: Link to related issues
- **Screenshots**: Include before/after for UI changes
- **Testing**: Describe how you tested the changes

## Style Guidelines

### Markdown Files

```markdown
---
# Front matter follows YAML syntax
layout: post
title: "Clear, Descriptive Title"
date: 2025-12-24
tags: [tag1, tag2]
---

# Main Heading (H1)

Content goes here with proper formatting.

## Subheading (H2)

- Use proper list formatting
- Maintain consistent spacing
- Follow existing conventions
```

### Liquid Templates

```liquid
<!-- Use clear variable names -->
{% for post in site.posts limit:5 %}
  <article>
    <h3>{{ post.title }}</h3>
    <p>{{ post.excerpt }}</p>
  </article>
{% endfor %}

<!-- Add comments for complex logic -->
{% comment %}
  This loop displays the 5 most recent blog posts
{% endcomment %}
```

### CSS/SCSS

```scss
// Use BEM naming convention
.component {
  // Properties alphabetically ordered
  display: flex;
  margin: 1rem;
  padding: 0.5rem;
  
  &__element {
    // Nested elements
  }
  
  &--modifier {
    // Modifiers
  }
}

// Add comments for complex selectors
/* Navigation responsive breakpoint */
@media (max-width: 768px) {
  // Mobile styles
}
```

### JavaScript

```javascript
// Use modern ES6+ syntax
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Add JSDoc comments for functions
/**
 * Formats a date string
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
  // Implementation
}
```

### Accessibility Guidelines

```html
<!-- Always include alt text for images -->
<img src="path/to/image.jpg" alt="Descriptive alt text">

<!-- Use semantic HTML -->
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="/" aria-current="page">Home</a></li>
  </ul>
</nav>

<!-- Add ARIA labels where needed -->
<button aria-label="Close menu" aria-expanded="false">
  <span aria-hidden="true">×</span>
</button>

<!-- Ensure proper heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
```

## Testing

### Local Testing Checklist

Before submitting a pull request, ensure:

- [ ] Site builds without errors: `bundle exec jekyll build`
- [ ] No broken links (check browser console)
- [ ] Responsive design works (test on mobile/tablet/desktop)
- [ ] Accessibility: Test with keyboard navigation
- [ ] Accessibility: Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse scores maintained (90+ target)
- [ ] Images optimized (WebP format, appropriate sizes)
- [ ] No console errors in browser DevTools

### Build Testing

```bash
# Clean build
bundle exec jekyll clean
bundle exec jekyll build

# Check for errors in output
```

### Accessibility Testing

```bash
# Test with pa11y (install globally first)
npm install -g pa11y
pa11y http://localhost:4000

# Or use browser extensions:
# - axe DevTools
# - WAVE Evaluation Tool
# - Lighthouse (built into Chrome DevTools)
```

## Asset Management

### Adding Images

```bash
# Place images in appropriate directory
assets/img/
├── projects/           # Project images
├── achievements/       # Achievement images
├── blog/              # Blog post images
└── profile/           # Profile and personal images

# Use descriptive filenames
good: cti-nlp-dashboard-screenshot.jpg
bad: image123.jpg

# Optimize images before adding
# Use tools like ImageOptim, TinyPNG, or Squoosh
```

### Image Formats

- **WebP**: Primary format (auto-generated by ImageMagick)
- **JPEG**: Photos and complex images
- **PNG**: Logos, icons, transparency needed
- **SVG**: Vector graphics, icons

### Adding PDFs

```bash
# Place PDFs in assets/pdf/
assets/pdf/
├── resume.pdf
├── research-paper.pdf
└── certificates/
```

## Content Guidelines

### Writing Blog Posts

1. Create file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Include proper front matter
3. Use appropriate tags and categories
4. Add featured image if applicable
5. Proofread for grammar and clarity

### Adding Projects

1. Create markdown file in `_projects/`
2. Include front matter with required fields
3. Add project images to `assets/img/projects/`
4. Link to GitHub repository if applicable
5. Include clear description and technologies used

### Adding Work Experience

1. Create markdown file in `_work/`
2. Follow existing template structure
3. Include impact metrics and achievements
4. Add company logo if available
5. Use professional, concise language

## Common Issues and Solutions

### Jekyll Build Errors

```bash
# Clear cache and rebuild
bundle exec jekyll clean
rm -rf .jekyll-cache _site
bundle exec jekyll build

# Update dependencies
bundle update
```

### Image Generation Issues

```bash
# Ensure ImageMagick is installed
convert -version

# If images aren't generating, check _config.yml
# imagemagick.enabled should be true
```

### Port Already in Use

```bash
# Find process using port 4000
lsof -i :4000  # macOS/Linux
netstat -ano | findstr :4000  # Windows

# Kill the process or use different port
bundle exec jekyll serve --port 4001
```

## Resources

### Documentation

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [al-folio Theme](https://github.com/alshedivat/al-folio)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [YAML Syntax](https://yaml.org/spec/1.2/spec.html)

### Tools

- [Markdown Guide](https://www.markdownguide.org/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Questions?

If you have questions or need help:

1. Check existing issues and discussions
2. Review the documentation in `/docs`
3. Create a new issue with the `question` label
4. Contact: sanjanacharaya1234@gmail.com

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (see LICENSE file).

---

**Thank you for contributing to making this portfolio better!** 🚀
