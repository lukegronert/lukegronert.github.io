import React from 'react';
import '../styles/skillItem.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export default function SkillItem(props) {
    return (
        <Fade>
            <Slide bottom>
                <div className='skill-item'>
                    <img src={props.logo} className='skill-item-logo' />
                    <p className='skill-item-title'>{props.title}</p>
                </div>
            </Slide>
        </Fade>
    )
}
