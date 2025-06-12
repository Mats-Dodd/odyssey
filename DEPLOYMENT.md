# 🚀 Typyst Vercel Deployment Guide

This guide covers deploying both the **Landing Page** (typyst.com) and **Web App** (app.typyst.com) to Vercel with your custom domain.

## 📋 Pre-Deployment Checklist

- [ ] Vercel account created/logged in
- [ ] Vercel CLI installed: `npm i -g vercel`
- [ ] GitHub repository connected to Vercel
- [ ] GoDaddy domain (typyst.com) ready for configuration

## 🌐 Domain Strategy

- **Primary**: `typyst.com` → Landing Page (marketing site)
- **Subdomain**: `app.typyst.com` → Web App (note-taking interface)
- **Redirect**: `www.typyst.com` → `typyst.com`

## 🏗️ Deployment Architecture

### Landing Page App (typyst.com)
- **Framework**: SvelteKit with `@sveltejs/adapter-vercel`
- **Features**: Marketing site + API routes for desktop app
- **Functions**: `/api/check-updates` and `/api/download`
- **External Services**: Vercel Edge Config for version management

### Web App (app.typyst.com)
- **Framework**: SvelteKit with `@sveltejs/adapter-static`
- **Features**: Client-side note-taking with PGLite database
- **Architecture**: Static SPA with offline-first capabilities

## 📦 Step 1: Build Test

First, ensure both apps build successfully:

```bash
# Test landing page build
pnpm build:landing-page

# Test web app build
pnpm build:app

# Test all builds
pnpm build
```

## 🚀 Step 2: Deploy to Vercel

### Option A: Vercel CLI (Recommended for first deployment)

```bash
# Deploy landing page (production)
pnpm deploy:landing-page

# Deploy web app (production)
pnpm deploy:app
```

### Option B: Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Create two separate projects:

#### Landing Page Project Configuration:
```
Project Name: typyst-landing-page
Root Directory: apps/landing-page
Build Command: pnpm build
Output Directory: build
Install Command: pnpm install --frozen-lockfile
Node.js Version: 18.x
```

#### Web App Project Configuration:
```
Project Name: typyst-app
Root Directory: apps/app
Build Command: pnpm build
Output Directory: build
Install Command: pnpm install --frozen-lockfile
Node.js Version: 18.x
```

## 🔧 Step 3: Configure Domains

### In Vercel Dashboard:

#### Landing Page Project:
1. Go to Project Settings → Domains
2. Add `typyst.com` as custom domain
3. Add `www.typyst.com` as redirect to `typyst.com`

#### Web App Project:
1. Go to Project Settings → Domains
2. Add `app.typyst.com` as custom domain

### In GoDaddy DNS:

Add these DNS records:

```
Type: CNAME
Name: @
Value: cname.vercel-dns.com

Type: CNAME
Name: app
Value: cname.vercel-dns.com

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## ⚙️ Step 4: Environment Variables

### Landing Page App Environment Variables:

Set these in Vercel Dashboard → Project Settings → Environment Variables:

```bash
# Required for Edge Config (desktop app updates)
EDGE_CONFIG=your_edge_config_url_here

# Optional: Analytics and monitoring
VERCEL_ANALYTICS_ID=your_analytics_id
```

### Web App Environment Variables:

```bash
# Optional: Analytics
VERCEL_ANALYTICS_ID=your_analytics_id

# Public environment variables (if needed)
PUBLIC_APP_NAME=Typyst
```

## 🛡️ Step 5: Verify Security Headers

Both apps are configured with security headers in their `vercel.json` files:

- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy
- Permissions Policy

## ✅ Step 6: Post-Deployment Verification

### Landing Page (typyst.com):
- [ ] Site loads correctly
- [ ] SSL certificate is active (🔒)
- [ ] `/api/check-updates` endpoint responds
- [ ] `/api/download` endpoint responds
- [ ] Desktop app can fetch updates

### Web App (app.typyst.com):
- [ ] App loads correctly
- [ ] SSL certificate is active (🔒)
- [ ] Client-side routing works
- [ ] PGLite database initializes
- [ ] Offline functionality works
- [ ] Notes can be created/edited

## 🔄 Continuous Deployment

### Automatic Deployments:
- **Production**: Deploys automatically on `main` branch push
- **Preview**: Deploys automatically on pull request creation

### Manual Deployments:
```bash
# Preview deployments
pnpm deploy:preview:landing-page
pnpm deploy:preview:app
```

## 🧪 Testing Commands

```bash
# Local development
pnpm dev  # Starts all apps

# Individual app development
cd apps/landing-page && pnpm dev
cd apps/app && pnpm dev

# Build verification
pnpm build:landing-page
pnpm build:app

# Lint check
pnpm lint
```

## 📊 Performance Optimization

Both apps are configured for optimal performance:

### Landing Page:
- Edge functions for API routes
- Static asset caching
- Compression enabled
- CDN distribution

### Web App:
- Static site generation
- Client-side caching
- Service worker ready
- Bundle splitting

## 🆘 Troubleshooting

### Common Issues:

**Build Failures:**
```bash
# Clear cache and rebuild
rm -rf node_modules .turbo
pnpm install
pnpm build
```

**Domain Issues:**
- DNS changes can take up to 24-48 hours
- Use [whatsmydns.net](https://whatsmydns.net) to check propagation
- Verify CNAME records are pointing to `cname.vercel-dns.com`

**API Route Issues:**
- Check Vercel Function logs in dashboard
- Verify Edge Config is properly configured
- Ensure environment variables are set

### Support Resources:
- [Vercel SvelteKit Docs](https://vercel.com/docs/frameworks/sveltekit)
- [Vercel Support](https://vercel.com/support)
- [SvelteKit Deployment Docs](https://kit.svelte.dev/docs/adapters)

## 🎯 Success Metrics

After deployment, you should see:
- ✅ Both sites accessible via custom domains
- ✅ SSL certificates active
- ✅ API endpoints functional
- ✅ Lighthouse scores > 90
- ✅ Desktop app can check for updates
- ✅ Web app works offline

---

**Next Steps**: After successful deployment, consider setting up:
- Web Analytics with `@vercel/analytics`
- Speed Insights with `@vercel/speed-insights`
- Error monitoring with Sentry
- Uptime monitoring 