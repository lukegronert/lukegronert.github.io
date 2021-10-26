import React from 'react';
import { skillSet } from '../data/skills';

export default function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <p>The languages, frameworks, and libraries that I have used.</p>
            <div>
                <p>Proficient:</p>
                <div>
                    <img src={skillSet[0].items} />
                </div>
                <p>Familiar:</p>
                <p>Exploring:</p>
            </div>
        </section>
    )
}
