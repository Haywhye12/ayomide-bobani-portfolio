# Quick Reference Card 📋

## 🚀 Start Development
```bash
npm run dev
# Open http://localhost:5173
```

## 🏗️ Build for Production
```bash
npm run build
# Output in dist/ folder
```

## 📝 Customize Your Portfolio

### 1. Personal Info (5 min)
**File**: `src/components/HeroModern.jsx`
- Line 67: Your name
- Line 75: Your title
- Lines 96-99: Social media links

### 2. About Section (10 min)
**File**: `src/components/AboutModern.jsx`
- Lines 50-65: Your bio
- Lines 18-29: Update stats

### 3. Skills (15 min)
**File**: `src/components/SkillsModern.jsx`
- Lines 14-53: Add/edit skills
- Adjust proficiency levels

### 4. Experience (20 min)
**File**: `src/components/ExperienceModern.jsx`
- Lines 9-48: Your work history

### 5. Projects (30 min)
**File**: `src/components/ProjectsModern.jsx`
- Lines 9-62: Your projects
- Update images, links, descriptions

### 6. Contact (5 min)
**File**: `src/components/ContactModern.jsx`
- Lines 11-26: Your contact info

## 🎨 Change Colors (2 min)
**File**: `src/index.css`
- Lines 4-7: Update CSS variables
```css
--color-primary: #0ea5e9;    /* Your main color */
--color-secondary: #8b5cf6;  /* Your accent color */
```

## 🌐 Deploy (5 min)

### Vercel (Easiest)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy!

### Netlify
1. `npm run build`
2. Drag `dist` folder to netlify.com

## 📁 Project Structure
```
src/
├── components/
│   ├── Scene3D.jsx          # 3D background
│   ├── HeroModern.jsx       # Hero section
│   ├── HeaderModern.jsx     # Navigation
│   ├── AboutModern.jsx      # About section
│   ├── SkillsModern.jsx     # Skills showcase
│   ├── ExperienceModern.jsx # Work history
│   ├── ProjectsModern.jsx   # Projects
│   ├── ContactModern.jsx    # Contact form
│   ├── FooterModern.jsx     # Footer
│   └── LoadingScreen.jsx    # Loading animation
├── App.jsx                  # Main app
├── index.css                # Global styles
└── main.jsx                 # Entry point
```

## 🎯 Key Features
- ✅ 3D animated background (Three.js)
- ✅ Smooth animations (Framer Motion + GSAP)
- ✅ Glass morphism design
- ✅ Fully responsive
- ✅ Perfect spacing
- ✅ Loading screen
- ✅ Mobile menu

## 🐛 Troubleshooting

### Port in use?
```bash
npm run dev -- --port 3000
```

### Build errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

### 3D not showing?
- Check browser console
- Try Chrome (best WebGL support)
- Reduce particles in Scene3D.jsx (line 26)

## 📚 Documentation Files
1. **QUICK_START.md** - 2-minute start guide
2. **CUSTOMIZATION_GUIDE.md** - Detailed customization
3. **DEPLOYMENT.md** - Deployment options
4. **COMPLETE_UPGRADE_SUMMARY.md** - Full overview
5. **README.md** - Complete documentation

## 🎨 Spacing Values
- **Between sections**: 120px
- **Within sections**: 32-60px
- **Card padding**: 32-40px
- **Grid gaps**: 32-64px

## 🔧 Technologies Used
- React 19
- Vite 7
- Three.js
- React Three Fiber
- Framer Motion
- GSAP
- Tailwind CSS v4
- React Icons

## ⚡ Performance Tips
1. Optimize images (use WebP)
2. Reduce particles if slow (Scene3D.jsx)
3. Use CDN for hosting (Vercel/Netlify)

## 📞 Need Help?
- Check documentation files
- Review component comments
- Check browser console for errors

---

**Your portfolio is ready! Time to customize and deploy! 🚀**
