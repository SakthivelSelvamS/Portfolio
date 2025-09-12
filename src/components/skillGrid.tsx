import { SkillCategory } from "./skillCategory"
import { SkillHeader } from "./skillHeader"

const skills = [
    {
        header:'Languages',
        skills:['JavaScript (ES6+)','TypeScript','Python']
    },
    {
        header:'Frontend & Frameworks',
        skills:['React','Angular 8+','HTML5 & CSS3','Bootstrap','Material UI','FlutterFlow']
    },
    {
        header:'Backend & Database',
        skills:['Node.js','Express.js','Prisma','PostgreSQL']
    },
    {
        header:'DevOps & Cloud',
        skills:['AWS (EC2, S3, RDS, SQS)','Docker','Nginx','Git & GitHub']
    }
]

export const SkillGrid = () => (
    <div className="skills-grid">
        {skills.map(skill =>(
            <div className="skill-category" key={skill.header}>
                <SkillHeader heading={skill.header} />
                <SkillCategory skills={skill.skills} />
            </div>
        ))}
    </div>
)