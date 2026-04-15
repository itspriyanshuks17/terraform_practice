# 🛠️ Variables and Outputs in Terraform

Variables allow you to customize configurations without heart-coding values, making your configurations reusable. Outputs allow you to extract information about your infrastructure.

## Input Variables
Input variables serve as parameters for a Terraform module.

### Defining a Variable
```hcl
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}
```

### Providing Values
You can provide values in several ways:
1.  **Command line**: `terraform apply -var="instance_type=t2.small"`
2.  **Files**: Create a `terraform.tfvars` file.
3.  **Environment Variables**: `export TF_VAR_instance_type=t2.large`

## Local Values
Locals are like temporary variables inside a module. They help avoid repeating the same expressions.
```hcl
locals {
  common_tags = {
    Project = "Automation"
    Owner   = "Priyanshu"
  }
}

resource "aws_instance" "app" {
  tags = local.common_tags
}
```

## Output Values
Outputs are like return values. They highlight important data after an `apply`.
```hcl
output "public_ip" {
  value = aws_instance.app.public_ip
}
```

### Why use Outputs?
*   To get the IP of a load balancer or EC2 instance.
*   To pass data between different sets of Terraform configurations (Remote State Data Sources).
*   To print debug information.
