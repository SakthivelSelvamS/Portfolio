
import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      image: "🛒",
      metrics: {
        performance: 95,
        accessibility: 98,
        seo: 100,
        practices: 92
      },
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      features: [
        "Real-time inventory tracking",
        "Payment gateway integration",
        "Admin dashboard",
        "Mobile-responsive design"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      image: "📋",
      metrics: {
        performance: 92,
        accessibility: 100,
        seo: 95,
        practices: 96
      },
      technologies: ["Angular", "TypeScript", "Firebase", "WebSocket"],
      features: [
        "Real-time collaboration",
        "Drag & drop interface",
        "Team notifications",
        "Progress tracking"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "📊",
      metrics: {
        performance: 98,
        accessibility: 95,
        seo: 92,
        practices: 94
      },
      technologies: ["React", "D3.js", "Express.js", "PostgreSQL"],
      features: [
        "Data visualization",
        "Multi-platform analytics",
        "Automated reporting",
        "Custom metrics"
      ],
      githubUrl: "#",
      liveUrl: "#"
    }
  ]

  const capabilities = [
    {
      icon: "⚛️",
      title: "Frontend Development",
      skills: ["React & Next.js", "TypeScript", "Modern CSS", "Web Animation"]
    },
    {
      icon: "⚡",
      title: "Backend & APIs",
      skills: ["Node.js", "RESTful APIs", "GraphQL", "Database Design"]
    },
    {
      icon: "🚀",
      title: "Performance & DevOps",
      skills: ["Web Performance", "CI/CD", "Docker", "AWS"]
    },
    {
      icon: "📱",
      title: "Modern Web",
      skills: ["PWA", "WebSockets", "Service Workers", "WebRTC"]
    },
    {
      icon: "🔒",
      title: "Security",
      skills: ["Authentication", "CORS", "Security Headers", "Data Protection"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      skills: ["Responsive Design", "Accessibility", "User Experience", "Prototyping"]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">{project.image}</div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>

              <div className="project-metrics">
                <h4>Performance Metrics</h4>
                <div className="metrics-grid">
                  <div className="metric">
                    <div 
                      className="metric-circle" 
                      style={{ ['--percentage' as any]: `${project.metrics.performance}%` }}
                    >
                      <span className="metric-value">{project.metrics.performance}</span>
                    </div>
                    <span className="metric-label">Performance</span>
                  </div>
                  <div className="metric">
                    <div 
                      className="metric-circle" 
                      style={{ ['--percentage' as any]: `${project.metrics.accessibility}%` }}
                    >
                      <span className="metric-value">{project.metrics.accessibility}</span>
                    </div>
                    <span className="metric-label">Accessibility</span>
                  </div>
                  <div className="metric">
                    <div className="metric-circle" style={{'--percentage': `${project.metrics.seo}%` as any}}>
                      <span className="metric-value">{project.metrics.seo}</span>
                    </div>
                    <span className="metric-label">SEO</span>
                  </div>
                  <div className="metric">
                    <div className="metric-circle" style={{'--percentage': `${project.metrics.practices}%` as any}}>
                      <span className="metric-value">{project.metrics.practices}</span>
                    </div>
                    <span className="metric-label">Best Practices</span>
                  </div>
                </div>
              </div>

              <div className="project-tech">
                <h4>Technologies</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-features">
                <h4>Key Features</h4>
                <ul className="features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>▹ {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-actions">
                <a href={project.githubUrl} className="btn-secondary">View Code</a>
                <a href={project.liveUrl} className="btn-primary">Live Demo</a>
              </div>
            </div>
          ))}
        </div>

        <div className="capabilities-section">
          <h2 className="section-title">Technical Capabilities</h2>
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="capability-card">
                <div className="capability-icon">{capability.icon}</div>
                <h3 className="capability-title">{capability.title}</h3>
                <ul className="capability-skills">
                  {capability.skills.map((skill, idx) => (
                    <li key={idx}>• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 