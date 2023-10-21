import './experience.css'

const Experience = () => {
    return (
        <>
            <div className="container experiences mb-3">
                <div className="experiences-title">
                    <h1>Experience</h1>
                    <p className='text-start ms-4 mb-0 text-white'>Note : 2.5 Years Overall Experience</p>
                </div>
                <div className="experience-details d-grid flex-wrap align-items-center">
                    <div className="card experience">
                        <img src="/capgemini.svg" alt="capgemini-logo" />
                        <hr />
                        <div className="card-body d-flex">
                            <div className="left-side-details text-start me-4">
                                <p><b>Front-End Developer</b></p>
                                <p>December 2021 - May 2023 <small>(1.5 Years)</small></p>
                                <p>Angular, Bootstrap and Material UI</p>
                            </div>
                            <div className="right-side-details text-start">
                                <h6 className='text-decoration-underline'>Description</h6>
                                <p>Develop and Test a Single Page Applications(SPA) with Responsive Web Design using Angular, Bootstrap and Material UI.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card experience">
                        <img src="/erp-roots.svg" alt="" />
                        <hr />
                        <div className="card-body d-flex">
                            <div className="left-side-details text-start me-4">
                                <p><b>Junior SAP Consultant</b></p>
                                <p>July 2021 - December 2021 <small>(6 months)</small></p>
                                <p>SAP ABAP</p>
                            </div>
                            <div className="right-side-details text-start">
                                <h6 className='text-decoration-underline'>Description</h6>
                                <p>Develop a ERP Software using SAP ABAP.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card experience">
                        <img src="/hatlet-technologies.svg" alt="" />
                        <hr />
                        <div className="card-body d-flex">
                            <div className="left-side-details text-start me-4">
                                <p><b>Software Tester</b></p>
                                <p>January 2021 - June 2023 <small> (6 months)</small>
                                </p>
                                <p>Manual Testing using MS Excel</p>
                            </div>
                            <div className="right-side-details text-start">
                                <h6 className='text-decoration-underline'>Description</h6>
                                <p>Test a Web and Mobile Applications Manualy and Write Test Cases.</p>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Experience };