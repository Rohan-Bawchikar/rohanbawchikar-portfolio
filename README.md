# 🚀 Rohan Bawchikar - Portfolio Website

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-100%25-brightgreen)

> A modern, interactive portfolio website showcasing my skills, projects, and journey as a Frontend Developer. Fully responsive and optimized for all devices.

## 🌟 Features

- **Stunning Animations**: Smooth scroll reveals, parallax effects, and interactive micro-animations
- **Dark/Light Mode**: Beautiful theme toggle with custom 3D morphing orb animation
- **Fully Mobile Optimized**: 100% responsive design tested on all screen sizes (375px+)
- **Interactive Journey Map**: Unique experience section showcasing my development roadmap
- **Modular Architecture**: Clean, organized CSS with component-based structure
- **Custom Cursor**: Magnetic cursor effects for enhanced user experience (desktop)
- **Performance Optimized**: Smooth 60fps animations with reduced-motion support
- **Accessibility First**: ARIA labels, semantic HTML, and WCAG compliance

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup with accessibility in mind
- **CSS3** - Modern styling with Flexbox, Grid, and advanced animations
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation

### Design & Animation
- **CSS Custom Properties** - Dynamic theming system
- **Intersection Observer API** - Scroll-triggered animations
- **RequestAnimationFrame** - Smooth performance optimization
- **Glassmorphism & Neumorphism** - Modern UI design patterns
- **Responsive Clamp()** - Fluid typography that scales perfectly

### Tools
- **Google Fonts** - Poppins, Satisfy
- **Font Awesome 6.5.1** - Icon library with integrity verification
- **Git & GitHub** - Version control and deployment

## 📁 Project Structure

```
New web site/
│
├── index.html                    # Main HTML file
├── README.md                     # Project documentation
│
├── css/                          # Modular CSS architecture
│   ├── style.css                 # Main CSS orchestrator
│   ├── variables.css             # CSS custom properties & theme tokens
│   ├── base.css                  # Base styles & resets
│   └── all-styles.css            # All component styles consolidated
│
├── js/                           # Modular JavaScript
│   ├── main.js                   # Main JS orchestrator
│   ├── theme-toggle.js           # Dark/light mode functionality
│   ├── navigation.js             # Menu & navigation logic
│   ├── scroll-effects.js         # Scroll animations & parallax
│   ├── typing-effect.js          # Hero typing animation
│   ├── animations.js             # General animations & interactions
│   └── particles.js              # Particle system
│
└── assets/                       # Static assets
    ├── images/
    │   ├── IMG_7892.JPG          # Profile photo
    │   └── favicon.svg           # Website favicon
    │
    └── documents/
        ├── Rohan's Resume-hackerresume.pdf
        ├── Fornt End google certificate.pdf
        ├── google python.pdf
        └── Paper ID 230_Rohan Bawchikar.pdf
```

## 📱 Responsive Design

The website is **fully optimized** for all devices:

### Breakpoints
- **Desktop**: 1400px+ (Max-width container)
- **Laptop**: 992px - 1399px (Full width)
- **Tablet**: 768px - 991px (Adjusted grid layouts)
- **Mobile**: 480px - 767px (Single column, optimized text)
- **Small Mobile**: < 480px (Extra compact layout)

### Mobile Features
- ✅ No horizontal scrolling
- ✅ Fluid typography using `clamp()`
- ✅ Touch-optimized button sizes (44px minimum)
- ✅ Hamburger menu for navigation
- ✅ Optimized image sizes
- ✅ Reduced animations for better performance

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohanbawchikar/New-web-site.git
   cd New-web-site
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server for better development experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View the site**
   - Navigate to `http://localhost:8000`
   - Or directly open the `index.html` file

## 📱 Testing Mobile Responsiveness

### Chrome DevTools
```
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test these devices:
   - iPhone SE (375x667)
   - iPhone 12/13 (390x844)
   - Samsung Galaxy S20 (360x800)
   - iPad (768x1024)
```

### Browser Testing
Tested and verified on:
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (iOS & macOS)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## � Sections

1. **Home** - Eye-catching hero section with animated typing effect and profile photo
2. **About** - Brief introduction and background
3. **Projects** - Showcase of my best work with live demos
4. **Services** - What I offer as a frontend developer
5. **My Journey** - Interactive 3D roadmap with progress indicators
6. **Skills** - Technical skills with animated hexagonal cards
7. **Certifications** - Professional credentials with downloadable certificates
8. **Contact** - Get in touch section
9. **Call to Action** - Hire me section

## ✨ Key Highlights

- **Custom Animations**: All animations built from scratch with CSS and vanilla JavaScript
- **No Framework Dependencies**: Pure HTML, CSS, and JavaScript for maximum performance
- **Mobile-First Approach**: Designed for mobile and progressively enhanced for larger screens
- **SEO Optimized**: Proper meta tags, semantic structure, and fast load times
- **Cross-Browser Compatible**: Tested on all major browsers
- **Modular Code**: Easy to maintain and extend
- **CDN Integrity Checks**: Secure external resource loading

## 🎨 Design System

### Color Tokens (Dark Mode)
```css
--bg1: #0f172a;       /* Primary background */
--bg2: #1e293b;       /* Secondary background */
--text: #e5e7eb;      /* Body text */
--heading: #ffffff;   /* Headings */
--accent: #22c55e;    /* Brand accent (green) */
```

### Color Tokens (Light Mode)
```css
--bg1: #eaf1ff;       /* Primary background */
--bg2: #e8f5ee;       /* Secondary background */
--text: #0f172a;      /* Body text */
--heading: #0b1020;   /* Headings */
--accent: #16a34a;    /* Brand accent */
```

### Typography
- **Primary Font**: Poppins (300, 400, 500, 600, 700)
- **Accent Font**: Satisfy (cursive)
- **Base Size**: 16px (responsive with clamp)

## 📊 Performance

- ⚡ Optimized animations with `requestAnimationFrame`
- 🎯 Lazy loading and intersection observers
- 📉 Minimal external dependencies (only Google Fonts & Font Awesome)
- ♿ Accessibility-friendly with `prefers-reduced-motion` support
- 🚀 GPU acceleration for smooth 60fps animations
- 📱 Mobile-optimized with reduced particle effects

## 🔒 Security

- ✅ Subresource Integrity (SRI) for all CDN resources
- ✅ `rel="noopener"` on external links
- ✅ Content Security Policy ready
- ✅ No inline scripts (external JS files)

## 🐛 Recent Updates

### v2.0.0 (December 2025)
- ✨ **Mobile Optimization**: Complete responsive redesign
  - Fixed text overflow on mobile devices
  - Implemented fluid typography with `clamp()`
  - Optimized profile photo sizing
  - Added overflow-x prevention
  
- 🔧 **Bug Fixes**:
  - Fixed Font Awesome CDN integrity error
  - Resolved horizontal scrolling issues
  - Fixed hamburger menu on mobile
  
- 🏗️ **Architecture**:
  - Migrated to modular CSS structure
  - Separated JavaScript into logical modules
  - Organized assets into dedicated folders
  
- 🎨 **Design Enhancements**:
  - 3D morphing orb theme toggle
  - Improved dark/light mode transitions
  - Enhanced experience section with progress rings

## 🤝 Connect With Me

- **LinkedIn**: [Rohan Bhushan Bawchikar](https://www.linkedin.com/in/rohan-bhushan-bawchikar-25725724a/)
- **GitHub**: [@rohanbawchikar](https://github.com/rohanbawchikar)
- **Email**: ro.bawchikar07@gmail.com
- **Location**: Pune, Maharashtra, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Google Fonts for beautiful typography
- Font Awesome for comprehensive icon library
- cdnjs.cloudflare.com for reliable CDN hosting
- The web development community for inspiration and resources

## 🚧 Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form with backend
- [ ] Add more projects to showcase
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features
- [ ] Performance analytics dashboard

---

<div align="center">
  <p>Made with ❤️ by Rohan Bawchikar</p>
  <p>⭐ Star this repo if you like it!</p>
  <p>
    <a href="https://www.linkedin.com/in/rohan-bhushan-bawchikar-25725724a/">
      <img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin" alt="LinkedIn">
    </a>
    <a href="https://github.com/rohanbawchikar">
      <img src="https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github" alt="GitHub">
    </a>
  </p>
</div>
