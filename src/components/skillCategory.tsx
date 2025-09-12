import type React from "react"

interface SkillsProps {
    skills: string[]
}

export const SkillCategory: React.FC<SkillsProps> = ({ skills }) => (
    <div className="skill-tags">
        {skills.map(skill =><span key={skill} className="skill-tag">{skill}</span>)}
    </div>
)