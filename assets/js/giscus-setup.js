/**
 * Giscus Comments Setup
 * Initializes Giscus comments system with site configuration
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get the site configuration (will be replaced by Jekyll with actual values)
  const giscusConfig = {
    repo: 'sanjanb/sanjanb.github.io',
    repoId: 'R_kgDOPstneA',
    category: 'Announcements',
    categoryId: 'DIC_kwDOPstneM4CvQNK',
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    theme: getGiscusTheme(),
    lang: 'en'
  };

  // Create and configure the Giscus script
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.setAttribute('data-repo', giscusConfig.repo);
  
  if (giscusConfig.repoId && giscusConfig.repoId !== '') {
    script.setAttribute('data-repo-id', giscusConfig.repoId);
  }
  
  script.setAttribute('data-category', giscusConfig.category);
  
  if (giscusConfig.categoryId && giscusConfig.categoryId !== '') {
    script.setAttribute('data-category-id', giscusConfig.categoryId);
  }
  
  script.setAttribute('data-mapping', giscusConfig.mapping);
  script.setAttribute('data-strict', giscusConfig.strict);
  script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled);
  script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata);
  script.setAttribute('data-input-position', giscusConfig.inputPosition);
  script.setAttribute('data-theme', giscusConfig.theme);
  script.setAttribute('data-lang', giscusConfig.lang);
  script.setAttribute('crossorigin', 'anonymous');
  script.async = true;

  // Add the script to the giscus container
  const giscusContainer = document.getElementById('giscus_thread');
  if (giscusContainer) {
    giscusContainer.appendChild(script);
  }
});

/**
 * Get the appropriate Giscus theme based on the current site theme
 */
function getGiscusTheme() {
  // Check if dark mode is enabled
  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark' || 
                     document.body.classList.contains('dark-mode') ||
                     window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Return appropriate theme
  if (isDarkMode) {
    return 'dark';
  } else {
    return 'light';
  }
}

/**
 * Update Giscus theme when site theme changes
 */
function updateGiscusTheme() {
  const iframe = document.querySelector('iframe.giscus-frame');
  if (iframe) {
    const theme = getGiscusTheme();
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: theme } } },
      'https://giscus.app'
    );
  }
}

// Listen for theme changes
if (window.MutationObserver) {
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && 
          (mutation.attributeName === 'data-theme' || mutation.attributeName === 'class')) {
        updateGiscusTheme();
      }
    });
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme', 'class']
  });
  
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
  });
}
