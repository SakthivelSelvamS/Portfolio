
const experienceList = [
    {
        jobTitle:'Full Stack Developer',
        period:'Jan 2024 - Present',
        company:'Wonderwhy Solution, Erode',
        description:'Developed scalable web and mobile apps using React, Node.js, FlutterFlow, and Express.js. Deployed and managed cloud-based infrastructure using Docker, AWS, and Nginx. Used AI tools to streamline development workflows and enhance product delivery.'
    },
    {
        jobTitle:'Frontend Engineer',
        period:'Dec 2021 - May 2023',
        company:'Capgemini Engineering, Gurugram',
        description:'Built dynamic applications using Angular 8+, JavaScript, and TypeScript. Developed responsive UIs using HTML5 and CSS3, ensuring cross-browser compatibility. Worked closely with stakeholders to transform business needs into technical solutions.'
    },
    {
        jobTitle:'Junior SAP ABAP Consultant',
        period:'July 2021 - Dec 2021',
        company:'ERP Roots, Coimbatore',
        description:'Developed and optimized ABAP code for SAP modules to enhance system functionality. Customized SAP applications based on client business processes and requirements.'
    },
    {
        jobTitle:'Python Developer Trainee',
        period:'June 2020 - Dec 2020',
        company:'Greefi Technologies - SSCET, Salem',
        description:'Learned Python fundamentals & participated in real-time coding tasks. Developed small projects during college under mentorship.'
    }
]

export const ExperienceList = () => (
    <>
        {
            experienceList.map(experience => (
                <div className="job" key={experience.jobTitle}>
                  <div className="job-timeline">
                    <div className="timeline-dot"></div>
                    <div className="job-content">
                      <div className="job-header">
                        <div className="job-meta">
                          <h4 className="job-title">{experience.jobTitle}</h4>
                          <span className="period">{experience.period}</span>
                        </div>
                        <p className="company">{experience.company}</p>
                      </div>
                      <p className="job-description">{experience.description}</p>
                    </div>
                  </div>
                </div>
            ))
        }
    </>
)