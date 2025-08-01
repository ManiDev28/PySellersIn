# React + Vite + Tailwind CSS Project

A modern React-based project utilizing the latest frontend technologies and tools for building responsive web applications.

## 🚀 Features

- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router** - Declarative routing for React applications

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Start the server:

```bash
npm run start
# or
yarn start
```

## 📁 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page Index.jsx files
│   ├── styles/          # Global styles and Tailwind configuration
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── Routes.jsx       # Application routes
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration for Tailwind
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
```

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Service from './pages/Services';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Utility-first approach for rapid development
- Custom theme configuration
- Responsive design utilities
- PostCSS and Autoprefixer integration

## 📦 Deployment

Build the application for production:

```bash
npm run build
```

## 🙏 Acknowledgments

- Built with help of Rocket AI
- Powered by React and Vite
- Styled with Tailwind CSS

Built with ❤️ PySellers Team.
