// Enhanced Blog Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all blog enhancements
    initReadingProgress();
    initLazyLoading();
    initSmoothScrolling();
    initCodePlayground();
    initSearchEnhancement();
    initThemeAwareElements();
});

// Reading Progress Bar
function initReadingProgress() {
    // Create progress bar if it doesn't exist
    if (!document.querySelector('.reading-progress')) {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.innerHTML = '<div class="reading-progress-fill"></div>';
        document.body.insertBefore(progressBar, document.body.firstChild);
    }

    const progressFill = document.querySelector('.reading-progress-fill');
    const article = document.querySelector('article') || document.querySelector('.post');
    
    if (!progressFill || !article) return;

    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressFill.style.width = Math.min(scrollPercent, 100) + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress(); // Initial call
}

// Lazy Loading for Heavy Content
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyElements = document.querySelectorAll('.lazy-load, .chart-container, .code-playground');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    
                    // Load charts if needed
                    if (entry.target.classList.contains('chart-container')) {
                        loadChart(entry.target);
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });

        lazyElements.forEach(el => observer.observe(el));
    }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced Code Playground
function initCodePlayground() {
    const playgrounds = document.querySelectorAll('.code-playground');
    
    playgrounds.forEach(playground => {
        const textarea = playground.querySelector('textarea');
        const button = playground.querySelector('button');
        const output = playground.querySelector('pre');
        
        if (!textarea || !button || !output) return;

        // Add syntax highlighting to textarea
        textarea.addEventListener('input', function() {
            // Simple syntax highlighting could be added here
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });

        // Enhanced run function
        button.addEventListener('click', function() {
            const code = textarea.value;
            
            // Show loading state
            this.textContent = 'Running...';
            this.disabled = true;
            
            setTimeout(() => {
                try {
                    // Capture console output
                    const originalLog = console.log;
                    const originalWarn = console.warn;
                    const originalError = console.error;
                    let logOutput = '';
                    
                    console.log = (...args) => {
                        logOutput += '> ' + args.join(' ') + '\n';
                    };
                    console.warn = (...args) => {
                        logOutput += '⚠ ' + args.join(' ') + '\n';
                    };
                    console.error = (...args) => {
                        logOutput += '❌ ' + args.join(' ') + '\n';
                    };
                    
                    // Execute code in a safe context
                    const result = new Function(code)();
                    
                    // Restore console methods
                    console.log = originalLog;
                    console.warn = originalWarn;
                    console.error = originalError;
                    
                    // Display output
                    output.textContent = logOutput || (result !== undefined ? String(result) : 'Code executed successfully!');
                    output.className = 'success';
                    
                } catch (error) {
                    output.textContent = `❌ Error: ${error.message}`;
                    output.className = 'error';
                } finally {
                    this.textContent = 'Run Code';
                    this.disabled = false;
                }
            }, 100);
        });
    });
}

// Enhanced Search Functionality
function initSearchEnhancement() {
    const searchInput = document.querySelector('#search-input, .search-input');
    
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            
            searchTimeout = setTimeout(() => {
                performSearch(this.value);
            }, 300);
        });
    }
}

function performSearch(query) {
    if (!query.trim()) return;
    
    // Enhanced search logic
    const posts = document.querySelectorAll('.post-list li, .featured-posts .card');
    const searchTerms = query.toLowerCase().split(' ');
    
    posts.forEach(post => {
        const title = post.querySelector('.post-title, .card-title')?.textContent.toLowerCase() || '';
        const content = post.textContent.toLowerCase();
        
        const matches = searchTerms.every(term => 
            title.includes(term) || content.includes(term)
        );
        
        post.style.display = matches ? 'block' : 'none';
        
        if (matches) {
            post.classList.add('search-match');
        } else {
            post.classList.remove('search-match');
        }
    });
}

// Theme-Aware Element Updates
function initThemeAwareElements() {
    const themeToggle = document.querySelector('[data-toggle="theme"]');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            setTimeout(() => {
                updateThemeAwareElements();
            }, 100);
        });
    }
    
    // Initial update
    updateThemeAwareElements();
}

function updateThemeAwareElements() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // Update charts if they exist
    const charts = document.querySelectorAll('canvas[id*="chart"], .chart-container');
    charts.forEach(chart => {
        if (chart.chart) {
            updateChartTheme(chart.chart, isDark);
        }
    });
    
    // Update code highlights
    updateCodeHighlights(isDark);
}

// Chart Loading and Theme Updates
function loadChart(container) {
    if (typeof Chart === 'undefined') {
        // Dynamically load Chart.js if not available
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = () => initChart(container);
        document.head.appendChild(script);
    } else {
        initChart(container);
    }
}

function initChart(container) {
    const canvas = container.querySelector('canvas');
    if (!canvas) return;
    
    // Example chart configuration
    const ctx = canvas.getContext('2d');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    const chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Content Quality', 'Visual Appeal', 'Code Examples', 'Interactivity', 'SEO'],
            datasets: [{
                label: 'Blog Post Quality',
                data: [9, 8, 10, 7, 8],
                borderColor: isDark ? '#60a5fa' : '#3b82f6',
                backgroundColor: isDark ? 'rgba(96, 165, 250, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                pointBackgroundColor: isDark ? '#60a5fa' : '#3b82f6',
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: isDark ? '#e5e7eb' : '#374151'
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10,
                    grid: {
                        color: isDark ? '#374151' : '#e5e7eb'
                    },
                    pointLabels: {
                        color: isDark ? '#e5e7eb' : '#374151'
                    },
                    ticks: {
                        color: isDark ? '#e5e7eb' : '#374151'
                    }
                }
            }
        }
    });
    
    canvas.chart = chart;
}

function updateChartTheme(chart, isDark) {
    const borderColor = isDark ? '#60a5fa' : '#3b82f6';
    const backgroundColor = isDark ? 'rgba(96, 165, 250, 0.1)' : 'rgba(59, 130, 246, 0.1)';
    const textColor = isDark ? '#e5e7eb' : '#374151';
    
    chart.data.datasets.forEach(dataset => {
        dataset.borderColor = borderColor;
        dataset.backgroundColor = backgroundColor;
        dataset.pointBackgroundColor = borderColor;
    });
    
    chart.options.plugins.legend.labels.color = textColor;
    chart.options.scales.r.grid.color = isDark ? '#374151' : '#e5e7eb';
    chart.options.scales.r.pointLabels.color = textColor;
    chart.options.scales.r.ticks.color = textColor;
    
    chart.update();
}

function updateCodeHighlights(isDark) {
    const codeBlocks = document.querySelectorAll('.highlight, pre');
    codeBlocks.forEach(block => {
        if (isDark) {
            block.classList.add('dark-theme');
        } else {
            block.classList.remove('dark-theme');
        }
    });
}

// Copy Code Button Functionality
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('.highlight pre, pre code');
    
    codeBlocks.forEach(block => {
        const container = block.closest('.highlight') || block.parentElement;
        
        if (container && !container.querySelector('.copy-button')) {
            const button = document.createElement('button');
            button.className = 'copy-button btn btn-sm btn-outline-secondary';
            button.innerHTML = '<i class="fa fa-copy"></i> Copy';
            button.style.cssText = 'position: absolute; top: 10px; right: 10px; z-index: 10;';
            
            container.style.position = 'relative';
            container.appendChild(button);
            
            button.addEventListener('click', async function() {
                const code = block.textContent;
                
                try {
                    await navigator.clipboard.writeText(code);
                    this.innerHTML = '<i class="fa fa-check"></i> Copied!';
                    this.classList.add('btn-success');
                    this.classList.remove('btn-outline-secondary');
                    
                    setTimeout(() => {
                        this.innerHTML = '<i class="fa fa-copy"></i> Copy';
                        this.classList.remove('btn-success');
                        this.classList.add('btn-outline-secondary');
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy code:', err);
                }
            });
        }
    });
}

// Initialize copy buttons when DOM is ready
document.addEventListener('DOMContentLoaded', addCopyButtons);

// Table of Contents Enhancement
function enhanceTableOfContents() {
    const toc = document.querySelector('.toc, #table-of-contents');
    if (!toc) return;
    
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            // Update active TOC item
            const tocLinks = toc.querySelectorAll('a');
            tocLinks.forEach(link => link.classList.remove('active'));
            
            const correspondingLink = toc.querySelector(`a[href="#${this.id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        });
    });
}

// Performance Monitoring
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                
                if (loadTime > 3000) {
                    console.warn('Page load time is slow:', loadTime + 'ms');
                }
                
                // Track Core Web Vitals if available
                if ('PerformanceObserver' in window) {
                    new PerformanceObserver((list) => {
                        list.getEntries().forEach((entry) => {
                            console.log('Performance metric:', entry.name, entry.value);
                        });
                    }).observe({ entryTypes: ['measure', 'navigation', 'paint'] });
                }
            }, 1000);
        });
    }
}

// Initialize performance monitoring
monitorPerformance();

// Export functions for global access
window.BlogEnhancements = {
    initReadingProgress,
    loadChart,
    performSearch,
    addCopyButtons,
    enhanceTableOfContents
};
