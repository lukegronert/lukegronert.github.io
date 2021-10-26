import React from 'react';
import SkillItem from './SkillItem';
import { skillSet } from '../data/skills';

export default function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <p>The languages, frameworks, and libraries that I have used.</p>
            <div>
                <p>Proficient:</p>
                <p>Familiar:</p>
                <p>Exploring:</p>
            </div>
        </section>
    )
}
