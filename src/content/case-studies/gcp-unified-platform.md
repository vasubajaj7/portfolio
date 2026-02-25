---
title: "Multi-Cloud Data Platform Architecture on Google Cloud"
description: "Architected unified 3TB/day data platform on GCP BigQuery with serverless ingestion, achieving 10x performance improvement and $200K annual cost savings"
client: "Global E-Commerce Leader"
date: 2023-09-10
image: "/blog/blog_post_3_1768848720552.webp"
tags: ["GCP", "BigQuery", "Cloud Composer", "Dataflow", "Multi-Cloud Architecture"]
category: "Cloud Data Architecture"
link: ""
---

## Problem Context

A global e-commerce company with $2B annual revenue was operating fragmented data infrastructure across on-premise Oracle databases, AWS S3 data lakes, and legacy ETL tools. Their data pipelines couldn't scale beyond 500GB/day, causing 24-hour delays in critical business reporting. Infrastructure costs exceeded $700K annually with poor resource utilization. The business needed real-time inventory analytics, ML-powered recommendation engines, and unified customer 360 views while reducing licensing costs and improving data freshness.

## Architecture Designed

### End-to-End Data Flow

```
Data Sources (APIs, Oracle DB, MySQL, Kafka, S3)
    ↓
Ingestion Layer (Pub/Sub, Cloud Functions, Dataflow)
    ↓
Raw Zone (GCS buckets with lifecycle policies)
    ↓
Processing Layer (Dataflow batch/streaming, Dataproc Spark)
    ↓
BigQuery Data Warehouse (partitioned, clustered tables)
    ↓
Consumption Layer (Tableau, Looker, Vertex AI, REST APIs)
```

### Unified Platform Architecture

- **Ingestion**: Pub/Sub for real-time events, Cloud Functions for API polling, Dataflow for batch ETL
- **Storage**: GCS for raw data lake, BigQuery as unified warehouse and data mart
- **Processing**: Dataflow for streaming/batch, Dataproc for Spark ML workloads
- **Orchestration**: Cloud Composer (managed Airflow) for workflow scheduling
- **Governance**: Data Catalog for metadata, IAM for access control, DLP API for PII detection
- **Monitoring**: Cloud Monitoring, BigQuery audit logs, custom alerting

### BigQuery as Unified Layer

**Key Design Decision**: Consolidated Data Lake, Data Warehouse, and Data Mart into single BigQuery platform

**Architecture Pattern**:
- **Raw Dataset**: Ingested data with minimal transformation (schema-on-read)
- **Curated Dataset**: Cleansed, validated, and conformed data models
- **Analytics Dataset**: Dimensional models optimized for BI consumption
- **ML Dataset**: Feature-engineered tables for Vertex AI model training

## Key Architectural Decisions

### 1. BigQuery vs Snowflake

**Decision**: Selected BigQuery as primary data warehouse

**Rationale**:
- **Serverless autoscaling**: No cluster management, automatic scaling to 3TB/day
- **Native GCP integration**: Seamless integration with Pub/Sub, Dataflow, Vertex AI
- **Cost model**: Pay-per-query pricing aligned with variable workload patterns
- **Performance**: Sub-second queries on TB-scale datasets with partitioning/clustering

**Tradeoff**: Vendor lock-in to GCP ecosystem vs Snowflake's multi-cloud portability, but 40% lower TCO and superior GCP integration justified the decision

**Cost Analysis**:
- BigQuery: $500K/year (storage + compute)
- Snowflake equivalent: $850K/year (warehouse credits + storage)
- **Savings**: $350K annually

### 2. Dataflow vs Dataproc for ETL

**Decision**: Chose Dataflow for streaming and batch ETL, Dataproc for ML workloads

**Rationale**:
- **Dataflow**: Serverless, autoscaling, lower ops overhead for ETL pipelines
- **Dataproc**: Better for Spark ML libraries and complex transformations
- **Hybrid approach**: Dataflow for 80% of workloads, Dataproc for ML-heavy jobs

**Tradeoff**: Dataflow has higher per-GB processing cost but eliminates cluster management overhead, resulting in 30% lower total operational cost

### 3. Cloud Composer vs Airflow on GKE

**Decision**: Implemented Cloud Composer (managed Airflow)

**Rationale**:
- **Managed service**: No Kubernetes cluster management
- **Native GCP integration**: Built-in connectors for BigQuery, Dataflow, GCS
- **High availability**: 99.9% SLA with automatic failover
- **Cost**: $500/month vs $2K/month for self-managed Airflow on GKE

**Tradeoff**: Less customization flexibility than self-hosted Airflow, but 75% lower operational cost and faster time-to-value

### 4. Partitioning & Clustering Strategy

**Decision**: Implemented date partitioning + multi-column clustering

**Architecture**:
- **Partitioning**: By ingestion date (daily partitions) for time-series data
- **Clustering**: By customer_id, product_id, region for query optimization
- **Partition expiration**: 90-day retention with automated lifecycle policies

**Impact**:
- **70% cost reduction** on queries via partition pruning
- **5x faster queries** via clustering on high-cardinality columns
- **50% storage savings** via automated partition expiration

### 5. Looker vs Tableau Migration

**Decision**: Migrated from Looker to Tableau for BI layer

**Rationale**:
- **Licensing cost**: Tableau $150K/year vs Looker $220K/year for 500 users
- **User preference**: Business analysts preferred Tableau's drag-and-drop UX
- **BigQuery integration**: Both tools had native BigQuery connectors

**Tradeoff**: Lost LookML semantic layer benefits, but $70K annual savings and improved user adoption justified the migration

## Scale & Performance Metrics

### Data Volume
- **3TB/day** ingestion across 1,000+ source tables
- **150TB** total BigQuery storage with 90-day retention
- **5 million** events/second peak streaming throughput via Pub/Sub
- **2,000+ tables** in BigQuery across raw, curated, and analytics datasets

### Performance Improvements
- **10x faster** data processing (24 hours → 2.4 hours for daily batch jobs)
- **Sub-second queries** on 10TB+ tables via partitioning and clustering
- **99.9% pipeline uptime** with automated failure recovery and alerting
- **Real-time analytics** with <5 minute latency from source to dashboard

### Cost Optimization
- **$200K annual savings** ($700K → $500K total platform cost)
- **40% BigQuery cost reduction** via partitioning and clustering strategies
- **70K annual savings** from Looker to Tableau migration
- **30% compute savings** via Dataflow autoscaling and spot instances

### Business Impact
- **Real-time inventory** visibility reduced stockouts by 25%
- **ML recommendation engine** increased conversion rate by 15%
- **Customer 360 views** enabled personalized marketing campaigns
- **Self-service analytics** for 500+ business users

## Governance & Security Implementation

### Access Control Architecture
- **IAM-based RBAC**: Defined data engineer, analyst, scientist, and admin roles
- **Dataset-level permissions**: Separate raw, curated, and analytics datasets with different access levels
- **Column-level security**: Masked PII columns (email, phone, address) using BigQuery policy tags
- **Row-level security**: Filtered data by business unit and geography using authorized views

### Data Lineage & Catalog
- **Data Catalog**: Automated metadata discovery and tagging for 2,000+ tables
- **Lineage tracking**: End-to-end lineage from source systems to BI dashboards
- **Business glossary**: Centralized definitions for 500+ business terms
- **Impact analysis**: Identified downstream dependencies before schema changes

### Compliance Framework
- **PII Detection**: Automated DLP API scanning for sensitive data
- **Encryption**: At-rest (Google-managed keys) and in-transit (TLS 1.3) encryption
- **Audit logging**: Complete audit trail for BigQuery queries and data access
- **Data retention**: Automated partition expiration for GDPR compliance

### Data Quality Framework
- **Great Expectations**: Automated data quality validation in Dataflow pipelines
- **Anomaly detection**: ML-based anomaly detection for data drift monitoring
- **SLA monitoring**: Automated alerting for pipeline failures and data freshness
- **Data profiling**: Automated profiling for schema drift and data quality metrics

## CI/CD & Infrastructure as Code

### Deployment Architecture
- **Terraform**: Infrastructure provisioning for BigQuery datasets, GCS buckets, Dataflow jobs
- **Cloud Build**: CI/CD pipelines for Dataflow template deployment
- **Cloud Source Repositories**: Git-based version control for SQL, Python, and Terraform code
- **Artifact Registry**: Container image management for Dataflow and Dataproc jobs

### Testing Strategy
- **Unit tests**: Python unit tests for Dataflow transformations (90% code coverage)
- **Integration tests**: End-to-end pipeline validation in staging environment
- **Data quality tests**: Great Expectations validation in CI/CD pipeline
- **Performance tests**: Query performance benchmarks for BigQuery optimization

### Deployment Pipeline
1. **Dev environment**: Developer testing with sample datasets
2. **Staging environment**: Integration testing with production-like data
3. **Production deployment**: Blue-green deployment with automated rollback
4. **Monitoring**: Automated alerting for pipeline failures and performance degradation

## Results & Business Impact

### Quantifiable Outcomes
- **$200K annual cost savings** from $700K to $500K total platform cost
- **10x faster** data processing (24 hours → 2.4 hours)
- **70% query cost reduction** via partitioning and clustering
- **99.9% uptime** SLA with automated failure recovery
- **Real-time analytics** with <5 minute latency

### Business Enablement
- **500+ business users** enabled with self-service analytics
- **25% reduction** in inventory stockouts via real-time visibility
- **15% increase** in conversion rate via ML recommendation engine
- **Personalized marketing** campaigns with customer 360 views
- **Faster decision-making** with real-time dashboards

### Technical Achievements
- **3TB/day** data processing at scale
- **2,000+ tables** migrated from legacy systems
- **Unified platform** consolidating data lake, warehouse, and mart
- **Enterprise-grade governance** with IAM and Data Catalog
- **Automated CI/CD** with Terraform and Cloud Build

## Architectural Tradeoffs Considered

### Multi-Cloud vs Single-Cloud
**Considered**: Hybrid architecture with AWS S3 + GCP BigQuery

**Decision**: Single-cloud GCP architecture

**Rationale**: Simplified operations, lower data egress costs, better integration, but accepted vendor lock-in risk

### Batch vs Streaming Architecture
**Considered**: Pure streaming architecture with Dataflow + Pub/Sub

**Decision**: Hybrid batch + streaming architecture

**Rationale**: 80% of workloads were batch-friendly, streaming added complexity and cost for limited use cases

### Snowflake vs BigQuery
**Considered**: Snowflake for multi-cloud portability

**Decision**: BigQuery for GCP-native integration

**Rationale**: 40% lower TCO and superior GCP integration outweighed multi-cloud flexibility

## Technologies Used

**Platform**: Google Cloud Platform (GCP)

**Data Warehouse**: BigQuery (partitioned, clustered tables)

**Ingestion**: Pub/Sub, Cloud Functions, Dataflow, Cloud Data Fusion

**Processing**: Dataflow (Apache Beam), Dataproc (Apache Spark)

**Storage**: Google Cloud Storage (GCS), BigQuery

**Orchestration**: Cloud Composer (managed Airflow)

**ML Platform**: Vertex AI, BigQuery ML

**BI Tools**: Tableau, Looker (legacy)

**Governance**: Data Catalog, IAM, DLP API, Cloud Audit Logs

**IaC**: Terraform, Cloud Build, Cloud Source Repositories

**Monitoring**: Cloud Monitoring, Cloud Logging, BigQuery audit logs

**Data Quality**: Great Expectations, custom anomaly detection
