# Frontend Deployment Guide

## GitHub Pages Deployment

The frontend is configured to be automatically deployed to GitHub Pages.

### Automated Deployment

The GitHub Actions workflow will automatically build and deploy the frontend whenever changes are pushed to the `main` branch in the `frontend/` directory.

**Deployed URL:** https://trisandhya.github.io/dhanaadhya/frontend/

### Manual Deployment

To manually deploy the frontend:

```bash
cd frontend

# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Build and deploy
npm run deploy
```

### Configuration

The deployment is configured in:
- `.github/workflows/deploy-frontend.yml` - GitHub Actions workflow
- `frontend/vite.config.js` - Base path set to `/dhanaadhya/frontend/`

### First-Time Setup

To enable GitHub Pages deployment:

1. Go to your GitHub repository settings
2. Navigate to Settings → Pages
3. Set Source to "GitHub Actions"
4. The deployment should start automatically

### Build & Preview Locally

```bash
cd frontend

# Build for production
npm run build

# Preview the production build
npm run preview
```

### Troubleshooting

If deployment fails:
1. Check that the `gh-pages` package is installed
2. Verify the base path in `vite.config.js` is correct
3. Check GitHub Actions logs in the repository

### Environment Variables

Currently, no environment variables are needed for deployment. Update `.github/workflows/deploy-frontend.yml` if API endpoints need to be configured.
