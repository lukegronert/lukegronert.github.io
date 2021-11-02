import React from 'react';
import '../styles/profileBar.css';
import mail from '../images/mail.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

export default function ProfileBar(props) {
    if(props.position === 'top') {
        return (
            <div className='profile-bar-top'>
                <a href='https://github.com/lukegronert' target='_blank' rel="noreferrer"><img src={github} className='profile-icon' alt='Github Profile Link' /></a>
                <a href='mailto:lukegronert@gmail.com' target='_blank' rel="noreferrer"><img src={mail} className='profile-icon' alt='Email link' /></a>
                <a href='https://www.linkedin.com/in/lukegronert/' target='_blank' rel="noreferrer"><img src={linkedin} className='profile-icon' alt='Linkedin Profile Link' /></a>
            </div>
        )
    }

    return (
        <div className='profile-bar-bottom'>
            <a href='https://github.com/lukegronert' target='_blank' rel="noreferrer"><img src={github} className='profile-icon' alt='Github Profile Link' /></a>
            <a href='mailto:lukegronert@gmail.com' target='_blank' rel="noreferrer"><img src={mail} className='profile-icon' alt='Email Link' /></a>
            <a href='https://www.linkedin.com/in/lukegronert/' target='_blank' rel="noreferrer"><img src={linkedin} className='profile-icon' alt='Linkedin Profile Link' /></a>
        </div>
    )
}
