import React from 'react';
import '../styles/about.css';
import Fade from 'react-reveal/Fade';
import mail from '../images/mail.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import downArrow from '../images/down-arrow.svg';

import PersonalPhoto from '../images/PersonalPhoto.jpg';

export default function About() {
    return (
        <section className="about-section" id="about">
            <Fade>
                <h2>About</h2>
            </Fade>
            <div className="about-content">
                <img className='personal-photo' src={PersonalPhoto} alt="Picture of a smiling man who looks like quite the expert developer" />
                <article className="about-description">
                    <p>
                        Hi, I'm Luke &#8212; a front-end web developer from California currently living in Taipei, Taiwan.
                        <br /><br />
                        I enjoy constantly learning and coming up with creative and logical solutions through coding.
                        <br /> <br />
                        In my free time, you can find me competing on the volleyball court, reading Sci-fi/Fantasy novels, 
                        and playing video games (like Subnautica and Wild Rift). 
                        <br /><br />
                        Want to get in touch? <img src={downArrow} className='small-icon' alt='Arrow pointing down' />
                    </p>
                    <div>
                        <a href='https://github.com/lukegronert' target='_blank' rel="noreferrer"><img src={github} className='social-icon' alt='Github Profile Link' /></a>
                        <a href='mailto:lukegronert@gmail.com' target='_blank' rel="noreferrer"><img src={mail} className='social-icon' alt='Email link' /></a>
                        <a href='https://www.linkedin.com/in/lukegronert/' target='_blank' rel="noreferrer"><img src={linkedin} className='social-icon' alt='Linkedin Profile Link' /></a>
                    </div>
                </article>
            </div>
        </section>
    )
}
