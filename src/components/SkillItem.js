import React from 'react';
import '../styles/skillItem.css';
import ScrollAnimation from 'react-animate-on-scroll';


export default function SkillItem(props) {
    return (
        <ScrollAnimation animateIn='fadeIn' duration={5} >
            <div className='skill-item'>
                <img src={props.logo} className='skill-item-logo' />
                <p className='skill-item-title'>{props.title}</p>
            </div>
        </ScrollAnimation>
    )
}
