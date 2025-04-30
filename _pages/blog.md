---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 6
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">

  {% assign blog_name_size = site.blog_name | size %}
  {% assign blog_description_size = site.blog_description | size %}

  {% if blog_name_size > 0 or blog_description_size > 0 %}
  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
  {% endif %}

  <!-- Search bar for blog posts -->
  <div class="search-container mb-4">
    <input type="text" id="search-input" class="form-control" placeholder="Search blog posts...">
  </div>

  <!-- Tags and Categories Section with improved styling -->
  {% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}
  <div class="tag-category-list mb-4">
    <div class="tags-header mb-2">Browse by:</div>
    <ul class="p-0 m-0 d-flex flex-wrap">
      {% for tag in site.display_tags %}
        <li class="tag-item">
          <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="badge badge-light">
            <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
          </a>
        </li>
      {% endfor %}
      
      {% for category in site.display_categories %}
        <li class="category-item">
          <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" class="badge badge-secondary">
            <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
  {% endif %}

  <!-- Featured Posts with improved card design -->
  {% assign featured_posts = site.posts | where: "featured", "true" %}
  {% if featured_posts.size > 0 %}
  <div class="featured-section mb-5">
    <h2 class="featured-heading">Featured Articles</h2>
    <div class="container-fluid p-0 featured-posts">
      {% assign is_even = featured_posts.size | modulo: 2 %}
      <div class="row row-cols-1 row-cols-md-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %} g-4">
        {% for post in featured_posts %}
        <div class="col mb-4">
          <a href="{{ post.url | relative_url }}" class="text-decoration-none">
            <div class="card h-100 featured-card hoverable">
              {% if post.thumbnail %}
              <img src="{{ post.thumbnail | relative_url }}" class="card-img-top" alt="{{ post.title }} thumbnail">
              {% endif %}
              <div class="card-body">
                <div class="featured-pin">
                  <i class="fa-solid fa-thumbtack"></i>
                </div>
                <h3 class="card-title">{{ post.title }}</h3>
                <p class="card-text">{{ post.description }}</p>

                {% if post.external_source == blank %}
                  {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                {% else %}
                  {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                {% endif %}
                {% assign year = post.date | date: "%Y" %}

                <p class="post-meta">
                  <i class="fa-regular fa-clock"></i> {{ read_time }} min read &nbsp; &middot; &nbsp;
                  <a href="{{ year | prepend: '/blog/' | relative_url }}">
                    <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
                  </a>
                </p>
              </div>
            </div>
          </a>
        </div>
        {% endfor %}
      </div>
    </div>
    <hr class="featured-divider">
  </div>
  {% endif %}

  <!-- Regular Posts with improved layout -->
  <div class="regular-posts">
    <h2 class="latest-posts-heading">Latest Articles</h2>
    <ul class="post-list p-0">
      {% if page.pagination.enabled %}
        {% assign postlist = paginator.posts %}
      {% else %}
        {% assign postlist = site.posts %}
      {% endif %}

      {% for post in postlist %}
        {% if post.external_source == blank %}
          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        {% else %}
          {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
        {% endif %}
        {% assign year = post.date | date: "%Y" %}
        {% assign tags = post.tags | join: "" %}
        {% assign categories = post.categories | join: "" %}

        <li class="post-item mb-5">
          <div class="row post-row">
            <div class="{% if post.thumbnail %}col-md-9{% else %}col-md-12{% endif %}">
              <h3 class="post-title-main">
                {% if post.redirect == blank %}
                  <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                {% elsif post.redirect contains '://' %}
                  <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}
                    <svg width="1rem" height="1rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </a>
                {% else %}
                  <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
                {% endif %}
              </h3>
              <p class="post-description">{{ post.description }}</p>
              <p class="post-meta">
                <i class="fa-regular fa-clock"></i> {{ read_time }} min read &nbsp; &middot; &nbsp;
                <i class="fa-regular fa-calendar"></i> {{ post.date | date: '%B %d, %Y' }}
                {% if post.external_source %}
                &nbsp; &middot; &nbsp; <i class="fa-solid fa-link"></i> {{ post.external_source }}
                {% endif %}
              </p>
              <p class="post-tags">
                <a href="{{ year | prepend: '/blog/' | relative_url }}" class="year-link">
                  <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
                </a>

                {% if tags != "" %}
                &nbsp; &middot; &nbsp;
                  {% for tag in post.tags %}
                  <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="tag-link">
                    <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>
                    {% unless forloop.last %}
                      &nbsp;
                    {% endunless %}
                  {% endfor %}
                {% endif %}

                {% if categories != "" %}
                &nbsp; &middot; &nbsp;
                  {% for category in post.categories %}
                  <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" class="category-link">
                    <i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a>
                    {% unless forloop.last %}
                      &nbsp;
                    {% endunless %}
                  {% endfor %}
                {% endif %}
              </p>
            </div>
            
            {% if post.thumbnail %}
            <div class="col-md-3">
              <a href="{{ post.url | relative_url }}" class="thumbnail-link">
                <div class="thumbnail-container">
                  <img class="img-fluid rounded" src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }} thumbnail">
                </div>
              </a>
            </div>
            {% endif %}
          </div>
        </li>
      {% endfor %}
    </ul>
  </div>

  <!-- Pagination with improved styling -->
  {% if page.pagination.enabled %}
  <div class="pagination-container">
    {% include pagination.liquid %}
  </div>
  {% endif %}

</div>

<!-- JavaScript for search functionality -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const postItems = document.querySelectorAll('.post-item');
    
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      
      postItems.forEach(item => {
        const title = item.querySelector('.post-title').textContent.toLowerCase();
        const description = item.querySelector('.post-description').textContent.toLowerCase();
        const tags = item.querySelector('.post-tags') ? item.querySelector('.post-tags').textContent.toLowerCase() : '';
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || tags.includes(searchTerm)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
</script>

<!-- Add custom CSS for blog styling -->
<style>
  .header-bar {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }
  
  .header-bar h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  .header-bar h2 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #666;
  }
  
  .search-container {
    margin-bottom: 2rem;
  }
  
  .tags-header {
    font-weight: 600;
    color: #333;
  }
  
  .tag-category-list ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
  }
  
  .tag-item a, .category-item a {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    text-decoration: none;
    transition: all 0.2s;
    display: inline-block;
  }
  
  .tag-item a {
    background-color: #f0f0f0;
    color: #666;
  }
  
  .category-item a {
    background-color: #e0e0e0;
    color: #555;
  }
  
  .tag-item a:hover, .category-item a:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .featured-heading, .latest-posts-heading {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    position: relative;
    display: inline-block;
  }
  
  .featured-heading:after, .latest-posts-heading:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 3px;
    background: var(--global-theme-color);
    bottom: 0;
    left: 0;
  }
  
  .featured-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #eee;
  }
  
  .featured-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  
  .featured-pin {
    position: absolute;
    top: 10px;
    right: 10px;
    color: var(--global-theme-color);
  }
  
  .featured-divider {
    margin: 2rem 0;
    border-top: 2px solid #eee;
  }
  
  .post-item {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #eee;
    transition: transform 0.2s;
  }
  
  .post-item:last-child {
    border-bottom: none;
  }
  
  .post-item:hover {
    transform: translateX(5px);
  }
  
  .post-title-main {
    margin-bottom: 1rem;
  }
  
  .post-title {
    color: var(--global-theme-color);
    text-decoration: none;
    font-weight: 600;
  }
  
  .post-description {
    color: #555;
    margin-bottom: 1rem;
  }
  
  .post-meta {
    font-size: 0.85rem;
    color: #888;
    margin-bottom: 0.5rem;
  }
  
  .post-tags {
    font-size: 0.85rem;
  }
  
  .year-link, .tag-link, .category-link {
    text-decoration: none;
    transition: color 0.2s;
  }
  
  .year-link:hover, .tag-link:hover, .category-link:hover {
    color: var(--global-theme-color);
  }
  
  .thumbnail-container {
    overflow: hidden;
    border-radius: 8px;
    height: 100%;
  }
  
  .thumbnail-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .thumbnail-container:hover img {
    transform: scale(1.05);
  }
  
  .pagination-container {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .post-row {
      flex-direction: column-reverse;
    }
    
    .col-md-9, .col-md-3 {
      width: 100%;
    }
    
    .thumbnail-container {
      margin-bottom: 1rem;
      max-height: 200px;
    }
  }
</style>
