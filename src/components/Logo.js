import React from 'react';
import '../styles/logo.css';

export default function Logo(props) {
    return (
        <>
            <img src={props.logo} alt={props.alt} title={props.alt} className='logo-img' />
        </>
    )
}
