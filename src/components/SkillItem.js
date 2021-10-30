import React from 'react';
import '../styles/skillItem.css';


export default function SkillItem(props) {
    return (
        <div className='skill-item'>
            <img src={props.logo} className='skill-item-logo' />
            <p className='skill-item-title'>{props.title}</p>
        </div>
    )
}
