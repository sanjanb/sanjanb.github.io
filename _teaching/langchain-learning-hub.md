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

<style>
.teaching-hero{position:relative;border-radius:20px;overflow:hidden;background:linear-gradient(135deg,var(--global-theme-color),rgba(var(--global-theme-color-rgb),.8));background-size:cover;background-position:center;margin:1rem 0 2rem;min-height:360px;box-shadow:0 20px 60px -12px rgba(0,0,0,.4)}
.teaching-hero .hero-scrim{position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,0,0,.15),rgba(0,0,0,.4))}
.teaching-hero .hero-overlay{position:relative;z-index:1;padding:3rem 2rem;display:flex;align-items:center;min-height:360px}
.hero-content{color:#fff;max-width:900px;width:100%}
.hero-panel{background:rgba(255,255,255,.12);backdrop-filter:blur(20px) saturate(180%);border:1px solid rgba(255,255,255,.25);border-radius:24px;padding:2.5rem;box-shadow:0 25px 50px -12px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.4)}
.hero-eyebrow{font-size:.8rem;letter-spacing:.18em;text-transform:uppercase;opacity:.95;margin-bottom:.75rem;color:rgba(255,255,255,.95);font-weight:500}
.hero-title{margin:0 0 1rem;font-size:clamp(2rem,4.5vw,2.75rem);line-height:1.15;font-weight:700;text-shadow:0 3px 12px rgba(0,0,0,.4);color:#fff}
.hero-subtitle{margin:0 0 1.5rem;opacity:.95;max-width:70ch;font-size:1.1rem;line-height:1.55;font-weight:300;color:#fff}
.hero-chips{display:flex;gap:.75rem;list-style:none;padding:0;margin:1rem 0 2rem;flex-wrap:wrap}
.hero-chips li{background:rgba(255,255,255,.18);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.35);border-radius:999px;padding:.55rem 1rem;font-size:.9rem;font-weight:500;display:flex;align-items:center;gap:.5rem;transition:all .3s cubic-bezier(.4,0,.2,1);color:#fff}
.hero-chips li:hover{background:rgba(255,255,255,.3);transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,0,0,.2)}
.hero-ctas{display:flex;gap:1rem;flex-wrap:wrap}
.hero-ctas .btn{padding:.85rem 2rem;font-weight:600;border-radius:16px;transition:all .3s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 20px rgba(0,0,0,.3);font-size:1rem}
.hero-ctas .btn:hover{transform:translateY(-3px);box-shadow:0 12px 35px rgba(0,0,0,.4)}
.hero-ctas .btn-primary{background:rgba(255,255,255,.95);color:var(--global-theme-color);border:none}
.hero-ctas .btn-secondary{background:rgba(255,255,255,.2);color:#fff;border:1px solid rgba(255,255,255,.4)}

.section-nav{position:sticky;top:calc(56px + 1rem);z-index:100;background:rgba(var(--global-card-bg-color-rgb),.95);backdrop-filter:blur(16px) saturate(120%);border:1px solid var(--global-divider-color);border-radius:16px;padding:.75rem;display:flex;gap:.5rem;flex-wrap:wrap;margin:1rem 0 2rem;box-shadow:0 12px 35px -8px rgba(0,0,0,.15)}
.section-nav a{display:inline-flex;align-items:center;gap:.4rem;padding:.6rem .9rem;border-radius:12px;text-decoration:none;color:var(--global-text-color);border:1px solid transparent;font-size:.85rem;font-weight:500;transition:all .2s ease}
.section-nav a:hover{background:var(--global-theme-color);color:var(--global-hover-text-color);transform:translateY(-1px);box-shadow:0 4px 12px rgba(var(--global-theme-color-rgb),.3)}

.learning-path{background:linear-gradient(135deg,var(--global-card-bg-color),rgba(var(--global-theme-color-rgb),.03));border:1px solid var(--global-divider-color);border-radius:20px;padding:2rem;margin:2rem 0;position:relative;overflow:hidden}
.learning-path::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--global-theme-color),transparent)}
.lp-header{display:flex;align-items:baseline;gap:.8rem;margin:0 0 1.5rem}
.lp-eyebrow{font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--global-theme-color);font-weight:600}
.lp-header h3{margin:0;font-size:1.4rem;font-weight:700;color:var(--global-text-color)}
.lp-timeline{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem}
.lp-timeline li{display:flex;gap:.8rem;background:var(--global-bg-color);border:1px solid var(--global-divider-color);border-radius:16px;padding:1.25rem;transition:all .3s ease;position:relative}
.lp-timeline li:hover{transform:translateY(-4px);box-shadow:0 12px 35px -8px rgba(0,0,0,.15);border-color:var(--global-theme-color)}
.lp-timeline .node{flex:0 0 44px;height:44px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--global-theme-color),rgba(var(--global-theme-color-rgb),.8));color:var(--global-hover-text-color);font-weight:700;font-size:1.1rem;box-shadow:0 4px 12px rgba(var(--global-theme-color-rgb),.3)}
.lp-timeline .info h4{margin:.2rem 0 .4rem;font-size:1.1rem;font-weight:600;color:var(--global-text-color)}
.lp-timeline .info p{margin:0;font-size:.9rem;color:var(--global-text-color-light);line-height:1.4}

.core-lessons{margin:2rem 0}
.cl-header{display:flex;align-items:baseline;gap:.8rem;margin:0 0 1.5rem}
.cl-eyebrow{font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--global-theme-color);font-weight:600}
.core-lessons h3{margin:0;font-size:1.4rem;font-weight:700;color:var(--global-text-color)}
.lesson-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem}
.lesson-card{display:block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:18px;padding:1.5rem;text-decoration:none;color:inherit;transition:all .3s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}
.lesson-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--global-theme-color),transparent);transform:scaleX(0);transition:transform .3s ease}
.lesson-card:hover{transform:translateY(-6px);box-shadow:0 20px 50px -12px rgba(0,0,0,.2);border-color:var(--global-theme-color)}
.lesson-card:hover::before{transform:scaleX(1)}
.lesson-card .lesson-idx{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,rgba(var(--global-theme-color-rgb),.1),rgba(var(--global-theme-color-rgb),.05));border:1px solid rgba(var(--global-theme-color-rgb),.2);font-weight:700;color:var(--global-theme-color);margin-bottom:.75rem;font-size:1.1rem}
.lesson-card h4{margin:.2rem 0 .5rem;font-size:1.1rem;font-weight:600;color:var(--global-text-color)}
.lesson-card p{margin:0;font-size:.9rem;color:var(--global-text-color-light);line-height:1.4}
.lesson-card.capstone{border:2px solid var(--global-theme-color);background:linear-gradient(135deg,var(--global-card-bg-color),rgba(var(--global-theme-color-rgb),.03))}
.lesson-card.capstone .lesson-idx{background:var(--global-theme-color);color:var(--global-hover-text-color)}

.floating-cta{position:fixed;left:1rem;right:1rem;bottom:1rem;background:rgba(var(--global-card-bg-color-rgb),.95);backdrop-filter:blur(20px);border:1px solid var(--global-divider-color);border-radius:16px;padding:.75rem;display:none;gap:.75rem;justify-content:space-between;align-items:center;box-shadow:0 20px 40px -12px rgba(0,0,0,.25);z-index:1000}
.floating-cta .btn{flex:1;display:flex;justify-content:center;padding:.7rem;border-radius:12px;font-weight:600;color:var(--global-text-color)}
.floating-cta .btn-primary{background:var(--global-theme-color);color:var(--global-hover-text-color)}
.floating-cta .btn-secondary{background:var(--global-bg-color);border:1px solid var(--global-divider-color)}
.course-highlight {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-align: center;
    height: 100%;
}

.course-highlight h4 {
    color: var(--global-theme-color);
    margin-bottom: 0.5rem;
}

.course-cta {
    background: linear-gradient(135deg, var(--global-theme-color), rgba(var(--global-theme-color-rgb), 0.8));
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    margin: 2rem 0;
}

.course-cta h3 {
    color: white;
    margin-bottom: 1rem;
}

.course-cta p {
    opacity: 0.9;
    margin-bottom: 1.5rem;
}

.course-cta .btn-lg {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.course-note {
    margin-top: 1rem;
    opacity: 0.8;
}

.course-note i {
    margin-right: 0.25rem;
}

/* Enhanced structured section styles */
.fact-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.25rem;margin-top:1.5rem;}
.fact-card{background:linear-gradient(135deg,var(--global-card-bg-color),rgba(var(--global-theme-color-rgb),.02));border:1px solid var(--global-divider-color);padding:1.5rem 1.25rem;border-radius:16px;display:flex;flex-direction:column;gap:.4rem;box-shadow:0 6px 20px -8px rgba(0,0,0,.1);transition:all .3s ease;position:relative;overflow:hidden} 
.fact-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--global-theme-color);transform:scaleX(0);transition:transform .3s ease}
.fact-card:hover{transform:translateY(-4px);box-shadow:0 15px 35px -8px rgba(0,0,0,.15)}
.fact-card:hover::before{transform:scaleX(1)}
.fact-card h4{margin:0;font-size:1rem;font-weight:600;letter-spacing:.02em;color:var(--global-theme-color);} 
.fact-card p{margin:0;font-size:.9rem;line-height:1.35rem;font-weight:500;color:var(--global-text-color);}
.fact-card small{font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;color:var(--global-text-color-light);} 

dl.kv{margin:1.5rem 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;}
dl.kv div{background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);padding:1.25rem;border-radius:14px;transition:all .3s ease}
dl.kv div:hover{transform:translateY(-2px);box-shadow:0 8px 25px -8px rgba(0,0,0,.12);border-color:rgba(var(--global-theme-color-rgb),.3)}
dl.kv dt{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;font-weight:600;margin:0 0 .4rem;color:var(--global-theme-color);} 
dl.kv dd{margin:0;font-size:.9rem;line-height:1.35rem;color:var(--global-text-color);}

.metric-card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.25rem;margin:1.5rem 0;}
.mcard{background:linear-gradient(135deg,var(--global-card-bg-color),rgba(var(--global-theme-color-rgb),.02));border:1px solid var(--global-divider-color);padding:1.5rem 1.25rem;border-radius:16px;display:flex;flex-direction:column;gap:.5rem;transition:all .3s ease;position:relative}
.mcard:hover{transform:translateY(-4px);box-shadow:0 12px 30px -8px rgba(0,0,0,.15);border-color:rgba(var(--global-theme-color-rgb),.4)}
.mcard .label{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--global-theme-color);font-weight:600} 
.mcard .value{font-weight:700;font-size:1.1rem;color:var(--global-text-color)}
.mcard small{font-size:.7rem;color:var(--global-text-color-light);} 

.selection-grid{list-style:none;margin:1.5rem 0;padding:0;display:flex;flex-direction:column;gap:.75rem;}
.selection-grid li{background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);padding:1rem 1.25rem;border-radius:14px;font-size:.9rem;line-height:1.4rem;transition:all .3s ease}
.selection-grid li:hover{transform:translateX(4px);border-color:var(--global-theme-color);box-shadow:0 4px 15px -4px rgba(var(--global-theme-color-rgb),.2)}
.selection-grid li strong{color:var(--global-theme-color)}

.collapsible-curriculum{margin:1.5rem 0;}
.collapsible-curriculum summary{cursor:pointer;list-style:none;background:linear-gradient(135deg,var(--global-card-bg-color),rgba(var(--global-theme-color-rgb),.03));padding:1rem 1.25rem;border:1px solid var(--global-divider-color);border-radius:14px;font-size:.9rem;letter-spacing:.06em;text-transform:uppercase;font-weight:600;transition:all .3s ease;color:var(--global-text-color)}
.collapsible-curriculum summary:hover{background:rgba(var(--global-theme-color-rgb),.05);border-color:var(--global-theme-color)}
.collapsible-curriculum[open] summary{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:transparent}
.dignitary-list{margin:0;border:1px solid var(--global-divider-color);border-top:0;padding:1.25rem 1.5rem;border-bottom-left-radius:14px;border-bottom-right-radius:14px;background:var(--global-card-bg-color);display:flex;flex-direction:column;gap:.75rem;font-size:.9rem;}
.dignitary-list li{margin:0;padding:.5rem 0;border-bottom:1px solid rgba(var(--global-divider-color-rgb),.5);color:var(--global-text-color)}
.dignitary-list li:last-child{border-bottom:none}

.course-cta {
    background: linear-gradient(135deg, var(--global-theme-color), rgba(var(--global-theme-color-rgb), 0.8));
    color: white;
    padding: 2.5rem;
    border-radius: 24px;
    text-align: center;
    margin: 3rem 0;
    box-shadow: 0 20px 50px -12px rgba(var(--global-theme-color-rgb), 0.4);
    position: relative;
    overflow: hidden;
}
.course-cta::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(45deg,transparent,rgba(255,255,255,.1),transparent);transform:translateX(-100%);transition:transform .6s ease}
.course-cta:hover::before{transform:translateX(100%)}
.course-cta h3 {
    color: white;
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
    font-weight: 700;
}
.course-cta p {
    opacity: 0.95;
    margin-bottom: 2rem;
    font-size: 1.05rem;
}
.course-cta .btn-lg {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 16px;
    background: rgba(255,255,255,.9);
    color: var(--global-theme-color);
    border: none;
    transition: all .3s ease;
}
@media (max-width: 768px) {
  .teaching-hero{min-height:280px}
  .teaching-hero .hero-overlay{min-height:280px;padding:2rem 1.5rem}
  .hero-panel{padding:1.75rem}
  .hero-title{font-size:1.75rem}
  .hero-subtitle{font-size:1rem}
  .hero-chips{gap:.5rem;margin:1rem 0 1.5rem}
  .hero-chips li{padding:.4rem .7rem;font-size:.8rem}
  .hero-ctas{gap:.75rem;flex-direction:column}
  .hero-ctas .btn{padding:.75rem 1.5rem}
  .floating-cta{display:flex}
  .section-nav{flex-direction:column;gap:.4rem}
  .section-nav a{justify-content:center}
  .lp-timeline{grid-template-columns:1fr;gap:.75rem}
  .lesson-grid{grid-template-columns:1fr;gap:1rem}
  .fact-grid{grid-template-columns:1fr;gap:1rem}
  .metric-card-grid{grid-template-columns:repeat(2,1fr);gap:1rem}
  dl.kv{grid-template-columns:1fr}
  .course-cta{padding:2rem 1.5rem;margin:2rem 0}
}

@media (max-width: 480px) {
  .hero-panel{padding:1.5rem}
  .hero-title{font-size:1.5rem}
  .hero-ctas .btn{font-size:.9rem;padding:.7rem 1.25rem}
  .metric-card-grid{grid-template-columns:1fr}
  .lp-timeline .node{width:36px;height:36px;font-size:1rem}
  .lesson-card .lesson-idx{width:36px;height:36px;font-size:1rem}
}
</style>