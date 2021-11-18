import React from 'react';
import '../styles/navigation.css';

export default function Navigation({contactClick}) {
    return (
        <nav className="nav">
            <ul className="nav-list">
                |<li><a href="#about">About</a></li>
                |<li><a href="#skills">Skills</a></li>
                |<li><a href="#projects">Projects</a></li>
                |<li><a href="#" onClick={() => contactClick()}>Contact</a></li>
            </ul>
        </nav>
    )
}
