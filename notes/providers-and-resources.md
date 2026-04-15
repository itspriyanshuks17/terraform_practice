# 🔌 Providers and Resources

Providers and Resources are the building blocks of Terraform.

## Providers
A Provider is a plugin that Terraform uses to translate HCL (HashiCorp Configuration Language) into API calls for a specific platform (AWS, Azure, Google Cloud, Docker, Kubernetes, etc.).

### Configuration
```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}
```

## Resources
Resources are the most important element in the Terraform language. Each resource block describes one or more infrastructure objects.

### Syntax
```hcl
resource "provider_type" "name" {
  attribute = value
}
```

### Resource Lifecycle
Terraform manages the lifecycle of a resource through three main stages:
1.  **Creation**: If the resource doesn't exist in state.
2.  **Update**: If an attribute changes but doesn't require replacement.
3.  **Replacement (Destroy/Create)**: If a change requires the resource to be rebuilt (e.g., changing the AMI of an EC2).

## Data Sources
Data sources allow data to be fetched or computed for use elsewhere in Terraform configuration.
```hcl
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
}
```
Using data sources ensures your infrastructure stays dynamic (e.g., always using the latest AMI).
