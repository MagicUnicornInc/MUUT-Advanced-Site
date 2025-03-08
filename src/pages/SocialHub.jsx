import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import BackgroundSparkles from '../components/BackgroundSparkles';
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import '../styles/SocialHub.css';

export default function SocialHub() {
  // Mock data for social media feeds
  const twitterPosts = [
    {
      id: 1,
      content: "Just released our latest AI workflow automation tool! Check it out at magicunicorn.tech #AI #Automation",
      date: "2 hours ago",
      likes: 42,
      retweets: 12
    },
    {
      id: 2,
      content: "Excited to announce our upcoming webinar on 'The Future of AI in Creative Industries' - Register now!",
      date: "1 day ago",
      likes: 38,
      retweets: 15
    },
    {
      id: 3,
      content: "Building in public update: Unicorn Commander is now 65% complete. Latest milestone: agent communication protocol ✅",
      date: "3 days ago",
      likes: 56,
      retweets: 23
    }
  ];

  const youtubeVideos = [
    {
      id: "video1",
      title: "How We Built an AI-Powered Content Creation Pipeline",
      thumbnail: "https://via.placeholder.com/320x180/4B0082/FFFFFF?text=AI+Content+Pipeline",
      views: "1.2K",
      date: "2 weeks ago"
    },
    {
      id: "video2",
      title: "Reactive Lighting Demo: Emotion-Responsive Environments",
      thumbnail: "https://via.placeholder.com/320x180/800080/FFFFFF?text=Reactive+Lighting",
      views: "3.5K",
      date: "1 month ago"
    },
    {
      id: "video3",
      title: "Magic Unicorn Tech: Our Vision and Mission",
      thumbnail: "https://via.placeholder.com/320x180/9932CC/FFFFFF?text=Our+Vision",
      views: "5.8K",
      date: "2 months ago"
    }
  ];

  return (
    <div className="social-hub-page">
      <BackgroundSparkles />
      <PageHeader 
        title="Social Media Hub" 
        subtitle="Connect with us across platforms and stay updated on our latest news"
      />

      <section className="social-links-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Follow Us
          </motion.h2>
          
          <div className="social-links-grid">
            <motion.a 
              href="https://twitter.com/magicunicorntech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-card twitter"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(29, 161, 242, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <FaTwitter className="social-icon" />
              <span className="platform-name">Twitter</span>
              <span className="handle">@magicunicorntech</span>
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/company/magicunicorntech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-card linkedin"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 119, 181, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaLinkedin className="social-icon" />
              <span className="platform-name">LinkedIn</span>
              <span className="handle">Magic Unicorn Tech</span>
            </motion.a>
            
            <motion.a 
              href="https://instagram.com/magicunicorntech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-card instagram"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(225, 48, 108, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaInstagram className="social-icon" />
              <span className="platform-name">Instagram</span>
              <span className="handle">@magicunicorntech</span>
            </motion.a>
            
            <motion.a 
              href="https://youtube.com/c/magicunicorntech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-card youtube"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(255, 0, 0, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaYoutube className="social-icon" />
              <span className="platform-name">YouTube</span>
              <span className="handle">Magic Unicorn Tech</span>
            </motion.a>
            
            <motion.a 
              href="https://github.com/magicunicorntech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-card github"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(110, 84, 148, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <FaGithub className="social-icon" />
              <span className="platform-name">GitHub</span>
              <span className="handle">magicunicorntech</span>
            </motion.a>
          </div>
        </div>
      </section>

      <section className="twitter-feed-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Latest Tweets
          </motion.h2>
          
          <div className="twitter-feed">
            {twitterPosts.map((tweet, index) => (
              <motion.div 
                key={tweet.id}
                className="tweet-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="tweet-header">
                  <img 
                    src="https://via.placeholder.com/50x50/4B0082/FFFFFF?text=MU" 
                    alt="Magic Unicorn" 
                    className="tweet-avatar"
                  />
                  <div className="tweet-user-info">
                    <span className="tweet-name">Magic Unicorn Tech</span>
                    <span className="tweet-handle">@magicunicorntech</span>
                  </div>
                </div>
                <p className="tweet-content">{tweet.content}</p>
                <div className="tweet-footer">
                  <span className="tweet-date">{tweet.date}</span>
                  <div className="tweet-stats">
                    <span className="tweet-likes">{tweet.likes} Likes</span>
                    <span className="tweet-retweets">{tweet.retweets} Retweets</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="youtube-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Latest Videos
          </motion.h2>
          
          <div className="youtube-grid">
            {youtubeVideos.map((video, index) => (
              <motion.div 
                key={video.id}
                className="youtube-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)' }}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-button">
                    <FaYoutube />
                  </div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <div className="video-meta">
                    <span className="video-views">{video.views} views</span>
                    <span className="video-date">{video.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://youtube.com/c/magicunicorntech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View All Videos
            </a>
          </div>
        </div>
      </section>

      <section className="social-cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Community</h2>
            <p>Stay updated with our latest projects, experiments, and insights by following us on social media.</p>
            <button className="btn btn-primary">Subscribe to Updates</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
