import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceOptions from '../components/ServiceOptions';
import { FaRocket, FaLightbulb, FaMagic, FaNewspaper, FaUsers, FaEnvelope } from 'react-icons/fa';
import { UnicornLogo } from '../images';
import '../styles/ServiceOptions.css';
import '../styles/Home.css';

// Lazy load components
const LazyImage = lazy(() => import('../components/LazyImage'));
const BlogPreview = lazy(() => import('../components/BlogPreview'));

export default function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="sparkles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="sparkle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <motion.img 
            src={UnicornLogo}
            alt="Magic Unicorn Logo" 
            className="hero-logo"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </Suspense>
        <motion.h1 
          className="glowing-text"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Where Tech Meets Magic
        </motion.h1>
        <motion.p 
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Transforming Ideas into Digital Enchantment
        </motion.p>
        <div className="hero-cta-buttons">
          <Link to="/blog" className="btn btn-primary">Discover Our Innovations</Link>
          <Link to="/services" className="btn btn-secondary">Hire Us for Consulting</Link>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>About Magic Unicorn</h2>
          </motion.div>
          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Magic Unicorn is an AI + artistic technology company focused on creating unconventional solutions. 
            We specialize in AI automation, immersive lighting, and innovative tech that bridges the gap between 
            imagination and reality.
          </motion.p>
        </div>
      </section>

      <section className="blog-preview-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Latest Blog Posts</h2>
          </motion.div>
          <Suspense fallback={<div>Loading blog posts...</div>}>
            <BlogPreview />
          </Suspense>
          <div className="text-center mt-8">
            <Link to="/blog" className="btn btn-secondary">View All Posts</Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Consulting Services</h2>
          </motion.div>
          <ServiceOptions />
          <div className="text-center mt-8">
            <Link to="/services" className="btn btn-primary">Explore All Services</Link>
          </div>
        </div>
      </section>

      <section className="social-hub-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Social Media Hub</h2>
          </motion.div>
          <div className="social-icons">
            <a href="https://twitter.com/magicunicorntech" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/company/magicunicorntech" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/magicunicorntech" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="text-center mt-8">
            <Link to="/social-hub" className="btn btn-secondary">Visit Social Hub</Link>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest updates</p>
          </motion.div>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Magic Unicorn Tech?</h2>
            <p>Where Innovation Meets Imagination</p>
          </motion.div>

          <div className="features-grid">
            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaRocket className="feature-icon" />
              <h3>Rapid Innovation</h3>
              <p>From concept to deployment in record time with our agile approach</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FaLightbulb className="feature-icon" />
              <h3>Creative Solutions</h3>
              <p>Unique approaches to complex challenges using cutting-edge tech</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FaMagic className="feature-icon" />
              <h3>Magical Experience</h3>
              <p>Delightful user experiences that captivate and inspire</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Unleash the Magic?</h2>
            <p>Let's create something extraordinary together</p>
            <Link to="/contact" className="btn btn-primary">Begin the Adventure</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
