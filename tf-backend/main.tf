terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Configure the S3 Backend
  backend "s3" {
    bucket = "demo-aws-s3-bucket-3097d6ce8d0c9ed7"
    key    = "backend.tfstate"
    region = "ap-south-1"
  }
}  

# Configure the AWS Provider
provider "aws" {
  region = "ap-south-1"
}

#Creating EC2 instance
resource "aws_instance" "main" {
  ami           = "ami-05fa46471b02db0ce"
  instance_type = "t3.micro"
  tags = {
    Name = "main"
  }
}
