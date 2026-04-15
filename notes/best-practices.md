# 🏆 Terraform Best Practices

Building infrastructure with Terraform is easy, but maintaining it requires following industry best practices.

## 1. Modularization
Don't put everything in one `main.tf`. Break your code into modules (VPC module, EC2 module, DB module). This makes your code reusable and easier to debug.

## 2. Remote State
**Never** store your `terraform.tfstate` in Git. Use a remote backend like AWS S3 with DynamoDB locking. This ensures:
*   Security (State can contain passwords).
*   Collaboration (Team members share the same state).
*   Reliability (State is backed up).

## 3. Version Pinning
Always pin your provider and Terraform versions. This prevents breaking changes from being introduced during a `terraform init`.
```hcl
required_providers {
  aws = {
    source  = "hashicorp/aws"
    version = "~> 5.0" # Pinning to version 5.x
  }
}
```

## 4. Use Variables, Not Hard-Coded Values
Avoid hard-coding IDs (like AMI IDs or VPC IDs). Use variables or Data Sources to keep the code flexible and portable across environments (Dev, Staging, Prod).

## 5. Security - Secret Management
Never put AWS access keys or secret keys directly in `.tf` files.
*   Use environment variables.
*   Use AWS IAM Roles (if running on EC2).
*   Use secret managers like HashiCorp Vault or AWS Secrets Manager.

## 6. Review Plans
Always review the output of `terraform plan` before applying. Check for unexpected "Destroy" actions.

## 7. Tags
Tag everything! Use consistent tagging for cost tracking and resource organization.
```hcl
tags = {
  Environment = "Production"
  Owner       = "Priyanshu"
  App         = "WebPortal"
}
```
