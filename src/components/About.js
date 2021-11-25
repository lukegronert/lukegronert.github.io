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
                    I am an American Front-End Web Developer currently living in Taipei, Taiwan. I enjoy learning 
                    new things and solving problems.
                    <br />
                    <br />
                    My goal is to continuously improve my skills as a developer, while providing quality 
                    <br />
                    <br />
                    In my free time, you can find me reading, playing volleyball, playing video games, watching sports, finding new cafes, or 
                    just chatting with friends. 
                </article>
            </div>
        </section>
    )
}
