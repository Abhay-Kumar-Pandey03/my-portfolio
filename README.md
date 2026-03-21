# 🚀 Abhay Kumar Pandey — Developer Portfolio

A modern, dark-themed personal portfolio website built with **React** and **Tailwind CSS**, showcasing my projects, skills, and contact information.

## 🌐 Live Demo

> Coming soon — will be deployed on Vercel

## 📸 Preview

> Add a screenshot of your portfolio here after deployment

## ✨ Features

- **Dark mode** design with smooth blue gradient background
- **Typing animation** on the hero section greeting
- **Scroll reveal animations** — sections slide in from the left
- **Active link highlight** — nav links update as you scroll
- **Responsive design** — works on all screen sizes
- **Contact form** with send confirmation
- **Constants file** for easy personal info management

## 🛠️ Tech Stack

| Technology       | Purpose                        |
|------------------|--------------------------------|
| React.js         | UI framework                   |
| Tailwind CSS v4  | Styling                        |
| Vite             | Build tool and dev server      |
| react-icons      | Icon library                   |
| CSS Variables    | Dark mode theming              |
| IntersectionObserver API | Scroll animations     |

## 📁 Project Structure
```plaintext
my-portfolio/
├── public/
│   ├── img.jpg              # Profile photo
│   └── resume.pdf           # Resume file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Top bar with logo and dark mode toggle
│   │   ├── Hero.jsx         # Hero section with typing animation + nav links
│   │   ├── About.jsx        # About me section
│   │   ├── Projects.jsx     # Featured projects
│   │   ├── Skills.jsx       # Skills and tools
│   │   ├── Contact.jsx      # Contact form and links
│   │   └── Footer.jsx       # Footer
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/light mode context
│   ├── utils/
│   │   └── constants.js     # GitHub, LinkedIn, project links
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```


```

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- npm v8 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/abhaykpandey/my-portfolio.git

# 2. Navigate into the project
cd my-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

## ⚙️ Customisation

### Update personal details
All links and contact info are stored in one place:
```js
// src/utils/constants.js
export const GITHUB_PROFILE_URL   = 'your-github-url'
export const LINKEDIN_PROFILE_URL = 'your-linkedin-url'
```

### Update projects
Edit the `projects` array in `src/components/Projects.jsx`:
```js
const projects = [
  {
    name: 'Your Project',
    desc: 'Project description',
    code: YOUR_PROJECT_GITHUB,
    demo: YOUR_PROJECT_DEMO,
    ...
  }
]
```

### Update skills
Edit the `skillGroups` array in `src/components/Skills.jsx`.

### Replace profile photo
Place your photo in `public/` folder and update `About.jsx`:
```jsx
<img src="/your-photo.jpg" alt="Your Name" ... />
```

### Add resume
Place `resume.pdf` in the `public/` folder and update the link in `About.jsx`:
```jsx
<a href="/resume.pdf" download="Your_Name_Resume.pdf">
  View Resume
</a>
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.0.0",
    "vite": "^6.0.0"
  }
}
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the dist/ folder to netlify.com/drop
```

### GitHub Pages
```bash
npm install -D gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**Abhay Kumar Pandey**
- GitHub: (https://github.com/Abhay-Kumar-Pandey03)
- LinkedIn: (https://linkedin.com/in/abhay-kumar-pandey-/)

**Abhay Kumar Pandey**
- GitHub: [@abhaykpandey](https://github.com/abhaykpandey)
- LinkedIn: [abhaykpandey](https://linkedin.com/in/abhaykpandey)