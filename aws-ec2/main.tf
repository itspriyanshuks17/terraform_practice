terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}  

# Configure the AWS Provider
provider "aws" {
  region = var.region
}

resource "aws_instance" "main" {
  ami           = "ami-05fa46471b02db0ce"
  instance_type = "t3.micro"
  tags = {
    Name = "main"
  }
}
