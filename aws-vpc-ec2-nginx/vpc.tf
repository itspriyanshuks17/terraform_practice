#Create a VPC
resource "aws_vpc" "myvpc" {
    cidr_block = "10.0.0.0/16"
    tags = {
        Name = "MyVPC"
    }
}

#Private Subnet
resource "aws_subnet" "private-subnet" {
    cidr_block ="10.0.1.0/24"
    vpc_id = aws_vpc.myvpc.id
    tags = {
        Name = "Private Subnet"
    }
}

#Public Subnet
resource "aws_subnet" "public-subnet" {
    cidr_block ="10.0.2.0/24"
    vpc_id = aws_vpc.myvpc.id
    tags = {
        Name = "Public Subnet"
    }
}

#Internet Gateway
resource "aws_internet_gateway" "myigw" {
    vpc_id = aws_vpc.myvpc.id
    tags = {
        Name = "MyIGW"
    }
}

#Routing Table
resource "aws_route_table" "myrt" {
    vpc_id = aws_vpc.myvpc.id
    route  {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.myigw.id
    }
}

#Associate Route Table with Subnet
resource "aws_route_table_association" "public-sub" {
    subnet_id = aws_subnet.public-subnet.id
    route_table_id = aws_route_table.myrt.id
}