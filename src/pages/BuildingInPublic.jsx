import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import '../styles/BuildingInPublic.css';

export default function BuildingInPublic() {
  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: 'Unicorn Commander',
      description: 'An AI command center for managing multiple AI agents and workflows.',
      status: 'In Progress',
      progress: 65,
      updates: [
        { date: '2023-10-15', text: 'Implemented agent communication protocol' },
        { date: '2023-10-01', text: 'Completed UI dashboard design' },
        { date: '2023-09-20', text: 'Started backend architecture' }
      ],
      image: 'https://via.placeholder.com/800x400/4B0082/FFFFFF?text=Unicorn+Commander'
    },
    {
      id: 2,
      title: 'AI Influencer Pipeline',
      description: 'Automated content creation and distribution system for digital marketing.',
      status: 'Early Development',
      progress: 30,
      updates: [
        { date: '2023-10-10', text: 'Completed content generation module' },
        { date: '2023-09-25', text: 'Designed system architecture' },
        { date: '2023-09-15', text: 'Initial concept and research' }
      ],
      image: 'https://via.placeholder.com/800x400/800080/FFFFFF?text=AI+Influencer+Pipeline'
    },
    {
      id: 3,
      title: 'Security Innovations',
      description: 'Advanced security protocols for AI systems and data protection.',
      status: 'Research Phase',
      progress: 15,
      updates: [
        { date: '2023-10-05', text: 'Completed initial threat model' },
        { date: '2023-09-20', text: 'Research on encryption methods' },
        { date: '2023-09-10', text: 'Project kickoff' }
      ],
      image: 'https://via.placeholder.com/800x400/9932CC/FFFFFF?text=Security+Innovations'
    }
  ];

  // Mock data for experiments
  const experiments = [
    {
      id: 1,
      title: 'GPT-4 Workflow Automation',
      description: 'Testing GPT-4\'s capabilities in automating complex business workflows.',
      date: '2023-10-12',
      tags: ['AI', 'Automation', 'GPT-4']
    },
    {
      id: 2,
      title: 'Reactive Lighting Systems',
      description: 'Experimenting with sensors and LED systems that react to human movement and emotions.',
      date: '2023-09-28',
      tags: ['Lighting', 'IoT', 'Sensors']
    },
    {
      id: 3,
      title: 'Voice-Controlled AI Assistants',
      description: 'Building custom voice interfaces for specialized AI assistants.',
      date: '2023-09-15',
      tags: ['Voice AI', 'Assistants', 'NLP']
    }
  ];

  return (
    <div className="building-in-public-page">
      <PageHeader 
        title="Building in Public" 
        subtitle="Follow our journey as we create innovative AI and tech solutions"
      />

      <section className="live-updates-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Current Projects
          </motion.h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-status">{project.status}</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="progress-container">
                    <div className="progress-label">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="project-updates">
                    <h4>Recent Updates</h4>
                    <ul>
                      {project.updates.map((update, i) => (
                        <li key={i}>
                          <span className="update-date">{update.date}</span>
                          <span className="update-text">{update.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="experiments-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Latest Experiments
          </motion.h2>
          
          <div className="experiments-grid">
            {experiments.map((experiment, index) => (
              <motion.div 
                key={experiment.id}
                className="experiment-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{experiment.title}</h3>
                <p>{experiment.description}</p>
                <div className="experiment-meta">
                  <span className="experiment-date">{experiment.date}</span>
                  <div className="experiment-tags">
                    {experiment.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="community-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Community Involvement
          </motion.h2>
          
          <div className="community-content">
            <motion.div
              className="community-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Join Our Journey</h3>
              <p>
                We believe in transparency and collaboration. By building in public, we invite you to follow our progress, 
                provide feedback, and even contribute to our projects. Here's how you can get involved:
              </p>
              <ul>
                <li>Follow us on social media for daily updates</li>
                <li>Join our Discord community for discussions</li>
                <li>Attend our monthly virtual open house events</li>
                <li>Subscribe to our newsletter for detailed progress reports</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="community-cta"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="cta-card">
                <h3>Ready to Collaborate?</h3>
                <p>We're always looking for feedback, ideas, and potential collaborators.</p>
                <button className="btn btn-primary">Join Our Community</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
