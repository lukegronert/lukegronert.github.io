import html5 from "../images/html5.svg";
import css from "../images/css.svg";
import javascript from "../images/javascript.svg";
import react from "../images/react.svg";
import bootstrap from "../images/bootstrap.svg";
import semanticui from "../images/semantic.svg";
import api from "../images/api.svg";
import materialui from "../images/material-ui.svg";
import tailwind from "../images/tailwind.svg";
import firebase from "../images/firebase.svg";
import nextjs from "../images/nextjs.svg";
import cypress from "../images/cypress.svg";
import jest from "../images/jest.svg";

import climbTaiwan from "../images/climbTaiwan.png";
import portfolio from "../images/portfolio.png";
import fremontPokerRoom from "../images/fremontPokerRoom.png";
import mockx from "../images/mockx.png";
import climbTaiwanSmall from "../images/climbTaiwanSmall.png";
import portfolioSmall from "../images/portfolioSmall.png";
import fremontPokerRoomSmall from "../images/fremontPokerRoomSmall.png";
import mockxSmall from "../images/mockxSmall.png";
import financialApp from "../images/financialApp.png";
import financialAppSmall from "../images/financialAppSmall.png";

export const projectList = [
  {
    title: "Financial Tracker",
    description:
      "An application created to track financial instruments performance over various time periods. This application includes user authentication and data storage hrough Firebase, and API calls to Algolia for quick search functionality and AlphaVantage for instrument data. Includes basic end to end testng with Cypress and unit testing with Jest.",
    image: financialApp,
    smallImage: financialAppSmall,
    github: "https://github.com/lukegronert/financial-app",
    technologies: [
      {
        image: tailwind,
        alt: "Tailwind Logo",
      },
      {
        image: react,
        alt: "React Logo",
      },
      {
        image: firebase,
        alt: "Firebase Logo",
      },
      {
        image: nextjs,
        alt: "Next JS Logo",
      },
      {
        image: cypress,
        alt: "Cypress Logo",
      },
      {
        image: jest,
        alt: "Jest Logo",
      },
      {
        image: api,
        alt: "Algolia and AlphaVantage API",
      },
    ],
    website: "https://financial-app-etsh.vercel.app/",
  },
  {
    title: "Fremont Poker Room",
    description:
      "An application created for a bi-annual poker tournament. This application uses the google-spreadsheet API to enter, store, and retrieve the results of the tournaments, while also displaying the overall results of all tournaments together.",
    image: fremontPokerRoom,
    smallImage: fremontPokerRoomSmall,
    github: "https://github.com/lukegronert/poker-app",
    technologies: [
      {
        image: html5,
        alt: "HTML5 Logo",
      },
      {
        image: css,
        alt: "CSS Logo",
      },
      {
        image: react,
        alt: "React Logo",
      },
      {
        image: semanticui,
        alt: "Semantic UI Logo",
      },
      {
        image: api,
        alt: "google-spreadsheet API",
      },
    ],
    website: "https://65f7d1960ab77d1a55094fbd--fremontpokerroom.netlify.app/",
  },
  {
    title: "Mock Exchange",
    description:
      "An application created for users to test out cryptocurrency investment with no risk. It uses netlify-identity for user authentication, google-spreadsheet as a database, and Material UI for an easy, clean UI.",
    image: mockx,
    smallImage: mockxSmall,
    github: "https://github.com/lukegronert/crypto-app",
    technologies: [
      {
        image: html5,
        alt: "HTML5 Logo",
      },
      {
        image: css,
        alt: "CSS Logo",
      },
      {
        image: react,
        alt: "React Logo",
      },
      {
        image: materialui,
        alt: "Material UI Logo",
      },
      {
        image: api,
        alt: "google-spreadsheet API",
      },
    ],
    website: "https://mockx.netlify.app/",
  },
  {
    title: "Climb Taiwan",
    description:
      "A website that provides information about various rock climbing areas and their respective routes around Taiwan. Created as a freelance project with vanilla Javascript, as well as the Bootstrap framework for quick and easy design.",
    image: climbTaiwan,
    smallImage: climbTaiwanSmall,
    github: "https://github.com/ClimbTaiwan/ClimbTaiwanWebsite",
    technologies: [
      {
        image: html5,
        alt: "HTML5 Logo",
      },
      {
        image: css,
        alt: "CSS Logo",
      },
      {
        image: javascript,
        alt: "JavaScript Logo",
      },
      {
        image: bootstrap,
        alt: "Bootstrap logo",
      },
    ],
    website: "https://climbtaiwan.com",
  },
  {
    title: "Portfolio Website",
    description:
      "The website you are currently on. It is used to display my skills and projects, while also giving a little more information about who I am. Created with a focus on mobile-first design. Check out the github repository to see how it was made!",
    image: portfolio,
    smallImage: portfolioSmall,
    github: "https://github.com/lukegronert/lukegronert.github.io",
    technologies: [
      {
        image: html5,
        alt: "HTML5 Logo",
      },
      {
        image: css,
        alt: "CSS Logo",
      },
      {
        image: react,
        alt: "React Logo",
      },
      {
        image: semanticui,
        alt: "Semantic UI Logo",
      },
    ],
    website: "/",
  },
];
