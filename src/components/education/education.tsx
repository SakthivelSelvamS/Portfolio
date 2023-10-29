import { useEffect, useState } from 'react';
import './education.css';

const Education = () => {
    const [isPrevBtnClicked, setIsPrevBtnClicked] = useState(false);
    const [isNextBtnClicked, setIsNextBtnClicked] = useState(false);

    useEffect(() => {
        var educationCard = document.querySelectorAll<HTMLElement>('.education');
        console.log(educationCard);
        var active = 1;

        const loadEducationCard = () => {
            console.log('active load', active);
            educationCard[active]?.setAttribute('style',' transform: none;filter: none;opacity: 1;z-index: 2;')
            educationCard[active + 1]?.setAttribute('style', 'transform: translateX(calc(-100px - var(--size-var))) scale(0.6) perspective(16px) rotateY(1deg);filter: blur(3px);z-index: 1;')
            educationCard[active - 1]?.setAttribute('style', 'transform: translateX(calc(100px + var(--size-var))) scale(0.6) perspective(16px) rotateY(-1deg);filter: blur(3px);z-index: 1;')
            if(active == 2){
                educationCard[0]?.setAttribute('style', 'transform: translateX(calc(100px + var(--size-var))) perspective(16px) scale(0) rotateY(-1deg);filter: blur(3px);z-index: 1;opacity:0;');
            } else if(active == 0){
                educationCard[2]?.setAttribute('style', 'transform: translateX(calc(-100px - var(--size-var))) perspective(16px) scale(0) rotateY(-1deg);filter: blur(3px);z-index: 1;opacity:0;')
            }
        }

        loadEducationCard();

        if (isNextBtnClicked) {
            active = active + 1 < educationCard.length ? active + 1 : active;
            loadEducationCard();
            setIsPrevBtnClicked(false);
        } 
        if (isPrevBtnClicked) {
            active = active - 1 < educationCard.length ? active - 1 : active;
            loadEducationCard();
            setIsNextBtnClicked(false);
        }

    }, [isNextBtnClicked, isPrevBtnClicked]);

    const prev = (): any => {
        setIsPrevBtnClicked(true);
    }
    const next = (): any => {
        setIsNextBtnClicked(true);
    }

    return (
        <>
            <div className="container educations mb-3" id='education'>
                <div className="educations-title">
                    <h1>Education</h1>
                    <div className="arrow-icon">
                        <img src="./arrow.svg" alt="left-arrow-icon" onClick={()=>{prev()}} />
                        <img src="./arrow.svg" alt="right-arrow-icon" onClick={()=>{next()}}/>
                    </div>
                </div>
                <div className="education-details">
                    <div className="education card">
                        <div className='card-header'>
                            <h3>HSC - 12<sup>th</sup></h3>
                        </div>
                        <div className="card-body">
                            <b><p>Computer Science & Maths<br /> 2016 - 2017</p></b>
                            <p>Government Boys Higher Scondary School, Tamilnadu State Board</p>
                            <p>72%</p>
                        </div>
                    </div>
                    <div className="education card">
                        <div className='card-header'>
                            <h3>B.E</h3> 
                            <p>Most recent</p>
                        </div>
                        <div className="card-body">
                            <b><p>Computer Science and Engineering <br /> 2017 - 2021</p></b>
                            <p>Sri Shanmugha College and Engineering and Technology, Anna University</p>
                            <p>7.5 CGPA</p>
                        </div>
                    </div>
                    <div className="education card">
                        <div className='card-header'>
                            <h3>SSLC - 10<sup>th</sup> </h3>
                        </div>
                        <div className="card-body">
                            <b><p> Maths <br /> 2014 - 2015</p></b>
                            <p>Government Boys Higher Scondary School, Tamilnadu State Board</p>
                            <p>88.4%</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export { Education };
