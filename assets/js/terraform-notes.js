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
    description: "Master Terraform's core mechanics: declarative state reconciliation, Directed Acyclic Graph (DAG) generation, and Immutable Infrastructure paradigms.",
    tags: ["IaC", "HashiCorp", "Architecture", "DevOps"],
    search: "terraform infrastructure as code iac declarative hashicorp providers cloud aws DAG immutable mutable reconciliation engine",
    sections: [
      { type: "lead", text: "Terraform is HashiCorp's flagship open-source Infrastructure as Code (IaC) engine. Rather than executing manual shell commands, Terraform evaluates HCL (HashiCorp Configuration Language) files, compiles resource relationships into a Directed Acyclic Graph (DAG), and orchestrates REST API operations against cloud providers to synchronize reality with your declared desired state." },
      {
        type: "grid",
        items: [
          { title: "Declarative Paradigm", text: "You define the final state of resources (e.g. 'this VM must exist with 16GB RAM'). Terraform's core engine figures out the exact API creation/ordering steps, sparing you from scripting execution paths." },
          { title: "Immutable Infrastructure", text: "Instead of modifying running servers in-place (mutable patching), Terraform destroys and provisions fresh, versioned resources. This eliminates 'configuration drift' completely across environments." },
          { title: "State Reconciliation", text: "Terraform continuously compares the desired state (your HCL code), the known state (stored in the <code>.tfstate</code> mapping file), and the actual state (real cloud resources) to bridge the delta." },
          { title: "DAG Graph Scheduling", text: "During the plan phase, HCL is parsed into a Directed Acyclic Graph. This maps parent-child dependencies so non-dependent resource groups can be spawned in parallel across multi-threaded pipelines." }
        ]
      },
      {
        type: "table",
        headers: ["Platform Tool", "Language Syntax", "Infrastructure Architecture Model", "State & Tracking Mechanism"],
        rows: [
          ["Terraform", "Declarative HCL", "Immutable (recreate objects upon changes)", "Managed state (.tfstate) mapping keys to cloud IDs"],
          ["Ansible / Chef", "Imperative / Declarative YAML", "Mutable (patch and run scripts in-place)", "Stateless; runs directly on targets via SSH/Agent"],
          ["Pulumi", "Imperative (Python, JS, Go)", "Immutable (recreates resources)", "Managed state (Pulumi Service or S3 backend)"],
          ["AWS CloudFormation", "Declarative JSON/YAML", "Immutable (AWS resource stacks)", "AWS-managed internal database (AWS-locked)"]
        ]
      },
      { type: "callout", tone: "success", html: "<strong>Core Architectural Takeaway:</strong> Terraform's superpower lies in its declarative state reconciliation. It guarantees that regardless of how many times you run the execution plan, the actual cloud state will converge to match your code exactly, making infrastructure fully predictable and self-healing." }
    ]
  },
  {
    id: "iac",
    num: "02",
    title: "Infrastructure as Code & Drift Management",
    category: "foundation",
    description: "Deep dive into Infrastructure as Code mechanics: configuration drift detection, GitOps workflows, and out-of-band change reconciliations.",
    tags: ["IaC", "Drift", "GitOps", "Workflow"],
    search: "iac infrastructure as code desired current state drift declarative imperative console automation gitops validation audit",
    sections: [
      { type: "lead", text: "Infrastructure as Code (IaC) is the practice of managing cloud environments through machine-readable definition files instead of point-and-click console modifications. This enables standard software engineering practices (version control, automated testing, peer reviews) to govern infrastructure lifecycle management." },
      {
        type: "grid",
        items: [
          { title: "1. The Desired State", text: "Defined explicitly in HCL files (e.g. <code>variables.tf</code>, <code>main.tf</code>). Represents the single source of truth for how infrastructure should be structured." },
          { title: "2. The Known State", text: "The local or remote <code>.tfstate</code> file. Maps your logical resource blocks to physical cloud IDs and tracks resource attributes." },
          { title: "3. The Actual State", text: "The physical resources running inside your AWS, GCP, or Azure account, queried live during the plan stage." },
          { title: "4. Out-of-Band Drift", text: "Changes made directly in the cloud console by users bypassing Terraform. Terraform detects this delta and offers to revert it." }
        ]
      },
      {
        type: "table",
        headers: ["IaC Concept", "Technical Definition", "System Engineering Value"],
        rows: [
          ["Idempotency", "The guarantee that running the same script N times produces the exact same result.", "Prevents resource duplication and accidental configuration crashes in target environments."],
          ["Drift Detection", "Analyzing delta between HCL config and actual cloud resource parameters.", "Enforces continuous compliance by alerting engineers to unauthorized changes."],
          ["GitOps Pipeline", "Using Git repositories as the definitive source of truth for infrastructure.", "Enables full auditable history, version rollback capabilities, and strict access controls via Pull Requests."]
        ]
      },
      { type: "callout", tone: "warn", html: "<strong>Security Enforcement:</strong> In production systems, all console access should be strictly write-blocked (Read-Only IAM policies). All write actions must go through GitOps pipelines running Terraform. This prevents out-of-band changes entirely and maintains a pristine audit log in Git." }
    ]
  },
  {
    id: "install",
    num: "03",
    title: "Installation & Enterprise Credentials Setup",
    category: "foundation",
    description: "Install Terraform cross-platform, manage CLI versions with tfenv/asdf, and establish secure secretless IAM AWS SSO sessions.",
    tags: ["CLI", "AWS", "Setup", "Version Control", "Security"],
    search: "terraform install setup aws credentials configure environment variables cli ubuntu debian rhel centos amazon linux fedora macos homebrew windows chocolatey winget binary tfenv asdf sso iam single sign-on security OIDC",
    sections: [
      { type: "lead", text: "Installing the Terraform binary is only step one. In modern engineering teams, developers manage multiple versions using tools like <code>tfenv</code> or <code>asdf</code>, and authenticate to AWS securely via short-lived AWS IAM Identity Center (SSO) tokens, completely avoiding the security risk of static AWS Access Keys." },
      {
        type: "table",
        headers: ["Platform Operating System", "Enterprise Package Manager", "Advanced Setup & Version Manager Option"],
        rows: [
          ["Ubuntu / Debian / Mint", "APT (HashiCorp GPG Verified Repo)", "tfenv (Version switcher via CLI)"],
          ["RHEL / CentOS / Rocky Linux / AL2023", "YUM / DNF (Official RPM Mirror)", "tfenv / asdf-vm"],
          ["macOS (Apple Silicon & Intel)", "Homebrew Tap (hashicorp/tap/terraform)", "brew install tfenv"],
          ["Windows 10 / 11", "Chocolatey (choco) or Winget client", "Manual zip / Path environment variable setting"]
        ]
      },
      {
        type: "code",
        title: "Enterprise Version Control: Using tfenv",
        code: `# 1. Clone tfenv utility and add to system PATH
git clone --depth=1 https://github.com/tfutils/tfenv.git ~/.tfenv
echo 'export PATH="$HOME/.tfenv/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# 2. List remote available versions in registry
tfenv list-remote

# 3. Install specific Terraform releases
tfenv install 1.5.7
tfenv install 1.8.5

# 4. Toggle active workspace versions instantly!
tfenv use 1.5.7
terraform version`
      },
      {
        type: "code",
        title: "Platform Commands: Linux & macOS Packages",
        code: `# Ubuntu/Debian Official Setup:
wget -O- https://apt.releases.hashicorp.com/gpg | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install -y terraform

# RHEL/CentOS/Rocky Official Setup:
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
sudo yum install -y terraform

# macOS Official Setup via Homebrew:
brew tap hashicorp/tap
brew install hashicorp/tap/terraform`
      },
      {
        type: "code",
        title: "Platform Commands: Windows CLI setups",
        code: `# Windows PowerShell (Run as Administrator):
# Using Chocolatey package manager:
choco install terraform --version=1.8.5

# Using Winget package manager:
winget install --id Hashicorp.Terraform -e --version 1.8.5`
      },
      {
        type: "code",
        title: "Secure AWS Authentication: IAM Identity Center (SSO)",
        code: `# =======================================================
# SECURE WORKSPACE CONFIGURATION: SSO Secretless Session
# =======================================================
# Step 1: Configure AWS CLI SSO Profile Integration
aws configure sso --profile corporate-dev

# AWS CLI will open a browser window asking you to authenticate.
# After successful SSO, login token is saved locally to ~/.aws/sso/cache/

# Step 2: In your shell, authenticate dynamically
aws sso login --profile corporate-dev

# Step 3: Export environment profile variables so Terraform picks them up
export AWS_PROFILE="corporate-dev"
export AWS_DEFAULT_REGION="us-west-2"

# Verify active AWS identity (confirming short-lived session)
aws sts get-caller-identity`
      },
      { type: "callout", tone: "warn", html: "<strong>Security Enforcement:</strong> Storing static AWS access keys inside <code>~/.aws/credentials</code> is a critical vulnerability. If your laptop is compromised or keys are pushed to git, attackers own your cloud. Enforce AWS SSO (with 1-hour session limits) to secure cloud assets." }
    ]
  },
  {
    id: "hcl",
    num: "04",
    title: "HCL Lexical Syntax & Type Systems",
    category: "language",
    description: "Deep dive into HashiCorp Configuration Language (HCL2) block anatomy, maps, structural type constraints, and lexical parameters.",
    tags: ["HCL", "Syntax", "Lexical", "Typing"],
    search: "hcl syntax terraform block anatomy argument expression interpolation comments maps resource variable types systems constraint object",
    sections: [
      { type: "lead", text: "HCL2 (HashiCorp Configuration Language 2) is a declarative configuration language. It is optimized to map human-readable blocks directly into structured JSON schemas for cloud API payloads. A valid HCL block consists of a Type, zero or more Block Labels, and a Body containing arguments and nested sub-blocks." },
      {
        type: "code",
        title: "HCL Block Anatomy under the Microscope",
        code: `# Anatomy of a Resource Block:
# Type:      "resource"
# Label 1:   "aws_instance" (Maps to the Cloud Provider Schema)
# Label 2:   "web_node" (Logical internal namespace inside state)
# Body:      Enclosed in curly braces { ... } containing arguments

resource "aws_instance" "web_node" {
  # Argument (Key = Value structure)
  ami           = "ami-05fa46471b02db0ce"
  instance_type = "t3.micro"

  # Nested Block: "tags" block mapping to key-value objects
  tags = {
    Name = "web-production"
    Env  = "prod"
  }
}`
      },
      {
        type: "table",
        headers: ["HCL Element", "Grammatical Rules & Syntax", "Under-the-Hood Purpose"],
        rows: [
          ["Block Type", "Predefined keyword (e.g. resource, variable, output, data, locals, provider, terraform).", "Defines the scope and configuration lifecycle engine for that block."],
          ["Block Labels", "Strings enclosed in double quotes. Labels count varies by block type (resource has 2, variable has 1).", "Establishes structural addresses so resources can refer to each other."],
          ["Arguments", "Key-value binding using the equal sign (=). Key is string identifier; Value is HCL expression.", "Configures individual schema properties defined by the provider plugin."],
          ["Comments", "Three syntax patterns allowed: # (single line), // (single line), /* ... */ (multi-line blocks).", "Enables developer documentation and self-documenting configurations."]
        ]
      },
      {
        type: "code",
        title: "Primitive & Structural HCL Types System",
        code: `# Typed configurations enforce strict API schemas and block compilation bugs:
variable "complex_config" {
  type = object({
    project_name = string
    instances_count = number
    enable_backup   = boolean
    subnets_cidr    = list(string)
    custom_metadata = map(string)
  })

  default = {
    project_name    = "EnterpriseIaC"
    instances_count = 3
    enable_backup   = true
    subnets_cidr    = ["10.0.1.0/24", "10.0.2.0/24"]
    custom_metadata = {
      Owner      = "DevOpsSec"
      CostCenter = "90210"
    }
  }
}`
      },
      { type: "callout", tone: "success", html: "<strong>Syntactic Sugar:</strong> In HCL, keys inside maps do not require quotes as long as they are simple identifiers starting with a letter. For example, writing <code>Name = \"web\"</code> is cleaner and preferred over <code>\"Name\" = \"web\"</code>." }
    ]
  },
  {
    id: "providers",
    num: "05",
    title: "Providers & Multi-Region Aliasing",
    category: "language",
    description: "Deep dive into provider plugin download mechanics, cryptographic lock hashes (.terraform.lock.hcl), and multi-region provider aliases.",
    tags: ["Provider", "AWS", "Plugin", "Security", "Multi-Region"],
    search: "providers provider plugin aws required providers version init registry hashicorp dependency lock hcl cryptographic hashes aliases",
    sections: [
      { type: "lead", text: "Providers are the structural foundation of Terraform. Each provider is an independent, statically-compiled binary distributed via the HashiCorp Registry. They act as local proxy clients: converting HCL blocks directly into authenticated REST API calls against platforms like AWS, GCP, Cloudflare, or Kubernetes." },
      {
        type: "grid",
        items: [
          { title: "Plugin Mechanics", text: "When running <code>terraform init</code>, plugins are pulled and indexed locally in the path: <code>.terraform/providers/registry.terraform.io/hashicorp/aws/</code>." },
          { title: "Dependency Lock File", text: "The <code>.terraform.lock.hcl</code> file stores the exact version and cryptographic SHA checksum hashes (<code>zh:</code> and <code>h1:</code>) to prevent dependency poisoning attacks." },
          { title: "Provider Aliasing", text: "By default, a provider block covers all resources. Specifying the <code>alias</code> attribute enables multi-region provisioning (e.g. Route53, ACM, and EC2) under one run." },
          { title: "Custom Registry Configuration", text: "For restricted offline air-gapped secure nodes, developers modify <code>.terraformrc</code> to map provider paths directly to local storage mirrors." }
        ]
      },
      {
        type: "code",
        title: "Multi-Region Provider Aliasing (AWS)",
        code: `# =======================================================
# CORE PROVIDERS: Multi-region SSL & VPC Orchestration
# =======================================================
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# 1. Primary Default Provider (US West Region)
provider "aws" {
  region = "us-west-2"
}

# 2. Secondary Provider (US East Region for CloudFront SSL ACM)
provider "aws" {
  alias  = "us_east_acm"
  region = "us-east-1"
}

# 3. Reference resources using targeted provider aliases
resource "aws_acm_certificate" "global_ssl" {
  provider          = aws.us_east_acm # Directs resource creation to us-east-1!
  domain_name       = "api.corporate.com"
  validation_method = "DNS"
}`
      },
      {
        type: "code",
        title: "The Cryptographic Lock File (.terraform.lock.hcl)",
        code: `# This file is auto-generated by "terraform init".
# Commit this file to git to freeze exact platform checksums!
provider "registry.terraform.io/hashicorp/aws" {
  version     = "5.45.0"
  constraints = "~> 5.0"
  hashes = [
    "h1:8xT6r8BvW5k9kFm6YJ...",
    "zh:a5b6c7d8e9f0123456..."
  ]
}`
      },
      { type: "callout", tone: "success", html: "<strong>Upgrade Policy:</strong> Run <code>terraform init -upgrade</code> to fetch the latest provider minor versions and refresh the lock file hashes securely whenever you want to bump version dependencies." }
    ]
  },
  {
    id: "resources",
    num: "06",
    title: "Resource Lifecycle & Dependency Management",
    category: "language",
    description: "Orchestrate resource lifecycles, construct explicit dependency graphs, and integrate local-exec/remote-exec provisioner hooks.",
    tags: ["Resources", "Lifecycle", "Dependencies", "Provisioners"],
    search: "resources aws instance s3 bucket security group dependency graph resource address implicit explicit depends_on local-exec remote-exec triggers null_resource",
    sections: [
      { type: "lead", text: "Resources are the core execution units of Terraform. Every resource block registers a cloud target in the state file and handles CRUD (Create, Read, Update, Delete) operations. Understanding implicit vs explicit dependency structures and the execution patterns of provisioner hooks is vital to avoiding broken plans." },
      {
        type: "table",
        headers: ["Dependency Strategy", "Execution Syntax Example", "Under-the-Hood Dependency Graph Impact"],
        rows: [
          ["Implicit Dependency", "<code>subnet_id = aws_subnet.public.id</code>", "Terraform parses references automatically and schedules the subnet creation before the VM boot sequence."],
          ["Explicit Dependency", "<code>depends_on = [aws_iam_role_policy_attachment.eks_policy]</code>", "Used when no direct attribute reference exists but resources rely on external rules (like IAM authorization propagation)."],
          ["Dynamic Provisioners", "<code>provisioner \"local-exec\" { command = \"...\" }</code>", "Executes shell commands locally or remotely after resource creation. Use sparingly as it bypasses state tracking."]
        ]
      },
      {
        type: "code",
        title: "Advanced Resource Orchestration with Explicit Hooks",
        code: `resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id # Implicit dependency: VPC created first!
  cidr_block = "10.0.1.0/24"
}

# Null Resource with local-exec triggering on subnet updates
resource "null_resource" "network_diagnostic" {
  triggers = {
    subnet_id = aws_subnet.public.id # Triggers script rerun if subnet ID changes!
  }

  provisioner "local-exec" {
    # Run script locally on the CI runner
    command = "echo 'Subnet Provisioned successfully at: ' $(date) >> networking-log.txt"
  }

  depends_on = [aws_subnet.public] # Explicit execution sequencing
}`
      },
      { type: "callout", tone: "warn", html: "<strong>Provisioner Warning:</strong> Local-exec and remote-exec provisioners are an anti-pattern. If a provisioner fails, the resource is marked as <strong>'tainted'</strong> and will be completely destroyed and recreated on the next apply run. Always prefer cloud-init user_data scripts for VM bootstrapping." }
    ]
  },

  {
    id: "variables",
    num: "07",
    title: "Variables, Dynamic Locals & Sensitive Outputs",
    category: "language",
    description: "Input variables validation filters (regex), secure local values calculations, and masking sensitive output secrets.",
    tags: ["Variables", "Outputs", "Locals", "Security", "Validation"],
    search: "variables outputs locals tfvars var file parameterize terraform values validation sensitive regex compound",
    sections: [
      { type: "lead", text: "In enterprise workspaces, raw parameters are strictly validated using regular expressions to block deployment failures before they reach the cloud. Sensitive parameters (like passwords and certificates) must be marked as <code>sensitive = true</code> to prevent them from printing out to CI pipelines or remote console stdout logs." },
      {
        type: "grid",
        items: [
          { title: "Input Variables", text: "External configuration arguments. Supports type constraints, default fallbacks, and multi-condition dynamic validation rule blocks." },
          { title: "Dynamic Locals", text: "Internal module scratchpad variables. Computed dynamically on-the-fly and cannot be overridden by outside module consumers." },
          { title: "Secure Outputs", text: "Exposes resource attributes after deployment. Supports the <code>sensitive = true</code> flag to mask passwords and keys." },
          { title: "Priority Order", text: "Variables resolution priority: Env variables (<code>TF_VAR_x</code>) -> <code>terraform.tfvars</code> -> <code>*.auto.tfvars</code> -> CLI flags (<code>-var</code>)." }
        ]
      },
      {
        type: "code",
        title: "Input Validation, Regex Filtering & Sensitive Outputs",
        code: `# =======================================================
# VARS & VALIDATION: Regex verification and security gates
# =======================================================
variable "environment" {
  type        = string
  description = "Target deployment workspace (dev, staging, or prod only)"

  validation {
    # Check that environment matches exactly one of the three options
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Error: The deployment environment must be exactly dev, staging, or prod."
  }
}

variable "database_password" {
  type        = string
  sensitive   = true # Prevents value from showing up in plan output or stdout!
  description = "Database administrator master credentials password"

  validation {
    # Enforce standard password length check
    condition     = length(var.database_password) >= 12
    error_message = "Error: Corporate security policy requires database passwords to be at least 12 characters long."
  }
}

locals {
  # Calculate dynamic project prefix
  project_prefix = "corporate-\${var.environment}"
  
  # Flatten complex maps for global tag consistency
  global_tags = {
    Environment = var.environment
    ManagedBy   = "Terraform"
    Workspace   = terraform.workspace
  }
}

output "db_connection_string" {
  value     = "mysql://admin:\${var.database_password}@db-host:3306/main"
  sensitive = true # Must match the sensitivity of the source variable!
}`
      },
      {
        type: "code",
        title: "Methods to Feed Variables to Pipelines",
        code: `# Method 1: CLI arguments flag
terraform apply -var="environment=dev"

# Method 2: Enterprise tfvars configuration file
# File: prod.tfvars
environment       = "prod"
database_password = "SuperSecurePassword123!"

# Method 3: Shell environment variables (prefixed with TF_VAR_)
export TF_VAR_environment="staging"
export TF_VAR_database_password="EnvPasswordVar!"`
      },
      { type: "callout", tone: "success", html: "<strong>Pro Tip:</strong> Marking a variable as sensitive only prevents it from being printed to terminal console output; it is still stored as <strong>plain text</strong> inside the <code>.tfstate</code> file. Always encrypt your state backend and limit access to raw state buckets." }
    ]
  },
  {
    id: "data-sources",
    num: "08",
    title: "Data Sources & External Providers",
    category: "language",
    description: "Query live cloud resources, analyze data source execution phases, and query scripts using the External Provider.",
    tags: ["Data Sources", "Lookup", "External", "Lifecycle"],
    search: "data sources aws ami existing infrastructure lookup terraform data block computed external provider bash python run",
    sections: [
      { type: "lead", text: "Data sources let Terraform query APIs or local scripts to fetch configurations that exist outside your current state. They read but never manage. In advanced scenarios, you can use the <code>external</code> provider to execute Python or Bash scripts and parse their JSON outputs dynamically into your Terraform configuration." },
      {
        type: "table",
        headers: ["Execution Phase", "Under-the-Hood Behavior", "Workspace Dependency Impact"],
        rows: [
          ["Plan-Time Querying", "If arguments are hardcoded or statically resolved, Terraform queries the API during <code>terraform plan</code>.", "Lets you preview resource IDs and verify parameters before executing any changes."],
          ["Apply-Time Querying", "If data source arguments rely on a resource that hasn't been created yet, querying is deferred to the apply phase.", "Crucial when you need to fetch subnets, routes, or IPs that are dynamically allocated in the same run."],
          ["External Scripting", "The <code>external</code> data block runs a local executable (e.g. bash/python) and expects JSON returned on stdout.", "Enables complex integrations, like querying active active-directory servers or active vault tokens."]
        ]
      },
      {
        type: "code",
        title: "Live AMI Lookup & Deferred Data Source Run",
        code: `# 1. Statically-queried Data Source (Executes during Plan Phase)
data "aws_ami" "latest_ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical owner ID

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-22.04-amd64-server-*"]
  }
}

# 2. Dynamic AWS Resource Creation
resource "aws_vpc" "new_network" {
  cidr_block = "10.10.0.0/16"
}

# 3. Dynamic Data Source lookup (Executes during Apply Phase because vpc_id depends on new resource!)
data "aws_subnets" "live_lookup" {
  filter {
    name   = "vpc-id"
    values = [aws_vpc.new_network.id] # Deferred until VPC is fully created!
  }
}`
      },
      {
        type: "code",
        title: "Advanced: Querying Shell Scripts via External Provider",
        code: `# The External data source runs an external executable script.
# The script MUST write a valid single-level JSON object to stdout.
data "external" "git_branch" {
  program = ["bash", "\${path.module}/scripts/get-git-info.sh"]
  
  query = {
    target_directory = path.module
  }
}

# Reference script outputs dynamically in your resources!
resource "aws_instance" "web" {
  ami           = data.aws_ami.latest_ubuntu.id
  instance_type = "t3.micro"
  
  tags = {
    GitBranch = data.external.git_branch.result.branch_name
    GitCommit = data.external.git_branch.result.commit_hash
  }
}`
      },
      { type: "callout", tone: "warn", html: "<strong>Execution Guard:</strong> External data sources create cross-platform execution dependencies. If your pipeline runs on a Windows CI runner but your script uses <code>bash</code>, the plan will crash. Always ensure scripts are lightweight and cross-platform (e.g., written in Node or Python)." }
    ]
  },
  {
    id: "state",
    num: "09",
    title: "Surgical State Operations & Refactoring",
    category: "state",
    description: "Surgical state manipulations (state mv, rm, pull/push), recovery protocols, and declarative import workflows.",
    tags: ["State", "tfstate", "Import", "CLI", "Refactoring"],
    search: "state terraform tfstate backup state commands import mv rm show list recovery dynamic import block",
    sections: [
      { type: "lead", text: "The state file (<code>terraform.tfstate</code>) is the brain of your workspace. It acts as an internal lookup table matching HCL resource blocks to live API targets, tracks dependencies, and acts as a cache. Direct raw edits are strictly prohibited. Modifying your state safely requires surgical CLI commands or declarative 1.5+ HCL import blocks." },
      {
        type: "grid",
        items: [
          { title: "Declarative Import", text: "Since Terraform 1.5+, use <code>import {}</code> blocks to bring existing cloud resources under IaC management. Terraform generates the exact target HCL config automatically." },
          { title: "State Refactoring", text: "Use <code>terraform state mv</code> to rename HCL resources in your files without triggering a destructive rebuild of the actual cloud resources." },
          { title: "State Pruning", text: "Use <code>terraform state rm</code> to strip resource definitions from your state. The real cloud resource remains alive, but Terraform stops managing it." },
          { title: "State telemetries", text: "Use <code>terraform state pull > state.json</code> to fetch the active remote state JSON to your local shell for surgical auditing and parsing." }
        ]
      },
      {
        type: "code",
        title: "Declarative Import Block (1.5+ Syntax)",
        code: `# =======================================================
# IMPORT GATES: Declaratively adopting unmanaged assets
# =======================================================
# Step 1: Declare the import block pointing to target physical cloud ID
import {
  to = aws_instance.web_legacy
  id = "i-0987654321fedcba0" # Live AWS EC2 Instance ID
}

# Step 2: Run "terraform plan -generate-config-out=generated_instance.tf"
# Terraform will automatically scan the cloud properties and write
# a standard, perfectly-formatted "generated_instance.tf" file for you!

# Step 3: Verify and complete the import
# Run: terraform apply`
      },
      {
        type: "code",
        title: "Emergency Surgery & Refactoring Commands",
        code: `# 1. List all managed resources in active state
terraform state list

# 2. Rename a resource inside state (prevents recreate on code changes!)
# Syntax: terraform state mv <old_address> <new_address>
terraform state mv aws_instance.web aws_instance.production_web_node

# 3. Stop tracking an old resource without destroying it in AWS
terraform state rm aws_security_group.legacy_rules

# 4. Surgical show details
terraform state show aws_instance.production_web_node`
      },
      {
        type: "table",
        headers: ["State Emergency", "Root Cause Trigger", "Corrective CLI Procedure"],
        rows: [
          ["State File Locked", "A previous apply process crashed unexpectedly, leaving the lock active in DynamoDB.", "Identify the Lock ID from the error stdout and run: <code>terraform force-unlock <LOCK_ID></code>"],
          ["Accidental Deletion in Code", "An engineer deleted a resource block from HCL, but the resource still exists in the cloud.", "Restore the resource block in code, or run <code>terraform state rm</code> to match state with code."],
          ["Split-Brain State Merge Conflicts", "Two developers ran apply concurrently using local state files.", "Emergency restore using the remote state S3 bucket versioning history tab."]
        ]
      },
      { type: "callout", tone: "warn", html: "<strong>Crucial Security Rule:</strong> Never run <code>terraform state push</code> unless you are an administrator recovery specialist. Pushing an outdated state manually can overwrite weeks of cloud configurations, leading to catastrophic infrastructure drift." }
    ]
  },
  {
    id: "remote-state",
    num: "10",
    title: "Remote State & S3 / DynamoDB Backend Locking",
    category: "state",
    description: "Establish highly-secure remote state storage utilizing AWS S3 versioning, custom KMS encryption, and DynamoDB concurrency locks.",
    tags: ["S3", "Backend", "Locking", "Team", "Security", "KMS"],
    search: "remote state s3 backend dynamodb locking state collaboration terraform backend encryption-at-rest KMS multi-account",
    sections: [
      { type: "lead", text: "Local state files lock out teams and leak passwords. To work safely in teams, you must migrate to a remote backend. The standard AWS corporate blueprint utilizes an S3 bucket (with versioning, server-side encryption, and KMS keys) to store state files, combined with a DynamoDB table to lock operations dynamically during active runs." },
      {
        type: "code",
        title: "Secure S3 Backend with DynamoDB Distributed Lock Configuration",
        code: `# =======================================================
# SECURE BACKEND BLOCK: Remote storage and state lock table
# =======================================================
terraform {
  backend "s3" {
    bucket         = "corporate-infrastructure-tfstate"
    key            = "global/vpc/terraform.tfstate"
    region         = "us-west-2"
    encrypt        = true
    # DynamoDB table must have 'LockID' (String) as partition key
    dynamodb_table = "corporate-terraform-state-locks"
  }
}`
      },
      {
        type: "code",
        title: "Terraform Code to Bootstrap the Backend Infrastructure Safely",
        code: `# 1. Provision S3 state storage bucket
resource "aws_s3_bucket" "tf_state" {
  bucket        = "corporate-infrastructure-tfstate"
  force_destroy = false # Prevent accidental deletion of history!
}

# 2. Enable bucket versioning (allows recovery of state history!)
resource "aws_s3_bucket_versioning" "enabled" {
  bucket = aws_s3_bucket.tf_state.id
  versioning_configuration {
    status = "Enabled"
  }
}

# 3. Enforce strong AES-256 Server-Side Encryption (SSE)
resource "aws_s3_bucket_server_side_encryption_configuration" "sse" {
  bucket = aws_s3_bucket.tf_state.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# 4. Provision DynamoDB table for state locking
resource "aws_dynamodb_table" "tf_locks" {
  name         = "corporate-terraform-state-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID" # Mandatory key name for state locking!

  attribute {
    name = "LockID"
    type = "S"
  }
}`
      },
      { type: "callout", tone: "success", html: "<strong>Migration Procedure:</strong> When migrating from local to S3 remote state, place the <code>backend \"s3\" {}</code> block inside your code and run <code>terraform init</code>. Terraform will prompt: <i>'Do you want to copy existing state to the new backend?'</i> type <strong>yes</strong> to safely migrate history." }
    ]
  },
  {
    id: "workspaces",
    num: "11",
    title: "CLI Workspaces vs Multi-Directory Architecture",
    category: "state",
    description: "Compare Terraform CLI workspaces against multi-directory structures, map S3 paths, and implement dynamic instance sizing maps.",
    tags: ["Workspace", "Environments", "State", "Architecture"],
    search: "workspaces workspace dev staging prod separate state terraform environments multi-account directories layout terragrunt",
    sections: [
      { type: "lead", text: "Terraform Workspaces allow you to provision completely isolated states from a single HCL codebase. When a workspace is active, Terraform automatically prefixes your remote state path (e.g. mapping to <code>env:/prod/global/vpc/terraform.tfstate</code> in S3). While CLI workspaces are perfect for testing multiple environments dynamically, enterprise production architectures generally prefer separate physical directories to enforce strict IAM access control barriers." },
      {
        type: "grid",
        items: [
          { title: "CLI Workspaces", text: "A single HCL directory where states are toggleable using <code>terraform workspace select</code>. Perfect for testing branch feature sets." },
          { title: "Multi-Directory Layout", text: "Separate physical subdirectories (e.g. <code>environments/dev/</code> and <code>environments/prod/</code>). Enforces strong boundary isolation." },
          { title: "S3 Key Path mapping", text: "In S3, workspace states are stored isolated under <code>env:/<workspace_name>/path/to/file.tfstate</code>, keeping them safe from collision." },
          { title: "Workspace Variable maps", text: "Use map lookups based on the built-in variable <code>terraform.workspace</code> to dynamically size instances and subnets." }
        ]
      },
      {
        type: "code",
        title: "Workspace CLI Management Commands",
        code: `# 1. List all local/remote workspaces
terraform workspace list

# 2. Create a new environment workspace
terraform workspace new staging

# 3. Switch active workspace to prod
terraform workspace select prod

# 4. View current active workspace name
terraform workspace show`
      },
      {
        type: "code",
        title: "Dynamic Resource Scaling via Workspace Mapping",
        code: `# =======================================================
# SCALE MAPS: Dynamic sizing matching workspace target
# =======================================================
locals {
  # Define instance sizes mapped directly to the workspace name
  instance_sizes = {
    default = "t3.micro"
    dev     = "t3.micro"
    staging = "t3.medium"
    prod    = "m5.large"
  }

  # Select size dynamically
  active_instance_type = lookup(local.instance_sizes, terraform.workspace, "t3.micro")
}

resource "aws_instance" "app_server" {
  ami           = "ami-05fa46471b02db0ce"
  instance_type = local.active_instance_type

  tags = {
    Name        = "web-app-\${terraform.workspace}"
    Environment = terraform.workspace
    Workspace   = terraform.workspace
  }
}`
      },
      { type: "callout", tone: "warn", html: "<strong>Security Warning:</strong> CLI workspaces share the exact same backend credentials. An engineer with access to run a plan in the 'dev' workspace technically has full access to the S3 bucket housing the 'prod' state! For production workloads, always isolate environments into distinct directories with separated AWS IAM Accounts." }
    ]
  },
  {
    id: "modules",
    num: "12",
    title: "Reusable Module Architecture & DRY Patterns",
    category: "advanced",
    description: "Construct structural, reusable child modules, configure Git-tagged remote sources, and establish secure module boundaries.",
    tags: ["Modules", "Reuse", "DRY", "Architecture"],
    search: "modules module source registry reusable vpc ec2 dry terraform variables outputs subdirectories version tags git",
    sections: [
      { type: "lead", text: "A Terraform module is simply a directory containing HCL files. Every configuration has at least one root module (where you run apply). By wrapping repetitive configurations into dedicated child modules, you enforce DRY (Don't Repeat Yourself) architecture, establish clean APIs via variables/outputs, and separate security domains across the enterprise." },
      {
        type: "code",
        title: "Standard Enterprise Child Module Layout",
        code: `# Clean directory separation for an EC2 compute child module:
# path: ./modules/secure_compute/
# ├── main.tf        -> Core resources (VM, NIC, Disk)
# ├── variables.tf   -> Inbound inputs (AMI, size, subnet ID)
# └── outputs.tf     -> Outbound structural properties (Private IP, Host ID)

# Content: ./modules/secure_compute/main.tf
resource "aws_instance" "vm" {
  ami           = var.ami_id
  instance_type = var.instance_type
  subnet_id     = var.subnet_id
}

# Content: ./modules/secure_compute/variables.tf
variable "ami_id" { type = string }
variable "instance_type" { type = string; default = "t3.micro" }
variable "subnet_id" { type = string }

# Content: ./modules/secure_compute/outputs.tf
output "instance_id" { value = aws_instance.vm.id }
output "private_ip" { value = aws_instance.vm.private_ip }`
      },
      {
        type: "code",
        title: "Root Module calling Child Modules (Local & Git Sources)",
        code: `# =======================================================
# ROOT ORCHESTRATOR: Calling compute and network modules
# =======================================================

# 1. Calling local module for developmental iterations
module "network" {
  source     = "./modules/vpc"
  vpc_cidr   = "10.0.0.0/16"
  subnet_qty = 2
}

# 2. Calling enterprise-certified module hosted in private Git repo with strict version tagging!
module "web_servers" {
  # Syntactic pattern: git::https://<url>.git?ref=<tag/commit/branch>
  source        = "git::https://github.com/corporate/terraform-aws-compute.git?ref=v2.4.1"
  ami_id        = "ami-05fa46471b02db0ce"
  instance_type = "t3.medium"
  subnet_id     = module.network.public_subnets[0] # Consuming output from network module!
}`
      },
      {
        type: "table",
        headers: ["Module Metric", "Best Practice standard", "Under-the-Hood Architectural reason"],
        rows: [
          ["Source Versioning", "Always use tagged Git releases (e.g. <code>?ref=v1.2.0</code>) instead of targeting default branches.", "Prevents upstream code changes from silently breaking downstream deployment plans during CI runs."],
          ["Scope Boundaries", "Design high-cohesion, low-coupling modules (e.g. isolate VPC from EKS setup).", "Limits database blast radius; large monolithic modules are impossible to test or safely refactor."],
          ["Implicit Data Passes", "Let modules emit structured outputs; consume those output blocks directly in sibling child module inputs.", "Builds a perfect DAG dependency scheduler, preventing race conditions during resource orchestration."]
        ]
      },
      { type: "callout", tone: "success", html: "<strong>Initial Setup Tip:</strong> Whenever you add or edit a child module's <code>source</code> attribute, you MUST execute <code>terraform init</code> (or <code>terraform get</code>) so the CLI can resolve and index modules locally under the hidden <code>.terraform/modules/</code> repository directory." }
    ]
  },
  {
    id: "lifecycle",
    num: "13",
    title: "Advanced Lifecycles & Pre/Post-Conditions",
    category: "advanced",
    description: "Fine-tune resource lifecycles (prevent_destroy, ignore_changes), and establish defensive HCL code validation utilizing pre/post-conditions.",
    tags: ["Lifecycle", "Safety", "Validation", "Security"],
    search: "lifecycle create before destroy prevent destroy ignore changes terraform safety preconditions postconditions check rules validation",
    sections: [
      { type: "lead", text: "By default, when an argument is updated, Terraform destroys the old resource before creating the new one. Lifecycle rules override this behavior to protect databases, ignore dynamic tags, or validate parameters using run-time <code>precondition</code> and <code>postcondition</code> blocks." },
      {
        type: "code",
        title: "Defensive Lifecycle Block with Pre & Post-conditions",
        code: `# =======================================================
# SECURE LIFECYCLE: Zero-downtime, safety gates, audit hooks
# =======================================================
resource "aws_instance" "prod_db" {
  ami           = "ami-05fa46471b02db0ce"
  instance_type = "m5.large"
  subnet_id     = var.subnet_id

  lifecycle {
    # 1. Spawn new VM before killing the old one (ensures zero downtime!)
    create_before_destroy = true

    # 2. Block accidental "terraform destroy" runs on critical assets!
    prevent_destroy = true

    # 3. Prevent external automated autoscaling changes from causing state drift resets
    ignore_changes = [
      tags["LastAutoScaled"],
      user_data
    ]
  }

  # 4. Precondition: Validates AMI properties BEFORE executing any API actions
  lifecycle {
    precondition {
      condition     = data.aws_ami.ubuntu.id != ""
      error_message = "CRITICAL: The targeted input AMI ID is completely empty or invalid."
    }
  }

  # 5. Postcondition: Validates resource state AFTER creation but BEFORE completing apply
  lifecycle {
    postcondition {
      condition     = self.public_dns != ""
      error_message = "CRITICAL: The instance was deployed but failed to allocate a public DNS endpoint!"
    }
  }
}`
      },
      {
        type: "table",
        headers: ["Lifecycle Hook", "Technical Function", "Strategic Value"],
        rows: [
          ["create_before_destroy", "Inverts resource replacement flow: provisions new item first, then destroys old target.", "Eliminates network downtime for load balancers, DNS entries, and front-end clusters."],
          ["prevent_destroy", "Rejects any plans that trigger the destruction of this resource.", "Protects databases, state S3 storage buckets, and core DNS setups from fat-finger errors."],
          ["ignore_changes", "Ignores manual console modifications made to specific attributes listed.", "Integrates smoothly with external automated systems, like autoscalers or security patchers."],
          ["precondition", "Evaluates HCL assertions before the resource plan executes.", "Blocks bad configurations from starting deployment pipeline runs entirely."],
          ["postcondition", "Evaluates assertions on resource output attributes immediately after creation.", "Acts as an automatic safety abort if the cloud API returned bad or unexpected properties."]
        ]
      },
      { type: "callout", tone: "warn", html: "<strong>Warning:</strong> If you set <code>prevent_destroy = true</code> on a resource, you must manually remove this block from your HCL before you can successfully run <code>terraform destroy</code>. This acts as a highly effective double-confirmation gate." }
    ]
  },
  {
    id: "cli",
    num: "14",
    title: "The Immutable CLI Workflow & Plan Files",
    category: "advanced",
    description: "Master the immutable CLI loop: build and save binary plan files, orchestrate concurrency force-unlocks, and query dependency graphs.",
    tags: ["CLI", "Plan", "Apply", "Workflow", "Security"],
    search: "cli workflow init fmt validate plan apply destroy output graph force unlock dry-run binary plan out",
    sections: [
      { type: "lead", text: "Running Terraform is not just about writing code. A pristine, production-grade DevOps loop requires standard, immutable commands: formatting files with <code>fmt</code>, executing syntax check validations, generating and saving a binary plan file, applying that exact binary target in isolation, and handling potential concurrency lockouts safely." },
      {
        type: "flow",
        steps: [
          { title: "1. terraform fmt -recursive", text: "Rewrites HCL files to conform strictly to corporate formatting guidelines." },
          { title: "2. terraform validate", text: "Executes a compiler verification check on types, loops, and provider syntax." },
          { title: "3. terraform plan -out=tfplan", text: "Analyzes drift and writes the compiled API execution steps into an immutable binary plan file." },
          { title: "4. terraform apply tfplan", text: "Executes the compiled binary instantly without prompt verification. Guarantees that what you approved is exactly what deploys." },
          { title: "5. terraform output -json", text: "Queries deployment variables into raw JSON formats for parsing by upstream tooling." },
          { title: "6. terraform force-unlock <LockID>", text: "Forces a lock release if a pipeline runner crashed or network connection was dropped." }
        ]
      },
      {
        type: "code",
        title: "Enterprise Deployment Scripting Pattern",
        code: `# =======================================================
# IMMUTABLE DEPLOYMENT PIPELINE: Safe binary executions
# =======================================================

# Step 1: Initialize providers
terraform init -input=false

# Step 2: Enforce styling lint
terraform fmt -check

# Step 3: Run compiler checks
terraform validate

# Step 4: Generate dry-run plan and serialize output to a binary file
terraform plan -out=tfplan -input=false

# --- CI pipeline stops here to request manual approval ---

# Step 5: Apply the EXACT binary plan generated (bypasses plan re-evaluation!)
terraform apply -input=false tfplan`
      },
      { type: "callout", tone: "success", html: "<strong>Visualizing Dependencies:</strong> Run <code>terraform graph | dot -Tpng > graph.png</code> to render a beautiful visual map of your HCL dependency scheduler graph, displaying the exact parent-child relationships parsed by the engine." }
    ]
  },
  {
    id: "best-practices",
    num: "15",
    title: "Enterprise Terraform Best Practices",
    category: "advanced",
    description: "Learn the corporate 12-factor IaC methodology: zero-secrets compliance, backend lockouts, strict pre-commit hooks, and tflint rules.",
    tags: ["Best Practices", "Security", "Team", "Linting", "Pre-Commit"],
    search: "best practices remote state secrets version pinning tags modules plan review security linting tflint tfsec checkov pre-commit",
    sections: [
      { type: "lead", text: "The major difference between hobbyist testing and production-grade enterprise Infrastructure as Code is the enforcement of strict guardrails: zero-secrets in code, automated static security analysis (tfsec/checkov), strict version pinning, and modular boundaries." },
      {
        type: "table",
        headers: ["Best Practice Pillar", "Technical Enforcement Action", "Strategic Architecture Value"],
        rows: [
          ["State Isolation", "Use remote state backends (S3/DynamoDB) exclusively; add <code>.tfstate</code> patterns to <code>.gitignore</code>.", "Prevents accidental local overwrites and ensures state files remain fully encrypted and private."],
          ["Zero-Secrets Code", "Inject sensitive credentials using environment variables (<code>TF_VAR_</code>) or AWS SSO profiles.", "Blocks accidental secret leakage in source control logs and repositories."],
          ["Strict Version Pinning", "Pin both provider minor tags (<code>~> 5.45</code>) and Terraform core releases (<code>required_version = \"1.8.5\"</code>).", "Guarantees full build repeatability; prevents sudden upstream API changes from breaking system deployments."],
          ["Static Security Audits", "Integrate security scanners like <code>tfsec</code> or <code>checkov</code> in CI pipelines.", "Automatically flags vulnerabilities (like open SSH groups or unencrypted SQS queues) before plans run."],
          ["HCL Linting Rules", "Run <code>tflint</code> to parse module schemas, variables, and optimize configurations.", "Catches provider-specific deprecations and clean code guidelines."]
        ]
      },
      {
        type: "code",
        title: "Pre-Commit Hook Configuration (.pre-commit-config.yaml)",
        code: `# Automate HCL formatting, linting, and security audits locally on developer git commits!
repos:
  - repo: https://github.com/antonbabenko/pre-commit-terraform
    rev: v1.86.0
    hooks:
      - id: terraform_fmt      # Formats code automatically
      - id: terraform_validate # Compiles configuration validation
      - id: terraform_tflint   # Lints configuration rules
      - id: terraform_tfsec    # Scans for security gaps`
      },
      { type: "callout", tone: "warn", html: "<strong>Production Rule:</strong> Treat Terraform plans as highly confidential documents. Plans can contain unencrypted database passwords, private keys, or structural details about your cloud network. Always store plan binaries securely with restricted IAM read access." }
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
