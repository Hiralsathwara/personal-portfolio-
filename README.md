<<<<<<< HEAD
# Portfolio Website - Hiral Sathwara

## Overview

This is a personal portfolio website built with React.js and TailwindCSS for the frontend, and Node.js/Express for the backend contact form API.

## Features

- Hero section with animated gradient background
- About Me section with skills and bio
- Projects section with filters and hover effects
- Resume / Experience section with timeline style
- Contact form with backend email sending
- Sticky navbar with smooth scrolling and dark mode toggle
- Responsive design for desktop, tablet, and mobile
- SEO meta tags and Google Analytics integration (to be added)
- Lazy loading images
- Footer with social icons and quick links

## Getting Started

### Prerequisites

- Node.js and npm installed
- Gmail account for sending emails (with app password if 2FA enabled)

### Frontend Setup

1. Navigate to the `portfolio-site` directory:

```bash
cd portfolio-site
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

### Backend Setup

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install express cors nodemailer dotenv
```

3. Create a `.env` file based on `.env.example` and fill in your Gmail credentials:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

4. Start the backend server:

```bash
node server.js
```

### Running the Full Application

- Start the backend server first (`node backend/server.js`).
- Start the frontend React app (`npm start` in `portfolio-site`).
- The frontend will send contact form submissions to the backend API.

## Deployment

- Build the React app with `npm run build` in `portfolio-site`.
- Deploy the frontend build and backend server to your preferred hosting platform.
- Configure environment variables securely on the server.

## Notes

- Replace the placeholder profile photo in `Hero.js` with your professional photo.
- Add your resume PDF file to the `public` folder as `resume.pdf`.
- Google Analytics integration and optional blog/testimonials sections can be added later.

## License

This project is open source and free to use.
=======
# personal-portfolio-
This is my personal portfolio website built using React, Tailwind CSS, and Node.js. It showcases my skills, projects, and experience in web development and data science. The site is fully responsive, includes a dynamic contact form with EmailJS/Nodemailer integration, and serves as a platform to connect and collaborate.
>>>>>>> 4ec760aa97dcd9424e80c189807bcae55ed74851
