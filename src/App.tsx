import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="profile-section">
          <div className="profile-wrapper">
            <div className="profile-content">
              <div className="profile-image">
                <div className="profile-circle"></div>
              </div>
              
              <div className="profile-info">
                <h1 className="name">Sakthivel Selvam</h1>
                <h2 className="title">Software Developer</h2>
                <div className="divider"></div>
                <p className="description">Experienced Full-Stack Developer (3+ years) specializing in React, Node.js, and cloud technologies for web and mobile applications.</p>
                
                <div className="contact-info">
                  <div className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span>sakthiselvamcs@gmail.com</span>
                  </div>
                  
                  <div className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>Erode, Tamil Nadu</span>
                  </div>
                  
                  <div className="social-links">
                    <a href="https://github.com/SakthivelSelvamS" target="_blank" rel="noopener noreferrer" className="social-link github-link">
                      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/SakthivelSelvamS/" target="_blank" rel="noopener noreferrer" className="social-link linkedin-link">
                      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                    <a href="./Sakthivel_S_Resume.pdf" download className="social-link resume-link">
                      <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7,10 12,15 17,10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="skills-section">
            <div className="skills-content">
              <div className="section-header">
                <h3 className="section-title">Core Skills</h3>
                <div className="section-divider"></div>
              </div>
              
              <div className="skills-grid">
                <div className="skill-category">
                  <div className="skill-header">
                    <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3"></path>
                    </svg>
                    <h4 className="skill-category-title">Languages & Frameworks</h4>
                  </div>
                  <div className="skill-tags">
                    <span className="skill-tag">JavaScript (ES6+)</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">FlutterFlow</span>
                  </div>
                </div>

                <div className="skill-category">
                  <div className="skill-header">
                    <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3"></path>
                    </svg>
                    <h4 className="skill-category-title">Frontend</h4>
                  </div>
                  <div className="skill-tags">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Angular 8+</span>
                    <span className="skill-tag">HTML5 & CSS3</span>
                    <span className="skill-tag">Bootstrap</span>
                    <span className="skill-tag">Material UI</span>
                  </div>
                </div>

                <div className="skill-category">
                  <div className="skill-header">
                    <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
                    </svg>
                    <h4 className="skill-category-title">Backend</h4>
                  </div>
                  <div className="skill-tags">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express.js</span>
                    <span className="skill-tag">PostgreSQL</span>
                  </div>
                </div>

                <div className="skill-category">
                  <div className="skill-header">
                    <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                    </svg>
                    <h4 className="skill-category-title">DevOps & Cloud</h4>
                  </div>
                  <div className="skill-tags">
                    <span className="skill-tag">AWS (EC2, S3, RDS, SQS)</span>
                    <span className="skill-tag">Docker</span>
                    <span className="skill-tag">Nginx</span>
                    <span className="skill-tag">Git & GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <div className="experience-content">
              <div className="section-header">
                <h3 className="section-title">Experience</h3>
                <div className="section-divider"></div>
              </div>
              
              <div className="experience-list">
                <div className="job">
                  <div className="job-timeline">
                    <div className="timeline-dot"></div>
                    <div className="job-content">
                      <div className="job-header">
                        <div className="job-meta">
                          <h4 className="job-title">Full Stack Developer</h4>
                          <span className="period">Jan 2024 - Present</span>
                        </div>
                        <p className="company">Wonderwhy Solution, Erode</p>
                      </div>
                      <p className="job-description">Developed scalable web and mobile apps using React, Node.js, FlutterFlow, and Express.js. Deployed and managed cloud-based infrastructure using Docker, AWS, and Nginx. Used AI tools to streamline development workflows and enhance product delivery.</p>
                    </div>
                  </div>
                </div>

                <div className="job">
                  <div className="job-timeline">
                    <div className="timeline-dot"></div>
                    <div className="job-content">
                      <div className="job-header">
                        <div className="job-meta">
                          <h4 className="job-title">Frontend Engineer</h4>
                          <span className="period">Dec 2021 - May 2023</span>
                        </div>
                        <p className="company">Capgemini Engineering, Gurugram</p>
                      </div>
                      <p className="job-description">Built dynamic applications using Angular 8+, JavaScript, and TypeScript. Developed responsive UIs using HTML5 and CSS3, ensuring cross-browser compatibility. Worked closely with stakeholders to transform business needs into technical solutions.</p>
                    </div>
                  </div>
                </div>

                <div className="job">
                  <div className="job-timeline">
                    <div className="timeline-dot"></div>
                    <div className="job-content">
                      <div className="job-header">
                        <div className="job-meta">
                          <h4 className="job-title">Junior SAP ABAP Consultant</h4>
                          <span className="period">July 2021 - Dec 2021</span>
                        </div>
                        <p className="company">ERP Roots, Coimbatore</p>
                      </div>
                      <p className="job-description">Developed and optimized ABAP code for SAP modules to enhance system functionality. Customized SAP applications based on client business processes and requirements.</p>
                    </div>
                  </div>
                </div>

                <div className="job">
                  <div className="job-timeline">
                    <div className="timeline-dot"></div>
                    <div className="job-content">
                      <div className="job-header">
                        <div className="job-meta">
                          <h4 className="job-title">Python Developer Trainee</h4>
                          <span className="period">June 2020 - Dec 2020</span>
                        </div>
                        <p className="company">Greefi Technologies - SSCET, Salem</p>
                      </div>
                      <p className="job-description">Learned Python fundamentals & participated in real-time coding tasks. Developed small projects during college under mentorship.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
