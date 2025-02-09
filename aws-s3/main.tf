terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }

    random = {
        source  = "hashicorp/random"
        version = "~> 3.0"
    }
  }
}

provider "aws" {
    region="ap-south-1"
}

resource "random_id" "random_id" {
    byte_length = 8
}

#Creating S3 bucket
resource "aws_s3_bucket" "demo-aws_s3_bucket" {
    bucket = "demo-aws-s3-bucket-123fcd"
    tags = {
        Name = "demo-aws-s3-bucket"
    }
}

resource "aws_s3_bucket" "demo-aws_s3_bucket-1" {
    bucket = "demo-aws-s3-bucket-${random_id.random_id.hex}"
    tags = {
        Name = "demo-aws-s3-bucket"
    }
}

#Uploading objects on bucket
resource "aws_s3_object" "bucket-data" {
    bucket = aws_s3_bucket.demo-aws_s3_bucket.bucket
    source = "./myfile.txt"
    key = "mydata.txt"
}

output "ame" {
    value = random_id.random_id.hex
}
