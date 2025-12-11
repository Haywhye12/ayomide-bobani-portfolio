# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

**Custom Domain**: Add in Vercel dashboard → Settings → Domains

---

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to Netlify
   - Done!

**OR via CLI**:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/YOUR_REPO/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Source: gh-pages branch
   - Save

---

### Option 4: Cloudflare Pages

1. **Push to GitHub** (same as Vercel)

2. **Deploy on Cloudflare**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Connect GitHub
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Build output: `dist`
   - Deploy

---

## Environment Variables

If you add email functionality or APIs:

### Vercel
- Dashboard → Settings → Environment Variables
- Add variables
- Redeploy

### Netlify
- Site settings → Build & deploy → Environment
- Add variables
- Redeploy

### Local Development
Create `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Access in code:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

---

## Performance Optimization

### Before Deploying

1. **Optimize Images**
   - Use WebP format
   - Compress images (use tinypng.com)
   - Lazy load images

2. **Code Splitting** (optional)
   Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     build: {
       rollupOptions: {
         output: {
           manualChunks: {
             'react-vendor': ['react', 'react-dom'],
             'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
             'animation-vendor': ['framer-motion', 'gsap'],
           },
         },
       },
     },
   })
   ```

3. **Reduce Bundle Size**
   ```bash
   npm run build
   # Check dist/assets/ folder sizes
   ```

---

## Custom Domain Setup

### Vercel
1. Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records (Vercel provides instructions)

### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records

### Cloudflare Pages
1. Custom domains → Set up a domain
2. Add domain (DNS auto-configured if using Cloudflare DNS)

---

## SSL Certificate

All platforms provide **free SSL certificates** automatically:
- Vercel: Auto-enabled
- Netlify: Auto-enabled
- Cloudflare: Auto-enabled
- GitHub Pages: Auto-enabled for custom domains

---

## Continuous Deployment

Once connected to GitHub, all platforms auto-deploy on push:

```bash
git add .
git commit -m "Update portfolio"
git push
# Automatically deploys!
```

---

## Monitoring & Analytics

### Add Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Vercel Analytics
- Enable in dashboard (free for hobby plan)

### Netlify Analytics
- Enable in site settings ($9/month)

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

### 404 on Refresh (SPA routing)
Add `_redirects` file in `public/`:
```
/*    /index.html   200
```

### Slow Loading
1. Check bundle size: `npm run build`
2. Reduce particles in Scene3D.jsx
3. Optimize images
4. Enable code splitting

### 3D Scene Not Working
- Check browser console
- Ensure WebGL is supported
- Try different browser

---

## Post-Deployment Checklist

- [ ] Test all links
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify social media links
- [ ] Check loading speed (use PageSpeed Insights)
- [ ] Test on different browsers
- [ ] Add to Google Search Console
- [ ] Share on social media!

---

## Cost

All recommended platforms have **free tiers**:
- **Vercel**: Free for personal projects
- **Netlify**: Free (100GB bandwidth/month)
- **Cloudflare Pages**: Free (unlimited bandwidth)
- **GitHub Pages**: Free for public repos

---

## Support

Need help? Check:
- Platform documentation
- GitHub issues
- Stack Overflow
- Platform community forums

---

**Estimated Time**: 10-15 minutes for first deployment
**Recommended**: Vercel (easiest) or Netlify (most features)
