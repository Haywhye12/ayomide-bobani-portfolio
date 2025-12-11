# 🚀 Quick Start Guide

## Get Your Portfolio Running in 2 Minutes!

### Step 1: Install Dependencies (1 minute)
```bash
npm install
```

### Step 2: Start Development Server (30 seconds)
```bash
npm run dev
```

### Step 3: Open in Browser (30 seconds)
Open: **http://localhost:5173**

---

## 🎨 Quick Customization (10 minutes)

### 1. Update Your Name (2 minutes)
**File**: `src/components/HeroModern.jsx`

Find and replace:
- Line 67: `Ayomide Bobani` → Your Name
- Line 75: `Senior Full Stack Developer` → Your Title

### 2. Update Social Links (3 minutes)
**File**: `src/components/HeroModern.jsx`

Lines 96-99, update URLs:
```javascript
{ icon: FaGithub, href: 'https://github.com/YOUR_USERNAME' },
{ icon: FaLinkedin, href: 'https://linkedin.com/in/YOUR_USERNAME' },
```

### 3. Update Contact Info (2 minutes)
**File**: `src/components/ContactModern.jsx`

Lines 11-26, update:
```javascript
value: 'your.email@example.com',
link: 'mailto:your.email@example.com',
```

### 4. Add Your Projects (3 minutes)
**File**: `src/components/ProjectsModern.jsx`

Lines 9-62, update project details:
- Title
- Description
- GitHub link
- Live demo link
- Technologies

---

## 🎯 What You Get

✅ **3D Animated Hero Section** with Three.js  
✅ **Modern Glass Morphism Design**  
✅ **Smooth Framer Motion Animations**  
✅ **Fully Responsive** (Mobile, Tablet, Desktop)  
✅ **Professional Skills Showcase**  
✅ **Project Portfolio with Hover Effects**  
✅ **Working Contact Form**  
✅ **Loading Screen Animation**  

---

## 📦 Deploy in 5 Minutes

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy
5. Done! ✨

### Option 2: Netlify
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag `dist` folder
4. Done! ✨

---

## 🎨 Change Colors (2 minutes)

**File**: `src/index.css`

Lines 5-6:
```css
--color-primary: #0ea5e9;    /* Your main color */
--color-secondary: #8b5cf6;  /* Your accent color */
```

Popular combinations:
- Blue/Purple: `#0ea5e9` / `#8b5cf6` (current)
- Green/Teal: `#10b981` / `#14b8a6`
- Orange/Red: `#f97316` / `#ef4444`
- Pink/Purple: `#ec4899` / `#a855f7`

---

## 📚 Full Documentation

For detailed customization:
- **CUSTOMIZATION_GUIDE.md** - Complete customization steps
- **DEPLOYMENT.md** - Deployment options
- **UPGRADE_SUMMARY.md** - What's included
- **README.md** - Full documentation

---

## 🐛 Troubleshooting

### Port already in use?
```bash
npm run dev -- --port 3000
```

### Build errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

### 3D scene not showing?
- Check browser console
- Try Chrome (best WebGL support)
- Reduce particles in `Scene3D.jsx`

---

## ✅ Checklist

Before deploying:
- [ ] Updated name and title
- [ ] Updated social media links
- [ ] Updated contact information
- [ ] Added your projects
- [ ] Tested on mobile
- [ ] Checked all links work
- [ ] Customized colors (optional)

---

## 🎉 You're Ready!

Your professional portfolio is ready to impress recruiters and clients!

**Next Steps**:
1. Customize content (10 minutes)
2. Deploy to Vercel (5 minutes)
3. Share on LinkedIn! 🚀

---

**Need Help?** Check the other documentation files or open an issue on GitHub.

**Happy Coding!** 💻✨
