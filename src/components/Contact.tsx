const Contact = () => {
  const contactInfo = [
    {
      icon: "📞",
      label: "Phone",
      value: "99420 63766",
      link: "tel:+919942063766"
    },
    {
      icon: "✉️",
      label: "Email", 
      value: "sakthiselvamcs@gmail.com",
      link: "mailto:sakthiselvamcs@gmail.com"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Erode, Tamilnadu",
      link: null
    }
  ]

  const socialLinks = [
    {
      name: "Portfolio",
      url: "https://sakthivel-selvam-mean-developer.github.io/Portfolio/",
      icon: "🌐"
    },
    {
      name: "GitHub",
      url: "https://github.com/Sakthivel-Selvam-MEAN-Developer", 
      icon: "👨‍💻"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: "💼"
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    {item.link ? (
                      <a href={item.link} className="contact-value">{item.value}</a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Let's Work Together</h3>
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a project in mind or just want to chat about technology, 
            feel free to reach out!
          </p>
          <a href="mailto:sakthiselvamcs@gmail.com" className="cta-button">
            Send Message
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact 