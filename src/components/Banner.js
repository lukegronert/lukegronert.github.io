import React from 'react';
import '../styles/banner.css';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

export default function Banner() {
    return (
        <section className='ui centered banner-section' id="home">
            <div className='banner-content'>
                 <Fade duration={2000}>
                    <h1>
                        Luke Gronert
                    </h1>
                </Fade>
                <hr />
                <Fade delay={1000}>
                    <Pulse delay={1000}>
                        <p>
                            Front-End Web Developer
                        </p>
                    </Pulse>

                </Fade>
            </div>
        </section>
    )
}
