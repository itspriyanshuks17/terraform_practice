window.TERRAFORM_CATEGORIES = [
  { id: "foundation", label: "Foundation", kicker: "Track 01" },
  { id: "language", label: "HCL & Building Blocks", kicker: "Track 02" },
  { id: "state", label: "State & Collaboration", kicker: "Track 03" },
  { id: "advanced", label: "Advanced Terraform", kicker: "Track 04" },
  { id: "mynotes", label: "My Notes", kicker: "Track 05" },
  { id: "projects", label: "Live DevOps Projects", kicker: "Track 06" }
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
          ["RHEL / CentOS / Amazon Linux", "HashiCorp RHEL repo", "yum"],
          ["Fedora", "HashiCorp Fedora repo", "dnf"],
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
        title: "RHEL / CentOS / Amazon Linux",
        code: `# Add the HashiCorp RHEL repo (works for RHEL, CentOS, Amazon Linux)
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo \\
  https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo

sudo yum install -y terraform
terraform version`
      },
      {
        type: "code",
        title: "Fedora",
        code: `# Remove any stale RHEL repo first (if previously added)
sudo rm -f /etc/yum.repos.d/hashicorp.repo

# Add the correct Fedora-specific HashiCorp repo
sudo dnf install -y dnf-plugins-core
sudo dnf config-manager addrepo \\
  --from-repofile=https://rpm.releases.hashicorp.com/fedora/hashicorp.repo

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
    id: "terraform-vs-cloudformation",
    num: "16",
    title: "Terraform vs. CloudFormation",
    category: "mynotes",
    description: "Deep comparison of IaC design patterns, lifecycle state management, and execution engines between Terraform and AWS CloudFormation.",
    tags: ["CloudFormation", "AWS", "Comparison"],
    search: "difference between terraform and cloudformation aws vendor lock-in cloud agnostic state management json yaml hcl declarative imperative engine",
    sections: [
      { type: "lead", text: "While both tools serve the primary goal of Infrastructure as Code (IaC), their underlying architectures, state-tracking mechanisms, and vendor boundaries represent entirely distinct engineering philosophies." },
      {
        type: "grid",
        items: [
          { title: "Declarative Paradigm", text: "Both platforms define the desired 'end state' rather than step-by-step commands. You specify WHAT resources you want, and the engines figure out the HOW (creation order, API calls, dependency trees)." },
          { title: "Vendor Scope", text: "CloudFormation is built natively for AWS resources. Terraform uses a pluggable 'Provider' architecture, allowing it to provision AWS, GCP, Azure, Kubernetes, Datadog, or GitHub with the same syntax." },
          { title: "Engine Engine", text: "Terraform runs client-side (parsing files locally and calling cloud APIs directly). CloudFormation accepts raw JSON/YAML templates, uploads them, and executes all API tasks on AWS-managed backend engines." }
        ]
      },
      {
        type: "table",
        headers: ["Architectural Vector", "HashiCorp Terraform", "AWS CloudFormation"],
        rows: [
          ["Multi-Cloud Portability", "Cloud-Agnostic. Single syntax configures multi-cloud topologies.", "AWS-Specific. Non-AWS services require complex Custom Resources."],
          ["State File Storage", "Explicit (.tfstate). State is managed via local file or Remote Backends (S3/Consul).", "Implicit (Managed Stacks). State is hidden and fully managed within AWS CloudFormation Service."],
          ["Locking Mechanism", "Active locking supported natively by backends (DynamoDB, TF Cloud) to block parallel runs.", "Implicit. AWS serializes stack updates, preventing concurrent conflicting writes."],
          ["Syntax / Language", "HCL (HashiCorp Configuration Language). Human-readable, includes built-in functions.", "JSON or YAML. Highly verbose, requires native intrinsic functions (Ref, Fn::GetAtt)."],
          ["Code Composition", "Modules. Clean, reusable folders referencing local paths or Git URIs.", "Nested Stacks. Requires uploading sub-templates to S3 buckets, complicating delivery pipelines."],
          ["Drift Detection", "Dynamic. Running 'plan' checks current real-world state against code directly.", "On-Demand. Requires manual trigger or AWS Config rules to identify Stack Drift."]
        ]
      },
      {
        type: "flow",
        title: "Developer Workflow Comparison",
        steps: [
          { title: "Terraform Stage 1: Local Plan Validation", text: "Run 'terraform plan'. The local binary queries active AWS API endpoints to check actual resource states and compares them to local state. It generates a detailed preview showing '+' (add), '~' (change), or '-' (destroy) changes." },
          { title: "CloudFormation Stage 1: Change Sets", text: "Upload template to AWS. The AWS CloudFormation service analyzes the YAML/JSON document against its internal record of the stack, producing a 'Change Set' that you can preview in the AWS Console." },
          { title: "Terraform Stage 2: Immediate Execution", text: "Run 'terraform apply'. The client binary calls AWS endpoints sequentially, creating resources in exact dependency order and writing the resulting metadata directly into the .tfstate file." },
          { title: "CloudFormation Stage 2: Server-Side Processing", text: "Execute the Change Set. AWS manages the roll-out asynchronously. If a single resource fails to deploy, AWS automatically rolls back all previously created resources in that execution, deleting them to restore stability." }
        ]
      },
      { type: "callout", tone: "success", html: "<strong>Advanced Takeaway:</strong> Terraform's client-side model gives engineers immediate control and access to hundreds of SaaS providers, but introduces the responsibility of securing and managing the state file. CloudFormation removes state management overhead entirely but binds you permanently to the AWS ecosystem." }
    ]
  },
  {
    id: "basic-syntax",
    num: "17",
    title: "Basic Syntax & Block Types",
    category: "mynotes",
    description: "Deep dive into HashiCorp Configuration Language (HCL2) grammar rules, block schemas, arguments vs attributes, and execution constraints.",
    tags: ["Syntax", "Blocks", "Attributes"],
    search: "basic syntax blocks arguments attributes types of blocks resource data provider variable output locals module terraform hcl parser schema",
    sections: [
      { type: "lead", text: "HashiCorp Configuration Language (HCL2) is a declarative, structured configuration language designed for human readability and machine parsing. Every Terraform configuration is constructed from HCL elements: Blocks, Arguments, and Attributes." },
      {
        type: "grid",
        items: [
          { title: "HCL Blocks", text: "Containers that group configuration arguments under a semantic header. Anatomy: 'block_type' 'label1' 'label2' { ... }. Example: 'resource' (type), 'aws_instance' (label1), 'web' (label2)." },
          { title: "Arguments", text: "Input parameters that you assign values to within a block (e.g., tags = { Name = 'web' }). They define the configuration state that you want the provider to achieve." },
          { title: "Attributes", text: "Values exported by resources after deployment. You cannot set these; you can only reference them (e.g., aws_instance.web.private_ip). They are returned by the Cloud API." },
          { title: "The Parse Cycle", text: "Terraform reads HCL, compiles an Abstract Syntax Tree (AST), validates schemas defined by the cloud provider, and constructs an Directed Acyclic Graph (DAG) for parallel execution." }
        ]
      },
      {
        type: "table",
        headers: ["HCL Block Type", "Syntax Schema Constraint", "Detailed Operational Purpose"],
        rows: [
          ["terraform", "No labels allowed. Single block per module root.", "Defines core Terraform CLI settings, requires specific provider versions, and configures the state backend (e.g., S3/Remote)."],
          ["provider", "Exactly 1 label (provider name). Multiple allowed via alias.", "Initializes and configures the API credentials and region settings for a specific target platform (e.g. aws, kubernetes)."],
          ["resource", "Exactly 2 labels: resource type and logical name.", "Defines a concrete piece of infrastructure to be created, updated, or destroyed. The primary building block of Terraform."],
          ["data", "Exactly 2 labels: data source type and logical name.", "Queries existing real-world resources or cloud metadata outside of Terraform management and pulls them in as read-only variables."],
          ["variable", "Exactly 1 label (variable name). No nested blocks except validation.", "Declares customizable input parameters that let users parameterize modules without modifying core code."],
          ["output", "Exactly 1 label (output name). Must include 'value' argument.", "Exposes internal resource attributes to the CLI output or passes data to other modules in module composition."],
          ["locals", "No labels allowed. Contains multiple custom name-value pairs.", "Internal scratchpad for calculating reusable expressions and variables. Hidden from module consumers."],
          ["module", "Exactly 1 label (logical module name). Must include 'source' argument.", "Instantiates a reusable, self-contained sub-directory of HCL configurations, creating scoped infrastructure boundaries."]
        ]
      },
      {
        type: "code",
        title: "Advanced Multi-Block Interdependency Configuration",
        code: `# 1. Global settings and backend constraints
terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# 2. Input Parameter for dynamic deployment
variable "vpc_cidr_block" {
  type        = string
  default     = "10.0.0.0/16"
  description = "Base CIDR range for the application network"
}

# 3. Provider initialization using local config
provider "aws" {
  region = "us-west-2"
}

# 4. Data block querying regional AMI catalog dynamically
data "aws_ami" "latest_amazon_linux" {
  most_recent = true
  owners      = ["amazon"]
  filter {
    name   = "name"
    values = ["al2023-ami-minimal-*"]
  }
}

# 5. Local variables to simplify complex computed values
locals {
  name_suffix = "prod-deployment"
  subnet_ip   = cidrsubnet(var.vpc_cidr_block, 8, 1) # Outputs "10.0.1.0/24"
}

# 6. Core Resource 1: Virtual Private Cloud
resource "aws_vpc" "app_network" {
  cidr_block           = var.vpc_cidr_block
  enable_dns_hostnames = true
  tags = {
    Name = "vpc-\${local.name_suffix}"
  }
}

# 7. Core Resource 2: Private Subnet (dependent on VPC)
resource "aws_subnet" "app_subnet" {
  # References exported attribute '.id' from aws_vpc resource
  # This creates an implicit dependency in Terraform's DAG!
  vpc_id            = aws_vpc.app_network.id
  cidr_block        = local.subnet_ip
  availability_zone = "us-west-2a"
  tags = {
    Name = "subnet-\${local.name_suffix}"
  }
}

# 8. Output value to export calculated subnet ID
output "target_subnet_id" {
  value       = aws_subnet.app_subnet.id
  description = "The dynamically provisioned subnet ID for downstream consumer scripts."
}`
      },
      { type: "callout", tone: "success", html: "<strong>Deep Under-the-Hood:</strong> Terraform builds implicit dependencies by parsing resource attribute references (e.g. <code>aws_vpc.app_network.id</code>). It uses this graph to understand that the VPC must be created <em>before</em> the Subnet can be initialized, allowing for safe multi-threaded parallel execution of non-dependent resources." }
    ]
  },
  {
    id: "expressions-functions",
    num: "18",
    title: "Expressions & Functions",
    category: "mynotes",
    description: "Master dynamic configuration using HCL expressions, complex collection loops, lookup fallbacks, safety handling with try/can, and advanced network functions.",
    tags: ["Expressions", "Functions", "Logic"],
    search: "expressions functions conditionals loops for dynamic interpolation try can lookup cidrsubnet splat collection maps keys values",
    sections: [
      { type: "lead", text: "Because Terraform does not support standard procedural scripting (like Python or JS), it provides highly specialized built-in functions and evaluation expressions to compute complex structures, filter data dynamically, and handle errors safely." },
      {
        type: "grid",
        items: [
          { title: "Splat Operator (*)", text: "Extracts values from a list of blocks easily. <code>aws_instance.nodes[*].public_ip</code> acts like a loop, flattening all instance IPs into a clean list of strings." },
          { title: "Map Comprehensions", text: "Transform collections on-the-fly. <code>{ for k, v in map : k => upper(v) }</code> re-maps keys and values while allowing conditional filters inside." },
          { title: "Safe Access (try/can)", text: "Handle missing parameters gracefully. <code>try()</code> evaluates expressions sequentially, returning the first one that succeeds without throwing a fatal crash." },
          { title: "Network Math", text: "Never hardcode IPs. <code>cidrsubnet()</code> and <code>cidrhost()</code> let you split large subnet blocks dynamically based on simple integer offsets." }
        ]
      },
      {
        type: "table",
        headers: ["Function Class", "Critical Functions", "Real-World Industrial Use Case"],
        rows: [
          ["String Manipulation", "upper(), lower(), join(), split(), replace()", "Formatting standard tag naming conventions or converting raw strings to structured arrays."],
          ["Collection Filters", "keys(), values(), merge(), lookup(), element()", "Merging common tags maps with resource-specific tags, or looking up keys in highly nested configuration maps."],
          ["Boolean Checks", "can(), contains(), coalesce(), try()", "Verifying if a map key exists, picking the first non-null input, or establishing safety fallback defaults."],
          ["IP Subnet Calculations", "cidrsubnet(), cidrhost(), cidrsubnets()", "Calculating private, public, and database subnet bounds from a single high-level VPC CIDR string."]
        ]
      },
      {
        type: "code",
        title: "Enterprise Logic with Functions & Expressions",
        code: `# Input configurations for demonstration
variable "subnets_config" {
  type = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
}

variable "raw_tags" {
  type    = map(string)
  default = { "owner" = "platform-team", "CostCenter" = "10922" }
}

locals {
  # 1. Advanced String and Collection Manipulation
  # Merging and converting keys to standardized lowercase values
  normalized_tags = {
    for key, val in var.raw_tags : lower(key) => upper(val)
  }
  # Result: { "owner" = "PLATFORM-TEAM", "costcenter" = "10922" }

  # 2. Safety Fallbacks with lookup() and try()
  # lookup(map, key, default) - checks key, uses fallback if absent
  environment = lookup(var.raw_tags, "env", "development") # Outputs "development"

  # try(expression, fallback) - prevents plan failure on empty variables
  # Evaluates left-to-right, returns first expression that compiles
  custom_config = try(var.raw_tags["optional_config"], "default_val")

  # 3. Dynamic Filtering using For Expressions
  # Generates a list of only database subnets from configuration
  subnet_ips = ["10.0.10.0/24", "10.0.20.0/24", "192.168.1.0/24"]
  
  # Selects only the subnets belonging to the 10.0.x.x boundary
  aws_scoped_subnets = [
    for ip in local.subnet_ips : ip 
    if startswith(ip, "10.0.")
  ]
  # Result: ["10.0.10.0/24", "10.0.20.0/24"]

  # 4. Splat & Network Math
  # Generates the first hosts for a list of subnets
  first_hosts = [
    for subnet in var.subnets_config : cidrhost(subnet, 1)
  ]
  # Result: ["10.0.1.1", "10.0.2.1", "10.0.3.1"]
}`
      },
      { type: "callout", tone: "warn", html: "<strong>Anti-Pattern Warning:</strong> Do not abuse <code>try()</code> to suppress true errors. If a variable is missing due to a spelling mistake, using <code>try(var.misspelled_name, default)</code> will silently mask the bug, making it extremely difficult to troubleshoot." }
    ]
  },
  {
    id: "core-blocks",
    num: "19",
    title: "Core Blocks: Provider, Resource, Variable, Output, Module",
    category: "mynotes",
    description: "Deep dive into the 5 core blocks of HCL including variable input validation, provider aliasing, root vs child modules, and output dependencies.",
    tags: ["Core", "Blocks", "Structure"],
    search: "provider resource variable output module core blocks deep dive validation alias multi-region dependencies",
    sections: [
      { type: "lead", text: "The architectural framework of any Terraform project is composed of five elemental HCL blocks. Mastering their configuration schemas—specifically validation rules and provider inheritance—is vital for building scalable infrastructure pipelines." },
      {
        type: "grid",
        items: [
          { title: "1. Provider Aliasing", text: "Configure multi-region deployments in a single project by initializing multiple instances of the same provider with custom 'alias' labels." },
          { title: "2. Input Validation", text: "Enforce security and naming policies directly in variable blocks using declarative custom 'validation' rules and strict type constraints." },
          { title: "3. Module Boundaries", text: "Keep code modular. Variables parameterize inputs; Outputs expose attributes; Providers are inherited from the root execution down to children." },
          { title: "4. Output Dependencies", text: "Using outputs to feed attributes from one resource into another creates implicit dependency tracks that guide the execution planner." }
        ]
      },
      {
        type: "code",
        title: "Advanced Core Block Interaction with Validation and Aliases",
        code: `# =======================================================
# 1. PROVIDERS (Multi-Region Aliasing)
# =======================================================
# Default provider for the primary region (Oregon)
provider "aws" {
  region = "us-west-2"
}

# Secondary provider for the disaster recovery region (Virginia)
provider "aws" {
  alias  = "us_east"
  region = "us-east-1"
}

# =======================================================
# 2. VARIABLES (Strict Custom Validation Constraints)
# =======================================================
variable "db_instance_class" {
  type        = string
  default     = "db.t3.micro"
  description = "Size of the database instance. Must belong to the t3 instance family."

  # Custom validation to block expensive or unsupported classes
  validation {
    condition     = startswith(var.db_instance_class, "db.t3.")
    error_message = "Operational policy violation: DB class must belong to the burstable db.t3 family (e.g. db.t3.micro, db.t3.small)."
  }
}

# =======================================================
# 3. MODULES (Provider Inheritance and Composition)
# =======================================================
module "vpc_primary" {
  source = "./modules/network"
  cidr   = "10.0.0.0/16"
  
  # Uses default provider (us-west-2) automatically
}

module "vpc_secondary" {
  source = "./modules/network"
  cidr   = "172.16.0.0/16"

  # Explicitly passes the secondary provider to the child module
  providers = {
    aws = aws.us_east
  }
}

# =======================================================
# 4. RESOURCES (Using Module Outputs dynamically)
# =======================================================
resource "aws_db_instance" "replica" {
  # Deploys replica into the secondary region VPC subnets
  # Implicitly waits for vpc_secondary and outputs the subnets
  db_subnet_group_name = module.vpc_secondary.subnet_group_id
  instance_class       = var.db_instance_class
  allocated_storage    = 20
  engine               = "postgres"
  skip_final_snapshot  = true
}

# =======================================================
# 5. OUTPUTS (Exposing resource endpoints)
# =======================================================
output "database_endpoint" {
  value       = aws_db_instance.replica.endpoint
  description = "The dynamic connection string exported for app configurations."
}`
      },
      { type: "callout", tone: "success", html: "<strong>Architectural Rule:</strong> A child module should <em>never</em> define its own <code>provider {}</code> blocks. Defining providers inside modules makes them un-reusable and blocks features like multi-region orchestration. Always declare providers in the root folder and pass them down using the <code>providers = { ... }</code> map." }
    ]
  },
  {
    id: "string-interpolation",
    num: "20",
    title: "String Interpolation",
    category: "mynotes",
    description: "Learn how to evaluate expressions, insert variables, format strings with Heredoc, run templatefile(), and control loops directly inside strings.",
    tags: ["Strings", "Interpolation", "Templates"],
    search: "string interpolation evaluation variables syntax brackets dollar sign expressions directives heredoc templatefile template",
    sections: [
      { type: "lead", text: "String interpolation in HCL is more than simple variable substitution. It includes a powerful template engine that supports multi-line Heredoc formats, external file rendering via <code>templatefile()</code>, and programmatic loops directly inside text blocks." },
      {
        type: "grid",
        items: [
          { title: "Standard Substitution", text: "Use <code>\${expression}</code> to dynamically evaluate strings, resources, or function calls and embed them directly into standard strings." },
          { title: "Heredoc Syntax", text: "Define large multi-line strings using <code>&lt;&lt;-EOT</code>. The hyphen <code>-</code> strips leading whitespace, letting you indent your raw text cleanly inside your HCL." },
          { title: "Template Files", text: "For long scripts or configurations, use <code>templatefile(path, vars)</code>. This keeps shell scripts separate from HCL, injecting variables dynamically at compile-time." },
          { title: "Directives & Stripping", text: "Use <code>%{~ if }</code> and <code>%{~ for }</code> to control whitespace and strip trailing/leading newlines dynamically, keeping output configs perfectly formatted." }
        ]
      },
      {
        type: "code",
        title: "Heredocs, Template Files, and Whitespace Stripping",
        code: `# 1. Heredoc with stripped leading indentations (<<-EOT)
locals {
  # Clean multi-line shell script with preserved layout
  user_data_script = <<-EOT
    #!/bin/bash
    echo "Initializing environment..."
    export ENV="\${var.environment}"
    systemctl start nginx
  EOT
  
  # 2. String Directives (If/Else with Whitespace Stripping '%{~')
  # The '~' character strips any trailing or leading whitespace/newlines 
  # next to the directive, preventing ugly blank lines in output config files.
  server_config = <<-EOT
    # Automatic server settings
    %{ if var.environment == "prod" ~}
    max_connections = 1000
    ssl_enabled = true
    %{ else ~}
    max_connections = 100
    ssl_enabled = false
    %{ endif ~}
  EOT

  # 3. Dynamic Loop Directives inside a String
  names_list = ["srv-alpha", "srv-beta", "srv-gamma"]
  hosts_file = <<-EOT
    # Dynamic DNS mapping
    %{ for index, name in local.names_list ~}
    127.0.0.\${index + 1} \${name}
    %{ endfor ~}
  EOT
}

# 4. The templatefile() Function (The Enterprise Standard)
# Renders an external configuration template file and injects variables
resource "aws_instance" "web" {
  ami           = "ami-12345"
  instance_type = "t2.micro"

  # Renders the raw script in './templates/user_data.sh.tpl'
  # and injects the dynamic 'admin_username' variable into it
  user_data = templatefile("\${path.module}/templates/user_data.sh.tpl", {
    admin_username = "ops_engineer"
    backup_enabled = true
  })
}`
      },
      {
        type: "code",
        title: "Underlying Template File: ./templates/user_data.sh.tpl",
        code: `#!/bin/bash
# Dynamic user creation template
useradd -m -s /bin/bash \${admin_username}

%{ if backup_enabled ~}
# Schedule backup cron job
echo "0 2 * * * backup-script.sh" >> /etc/crontab
%{ endif ~}`
      },
      { type: "callout", tone: "success", html: "<strong>Pro Tip:</strong> When using interpolation inside a Heredoc block, you can escape interpolation by writing <code>\$\${literal_string}</code>. This is extremely useful when your user_data scripts need to reference actual bash variables (like <code>\$\${HOSTNAME}</code>) without Terraform attempting to parse them during the apply phase." }
    ]
  },
  {
    id: "loops",
    num: "21",
    title: "Loops: count vs for_each",
    category: "mynotes",
    description: "Master multi-resource orchestration, analyze the destructive index shift problem with count, and configure dynamic blocks for nested structures.",
    tags: ["Loops", "count", "for_each"],
    search: "loops iteration count for_each multiple resources dynamic block list map set meta-arguments index shift dynamic nested ingress security group",
    sections: [
      { type: "lead", text: "Writing DRY configuration requires loops. HCL provides <code>count</code> (index-based) and <code>for_each</code> (key-based) meta-arguments to orchestrate multiple resource blocks, plus <code>dynamic</code> blocks to generate repeating blocks inside a single resource." },
      {
        type: "grid",
        items: [
          { title: "Count Indexing", text: "Loops based on array sizes or integers. Good for N exact copies. References elements via <code>count.index</code>. Tracked in state as <code>resource.name[0]</code>, <code>resource.name[1]</code>." },
          { title: "For_Each Keying", text: "Loops over map keys or string sets. References elements via <code>each.key</code> and <code>each.value</code>. Tracked in state as <code>resource.name[\"prod\"]</code>." },
          { title: "The Index Shift Pitfall", text: "If you remove an element from the middle of a <code>count</code> list, Terraform shifts every subsequent resource's index down by one, causing massive accidental resource destructions." },
          { title: "Dynamic Blocks", text: "Iterate inside resources (like generating many nested <code>ingress</code> rules in security groups or <code>subnet</code> maps in VPCs) without duplicate HCL blocks." }
        ]
      },
      {
        type: "table",
        headers: ["Iteration Feature", "count Meta-Argument", "for_each Meta-Argument"],
        rows: [
          ["Input Collection Type", "Integrals or Lists.", "Sets of strings or Maps of objects (cannot use standard list directly)."],
          ["State Reference ID", "Integer index (e.g. aws_subnet.sub[0]).", "String key identifier (e.g. aws_subnet.sub[\"public_a\"])."],
          ["Susceptibility to Shifts", "High. Deleting item 1 causes item 2 to rename to 1, triggering a destructive update.", "Zero. Keys are stable identifiers. Deleting 'dev' only deletes the 'dev' resource, leaving 'prod' untouched."],
          ["Access Variables", "count.index (integer).", "each.key (string key), each.value (value string or map object)."]
        ]
      },
      {
        type: "code",
        title: "The Dangerous Index Shift vs Stable Keys",
        code: `# =======================================================
# 1. THE HAZARD: Using count with a list
# =======================================================
variable "names_count" {
  type    = list(string)
  default = ["alice", "bob", "charlie"]
}

resource "aws_iam_user" "count_users" {
  count = length(var.names_count)
  name  = var.names_count[count.index]
}
# IF YOU REMOVE "bob" FROM THE LIST:
# - alice (index 0) is unchanged.
# - bob (index 1) is destroyed.
# - charlie (index 2) is SHIFTED to index 1. 
# Terraform renames aws_iam_user.count_users[2] to [1], destroying and recreating Charlie!

# =======================================================
# 2. THE SOLUTION: Using for_each for stable keys
# =======================================================
variable "names_each" {
  type    = set(string)
  default = ["alice", "bob", "charlie"]
}

resource "aws_iam_user" "stable_users" {
  for_each = var.names_each
  name     = each.key
}
# IF YOU REMOVE "bob" FROM THE SET:
# - Terraform simply deletes aws_iam_user.stable_users["bob"].
# - "alice" and "charlie" are untouched. Safe and stable.`
      },
      {
        type: "code",
        title: "Advanced Dynamic Blocks (Looping nested blocks inside a resource)",
        code: `# Map of security group ports and their descriptions
variable "ingress_rules" {
  type = map(object({
    port        = number
    description = string
  }))
  default = {
    http  = { port = 80, description = "Allow web traffic" }
    https = { port = 443, description = "Allow secure web traffic" }
    ssh   = { port = 22, description = "Allow admin terminal access" }
  }
}

resource "aws_security_group" "web_firewall" {
  name        = "web-server-sg"
  description = "Dynamic port handling for application nodes"

  # Dynamic ingress block iterates over the variable map
  dynamic "ingress" {
    for_each = var.ingress_rules
    
    content {
      description = ingress.value.description
      from_port   = ingress.value.port
      to_port     = ingress.value.port
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
    }
  }
}`
      },
      { type: "callout", tone: "success", html: "<strong>Golden Rule:</strong> Use <code>count</code> only for creating identical resources (e.g., <code>count = 3</code> to spin up identical generic servers). Always use <code>for_each</code> for distinct configurations where items might be added, updated, or deleted over the lifecycle of the project." }
    ]
  },
  {
    id: "conditionals",
    num: "22",
    title: "Conditional Expressions",
    category: "mynotes",
    description: "Master advanced HCL ternary logic, compound logical operators, strict type unified path constraints, and the null-value property suppression pattern.",
    tags: ["Conditionals", "Logic", "Ternary"],
    search: "conditional expressions ternary operator if else logic boolean enable disable resources null value dynamic compound validation",
    sections: [
      { type: "lead", text: "Conditional logic in HCL relies on the ternary operator (<code>condition ? true_val : false_val</code>). Beyond toggling resources via <code>count</code>, advanced HCL leverages compound logical operators and the <code>null</code> value pattern to dynamically suppress or enable specific resource arguments." },
      {
        type: "grid",
        items: [
          { title: "Ternary Grammar", text: "Evaluates a boolean condition. If true, returns the first expression; if false, returns the second. Syntax: <code>var.is_prod ? \"t3.large\" : \"t3.micro\"</code>." },
          { title: "Type Unification Constraint", text: "HCL requires both true and false paths to evaluate to the exact same type (or structures that can be unified). <code>true ? \"string\" : 10</code> causes a fatal compile crash." },
          { title: "Property Suppression", text: "Passing <code>null</code> as a resource argument instructs the cloud provider to completely ignore that parameter. Combining this with ternary logic creates highly flexible optional properties." },
          { title: "Compound Logic", text: "Combine multiple conditions using standard boolean operators: <code>&amp;&amp;</code> (AND), <code>||</code> (OR), and <code>!</code> (NOT). Used extensively for variable validation checks." }
        ]
      },
      {
        type: "code",
        title: "Dynamic Property Suppression and Optional Settings",
        code: `# Configuration variables
variable "environment" {
  type    = string
  default = "production"
}

variable "enable_custom_port" {
  type    = bool
  default = true
}

variable "custom_port" {
  type    = number
  default = 8080
}

# Advanced Dynamic Load Balancer Configuration
resource "aws_lb_listener" "http" {
  load_balancer_arn = "arn:aws:elasticloadbalancing:us-west-2:123456:loadbalancer/app"
  
  # Strict Type Unification: pick port based on dynamic boolean flag
  # If false, falls back to standard port 80
  port = var.enable_custom_port ? var.custom_port : 80
  
  # Compound logic decides protocol
  protocol = (var.environment == "production" && var.enable_custom_port == false) ? "HTTPS" : "HTTP"

  # =======================================================
  # THE NULL PATTERN: Dynamically suppressing an argument
  # =======================================================
  # If the environment is production, we enforce a specific SSL policy.
  # For non-prod environments, we set it to null. 
  # Terraform completely omits the 'ssl_policy' field in non-prod, avoiding API errors.
  ssl_policy = var.environment == "production" ? "ELBSecurityPolicy-2016-08" : null

  default_action {
    type             = "forward"
    target_group_arn = "arn:aws:elasticloadbalancing:us-west-2:1234:targetgroup/tg"
  }
}`
      },
      {
        type: "code",
        title: "Optional Resource Toggle with Dependent Attributes",
        code: `variable "deploy_monitoring_agent" {
  type        = bool
  default     = false
  description = "Toggles deployment of the CloudWatch monitoring agent."
}

# Optional Resource: only deploys if deploy_monitoring_agent is true
resource "aws_cloudwatch_metric_alarm" "cpu_alert" {
  # count = 1 (active) or 0 (completely skipped)
  count = var.deploy_monitoring_agent ? 1 : 0

  alarm_name          = "high-cpu-utilization-alert"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = 120
  statistic           = "Average"
  threshold           = 85

  # Points to a custom group - safely ignored if count is 0
  alarm_actions = [aws_sns_topic.alerts[0].arn]
}

resource "aws_sns_topic" "alerts" {
  # Created conditionally to feed the alarm
  count = var.deploy_monitoring_agent ? 1 : 0
  name  = "infrastructure-alerts-topic"
}`
      },
      { type: "callout", tone: "success", html: "<strong>Pro Tip:</strong> When using the conditional resource toggle pattern (<code>count = var.enabled ? 1 : 0</code>), any other resource that references its attributes MUST also handle the conditional sizing. Always reference the output as a list index (e.g. <code>aws_sns_topic.alerts[0].arn</code>) or use splat expressions (<code>aws_sns_topic.alerts[*].arn</code>) to prevent dependency tree resolution crashes." }
    ]
  },
  {
    id: "advanced-commands",
    num: "23",
    title: "Advanced Commands & State Surgical Operations",
    category: "mynotes",
    description: "Deep dive into Terraform state manipulation commands, modern 1.5+ declarative import blocks, forced resource replacement, and dependency graphing.",
    tags: ["Commands", "State", "Advanced"],
    search: "advanced commands taint untaint import block graph replace state rm mv pull push manipulation surgical dependencies",
    sections: [
      { type: "lead", text: "While <code>plan</code> and <code>apply</code> drive daily changes, managing infrastructure cycles requires advanced operations. Historically, this meant manual CLI state manipulations. Modern Terraform (1.5+) introduces declarative import blocks to safely bring resources under management through standard VCS workflows." },
      {
        type: "grid",
        items: [
          { title: "Declarative Import", text: "Instead of CLI commands, use HCL <code>import {}</code> blocks. Terraform generates the resource configuration for you during the plan stage, leaving a clear audit trail in git." },
          { title: "Surgical State MV", text: "Rename resources in your code without cloud disruption. <code>state mv</code> re-maps the unique state keys, preventing Terraform from destroying and rebuilding the resource." },
          { title: "State RM Safeguard", text: "Delete a resource from state management without deleting it from the cloud. Perfect for refactoring resources to a separate state file or module." },
          { title: "DAG Graphing", text: "Visualize execution pipelines. <code>terraform graph</code> dumps a DOT-format graph mapping every provider, data source, and resource dependency for Graphviz analysis." }
        ]
      },
      {
        type: "code",
        title: "Modern Declarative Import Block (Terraform 1.5+)",
        code: `# =======================================================
# THE MODERN WORKFLOW: Declarative Import Blocks
# =======================================================
# 1. Define an import block mapping the cloud ID to your logical block
import {
  to = aws_s3_bucket.legacy_assets
  id = "prod-legacy-assets-bucket-12345"
}

# 2. Write the matching empty resource block in your code
resource "aws_s3_bucket" "legacy_assets" {
  # During 'terraform plan', Terraform will query the cloud, 
  # read the bucket settings, and prompt you to import it.
  # Run: terraform plan -generate-config-out=generated_s3.tf
  # This automatically writes all the bucket properties to HCL for you!
}`
      },
      {
        type: "code",
        title: "Surgical CLI State Commands",
        code: `# =======================================================
# 1. STATE REFACTORING (state mv)
# =======================================================
# Scenario: You moved a generic EC2 instance 'web' into a VPC module 'web_servers'
# If you run apply, Terraform will destroy 'web' and create a new instance inside the module!
# Prevention: surgically move it in the state instead:
terraform state mv aws_instance.web module.web_servers.aws_instance.web

# =======================================================
# 2. ABANDON STATE CONTROL (state rm)
# =======================================================
# Scenario: You want to delete a database from Terraform management 
# but keep the database active in AWS (running) for security.
terraform state rm aws_db_instance.primary_database
# Output: Successfully removed 1 resource instance. 
# Running 'plan' now shows 0 resources to delete, but the database stays alive in cloud!

# =======================================================
# 3. ADVANCED REPLACEMENT (-replace)
# =======================================================
# Force recreate an instance that is unhealthy without tainting state files:
terraform apply -replace="aws_instance.web_host[0]"`
      },
      { type: "callout", tone: "warn", html: "<strong>Security Warning:</strong> Modifying state with CLI commands bypasses code reviews and is highly dangerous. <strong>Always</strong> run <code>terraform state pull > state-backup.json</code> to back up your current state file before executing any <code>mv</code> or <code>rm</code> operations." }
    ]
  },
  {
    id: "debugging",
    num: "24",
    title: "Debugging Terraform Issues & Troubleshooting",
    category: "mynotes",
    description: "Deep troubleshooting guide covering API TRACE logs telemetry, REPL terminal queries, common provider error decoders, and state lock recoveries.",
    tags: ["Debugging", "Logs", "Troubleshooting"],
    search: "debugging logs terraform tf_log trace debug info warn error crash console troubleshooting lock force-unlock REPL cycle error",
    sections: [
      { type: "lead", text: "When Terraform fail-modes occur, simple console printouts can be obscure. True systems diagnostics require tapping into environment telemetry (TF_LOG), querying live state interactively via the REPL Console, and resolving concurrency state locks." },
      {
        type: "grid",
        items: [
          { title: "Telemetry Levels", text: "Control logging using <code>TF_LOG</code>. Levels: <code>TRACE</code> (deepest HCL parser details & HTTP body wire logs), <code>DEBUG</code> (provider actions), <code>INFO</code>, <code>WARN</code>, <code>ERROR</code>." },
          { title: "HTTP API Inspection", text: "Setting <code>TF_LOG=TRACE</code> captures raw AWS/GCP API request/response dumps. You can inspect exact JSON headers and payloads to spot permissions or parameter bugs." },
          { title: "Console REPL", text: "Run <code>terraform console</code> to launch a sandboxed evaluation engine. Directly query <code>aws_vpc.main.cidr_block</code> or test regex matches before applying code." },
          { title: "Concurrency State Locks", text: "If a prior apply crashed, your backend stays locked, blocking updates. Resolve this by identifying the lock ID and running <code>terraform force-unlock &lt;ID&gt;</code>." }
        ]
      },
      {
        type: "table",
        headers: ["Common Exception Error", "Root System Cause", "Surgical Resolution Path"],
        rows: [
          ["ResourceAlreadyExists", "Target resource is already configured in the cloud but not registered in your .tfstate file.", "Write a declarative 'import {}' block to map the existing resource ID to your HCL logical name."],
          ["Cycle / Cyclic Dependency", "Resource A references Resource B, and B references A, creating an infinite graph loop.", "Refactor hard dependencies. Use intermediate resources (like security group rules) to break the cycle."],
          ["Error: Saved plan is stale", "The infrastructure was modified outside of Terraform since the plan file was generated.", "Discard the current plan, run 'terraform plan -out=new-plan.binary', and apply the new plan."],
          ["Error acquiring the state lock", "A prior run failed before releasing the remote lock, or another engineer is running an apply.", "Verify no pipeline is active, extract the Lock ID from the error, and execute 'terraform force-unlock <ID>'."]
        ]
      },
      {
        type: "code",
        title: "Telemetry Logging & Lock Recoveries",
        code: `# =======================================================
# 1. ENABLING TELEMETRY LOGS (Unix Terminal)
# =======================================================
# Step A: Direct all trace logs to a file to keep terminal clean
export TF_LOG_PATH="./terraform-provider-trace.log"

# Step B: Set log level to TRACE (insanely verbose, prints HTTP wire logs)
export TF_LOG=TRACE

# Step C: Run your command. The log will capture the raw HTTP API payload
terraform apply

# =======================================================
# 2. DECIPHERING WIRE LOGS (Inside './terraform-provider-trace.log')
# =======================================================
# [DEBUG] [aws-sdk-go] DEBUG: Request:
# POST / HTTP/1.1
# Host: ec2.us-west-2.amazonaws.com
# Content-Type: application/x-www-form-urlencoded
# ...
# Action=DescribeInstances&Version=2016-11-15
# 
# [DEBUG] [aws-sdk-go] DEBUG: Response:
# HTTP/1.1 403 Forbidden
# <Response><Errors><Error><Code>UnauthorizedOperation</Code><Message>You are not authorized...</Message>
# -> Diagnosis: IAM policies are blocking EC2 read queries!

# =======================================================
# 3. CONCURRENCY RECOVERIES (force-unlock)
# =======================================================
# Scenario: Lock acquire failed. Error output contains:
# Lock Info:
#   ID:        e4c85678-89ab-cdef-0123-456789abcdef
#   Operation: OperationTypeApply
#   Who:       dev-ops-agent@jenkins-node-01
#
# If you are absolutely sure Jenkins is dead, force-unlock the state:
terraform force-unlock e4c85678-89ab-cdef-0123-456789abcdef`
      },
      {
        type: "code",
        title: "Testing Calculations in Console REPL",
        code: `$ terraform console
# Query active resource maps
> aws_subnet.app_subnet
{
  "arn" = "arn:aws:ec2:us-west-2:1234:subnet/subnet-0abc"
  "cidr_block" = "10.0.1.0/24"
  "id" = "subnet-0abc"
}

# Test string slicing functions in real-time
> split("/", "10.0.1.0/24")
[
  "10.0.1.0",
  "24",
]

# Test collection elements
> element(["dev", "staging", "prod"], 2)
"prod"

# Exit console
> exit`
      },
      { type: "callout", tone: "warn", html: "<strong>Security Warning:</strong> High-level log logs (especially <code>TRACE</code>) dump raw API authorizations and system tokens into the plain text log file. <strong>Never</strong> commit <code>*.log</code> files to version control or paste raw trace output into public forums without scrubbing credentials first." }
    ]
  },
  {
    id: "locals",
    num: "25",
    title: "Local Variables (locals)",
    category: "mynotes",
    description: "Master HCL local variable declarations, dynamic scratchpad calculations, nested collection flattening, and preventing circular dependencies.",
    tags: ["Locals", "Variables", "DRY"],
    search: "locals local variables dry reuse expressions naming repeating code internal centralize flattening dynamic maps vpc subnets",
    sections: [
      { type: "lead", text: "While <code>variable</code> blocks define external input parameters that module consumers can override, <code>locals</code> act as an internal module scratchpad. They are computed dynamically, cannot be overridden directly, and are vital for evaluating complex data structures or flattening nested maps for resource iteration." },
      {
        type: "grid",
        items: [
          { title: "Internal Scope", text: "Locals are hidden from parent or child modules. They are scoped entirely within the module folder where they are defined, enforcing strict encapsulation." },
          { title: "Dynamic Calculations", text: "You can assign dynamic computations to locals using built-in functions, merge loops, or calculations referencing inputs and resources." },
          { title: "DRY Refactoring", text: "Keep HCL clean. Move repeated concatenations, regional string lookups, or common metadata tagging configurations to centralized locals." },
          { title: "Prevention of Circulars", text: "Terraform evaluates locals lazily. Be careful not to reference a resource in a local if that local is also used to initialize that same resource." }
        ]
      },
      {
        type: "code",
        title: "Dynamic Tag Merges and Computations",
        code: `variable "environment" {
  type    = string
  default = "staging"
}

variable "billing_code" {
  type    = string
  default = "finance-1092"
}

locals {
  # 1. Dynamic string formatting based on environment checks
  name_prefix = "company-corp-\${var.environment}"
  
  # 2. Dynamic map calculations and tags merging
  common_tags = {
    Environment = var.environment
    BillingCode = var.billing_code
    ManagedBy   = "Terraform-VCS"
  }

  # Merges standard company metadata tags with specific application tags
  app_tags = merge(local.common_tags, {
    AppRole   = "web-application-host"
    BackupRun = var.environment == "production" ? "daily" : "weekly"
  })
}

resource "aws_instance" "web" {
  ami           = "ami-12345"
  instance_type = "t3.micro"
  
  # Apply the dynamically computed tags map
  tags = local.app_tags
}`
      },
      {
        type: "code",
        title: "Enterprise Collection Flattening (The VPC-Subnets Pattern)",
        code: `# Scenario: You receive a complex nested map of VPC networks and subnets.
# You need to spin up all subnets in a single 'for_each' block.
# Since 'for_each' requires a flat map, you must flatten the nested map using locals!

variable "network_topology" {
  type = map(object({
    vpc_cidr = string
    subnets  = map(string) # Map of subnet_name => cidr
  }))
  default = {
    primary = {
      vpc_cidr = "10.0.0.0/16"
      subnets  = { "public-1a" = "10.0.1.0/24", "private-1a" = "10.0.2.0/24" }
    }
    secondary = {
      vpc_cidr = "172.16.0.0/16"
      subnets  = { "public-2b" = "172.16.1.0/24", "private-2b" = "172.16.2.0/24" }
    }
  }
}

locals {
  # The Flatten Loop: iterates through parent VPCs, then loops through nested subnets, 
  # returning a flat list of objects.
  flat_subnets_list = flatten([
    for vpc_key, vpc_data in var.network_topology : [
      for sub_key, sub_cidr in vpc_data.subnets : {
        vpc_name    = vpc_key
        subnet_name = sub_key
        cidr        = sub_cidr
      }
    ]
  ])

  # Converts the flat list of objects into a unique-keyed map for 'for_each' consumption
  flat_subnets_map = {
    for item in local.flat_subnets_list : "\${item.vpc_name}-\${item.subnet_name}" => item
  }
  # Result:
  # {
  #   "primary-public-1a"   = { vpc_name = "primary", subnet_name = "public-1a", cidr = "10.0.1.0/24" }
  #   "primary-private-1a"  = { vpc_name = "primary", subnet_name = "private-1a", cidr = "10.0.2.0/24" }
  #   ...
  # }
}

# Now, provision all subnets in one dynamic loop!
resource "aws_subnet" "provisioned_subnets" {
  for_each = local.flat_subnets_map

  # We reference vpc_id, cidr, and tags safely using our flat map keys!
  vpc_id     = aws_vpc.networks[each.value.vpc_name].id
  cidr_block = each.value.cidr
  
  tags = {
    Name = each.key
  }
}`
      },
      { type: "callout", tone: "success", html: "<strong>Summary Syntax Guide:</strong> Declared using the plural <code>locals {}</code> block (where all variable mapping assignments reside), but referenced inside resources using the singular <code>local.variable_name</code> sequence." }
    ]
  },
  {
    id: "eks-cluster",
    num: "26",
    title: "Deploying an EKS Cluster: Architecture & IRSA Setup",
    category: "mynotes",
    description: "Production EKS design guide: VPC tag conventions, control planes, node IAM policies, OIDC provider bindings, and IAM Roles for Service Accounts (IRSA).",
    tags: ["EKS", "Kubernetes", "Architecture", "Security"],
    search: "eks cluster kubernetes architecture control plane worker nodes iam roles vpc subnet deploy oidc irsa alb controller tags addon cni",
    sections: [
      { type: "lead", text: "Pro-tier EKS orchestration goes far beyond spawning master nodes. It requires precise VPC subnet tag labeling for AWS Load Balancer controllers, establishing secure worker IAM policies, and binding an OpenID Connect (OIDC) provider to enable IAM Roles for Service Accounts (IRSA)." },
      { type: "callout", html: "<figure style='margin:0; text-align:center;'><img src='assets/eks-architecture.png' alt='EKS Architecture Diagram' style='max-width: 100%; border-radius: 8px; border: 1px solid #334155; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'><figcaption style='margin-top: 8px; font-size: 0.875rem; color: #94a3b8;'>AWS EKS Production VPC & Pod Security Identity Architecture</figcaption></figure>" },
      {
        type: "grid",
        items: [
          { title: "1. Load Balancer Tags", text: "Subnets must carry standard Kubernetes tags: <code>kubernetes.io/role/elb = 1</code> (for public subnets) and <code>kubernetes.io/role/internal-elb = 1</code> (for private subnets). Without these, ALB controller ingress creation fails." },
          { title: "2. IAM Roles for Service Accounts (IRSA)", text: "Ditch static node access profiles. Bind Kubernetes Service Accounts to AWS IAM Roles via OpenID Connect (OIDC) federated providers to scope access down to the pod level." },
          { title: "3. Cluster IAM Scopes", text: "EKS Control Plane requires EKS-specific AWS roles. Nodes require a dedicated three-tier policy bundle: WorkerNodePolicy, CNI_Policy, and RegistryReadOnly." },
          { title: "4. EKS Core Add-ons", text: "Use declarative <code>aws_eks_addon</code> blocks to bootstrap core cluster components: vpc-cni, kube-proxy, and coredns, ensuring stable network topologies." }
        ]
      },
      {
        type: "code",
        title: "VPC Subnet Tag Standards for ALB Placement",
        code: `# =======================================================
# PRODUCTION NETWORKING: ALB/ELB Dynamic Subnet Tagging
# =======================================================
resource "aws_subnet" "public_1a" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "us-west-2a"
  map_public_ip_on_launch = true

  tags = {
    Name                                      = "eks-public-us-west-2a"
    "kubernetes.io/cluster/my-eks-cluster"    = "shared"
    # CRITICAL: Instructs ALB controller to provision internet-facing ALBs here
    "kubernetes.io/role/elb"                  = "1"
  }
}

resource "aws_subnet" "private_1a" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.10.0/24"
  availability_zone = "us-west-2a"

  tags = {
    Name                                      = "eks-private-us-west-2a"
    "kubernetes.io/cluster/my-eks-cluster"    = "shared"
    # CRITICAL: Instructs ALB controller to provision internal ALBs here
    "kubernetes.io/role/internal-elb"         = "1"
  }
}`
      },
      {
        type: "code",
        title: "Cluster Control Plane & IAM Setup",
        code: `# EKS Cluster IAM Role
resource "aws_iam_role" "eks_master" {
  name = "eks-master-control-plane-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = { Service = "eks.amazonaws.com" }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "eks_master_policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.eks_master.name
}

# The Managed Master Cluster
resource "aws_eks_cluster" "main" {
  name     = "my-eks-cluster"
  role_arn = aws_iam_role.eks_master.arn

  vpc_config {
    endpoint_private_access = true  # Enables internal API server endpoint access
    endpoint_public_access  = true  # Enables external API access (IP whitelist recommended)
    subnet_ids              = [aws_subnet.public_1a.id, aws_subnet.private_1a.id]
  }

  depends_on = [aws_iam_role_policy_attachment.eks_master_policy]
}`
      },
      {
        type: "code",
        title: "Establishing the OIDC Federated Provider (IRSA)",
        code: `# Fetch TLS certificate of the cluster's OIDC issuer URL
data "aws_partition" "current" {}

data "tls_certificate" "eks" {
  url = aws_eks_cluster.main.identity[0].oidc[0].issuer
}

# Configure OIDC identity provider in IAM
resource "aws_iam_openid_connect_provider" "eks" {
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = [data.tls_certificate.eks.certificates[0].sha1_fingerprint]
  url             = aws_eks_cluster.main.identity[0].oidc[0].issuer
}

# Example IAM Role bound to a Kubernetes Service Account (IRSA)
# This permits Pods running as 'aws-load-balancer-controller' to assume this role!
resource "aws_iam_role" "alb_controller" {
  name = "eks-alb-controller-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Federated = aws_iam_openid_connect_provider.eks.arn
      }
      Action = "sts:AssumeRoleWithWebIdentity"
      Condition = {
        StringEquals = {
          # Bind OIDC target to the exact namespace and service account name
          "\${replace(aws_iam_openid_connect_provider.eks.url, "https://", "")}:sub" = "system:serviceaccount:kube-system:aws-load-balancer-controller"
        }
      }
    }]
  })
}`
      },
      {
        type: "code",
        title: "Managed Workers Node Group & Dedicated IAM",
        code: `# Node Group IAM Role
resource "aws_iam_role" "workers" {
  name = "eks-worker-nodes-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = { Service = "ec2.amazonaws.com" }
    }]
  })
}

# Standard Three-Tier Worker Policies Bundle
resource "aws_iam_role_policy_attachment" "workers_node" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
  role       = aws_iam_role.workers.name
}

resource "aws_iam_role_policy_attachment" "workers_cni" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
  role       = aws_iam_role.workers.name
}

resource "aws_iam_role_policy_attachment" "workers_registry" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.workers.name
}

# Node group execution
resource "aws_eks_node_group" "standard_workers" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "standard-workers-group"
  node_role_arn   = aws_iam_role.workers.arn
  subnet_ids      = [aws_subnet.private_1a.id] # Keep nodes in private subnets!

  scaling_config {
    desired_size = 2
    max_size     = 5
    min_size     = 1
  }

  instance_types = ["t3.medium"]

  depends_on = [
    aws_iam_role_policy_attachment.workers_node,
    aws_iam_role_policy_attachment.workers_cni,
    aws_iam_role_policy_attachment.workers_registry
  ]
}`
      },
      { type: "callout", tone: "warn", html: "<strong>FinOps Warning:</strong> Deploying a multi-AZ cluster costs roughly $72/month just for the EKS control plane, plus EC2 fees and NAT Gateway data processing charges ($30-$40/each). Always ensure you run <code>terraform destroy</code> in dev sandboxes to prevent massive unexpected cloud bills!" }
    ]
  },
  {
    id: "terraform-cicd",
    num: "27",
    title: "Terraform CI/CD Pipeline & DevOps Architecture",
    category: "mynotes",
    description: "Enterprise GitOps design: OIDC secretless cloud authentication, S3 state backend locking, static analysis scans, and production GitHub Actions pipelines.",
    tags: ["CI/CD", "DevOps", "Architecture", "GitOps"],
    search: "cicd pipeline devops architecture github actions tfsec tflint approval state backend s3 dynamodb oidc checkov",
    sections: [
      { type: "lead", text: "In enterprise environments, executing <code>terraform apply</code> locally is strictly banned. GitOps pipelines ensure that infrastructure is updated only after code has been formatted, scanned for security vulnerabilities, planned successfully, peer-reviewed via Pull Requests, and authenticated securely using temporary OIDC credentials." },
      { type: "callout", html: "<figure style='margin:0; text-align:center;'><img src='assets/terraform-cicd.png' alt='Terraform CI/CD Architecture Diagram' style='max-width: 100%; border-radius: 8px; border: 1px solid #334155; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'><figcaption style='margin-top: 8px; font-size: 0.875rem; color: #94a3b8;'>DevOps CI/CD Automation, Remote Backend Locking, & SecOps Workflow</figcaption></figure>" },
      {
        type: "grid",
        items: [
          { title: "1. OIDC Federated Auth", text: "Ditch static keys! OIDC allows GitHub Actions to assume an AWS IAM Role dynamically using short-lived tokens, eliminating credentials leakage risks entirely." },
          { title: "2. Backend & Dynamo Locking", text: "Configure a remote backend using AWS S3 for secure state storage, combined with a DynamoDB table for active locking to prevent concurrent runs from corrupting state." },
          { title: "3. SecOps Code Scanning", text: "Enforce standard quality gates in CI: running <code>tflint</code> for structural best practices, <code>terraform fmt</code> for layout, and <code>tfsec</code> or <code>checkov</code> for security scans." },
          { title: "4. Dynamic PR Comments", text: "Automate reviews by using CI scripts to post the formatted output of <code>terraform plan</code> directly as a markdown comment on the open Pull Request." }
        ]
      },
      {
        type: "code",
        title: "Enterprise Remote Backend Configuration (S3 + DynamoDB Locking)",
        code: `# =======================================================
# BACKEND PLATFORM: Remote State & Distributed Lock table
# =======================================================
terraform {
  backend "s3" {
    bucket         = "corporate-production-tfstate-bucket"
    key            = "core-infra/vpc/terraform.tfstate"
    region         = "us-west-2"
    encrypt        = true
    # DynamoDB table must have 'LockID' as the Partition Key (String)
    dynamodb_table = "corporate-terraform-state-locks"
  }
}`
      },
      {
        type: "code",
        title: "Enterprise GitHub Actions GitOps Pipeline (CI/CD)",
        code: `name: "Terraform GitOps Automation"

on:
  pull_request:
    branches: [ "main" ]
  push:
    branches: [ "main" ]

# Permissions required for AWS OIDC authentication and PR commenting
permissions:
  id-token: write      # Required for requesting the JWT OIDC token
  contents: read       # Required to checkout code
  pull-requests: write # Required to post planning outputs as PR comments

jobs:
  gitops_pipeline:
    name: "Validate, Scan, Plan & Apply"
    runs-on: ubuntu-latest
    
    steps:
      - name: "Checkout Source Code"
        uses: actions/checkout@v3

      # =======================================================
      # AWS OIDC AUTHENTICATION (No passwords or secrets stored!)
      # =======================================================
      - name: "Authenticate to AWS using OIDC"
        uses: aws-actions/configure-aws-credentials@v2
        with:
          role-to-assume: "arn:aws:iam::123456789012:role/GitHubActionsWorkflowsExecutionRole"
          aws-region: "us-west-2"
          audience: "sts.amazonaws.com"

      - name: "Setup Terraform CLI Client"
        uses: hashicorp/setup-terraform@v2
        with:
          terraform_version: "1.5.7"

      - name: "Standard 1: Format Checks"
        run: terraform fmt -check

      - name: "Initialize Workspace & Remote Backend"
        run: terraform init

      - name: "Standard 2: Static Code Linting"
        run: |
          curl -s https://raw.githubusercontent.com/terraform-linters/tflint/master/install_linux.sh | bash
          tflint --init
          tflint -f compact

      - name: "Standard 3: Security Vulnerability Scans"
        uses: aquasecurity/tfsec-action@v1.0.0
        with:
          soft_fail: false # CI fails if critical vulnerabilities are found

      # =======================================================
      # THE PLAN PHASE (Executes on Pull Requests only)
      # =======================================================
      - name: "Generate Execution Plan"
        id: plan
        if: github.event_name == 'pull_request'
        run: terraform plan -no-color -out=tfplan.binary
        # We capture stdout to write comments

      - name: "Post Plan Output to Pull Request Comments"
        uses: actions/github-script@v6
        if: github.event_name == 'pull_request'
        with:
          script: |
            const output = \`#### Terraform Format: 🟢 Success
            #### Terraform Initialization: 🟢 Success
            #### tflint Analysis: 🟢 Success
            #### Security Scan (tfsec): 🟢 Success
            
            <details><summary>Show Detailed Plan Output</summary>
            
            \`\`\`terraform
            \${{ steps.plan.outputs.stdout }}
            \`\`\`
            
            </details>\`;
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: output
            })

      # =======================================================
      # THE APPLY PHASE (Executes on Push to Main only)
      # =======================================================
      - name: "Apply Infrastructure Changes"
        if: github.ref == 'refs/heads/main' && github.event_name == 'push'
        run: terraform apply -auto-approve`
      },
      { type: "callout", tone: "success", html: "<strong>Industry Best Practice:</strong> Never grant your CI pipeline administrator rights in AWS. Instead, apply the principle of least privilege: give the execution role only the exact permissions needed to build the target infrastructure, and enforce peer reviews via branch protection rules so that merges to <code>main</code> are fully scrutinized." }
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
