const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Wonderwhy Solution, Erode",
      period: "JAN 2024 – PRESENT",
      responsibilities: [
        "Developed scalable web and mobile apps using React, Node.js, FlutterFlow, and Express.js",
        "Deployed and managed cloud-based infrastructure using Docker, AWS, and Nginx",
        "Used AI tools to streamline development workflows and enhance product delivery",
        "Collaborated with teams to deliver features with high code quality and performance"
      ]
    },
    {
      title: "Front End Engineer",
      company: "Capgemini Engineering, Gurugram",
      period: "Dec 2021 - May 2023",
      responsibilities: [
        "Built dynamic applications using Angular8+, JavaScript, and TypeScript",
        "Developed responsive UIs using HTML5 and CSS3, ensuring cross-browser compatibility",
        "Worked closely with stakeholders to transform business needs into technical solutions"
      ]
    },
    {
      title: "Junior SAP ABAP Consultant",
      company: "ERP Roots, Coimbatore",
      period: "July 2021 - Dec 2021",
      responsibilities: [
        "Developed and optimized ABAP code for SAP modules to enhance system functionality",
        "Customized SAP applications based on client business processes and requirements"
      ]
    },
    {
      title: "Python Developer Trainee (Internship)",
      company: "Greefi Technologies-SSCET, Salem",
      period: "June 2020 - Dec 2020",
      responsibilities: [
        "Learned Python fundamentals & participated in real-time coding tasks",
        "Developed small projects during college under mentorship"
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <span className="experience-period">{exp.period}</span>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 