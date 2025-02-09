### **Terraform Practice Repository**  
📌 *A collection of Terraform scripts to automate infrastructure provisioning on AWS.*

## 🚀 **Overview**  
This repository contains Terraform configurations for creating and managing AWS infrastructure, including:  
- S3 Buckets for static website hosting  
- IAM policies and permissions  
- EC2 instances  
- Other AWS resources  

## 📁 **Project Structure**  
```
terraform_practice/
│── aws-ec2                   # Terraform configuration file for EC2
│── aws-s3                    # Terraform configuration file for S3
│── proj-static-website       # Basic static website hosting using S3
│── tf-backend                # Terraform configuration file for storing Terraform state
│── providers.tf              # For global configuration
│── README.md                 # Project documentation

```

## 📌 **Prerequisites**  
Ensure you have the following installed:  
✅ [Terraform](https://developer.hashicorp.com/terraform/downloads) (v1.3+)  
✅ AWS CLI configured (`aws configure`)  
✅ IAM user with necessary permissions  

## 🔧 **Setup & Usage**  
### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/itspriyanshuks17/terraform_practice.git
cd terraform_practice
cd <path-to-any-config-file-for-creating-resources>
```

### **2️⃣ Initialize Terraform**  
```sh
terraform init
```

### **3️⃣ Preview the Infrastructure Changes**  
```sh
terraform plan
```

### **4️⃣ Apply the Terraform Configuration**  
```sh
terraform apply -auto-approve
```

### **5️⃣ Destroy the Infrastructure (Optional)**  
```sh
terraform destroy -auto-approve
```

## 🎯 **Key Features**  
✅ **S3 Website Hosting** – Deploys a static website using an AWS S3 bucket.  
✅ **Public Access Configuration** – Manages bucket policies for public object access.  
✅ **Infrastructure as Code (IaC)** – Automate AWS resource provisioning.  

## 📜 **License**  
This project is not licensed.  

---
📖 **Maintained by:** Priyanshu Kumar Sharma
