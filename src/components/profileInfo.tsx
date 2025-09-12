import { ContactInfo } from "./contactInfo"
import { SocialLinks } from "./socialLinks"


const profileInfo = {
  name:'Sakthivel Selvam',
  role:'Software Developer',
  description:'Experienced Full-Stack Developer (3+ years) specializing in React, Node.js, and cloud technologies for web and mobile applications.',
  mailId:'sakthiselvamcs@gmail.com',
  location:'Erode, Tamil Nadu',
  github:'https://github.com/SakthivelSelvamS',
  linkedin:'https://www.linkedin.com/in/SakthivelSelvamS/',
  resume:'./Sakthivel_S_Resume.pdf'
}

export const ProfileInfo = () => (
    <div className="profile-info">
        <h1 className="name">{profileInfo.name}</h1>
        <h2 className="title">{profileInfo.role}</h2>
        <div className="divider"></div>
        <p className="description">{profileInfo.description}</p> 
        <div className="contact-info">
            <ContactInfo location={profileInfo.location} mailId={profileInfo.mailId} />
            <SocialLinks github={profileInfo.github} linkedin={profileInfo.linkedin} resume={profileInfo.resume}/>
        </div>
    </div>
)