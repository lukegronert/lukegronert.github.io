import html5 from '../images/html5.svg';
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

import climbTaiwan from '../images/climbTaiwan.png';
import portfolio from '../images/portfolio.png';
import weatherApp from '../images/weatherApp.png';

export const projectList = [
    {
        title: 'Climb Taiwan',
        description: 'A website that provides information about various rock climbing areas and their respective routes around Taiwan. Created as a freelance project with vanilla Javascript, as well as the Bootstrap framework for quick and easy design.',
        image: climbTaiwan,
        github: 'https://github.com/ClimbTaiwan/ClimbTaiwanWebsite',
        technologies: [
            {
                image: html5,
                alt: 'HTML5 Logo'
            },
            {
                image: css,
                alt: 'CSS Logo'
            },
            {
                image: javascript,
                alt: 'JavaScript Logo'
            },
            {
                image: bootstrap,
                alt: 'Bootstrap logo'
            }
        ],
        website: 'https://www.climbtaiwan.com'
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio used to display my experience as a web developer. Created with a focus on mobile-first design.',
        image: portfolio,
        github: 'https://github.com/lukegronert/PortfolioWebsite',
        technologies: [
            {
                image: html5,
                alt: 'HTML5 Logo'
            },
            {
                image: css,
                alt: 'CSS Logo'
            },
            {
                image: react,
                alt: 'React Logo'
            },
            {
                image: semanticui,
                alt: 'Semantic UI Logo'
            }
        ],
        website: ''
    },
    {
        title: 'Teacher Dashboard',
        description: 'An apllication developed to make my life as a teacher easier by giving me a simple way to keep track of "bonus points" in the classroom. Created as a project led approach to solidifying my understanding of React.',
        image: 'https://media.istockphoto.com/photos/innovation-and-new-ideas-lightbulb-concept-with-question-mark-picture-id1279690557?b=1&k=20&m=1279690557&s=170667a&w=0&h=BnH7EPIgwwpPyKMfeBJr87Ql900NFKjLYknrzvfi3Dw=',
        github: 'https://github.com/lukegronert/TeacherDashboard',
        technologies: [
            {
                image: html5,
                alt: 'HTML5 Logo'
            },
            {
                image: css,
                alt: 'CSS Logo'
            },
            {
                image: react,
                alt: 'React Logo'
            },
            {
                image: semanticui,
                alt: 'Semantic UI Logo'
            }
        ],
        website: 'https://lukegronert.github.io/TeacherDashboard/#/'
    },
    {
        title: 'Weather App',
        description: 'An application that displays the current weather of cities across the world. Created to enhance understanding of DOM manipulation and the use of the fetch API. ',
        image: weatherApp,
        github: 'https://github.com/lukegronert/WeatherApp',
        technologies: [
            {
                image: html5,
                alt: 'HTML5 Logo'
            },
            {
                image: css,
                alt: 'CSS Logo'
            },
            {
                image: javascript,
                alt: 'Javascript Logo'
            }
        ],
        website: 'https://lukegronert.github.io/WeatherApp/'
    }
]