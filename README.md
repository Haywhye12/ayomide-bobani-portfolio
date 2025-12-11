# Modern Portfolio - Ayomide Bobani

A professional, modern portfolio website built with cutting-edge web technologies, featuring 3D graphics, smooth animations, and a stunning user interface.

## 🚀 Technologies Used

### Core
- **React 19** - Latest React with modern features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework

### 3D & Animations
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Framer Motion** - Production-ready animation library
- **GSAP** - Professional-grade animation

### UI/UX
- **React Icons** - Popular icon library
- **Glass Morphism** - Modern UI design trend
- **Gradient Effects** - Eye-catching color transitions
- **Smooth Scrolling** - Enhanced user experience

## ✨ Features

- 🎨 **Modern Design** - Glass morphism, gradients, and contemporary UI
- 🌐 **3D Graphics** - Interactive Three.js scene in hero section
- ⚡ **Smooth Animations** - Framer Motion & GSAP powered transitions
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **Performance Optimized** - Fast loading and smooth interactions
- ♿ **Accessible** - Built with accessibility in mind
- 🎭 **Interactive** - Engaging hover effects and animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/HeroModern.jsx`)
   - Update name, title, and description
   - Change social media links

2. **About Section** (`src/components/AboutModern.jsx`)
   - Modify bio and highlights
   - Update statistics

3. **Skills Section** (`src/components/SkillsModern.jsx`)
   - Add/remove skills
   - Adjust proficiency levels
   - Change skill categories

4. **Experience Section** (`src/components/ExperienceModern.jsx`)
   - Add your work experience
   - Update achievements
   - Modify technologies used

5. **Projects Section** (`src/components/ProjectsModern.jsx`)
   - Add your projects
   - Update project images (use Unsplash or your own)
   - Add GitHub and live demo links

6. **Contact Section** (`src/components/ContactModern.jsx`)
   - Update contact information
   - Configure email service (optional)
   - Update social media links

### Color Scheme

Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  primary: '#0ea5e9',    // Main accent color
  secondary: '#8b5cf6',  // Secondary accent
  dark: '#0f172a',       // Dark background
  darker: '#020617',     // Darker background
}
```

### 3D Scene

Customize the 3D scene in `src/components/Scene3D.jsx`:
- Change sphere color and distortion
- Adjust particle count and colors
- Modify animation speeds

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy 'dist' folder to gh-pages branch
```

## 📝 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Scene3D.jsx          # Three.js 3D scene
│   │   ├── HeroModern.jsx       # Hero section with 3D bg
│   │   ├── HeaderModern.jsx     # Navigation header
│   │   ├── AboutModern.jsx      # About section
│   │   ├── SkillsModern.jsx     # Skills showcase
│   │   ├── ExperienceModern.jsx # Work experience
│   │   ├── ProjectsModern.jsx   # Project portfolio
│   │   ├── ContactModern.jsx    # Contact form
│   │   └── FooterModern.jsx     # Footer
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies
```

## 🎯 Performance Tips

1. **Optimize Images** - Use WebP format and lazy loading
2. **Code Splitting** - Vite handles this automatically
3. **Reduce Bundle Size** - Remove unused dependencies
4. **CDN Hosting** - Use Vercel or Netlify for best performance

## 🐛 Troubleshooting

### Three.js not rendering
- Check browser console for WebGL support
- Ensure GPU acceleration is enabled

### Animations not smooth
- Reduce particle count in Scene3D.jsx
- Check browser performance settings

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Ayomide Bobani**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

---

⭐ Star this repo if you found it helpful!
