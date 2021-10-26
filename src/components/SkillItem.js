import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function SkillItem(props) {
    console.log(props.logo)
    return (
        <div>
            {props.title}
            <FontAwesomeIcon icon={props.logo} />
        </div>
    )
}
