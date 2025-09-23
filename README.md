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

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the `.env` file with your backend URL:

```
REACT_APP_API_URL=https://your-backend-service-name.onrender.com
```

5. Start the development server:

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
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the `.env` file with your Gmail credentials:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

5. Start the backend server:

```bash
npm start
```

### Running the Full Application

- Start the backend server first (`npm start` in `backend`).
- Start the frontend React app (`npm start` in `portfolio-site`).
- The frontend will send contact form submissions to the backend API.

## 🚀 Deployment on Render

### Option 1: Using Render Dashboard (Recommended)

#### Frontend Deployment (Static Site)
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New" → "Static Site"
3. Connect your GitHub repository
4. Fill in the details:
   - **Name**: `portfolio-frontend` (or your preferred name)
   - **Runtime**: `Node`
   - **Build Command**: `cd portfolio-site && npm install && npm run build`
   - **Publish Directory**: `portfolio-site/build`
   - **Root Directory**: Leave empty (uses repository root)

#### Backend Deployment (Web Service)
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Fill in the details:
   - **Name**: `portfolio-backend` (or your preferred name)
   - **Runtime**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: Leave empty (uses repository root)

#### Environment Variables
Add these to your backend service in Render:
- `EMAIL_USER` = your Gmail address
- `EMAIL_PASS` = your Gmail app password (if 2FA enabled)
- `NODE_ENV` = production

Add this to your frontend service in Render:
- `REACT_APP_API_URL` = https://your-backend-service-name.onrender.com

### Option 2: Using render.yaml (Automated)

1. The `render.yaml` file is already configured in your repository
2. Push your code to GitHub
3. Render will automatically detect the configuration and create both services
4. Set the environment variables in the Render dashboard for the backend service

### Post-Deployment Steps

1. **Update Frontend Environment Variable**: Once your backend is deployed, update the `REACT_APP_API_URL` in your frontend service to point to your backend URL.

2. **Test the Contact Form**: Try sending a test message through your contact form to ensure everything is working.

3. **Custom Domain** (Optional): You can add a custom domain in Render's dashboard.

## Environment Variables Reference

### Backend (.env)
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=5000
NODE_ENV=production
```

### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-service-name.onrender.com
```

## Notes

- Replace the placeholder profile photo in `Hero.js` with your professional photo.
- Add your resume PDF file to the `public` folder as `resume.pdf`.
- Google Analytics integration and optional blog/testimonials sections can be added later.
- Make sure to enable less secure app access or use app passwords for Gmail.

## License

This project is open source and free to use.
