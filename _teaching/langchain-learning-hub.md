---
layout: teaching
title: "Generative AI: LangChain Learning Hub"
description: "A structured curriculum for mastering Generative AI with LangChain - from basics to enterprise RAG systems"
img: assets/img/langchain-course.jpg
importance: 1
category: ai-ml
date: 2025-01-01
duration: "5 Lessons"
level: intermediate
students: "500+"
tags: [LangChain, Generative AI, RAG, LLM, Python, AI Applications]
course_url: https://sanjanb.github.io/langchain/
github: https://github.com/sanjanb/langchain-learning-hub
redirect: false
---

<link rel="stylesheet" href="{{ '/assets/css/course-page.css' | relative_url }}">

<!-- Course Hero -->
<section class="teaching-hero" style="background-image: url('{{ page.img | relative_url }}');">
    <div class="hero-overlay">
        <div class="hero-content">
            <div class="hero-panel">
                <div class="hero-eyebrow">Structured, practical, production-minded</div>
                <h2 class="hero-title">Your path to production-grade LangChain</h2>
                <p class="hero-subtitle">{{ page.description }}</p>
                <ul class="hero-chips">
                    <li><i class="far fa-clock"></i> {{ page.duration }}</li>
                    <li><i class="fas fa-signal"></i> {{ page.level | capitalize }}</li>
                    <li><i class="fas fa-user-friends"></i> {{ page.students }} learners</li>
                </ul>
                <div class="hero-ctas">
                    <a href="{{ page.course_url }}" target="_blank" rel="noopener" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i> Access Course
                    </a>
                    <a href="#curriculum" class="btn btn-secondary">
                        <i class="fas fa-list"></i> Browse Curriculum
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="hero-scrim"></div>
</section>

<!-- Sticky section navigation -->
<nav class="section-nav" aria-label="Section navigation">
    <a href="#overview">Overview</a>
    <a href="#course-details">Details</a>
    <a href="#learning-metrics">Metrics</a>
    <a href="#learning-philosophy">Philosophy</a>
    <a href="#curriculum">Curriculum</a>
    <a href="#what-youll-build">Builds</a>
    <a href="#who-its-for">Audience</a>
    <a href="#features">Features</a>
    <a href="#technical-focus">Focus</a>
  
</nav>

<!-- Learning Path -->
<section class="learning-path">
    <div class="lp-header">
        <span class="lp-eyebrow">Roadmap</span>
        <h3>Learning Path</h3>
    </div>
    <ol class="lp-timeline">
        <li>
            <div class="node">1</div>
            <div class="info">
                <h4>Foundations</h4>
                <p>Core concepts of Generative AI and the LangChain mental model</p>
            </div>
        </li>
        <li>
            <div class="node">2</div>
            <div class="info">
                <h4>Components</h4>
                <p>Prompting, models, runnables, and composition patterns</p>
            </div>
        </li>
        <li>
            <div class="node">3</div>
            <div class="info">
                <h4>RAG</h4>
                <p>Loaders, splitters, embeddings, vector stores, retrievers</p>
            </div>
        </li>
        <li>
            <div class="node">4</div>
            <div class="info">
                <h4>Agents</h4>
                <p>Tool calling, orchestration, and structured reasoning</p>
            </div>
        </li>
        <li>
            <div class="node">5</div>
            <div class="info">
                <h4>Capstone</h4>
                <p>Production-aligned RAG assistant with evaluation</p>
            </div>
        </li>
    </ol>
</section>

<!-- Core Lessons -->
<section class="core-lessons">
    <div class="cl-header">
        <span class="cl-eyebrow">Syllabus</span>
        <h3>Core Lessons</h3>
    </div>
    <div class="lesson-grid">
        <a class="lesson-card" href="{{ page.course_url }}" target="_blank" rel="noopener">
            <span class="lesson-idx">01</span>
            <h4>Intro to Generative AI</h4>
            <p>Terminology, capabilities, limits, and success criteria</p>
        </a>
        <a class="lesson-card" href="{{ page.course_url }}" target="_blank" rel="noopener">
            <span class="lesson-idx">02</span>
            <h4>Six Core Components</h4>
            <p>The LangChain architecture and how pieces fit</p>
        </a>
        <a class="lesson-card" href="{{ page.course_url }}" target="_blank" rel="noopener">
            <span class="lesson-idx">03</span>
            <h4>Components & Setup</h4>
            <p>Runnables, pipelines, and project scaffolding</p>
        </a>
        <a class="lesson-card" href="{{ page.course_url }}" target="_blank" rel="noopener">
            <span class="lesson-idx">04</span>
            <h4>Models & Prompting</h4>
            <p>Prompt templates, chat models, and structured IO</p>
        </a>
        <a class="lesson-card" href="{{ page.course_url }}" target="_blank" rel="noopener">
            <span class="lesson-idx">05</span>
            <h4>Model Deep Dive</h4>
            <p>Tokenization, generation settings, and evaluation</p>
        </a>
        <a class="lesson-card capstone" href="{{ page.course_url }}" target="_blank" rel="noopener">
            <span class="lesson-idx">★</span>
            <h4>Capstone Project</h4>
            <p>Production RAG assistant with tools and tests</p>
        </a>
    </div>
</section>

## Overview

**Generative AI: LangChain Learning Hub** is a structured curriculum that helps you progress from foundations to production-grade AI applications using LangChain and modern LLM tooling.

<div class="fact-grid">
  <div class="fact-card"><h4>Format</h4><p>Self-paced lessons</p><small>Hands-on first</small></div>
  <div class="fact-card"><h4>Focus</h4><p>Foundation → RAG → Agents</p><small>Sequenced path</small></div>
  <div class="fact-card"><h4>Level</h4><p>Intermediate</p><small>Python friendly</small></div>
  <div class="fact-card"><h4>Outcome</h4><p>Production-minded skills</p><small>Deployable patterns</small></div>
</div>

## Course Details

<dl class="kv">
    <div><dt>Instructor</dt><dd>Sanjan B M</dd></div>
    <div><dt>Category</dt><dd>AI &amp; ML / LangChain</dd></div>
    <div><dt>Curriculum</dt><dd>5 core lessons + Capstone</dd></div>
    <div><dt>Projects</dt><dd>Chatbot, Summarizer, Knowledge Base, Multi-tool Assistant</dd></div>
    <div><dt>External Site</dt><dd><a href="{{ page.course_url }}" target="_blank" rel="noopener">sanjanb.github.io/langchain</a></dd></div>
</dl>

## Learning Metrics

<div class="metric-card-grid">
    <div class="mcard"><span class="label">Lessons</span><span class="value">5</span><small>Fundamentals to deep dive</small></div>
    <div class="mcard"><span class="label">Track</span><span class="value">RAG + Agents</span><small>End-to-end builds</small></div>
    <div class="mcard"><span class="label">Mode</span><span class="value">Self-paced</span><small>Project-led</small></div>
    <div class="mcard"><span class="label">Skill</span><span class="value">Production-ready</span><small>Evaluation & reuse</small></div>
</div>

## Learning Philosophy

<ul class="selection-grid">
    <li><strong>Clarity over novelty:</strong> Fewer concepts, deeply understood</li>
    <li><strong>Execution model awareness:</strong> Token flow and chain composition</li>
    <li><strong>Precise naming:</strong> Prompts vs templates, retrievers vs vector stores</li>
    <li><strong>Progressive generalization:</strong> Start concrete, then abstract</li>
    <li><strong>Reusability & evaluation:</strong> Treat each artifact as testable</li>
    <li><strong>Production mindset:</strong> Real-world deployment patterns</li>
</ul>

## Curriculum {#curriculum}

<details class="collapsible-curriculum" open>
    <summary><strong>View Outline</strong></summary>
    <ul class="dignitary-list">
        <li><strong>Lesson 1:</strong> Introduction to Generative AI</li>
        <li><strong>Lesson 2:</strong> The Six Core Components of LangChain</li>
        <li><strong>Lesson 3:</strong> LangChain Components &amp; Setup</li>
        <li><strong>Lesson 4:</strong> Models &amp; Prompt Foundations</li>
        <li><strong>Lesson 5:</strong> Model Component Deep Dive</li>
        <li><strong>Capstone:</strong> Multi-tenant, production-aligned RAG system</li>
    </ul>
  
    <div class="kv" style="margin-top:.75rem;">
        <div><dt>RAG Track</dt><dd>Loaders, splitters, embeddings, vector stores, retrievers</dd></div>
        <div><dt>Agents Track</dt><dd>Tools & tool calling, structured reasoning, assembly</dd></div>
    </div>
</details>

## What You'll Build

<ul class="selection-grid">
    <li><strong>Chatbot:</strong> Conversational assistant with memory</li>
    <li><strong>Summarizer:</strong> Extractive and abstractive pipelines</li>
    <li><strong>Knowledge Base:</strong> Retrieval-ready document system</li>
    <li><strong>Multi-tool Assistant:</strong> Tool calling with evaluation</li>
</ul>

## Who It's For

<dl class="kv">
    <div><dt>Ideal Audience</dt><dd>Engineers, data scientists, builders</dd></div>
    <div><dt>Prerequisites</dt><dd>Python, APIs; ML familiarity helpful</dd></div>
    <div><dt>Time Commitment</dt><dd>Self-paced; project-led</dd></div>
</dl>

## Features

<ul class="selection-grid">
    <li><strong>Self-paced learning</strong> with clear lesson structure</li>
    <li><strong>Hands-on projects</strong> reinforcing each concept</li>
    <li><strong>Production patterns</strong> for real-world applications</li>
    <li><strong>Clean explanations</strong> without hype</li>
    <li><strong>Progressive complexity</strong> from basics upward</li>
</ul>

## Technical Focus

<ul class="selection-grid">
    <li><strong>Component architecture</strong> and runnables</li>
    <li><strong>Prompt engineering</strong> patterns</li>
    <li><strong>Retrieval system</strong> design</li>
    <li><strong>Agent orchestration</strong> strategies</li>
    <li><strong>Evaluation and testing</strong> methodology</li>
</ul>

---

<div class="course-cta">
    <h3>Ready to Master Generative AI with LangChain?</h3>
    <p>Join hundreds of learners building practical AI applications with structured, foundation-first learning.</p>
    <a href="{{ page.course_url }}" target="_blank" class="btn btn-primary btn-lg">
        <i class="fas fa-external-link-alt"></i> Access Course
    </a>
    <div class="course-note">
        <small><i class="fas fa-info-circle"></i> This will take you to the external learning platform</small>
    </div>
</div>

<!-- Floating CTA (mobile) -->
<div class="floating-cta">
    <a href="{{ page.course_url }}" target="_blank" rel="noopener" class="btn btn-primary">
        <i class="fas fa-external-link-alt"></i> Access Course
    </a>
    <a href="#curriculum" class="btn btn-secondary">
        <i class="fas fa-list"></i> Curriculum
    </a>
</div>