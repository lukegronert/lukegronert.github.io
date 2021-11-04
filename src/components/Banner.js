import React from 'react';
import '../styles/banner.css';
import Flash from 'react-reveal/Flash';
import Pulse from 'react-reveal/Pulse';

export default function Banner() {
    return (
        <section className='ui centered banner-section' id="home">
            <div className='banner-content'>
                <Flash>
                    <h1>
                        Luke Gronert
                    </h1>
                </Flash>
                <Pulse delay={1000} duration={2000} count={2}>
                <p>
                    Front-End Web Developer
                </p>
                </Pulse>
            </div>
        </section>
    )
}
