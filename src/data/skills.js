import html from '../images/html5.svg';
import css from '../images/css.svg';
import javascript from '../images/javascript.svg';
import react from '../images/react.svg';
import bootstrap from '../images/bootstrap.svg';
import semanticui from '../images/semantic.svg';
import gatsby from '../images/gatsby.svg';
import npm from '../images/npm.svg';
import redux from '../images/redux.svg';
import nodejs from '../images/nodejs.svg';
import graphql from '../images/graphql.svg';

export const skillSet = [
    {
        level: 'proficient',
        items: [
            {
                title: 'HTML',
                logo: html
            },
            {
                title: 'CSS',
                logo: css
            },
            {
                title: 'Javascript',
                logo: javascript
            },
            {
                title: 'React',
                logo: react
            },
            {
                title: 'Bootstrap',
                logo: bootstrap
            }
        ]
    },
    {
        level: 'familiar',
        items: [
            {
                title: 'Semantic UI',
                logo: semanticui
            },
            {
                title: 'Gatsby',
                logo: gatsby
            },
            {
                title: 'Reactstrap',
                logo: npm
            }
        ]
    },
    {
        level: 'exploring',
        items: [
            {
                title: 'Redux',
                logo: redux
            },
            {
                title: 'Node JS',
                logo: nodejs
            },
            {
                title: 'GraphQL',
                logo: graphql
            }
        ]
    }
]