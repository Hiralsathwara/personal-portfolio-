
# 🌟 Personal Portfolio Website - Hiral Sathwara

This is my **Personal Portfolio Website**, designed and developed to showcase my **skills, projects, and experience** in the field of software development and data science. The portfolio features a clean, responsive, and modern user interface with smooth animations and interactive components.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Components](#components)
- [Deployment](#deployment)
- [Contact](#contact)

---

## 🎯 Overview

This portfolio website is built with modern web technologies to create an engaging user experience. It showcases:
- Professional background and education
- Technical skills and expertise
- Projects and work samples
- Easy contact methods

---

## ✨ Key Features

- ✅ **Fully Responsive Design** – Optimized for desktop, tablet, and mobile devices
- ✅ **Interactive UI** – Smooth animations and hover effects
- ✅ **Dynamic Components** – Reusable React components for scalability
- ✅ **Project Showcase** – Detailed project cards with technologies used
- ✅ **Skills Section** – Organized by categories (Programming, Web Dev, Data Science, etc.)
- ✅ **Education Timeline** – Display of academic credentials
- ✅ **Contact Information** – Direct links to email, phone, and social media
- ✅ **Modern Design** – Gradient backgrounds and glassmorphism effects
- ✅ **Performance Optimized** – Lazy loading and efficient rendering

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **React.js 18** – UI library for building components
- 🎨 **Tailwind CSS 3** – Utility-first CSS framework
- 🖼️ **React Icons 5** – Icon library for various icons
- 📱 **React Router DOM 6** – Client-side routing
- 🎭 **React Helmet** – Document head management
- 🌐 **JavaScript (ES6+)** – Modern JavaScript features

### **Build Tools**
- 📦 **React Scripts** – Create React App build configuration
- 🎯 **PostCSS** – CSS transformation tool
- 🔧 **Autoprefixer** – CSS vendor prefixing

### **Backend** (Optional)
- 🟢 **Node.js** – Runtime environment
- 🚀 **Express.js** – Web server framework (currently not in use)

---

## 📁 Project Structure

```
personal portfolio/
├── portfolio-site/                 # React frontend application
│   ├── public/
│   │   ├── index.html             # Main HTML file
│   │   └── images/                # Static images
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.js           # About section with education
│   │   │   ├── Contact.js         # Contact information section
│   │   │   ├── Footer.js          # Footer component
│   │   │   ├── Hero.js            # Hero/landing section
│   │   │   ├── Navbar.js          # Navigation bar
│   │   │   ├── Projects.js        # Projects showcase
│   │   │   ├── Resume.js          # Resume/CV section
│   │   │   └── Skills.js          # Skills display
│   │   ├── App.js                 # Main App component
│   │   ├── index.js               # React entry point
│   │   └── index.css              # Global styles
│   ├── package.json               # Dependencies and scripts
│   ├── tailwind.config.js         # Tailwind configuration
│   └── postcss.config.js          # PostCSS configuration
├── backend/                        # Optional backend (not currently used)
│   ├── server.js
│   └── package.json
├── package.json                    # Root package file
├── README.md                       # This file
└── render.yaml                     # Render deployment config
```

---

## ⚙️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "personal portfolio"
   ```

2. **Install frontend dependencies**
   ```bash
   cd portfolio-site
   npm install
   ```

3. **Install backend dependencies** (optional)
   ```bash
   cd ../backend
   npm install
   ```

---

## 🚀 Running the Project

### Development Mode

**Frontend only:**
```bash
cd portfolio-site
npm start
```
- Opens at `http://localhost:3000`
- Hot reload enabled for development

### Production Build

```bash
cd portfolio-site
npm run build
```
- Creates optimized build in `portfolio-site/build/`
- Ready for deployment

### Optional Backend Server
```bash
cd backend
npm run dev
```
- Runs on `http://localhost:5000`
- Requires `.env` file with email configuration

---

## 🧩 Components Overview

| Component | Purpose |
|-----------|---------|
| **Navbar** | Navigation menu with smooth scrolling links |
| **Hero** | Landing section with profile image and intro |
| **About** | Professional summary and education timeline |
| **Skills** | Categorized technical skills with icons |
| **Projects** | Showcased projects with descriptions |
| **Resume** | CV/Resume section (optional) |
| **Contact** | Contact information and social links |
| **Footer** | Footer with navigation and credits |

---

## 🎨 Key Features Explained

### Responsive Design
- Uses Tailwind's responsive classes (sm, md, lg, xl breakpoints)
- Mobile-first approach for better performance

### Animations
- Smooth gradient animations
- Hover effects on interactive elements
- Pulse animations on decorative elements

### Color Scheme
- Dark theme with gradient accents
- Cyan, Purple, and Pink gradients
- High contrast for accessibility

---

## 🌐 Deployment

### Deploy to Render
The project includes a `render.yaml` configuration file for easy deployment to Render:

1. Push your code to GitHub
2. Connect your repository to Render
3. Render will auto-deploy based on `render.yaml` configuration

### Manual Deployment
1. Build the frontend: `npm run build`
2. Serve the `portfolio-site/build/` directory
3. Configure environment variables if using backend

---

## 📝 Environment Variables

If using the optional backend:

Create a `.env` file in the `backend/` directory:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

---

## 📱 Screenshots

- **Hero Section**: Dynamic gradient background with profile image
- **About Section**: Education details with smooth cards
- **Skills Section**: Categorized skills with icon displays
- **Projects Section**: Project cards with technology badges
- **Contact Section**: Direct contact information and social links

---

## ✉️ Contact & Social

- **Email**: hiralsathwara2006@gmail.com
- **Phone**: +91 9979117384
- **Location**: Ahmedabad, Gujarat, India
- **LinkedIn**: [Hiral Sathwara](https://www.linkedin.com/in/hiral-sathwara-873561269/)
- **GitHub**: [Hiralsathwara](https://github.com/Hiralsathwara)

---

## 📄 License

This portfolio website is personal work. Feel free to use it as inspiration for your own portfolio!

---

## 🙏 Acknowledgments

- **React Community** for excellent documentation
- **Tailwind CSS** for utility-first styling
- **React Icons** for comprehensive icon library
- **Create React App** for build configuration

---

## 🚀 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add animations library (Framer Motion)
- [ ] Implement contact form backend integration
- [ ] Add testimonials section
- [ ] SEO optimization improvements

---

**Last Updated**: April 2026

