import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    id: 1,
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful products with user interfaces using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    id: 2,
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>Code Wars</b>  and <b>Leet Code</b> ",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "70",
  },

  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "GitHub",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "TailwindCSS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Sass",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Nextjs",
    level: "50",
  },
];

export const projects: IProject[] = [
  {
    name: "Food Delivery App",
    image_path: "/images/food.jpg",
    github_url: "https://github.com/abdallaFoad/Food-Delivery-App-Ecommerce",
    category: ["react"],
    description:
      "Online food ordering is the process of ordering food, for delivery or pickup, from a website or other application. The product can be either ready-to-eat food (e.g., direct from a home-kitchen, restaurant, or a virtual restaurant) or food that has not been specially prepared for direct consumption(pizza).",
    key_techs: ["React", "react-redux", "sass", "reactstrap", "react-reveal"],
  },
  {
    name: "Tesla",
    image_path: "/images/tesla.png",
    github_url: "https://github.com/abdallaFoad/Tesla-Clone",
    category: ["react"],
    description:
      "Clone Tesla App, Through its subsidiary Tesla Energy, the company develops and is a major installer of photovoltaic systems in the United States. Tesla Energy is also one of the largest global suppliers of battery energy storage systems, with 3.99 gigawatt-hours (GWh) installed in 2021.",
    key_techs: ["React", "sass", "styled-components"],
  },
  {
    name: "MoviesApp",
    image_path: "/images/moviesApp.png",
    github_url: "https://github.com/abdallaFoad/MoviesApp-React",
    category: ["react"],
    description:
      "Movies app to display movies, use this app to search from any movie, to store your list movies to show later, you can remove any movie and or add on your list.",
    key_techs: ["React", "sass", "axios", "API"],
  },
  {
    name: "Authentication",
    image_path: "/images/authentication.png",
    github_url: "https://github.com/abdallaFoad/Authentication-React",
    category: ["react"],
    description:
      "A software-based authenticator (sometimes called a software token) may be implemented on a general-purpose electronic device such as a laptop, a tablet computer, or a smartphone. Use Firebase to create that.",
    key_techs: ["React", "sass", "firebase", "contextAPI", "react-bootstrap"],
  },
  {
    name: "Travel App",
    image_path: "/images/travel.png",
    github_url: "https://github.com/abdallaFoad/Travelo-React",
    category: ["react"],
    description:
      "Travel technology was originally associated with the computer reservations system (CRS) of the airlines industry, but is now used more inclusively, incorporating the broader tourism sector as well as its subset the hospitality industry.",
    key_techs: ["React", "styled-components", "scrollreveal"],
  },
  {
    name: "Multipurpose",
    image_path: "/images/multipurpose.png",
    github_url: "https://github.com/abdallaFoad/Multipurpose-React",
    category: ["react"],
    description:
      "Web App To Solutions to Help You to Build or Grow Your Business.",
    key_techs: ["React", "sass", "framer-motion"],
  },
  {
    name: "Event App",
    image_path: "/images/eventReact.png",
    github_url: "https://github.com/abdallaFoad/Event-React",
    category: ["react"],
    description:
      "A Event app use react-bootstrap & emotion/styled to make style, use link-module-alias to make alias paths, react-router-dom to make navigate",
    key_techs: ["React", "Redux", "Bootstrap", "swiper"],
  },
  {
    name: "Todo App",
    image_path: "/images/todo.png",
    github_url: "https://github.com/abdallaFoad/Todo-App-React",
    category: ["react"],
    description:
      "To-do list on an article's talk page shows the list of improvements suggested for the article.It is created and formatted using the {{To do}} template. The list is maintained by editors, writers, reviewers or readers like you as a way to focus your collaborative efforts. As such, they represent a tentative consensus that helps improve the efficiency of the editing process.",
    key_techs: ["React", "Redux", "Bootstrap", "emotion/styled"],
  },
  {
    name: "Weather App",
    image_path: "/images/weather.png",
    github_url: "https://github.com/abdallaFoad/weather-app",
    category: ["react"],
    description:
      "Weather forecasting is the application of science and technology to predict the conditions of the atmosphere for a given location and time. App use API Weather to get weather.",
    key_techs: ["React", "API", "emotion/styled"],
  },
  {
    name: "TesterElzero",
    image_path: "/images/elzeroCss.png",
    github_url: "https://github.com/abdallaFoad/HTML-CSS-Template_Four-",
    category: ["css", "js"],
    description:
      "This app Add many experiences in HTML, CSS, Js, because use many technics",
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Corrus",
    description:
      "Build structure Corrus template by using HTML, CSS to build structure and Use JS to make actions",
    image_path: "/images/corrus.png",
    github_url: "https://github.com/abdallaFoad/Corrus-",
    category: ["css", "js"],
    key_techs: ["HTML", "CSS", "Sass", "JavaScript"],
  },
  {
    name: "Azura",
    image_path: "/images/azura.png",
    github_url: "https://github.com/abdallaFoad/azura",
    category: ["css", "js"],
    description:
      "Use HTML & CSS to create Azura template, to developed my self",
    key_techs: ["HTML", "CSS", "Sass", "JavaScript"],
  },

  {
    name: "Hangman",
    image_path: "/images/hangman.png",
    github_url: "https://github.com/abdallaFoad/Hangman_Game",
    category: ["js"],
    description:
      "Hangman is a guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses. Originally a Paper-and-pencil game",
    key_techs: ["HTML", "CSS", "JS"],
  },
  {
    name: "Memory_Game",
    image_path: "/images/memoryGame.png",
    github_url: "https://github.com/abdallaFoad/Memory_Game",
    category: ["js"],
    description: "A game where pairs of face-down cards must be matched",
    key_techs: ["HTML", "CSS", "JS"],
  },
  {
    name: "Leon",
    image_path: "/images/leon.png",
    github_url: "https://github.com/abdallaFoad/HTML-CSS-Template_Two",
    category: ["css"],
    description: "Template to share your projects , HTML & CSS",
    key_techs: ["HTML", "CSS"],
  },
  {
    name: "Kasper",
    image_path: "/images/kasper.png",
    github_url: "https://github.com/abdallaFoad/HTML-CSS-Template_Three",
    category: ["css"],
    description: "Basic web app to display your portfolio and about your self",
    key_techs: ["HTML", "CSS"],
  },
];
