# Push to GitHub - Quick Instructions

## Step 1: Create Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: `my-react-app-push`
4. Expiration: Choose your preference (90 days recommended)
5. Select scope: Check **"repo"** (full control of private repositories)
6. Click "Generate token"
7. **COPY THE TOKEN** (starts with `ghp_...`)

## Step 2: Push Your Code

Run this command (replace YOUR_TOKEN with the token you copied):

```bash
git push -u origin main
```

When prompted:
- **Username**: `venu12333`
- **Password**: Paste your Personal Access Token (not your GitHub password)

The token will be saved in your macOS keychain for future pushes.

---

## Alternative: Push with Token in URL (One-time)

If you prefer, you can push once with the token in the URL:

```bash
git push https://YOUR_TOKEN@github.com/venu12333/my-react-app.git main
```

Replace `YOUR_TOKEN` with your actual token.

