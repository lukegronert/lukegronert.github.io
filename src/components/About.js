import React from 'react';
import '../styles/about.css';
import Fade from 'react-reveal/Fade'

import PersonalPhoto from '../images/PersonalPhoto.jpg';

export default function About() {
    return (
        <section className="about-section" id="about">
            <Fade>
                <h2>About</h2>
            </Fade>
            <div className="about-content">
                <img src={PersonalPhoto} alt="Picture of a smiling man who looks like quite the expert developer" />
                <article className="about-description">
                Hey, I'm Luke and I live in Taipei, Taiwan. I am a front-end developer from the San Francisco Bay Area who graduated from 
                San Francisco State University and graduated with a degree in International Business. After university, 
                I moved abroad to teach English in Seoul, South Korea and Taipei, Taiwan. Near the end of my stay in Seoul, my 
                off-and-on hobby of web development turned into a dedication to learn and improve to transition into a new career.
                <br />
                <br />
                In my free time, I'm most likely reading, playing volleyball, playing video games, watching sports, finding new cafes, or 
                just chatting with friends. 
                </article>
            </div>
        </section>
    )
}
