window.TERRAFORM_CATEGORIES = [
  { id: "foundation", label: "Foundation", kicker: "Track 01" },
  { id: "language", label: "HCL & Building Blocks", kicker: "Track 02" },
  { id: "state", label: "State & Collaboration", kicker: "Track 03" },
  { id: "advanced", label: "Advanced Terraform", kicker: "Track 04" },
  { id: "projects", label: "Live DevOps Projects", kicker: "Track 05" }
];

window.TERRAFORM_NOTES = [
  {
    id: "intro",
    num: "01",
    title: "What is Terraform?",
    category: "foundation",
    description: "Terraform is HashiCorp's Infrastructure as Code tool for defining, provisioning, and managing cloud resources from declarative configuration.",
    tags: ["IaC", "HashiCorp", "DevOps"],
    search: "terraform infrastructure as code iac declarative hashicorp providers cloud aws",
    sections: [
      { type: "lead", text: "Terraform lets you describe infrastructure in configuration files and then asks cloud APIs to create, update, or destroy resources until reality matches your desired state." },
      {
        type: "grid",
        items: [
          { title: "Declarative", text: "You describe what should exist. Terraform decides the ordered API operations." },
          { title: "Cloud-agnostic", text: "The same workflow works across AWS, Azure, GCP, Kubernetes, GitHub, and many more providers." },
          { title: "Idempotent", text: "Running the same configuration again should not duplicate resources." },
          { title: "State-aware", text: "Terraform tracks managed infrastructure in state so it can plan future changes accurately." }
        ]
      },
      { type: "callout", tone: "success", html: "<strong>Why use it?</strong> Version-control infrastructure, review changes before applying, reuse environments, and automate provisioning through CI/CD." }
    ]
  },
  {
    id: "iac",
    num: "02",
    title: "Infrastructure as Code Concepts",
    category: "foundation",
    description: "IaC basics: desired state, current state, drift, declarative workflows, and why Terraform is different from manual console work.",
    tags: ["IaC", "Drift", "Workflow"],
    search: "iac infrastructure as code desired current state drift declarative imperative console automation",
    sections: [
      { type: "lead", text: "Infrastructure as Code turns networking, compute, storage, and security setup into repeatable files that can be reviewed and shared." },
      {
        type: "table",
        headers: ["Concept", "Meaning"],
        rows: [
          ["IaC", "Managing infrastructure through machine-readable definition files instead of manual steps."],
          ["Declarative", "Specify the final desired state; the tool works out how to reach it."],
          ["Imperative", "Specify each step explicitly, such as shell scripts or some configuration tools."],
          ["Desired State", "What your Terraform files say should exist."],
          ["Current State", "What exists in the cloud and what Terraform tracks in state."],
          ["Drift", "When real infrastructure changes outside Terraform and no longer matches code."]
        ]
      },
      { type: "callout", tone: "warn", html: "<strong>Exam and interview angle:</strong> Terraform is declarative, state-based, and provider-driven. That combination is the core mental model." }
    ]
  },
  {
    id: "install",
    num: "03",
    title: "Installation & AWS Setup",
    category: "foundation",
    description: "Install Terraform on Ubuntu, RHEL, macOS, or Windows, configure AWS credentials, and verify the CLI.",
    tags: ["CLI", "AWS", "Setup", "Windows", "macOS", "Linux"],
    search: "terraform install setup aws credentials configure environment variables cli ubuntu debian rhel centos amazon linux fedora macos homebrew windows chocolatey winget binary",
    sections: [
      { type: "lead", text: "Terraform ships as a single binary for every major OS. Pick your platform below, then configure AWS credentials so the provider can reach your account." },
      {
        type: "table",
        headers: ["OS", "Recommended Method", "Package Manager"],
        rows: [
          ["Ubuntu / Debian", "HashiCorp APT repo", "apt"],
          ["RHEL / CentOS / Amazon Linux", "HashiCorp YUM repo", "yum / dnf"],
          ["macOS", "Homebrew tap", "brew"],
          ["Windows", "Chocolatey or Winget", "choco / winget"],
          ["Any Linux", "Manual binary download", "zip / unzip"]
        ]
      },
      {
        type: "code",
        title: "Ubuntu / Debian",
        code: `wget -O- https://apt.releases.hashicorp.com/gpg | gpg --dearmor | \\
  sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \\
  https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \\
  sudo tee /etc/apt/sources.list.d/hashicorp.list

sudo apt update && sudo apt install -y terraform
terraform version`
      },
      {
        type: "code",
        title: "RHEL / CentOS / Fedora / Amazon Linux",
        code: `# Add HashiCorp YUM/DNF repo
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo \\
  https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo

sudo yum install -y terraform

# Fedora (dnf)
sudo dnf install -y terraform

terraform version`
      },
      {
        type: "code",
        title: "macOS — Homebrew",
        code: `# Install Homebrew first if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Tap HashiCorp and install Terraform
brew tap hashicorp/tap
brew install hashicorp/tap/terraform

# Upgrade later
brew upgrade hashicorp/tap/terraform

terraform version`
      },
      {
        type: "code",
        title: "Windows — Chocolatey (recommended)",
        code: `# Run PowerShell as Administrator
choco install terraform

# Upgrade later
choco upgrade terraform

terraform version`
      },
      {
        type: "code",
        title: "Windows — Winget",
        code: `# PowerShell or Command Prompt
winget install --id Hashicorp.Terraform -e

terraform version`
      },
      {
        type: "code",
        title: "Windows — Manual ZIP",
        code: `# 1. Download ZIP from: https://developer.hashicorp.com/terraform/downloads
# 2. Extract terraform.exe
# 3. Move to a folder already in PATH (run in PowerShell Admin)
Move-Item .\\terraform.exe C:\\Windows\\System32\\

terraform version`
      },
      {
        type: "code",
        title: "Any Linux — Manual Binary",
        code: `# Replace VERSION with the latest (e.g. 1.8.5)
TF_VERSION="1.8.5"
wget "https://releases.hashicorp.com/terraform/\${TF_VERSION}/terraform_\${TF_VERSION}_linux_amd64.zip"
unzip "terraform_\${TF_VERSION}_linux_amd64.zip"
sudo mv terraform /usr/local/bin/

terraform version`
      },
      {
        type: "code",
        title: "AWS credentials — all platforms",
        code: `# Option 1: interactive wizard (all OS)
aws configure

# Option 2: environment variables — Linux / macOS
export AWS_ACCESS_KEY_ID="your-key"
export AWS_SECRET_ACCESS_KEY="your-secret"
export AWS_DEFAULT_REGION="ap-south-1"

# Option 2: environment variables — Windows PowerShell
$env:AWS_ACCESS_KEY_ID     = "your-key"
$env:AWS_SECRET_ACCESS_KEY = "your-secret"
$env:AWS_DEFAULT_REGION    = "ap-south-1"`
      },
      { type: "callout", tone: "warn", html: "For real projects, prefer short-lived credentials or IAM roles. <strong>Never commit access keys to Git.</strong>" }
    ]
  },
  {
    id: "hcl",
    num: "04",
    title: "HCL Syntax",
    category: "language",
    description: "Understand Terraform's HCL blocks, arguments, expressions, references, maps, comments, and interpolation.",
    tags: ["HCL", "Syntax", "Blocks"],
    search: "hcl syntax terraform block argument expression interpolation comments maps resource variable",
    sections: [
      { type: "lead", text: "HCL is the human-readable configuration language used by Terraform. A file is made from blocks, and blocks contain arguments and nested blocks." },
      {
        type: "code",
        title: "Basic resource block",
        code: `resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "MyServer"
    Env  = "dev"
  }
}`
      },
      {
        type: "table",
        headers: ["Part", "Example", "Purpose"],
        rows: [
          ["Block", "resource \"aws_instance\" \"web\" {}", "Top-level or nested configuration unit."],
          ["Argument", "instance_type = \"t2.micro\"", "A key-value setting inside a block."],
          ["Reference", "aws_instance.web.id", "Uses an attribute from another resource."],
          ["Variable", "var.region", "Reads an input value."],
          ["Interpolation", "\"server-${var.env}\"", "Builds a string from an expression."]
        ]
      }
    ]
  },
  {
    id: "providers",
    num: "05",
    title: "Providers",
    category: "language",
    description: "Providers are plugins that translate Terraform configuration into API calls for AWS, Azure, GCP, Kubernetes, and more.",
    tags: ["Provider", "AWS", "Plugin"],
    search: "providers provider plugin aws required providers version init registry hashicorp",
    sections: [
      { type: "lead", text: "A provider is the bridge between Terraform and a platform API. The AWS provider knows how to create EC2 instances, S3 buckets, VPCs, IAM resources, and more." },
      {
        type: "code",
        title: "AWS provider configuration",
        code: `terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 1.3"
}

provider "aws" {
  region = "ap-south-1"
}`
      },
      { type: "callout", tone: "success", html: "<code>terraform init</code> reads this provider block and downloads the provider plugin into the working directory." }
    ]
  },
  {
    id: "resources",
    num: "06",
    title: "Resources",
    category: "language",
    description: "Resources are the infrastructure objects Terraform manages: EC2 instances, S3 buckets, security groups, VPCs, and more.",
    tags: ["Resources", "EC2", "S3"],
    search: "resources aws instance s3 bucket security group dependency graph resource address",
    sections: [
      { type: "lead", text: "Resources are the heart of Terraform. Each resource block maps to one or more real objects in the provider." },
      {
        type: "code",
        title: "Common AWS resources",
        code: `resource "aws_instance" "app" {
  ami           = "ami-05fa46471b02db0ce"
  instance_type = "t3.micro"
  tags = {
    Name = "app-server"
  }
}

resource "aws_s3_bucket" "assets" {
  bucket = "terraform-demo-assets"
}

resource "aws_security_group" "web" {
  name = "allow-http"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`
      },
      { type: "callout", tone: "success", html: "Reference another resource with <code>resource_type.resource_name.attribute</code>, such as <code>aws_vpc.main.id</code>. Terraform uses those references to build a dependency graph." }
    ]
  },
  {
    id: "variables",
    num: "07",
    title: "Variables, Locals & Outputs",
    category: "language",
    description: "Parameterize Terraform with variables, reduce repetition with locals, and expose useful values with outputs.",
    tags: ["Variables", "Outputs", "Locals"],
    search: "variables outputs locals tfvars var file parameterize terraform values",
    sections: [
      { type: "lead", text: "Variables make the same Terraform code reusable across environments. Locals centralize repeated expressions. Outputs print or expose values after apply." },
      {
        type: "code",
        title: "variables.tf",
        code: `variable "instance_type" {
  type        = string
  default     = "t3.micro"
  description = "EC2 instance type"
}

variable "environment" {
  type = string
}

variable "allowed_ports" {
  type    = list(number)
  default = [22, 80, 443]
}`
      },
      {
        type: "code",
        title: "locals and outputs",
        code: `locals {
  common_tags = {
    Project     = "TerraformPractice"
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}

output "instance_public_ip" {
  value       = aws_instance.main.public_ip
  description = "Public IP of the EC2 instance"
}`
      },
      {
        type: "code",
        title: "Ways to pass values",
        code: `terraform apply -var="environment=dev"
terraform apply -var-file="prod.tfvars"
export TF_VAR_environment=staging`
      }
    ]
  },
  {
    id: "data-sources",
    num: "08",
    title: "Data Sources",
    category: "language",
    description: "Query existing cloud objects or external data without creating or owning those objects in Terraform.",
    tags: ["Data", "AMI", "Lookup"],
    search: "data sources aws ami existing infrastructure lookup terraform data block",
    sections: [
      { type: "lead", text: "Data sources read information. Use them when you want to reference something that already exists, such as the latest AMI, an existing VPC, or an account identity." },
      {
        type: "code",
        title: "Fetch latest Ubuntu AMI",
        code: `data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-22.04-amd64-server-*"]
  }
}

resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
}`
      },
      { type: "callout", tone: "warn", html: "A data source reads; a resource manages. Mixing those up is a common beginner bug." }
    ]
  },
  {
    id: "state",
    num: "09",
    title: "State Management",
    category: "state",
    description: "Terraform state maps configuration to real infrastructure and stores resource IDs, attributes, dependencies, and metadata.",
    tags: ["State", "tfstate", "Import"],
    search: "state terraform tfstate backup state commands import mv rm show list",
    sections: [
      { type: "lead", text: "State is Terraform's memory. Without it, Terraform would not know which real EC2 instance belongs to which resource block." },
      {
        type: "grid",
        items: [
          { title: "Mapping", text: "Connects resource addresses in code to IDs in the cloud." },
          { title: "Metadata", text: "Stores dependency and provider information used during planning." },
          { title: "Performance", text: "Avoids querying every remote object every time." },
          { title: "Risk", text: "May contain sensitive attributes, so treat state as private." }
        ]
      },
      {
        type: "code",
        title: "State commands",
        code: `terraform state list
terraform state show aws_instance.main
terraform state rm aws_instance.main
terraform state mv aws_instance.old aws_instance.new
terraform import aws_instance.main i-1234567890abcdef0`
      },
      { type: "callout", tone: "warn", html: "Do not manually edit <code>terraform.tfstate</code>. Use <code>terraform state</code> commands when state needs surgery." }
    ]
  },
  {
    id: "remote-state",
    num: "10",
    title: "Remote State with S3 Backend",
    category: "state",
    description: "Move state from local disk to S3 so teams share one source of truth and avoid losing state files.",
    tags: ["S3", "Backend", "Team"],
    search: "remote state s3 backend dynamodb locking state collaboration terraform backend",
    sections: [
      { type: "lead", text: "Local state is fine for practice, but teams need a shared backend. S3 is a common backend for AWS projects, often paired with locking support." },
      {
        type: "code",
        title: "Backend configuration",
        code: `terraform {
  backend "s3" {
    bucket = "demo-aws-s3-bucket-3097d6ce8d0c9ed7"
    key    = "backend.tfstate"
    region = "ap-south-1"
  }
}`
      },
      {
        type: "code",
        title: "State bucket with versioning",
        code: `resource "aws_s3_bucket" "tf_state" {
  bucket = "my-terraform-state-bucket"
}

resource "aws_s3_bucket_versioning" "tf_state" {
  bucket = aws_s3_bucket.tf_state.id

  versioning_configuration {
    status = "Enabled"
  }
}`
      },
      { type: "callout", tone: "success", html: "Create the backend bucket before configuring the backend block, then run <code>terraform init</code> to migrate state." }
    ]
  },
  {
    id: "workspaces",
    num: "11",
    title: "Workspaces",
    category: "state",
    description: "Use workspaces to maintain separate state files for environments from the same configuration.",
    tags: ["Workspace", "Environments", "State"],
    search: "workspaces workspace dev staging prod separate state terraform",
    sections: [
      { type: "lead", text: "Workspaces let one configuration have multiple named state files. This is useful for learning and simple environment separation." },
      {
        type: "code",
        title: "Workspace workflow",
        code: `terraform workspace list
terraform workspace new staging
terraform workspace select prod
terraform workspace show`
      },
      {
        type: "code",
        title: "Use workspace in tags",
        code: `resource "aws_instance" "app" {
  ami           = "ami-05fa46471b02db0ce"
  instance_type = "t3.micro"

  tags = {
    Environment = terraform.workspace
  }
}`
      },
      { type: "callout", tone: "warn", html: "For serious production setups, separate directories, accounts, or pipelines can be clearer than relying only on workspaces." }
    ]
  },
  {
    id: "modules",
    num: "12",
    title: "Modules",
    category: "advanced",
    description: "Create reusable Terraform building blocks for VPCs, EC2 instances, security groups, and multi-environment deployments.",
    tags: ["Modules", "Reuse", "DRY"],
    search: "modules module source registry reusable vpc ec2 dry terraform",
    sections: [
      { type: "lead", text: "A module is a folder of Terraform configuration. The root module can call child modules with inputs and read their outputs." },
      {
        type: "code",
        title: "Module structure",
        code: `modules/
  ec2/
    main.tf
    variables.tf
    outputs.tf
  vpc/
    main.tf
    variables.tf
    outputs.tf`
      },
      {
        type: "code",
        title: "Calling a local module",
        code: `module "web_server" {
  source        = "./modules/ec2"
  instance_type = "t3.micro"
  subnet_id     = module.network.public_subnet_id
  environment   = var.environment
}`
      },
      { type: "callout", tone: "success", html: "Good modules hide internal resource complexity but keep important inputs and outputs explicit." }
    ]
  },
  {
    id: "lifecycle",
    num: "13",
    title: "Lifecycle Rules",
    category: "advanced",
    description: "Control how Terraform replaces, protects, or ignores changes on critical resources.",
    tags: ["Lifecycle", "Safety", "Drift"],
    search: "lifecycle create before destroy prevent destroy ignore changes terraform",
    sections: [
      { type: "lead", text: "Lifecycle rules tune Terraform's default behavior for replacement, protection, and drift handling." },
      {
        type: "code",
        title: "Lifecycle block",
        code: `resource "aws_instance" "app" {
  ami           = "ami-12345"
  instance_type = "t3.micro"

  lifecycle {
    create_before_destroy = true
    prevent_destroy       = true
    ignore_changes        = [tags]
  }
}`
      },
      {
        type: "table",
        headers: ["Rule", "Use case"],
        rows: [
          ["create_before_destroy", "Replace resources with less downtime."],
          ["prevent_destroy", "Protect critical resources such as databases or state buckets."],
          ["ignore_changes", "Allow selected attributes to be changed outside Terraform."]
        ]
      }
    ]
  },
  {
    id: "cli",
    num: "14",
    title: "CLI Workflow",
    category: "advanced",
    description: "The standard Terraform command cycle: init, fmt, validate, plan, apply, output, and destroy.",
    tags: ["CLI", "Plan", "Apply"],
    search: "cli workflow init fmt validate plan apply destroy output graph force unlock",
    sections: [
      { type: "lead", text: "Terraform work is normally a review loop: initialize, format, validate, plan, apply, inspect outputs, and destroy when the lab is finished." },
      {
        type: "flow",
        steps: [
          { title: "terraform init", text: "Download providers and initialize the backend." },
          { title: "terraform fmt", text: "Format HCL consistently." },
          { title: "terraform validate", text: "Catch syntax and configuration problems." },
          { title: "terraform plan", text: "Preview create, update, and destroy actions." },
          { title: "terraform apply", text: "Execute the reviewed plan." },
          { title: "terraform destroy", text: "Clean up managed infrastructure after practice." }
        ]
      },
      {
        type: "code",
        title: "Useful commands",
        code: `terraform output
terraform show
terraform graph
terraform providers
terraform plan -out=tfplan
terraform apply tfplan
terraform force-unlock LOCK_ID`
      }
    ]
  },
  {
    id: "best-practices",
    num: "15",
    title: "Terraform Best Practices",
    category: "advanced",
    description: "Production-minded Terraform habits: remote state, provider version pinning, no secrets in code, tagging, modules, and plan review.",
    tags: ["Security", "Team", "Review"],
    search: "best practices remote state secrets version pinning tags modules plan review security",
    sections: [
      { type: "lead", text: "The difference between a lab and production Terraform is discipline: state safety, review, naming, secrets, and repeatable structure." },
      {
        type: "list",
        items: [
          "<strong>Review plans first.</strong> Do not apply blindly.",
          "<strong>Use remote state for teams.</strong> Keep shared state private and versioned.",
          "<strong>Do not commit state.</strong> Add state files to <code>.gitignore</code>.",
          "<strong>Never hardcode credentials.</strong> Use IAM roles, profiles, or environment variables.",
          "<strong>Pin provider versions.</strong> Avoid surprise breaking changes.",
          "<strong>Use modules when patterns repeat.</strong> Keep root modules readable.",
          "<strong>Tag resources consistently.</strong> Use locals for shared tags.",
          "<strong>Separate environments.</strong> Dev, staging, and prod should not fight over one state."
        ]
      }
    ]
  },
  {
    id: "project-ec2-s3",
    num: "P1",
    title: "Project 1: EC2 and S3 Basics",
    category: "projects",
    description: "Provision a basic EC2 instance and S3 bucket using providers, resources, random IDs, variables, and outputs.",
    tags: ["EC2", "S3", "Beginner"],
    search: "project ec2 s3 random id aws instance bucket beginner",
    sections: [
      { type: "lead", text: "This project introduces the AWS provider and the most common Terraform flow by creating compute and storage resources." },
      {
        type: "grid",
        items: [
          { title: "Folder", text: "aws-ec2 and aws-s3" },
          { title: "Services", text: "EC2 instance, S3 bucket, random provider" },
          { title: "Concepts", text: "Provider config, resource blocks, variables, outputs" },
          { title: "Cleanup", text: "Run terraform destroy when the lab is complete" }
        ]
      },
      {
        type: "code",
        title: "EC2 resource",
        code: `resource "aws_instance" "main" {
  ami           = "ami-05fa46471b02db0ce"
  instance_type = "t3.micro"

  tags = {
    Name = "main"
  }
}`
      },
      {
        type: "code",
        title: "S3 bucket with random suffix",
        code: `resource "random_id" "random_id" {
  byte_length = 8
}

resource "aws_s3_bucket" "demo-aws_s3_bucket" {
  bucket = "demo-aws-s3-bucket-\${random_id.random_id.hex}"
}`
      }
    ]
  },
  {
    id: "project-vpc-nginx",
    num: "P2",
    title: "Project 2: Custom VPC with Nginx",
    category: "projects",
    description: "Build a VPC, public/private subnets, route table, internet gateway, security group, and EC2 Nginx server.",
    tags: ["VPC", "Nginx", "Networking"],
    search: "project vpc nginx public subnet private subnet internet gateway route table security group ec2",
    sections: [
      { type: "lead", text: "This project connects Terraform concepts into a working AWS network and public web server." },
      {
        type: "code",
        title: "VPC and public route",
        code: `resource "aws_vpc" "myvpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "MyVPC"
  }
}

resource "aws_internet_gateway" "myigw" {
  vpc_id = aws_vpc.myvpc.id
}

resource "aws_route_table" "myrt" {
  vpc_id = aws_vpc.myvpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.myigw.id
  }
}`
      },
      {
        type: "code",
        title: "Nginx EC2 server",
        code: `resource "aws_instance" "nginxserver" {
  ami                         = "ami-05fa46471b02db0ce"
  instance_type               = "t3.micro"
  subnet_id                   = aws_subnet.public-subnet.id
  vpc_security_group_ids      = [aws_security_group.nginx-sg.id]
  associate_public_ip_address = true

  user_data = <<-EOF
    #!/bin/bash
    sudo yum update -y
    sudo yum install nginx -y
    sudo systemctl start nginx
  EOF
}`
      }
    ]
  },
  {
    id: "project-static-backend",
    num: "P3",
    title: "Project 3: Static Website and Backend",
    category: "projects",
    description: "Host a static site from S3 and configure an S3 backend so Terraform state is stored remotely.",
    tags: ["S3 Website", "Backend", "DevOps"],
    search: "project static website s3 backend remote state bucket policy public access object upload",
    sections: [
      { type: "lead", text: "This project combines static hosting with a more DevOps-ready state setup. The same pattern is useful when hosting this notes site from an S3 bucket." },
      {
        type: "code",
        title: "S3 static website resources",
        code: `resource "aws_s3_bucket_website_configuration" "mywebapp" {
  bucket = aws_s3_bucket.mywebapp_bucket_1.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_object" "index_html" {
  bucket       = aws_s3_bucket.mywebapp_bucket_1.bucket
  source       = "./index.html"
  key          = "index.html"
  content_type = "text/html"
}`
      },
      {
        type: "code",
        title: "Remote backend pattern",
        code: `terraform {
  backend "s3" {
    bucket = "demo-aws-s3-bucket-3097d6ce8d0c9ed7"
    key    = "backend.tfstate"
    region = "ap-south-1"
  }
}`
      },
      { type: "callout", tone: "warn", html: "When a bucket is public for static hosting, keep it separate from private state buckets. Website content and Terraform state need different security settings." }
    ]
  }
];

window.TERRAFORM_PROJECTS = [
  {
    id: "project-ec2-s3",
    title: "EC2 and S3 Basics",
    level: "Project 01 / Beginner",
    description: "Launch an EC2 instance and create an S3 bucket with a unique suffix. This anchors provider setup, resource blocks, variables, outputs, and destroy cleanup.",
    tags: ["aws-ec2", "aws-s3", "providers", "outputs"],
    paths: ["aws-ec2/main.tf", "aws-ec2/variables.tf", "aws-s3/main.tf"],
    note: "note.html?id=project-ec2-s3"
  },
  {
    id: "project-vpc-nginx",
    title: "Custom VPC with Nginx",
    level: "Project 02 / Intermediate",
    description: "Build a VPC, public and private subnets, route table, internet gateway, security group, and a public EC2 instance that installs Nginx through user data.",
    tags: ["vpc", "subnets", "route-table", "nginx"],
    paths: ["aws-vpc-ec2-nginx/vpc.tf", "aws-vpc-ec2-nginx/security_groups.tf", "aws-vpc-ec2-nginx/ec2.tf"],
    note: "note.html?id=project-vpc-nginx"
  },
  {
    id: "project-static-backend",
    title: "Static Website and Remote Backend",
    level: "Project 03 / DevOps",
    description: "Deploy a static website from S3 and move Terraform state into an S3 backend so the project is closer to a real team workflow.",
    tags: ["s3-website", "bucket-policy", "remote-state", "backend"],
    paths: ["proj-static-website/main.tf", "tf-backend/main.tf"],
    note: "note.html?id=project-static-backend"
  }
];
