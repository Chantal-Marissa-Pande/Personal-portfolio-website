# 📥 How to Download Your Portfolio from Figma Make

## Method 1: Download Files Individually (Recommended for GitHub.com Upload)

### Step 1: Create Folder Structure on Your Computer

Create a folder named `chantal-portfolio` with this structure:

```
chantal-portfolio/
├── components/
│   ├── ui/
│   └── figma/
├── styles/
└── guidelines/
```

### Step 2: Download Each File

In Figma Make, click on each file and copy/save the content:

#### Root Files (save in `chantal-portfolio/`)
- ✅ `App.tsx`
- ✅ `README.md`
- ✅ `DEPLOYMENT.md`
- ✅ `DOWNLOAD_GUIDE.md` (this file!)
- ✅ `Attributions.md`
- ⚠️ `package.json` (see below)
- ⚠️ `index.html` (see below)
- ⚠️ `vite.config.ts` (see below)
- ⚠️ `tsconfig.json` (see below)
- ⚠️ `tsconfig.node.json` (see below)

#### Components Folder (save in `chantal-portfolio/components/`)
- `About.tsx`
- `Footer.tsx`
- `Header.tsx`
- `Hero.tsx`
- `Projects.tsx`
- `Skills.tsx`

#### UI Components (save in `chantal-portfolio/components/ui/`)
- `accordion.tsx`
- `alert-dialog.tsx`
- `alert.tsx`
- `aspect-ratio.tsx`
- `avatar.tsx`
- `badge.tsx`
- `breadcrumb.tsx`
- `button.tsx`
- `calendar.tsx`
- `card.tsx`
- `carousel.tsx`
- `chart.tsx`
- `checkbox.tsx`
- `collapsible.tsx`
- `command.tsx`
- `context-menu.tsx`
- `dialog.tsx`
- `drawer.tsx`
- `dropdown-menu.tsx`
- `form.tsx`
- `hover-card.tsx`
- `input-otp.tsx`
- `input.tsx`
- `label.tsx`
- `menubar.tsx`
- `navigation-menu.tsx`
- `pagination.tsx`
- `popover.tsx`
- `progress.tsx`
- `radio-group.tsx`
- `resizable.tsx`
- `scroll-area.tsx`
- `select.tsx`
- `separator.tsx`
- `sheet.tsx`
- `sidebar.tsx`
- `skeleton.tsx`
- `slider.tsx`
- `sonner.tsx`
- `switch.tsx`
- `table.tsx`
- `tabs.tsx`
- `textarea.tsx`
- `toggle-group.tsx`
- `toggle.tsx`
- `tooltip.tsx`
- `use-mobile.ts`
- `utils.ts`

#### Figma Components (save in `chantal-portfolio/components/figma/`)
- `ImageWithFallback.tsx`

#### Styles Folder (save in `chantal-portfolio/styles/`)
- `globals.css`

#### Guidelines Folder (save in `chantal-portfolio/guidelines/`)
- `Guidelines.md`

---

## Step 3: Create Required Configuration Files

These files are needed to run the portfolio but might not be visible in Figma Make. Create them manually:

### `package.json` (in root folder)
Create a new file named `package.json` and paste this:

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

### `index.html` (in root folder)
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
    <script type="module" src="/App.tsx"></script>
  </body>
</html>
```

### `vite.config.ts` (in root folder)
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
```

### `tsconfig.json` (in root folder)
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
    "noFallthroughCasesInSwitch": true
  },
  "include": ["."],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### `tsconfig.node.json` (in root folder)
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

### `.gitignore` (in root folder)
```
# Dependencies
node_modules/

# Build output
dist/
build/

# Environment variables
.env
.env.local
.env.production

# Editor directories
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
```

---

## Method 2: Direct Upload to GitHub (Easiest!)

If you don't want to download everything locally first:

1. **Create a new repository on GitHub.com**
   - Go to https://github.com/new
   - Name: `chantal-portfolio`
   - Make it **Public**
   - Click "Create repository"

2. **Upload files directly**
   - Click "uploading an existing file"
   - **Drag and drop ALL folders and files** from Figma Make
   - You may need to do this in batches:
     - First: Upload root files (App.tsx, README.md, etc.)
     - Second: Upload `components/` folder
     - Third: Upload `styles/` folder
   - Commit changes after each upload

3. **Add the configuration files**
   - Click "Add file" → "Create new file"
   - Name: `package.json`
   - Paste the content from Step 3 above
   - Repeat for each config file

---

## Method 3: Use Browser DevTools (Advanced)

If Figma Make has all files in memory:

1. Open browser DevTools (F12)
2. Go to "Application" or "Storage" tab
3. Look for project files in memory/cache
4. Copy file contents manually

---

## After Downloading - Next Steps

### Option A: Upload to GitHub
1. Go to https://github.com/new
2. Create repository named `chantal-portfolio`
3. Upload all your downloaded files
4. Done! Now deploy to Vercel (see DEPLOYMENT.md)

### Option B: Run Locally in VS Code
1. Open the `chantal-portfolio` folder in VS Code
2. Open terminal (`Ctrl+``)
3. Run: `npm install`
4. Run: `npm run dev`
5. Opens at `http://localhost:5173`

---

## Checklist Before Uploading/Running

Make sure you have these files:

### Required Files
- [ ] `App.tsx` - Main app component
- [ ] `package.json` - Dependencies and scripts
- [ ] `index.html` - HTML entry point
- [ ] `vite.config.ts` - Vite configuration
- [ ] `tsconfig.json` - TypeScript config
- [ ] `README.md` - Documentation
- [ ] `DEPLOYMENT.md` - Deployment guide
- [ ] `.gitignore` - Git ignore rules

### Required Folders
- [ ] `components/` - React components
- [ ] `components/ui/` - UI components
- [ ] `components/figma/` - Figma utilities
- [ ] `styles/` - CSS files

### Component Files (in components/)
- [ ] `About.tsx`
- [ ] `Footer.tsx`
- [ ] `Header.tsx`
- [ ] `Hero.tsx`
- [ ] `Projects.tsx`
- [ ] `Skills.tsx`

### Style Files (in styles/)
- [ ] `globals.css`

---

## Quick File Count Check

You should have approximately:
- **70+ files total**
- **45+ UI component files** in `components/ui/`
- **6 main component files** in `components/`
- **5+ config files** in root
- **3+ documentation files** (.md files)

---

## Troubleshooting

### "Can't find file X"
- Check the file structure above
- Make sure folders are nested correctly
- File names are case-sensitive!

### "Missing components/ui files"
- You need all ~45 UI components
- Copy them one by one from Figma Make
- Or download as a batch if available

### "Import errors in VS Code"
- Make sure `package.json` exists
- Run `npm install` first
- Check that folder structure matches

---

## Need Help?

1. **Check DEPLOYMENT.md** - Detailed setup instructions
2. **Check README.md** - Project overview and documentation
3. **GitHub Issues** - Search for similar problems

---

## Time Estimate

- **Manual download**: 30-45 minutes (copying all files)
- **Direct GitHub upload**: 15-20 minutes (batch uploads)
- **Running locally after download**: 5 minutes (npm install + npm run dev)

---

**Pro Tip**: Start by creating the folder structure first, then systematically download files folder by folder. This keeps everything organized!

---

**Questions?** Check out the DEPLOYMENT.md file for more detailed instructions on what to do after downloading!
