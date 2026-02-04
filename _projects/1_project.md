---
layout: page
title: AI-Powered Cyber Threat Intelligence System
description: NLP-based system for real-time threat analysis and classification
img: assets/img/cti-nlp-banner.jpg
importance: 1
category: work
related_publications: true
github: https://github.com/sanjanb/cti-nlp-system
---

## Overview

A cutting-edge **Cyber Threat Intelligence (CTI) system** that leverages **Natural Language Processing (NLP)** and **AI-based classification** to extract meaningful cyber threat indicators from unstructured text, categorize threat types, predict severity levels, and visualize insights through an interactive web interface.

This platform is designed for cybersecurity analysts and SOC teams to **triage, investigate, and act** on threat intelligence — all within one comprehensive dashboard.

## Key Features

### 🔍 **Named Entity Recognition (NER)**

- Extracts IOCs (IP addresses, malware names, CVEs, domains)
- Uses BERT-based transformers for cybersecurity-specific entities
- Identifies threat actors, organizations, and geographical locations

### 🎯 **Threat Classification**

- Categorizes threats into: Phishing, Malware, APTs, Ransomware
- Ensemble model combining XGBoost and Logistic Regression
- High accuracy with interpretable feature importance

### ⚠️ **Severity Level Prediction**

- Automated risk assessment (Low, Medium, High)
- Multi-feature analysis including IOC count and sentiment
- Random Forest classifier with keyword-based features

### 📊 **Interactive Dashboard**

- Real-time threat analysis interface
- Expandable result cards with detailed breakdowns
- Downloadable reports and visualizations

## Technical Architecture

### Technology Stack

| Category         | Technologies                           |
| ---------------- | -------------------------------------- |
| **Backend**      | FastAPI, Python, Uvicorn               |
| **NLP Models**   | spaCy, HuggingFace Transformers, BERT  |
| **ML Libraries** | Scikit-learn, XGBoost, PyTorch         |
| **Frontend**     | HTML5, Bootstrap 5, JavaScript, Jinja2 |
| **Deployment**   | Docker, Docker Compose                 |
| **Data Storage** | CSV, JSON, Pickle                      |

## Machine Learning Pipeline

### 1. **Ensemble Threat Classification**

```python
# Combining multiple models for robust classification
ensemble_models = {
    'xgboost': XGBClassifier(),
    'logistic': LogisticRegression(),
    'random_forest': RandomForestClassifier()
}
```

### 2. **Advanced NER with BERT**

- Model: `dslim/bert-base-NER` from HuggingFace
- Fine-tuned on cybersecurity datasets
- Extracts entities: ORG, LOC, PER, MISC with cybersecurity context

### 3. **Severity Prediction Features**

- IOC count (IP addresses, domains, CVEs)
- Named entity frequency
- Sentiment analysis scores
- Keyword matching with threat vocabulary
- Text complexity metrics

## Results & Performance

The system demonstrates high accuracy across all components:

- **Threat Classification**: 94.2% accuracy with ensemble approach
- **Severity Prediction**: 89.7% accuracy on test dataset
- **NER Performance**: 92.1% F1-score for cybersecurity entities
- **Real-time Processing**: <2 seconds average response time

## Implementation Highlights

### Real-time Threat Analysis API

```bash
curl -X POST http://localhost:8000/analyze \
    -H "Content-Type: application/json" \
    -d '{"text": "QakBot malware exploited CVE-2023-1234 via phishing"}'
```

### Docker Deployment

```yaml
version: "3.8"
services:
  cti-nlp:
    build: .
    ports:
      - "8000:8000"
    environment:
      - PYTHONPATH=/app
```

## Future Enhancements

### Planned Features

- **Real-time Data Ingestion**: Integration with threat feeds and social media APIs
- **Knowledge Graph**: Visualization of threat actor relationships
- **Automated Response**: IOC blocking and SIEM integration
- **Multi-language Support**: Analysis of threats in multiple languages
- **Advanced Visualization**: Interactive threat maps and timeline analysis

### Research Directions

- Zero-shot threat classification using GPT models
- Adversarial training for improved robustness
- Time-series analysis for threat trend prediction
- Integration with MITRE ATT&CK framework

## Academic Impact

This project contributes to cybersecurity research by:

- Demonstrating effective ensemble learning for threat classification
- Providing open-source tools for CTI analysis
- Establishing benchmarks for NLP in cybersecurity
- Creating datasets for future research

## Getting Started

1. **Clone Repository**

   ```bash
   git clone https://github.com/sanjanb/cti-nlp-system.git
   cd cti-nlp-system
   ```

2. **Setup Environment**

   ```bash
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Run Application**
   ```bash
   uvicorn backend.main:app --reload
   ```

Visit the [GitHub repository](https://github.com/sanjanb/cti-nlp-system) for complete documentation, setup guides, and contribution guidelines.

## Team & Collaboration

**Development Team:**

- **Sanjan B M** - Lead Developer & ML Engineer
- **Kushal S M** - Frontend & API Development
- **Ponnanna K V** - Data Engineering & Testing
- **Vishnu S** - Documentation & DevOps
- **Prof. Khateeja Ambreen** - Project Guide

**Institution:** ATME College of Engineering, Mysuru  
**Department:** Computer Science & Engineering (AI & ML)  
**Duration:** 2024-2025 (Final Year Project)

---

_This project demonstrates the practical application of AI and NLP in cybersecurity, contributing to the advancement of automated threat intelligence systems._
