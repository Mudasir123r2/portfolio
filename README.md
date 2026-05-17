# Mudasir Mujtaba - Professional Portfolio

A modern, highly polished, and responsive personal portfolio showcasing my education, skills, projects, certifications, and experience. Built with a premium aesthetic featuring glassmorphism effects, a sleek dark theme with blue accents, and smooth animations.

## 🚀 Live Demo
**[Insert Vercel Live Link Here]**

## ✨ Key Features
- **Modern UI/UX**: Premium dark theme (`#0f172a`), sleek glassmorphism cards, and fluid layouts.
- **Smooth Animations**: Powered by `framer-motion` for staggered scroll-reveal effects, hovers, and dynamic component rendering.
- **Dynamic Projects Showcase**: Grid layout featuring 7 major projects (Lexibot, Vision LLM, etc.) with custom hover effects and direct GitHub repository links.
- **Certifications Gallery**: Dedicated section highlighting credentials from LinkedIn Learning, Coursera, DataCamp, and MongoDB.
- **Fully Functional Contact Form**: Integrated with **EmailJS** for secure, serverless email delivery straight from the browser with built-in loading and animated feedback states.
- **Responsive Design**: Built mobile-first utilizing CSS Grid and Flexbox via Tailwind CSS.

## 🛠️ Technology Stack
- **Frontend Framework**: React 19 (using Vite for lightning-fast build tooling)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & React Scroll
- **Icons**: React Icons (`fa` & `si` libraries)
- **Email Service**: EmailJS (`@emailjs/browser`)
- **Deployment**: Vercel

## 📂 Project Structure
```text
├── src/
│   ├── assets/           # Project images, icons, and profile photos
│   ├── components/       # Reusable React UI components (Hero, Skills, Projects, etc.)
│   ├── data/             # Centralized portfolioData.js (All content lives here!)
│   ├── App.jsx           # Main application routing and section assembly
│   ├── index.css         # Global styles, Tailwind directives, and custom CSS
│   └── main.jsx          # React DOM entry point
├── .env                  # Environment variables (EmailJS keys)
└── tailwind.config.js    # Tailwind configuration
```

## ⚙️ Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mudasir123r2/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (for Contact Form):**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_SERVICE_ID=your_service_id
   VITE_TEMPLATE_ID=your_template_id
   VITE_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📝 Customizing Content
The entire portfolio is designed to be easily configurable. To update your bio, add new projects, or change your skills, simply edit the `src/data/portfolioData.js` file. The UI will automatically populate with the new data.

## 👨‍💻 Author
**Mudasir Mujtaba**
- [LinkedIn](https://www.linkedin.com/in/mudasir-mujtaba-660a88360/)
- [GitHub](https://github.com/Mudasir123r2)
