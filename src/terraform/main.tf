provider "aws" {
  region = "us-east-1"
}

resource "aws_amplify_app" "my_profile" {
  name        = "my_profile"
  repository  = "https://github.com/smiji/my-profile.git"
  oauth_token = ""
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.my_profile.app_id
  branch_name = "main"
}

# Optional: Domain association
resource "aws_amplify_domain_association" "domain" {
  app_id      = aws_amplify_app.myapp.id
  domain_name = "neeadandconnect.com"
  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = "" # root domain
  }
}

