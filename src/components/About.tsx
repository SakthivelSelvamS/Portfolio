const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Full-Stack Developer with 2+ years of experience building scalable web and mobile applications.
              Expertise in modern JavaScript frameworks, cloud deployment, and enterprise solutions. 
              Proven ability to deliver high-quality software solutions while collaborating effectively 
              with cross-functional teams.
            </p>
            <p>
              I specialize in React, Angular, Node.js, and cloud technologies like AWS and Docker. 
              I'm passionate about creating efficient, maintainable code and staying up-to-date 
              with the latest technologies in web development.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 