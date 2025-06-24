# Deployment Guide - GitHub Pages

This guide will walk you through deploying your Verify Loop LLC website to GitHub Pages.

## Prerequisites

1. GitHub account
2. Git installed on your computer
3. Your website code ready (which you already have!)

## Step 1: Update Package.json

1. Open `package.json`
2. Update the homepage URL to match your GitHub username and repository name:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/verify-loop"
   ```
   Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click "New repository" (green button)
3. Repository name: `verify-loop` (or whatever you prefer)
4. Make it Public (required for free GitHub Pages)
5. **Don't** initialize with README (we already have files)
6. Click "Create repository"

## Step 3: Push Your Code to GitHub

1. In your terminal, initialize Git (if not already done):

   ```bash
   git init
   ```

2. Add all files:

   ```bash
   git add .
   ```

3. Make your first commit:

   ```bash
   git commit -m "Initial commit - Verify Loop website"
   ```

4. Add your GitHub repository as origin:

   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/verify-loop.git
   ```

5. Push to GitHub:
   ```bash
   git push -u origin main
   ```

## Step 4: Install GitHub Pages Package

```bash
npm install --save-dev gh-pages
```

## Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:

- Build your website for production
- Create a `gh-pages` branch
- Push the built website to that branch

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select branch: `gh-pages`
6. Select folder: `/ (root)`
7. Click "Save"

## Step 7: Access Your Website

Your website will be available at:

```
https://YOUR_GITHUB_USERNAME.github.io/verify-loop
```

**Note**: It may take a few minutes for the site to become available after first deployment.

## Updating Your Website

To update your website:

1. Make your changes to the code
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. Deploy the updates:
   ```bash
   npm run deploy
   ```

## Custom Domain (Optional)

If you want to use a custom domain (like `www.verifyloop.net`):

1. Create a file named `CNAME` in the `public` folder
2. Add your domain name to the file (just the domain, nothing else)
3. Configure your domain's DNS to point to GitHub Pages
4. Follow GitHub's custom domain guide

## Troubleshooting

### White page or 404 errors

- Check that the `homepage` field in `package.json` is correct
- Make sure you're using the correct URL format

### Build fails

- Check for any JavaScript errors in your code
- Make sure all imports and file paths are correct

### Changes not showing

- Clear your browser cache
- Wait a few minutes for GitHub Pages to update
- Check that you ran `npm run deploy` after making changes

## Commands Reference

- `npm start` - Run development server locally
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm test` - Run tests

## Support

If you run into issues:

1. Check the GitHub Pages documentation
2. Look at the repository's "Actions" tab for build errors
3. Check the browser's developer console for errors

---

Your professional QA consulting website is now live on the web! 🎉
