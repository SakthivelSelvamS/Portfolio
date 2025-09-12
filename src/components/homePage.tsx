import { ExperienceList } from "./experienceList"
import { ProfileImage } from "./profileImage"
import { ProfileInfo } from "./profileInfo"
import { SkillGrid } from "./skillGrid"

export const HomePage = () => {
    return (
    <div className="App">
        <div className="container">
            <div className="profile-section">
                <div className="profile-wrapper">
                    <div className="profile-content">
                        <ProfileImage />
                        <ProfileInfo />
                    </div>
                </div>
            </div>

            <div className="right-side">
                <div className="skills-section">
                    <div className="skills-content">
                        <div className="section-header">
                            <h3 className="section-title">Core Skills</h3>
                            <div className="section-divider"></div>
                        </div>
                        <SkillGrid />
                    </div>
                </div>

                <div className="experience-section">
                    <div className="experience-content">
                        <div className="section-header">
                            <h3 className="section-title">Experience</h3>
                            <div className="section-divider"></div>
                        </div>
                        <div className="experience-list">
                            <ExperienceList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}