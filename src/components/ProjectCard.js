import React from 'react';
import '../styles/projectCard.css';
import Logo from './Logo';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function ProjectCard(props) {
    return (
        <Fade duration={2000}>
            <Slide right duration={500} opposite={true}>
                <div className='project-card'>
                    <img src={props.image} className='project-image' />
                    <div className='project-content'>
                    <div className='project-header'>
                        <p className='project-title'>{props.title}</p>
                        <div className='project-technologies'>
                            {props.technologies.map((technology) => {
                                return (
                                    <Logo logo={technology.image} alt={technology.alt} key={technology.alt} />
                                )
                            })}
                        </div>
                    </div>
                        <p>{props.description}</p>
                        <div className='project-links'>
                            <a href={props.github} target='_blank' rel="noreferrer" className="ui button">View Github</a>
                            <a href={props.website} target='_blank' rel="noreferrer" className="ui button">View Website</a>
                        </div>
                    </div>
                </div>
            </Slide>
        </Fade>
    )
}
