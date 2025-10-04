# Canopie Landing Page - React Version with 3D Effects

A modern, responsive landing page for Canopie - India's own networking app, built with React and enhanced with immersive 3D effects.

## Features

- 🎨 **Modern Design**: Clean, professional design with brand colors and typography
- 📱 **Fully Responsive**: Optimized for all screen sizes (320px to 1440px+)
- ⚡ **Single Page Viewport**: All content fits within one viewport without scrolling
- 🎯 **Component-Based**: Modular React components for easy maintenance
- 🚀 **Optimized Performance**: Lightweight and fast loading
- 🎭 **3D Visual Effects**: Immersive 3D animations and particle systems
- ✨ **Interactive Elements**: Hover effects with 3D transformations
- 🌟 **Three.js Integration**: Advanced 3D graphics and animations

## Tech Stack

- **React 18.2.0**: Modern React with functional components
- **Three.js**: 3D graphics and animations
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Useful helpers for R3F
- **CSS3**: Custom responsive design with 3D transforms
- **Google Fonts**: Poppins and Garet font families
- **Create React App**: Standard React development environment

## Project Structure

```
src/
├── components/
│   ├── BackgroundEffects.js    # Decorative background circles with 3D effects
│   ├── DesktopSideArt.js      # Side navigation for desktop with 3D animations
│   ├── Logo.js                # Company logo with 3D hover effects
│   ├── MainContent.js         # Main headline and description with 3D transforms
│   ├── Footer.js              # Footer with 3D interactive links
│   └── ThreeDBackground.js    # Three.js particle system and floating shapes
├── App.js                     # Main application component
├── index.js                   # React DOM entry point
└── index.css                  # Global styles with 3D CSS animations
```

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   
   The app will open at [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   ```

## Responsive Breakpoints

- **Extra Small Mobile**: ≤320px
- **Mobile Portrait**: 321px - 480px
- **Mobile Landscape**: 481px - 767px
- **Tablet Portrait**: 768px - 1023px
- **Laptop/Large Tablet**: 1024px - 1199px
- **Desktop**: 1200px - 1439px
- **Large Desktop**: ≥1440px

## Component Details

### BackgroundEffects
- Decorative blurred circles for visual depth
- Responsive positioning for mobile devices

### DesktopSideArt
- Side panels with networking-related keywords
- Hidden on mobile, visible on desktop (1200px+)

### Logo
- Company logo with custom Garet font
- "Coming Soon" badge with brand styling

### MainContent
- Main headline with highlighted "Network" text
- Compelling tagline and description

### Footer
- Copyright information
- Multiple contact email addresses

## Customization

### Colors
Brand colors are defined as CSS custom properties in `index.css`:
```css
:root {
    --brand-cyan: #0BC0DF;
    --brand-blue: #089cbf;
    --text-dark: #222;
    --text-light: #f9f9f9;
    --bg-gradient-start: #e9f5f8;
    --bg-gradient-end: #ffffff;
}
```

### Typography
- **Primary Font**: Poppins (body text)
- **Logo Font**: Garet (logo and dates)
- Responsive font scaling across all breakpoints

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Canopie. All rights reserved.

## Contact

For support and inquiries:
- support@ibmc.tech
- contact@cenopie.com
- support@cenopienetwork.me