---
layout: work_case_study
title: "AI-Powered Cyber Threat Intelligence System"
company: "ATME College of Engineering"
role: "Lead AI/ML Researcher"
date: 2025-01-01
start_date: 2024-08-01
end_date: 2025-01-01
duration: "5 months"
preview: "cti-nlp-system.png"
website: "https://sanjanb.github.io/cti-nlp-system"
github: "https://github.com/sanjanb/cti-nlp-system"
summary: "Operational cyber threat intelligence platform combining BERT NER, ensemble classification, severity prediction, and real-time analysis—delivering 89.2% classification accuracy and sub‑second processing for SOC workflows."
categories: [ai-ml, cybersecurity, nlp]
tags: [Python, NLP, BERT, FastAPI, Machine Learning, Cybersecurity]
technologies:
  - Python 3.9+
  - HuggingFace Transformers
  - Scikit-learn
  - FastAPI
  - BERT (dslim/bert-base-NER)
  - TF-IDF Vectorization
  - Random Forest
  - Logistic Regression
  - Docker
  - HTML/CSS/JavaScript
impact:
  - value: "89.2%"
    description: "Threat classification accuracy achieved"
  - value: "91.3%"
    description: "Named Entity Recognition precision"
  - value: "Sub-second"
    description: "Real-time threat analysis processing"
  - value: "4-member"
    description: "Research team successfully coordinated"
responsibilities:
  - "Architected end-to-end NLP pipeline for cyber threat intelligence analysis"
  - "Developed ensemble machine learning models combining traditional ML with deep learning"
  - "Implemented BERT-based Named Entity Recognition for cybersecurity entities"
  - "Built FastAPI backend with RESTful endpoints for threat analysis"
  - "Created interactive web dashboard for real-time threat visualization"
  - "Engineered domain-specific features for enhanced threat severity prediction"
  - "Coordinated 4-member research team and guided project implementation"
giscus_comments: true
layout_variant: full
timeline:
  - date: 2024-08
    title: Dataset curation & labeling
    detail: Aggregated multi-source threat reports; established annotation schema.
  - date: 2024-09
    title: Baseline models & pipeline
    detail: Implemented TF‑IDF + Logistic + RF ensemble; initial NER integration.
  - date: 2024-10
    title: Advanced feature engineering
    detail: Added IOC frequency, sentiment metrics, entity pattern features.
  - date: 2024-11
    title: Real-time API & dashboard
    detail: Built FastAPI services + interactive visualization layer.
  - date: 2024-12
    title: Optimization & latency tuning
    detail: Model loading strategy + vectorization caching for sub‑second responses.
  - date: 2025-01-01
    title: Final evaluation & reporting
    detail: Reached target metrics; documentation & deployment packaging.
problems:
  - issue: No structured extraction of threat entities
    solution: Fine-tuned BERT NER for security vocab
    impact: 91.3% precision entity recognition
  - issue: Inconsistent threat classification reliability
    solution: Ensemble (TF‑IDF + Logistic + Random Forest)
    impact: 89.2% multi-class accuracy
  - issue: Latency blocked analyst adoption
    solution: Pre-warmed model + caching + async pipeline
    impact: Sub‑second interactive analysis
  - issue: Feature sparsity hurting severity prediction
    solution: Domain-specific engineered indicators (IOC density, keyword weighting)
    impact: +6–8% lift in F1 severity model
benchmarks:
  - metric: Threat classification accuracy
    before: 78.0%
    after: 89.2%
  - metric: NER precision
    before: 82.4%
    after: 91.3%
  - metric: Average processing latency
    before: ~1800ms
    after: <900ms (p95 sub‑second goal reached)
  - metric: Severity model F1
    before: 76.0%
    after: 84.1%
---

An intelligent cyber threat intelligence system that leverages **Natural Language Processing (NLP)** and **AI-based classification** to extract meaningful cyber threat indicators from unstructured text, categorize threat types, predict severity levels, and visualize insights through an interactive web interface.

## Project Overview

In today's rapidly evolving cyber threat landscape, security analysts are overwhelmed with vast amounts of unstructured threat intelligence data from blogs, forums, reports, and social media. This project addresses the critical need for automated threat analysis by developing a comprehensive AI system that delivers:

- **Automated Threat Entity Extraction**: Identifies malware names, threat actors, IPs, domains, and CVEs using BERT-based NER
- **Intelligent Threat Classification**: Categorizes threats into Phishing, Malware, APTs, Ransomware with 89.2% accuracy
- **Risk Severity Assessment**: Predicts threat impact as Low, Medium, or High using ensemble learning
- **Real-time Analysis Dashboard**: Provides actionable intelligence for SOC teams and security analysts

## Technical Architecture

###### Core NLP Pipeline
```python
# Named Entity Recognition using BERT-based models
def extract_threat_entities(text):
    entities = ner_pipeline(text)
    return [{"word": e["word"], "entity_group": e["entity_group"]} 
            for e in entities]

# Threat Classification with ensemble methods
def classify_threat(text):
    features = tfidf_vectorizer.transform([text])
    prediction = threat_classifier.predict(features)
    return prediction[0]
```

### Machine Learning Models
- **Named Entity Recognition**: Fine-tuned BERT model (`dslim/bert-base-NER`) for cybersecurity entities
- **Threat Classification**: Ensemble approach combining TF-IDF + Logistic Regression with Random Forest
- **Severity Prediction**: Random Forest with engineered cybersecurity-specific features

### Advanced Feature Engineering
- IOC frequency analysis (IPs, domains, CVEs)
- Cybersecurity keyword density mapping
- Named entity occurrence patterns
- Text complexity and sentiment metrics

## Performance Metrics

| Model Component | Accuracy | Precision | Recall | F1-Score |
|-----------------|----------|-----------|---------|----------|
| Threat Classification | 89.2% | 87.8% | 88.5% | 88.1% |
| Severity Prediction | 84.7% | 83.2% | 85.1% | 84.1% |
| Named Entity Recognition | 91.3% | 89.7% | 92.8% | 91.2% |

## Interactive Dashboard Features

- **Real-time Threat Analysis**: Instant processing of threat reports
- **Visual Entity Highlighting**: Color-coded threat indicators
- **Expandable Result Cards**: Detailed classification breakdown
- **Export Capabilities**: JSON/CSV report downloads
- **Responsive Design**: Mobile-friendly interface

## Research Impact & Innovation

###### Key Technical Contributions:
1. **Novel Ensemble Architecture**: Combined traditional ML with modern NLP for robust predictions
2. **Domain-Specific Feature Engineering**: Developed cybersecurity-focused feature extraction methods
3. **Real-time Processing Pipeline**: Optimized for sub-second threat analysis
4. **Production-Ready Implementation**: Designed for actual SOC deployment

### Academic Achievement:
- **Outstanding Final Year Project** at ATME College of Engineering (CSE - AI & ML)
- **Team Leadership**: Successfully coordinated 4-member interdisciplinary research team
- **Industry Relevance**: Addressed real-world cybersecurity operational challenges
- **Open Source Contribution**: Growing community engagement on GitHub

## **Future Enhancements**

###### Planned Technical Improvements:
1. **Advanced Transformer Models**: Integration with ThreatBERT and domain-specific transformers
2. **Real-time Intelligence Feeds**: Live threat data from multiple sources
3. **Graph-based Analytics**: Threat actor relationship mapping and visualization
4. **Automated Response Systems**: IOC blocking and firewall integration
5. **Multilingual Support**: Analysis capabilities for non-English threat sources

---

*This project demonstrates the practical application of cutting-edge AI/ML techniques in cybersecurity, providing immediate operational value while contributing to the advancement of automated threat intelligence systems.*