import React from 'react';
import '../styles/skills.css';
import SkillItem from './SkillItem';
import { skillSet } from '../data/skills';

export default function Skills() {
    return (
        <section id="skills" className='skills-section'>
            <div className='skills-headline'>
                <h2>Skills</h2>
                <p>The languages, frameworks, and libraries that I have experience working with.</p>
            </div>
            <div className="skills-container">
                <p className="skills-header">Proficient:</p>
                <div className='skills-display'>
                    {skillSet.filter((set) => set.level === 'proficient')
                        [0].items.map((skill) => {
                            return (
                                <SkillItem title={skill.title} logo={skill.logo} />
                            )
                        })}
                </div>
                <p className="skills-header">Familiar:</p>
                <div className='skills-display'>
                    {skillSet.filter((set) => set.level === 'familiar')
                        [0].items.map((skill) => {
                            return (
                                <SkillItem title={skill.title} logo={skill.logo} />
                            )
                        })}
                </div>
                <p className="skills-header">Exploring:</p>
                <div className='skills-display'>
                    {skillSet.filter((set) => set.level === 'exploring')
                        [0].items.map((skill) => {
                            return (
                                <SkillItem title={skill.title} logo={skill.logo} />
                            )
                        })}
                </div>
            </div>
        </section>
    )
}
