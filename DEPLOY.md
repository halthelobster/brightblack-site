# Bright Black Site Deployment Guide

## Quick Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```
   - Choose GitHub as auth method
   - Follow browser auth flow

3. **Deploy**:
   ```bash
   vercel --yes
   ```
   - This will auto-detect Next.js and deploy
   - First deployment will setup project settings
   - Subsequent deployments are automatic with git pushes

## Alternative: Import from GitHub

1. Go to https://vercel.com/new
2. Import from GitHub: `halthelobster/brightblack-site`
3. Project settings are auto-detected (Next.js)
4. Deploy

## Domain Setup

To use `brightblack.co` domain:

1. In Vercel dashboard, go to Project Settings → Domains
2. Add custom domain: `brightblack.co` and `www.brightblack.co`
3. Update DNS records as instructed by Vercel
4. SSL certificates are automatically provisioned

## Build Information

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## GitHub Repository

- **URL**: https://github.com/halthelobster/brightblack-site
- **Branch**: main
- **Auto-deploy**: Enabled (pushes to main trigger deploys)

## Site Features

✅ Mobile-first responsive design  
✅ Premium cinematic dark theme  
✅ Optimized images (Next.js Image component)  
✅ SEO metadata & Open Graph tags  
✅ Custom glow effects and animations  
✅ Google Fonts (Inter) integration  
✅ Accessibility considerations  

## Performance

- Static generation for optimal performance
- Image optimization with Next.js
- CSS-in-JS with Tailwind for minimal bundle size
- No client-side JavaScript for core functionality