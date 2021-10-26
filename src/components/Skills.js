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
                {/* Filter the skillSet array to return an array with the object of only the proficient level skills */}
                {/* Select the only object in the array, then map the items array creating a SkillItem for each item */}
                {skillSet.filter((skillLevel) => skillLevel.level === 'proficient')
                         [0].items.map((item) => {
                             return (
                                 <SkillItem title={item.title} logo={item.logo} />
                             )
                         })}
                <p>Familiar:</p>
                {skillSet.filter((skillLevel) => skillLevel.level === 'familiar')
                         [0].items.map((item) => {
                             return (
                                 <SkillItem title={item.title} logo={item.logo} />
                             )
                         })}
                <p>Exploring:</p>
                {skillSet.filter((skillLevel) => skillLevel.level === 'exploring')
                         [0].items.map((item) => {
                             return (
                                 <SkillItem title={item.title} logo={item.logo} />
                             )
                         })}
            </div>
        </section>
    )
}
