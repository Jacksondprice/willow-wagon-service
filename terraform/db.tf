resource "aws_db_instance" "main" {
  username = var.db_username
  password = var.db_password
}
