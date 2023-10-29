import './portfolio.css';

const Portfolio_Info = () => {
    return (
        <>
            <div className='main' id='home'>
                <div className='title-text'>
                    <h1>Welcome.</h1>
                    <div className="inner-text">
                        <span></span>
                        <div className='text'>
                            <p className='mb-2'>My name is <span className='candiate-name'>Sakthivel Selvam</span>. I'm a front-end developer located in Erode, Tamilnadu, India. I have Developed a many type of front-end.</p>
                        </div>
                    </div>
                    <a href="mailto:sakthiselvamcs@gmail.com" className='btn ms-2'>Mail me<img src="./send-mail.svg" alt="send-mail-logo" /> </a>
                </div>
            </div>
        </>
    )
}

export { Portfolio_Info };