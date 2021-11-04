import React from 'react';
import '../styles/skillItem.css';
import Fade from 'react-reveal/Fade';

export default function SkillItem(props) {
    return (
        <Fade bottom duration={2000}>
                <div className='skill-item'>
                    <img src={props.logo} className='skill-item-logo' />
                    <p className='skill-item-title'>{props.title}</p>
                </div>
        </Fade>
    )
}
