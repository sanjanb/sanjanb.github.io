---
layout: teaching
title: AI & ML Fundamentals
description: A foundational course introducing core concepts in Artificial Intelligence and Machine Learning through practical, hands-on examples.
category: ai-ml
level: intermediate
importance: 1
img: assets/img/teaching/ai-ml-fundamentals.jpg
icon: fas fa-robot
students: 120+
duration: 6 weeks
live_url: https://example.com/ai-ml-fundamentals
syllabus:
  - title: Introduction to AI Landscape
    topics: [History, Modern Applications, Ethical considerations]
  - title: Python for ML Fast Track
    topics: [NumPy, Pandas, Matplotlib]
  - title: Core ML Concepts
    topics: [Supervised vs Unsupervised, Bias-Variance, Evaluation Metrics]
  - title: Classical Algorithms
    topics: [Linear Regression, Logistic Regression, Decision Trees, KMeans]
  - title: Neural Networks Intro
    topics: [Perceptron, Activation Functions, Backpropagation intuition]
  - title: Model Deployment Basics
    topics: [Saving Models, Simple APIs]
projects:
  - name: Exploratory Data Analysis Report
    outcome: Derive insights from a tabular dataset
  - name: Spam Classifier
    outcome: Build and evaluate a text classification model
  - name: Customer Segmentation
    outcome: Apply clustering to segment behavior groups
outcomes:
  - Understand core ML workflow end-to-end
  - Implement and evaluate common ML algorithms
  - Translate business questions into data problems
  - Communicate results with clarity and visualizations
resources:
  slides: https://example.com/slides
  repo: https://github.com/sanjanb/ai-ml-fundamentals
  datasets: https://example.com/datasets
prerequisites:
  - Comfortable with basic Python
  - Basic linear algebra intuition
  - Curiosity to experiment
assessment:
  - Weekly quizzes (30%)
  - Project implementations (50%)
  - Final mini-capstone (20%)
tags: [Machine Learning, Python, Data Science, AI]
---

## Course Overview
This course delivers a pragmatic introduction to **Machine Learning**. Instead of overwhelming theory, it emphasizes *applied intuition*—why algorithms behave the way they do and how to use them responsibly.

> "If you can explain it to a beginner, you understand it." — A guiding principle of this course.

## Learning Experience

| Pillar | How It's Delivered |
|--------|--------------------|
| Concept Clarity | Visual analogies & whiteboard-style breakdowns |
| Hands-on Practice | Guided notebooks + independent challenges |
| Real-World Alignment | Case studies drawn from product and security domains |
| Iterative Feedback | Code reviews and formative checkpoints |

## Syllabus Highlights
{% for week in page.syllabus %}
### {{ forloop.index }}. {{ week.title }}
Topics: {{ week.topics | join: ', ' }}
{% endfor %}

## Key Projects
<div class="row">
{% for p in page.projects %}
  <div class="col-sm-4 mb-3">
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">{{ p.name }}</h5>
        <p class="card-text">{{ p.outcome }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

## Practical Skills Gained
- Data preparation & exploratory analysis
- Model selection and evaluation
- Overfitting mitigation techniques
- Reproducible experiment structure
- Communicating technical findings

## Assessment Structure
| Component | Weight |
|-----------|--------|
| Weekly Quizzes | 30% |
| Project Builds | 50% |
| Mini-Capstone  | 20% |

## Resources
- 📂 Source Repository: [GitHub Repo]({{ page.resources.repo }})
- 🖥 Slides: [Slide Deck]({{ page.resources.slides }})
- 📊 Datasets: [Practice Data]({{ page.resources.datasets }})

## Outcome
By the end, learners can **prototype ML solutions**, **interpret model performance**, and **scope improvements without guesswork**.

---
*Interested in collaborating or adapting this curriculum? Reach out!*