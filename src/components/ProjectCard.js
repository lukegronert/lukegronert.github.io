import React from 'react';
import '../styles/projectCard.css';
import Logo from './Logo';

export default function ProjectCard(props) {
    return (
        <div className='project-card'>
            <img src={props.image} className='project-image' />
            <div className='project-content'>
            <div className='project-header'>
                <p className='project-title'>{props.title}</p>
                <div className='project-technologies'>
                    {props.technologies.map((technology) => {
                        return (
                            <Logo logo={technology.image} alt={technology.alt} />
                        )
                    })}
                </div>
            </div>
                <p>{props.description}</p>
                <div className='project-links'>
                    <a href={props.github} target='_blank' className="ui button">View Github</a>
                    <a href={props.website} target='_blank' className="ui button">View Website</a>
                </div>
            </div>
        </div>
    )
}
