# H&M Shopping Mall Website

A React-based e-commerce website inspired by H&M's design.

## 🚀 Netlify Deployment

Your app is now ready for Netlify! Here's what has been set up:

### ✅ What's Working:
- **Static JSON Data**: Products are served from `/public/data/products.json`
- **Automatic API Switching**: Uses json-server in development, static files in production
- **React Router**: Proper routing with `_redirects` file
- **Build Optimization**: Production-ready build process

### 📁 Project Structure:
```
public/
  ├── data/products.json     # Product data for production
  └── _redirects            # Netlify routing configuration
src/
  └── utils/api.js          # Smart API layer that switches based on environment
```

### 🔧 Development:
```bash
npm run dev          # Runs both Vite and json-server
npm run dev-only     # Runs only Vite (if you don't need API)
```

### 🏗️ Production Build:
```bash
npm run build        # Creates production build in /dist
```

### 🌐 Netlify Deployment Steps:

1. **Push to GitHub**: Make sure your code is in a GitHub repository
2. **Connect to Netlify**: 
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
3. **Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. **Deploy**: Netlify will automatically build and deploy!

### 🔗 API Configuration:
- **Development**: `http://localhost:4000` (json-server)
- **Production**: `/data/products.json` (static file)

The app automatically detects the environment and uses the appropriate data source.

## ✨ Features:
- H&M-inspired design
- Product catalog with filtering
- Product detail pages
- Responsive layout
- Bootstrap components
- FontAwesome icons

Your shopping mall website is now production-ready! 🎉