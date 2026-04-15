# 🌍 Terraform Infrastructure as Code (IaC) Master Lab

📌 **A Comprehensive Practice Repository for Cloud Automation on AWS**

![Terraform](https://img.shields.io/badge/Terraform-1.3+-623CE4?style=for-the-badge&logo=terraform&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-Cloud-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![License](https://img.shields.io/badge/Status-Learning-brightgreen?style=for-the-badge)

---

## 🚀 Overview
Welcome to the **Terraform Practice Repository**! This project is a structured deep-dive into **Infrastructure as Code (IaC)**. It covers everything from basic resource provisioning to advanced network architectures and remote state management.

The goal is to master the art of defining, deploying, and managing cloud infrastructure using HashiCorp's HCL (HashiCorp Configuration Language).

---

## 📂 Project Architecture & Modules

Each directory in this repository represents a specific architectural pattern or service configuration.

| Module | Description | Key Resources |
| :--- | :--- | :--- |
| 🛠️ **`aws-ec2`** | Standard compute provisioning | EC2 Instances, Key Pairs |
| 🪣 **`aws-s3`** | Storage and Access Control | S3 Buckets, Public Access Blocks |
| 🌐 **`aws-vpc`** | Custom Networking Stack | VPC, Subnets, IGW, Route Tables |
| 🏗️ **`aws-vpc-ec2-nginx`** | Full-stack deployment | VPC + EC2 + Nginx (Automated) |
| 💻 **`proj-static-website`** | Cloud-native hosting | S3 Website, Random ID, S3 Objects |
| 🔒 **`tf-backend`** | State Management | S3 Remote Backend, State Configuration |

---

## 🧠 Core Terraform Concepts Covered

This repository serves as a hands-on guide to these fundamental concepts:

### 1. **Providers**
- Configuring the AWS provider (`ap-south-1`).
- Managing credentials and version constraints.

### 2. **Resources & Data Sources**
- **Resources**: Defining what you want to build (e.g., `aws_instance`).
- **Data Sources**: Querying existing AWS data (e.g., fetching AMIs).

### 3. **Variables & Outputs**
- **Variables**: Making configurations reusable and dynamic.
- **Outputs**: Displaying critical information after deployment (e.g., Public IP, DNS).

### 4. **State Management**
- **`terraform.tfstate`**: Understanding how Terraform tracks resources.
- **Remote Backends**: Storing state in S3 for collaboration and security.

### 5. **Dependency Management**
- Implicit vs. Explicit dependencies (using `depends_on`).
- Resource referencing (e.g., attaching a security group to an EC2).

---

## 💎 In-Depth: State Management

Terraform **State** is the "single source of truth" for your infrastructure. It maps your HCL code to real-world resources in AWS.

### 📝 Why is State Necessary?
1. **Mapping**: Terraform maps resource instances to your configuration.
2. **Metadata**: Tracks dependencies between resources that aren't apparent in code.
3. **Performance**: Caches resource attributes to avoid constant API calls to AWS.
4. **Syncing**: Ensures that what you see in your code is what exists in the cloud.

### 🏠 Local State vs. ☁️ Remote State
*   **Local State (`terraform.tfstate`)**: Stored on your machine. Good for solo learning, but risky for production (easy to lose or commit to Git by mistake).
*   **Remote State (S3)**: Stored in a cloud bucket. Essential for team collaboration, enabling multiple developers to work on the same infrastructure safely.

### 🔒 State Locking
When using a remote backend, **State Locking** (via DynamoDB) prevents two people from running `terraform apply` at the same time, which could corrupt the state file.

### 🛠️ Useful State Commands
| Command | Purpose |
| :--- | :--- |
| `terraform state list` | List all resources currently in the state file. |
| `terraform state show <resource>` | Show detailed attributes of a specific resource. |
| `terraform state rm <resource>` | Remove a resource from state without destroying it in AWS. |
| `terraform state pull` | Download the current state from the remote backend. |

---

## 🔧 Installation & Getting Started

### 📋 Prerequisites
- [Terraform CLI](https://developer.hashicorp.com/terraform/downloads) installed (v1.3 or higher).
- [AWS CLI](https://aws.amazon.com/cli/) configured with valid credentials.
- An AWS Account with IAM permissions for EC2, S3, VPC, and IAM.

### 🛠️ The Standard Workflow
1. **Initialize**: Prepare the working directory.
   ```bash
   terraform init
   ```
2. **Validate**: Check for syntax errors.
   ```bash
   terraform validate
   ```
3. **Plan**: Preview the execution strategy.
   ```bash
   terraform plan
   ```
4. **Apply**: Provision the infrastructure.
   ```bash
   terraform apply -auto-approve
   ```
5. **Destroy**: Clean up all resources.
   ```bash
   terraform destroy -auto-approve
   ```

---

## 🌟 Technical Highlights

### ⚡ Automated Nginx Deployment
In the `aws-vpc-ec2-nginx` module, we demonstrate how to use **User Data** scripts to automatically install and configure an Nginx web server upon instance launch.

### 🍱 Modular VPC Design
The `aws-vpc` module implements a clean network isolation strategy:
- Public and Private Subnets.
- Internet Gateway for public egress.
- Customized Route Tables for traffic routing.

### 🛡️ Secure State Storage
The `tf-backend` module showcases best practices by moving the state file from local storage to an **S3 Bucket**. This prevents local state loss and enables team environments.

---

## ⚠️ Troubleshooting Tips
- **Credential Issues**: Ensure `aws configure` is set up correctly. Use `aws sts get-caller-identity` to verify.
- **Region Conflicts**: Most configurations here use `ap-south-1`. Ensure your AMI IDs match your target region.
- **State Locks**: If using DynamoDB for locking, ensure you have the correct permissions.

---

## 📚 Documentation & Detailed Notes

For a deeper dive into specific topics, check out the dedicated notes in the `notes/` directory:
- 📦 **[State Management](notes/state-management.md)**: Logic behind `.tfstate` and remote backends.
- 🛠️ **[Variables & Outputs](notes/variables-and-outputs.md)**: How to parameterize your code.
- 🔌 **[Providers & Resources](notes/providers-and-resources.md)**: The core building blocks of HCL.
- 🏆 **[Best Practices](notes/best-practices.md)**: Industry standards for maintainable IaC.

---

## 🔗 Useful Links & Resources
- 🚀 **[Official Terraform Documentation](https://developer.hashicorp.com/terraform/docs)**
- 🔧 **[AWS Provider Registry](https://registry.terraform.io/providers/hashicorp/aws/latest)**: The official documentation for all AWS resources in Terraform.
- 📜 **[Terraform Best Practices Guide](https://www.terraform-best-practices.com/)**

---

## 📜 License
This repository is for educational purposes. Feel free to use the snippets for your own learning!

---
**Maintained with ❤️ by [Priyanshu Kumar Sharma](https://github.com/itspriyanshuks17)**  
*Turning code into infrastructure, one `apply` at a time.*
