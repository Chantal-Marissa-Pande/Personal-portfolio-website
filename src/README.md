# 🌟 Chantal Marissa Pande - Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS, showcasing my professional profile, skills, and GitHub projects.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4)

## 🚀 Live Demo

<!-- Replace with your actual Vercel/Netlify URL after deployment -->
**Coming Soon** - Deploy this site to Vercel to get your live link!

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean white and gray color scheme with professional teal accents
- **Fast Performance** - Built with Vite for lightning-fast load times
- **SEO Optimized** - Meta tags and semantic HTML for better search engine visibility
- **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation

## 📋 Sections

1. **Hero** - Eye-catching introduction with call-to-action
2. **About Me** - Professional bio and background
3. **Skills & Experience** - Technical skills and work experience timeline
4. **Projects** - Showcase of GitHub repositories with live links
5. **Footer** - Contact information and social links

## 🛠️ Built With

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling
- **Lucide React** - Beautiful icon library
- **Shadcn/ui** - High-quality UI components

## 📦 Project Structure

```
chantal-portfolio/
├── App.tsx                 # Main application component
├── components/
│   ├── About.tsx          # About Me section
│   ├── Footer.tsx         # Footer with contact info
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Projects.tsx       # GitHub projects showcase
│   ├── Skills.tsx         # Skills and experience
│   └── ui/                # Reusable UI components (Shadcn)
├── styles/
│   └── globals.css        # Global styles and Tailwind config
├── package.json           # Project dependencies
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # You are here!
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org)
- **Git** - [Download here](https://git-scm.com)
- A code editor like **VS Code** - [Download here](https://code.visualstudio.com)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/chantal-portfolio.git
   cd chantal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Your portfolio is now running locally! 🎉

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

This portfolio is ready to deploy to any static hosting platform. Recommended options:

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" → Import your repository
4. Click "Deploy"
5. Your site is live! 🚀

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.**

### Other Options

- **Netlify** - [netlify.com](https://netlify.com)
- **GitHub Pages** - [pages.github.com](https://pages.github.com)
- **Render** - [render.com](https://render.com)

All platforms offer free hosting with custom domain support!

## 🎨 Customization

### Update Personal Information

Edit the following files to customize with your information:

- **`components/Hero.tsx`** - Name, title, and hero description
- **`components/About.tsx`** - About me bio
- **`components/Skills.tsx`** - Skills and work experience
- **`components/Projects.tsx`** - GitHub projects
- **`components/Footer.tsx`** - Contact information

### Change Colors

Edit the color scheme in `styles/globals.css`:

```css
:root {
  --primary: #14b8a6;        /* Teal accent color */
  --background: #ffffff;      /* White background */
  --foreground: #1f2937;      /* Dark text */
  --muted: #f9fafb;          /* Light gray */
  /* ... more variables */
}
```

### Add New Sections

1. Create a new component in `components/YourSection.tsx`
2. Import and add it to `App.tsx`:
   ```tsx
   import { YourSection } from "./components/YourSection";
   
   // Add inside <main>
   <YourSection />
   ```

## 📱 Featured Projects

This portfolio showcases the following projects:

1. **Smart Tickets** - Event ticketing system
2. **WhatsApp Clone** - Real-time messaging application
3. **Payroll System** - Employee payroll management
4. **HTML/CSS Bug Hunt** - Debugging exercise project

## 👩‍💻 About the Developer

**Chantal Marissa Pande**
- Software Engineering Student at USIU-Africa
- Based in Nairobi, Kenya
- Passionate about web development and data analysis

### Connect With Me

- **Email**: [chantalpande123@gmail.com](mailto:chantalpande123@gmail.com)
- **LinkedIn**: [Chantal Pande](https://linkedin.com/in/chantal-pande-2b930730a)
- **GitHub**: [@Chantal-Marissa-Pande](https://github.com/Chantal-Marissa-Pande)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **UI Components** - [Shadcn/ui](https://ui.shadcn.com)
- **Icons** - [Lucide Icons](https://lucide.dev)
- **Styling** - [Tailwind CSS](https://tailwindcss.com)
- **Build Tool** - [Vite](https://vitejs.dev)

## 📝 Additional Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Detailed deployment and development guide
- **[Attributions.md](./Attributions.md)** - Credits and licenses

## 🐛 Found a Bug?

If you find a bug or have a suggestion:

1. Check if it's already reported in [Issues](https://github.com/YOUR-USERNAME/chantal-portfolio/issues)
2. If not, create a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior

## 💡 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Include blog section
- [ ] Add contact form with backend
- [ ] Implement project filtering by technology
- [ ] Add animations and transitions
- [ ] Include testimonials section
- [ ] Add downloadable resume/CV

## 🌟 Show Your Support

If you like this portfolio template, please give it a ⭐️ on GitHub!

---

**Built with ❤️ by Chantal Marissa Pande**

*Last updated: October 2025*
