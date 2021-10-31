import React from 'react';
import '../styles/profileBar.css';
import mail from '../images/mail.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

export default function ProfileBar(props) {
    if(props.position === 'top') {
        return (
            <div className='profile-bar-top'>
                <a href='https://github.com/lukegronert' target='_blank'><img src={github} className='profile-icon' /></a>
                <a href='mailto:lukegronert@gmail.com' target='_blank'><img src={mail} className='profile-icon' /></a>
                <a href='https://www.linkedin.com/in/lukegronert/' target='_blank'><img src={linkedin} className='profile-icon' /></a>
            </div>
        )
    }

    return (
        <div className='profile-bar-bottom'>
            <a href='https://github.com/lukegronert' target='_blank' ><img src={github} className='profile-icon' /></a>
            <a href='mailto:lukegronert@gmail.com' target='_blank'><img src={mail} className='profile-icon' /></a>
            <a href='https://www.linkedin.com/in/lukegronert/' target='_blank'><img src={linkedin} className='profile-icon' /></a>
        </div>
    )
}
