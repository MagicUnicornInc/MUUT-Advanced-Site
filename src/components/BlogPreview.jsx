import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// This would normally fetch from your backend
// For now, we'll use mock data
const mockBlogPosts = [
  {
    id: 1,
    title: 'Implementing AI Workflows for Business Efficiency',
    excerpt: 'How we helped a client automate their customer service using AI chatbots and workflow automation.',
    category: 'AI & Automation',
    date: '2023-10-15',
    author: 'Aaron Stransky',
    image: 'https://via.placeholder.com/600x400/4B0082/FFFFFF?text=AI+Workflows'
  },
  {
    id: 2,
    title: 'Creating Immersive Lighting Experiences',
    excerpt: 'Our latest artistic lighting project transformed a corporate space into an interactive experience.',
    category: 'Artistic Lighting',
    date: '2023-10-10',
    author: 'Aaron Stransky',
    image: 'https://via.placeholder.com/600x400/800080/FFFFFF?text=Lighting+Experiences'
  },
  {
    id: 3,
    title: 'Unicorn Commander: Building in Public Update',
    excerpt: 'Progress report on our AI command center project - challenges and breakthroughs.',
    category: 'Building in Public',
    date: '2023-10-05',
    author: 'Aaron Stransky',
    image: 'https://via.placeholder.com/600x400/9932CC/FFFFFF?text=Unicorn+Commander'
  }
];

export default function BlogPreview() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchPosts = async () => {
      try {
        // In a real implementation, this would be an API call
        // const response = await fetch('/api/blog/recent');
        // const data = await response.json();
        
        // Using mock data for now
        setTimeout(() => {
          setPosts(mockBlogPosts);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading latest posts...</div>;
  }

  return (
    <div className="blog-preview-grid">
      {posts.map((post, index) => (
        <motion.div 
          key={post.id}
          className="blog-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
        >
          <div className="blog-card-image">
            <img src={post.image} alt={post.title} />
            <div className="blog-category">{post.category}</div>
          </div>
          <div className="blog-card-content">
            <h3>{post.title}</h3>
            <div className="blog-meta">
              <span className="blog-date">{post.date}</span>
              <span className="blog-author">by {post.author}</span>
            </div>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">Read More →</Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
