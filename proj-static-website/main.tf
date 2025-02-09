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

resource "aws_s3_bucket" "mywebapp_bucket_1" {
    bucket = "mywebapp-bucket-123fcde"
    tags = {
        Name = "demo-aws-s3-bucket"
    }
}

resource "aws_s3_bucket_public_access_block" "mywebapp_bucket_public_access_block" {
    bucket = aws_s3_bucket.mywebapp_bucket_1.id

    block_public_acls = false
    block_public_policy = false
    ignore_public_acls = false
    restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "mywebapp_bucket_policy" {
    bucket = aws_s3_bucket.mywebapp_bucket_1.id

    #jsonencode: converts the data structure into json format
    policy = jsonencode({
        Version = "2012-10-17"
        Statement = [
            {
                Effect = "Allow",
                Principal = "*",
                Action = "s3:GetObject",
                Resource = "${aws_s3_bucket.mywebapp_bucket_1.arn}/*"
            }
        ]
    })
}


resource "aws_s3_bucket_website_configuration" "mywebapp" {
  bucket = aws_s3_bucket.mywebapp_bucket_1.id

  index_document {
    suffix = "index.html"
  }
}


resource "aws_s3_object" "index_html" {
    bucket = aws_s3_bucket.mywebapp_bucket_1.bucket
    source = "./index.html"
    key = "index.html"
    content_type = "text/html"
}


resource "aws_s3_object" "styles_css" {
    bucket = aws_s3_bucket.mywebapp_bucket_1.bucket
    source = "./styles.css"
    key = "styles.css"
    content_type = "text/css"
}


output "ame" {
    value = aws_s3_bucket_website_configuration.mywebapp.website_endpoint
}
