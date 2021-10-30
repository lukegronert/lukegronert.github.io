import React from 'react';
import '../styles/logo.css';

export default function Logo(props) {
    return (
        <>
            <img src={props.logo} className='logo-img' />
        </>
    )
}
