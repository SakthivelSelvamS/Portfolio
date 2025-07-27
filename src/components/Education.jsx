import React from 'react'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="education-item">
            <div className="education-icon">
              <span>🎓</span>
            </div>
            <div className="education-details">
              <h3 className="education-degree">B.E Computer Science and Engineering</h3>
              <h4 className="education-institution">Sri Shanmugha College of Engineering & Technology - Salem</h4>
              <span className="education-period">2017 - 2021</span>
              <p className="education-description">
                Completed Bachelor of Engineering in Computer Science and Engineering with focus on 
                software development, algorithms, and modern programming languages.
              </p>
            </div>
          </div>
        </div>
        
        <div className="certifications">
          <h3 className="skill-category-title">Additional Training & Internships</h3>
          <div className="cert-grid">
            <div className="cert-item">
              <h4>QA Engineer – Manual Testing (Internship)</h4>
              <p>Hatlet Technologies – SSCET, Salem</p>
              <span>July 2019 - Feb 2020</span>
            </div>
            <div className="cert-item">
              <h4>Python Developer Trainee (Internship)</h4>
              <p>Greefi Technologies-SSCET, Salem</p>
              <span>June 2020 - Dec 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education 