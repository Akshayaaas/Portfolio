import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    anime,
    skin,
    geminii,
    threejs,
  } from "../assets";
  import ctslogo from "../assets/company/ctslogo.png";
  import Nextjs from "../assets/tech/Nextjs.png";
  import NET from "../assets/tech/NET.png";
  import NETcore from "../assets/tech/NETcore.png";
  import Azure from "../assets/tech/Azure.png";
  import Csharp from "../assets/tech/Csharp.png";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJs Developer",
      icon: mobile,
    },
    {
      title: "3D & Animation Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Next JS",
      icon: Nextjs,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

    {
      name: "Azure",
      icon: Azure,
    }

  ];
  
  const experiences = [
    {
      title: "Jr Software Engineer",
      company_name: "Cognizant Technology Solutions",
      icon: ctslogo,
      iconBg: "#383E56",
      date: "Jul 2022 - sep 2023",
      points: [
        "Built and optimized scalable web applications using React.js, Redux Toolkit, and AsyncThunk middleware for efficient state management and asynchronous operations.",
" Utilized React Hooks (such as useState, useEffect, useContext) to manage state and side effects, contributing to cleaner and more readable code.",
" Integrated Framer Motion for smooth animations and interactive UI transitions to enhance user engagement and visual feedback.",
" Styled components using Tailwind CSS and CSS approaches like styled-components, ensuring responsive and accessible design across multiple devices.",
" Collaborated with cross-functional teams to deliver high-performance front-end features and actively participated in code reviews, enhancing code quality and team learning .",
      ],
    },
    {
      title: "Programmer Analyst Trainee",
      company_name: "Cognizant Technology Solutions",
      icon: ctslogo,
      iconBg: "#E6DEDD",
      date: "oct 2023 - Present",
      points: [
        "Developed and maintained responsive web applications using React.js, JavaScript and related front-end tools.",
        "Collaborated with designers and product managers to implement user-friendly UIs and improve user experience.",
        "Ensured cross-browser compatibility and responsive behaviour across various devices using css and media queries.",
        "Participated in code reviews, shared best practices and helped improve front-end code quality within the team.",

      ],
    },
    
  ];
  
  const projects = [
    {
      name: "Anime_Vault",
      description:
      "Web application that enables users to search for anime,view ratings, number of episodes aired, and find the best anime for their taste in addition can watch the trailer.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: anime,
      source_code_link: "https://github.com/Akshayaaas/Anime_view/tree/main",
    },
    
    {
      name: "Skinhaven",
      description:
        "Web application that enables users to search for skin care products, read reviews, and find the best products for their skin type.",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "reduxtoolkit",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: skin,
      source_code_link: "https://github.com/Akshayaaas/my_ecommerce",
    },
    
    {
      name: "Gemini Clone",
      description:
        "The Google Gemini app is an AI assistant that helps with writing, learning, brainstorming, and more. It's available on Android and iOS devices.",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "useContext",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: geminii,
      source_code_link: "https://github.com/Akshayaaas/Gemini_Clone",
    },
  ];
  
  export { services, technologies, experiences, projects };
  