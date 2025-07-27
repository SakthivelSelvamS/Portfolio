const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript", 
        "React",
        "Angular 8+",
        "FlutterFlow",
        "Node.js",
        "Express.js",
        "HTML5",
        "CSS3",
        "Bootstrap"
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Docker",
        "AWS (EC2, S3, RDS)",
        "Nginx",
        "CI/CD basics"
      ]
    },
    {
      title: "Tools & Version Control",
      skills: [
        "Git",
        "GitHub",
        "Debugging & Testing"
      ]
    },
    {
      title: "Database & Data Handling",
      skills: [
        "MySQL",
        "MongoDB",
        "SQL",
        "NoSQL"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Agile Methodologies",
        "Team Collaboration", 
        "Quick Learner",
        "Strong Communication"
      ]
    }
  ]

  const languages = [
    { name: "English", level: "Professional" },
    { name: "Tamil", level: "Native" }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Languages</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="languages-section">
          <h3 className="skill-category-title">Languages</h3>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <span className="language-name">{lang.name}</span>
                <span className="language-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 