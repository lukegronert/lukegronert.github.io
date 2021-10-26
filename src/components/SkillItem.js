import React from 'react';


export default function SkillItem(props) {
    console.log(props.logo)
    return (
        <div>
            {props.title}
            {props.logo}
        </div>
    )
}
