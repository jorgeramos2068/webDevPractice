# NEXUS: Chronicles - Landing Page & Steam Store

A stunning cyberpunk RPG landing page and Steam store page built with React and Vite.

## Features

🎮 **Interactive Landing Page**
- Modern hero section with glitch effects
- Feature showcase with smooth animations
- Responsive gallery
- Call-to-action sections

🔗 **Steam Store Page** (`/steam`)
- Steam-inspired design
- Game information and system requirements
- Screenshots and video sections
- Purchase and wishlist options
- Live player statistics

🎨 **Design Highlights**
- Cyberpunk aesthetic with neon cyan/blue theme
- Smooth animations and transitions
- Fully responsive on all devices
- Modern gradient effects and glowing elements

## Tech Stack

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients, animations, and effects

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## Navigation

- **Home Page** - `/` - Main landing page with hero, features, gameplay info, and gallery
- **Steam Page** - `/steam` - Steam store-style page with game details and purchase options

## Project Structure

```
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Landing page component
│   │   ├── Home.css          # Landing page styles
│   │   ├── Steam.jsx         # Steam store component
│   │   └── Steam.css         # Steam store styles
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # App-level styles
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies and scripts
```

## Customization

### Change Game Title
Update the game name in:
- `src/pages/Home.jsx` - Hero title and navigation
- `src/pages/Steam.jsx` - Game info
- `index.html` - Page title

### Add Your Images
Replace placeholder images and galleries by:
1. Adding image files to `public/` folder
2. Updating image paths in components

### Modify Colors/Theme
Edit the CSS color values in `Home.css` and `Steam.css`:
- Primary color: `#00d4ff` (cyan)
- Secondary color: `#0099ff` (blue)
- Background: `#0a0e27` (dark navy)

## GitHub Pages Deployment

To deploy this site to GitHub Pages:

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/nexus-chronicles.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/root" folder
   - Click "Save"

3. **Your site will be live at:** `https://YOUR_USERNAME.github.io/nexus-chronicles`

### Environment Setup (Optional)

For easier deployment, create a `.env` file:
```
VITE_APP_TITLE=NEXUS: Chronicles
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Optimized bundle size (~50KB gzipped)
- Lazy loading for images
- CSS transitions for smooth 60fps animations
- Responsive images and adaptive layouts

## License

MIT License - feel free to use this template for your own projects!

## Credits

Created with ❤️ for cyberpunk gaming enthusiasts.

---

**Ready to enter NEXUS? Deploy now and share with the world! 🚀**
# webDevPractice
