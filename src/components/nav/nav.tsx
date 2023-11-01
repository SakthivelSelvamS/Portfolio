import './nav.css'

const Nav = () => {
    return (
        <>
            <nav className='container-fluid '>
                <div className="container d-flex justify-content-between align-items-center mt-3 mb-3">
                    <div className="navbar-brand">
                        <a href="#">
                            <img src="./s-logo.svg" alt="logo" width={40} />
                        </a>
                    </div>
                    <div className="navbar-item">
                        <ul className="navbar-nav d-flex flex-row mb-0">
                            <li className="list-unstyled navbar-item ps-3 pe-3"><a href="https://www.linkedin.com/in/sakthivel-selvam-7a0b1519b/" target='_blank' className="nav-link" title='LinkedIn'><img src="./linkedin.svg" width={30} alt="linkedin-logo" /></a></li>
                            <li className="list-unstyled navbar-item ps-3 pe-3"><a href="https://github.com/Sakthivel-Selvam-MEAN-Developer" target='_blank' className="nav-link" title='GitHub'><img src="./github.svg" width={30} alt="github-logo" /></a></li>
                        </ul>
                    </div>
                    <div className="hamburger d-none">

                    </div>
                </div>
            </nav>
        </>
    )
}

export { Nav };