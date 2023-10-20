import './skills.css'

const Skills = () => {
    return (
        <>
            <div className="container skills mt-5 mb-3">
                <div className="skills-title">
                    <h1>Skills</h1>
                </div>
                <div className="skill-svgs d-flex flex-wrap justify-content-center align-items-center">
                    <a href="https://www.w3schools.com/html/" target='_blank' title='click to learn Html5'>
                        <div className="card skill">
                            <img src="../src/assets/html-5-svgrepo-com.svg" alt="html-svg" />
                        </div>
                    </a>
                    <a href="https://www.w3schools.com/css/" target='_blank' title='click to learn css3'>
                        <div className="card skill">
                            <img src="../src/assets/css-3-svgrepo-com.svg" alt="html-svg" />
                        </div>
                    </a>
                    <a href="https://www.w3schools.com/js/" target='_blank' title='click to learn JavaScript'>
                        <div className="card skill">
                            <img src="../src/assets/js-svgrepo-com.svg" alt="html-svg" />
                        </div>
                    </a>
                    <a href="https://www.w3schools.com/typescript/" target='_blank' title='click to learn TypeScript'>
                        <div className="card skill">
                            <img src="../src/assets/logo-ts-svgrepo-com.svg" alt="html-svg" />
                        </div>
                    </a>
                    <a href="https://www.angular.io/docs/" target='_blank' title='click to learn Angular'>
                        <div className="card skill">
                            <img src="../src/assets/angular-icon-svgrepo-com.svg" alt="html-svg" />
                        </div>
                    </a>
                    <a href="https://www.getbootstrap.com/docs" target='_blank' title='click to learn Bootstrap'>
                        <div className="card skill">
                            <img src="../src/assets/bootstrap-svgrepo-com.svg" alt="html-svg" />
                        </div>
                    </a>
                    <a href="https://www.mui.com/material-ui/" target='_blank' title='click to learn Material UI'>
                        <div className="card skill">
                            <img src="../src/assets/material-ui-svgrepo-com.svg" alt="html-svg" />
                        </div>
                    </a>
                    <a href="https://www.git-scm.com/doc/" target='_blank' title='click to learn Git'>
                        <div className="card skill">
                            <img src="../src/assets/git-icon.svg" alt="html-svg" />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export { Skills };