# GitHub Setup Instructions

## Step 1: Create a Personal Access Token (PAT)

1. Go to GitHub.com and sign in
2. Click your profile picture → Settings
3. Scroll down to "Developer settings" (bottom left)
4. Click "Personal access tokens" → "Tokens (classic)"
5. Click "Generate new token" → "Generate new token (classic)"
6. Give it a name like "my-react-app"
7. Select scopes: Check "repo" (this gives full repository access)
8. Click "Generate token"
9. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

## Step 2: Create a Repository on GitHub

1. Go to github.com and click the "+" icon → "New repository"
2. Repository name: `my-react-app` (or any name you prefer)
3. Choose Public or Private
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 3: Push Your Code

After creating the repository, GitHub will show you the repository URL.
Share that URL with me, and I'll help you push the code!

Or run these commands (replace YOUR_USERNAME and YOUR_REPO_NAME):
```bash
git remote add origin https://YOUR_USERNAME@github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

When prompted for password, use your Personal Access Token (not your GitHub password).

