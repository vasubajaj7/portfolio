---
title: "Databrics Asset Bundles"
pubDate: "2026-02-25"
description: "A quick introduction to Databricks Asset Bundles aka DABs"
author: "Vasu Bajaj"
category: "Databricks"
tags: ["new feature", "introduction"]
image: "https://docs.databricks.com/aws/en/assets/images/bundles-cicd-53be5f4860e8ebcedc2702f870290cda.png"
---

# Introduction

Databricks Asset Bundles are a tool to facilitate the adoption of software engineering best practices, including source control, code review, testing, and continuous integration and delivery (CI/CD), for your data and AI projects. 

Bundles provide a way to include metadata alongside your project's source files and make it possible to describe Databricks resources such as jobs and pipelines as source files. Ultimately a bundle is an end-to-end definition of a project, including how the project should be structured, tested, and deployed. This makes it easier to collaborate on projects during active development.

Your bundle project's collection of source files and metadata is deployed as a single bundle to your target environment. A bundle includes the following parts:

- Required cloud infrastructure and workspace configurations
- Source files, such as notebooks and Python files, that include the business logic
- Definitions and settings for Databricks resources, such as Lakeflow Jobs, Lakeflow Spark Declarative Pipelines, Dashboards, Model Serving endpoints, MLflow Experiments, and MLflow registered models
- Unit tests and integration tests

## Why Do We Use It?

Databricks Assets Bundles are an infrastructure-as-code (IaC) approach to managing your Databricks projects. Use them when you want to manage complex projects where multiple contributors and automation are essential, and continuous integration and deployment (CI/CD) are a requirement. Since bundles are defined and managed through YAML templates and files you create and maintain alongside source code, they map well to scenarios where IaC is an appropriate approach.

Some ideal scenarios for bundles include:

- Develop data, analytics, and ML projects in a team-based environment. Bundles can help you organize and manage various source files efficiently. This ensures smooth collaboration and streamlined processes.
- Iterate on ML problems faster. Manage ML pipeline resources (such as training and batch inference jobs) by using ML projects that follow production best practices from the beginning.
- Set organizational standards for new projects by authoring custom bundle templates that include default permissions, service principals, and CI/CD configurations.
- Regulatory compliance: In industries where regulatory compliance is a significant concern, bundles can help maintain a versioned history of code and infrastructure work. This assists in governance and ensures that necessary compliance standards are met.


## How do bundles work?

Bundle metadata is defined using YAML files that specify the artifacts, resources, and configuration of a Databricks project. The Databricks CLI can then be used to validate, deploy, and run bundles using these bundle YAML files. You can run bundle projects from IDEs, terminals, or within Databricks directly.

Bundles can be created manually or based on a template. The Databricks CLI provides default templates for simple use cases, but for more specific or complex jobs, you can create custom bundle templates to implement your team's best practices and keep common configurations consistent.
