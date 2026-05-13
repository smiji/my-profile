provider "aws" {
  region = "us-east-1"
}

resource "aws_amplify_app" "my_profile" {
  name        = "my_profile"
  repository  = "https://github.com/smiji/my-profile.git"
  oauth_token = var.github_token
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.my_profile.app_id
  branch_name = "main"
}

# Optional: Domain association

