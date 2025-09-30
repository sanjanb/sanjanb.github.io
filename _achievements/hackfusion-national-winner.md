---
layout: achievement_case_study
case_study: true
hero: true
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
<table class="case-table">
  <thead>
    <tr>
      <th>Layer</th>
      <th>Component</th>
      <th>Responsibility</th>
      <th>Tech Stack</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ingestion</td>
      <td>OCR Automation Pipeline</td>
      <td>Raw document conversion, text extraction, pre-processing</td>
      <td>Python, FastAPI, Gemini API</td>
    </tr>
    <tr>
      <td>Extraction</td>
      <td>SLM Document Extraction</td>
      <td>Field-level semantic extraction and validation</td>
      <td>DistilBERT, TensorFlow, PyTorch</td>
    </tr>
    <tr>
      <td>Orchestration</td>
      <td>Admission Management Platform</td>
      <td>Application lifecycle, status transitions, security</td>
      <td>Spring Boot, React, JWT</td>
    </tr>
    <tr>
      <td>Assistance</td>
      <td>Scholaro ChatBot</td>
      <td>Real-time applicant Q&amp;A, workflow guidance</td>
      <td>Node.js, Express, MongoDB</td>
    </tr>
    <tr>
      <td>Administrative</td>
      <td>University Management System</td>
      <td>Operational configuration and oversight</td>
      <td>Full-Stack Web Stack</td>
    </tr>
  </tbody>
</table>

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
<table class="case-table">
  <thead>
    <tr>
      <th>Decision</th>
      <th>Rationale</th>
      <th>Trade-offs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Microservices over monolith</td>
      <td>Parallel team velocity; independent scaling</td>
      <td>Higher integration overhead</td>
    </tr>
    <tr>
      <td>Lightweight DistilBERT variant</td>
      <td>Balance between inference speed and accuracy</td>
      <td>Slightly lower ceiling vs larger models</td>
    </tr>
    <tr>
      <td>FastAPI for OCR service</td>
      <td>Async IO efficiency, rapid prototyping</td>
      <td>Requires careful tuning under load</td>
    </tr>
    <tr>
      <td>Spring Boot for orchestration</td>
      <td>Mature ecosystem, security &amp; data tooling</td>
      <td>Higher memory footprint</td>
    </tr>
    <tr>
      <td>JWT-based auth</td>
      <td>Stateless session management</td>
      <td>Token revocation complexity</td>
    </tr>
  </tbody>
</table>

## 7. Implementation Footprint
### Service Deployment Progression (Time-Ordered)
<table class="case-table">
  <thead>
    <tr>
      <th>Hour Block</th>
      <th>Focus</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1–3</td><td>Architecture alignment, repository scaffolds</td><td>Shared contracts defined</td></tr>
    <tr><td>4–8</td><td>OCR + extraction model integration</td><td>Baseline inference pipeline operational</td></tr>
    <tr><td>9–14</td><td>Orchestration service domain + auth</td><td>Role &amp; workflow model stable</td></tr>
    <tr><td>15–19</td><td>Chatbot integration + context hooks</td><td>FAQ reduction path validated</td></tr>
    <tr><td>20–22</td><td>UI polishing + latency tuning</td><td>&lt; 1.2s avg extraction latency</td></tr>
    <tr><td>23</td><td>Cross-service integration test</td><td>All success paths green</td></tr>
    <tr><td>24</td><td>Demo packaging &amp; narrative</td><td>Judge-ready scenario path</td></tr>
  </tbody>
</table>

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
<table class="case-table">
  <thead>
    <tr>
      <th>Dimension</th>
      <th>Implementation</th>
      <th>Benefit</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Isolation</td><td>Service-per-core-function</td><td>Failure containment</td></tr>
    <tr><td>Observability</td><td>Stage &amp; confidence instrumentation</td><td>Rapid diagnosis</td></tr>
    <tr><td>Extensibility</td><td>Contract-first APIs</td><td>Faster feature addition</td></tr>
    <tr><td>Performance</td><td>Model/runtime balance</td><td>Real-time usability</td></tr>
    <tr><td>Security</td><td>Role + token enforcement</td><td>Controlled access</td></tr>
  </tbody>
</table>

## 11. Repositories
<table class="case-table">
  <thead>
    <tr>
      <th>Repository</th>
      <th>Scope</th>
      <th>Key Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><a href="https://github.com/sanjanb/ocr-automation-pipeline">OCR Automation Pipeline</a></td><td>Document processing</td><td>OCR + pre-processing</td></tr>
    <tr><td><a href="https://github.com/sanjanb/small-language-model">SLM Document Extraction</a></td><td>AI inference</td><td>Field semantics</td></tr>
    <tr><td><a href="https://github.com/sanjanb/College-Admission-Automation">College Admission Automation</a></td><td>Core orchestration</td><td>Workflow + auth</td></tr>
    <tr><td><a href="https://github.com/sanjanb/scholaro-chatbot">Scholaro ChatBot</a></td><td>Conversational layer</td><td>Contextual responses</td></tr>
    <tr><td><a href="https://github.com/sanjanb/UniveristySite">University Management System</a></td><td>Admin oversight</td><td>Configuration UI</td></tr>
  </tbody>
</table>

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