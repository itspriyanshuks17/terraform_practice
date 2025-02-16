#Creating EC2 instance
resource "aws_instance" "nginxserver" {
  ami           = "ami-05fa46471b02db0ce"
  instance_type = "t3.micro"
  subnet_id = aws_subnet.public-subnet.id
  vpc_security_group_ids = [aws_security_group.nginx-sg.id]
  associate_public_ip_address = true

  user_data = <<-EOF
    #!/bin/bash
    sudo yum update && upgrade -y
    sudo yum install nginx -y
    sudo systemctl start nginx
    EOF

  tags = {
    Name = "NginxServer"
  }
}
