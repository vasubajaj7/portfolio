---
title: "Enterprise Data Governance Architecture with Microsoft Purview"
description: "Architected comprehensive governance framework for banking institution using Microsoft Purview and Fabric, achieving 60% risk reduction and enabling compliant self-service analytics for 500+ users"
client: "Top 10 U.S. Banking Institution"
date: 2025-01-15
image: "/blog/blog_post_1_1768848683359.webp"
tags: ["Microsoft Purview", "Microsoft Fabric", "Data Governance", "Banking", "Compliance"]
category: "Enterprise Data Governance"
link: ""
---

## Problem Context

A top 10 U.S. banking institution with $500B in assets was facing critical data governance challenges across their Microsoft Fabric data platform. With 500+ analysts accessing sensitive customer data (PII, PHI, financial records), the bank had no centralized governance framework, leading to:

- **Compliance risks**: Manual security workarounds bypassing access controls
- **Data exposure**: Unrestricted access to PII/PHI across 2,000+ tables
- **Audit failures**: No lineage tracking or audit trails for regulatory reporting
- **Operational inefficiency**: 40+ hours/week spent on manual access requests
- **Regulatory pressure**: SOC 2, GDPR, and GLBA compliance gaps identified in audits

The bank needed enterprise-grade governance enabling self-service analytics while maintaining strict security, compliance, and audit capabilities.

## Architecture Designed

### Governance Architecture Overview

```
Data Sources (SQL Server, Oracle, Salesforce, APIs)
    ↓
Microsoft Fabric (Lakehouse, Warehouse, Notebooks)
    ↓
Microsoft Purview (Governance Layer)
    ├── Data Discovery & Classification
    ├── Business Glossary & Metadata
    ├── Data Lineage Tracking
    ├── Access Policies & RBAC
    └── Audit Logging & Compliance
    ↓
Consumption Layer (Power BI, SQL Endpoints, Notebooks)
    ├── Dynamic Data Masking (DDM)
    ├── Column-Level Security
    └── Row-Level Security (RLS)
```

### Governance Framework Components

#### 1. Data Discovery & Classification
- **Automated scanning**: Purview scans Fabric Lakehouse and Warehouse every 6 hours
- **Classification rules**: 50+ custom classifiers for banking-specific data (account numbers, SSN, credit cards)
- **Sensitivity labels**: Confidential, Highly Confidential, Public, Internal
- **Asset inventory**: 2,000+ tables, 50,000+ columns cataloged

#### 2. Business Glossary & Metadata
- **Centralized glossary**: 500+ business terms with definitions and ownership
- **Data stewardship**: Assigned data owners for 100+ critical datasets
- **Metadata management**: Automated metadata extraction from Fabric workloads
- **Search & discovery**: Self-service data discovery portal for analysts

#### 3. Data Lineage Tracking
- **End-to-end lineage**: Source systems → Fabric → Power BI dashboards
- **Impact analysis**: Identify downstream dependencies before schema changes
- **Automated lineage**: Native integration with Fabric notebooks, pipelines, and SQL endpoints
- **Compliance reporting**: Lineage reports for audit and regulatory requirements

#### 4. Access Policies & Security
- **Purview policies**: Centralized policy management for Fabric workloads
- **Dynamic Data Masking (DDM)**: Automated masking for PII/PHI columns
- **Column-level security**: Fine-grained access control via OneLake security model
- **Row-level security (RLS)**: Data filtering by business unit and geography

#### 5. Audit Logging & Compliance
- **Comprehensive audit logs**: All data access logged in Purview
- **Compliance dashboards**: Real-time compliance monitoring for SOC 2, GDPR, GLBA
- **Automated reporting**: Quarterly compliance reports for regulators
- **Anomaly detection**: ML-based detection of unusual data access patterns

## Key Architectural Decisions

### 1. Microsoft Purview vs Third-Party Governance Tools

**Decision**: Selected Microsoft Purview as primary governance platform

**Rationale**:
- **Native Fabric integration**: Zero-latency governance with native connectors
- **Unified platform**: Single pane of glass for Azure, Fabric, and Power BI governance
- **Cost efficiency**: Included in Microsoft E5 licensing, no additional vendor costs
- **Microsoft ecosystem**: Seamless integration with Azure AD, Entra ID, and Defender

**Tradeoff**: Vendor lock-in to Microsoft ecosystem vs multi-vendor tools like Collibra, but superior integration and lower TCO justified the decision

**Cost Analysis**:
- Purview: $0 incremental cost (included in E5 licensing)
- Collibra equivalent: $250K/year for 500 users
- **Savings**: $250K annually

### 2. Dynamic Data Masking vs Static Masking

**Decision**: Implemented Dynamic Data Masking (DDM) in Fabric

**Rationale**:
- **Real-time masking**: No data duplication or ETL overhead
- **Policy-based**: Centralized masking rules in Purview
- **Performance**: Minimal query overhead (<5% latency increase)
- **Flexibility**: Different masking rules for different user roles

**Tradeoff**: DDM requires Fabric SQL endpoint support, limiting use cases to SQL-based consumption, but 95% of workloads were SQL-compatible

### 3. Purview Policies vs OneLake Security Model

**Decision**: Hybrid approach using both Purview policies and OneLake security

**Architecture**:
- **Purview policies**: High-level access control and data masking rules
- **OneLake security**: Fine-grained column and row-level security
- **Integration**: Purview policies automatically applied to OneLake security model

**Rationale**: Purview provides centralized policy management, OneLake enforces at query time with native Fabric integration

### 4. Automated vs Manual Data Classification

**Decision**: Automated classification with manual review workflow

**Architecture**:
- **Automated scanning**: Purview scans Fabric every 6 hours with 50+ classifiers
- **ML-based classification**: Pattern matching and ML models for PII/PHI detection
- **Manual review**: Data stewards review and approve classifications weekly
- **Continuous improvement**: Feedback loop to improve classifier accuracy

**Impact**:
- **95% classification accuracy** after 3 months of tuning
- **40 hours/week saved** vs manual classification
- **100% coverage** of 2,000+ tables within 6 months

### 5. Centralized vs Federated Governance Model

**Decision**: Federated governance with centralized policy enforcement

**Architecture**:
- **Centralized policies**: Purview policies defined by central governance team
- **Federated stewardship**: Business units assign data owners and stewards
- **Automated enforcement**: Policies automatically enforced across all Fabric workloads
- **Self-service**: Analysts request access via Purview portal with automated approval workflows

**Rationale**: Balances central control with business unit autonomy, enabling self-service while maintaining compliance

## Scale & Governance Metrics

### Data Governance Coverage
- **2,000+ tables** governed across Fabric Lakehouse and Warehouse
- **50,000+ columns** classified with sensitivity labels
- **500+ business terms** in centralized glossary
- **100+ data owners** assigned across business units
- **50+ custom classifiers** for banking-specific data types

### Security & Compliance
- **60% reduction** in data exposure risks
- **Zero security incidents** post-Purview implementation
- **100% audit compliance** for SOC 2, GDPR, and GLBA
- **95% classification accuracy** for PII/PHI detection
- **99.9% policy enforcement** SLA across all Fabric workloads

### Operational Efficiency
- **40 hours/week saved** on manual access requests (automated approval workflows)
- **80% faster** data discovery (self-service portal vs manual requests)
- **90% reduction** in compliance reporting time (automated reports)
- **500+ users** enabled with self-service analytics (vs 50 users pre-Purview)

### User Adoption
- **500+ analysts** using self-service data discovery portal
- **1,000+ access requests** processed monthly via automated workflows
- **95% user satisfaction** with self-service analytics experience
- **50% reduction** in IT support tickets for data access

## Governance & Security Implementation

### Data Classification Framework

#### Automated Classification
- **PII Detection**: SSN, email, phone, address, date of birth
- **PHI Detection**: Medical records, health insurance, diagnosis codes
- **Financial Data**: Account numbers, credit cards, transaction amounts, balances
- **Custom Classifiers**: Routing numbers, SWIFT codes, loan IDs, customer IDs

#### Sensitivity Labels
- **Public**: Non-sensitive data (product catalogs, marketing content)
- **Internal**: Internal business data (sales reports, operational metrics)
- **Confidential**: Customer PII (names, addresses, emails)
- **Highly Confidential**: Financial data (account balances, transactions, SSN)

### Access Control Architecture

#### Role-Based Access Control (RBAC)
- **Data Engineer**: Full access to raw and curated datasets, no PII visibility
- **Data Analyst**: Read access to curated datasets with masked PII
- **Data Scientist**: Access to anonymized datasets for ML model training
- **Business User**: Read access to aggregated reports with no PII
- **Data Steward**: Metadata management and classification review
- **Admin**: Full governance and policy management

#### Dynamic Data Masking Rules
- **Email masking**: `john.doe@example.com` → `j***@e***.com`
- **Phone masking**: `(555) 123-4567` → `(***) ***-4567`
- **SSN masking**: `123-45-6789` → `***-**-6789`
- **Account masking**: `1234567890` → `******7890`

#### Row-Level Security (RLS)
- **Business unit filtering**: Users only see data for their business unit
- **Geography filtering**: Regional managers only see their region's data
- **Customer segment filtering**: Analysts only see assigned customer segments

### Data Lineage Implementation

#### Automated Lineage Tracking
- **Source systems**: SQL Server, Oracle, Salesforce, APIs
- **Fabric pipelines**: Data Factory pipelines, Dataflow Gen2, Notebooks
- **Transformation logic**: Spark notebooks, SQL queries, Power Query
- **Consumption layer**: Power BI reports, SQL endpoints, REST APIs

#### Impact Analysis Workflow
1. **Schema change proposed**: Data engineer proposes column rename
2. **Lineage analysis**: Purview identifies 50 downstream Power BI reports
3. **Impact assessment**: Data steward reviews impact and approves change
4. **Automated notification**: Downstream report owners notified of change
5. **Deployment**: Change deployed with automated testing and validation

### Compliance Framework

#### SOC 2 Compliance
- **Access control**: RBAC with least-privilege access
- **Audit logging**: Complete audit trail for all data access
- **Encryption**: At-rest (AES-256) and in-transit (TLS 1.3) encryption
- **Monitoring**: Real-time monitoring for unauthorized access attempts

#### GDPR Compliance
- **Data subject rights**: Automated data deletion and export workflows
- **Consent management**: Tracking consent for data processing
- **Data minimization**: Automated data retention and deletion policies
- **Privacy by design**: Default data masking for PII columns

#### GLBA Compliance (Gramm-Leach-Bliley Act)
- **Financial data protection**: Encryption and access control for financial records
- **Customer privacy**: Opt-out mechanisms for data sharing
- **Security safeguards**: Multi-factor authentication and anomaly detection
- **Compliance reporting**: Quarterly reports for regulators

## CI/CD & Automation

### Infrastructure as Code
- **Terraform**: Purview account, Fabric workspace, and OneLake security provisioning
- **PowerShell**: Automated policy deployment and configuration management
- **Azure DevOps**: CI/CD pipelines for governance policy updates
- **Git**: Version control for Purview policies and classification rules

### Automated Workflows
- **Access request workflow**: Self-service portal → approval workflow → automated provisioning
- **Classification review workflow**: Automated scanning → steward review → approval
- **Compliance reporting workflow**: Automated data collection → report generation → distribution
- **Anomaly detection workflow**: ML-based detection → alert → investigation → remediation

### Monitoring & Alerting
- **Policy violations**: Real-time alerts for unauthorized data access
- **Classification drift**: Alerts for unclassified or misclassified data
- **Compliance gaps**: Automated detection of compliance violations
- **Performance monitoring**: Query performance impact of DDM and RLS

## Results & Business Impact

### Quantifiable Outcomes
- **60% reduction** in data exposure risks
- **Zero security incidents** post-Purview implementation
- **100% audit compliance** for SOC 2, GDPR, and GLBA
- **40 hours/week saved** on manual access requests
- **$250K annual savings** vs third-party governance tools

### Business Enablement
- **500+ users** enabled with self-service analytics (10x increase)
- **80% faster** data discovery via self-service portal
- **95% user satisfaction** with governance experience
- **50% reduction** in IT support tickets for data access

### Compliance & Risk Management
- **100% audit compliance** for regulatory requirements
- **Zero data breaches** post-implementation
- **Automated compliance reporting** reducing manual effort by 90%
- **Real-time monitoring** for unauthorized access attempts

### Operational Efficiency
- **Automated access workflows** reducing manual effort by 80%
- **Self-service data discovery** reducing time-to-insight by 70%
- **Centralized governance** eliminating manual security workarounds
- **Automated classification** covering 2,000+ tables in 6 months

## Architectural Tradeoffs Considered

### Purview vs Collibra
**Considered**: Collibra for multi-cloud governance

**Decision**: Microsoft Purview for native Fabric integration

**Rationale**: $250K annual savings and superior Microsoft ecosystem integration outweighed multi-cloud flexibility

### Dynamic vs Static Data Masking
**Considered**: Static masking with separate masked datasets

**Decision**: Dynamic Data Masking (DDM) in Fabric

**Rationale**: Real-time masking eliminated data duplication and ETL overhead, but required SQL endpoint support

### Centralized vs Federated Governance
**Considered**: Fully centralized governance with central team managing all policies

**Decision**: Federated governance with centralized policy enforcement

**Rationale**: Balanced central control with business unit autonomy, enabling self-service while maintaining compliance

## Technologies Used

**Governance Platform**: Microsoft Purview, Microsoft Fabric

**Data Platform**: Microsoft Fabric (Lakehouse, Warehouse, Notebooks)

**Security**: OneLake security model, Dynamic Data Masking (DDM), Row-Level Security (RLS)

**Identity & Access**: Azure Active Directory (Entra ID), RBAC, Multi-Factor Authentication

**Compliance**: SOC 2, GDPR, GLBA compliance frameworks

**Automation**: Terraform, PowerShell, Azure DevOps, Git

**Monitoring**: Azure Monitor, Purview audit logs, custom alerting

**BI & Analytics**: Power BI, SQL endpoints, REST APIs

**Data Quality**: Automated data profiling, anomaly detection, classification accuracy monitoring
