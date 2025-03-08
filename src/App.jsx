import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BuildingInPublic from './pages/BuildingInPublic';
import SocialHub from './pages/SocialHub';

// Track page views with Google Analytics
function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_path: location.pathname,
      });
    }
  }, [location]);
}

// Wrapper component for page view tracking
function AppWithPageViews() {
  usePageViews();

  return (
    <ErrorBoundary>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/building-in-public" element={<BuildingInPublic />} />
        <Route path="/social-hub" element={<SocialHub />} />
      </Routes>
      <Footer />
    </ErrorBoundary>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWithPageViews />
    </BrowserRouter>
  );
}

export default App;
