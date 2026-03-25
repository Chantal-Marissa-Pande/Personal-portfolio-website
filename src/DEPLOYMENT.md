# Deployment & Development Guide

## 📤 How to Push Your Code to GitHub (Using GitHub.com)

### Step 1: Create a New Repository on GitHub

1. Go to **https://github.com** and sign in
2. Click the **"+"** button (top right) → Select **"New repository"**
3. Fill in the details:
   - **Repository name**: `chantal-portfolio` (or any name you prefer)
   - **Description**: "Personal portfolio website showcasing my projects and skills"
   - **Public** ✅ (required for free hosting)
   - **DO NOT** check "Add a README file" (we already have one)
4. Click **"Create repository"**

### Step 2: Upload Your Files

You have two options:

#### **Option A: Direct Upload (Easiest for Beginners)**

1. On your new repository page, click **"uploading an existing file"**
2. **Drag and drop** ALL your project folders and files:
   - `App.tsx`
   - `components/` folder
   - `styles/` folder
   - `README.md`
   - `package.json`
   - All other files and folders
3. Scroll down, add commit message: "Initial portfolio commit"
4. Click **"Commit changes"**

**Done!** Your code is now on GitHub 🎉

#### **Option B: Using Git Command Line** (If you have Git installed)

1. Open your terminal/command prompt in your project folder
2. Run these commands one by one:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/chantal-portfolio.git
git push -u origin main
```
(Replace YOUR-USERNAME with your actual GitHub username)

---

## 🚀 Hosting Your Portfolio - Get Your Live Link!

### **Vercel** (Recommended - Takes 5 Minutes!)

1. **After pushing code to GitHub** (see above ↑)
2. Go to **https://vercel.com**
3. Click **"Sign Up"** → Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub
5. Click **"New Project"**
6. Find and select your `chantal-portfolio` repository
7. Click **"Deploy"** (Vercel auto-configures everything!)
8. Wait 2-3 minutes ⏱️
9. **Your live link appears!** 🎉
   - Example: `chantal-portfolio.vercel.app`
   - Or: `chantal-portfolio-username.vercel.app`

**Every time you push new code to GitHub, Vercel automatically updates your live site!**

### Other Free Hosting Options

#### **Netlify**
- **Website**: https://netlify.com
- **Steps**:
  1. Push code to GitHub
  2. Sign up at netlify.com
  3. "Add new site" → Import from GitHub
  4. Build settings: 
     - Build command: `npm run build`
     - Publish directory: `dist`
  5. Deploy → Live at `your-site.netlify.app`

#### **GitHub Pages**
- **Website**: https://pages.github.com
- **Steps**:
  1. Install GitHub Pages package: `npm install --save-dev gh-pages`
  2. Add to `package.json`:
     ```json
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
     ```
  3. Run `npm run build && npm run deploy`
  4. Enable GitHub Pages in repository settings
  5. Live at `username.github.io/repository-name`

#### **Render**
- **Website**: https://render.com
- Free tier with automatic deployments from GitHub

---

## 💻 Moving to Visual Studio Code

### Prerequisites

1. **Install Node.js**: Download from https://nodejs.org (choose LTS version)
2. **Install VS Code**: Download from https://code.visualstudio.com
3. **Install Git**: Download from https://git-scm.com (for cloning repos)

### Setting Up Your Project Locally

#### Step 1: Clone Your Repository

1. Open VS Code
2. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
3. Type "Git: Clone" and press Enter
4. Paste your repository URL: `https://github.com/YOUR-USERNAME/chantal-portfolio.git`
5. Choose a folder location on your computer
6. Click "Open" when prompted

#### Step 2: Install Dependencies

1. Open the terminal in VS Code:
   - Menu: `View` → `Terminal`
   - Or press: `Ctrl+`` (backtick)
2. Run:
   ```bash
   npm install
   ```
   (This installs all required packages - takes 2-3 minutes)

#### Step 3: Start Development Server

1. In the terminal, run:
   ```bash
   npm run dev
   ```
2. Your portfolio will open at `http://localhost:5173`
3. **Any changes you make will appear instantly!** (hot reload)

#### Step 4: Making Changes

1. Edit any `.tsx` file in VS Code
2. Save (`Ctrl+S` or `Cmd+S`)
3. See changes instantly in your browser
4. When happy with changes:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
5. Vercel automatically deploys your changes!

### Building for Production

To create optimized production files:
```bash
npm run build
```
This creates a `dist` folder with optimized files ready for deployment.

---

## 📦 Required Configuration Files

You'll need these files in your project root (create them if missing):

### `package.json`
```json
{
  "name": "chantal-portfolio",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.447.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.6.3",
    "vite": "^6.0.1"
  }
}
```

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chantal Marissa Pande - Portfolio</title>
    <meta name="description" content="Software Engineering student passionate about web development and data analysis" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `src/main.tsx`
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 🔧 Recommended VS Code Extensions

Install these for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - Code snippets
2. **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
3. **ESLint** - Code quality
4. **Prettier - Code formatter** - Auto-format code
5. **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
6. **GitHub Copilot** (optional) - AI coding assistant

---

## 📝 Git Workflow for Updates

After making changes in VS Code:

```bash
# Save your changes in VS Code (Ctrl+S)

# Check what files changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Updated projects section"

# Push to GitHub
git push

# Vercel automatically deploys! ✨
```

---

## 🌐 Custom Domain (Optional)

All platforms support custom domains:

1. Buy a domain (Namecheap, Google Domains, Cloudflare, etc.)
2. In your hosting platform (Vercel/Netlify):
   - Go to Settings → Domains
   - Add your custom domain
3. Update DNS records as instructed by the platform
4. SSL certificate is automatic and free
5. Your site will be live at `yourname.com`

---

## 🆘 Troubleshooting

### "npm: command not found"
- You need to install Node.js: https://nodejs.org

### Changes not showing on live site
- Check if your code is pushed to GitHub: `git push`
- Check Vercel deployment status in Vercel dashboard

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Test locally with `npm run build`

---

## 📚 Useful Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Git Basics**: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics

---

## 💡 Quick Tips

- Always test locally before pushing (`npm run dev`)
- Commit often with clear messages
- Use branches for experimental features
- Keep your `main` branch stable
- Check live site after each deployment
- Monitor Vercel deployment status

---

**Questions?** Check the resources above or search on Stack Overflow!
