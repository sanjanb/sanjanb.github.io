# Asset Management Guide

Comprehensive guide for organizing and managing assets in the sanjanb.github.io portfolio.

## Table of Contents

- [Overview](#overview)
- [Asset Directory Structure](#asset-directory-structure)
- [Image Management](#image-management)
- [Document Management](#document-management)
- [Naming Conventions](#naming-conventions)
- [Optimization Guidelines](#optimization-guidelines)
- [Best Practices](#best-practices)

## Overview

Proper asset management ensures:
- **Fast page load times** through optimized assets
- **Easy maintenance** with organized structure
- **Version control efficiency** with appropriate file sizes
- **Accessibility** through proper naming and metadata
- **Scalability** as the portfolio grows

## Asset Directory Structure

### Recommended Organization

```
assets/
├── audio/                          # Audio files
│   └── podcasts/
├── css/                            # Compiled CSS (auto-generated)
│   └── main.css
├── fonts/                          # Custom web fonts
│   ├── roboto/
│   └── material-icons/
├── img/                            # Images (primary assets)
│   ├── projects/                   # Project screenshots
│   │   ├── cti-nlp-system/
│   │   │   ├── dashboard.jpg
│   │   │   ├── architecture.png
│   │   │   └── demo.gif
│   │   └── k-tech-nain/
│   │       ├── homepage.jpg
│   │       └── features.jpg
│   ├── work/                       # Work experience images
│   │   ├── synersense/
│   │   ├── gsi-startup/
│   │   └── ieee-atmece/
│   ├── achievements/               # Achievement badges/images
│   │   ├── hackfusion-winner.jpg
│   │   ├── academic-excellence.jpg
│   │   └── ieee-vice-chair.jpg
│   ├── blog/                       # Blog post images
│   │   ├── 2025/
│   │   │   ├── 01-welcome/
│   │   │   ├── 01-docker-guide/
│   │   │   └── 01-ai-systems/
│   │   └── headers/                # Featured images
│   ├── teaching/                   # Teaching materials
│   │   ├── ai-ml-fundamentals/
│   │   └── langchain-hub/
│   ├── profile/                    # Personal photos
│   │   ├── prof_pic.jpg
│   │   ├── prof_pic_dark.jpg
│   │   └── about-hero.jpg
│   ├── icons/                      # Icons and logos
│   │   ├── favicon/
│   │   ├── social/
│   │   └── tech-stack/
│   └── backgrounds/                # Background images
│       ├── hero-bg.jpg
│       └── patterns/
├── js/                             # JavaScript files
│   ├── search/
│   │   └── search.liquid.js
│   ├── custom/
│   │   ├── navigation.js
│   │   └── theme-toggle.js
│   └── vendor/                     # Third-party libraries
├── json/                           # JSON data files
│   ├── resume.json                 # JSON Resume format
│   └── publications.json
├── pdf/                            # PDF documents
│   ├── resume/
│   │   ├── sanjan-bm-resume.pdf
│   │   └── sanjan-bm-cv.pdf
│   ├── certificates/
│   │   ├── academic/
│   │   ├── professional/
│   │   └── awards/
│   ├── publications/
│   │   └── research-papers/
│   └── presentations/
├── video/                          # Video files
│   ├── demos/
│   └── presentations/
└── webfonts/                       # Icon fonts
    └── material-icons/
```

### Collection-Specific Assets

```
Each content collection has dedicated asset folders:

_projects/          → assets/img/projects/
_work/             → assets/img/work/
_achievements/     → assets/img/achievements/
_teaching/         → assets/img/teaching/
_posts/            → assets/img/blog/
_books/            → assets/img/books/
```

## Image Management

### Image Types and Usage

#### 1. Project Images

```
assets/img/projects/
├── project-name/
│   ├── hero.jpg              # Main project image (1200x630px)
│   ├── screenshot-01.jpg     # UI screenshots (1920x1080px)
│   ├── screenshot-02.jpg
│   ├── architecture.png      # Architecture diagrams (1600x900px)
│   ├── demo.gif             # Animated demonstrations (max 2MB)
│   └── thumbnail.jpg         # Grid thumbnail (400x300px)
```

**Usage in markdown:**
```markdown
---
img: assets/img/projects/project-name/hero.jpg
---

{% include figure.liquid 
   path="assets/img/projects/project-name/screenshot-01.jpg" 
   title="Dashboard Interface" 
   class="img-fluid rounded z-depth-1" 
%}
```

#### 2. Work Experience Images

```
assets/img/work/
├── company-name/
│   ├── logo.png              # Company logo (300x300px, transparent)
│   ├── cover.jpg            # Work cover image (1200x400px)
│   ├── project-01.jpg       # Work project images
│   └── team.jpg             # Team photos
```

#### 3. Blog Post Images

```
assets/img/blog/
├── YYYY/                     # Year-based organization
│   ├── MM-post-slug/        # Month-post-slug
│   │   ├── featured.jpg     # Featured image (1200x630px)
│   │   ├── inline-01.jpg    # Inline images (max 800px width)
│   │   ├── inline-02.jpg
│   │   └── diagrams/        # Technical diagrams
│   │       ├── flow.svg
│   │       └── architecture.png
```

**Best practices for blog images:**
```markdown
<!-- Featured image in front matter -->
---
thumbnail: assets/img/blog/2025/01-welcome/featured.jpg
---

<!-- Inline images -->
![Alt text]({{ 'assets/img/blog/2025/01-welcome/inline-01.jpg' | relative_url }})

<!-- Figure with caption -->
{% include figure.liquid 
   loading="eager" 
   path="assets/img/blog/2025/01-welcome/diagram.png" 
   title="System Architecture" 
   class="img-fluid rounded z-depth-1" 
   caption="Complete system architecture diagram" 
%}
```

#### 4. Profile Images

```
assets/img/profile/
├── prof_pic.jpg              # Main profile (500x500px, square)
├── prof_pic_dark.jpg         # Dark mode variant
├── prof_pic_circular.jpg     # Circular version
├── about-hero.jpg           # About page hero (1920x600px)
└── backgrounds/
    ├── about-bg.jpg
    └── contact-bg.jpg
```

### Image Formats

| Format | Use Case | Pros | Cons |
|--------|----------|------|------|
| **JPEG** | Photos, screenshots | Small size, wide support | Lossy compression |
| **PNG** | Logos, icons, transparency | Lossless, transparency | Larger files |
| **WebP** | Modern browsers | Best compression | Limited old browser support |
| **SVG** | Logos, icons, diagrams | Scalable, tiny files | Not for photos |
| **GIF** | Simple animations | Animation support | Limited colors, large |

### Image Sizes and Optimization

#### Recommended Dimensions

```yaml
# Profile pictures
Profile photo (square): 500x500px
Profile photo (circular): 500x500px (cropped to circle)

# Hero images
Page hero: 1920x600px
Project hero: 1200x630px (Open Graph)

# Screenshots
Desktop screenshot: 1920x1080px (Full HD)
Mobile screenshot: 750x1334px (iPhone)
Tablet screenshot: 1024x768px (iPad)

# Thumbnails
Project thumbnail: 400x300px (4:3 ratio)
Blog thumbnail: 600x400px (3:2 ratio)

# Social media
Open Graph: 1200x630px
Twitter Card: 1200x600px
```

#### File Size Targets

```yaml
Hero images: < 300KB
Screenshots: < 200KB
Thumbnails: < 100KB
Icons/logos: < 50KB
Diagrams (PNG): < 150KB
Animated GIFs: < 2MB (consider video instead)
```

### Responsive Images

```liquid
<!-- Automatic WebP generation enabled in _config.yml -->
imagemagick:
  enabled: true
  widths: [480, 800, 1400]
  output_formats:
    webp: "-quality 85"

<!-- Usage in templates -->
<picture>
  <source 
    srcset="assets/img/project-480.webp 480w,
            assets/img/project-800.webp 800w,
            assets/img/project-1400.webp 1400w"
    type="image/webp">
  <img 
    src="assets/img/project.jpg" 
    alt="Project screenshot"
    loading="lazy"
    width="1400"
    height="900">
</picture>
```

### Image Optimization Tools

```bash
# ImageMagick (batch optimization)
# Install: brew install imagemagick (macOS)
find assets/img -name "*.jpg" -exec convert {} -quality 85 -strip {} \;

# Optimize PNGs
find assets/img -name "*.png" -exec convert {} -strip {} \;

# Convert to WebP
for file in assets/img/projects/*.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

**Recommended tools:**
- [ImageOptim](https://imageoptim.com/) (macOS)
- [Squoosh](https://squoosh.app/) (web-based)
- [TinyPNG](https://tinypng.com/) (web-based)
- [GIMP](https://www.gimp.org/) (open-source editor)

## Document Management

### PDF Organization

```
assets/pdf/
├── resume/
│   ├── sanjan-bm-resume-2025.pdf        # Latest resume
│   ├── sanjan-bm-cv-2025.pdf            # Full CV
│   └── archive/                          # Previous versions
│       ├── sanjan-bm-resume-2024.pdf
│       └── sanjan-bm-cv-2024.pdf
├── certificates/
│   ├── academic/
│   │   ├── degree-certificate.pdf
│   │   ├── transcripts.pdf
│   │   └── awards/
│   ├── professional/
│   │   ├── aws-certification.pdf
│   │   └── course-completions/
│   └── achievements/
│       ├── hackfusion-winner.pdf
│       └── ieee-appointment.pdf
├── publications/
│   ├── research-papers/
│   │   ├── paper-01-published.pdf
│   │   └── paper-02-preprint.pdf
│   └── conference-proceedings/
└── presentations/
    ├── talks/
    │   ├── ai-conference-2025.pdf
    │   └── workshop-slides.pdf
    └── posters/
```

### PDF Best Practices

```yaml
Naming: descriptive-name-YYYY-MM.pdf
Max file size: 5MB (compress if larger)
Optimization: Reduce file size, remove metadata
Accessibility: Include searchable text (OCR if scanned)
Version control: Include date in filename
Security: Remove sensitive metadata before upload
```

### PDF Optimization

```bash
# Compress PDFs using Ghostscript
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=output.pdf input.pdf

# Using online tools:
# - https://www.ilovepdf.com/compress_pdf
# - https://smallpdf.com/compress-pdf
```

## Naming Conventions

### File Naming Rules

```yaml
# General rules
- Use lowercase letters only
- Replace spaces with hyphens (-)
- Use descriptive names
- Include version/date when applicable
- Avoid special characters (except - and _)

# Examples
Good: 
  - cti-nlp-system-dashboard.jpg
  - sanjan-bm-resume-2025.pdf
  - k-tech-nain-architecture-diagram.png
  
Bad:
  - Image123.jpg
  - Resume Final FINAL v3.pdf
  - Screenshot 2025-01-15 at 3.45.22 PM.png
```

### Naming Patterns by Type

```yaml
Projects:
  - {project-slug}-{description}.{ext}
  - Example: cti-nlp-dashboard-screenshot.jpg

Work:
  - {company-slug}-{item}.{ext}
  - Example: synersense-project-demo.jpg

Achievements:
  - {achievement-slug}-{type}.{ext}
  - Example: hackfusion-winner-certificate.pdf

Blog:
  - {YYYY}-{MM}-{slug}-{description}.{ext}
  - Example: 2025-01-docker-guide-diagram.png

Profile:
  - {type}_{variant}.{ext}
  - Example: prof_pic_dark.jpg
```

### Directory Naming

```yaml
# Use singular or plural consistently
Good:
  - assets/img/projects/
  - assets/img/achievements/
  
# Use descriptive, hierarchical names
Good:
  - assets/pdf/certificates/academic/
  - assets/img/blog/2025/01-welcome/

# Avoid generic names
Bad:
  - assets/img/misc/
  - assets/files/stuff/
```

## Optimization Guidelines

### Pre-upload Checklist

```markdown
Before adding any asset:

Images:
- [ ] Optimized for web (target file sizes met)
- [ ] Correct dimensions for use case
- [ ] Descriptive filename with proper convention
- [ ] Alt text planned (for accessibility)
- [ ] WebP version considered (if JPEG/PNG)
- [ ] No sensitive metadata in file

PDFs:
- [ ] Compressed to reasonable size (< 5MB)
- [ ] Searchable text included
- [ ] Sensitive information removed
- [ ] Version/date in filename
- [ ] Metadata stripped

Videos:
- [ ] Compressed for web delivery
- [ ] Reasonable length (< 2 minutes preferred)
- [ ] Multiple format versions (MP4, WebM)
- [ ] Poster image created
```

### Automated Optimization Script

```bash
#!/bin/bash
# optimize-assets.sh

# Optimize all JPEGs
echo "Optimizing JPEG images..."
find assets/img -name "*.jpg" -exec convert {} -quality 85 -strip {} \;

# Optimize all PNGs
echo "Optimizing PNG images..."
find assets/img -name "*.png" -exec convert {} -strip {} \;

# Generate WebP versions
echo "Generating WebP versions..."
for img in $(find assets/img -name "*.jpg" -o -name "*.png"); do
  cwebp -q 85 "$img" -o "${img%.*}.webp"
done

echo "Asset optimization complete!"
```

### Performance Monitoring

```bash
# Check asset sizes
du -sh assets/img/*
du -sh assets/pdf/*

# Find large files (> 500KB)
find assets -type f -size +500k -exec ls -lh {} \;

# Total assets size
du -sh assets/
```

## Best Practices

### Version Control

```bash
# .gitignore recommendations for assets
# Add generated files
_site/
.jekyll-cache/
assets/css/main.css

# Ignore very large assets (>10MB)
# Upload to CDN instead
# assets/video/large-demo.mp4

# Keep source files but ignore processed
# assets/img/**/*-original.{jpg,png}
```

### Accessibility

```markdown
1. Always include alt text for images
   ```html
   <img src="path/to/image.jpg" alt="Descriptive alt text">
   ```

2. Use descriptive link text for PDFs
   ```markdown
   Good: [Download my 2025 Resume (PDF, 245KB)](assets/pdf/resume.pdf)
   Bad: [Click here](assets/pdf/resume.pdf)
   ```

3. Provide text alternatives for complex diagrams
   - Include detailed captions
   - Link to text descriptions
   - Consider SVG with text descriptions
```

### Content Delivery

```yaml
# For frequently accessed assets
Consider using a CDN:
  - Cloudflare Pages
  - Netlify
  - Vercel

# Benefits:
  - Faster global delivery
  - Reduced GitHub bandwidth
  - Better caching
  - Image transformation on-the-fly
```

### Maintenance Schedule

```yaml
Monthly:
  - Review asset sizes
  - Remove unused files
  - Update outdated content
  - Check for broken asset links

Quarterly:
  - Archive old versions
  - Audit total repository size
  - Update optimization scripts
  - Review naming conventions

Annually:
  - Clean up unused directories
  - Reorganize if structure changed
  - Update documentation
  - Backup to external storage
```

## Asset Audit Commands

```bash
# Count total assets
echo "Images: $(find assets/img -type f | wc -l)"
echo "PDFs: $(find assets/pdf -type f | wc -l)"
echo "Total: $(find assets -type f | wc -l)"

# Largest files
find assets -type f -exec du -h {} + | sort -rh | head -20

# Files by extension
find assets -type f | sed 's/.*\.//' | sort | uniq -c | sort -rn

# Total size by directory
du -sh assets/*/ | sort -rh

# Find duplicate files
find assets -type f -exec md5sum {} + | sort | awk 'BEGIN{lasthash = ""} 
  {if ($1 == lasthash) print $2; lasthash = $1}'
```

## Resources

### Tools
- [ImageMagick](https://imagemagick.org/) - Image processing
- [ExifTool](https://exiftool.org/) - Metadata management
- [PDFtk](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/) - PDF manipulation
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing

### References
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Responsive Images Guide](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [WebP Format](https://developers.google.com/speed/webp)

---

For questions about asset management, see [CONTRIBUTING.md](../CONTRIBUTING.md) or create an issue.
