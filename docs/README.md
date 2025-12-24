# Documentation Index

Welcome to the comprehensive documentation for the sanjanb.github.io portfolio website. This documentation covers everything from getting started to advanced customization and accessibility best practices.

## 📚 Documentation Structure

### Core Documentation

#### [CONTRIBUTING.md](../CONTRIBUTING.md)
**Purpose**: Guidelines for contributing to the project  
**Topics Covered**:
- Getting started with development
- Code style guidelines
- Pull request process
- Testing requirements
- Community standards

**Who should read**: Contributors, collaborators, developers wanting to improve the site

#### [DEVELOPMENT.md](../DEVELOPMENT.md)
**Purpose**: Complete development guide  
**Topics Covered**:
- Quick start guide
- Architecture overview
- Development workflow
- Common development tasks
- Debugging techniques
- Performance optimization
- Deployment procedures

**Who should read**: Developers, maintainers, technical contributors

#### [README.md](../README.md)
**Purpose**: Project overview and basic setup  
**Topics Covered**:
- Project description
- Basic installation
- Running the development server
- Quick links

**Who should read**: Everyone (first stop for new visitors)

### Specialized Guides

#### [ASSET-MANAGEMENT.md](./ASSET-MANAGEMENT.md)
**Purpose**: Comprehensive asset organization guide  
**Topics Covered**:
- Directory structure for assets
- Image management and optimization
- PDF and document organization
- Naming conventions
- File size optimization
- Responsive image strategies
- Performance best practices

**Who should read**: Content creators, designers, developers managing media

#### [ACCESSIBILITY.md](./ACCESSIBILITY.md)
**Purpose**: Accessibility standards and implementation  
**Topics Covered**:
- WCAG 2.1 AA compliance
- ARIA labels reference
- Semantic HTML guidelines
- Keyboard navigation
- Screen reader optimization
- Color and contrast requirements
- Testing procedures
- Common accessible patterns

**Who should read**: Developers, designers, accessibility advocates, QA testers

## 🚀 Getting Started Paths

### For New Contributors

```
1. Read README.md → Project overview
2. Read CONTRIBUTING.md → Contribution guidelines
3. Read DEVELOPMENT.md → Development setup
4. Choose your focus area:
   - Content? → ASSET-MANAGEMENT.md
   - Code? → DEVELOPMENT.md
   - Accessibility? → ACCESSIBILITY.md
```

### For Content Creators

```
1. Read ASSET-MANAGEMENT.md → Learn asset organization
2. Review ACCESSIBILITY.md → Ensure accessible content
3. Reference CONTRIBUTING.md → Submission process
```

### For Developers

```
1. Read DEVELOPMENT.md → Setup environment
2. Read CONTRIBUTING.md → Code standards
3. Read ACCESSIBILITY.md → Implement accessible features
4. Reference ASSET-MANAGEMENT.md → Optimize assets
```

### For Designers

```
1. Read ACCESSIBILITY.md → Design requirements
2. Read ASSET-MANAGEMENT.md → Asset specifications
3. Reference CONTRIBUTING.md → Workflow
```

## 📖 Documentation by Topic

### Setup and Installation
- [Quick Start](../README.md#quick-start)
- [Prerequisites](../DEVELOPMENT.md#prerequisites)
- [Development Setup](../DEVELOPMENT.md#development-setup)
- [First-Time Configuration](../DEVELOPMENT.md#first-time-configuration)

### Architecture and Structure
- [Technology Stack](../DEVELOPMENT.md#technology-stack)
- [Project Structure](../DEVELOPMENT.md#file-organization)
- [Asset Organization](./ASSET-MANAGEMENT.md#asset-directory-structure)
- [Build Process](../DEVELOPMENT.md#build-process-flow)

### Content Management
- [Adding Blog Posts](../DEVELOPMENT.md#adding-a-new-blog-post)
- [Adding Projects](../DEVELOPMENT.md#adding-a-new-project)
- [Updating CV Data](../DEVELOPMENT.md#updating-cv-data)
- [Image Management](./ASSET-MANAGEMENT.md#image-management)
- [Document Management](./ASSET-MANAGEMENT.md#document-management)

### Development
- [Development Workflow](../DEVELOPMENT.md#development-workflow)
- [Common Tasks](../DEVELOPMENT.md#common-tasks)
- [Debugging](../DEVELOPMENT.md#debugging)
- [Testing](../CONTRIBUTING.md#testing)

### Accessibility
- [WCAG Compliance](./ACCESSIBILITY.md#overview)
- [ARIA Labels](./ACCESSIBILITY.md#aria-labels-reference)
- [Keyboard Navigation](./ACCESSIBILITY.md#keyboard-navigation)
- [Screen Readers](./ACCESSIBILITY.md#screen-reader-optimization)
- [Testing Accessibility](./ACCESSIBILITY.md#testing-accessibility)

### Optimization
- [Performance](../DEVELOPMENT.md#performance-optimization)
- [Image Optimization](./ASSET-MANAGEMENT.md#image-optimization-tools)
- [Asset Optimization](./ASSET-MANAGEMENT.md#optimization-guidelines)
- [Build Optimization](../DEVELOPMENT.md#performance-optimization)

### Deployment
- [GitHub Pages Deployment](../DEVELOPMENT.md#github-pages-deployment)
- [Local Production Build](../DEVELOPMENT.md#local-production-build)
- [Pre-deployment Checklist](../DEVELOPMENT.md#pre-deployment-checklist)

### Style and Standards
- [Code Style](../CONTRIBUTING.md#style-guidelines)
- [Markdown Guidelines](../CONTRIBUTING.md#markdown-files)
- [Naming Conventions](./ASSET-MANAGEMENT.md#naming-conventions)
- [Accessibility Guidelines](./ACCESSIBILITY.md#semantic-html-guidelines)

## 🔍 Quick Reference

### Common Commands

```bash
# Development
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# Build
bundle exec jekyll build

# Clean
bundle exec jekyll clean

# Install dependencies
bundle install
npm install

# Optimize images
find assets/img -name "*.jpg" -exec convert {} -quality 85 -strip {} \;
```

### File Locations

```
Content:
  Blog posts → _posts/YYYY-MM-DD-title.md
  Projects → _projects/project-name.md
  Work → _work/work-entry.md
  Pages → _pages/page-name.md

Assets:
  Images → assets/img/[category]/
  PDFs → assets/pdf/[category]/
  CSS → assets/css/ (generated)
  JS → assets/js/

Configuration:
  Site config → _config.yml
  Dependencies → Gemfile, package.json
  Data → _data/*.yml
```

### Important Links

- **Repository**: [github.com/sanjanb/sanjanb.github.io](https://github.com/sanjanb/sanjanb.github.io)
- **Live Site**: [sanjanb.github.io](https://sanjanb.github.io)
- **Issue Tracker**: [GitHub Issues](https://github.com/sanjanb/sanjanb.github.io/issues)

### Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Markdown Guide](https://www.markdownguide.org/)

## 📝 Documentation Standards

### Writing Documentation

When contributing to documentation:

1. **Be Clear and Concise**: Use simple language, short sentences
2. **Include Examples**: Show, don't just tell
3. **Use Consistent Formatting**: Follow existing patterns
4. **Update Index**: Add new docs to this index
5. **Keep Updated**: Review and update regularly

### Documentation Template

```markdown
# Title

Brief description of what this document covers.

## Table of Contents
- [Section 1](#section-1)
- [Section 2](#section-2)

## Section 1

Content with examples...

### Subsection

More specific content...

## Resources

Links to related documentation...
```

## 🤝 Getting Help

### Where to Find Answers

1. **Check Documentation**: Search these docs first
2. **Search Issues**: Look for similar questions
3. **Ask Questions**: Create a new issue with `question` label
4. **Contact**: Email sanjanacharaya1234@gmail.com

### Reporting Documentation Issues

If you find:
- Outdated information
- Unclear explanations
- Missing documentation
- Broken links

Please:
1. Create an issue with label `documentation`
2. Describe the problem
3. Suggest improvements (if possible)

## 📊 Documentation Metrics

Current documentation:
- **Total Pages**: 5 comprehensive guides
- **Total Words**: ~30,000+
- **Last Updated**: December 24, 2025
- **Coverage**: Core workflows, development, accessibility, asset management

## 🔄 Documentation Updates

This documentation is maintained alongside the codebase. When making significant changes:

- Update relevant documentation
- Add changelog entry
- Review and test examples
- Update this index if needed

## 📅 Maintenance Schedule

- **Weekly**: Check for broken links
- **Monthly**: Review accuracy of common tasks
- **Quarterly**: Full documentation audit
- **Yearly**: Major updates and reorganization

## 🎯 Future Documentation Plans

Planned additions:
- [ ] Video tutorials for common tasks
- [ ] Interactive examples
- [ ] API documentation (if applicable)
- [ ] Troubleshooting guide
- [ ] FAQ section
- [ ] Internationalization guide

---

**Document Version**: 1.0  
**Last Updated**: December 24, 2025  
**Maintainer**: Sanjan B M  

For questions or suggestions about documentation, create an issue or contact the maintainer.
