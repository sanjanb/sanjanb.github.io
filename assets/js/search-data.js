// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-bio",
    title: "Bio",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-",
          title: "",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/achievements/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-advanced-blog-formatting-guide-mastering-jekyll-and-al-folio-techniques",
        
          title: "Advanced Blog Formatting Guide: Mastering Jekyll and al-folio Techniques",
        
        description: "A comprehensive guide showcasing advanced formatting techniques for Jekyll blogs using the al-folio theme, including code highlighting, interactive elements, and visual enhancements.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/advanced-blog-formatting-guide/";
          
        },
      },{id: "post-building-scalable-ai-systems-lessons-from-production",
        
          title: "Building Scalable AI Systems: Lessons from Production",
        
        description: "Real-world insights and practical strategies for deploying machine learning models at scale, covering infrastructure, monitoring, and best practices learned from production environments.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/building-scalable-ai-systems/";
          
        },
      },{id: "post-docker-mastery-from-development-to-production",
        
          title: "Docker Mastery: From Development to Production",
        
        description: "A comprehensive guide to mastering Docker for modern development workflows, including best practices, optimization techniques, and production deployment strategies.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/docker-mastery-guide/";
          
        },
      },{id: "post-mastering-jekyll-advanced-formatting-and-link-techniques",
        
          title: "Mastering Jekyll: Advanced Formatting and Link Techniques",
        
        description: "Explore advanced formatting techniques, link management, and content organization strategies for Jekyll-powered blogs and documentation sites.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "achievements-freelance-web-development-success",
          title: 'Freelance Web Development Success',
          description: "",
          section: "Achievements",handler: () => {
              window.location.href = "/achievements/freelance-success/";
            },},{id: "achievements-vice-chair-ieee-atmece-student-branch",
          title: 'Vice Chair - IEEE ATMECE Student Branch',
          description: "",
          section: "Achievements",handler: () => {
              window.location.href = "/achievements/ieee-vice-chair/";
            },},{id: "achievements-best-student-award-senate-bhavan-mysuru-university",
          title: 'Best Student Award - Senate Bhavan, Mysuru University',
          description: "",
          section: "Achievements",handler: () => {
              window.location.href = "/achievements/academic-excellence/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-ai-powered-cyber-threat-intelligence-system",
          title: 'AI-Powered Cyber Threat Intelligence System',
          description: "NLP-based system for real-time threat analysis and classification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6E%6A%61%6E%61%63%68%61%72%61%79%61%31%32%33%34@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sanjanb", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/100393400/", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/sanjanbm", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sanjan-bm", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xeTdWMwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
