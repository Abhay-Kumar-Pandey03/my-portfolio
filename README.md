# 🚀 Abhay Kumar Pandey — Developer Portfolio

A modern, dark-themed personal portfolio website built with **React** and **Tailwind CSS**, showcasing my projects, skills, and a real, spam-protected contact form.

## 🌐 Live Demo

> https://my-portfolio-eta-ebon-38.vercel.app/

## ✨ Features

- **Dark mode** design with smooth blue gradient background
- **Typing animation** on the hero section greeting
- **Scroll reveal animations** — sections slide in from the left
- **Active link highlight** — nav links update as you scroll
- **Responsive design** — works on all screen sizes
- **Real, working contact form** — sends actual emails via EmailJS, protected by a honeypot field, a client-side rate limit, and a Google reCAPTCHA v2 check verified server-side by EmailJS
- **Resume always up to date** — the "View Resume" button links to a Google Drive file. Replacing the file in Drive (via "Manage versions") updates the live site instantly, no redeploy needed
- **Self-updating project cards** — a scheduled GitHub Action pulls live data (last-updated date, and optionally description/tech tags) from each project's GitHub repo and commits it back into the site automatically
- **Constants file** for easy personal info management

## 🛠️ Tech Stack

| Technology              | Purpose                                   |
|--------------------------|--------------------------------------------|
| React.js                 | UI framework                               |
| Tailwind CSS v4          | Styling                                    |
| Vite                     | Build tool and dev server                  |
| react-icons               | Icon library                               |
| CSS Variables             | Dark mode theming                          |
| IntersectionObserver API  | Scroll animations                          |
| @emailjs/browser          | Sends contact form messages, no backend    |
| react-google-recaptcha    | reCAPTCHA v2 "I'm not a robot" checkbox    |
| GitHub Actions            | Scheduled sync of project data from GitHub |

## 📁 Project Structure
```plaintext
my-portfolio/
├── .github/
│   └── workflows/
│       └── sync-projects.yml    # Daily job that refreshes project data from GitHub
├── public/
│   └── img.jpg                  # Profile photo
├── scripts/
│   └── sync-projects.mjs        # Pulls repo metadata into src/data/projects.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Top bar with logo and dark mode toggle
│   │   ├── Hero.jsx             # Hero section with typing animation + nav links
│   │   ├── About.jsx            # About me section + resume link (Google Drive)
│   │   ├── Projects.jsx         # Featured projects, reads from src/data/projects.json
│   │   ├── Skills.jsx           # Skills and tools
│   │   ├── Contact.jsx          # Real contact form: EmailJS + reCAPTCHA v2 + honeypot
│   │   └── Footer.jsx           # Footer
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/light mode context
│   ├── data/
│   │   └── projects.json        # Source of truth for project cards (auto-synced)
│   ├── utils/
│   │   └── constants.js         # GitHub, LinkedIn, resume Drive link
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles + Tailwind
├── .env.example                 # Template for required environment variables
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm v8 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Abhay-Kumar-Pandey03/my-portfolio.git

# 2. Navigate into the project
cd my-portfolio

# 3. Install dependencies
npm install

# 4. Set up environment variables (see below)
cp .env.example .env

# 5. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

## 🔐 Environment Variables

The contact form and reCAPTCHA need four values. Copy `.env.example` to `.env` and fill them in — **never commit `.env`**, it's git-ignored.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_v2_site_key
```

- **EmailJS** — create a service + template at [dashboard.emailjs.com](https://dashboard.emailjs.com). In the template's **Settings tab**, enable "reCAPTCHA V2 verification" and paste in your reCAPTCHA **Secret Key** (this is what makes EmailJS reject unverified submissions server-side).
- **reCAPTCHA v2** — register a site at [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin), type "I'm not a robot" checkbox. Add both your production domain and `localhost`. You'll get a Site Key (goes in `.env`) and a Secret Key (goes only in EmailJS, never in code).

If deploying on Vercel, add the same four variables under **Project → Settings → Environment Variables**, then redeploy.

## 🔁 Keeping Content Up to Date

### Resume
The "View Resume" button links directly to a Google Drive file (`RESUME_DRIVE_FILE_ID` in `src/utils/constants.js`). To update your resume, replace the file in Drive using **"Manage versions"** (not a new upload) — the link stays the same and the live site instantly serves the new version. No code change, no redeploy.

### Projects
`src/data/projects.json` is the source of truth for the Projects section. Each entry lists the GitHub repo(s) behind it:

```json
{
  "name": "MealMate",
  "repos": [{ "owner": "Abhay-Kumar-Pandey03", "repo": "MealMate", "role": "primary" }],
  "autoSync": { "desc": false, "stack": false }
}
```

A GitHub Action (`.github/workflows/sync-projects.yml`) runs `scripts/sync-projects.mjs` daily (and can be triggered manually from the Actions tab). It:
- Always updates the "Updated {month year}" badge shown on each project card, from the repo's real last-push date
- Only overwrites the description or tech-stack tags if that project's `autoSync.desc` / `autoSync.stack` flags are set to `true` — otherwise your hand-written copy is left untouched
- Commits any changes back to the repo, which triggers an automatic Vercel redeploy

To run the sync manually:
```bash
GITHUB_TOKEN=ghp_xxx node scripts/sync-projects.mjs
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-google-recaptcha": "^3.1.0",
    "react-icons": "^5.6.0",
    "react-router-dom": "^7.13.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.2.2",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.4.27",
    "tailwindcss": "^4.2.2",
    "vite": "^8.0.1"
  }
}
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Remember to add the four environment variables in Vercel's dashboard before your first real deploy.

### Netlify
```bash
npm run build
# Drag and drop the dist/ folder to netlify.com/drop
```
Add the same environment variables under Site settings → Environment variables.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**Abhay Kumar Pandey**
- GitHub: [Abhay-Kumar-Pandey03](https://github.com/Abhay-Kumar-Pandey03)
- LinkedIn: [abhay-kumar-pandey-](https://linkedin.com/in/abhay-kumar-pandey-/)
