output name {
    description = "The public IP address of the EC2 instance"
    value       = aws_instance.nginxserver.public_ip
}

output "instance_url" {
    description = "The URL of the Nginx server"
     value      = "http://${aws_instance.nginxserver.public_ip}"
}
