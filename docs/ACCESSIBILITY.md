# Accessibility Guide

Comprehensive accessibility guidelines for the sanjanb.github.io portfolio website, ensuring WCAG 2.1 AA compliance.

## Table of Contents

- [Overview](#overview)
- [ARIA Labels Reference](#aria-labels-reference)
- [Semantic HTML Guidelines](#semantic-html-guidelines)
- [Keyboard Navigation](#keyboard-navigation)
- [Screen Reader Optimization](#screen-reader-optimization)
- [Color and Contrast](#color-and-contrast)
- [Forms and Inputs](#forms-and-inputs)
- [Testing Accessibility](#testing-accessibility)
- [Common Patterns](#common-patterns)

## Overview

### Accessibility Goals

- **WCAG 2.1 Level AA Compliance**: Meet international accessibility standards
- **Keyboard Navigation**: Full functionality without a mouse
- **Screen Reader Support**: Optimized for NVDA, JAWS, VoiceOver
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus Indicators**: Visible focus states for all interactive elements
- **Responsive Design**: Accessible across all device sizes

### Quick Accessibility Checklist

```markdown
Page Structure:
- [ ] Proper heading hierarchy (h1 → h2 → h3, no skipping)
- [ ] Meaningful page title
- [ ] Skip to main content link
- [ ] Landmark regions (header, nav, main, footer)

Content:
- [ ] All images have descriptive alt text
- [ ] Links have meaningful text (avoid "click here")
- [ ] Tables have proper headers
- [ ] Lists use semantic HTML (<ul>, <ol>, <dl>)

Interaction:
- [ ] All functionality keyboard accessible
- [ ] Focus visible on all interactive elements
- [ ] Form inputs have associated labels
- [ ] Error messages are clear and accessible

Media:
- [ ] Videos have captions
- [ ] Audio has transcripts
- [ ] Animations can be paused/disabled
- [ ] No auto-playing media
```

## ARIA Labels Reference

### Navigation Components

```html
<!-- Main Navigation -->
<nav role="navigation" aria-label="Main navigation">
  <ul role="list">
    <li>
      <a href="/" aria-current="page">Home</a>
    </li>
    <li>
      <a href="/about/">About</a>
    </li>
    <li>
      <a href="/blog/">Blog</a>
    </li>
  </ul>
</nav>

<!-- Breadcrumb Navigation -->
<nav aria-label="Breadcrumb">
  <ol role="list">
    <li><a href="/">Home</a></li>
    <li><a href="/blog/">Blog</a></li>
    <li aria-current="page">Current Post</li>
  </ol>
</nav>

<!-- Pagination -->
<nav aria-label="Pagination" role="navigation">
  <ul role="list">
    <li>
      <a href="/page/1/" aria-label="Previous page">
        <span aria-hidden="true">←</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li>
      <a href="/page/2/" aria-current="page" aria-label="Page 2, current page">2</a>
    </li>
    <li>
      <a href="/page/3/" aria-label="Go to page 3">3</a>
    </li>
    <li>
      <a href="/page/3/" aria-label="Next page">
        <span aria-hidden="true">→</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
```

### Interactive Elements

```html
<!-- Buttons -->
<button 
  type="button" 
  aria-label="Close dialog" 
  aria-expanded="false">
  <span aria-hidden="true">×</span>
</button>

<button 
  type="button" 
  aria-label="Toggle dark mode"
  aria-pressed="false">
  <span class="icon" aria-hidden="true">🌙</span>
  <span class="sr-only">Dark mode</span>
</button>

<!-- Dropdown Menu -->
<button 
  aria-expanded="false" 
  aria-controls="dropdown-menu"
  aria-haspopup="true">
  More Options
</button>
<ul id="dropdown-menu" hidden>
  <li><a href="/option1/">Option 1</a></li>
  <li><a href="/option2/">Option 2</a></li>
</ul>

<!-- Search -->
<form role="search" aria-label="Site search">
  <label for="search-input">Search the site</label>
  <input 
    type="search" 
    id="search-input"
    name="query"
    aria-label="Search query"
    placeholder="Enter search term">
  <button type="submit" aria-label="Submit search">
    <span aria-hidden="true">🔍</span>
  </button>
</form>
```

### Content Sections

```html
<!-- Article/Post -->
<article 
  role="article" 
  aria-labelledby="article-title">
  <header>
    <h1 id="article-title">Article Title</h1>
    <time datetime="2025-12-24">December 24, 2025</time>
  </header>
  <div role="main">
    <!-- Article content -->
  </div>
</article>

<!-- Sidebar -->
<aside 
  role="complementary" 
  aria-label="Related posts">
  <h2>Related Posts</h2>
  <!-- Related content -->
</aside>

<!-- Footer -->
<footer role="contentinfo" aria-label="Site footer">
  <nav aria-label="Footer navigation">
    <!-- Footer links -->
  </nav>
</footer>
```

### Cards and Lists

```html
<!-- Project Cards -->
<section aria-labelledby="projects-heading">
  <h2 id="projects-heading">Featured Projects</h2>
  <div class="project-grid" role="list">
    <article class="project-card" role="listitem">
      <img 
        src="project.jpg" 
        alt="CTI NLP System dashboard interface showing threat analysis"
        loading="lazy">
      <h3>
        <a href="/projects/cti-nlp/">
          AI-Powered Cyber Threat Intelligence System
        </a>
      </h3>
      <p>NLP-based threat intelligence platform</p>
      <div aria-label="Project technologies">
        <span class="tech-badge" aria-label="Technology: Python">Python</span>
        <span class="tech-badge" aria-label="Technology: BERT">BERT</span>
      </div>
    </article>
  </div>
</section>
```

### Modal Dialogs

```html
<!-- Modal -->
<div 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description">
  <h2 id="dialog-title">Confirm Action</h2>
  <p id="dialog-description">Are you sure you want to proceed?</p>
  <button aria-label="Confirm and proceed">Confirm</button>
  <button aria-label="Cancel and close dialog">Cancel</button>
</div>
```

## Semantic HTML Guidelines

### Heading Hierarchy

```html
<!-- Correct heading structure -->
<h1>Page Title</h1>
  <h2>Main Section</h2>
    <h3>Subsection</h3>
    <h3>Another Subsection</h3>
  <h2>Another Main Section</h2>
    <h3>Subsection</h3>

<!-- INCORRECT - Skips heading level -->
<h1>Page Title</h1>
  <h3>Section</h3>  <!-- ❌ Skips h2 -->
```

### Landmark Regions

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Page Title - Sanjan B M</title>
</head>
<body>
  <!-- Skip to main content link -->
  <a href="#main-content" class="skip-link">
    Skip to main content
  </a>
  
  <!-- Header -->
  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      <!-- Navigation -->
    </nav>
  </header>
  
  <!-- Main Content -->
  <main id="main-content" role="main">
    <h1>Page Heading</h1>
    <!-- Page content -->
  </main>
  
  <!-- Sidebar (if applicable) -->
  <aside role="complementary" aria-label="Sidebar">
    <!-- Sidebar content -->
  </aside>
  
  <!-- Footer -->
  <footer role="contentinfo">
    <!-- Footer content -->
  </footer>
</body>
</html>
```

### Lists and Tables

```html
<!-- Unordered List -->
<ul role="list">
  <li>List item 1</li>
  <li>List item 2</li>
</ul>

<!-- Ordered List -->
<ol role="list">
  <li>Step 1</li>
  <li>Step 2</li>
</ol>

<!-- Definition List -->
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>

<!-- Data Table -->
<table role="table" aria-label="Project metrics">
  <caption>Performance Metrics Comparison</caption>
  <thead>
    <tr>
      <th scope="col">Metric</th>
      <th scope="col">Before</th>
      <th scope="col">After</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Accuracy</th>
      <td>78.0%</td>
      <td>89.2%</td>
    </tr>
  </tbody>
</table>
```

## Keyboard Navigation

### Focus Management

```css
/* Visible focus indicators */
:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Skip focus for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}

/* Ensure focus visible for keyboard users */
:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### Keyboard Shortcuts

```javascript
// Example: Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
  const modal = document.querySelector('[role="dialog"]');
  
  if (!modal) return;
  
  // Close on Escape
  if (e.key === 'Escape') {
    closeModal();
  }
  
  // Trap focus within modal
  if (e.key === 'Tab') {
    trapFocus(modal, e);
  }
});

function trapFocus(container, event) {
  const focusableElements = container.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  if (event.shiftKey && document.activeElement === firstElement) {
    lastElement.focus();
    event.preventDefault();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    firstElement.focus();
    event.preventDefault();
  }
}
```

## Screen Reader Optimization

### Screen Reader Only Text

```html
<!-- CSS for screen reader only text -->
<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
</style>

<!-- Usage -->
<button aria-label="Delete item">
  <span class="icon" aria-hidden="true">🗑️</span>
  <span class="sr-only">Delete</span>
</button>

<a href="/download/resume.pdf">
  Download Resume
  <span class="sr-only">(PDF, 245 KB)</span>
</a>
```

### ARIA Live Regions

```html
<!-- Status Messages -->
<div 
  role="status" 
  aria-live="polite" 
  aria-atomic="true"
  class="status-message">
  <!-- Dynamically updated status -->
</div>

<!-- Error Messages -->
<div 
  role="alert" 
  aria-live="assertive" 
  aria-atomic="true"
  class="error-message">
  <!-- Critical errors -->
</div>

<!-- Loading States -->
<div 
  role="status" 
  aria-live="polite"
  aria-busy="true">
  <span class="sr-only">Loading content, please wait...</span>
  <div class="spinner" aria-hidden="true"></div>
</div>
```

### Hiding Decorative Elements

```html
<!-- Decorative images -->
<img src="decorative.jpg" alt="" role="presentation">
<img src="decorative.jpg" alt="" aria-hidden="true">

<!-- Decorative icons -->
<span class="icon" aria-hidden="true">★</span>
<span class="sr-only">Featured</span>

<!-- Font icons -->
<i class="fa fa-home" aria-hidden="true"></i>
<span class="sr-only">Home</span>
```

## Color and Contrast

### Contrast Requirements

```yaml
Normal Text (< 18pt):
  - Minimum: 4.5:1 contrast ratio
  - Enhanced: 7:1 contrast ratio

Large Text (≥ 18pt or 14pt bold):
  - Minimum: 3:1 contrast ratio
  - Enhanced: 4.5:1 contrast ratio

UI Components:
  - Interactive elements: 3:1 minimum
  - Focus indicators: 3:1 minimum
```

### Color Usage

```html
<!-- Don't rely on color alone -->
<!-- BAD -->
<span style="color: red;">Error</span>
<span style="color: green;">Success</span>

<!-- GOOD -->
<span class="error">
  <span aria-hidden="true">❌</span>
  Error: Invalid input
</span>
<span class="success">
  <span aria-hidden="true">✓</span>
  Success: Form submitted
</span>
```

### Dark Mode Considerations

```css
/* Ensure contrast in both modes */
:root {
  --text-color: #1a1a1a;
  --background-color: #ffffff;
  --link-color: #0066cc;
}

[data-theme="dark"] {
  --text-color: #e0e0e0;
  --background-color: #1a1a1a;
  --link-color: #4dabf7;
}

/* Maintain 4.5:1 contrast in both modes */
body {
  color: var(--text-color);
  background-color: var(--background-color);
}
```

## Forms and Inputs

### Form Labels

```html
<!-- Always associate labels with inputs -->
<form>
  <!-- Explicit label -->
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" required>
  
  <!-- Implicit label -->
  <label>
    Email Address:
    <input type="email" name="email" required>
  </label>
  
  <!-- aria-label for icon-only inputs -->
  <input 
    type="search" 
    name="query"
    aria-label="Search the site"
    placeholder="Search...">
</form>
```

### Error Handling

```html
<!-- Form with validation -->
<form novalidate>
  <div class="form-group">
    <label for="email">Email Address</label>
    <input 
      type="email" 
      id="email" 
      name="email"
      aria-describedby="email-error"
      aria-invalid="true"
      required>
    <span id="email-error" class="error" role="alert">
      Please enter a valid email address
    </span>
  </div>
  
  <button type="submit">Submit</button>
</form>
```

### Field Groups

```html
<!-- Radio buttons -->
<fieldset>
  <legend>Preferred Contact Method</legend>
  <label>
    <input type="radio" name="contact" value="email">
    Email
  </label>
  <label>
    <input type="radio" name="contact" value="phone">
    Phone
  </label>
</fieldset>

<!-- Checkboxes -->
<fieldset>
  <legend>Areas of Interest</legend>
  <label>
    <input type="checkbox" name="interests" value="ai">
    Artificial Intelligence
  </label>
  <label>
    <input type="checkbox" name="interests" value="ml">
    Machine Learning
  </label>
</fieldset>
```

## Testing Accessibility

### Manual Testing

```markdown
1. Keyboard Navigation:
   - [ ] Tab through all interactive elements
   - [ ] Activate with Enter/Space
   - [ ] Navigate dropdowns with arrows
   - [ ] Close modals with Escape
   - [ ] No keyboard traps

2. Screen Reader Testing:
   - [ ] Test with NVDA (Windows, free)
   - [ ] Test with JAWS (Windows, trial)
   - [ ] Test with VoiceOver (macOS/iOS)
   - [ ] Test with TalkBack (Android)
   
3. Visual Testing:
   - [ ] Zoom to 200%
   - [ ] Test without CSS
   - [ ] Check focus indicators
   - [ ] Verify color contrast
   - [ ] Test in dark mode
```

### Automated Testing Tools

```bash
# Install pa11y
npm install -g pa11y

# Test a page
pa11y http://localhost:4000

# Generate report
pa11y http://localhost:4000 --reporter html > report.html

# Test multiple pages
pa11y-ci
```

### Browser Extensions

- **axe DevTools** (Chrome, Firefox) - Comprehensive accessibility testing
- **WAVE** (Chrome, Firefox) - Visual accessibility evaluation
- **Lighthouse** (Chrome) - Built-in auditing tool
- **Color Contrast Analyzer** - Check contrast ratios
- **HeadingsMap** - Verify heading structure

### Testing Checklist

```markdown
Page Level:
- [ ] Lighthouse accessibility score 90+
- [ ] No ARIA validation errors
- [ ] Proper heading hierarchy
- [ ] All images have alt text
- [ ] Sufficient color contrast
- [ ] Keyboard navigable

Component Level:
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] State changes announced
- [ ] Error messages accessible
- [ ] Loading states communicated
```

## Common Patterns

### Image with Caption

```html
<figure role="figure">
  <img 
    src="chart.jpg" 
    alt="Bar chart showing 89% accuracy improvement"
    loading="lazy">
  <figcaption>
    Performance metrics showing classification accuracy improvement
  </figcaption>
</figure>
```

### Read More Links

```html
<!-- Provide context for screen readers -->
<article>
  <h3>
    <a href="/post/article-title/">Article Title</a>
  </h3>
  <p>Article excerpt...</p>
  <a href="/post/article-title/">
    Read more
    <span class="sr-only">about Article Title</span>
  </a>
</article>
```

### Tag Clouds

```html
<!-- Accessible tag list -->
<nav aria-label="Content tags">
  <ul role="list" class="tag-cloud">
    <li>
      <a href="/tags/ai/" aria-label="View all posts tagged AI (15 posts)">
        AI
        <span class="badge" aria-hidden="true">15</span>
      </a>
    </li>
    <li>
      <a href="/tags/ml/" aria-label="View all posts tagged Machine Learning (23 posts)">
        Machine Learning
        <span class="badge" aria-hidden="true">23</span>
      </a>
    </li>
  </ul>
</nav>
```

### Social Media Links

```html
<nav aria-label="Social media links">
  <ul role="list">
    <li>
      <a 
        href="https://github.com/sanjanb" 
        aria-label="View my GitHub profile (opens in new tab)"
        target="_blank"
        rel="noopener noreferrer">
        <span class="icon" aria-hidden="true">GitHub</span>
      </a>
    </li>
    <li>
      <a 
        href="https://linkedin.com/in/sanjan-bm" 
        aria-label="Connect on LinkedIn (opens in new tab)"
        target="_blank"
        rel="noopener noreferrer">
        <span class="icon" aria-hidden="true">LinkedIn</span>
      </a>
    </li>
  </ul>
</nav>
```

## Resources

### Standards and Guidelines
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Resources](https://webaim.org/resources/)

### Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Screen Reader Testing](https://www.nvaccess.org/) (NVDA)

### Learning
- [A11y Project](https://www.a11yproject.com/)
- [WebAIM Training](https://webaim.org/articles/)
- [Inclusive Components](https://inclusive-components.design/)

---

**Remember**: Accessibility benefits everyone, not just users with disabilities. Good accessibility practices lead to better user experience for all visitors.

For implementation questions, see [CONTRIBUTING.md](../CONTRIBUTING.md) or create an issue.
