import type React from "react"

interface SkillHeaderProps {
    heading: string
}

export const SkillHeader:React.FC<SkillHeaderProps> = ({ heading }) => {
    return (
        <div className="skill-header">
            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3"></path>
            </svg>
            <h4 className="skill-category-title">{heading}</h4>
        </div>
    )
}