import React from 'react';
import {projectList} from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';
import Fade from 'react-reveal/Fade'

export default function Projects(props) {
    return (
        <section id="projects" className='projects-section'>
            <Fade>
                <h2 className='projects-headline'>Projects</h2>
            </Fade>
            <div className='project-display'>
                {projectList.map((project) => {
                    return (
                        <ProjectCard title={project.title} description={project.description} image={project.image}
                                     github={project.github} website={project.website} technologies={project.technologies} key={project.title} />
                    )
                })}
            </div>
        </section>
    )
}
