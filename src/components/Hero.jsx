import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">SAKTHIVEL SELVAM</h1>
          <h2 className="hero-title">Software Developer</h2>
          <p className="hero-description">
            Crafting exceptional digital experiences with modern web technologies
          </p>
          
          <div className="hero-skills">
            <span className="hero-skill">React</span>
            <span className="hero-skill">Angular</span>
            <span className="hero-skill">Node.js</span>
            <span className="hero-skill">TypeScript</span>
            <span className="hero-skill">AWS</span>
          </div>

          <div className="hero-links">
            <a href="#projects" className="hero-link" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            }}>
              View My Work
            </a>
            <a href="#contact" className="hero-link hero-link-secondary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}>
              Get in Touch
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/Sakthivel-Selvam-MEAN-Developer" target="_blank" rel="noopener noreferrer" aria-label="GitHub">🐙</a>
            <a href="https://sakthivel-selvam-mean-developer.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">💼</a>
            <a href="mailto:sakthiselvamcs@gmail.com" aria-label="Email">✉️</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>SS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 