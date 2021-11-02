import React from 'react';
import {projectList} from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

export default function Projects() {
    return (
        <section id="projects" className='projects-section'>
            <h2 className='projects-headline'>Projects</h2>
            <div className='project-display'>
                {projectList.map((project) => {
                    return (
                        <ProjectCard title={project.title} description={project.description} image={project.image}
                                     github={project.github} website={project.website} technologies={project.technologies} />
                    )
                })}
            </div>
        </section>
    )
}
