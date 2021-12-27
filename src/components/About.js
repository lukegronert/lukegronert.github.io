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
                        Hi, I'm Luke! I'm a Front-End Web Developer from California currently living in Taipei, Taiwan.
                        <br />
                        <br />
                        When it comes to coding, I enjoy:
                        <ul>
                            <li>learning new concepts, like Redux and Node.js</li>
                            <li>helping people find solutions</li>
                            <li>providing value in the workplace</li>
                        </ul>
                        On my days off, you can find me:
                        <ul>
                        <li>reading (at the moment, American Gods)</li>
                        <li>playing volleyball as a middle blocker</li>
                        <li>hanging out at home playing video games, like Subnautica and Wild Rift</li>
                        <li>watching sports</li>
                        <li>finding new cafes</li>
                        </ul>
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
