---
layout: achievement_case_study
case_study: true
title: "National Champion - HackFusion 2025 Hackathon"
organization: "HackFusion National Hackathon"
date: 2025-01-15
category: competition
tags: [hackathon, national-champion, ai-automation, microservices, full-stack, team-lead]
summary: "Secured 1st place at HackFusion 2025, India's premier national-level hackathon, leading a team to develop the 'Admission & Enrollment Automation System' - a comprehensive 5-microservice ecosystem transforming educational administration"
rating: 5
giscus_comments: true
metrics:
  - value: "1st Place"
    label: "National Ranking"
  - value: "5000+"
    label: "Participants"
  - value: "500+"
    label: "Teams Nationwide"
  - value: "24 Hours"
    label: "Development Time"
  - value: "5"
    label: "Microservices Built"
skills: [System Architecture, AI/ML, Full-Stack Development, Microservices, Team Leadership, FastAPI, React, Spring Boot, MongoDB]
---

## 1. Context and Objective
HackFusion 2025 presented an open-ended national problem statement: modernise and streamline admission and enrollment for educational institutions struggling with fragmented, manual processes. Objective: deliver a working, scalable proof-of-concept in 24 hours that demonstrates technical depth, reliability, and measurable administrative impact.

## 2. Problem Landscape
Current institutional workflows exhibit:
- Paper-heavy intake and manual transcription
- Delays during peak admission windows
- Inconsistent document validation quality
- No unified progress visibility for applicants or administrators
- Repetitive FAQ traffic to support staff

## 3. Solution Overview
A vertically integrated admission and enrollment automation ecosystem composed of five independently deployable services working through well-defined APIs. Core capabilities: document digitisation, structured data extraction, workflow orchestration, conversational assistance, administrative oversight.

### Architecture Summary
| Layer | Component | Responsibility | Tech Stack |
|-------|-----------|----------------|------------|
| Ingestion | OCR Automation Pipeline | Raw document conversion, text extraction, pre-processing | Python, FastAPI, Gemini API |
| Extraction | SLM Document Extraction | Field-level semantic extraction and validation | DistilBERT, TensorFlow, PyTorch |
| Orchestration | Admission Management Platform | Application lifecycle, status transitions, security | Spring Boot, React, JWT |
| Assistance | Scholaro ChatBot | Real-time applicant Q&A, workflow guidance | Node.js, Express, MongoDB |
| Administrative | University Management System | Operational configuration and oversight | Full-Stack Web Stack |

## 4. Design Principles
1. Separation of concerns per service boundary
2. Deterministic, versioned API contracts
3. Stateless processing where possible for horizontal scaling
4. Instrumented checkpoints for observability (processing stage, latency, extraction confidence)
5. Security by default: authenticated endpoints, role segregation

## 5. Data & Processing Flow
1. Applicant uploads document (PDF/Image)
2. OCR pipeline standardises format and performs text layer construction
3. Extractor model processes structured fields with confidence scoring
4. Orchestrator validates completeness → advances workflow state
5. Applicant & admin dashboards reflect real-time status
6. Chatbot surfaces context-aware responses and reduces manual tickets

## 6. Selected Technical Decisions
| Decision | Rationale | Trade-offs |
|----------|-----------|------------|
| Microservices over monolith | Parallel team velocity; independent scaling | Higher integration overhead |
| Lightweight DistilBERT variant | Balance between inference speed and accuracy | Slightly lower ceiling vs larger models |
| FastAPI for OCR service | Async IO efficiency, rapid prototyping | Requires careful tuning under load |
| Spring Boot for orchestration | Mature ecosystem, security & data tooling | Higher memory footprint |
| JWT-based auth | Stateless session management | Token revocation complexity |

## 7. Implementation Footprint
### Service Deployment Progression (Time-Ordered)
| Hour Block | Focus | Output |
|------------|-------|--------|
| 1–3 | Architecture alignment, repository scaffolds | Shared contracts defined |
| 4–8 | OCR + extraction model integration | Baseline inference pipeline operational |
| 9–14 | Orchestration service domain + auth | Role & workflow model stable |
| 15–19 | Chatbot integration + context hooks | FAQ reduction path validated |
| 20–22 | UI polishing + latency tuning | &lt; 1.2s avg extraction latency |
| 23 | Cross-service integration test | All success paths green |
| 24 | Demo packaging & narrative | Judge-ready scenario path |

## 8. Evidence Gallery
<div class="gallery-grid two">
  {% include figure.liquid path="assets/img/achievements/setup.jpeg" title="Initial setup & architecture mapping" class="img-fluid" %}
  {% include figure.liquid path="assets/img/achievements/holding_price.jpeg" title="Award announcement moment" class="img-fluid" %}
</div>
<div class="gallery-grid two">
  {% include figure.liquid path="assets/img/achievements/certificate.jpeg" title="Official certificate" class="img-fluid" %}
  {% include figure.liquid path="assets/img/achievements/shield.jpeg" title="Champion shield" class="img-fluid" %}
</div>
<div class="gallery-grid two">
  {% include figure.liquid path="assets/img/achievements/holding_with_judge.jpeg" title="With judging panel representative" class="img-fluid" %}
</div>

## 9. Outcome Metrics
<div class="outcome-metrics">
  <div class="outcome"><h3>95%</h3><span>Extraction Accuracy</span></div>
  <div class="outcome"><h3>80%</h3><span>Manual Handling Reduction</span></div>
  <div class="outcome"><h3>&lt; 1.2s</h3><span>Model Inference Latency</span></div>
  <div class="outcome"><h3>5</h3><span>Composable Services</span></div>
</div>

## 10. Differentiators
### Architectural Strengths
| Dimension | Implementation | Benefit |
|-----------|----------------|---------|
| Isolation | Service-per-core-function | Failure containment |
| Observability | Stage & confidence instrumentation | Rapid diagnosis |
| Extensibility | Contract-first APIs | Faster feature addition |
| Performance | Model/runtime balance | Real-time usability |
| Security | Role + token enforcement | Controlled access |

## 11. Repositories
| Repository | Scope | Key Focus |
|------------|-------|-----------|
| [OCR Automation Pipeline](https://github.com/sanjanb/ocr-automation-pipeline) | Document processing | OCR + pre-processing |
| [SLM Document Extraction](https://github.com/sanjanb/small-language-model) | AI inference | Field semantics |
| [College Admission Automation](https://github.com/sanjanb/College-Admission-Automation) | Core orchestration | Workflow + auth |
| [Scholaro ChatBot](https://github.com/sanjanb/scholaro-chatbot) | Conversational layer | Contextual responses |
| [University Management System](https://github.com/sanjanb/UniveristySite) | Admin oversight | Configuration UI |

## 12. Leadership & Coordination
Role: Full-Stack Architect & Team Lead. Responsibilities included architectural definition, integration risk mitigation, API boundary negotiation, and delivery sequencing.

### Coordination Timeline
<div class="timeline">
  <div class="timeline-item"><h5>Planning</h5><p>Service decomposition, repository scaffolding, interface contracts.</p></div>
  <div class="timeline-item"><h5>Parallel Build</h5><p>Independent implementation tracks with integration checkpoints every 4 hours.</p></div>
  <div class="timeline-item"><h5>Stabilisation</h5><p>Latency tuning, inference reliability validation, error budget sizing.</p></div>
  <div class="timeline-item"><h5>Demonstration</h5><p>Narrative alignment, scenario-driven walkthrough, metrics presentation.</p></div>
</div>

## 13. Judge Commentary (Selected)
<div class="quote-block">“Production-ready architecture depth uncommon in time-boxed environments.” – Lead Technical Judge</div>
<div class="quote-block">“Strong balance of AI capability, system design discipline, and clarity of delivery.” – Industry Panel Member</div>

## 14. Forward Path
Planned next steps:
- Pilot trial with an institutional partner
- Additional model evaluation dataset expansion
- Role-based analytics dashboard enhancement
- Deployment hardening (rate limiting, circuit breaking)

## 15. Reference Snapshot
Competition Date: 15 Jan 2025  
Achievement: National Champion (1st Place)  
Development Window: 24 hours  
Role: Full-Stack Architect & Team Lead