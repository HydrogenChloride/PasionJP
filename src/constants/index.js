import { award, clients, people01, people02, people03, briefcase, facebook, github, linkedin, facebookBlue, linkedinBlue, githubBlue, css, html, javascript, react, mongo, git, csharp, net, sql, visualstudio, none, webbrowser, desktop, chart, prototype, mockup, proj1Img, proj2Img, proj3Img} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const abouts = [
  {
    id: "about-1",
    icon: award,
    title: "Experience",
    content: "3+ Years",
  },
  {
    id: "about-2",
    icon: briefcase,
    title: "Projects",
    content: "10+ Projects",
  },
  {
    id: "about-3",
    icon: clients,
    title: "Clients",
    content: "5+ Clients",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: facebook,
    link: "https://www.facebook.com/johnpaulfp",
  },
  {
    id: "social-media-2",
    icon: linkedin,
    link: "https://www.linkedin.com/in/john-paul-pasion-739454246/",
  },
  {
    id: "social-media-3",
    icon: github,
    link: "https://www.instagram.com/",
  },
];

export const heroSocials = [
  {
    id: "hero-social-1",
    icon: facebookBlue,
    link: "https://www.facebook.com/johnpaulfp",
  },
  {
    id: "hero-social-2",
    icon: linkedinBlue,
    link: "https://www.linkedin.com/in/john-paul-pasion-739454246/",
  },
  {
    id: "hero-social-3",
    icon: githubBlue,
    link: "https://github.com/HydrogenChloride",
  },
];

export const skills = [
  {
    title: "Web Development",
    techStacks: [
      {
        skill: "HTML",
        icon: html,
      },
      {
        skill: "CSS",
        icon: css,
      },
      {
        skill: "Javascript",
        icon: javascript,
      },
      {
        skill: "React",
        icon: react,
      },
      {
        skill: "MongoDB",
        icon: mongo,
      },
      {
        skill: "Git",
        icon: git,
      },
    ],
  },
  {
    title: "Desktop App Development",
    techStacks: [
      {
        skill: "C#",
        icon: csharp,
      },
      {
        skill: ".NET",
        icon: net,
      },
      {
        skill: "Git",
        icon: git,
      },
      {
        skill: "SQL",
        icon: sql,
      },
      {
        skill: "VS Code",
        icon: visualstudio,
      },
      {
        skill: "",
        icon: none,
      },
    ],
  },
];

export const services = [
  {
    index: 1,
    id: "services-1",
    icon: webbrowser,
    title: "Full-Stack Web Development",
    serviceInfo: "Can develop a full stack web development",
    serviceDetails: [
      {
        detail: "Can produce a UI/UX Design",
      },
      {
        detail: "Can develop a professional website",
      },
    ],
  },
  {
    index: 2,
    id: "services-2",
    icon: desktop,
    title: "Desktop C# .NET Application",
    serviceInfo: "Can develop a full stack web development",
    serviceDetails: [
      {
        detail: "Can produce a UI/UX Design",
      },
      {
        detail: "Can develop a professional website",
      },
    ],
  },
  {
    index: 3,
    id: "services-3",
    icon: prototype,
    title: "UI/UX Prototyping",
    serviceInfo: "Can develop a full stack web development",
    serviceDetails: [
      {
        detail: "Can produce a UI/UX Design",
      },
      {
        detail: "Can develop a professional website",
      },
    ],
  },
  {
    index: 4,
    id: "services-4",
    icon: chart,
    title: "Data Analyst",
    serviceInfo: "Can develop a full stack web development",
    serviceDetails: [
      {
        detail: "Can produce a UI/UX Design",
      },
      {
        detail: "Can develop a professional website",
      },
    ],
  },
];

export const projects = [
  {
    id: "projects-1",
    arr: 0,
    image: proj1Img,
    category: "Website",
    title: "Portfolio Website Template",
    demo: "https://pasionjp.github.io/Porfolio-Website-Template/",
    demoTitle: "Portfolio Website Template by PasionJP (Demo)",
    embed: "https://www.youtube.com/embed/1nnHtawiNOI",
    sourceCode: "https://github.com/PasionJP/Porfolio-Website-Template",
    techStacks: "HTML, CSS, JAVASCRIPT",
    projectDetail: "A portfolio template that can be used by other developers, students, or freelancers that wants to build and customize their own website while learning HTML, CSS and Javascript."
  },
  {
    id: "projects-2",
    arr: 1,
    image: proj2Img,
    category: "Desktop",
    title: "Inventory Management System with POS",
    demo: "https://www.youtube.com/watch?v=YF4-9VH9r3c",
    demoTitle: "Inventory Management System with POS (Demo)",
    embed: "https://www.youtube.com/embed/YF4-9VH9r3c",
    sourceCode: "https://github.com/PasionJP/Inventory-Management-System",
    techStacks: "C#, .NET, SQL",
    projectDetail: "A POS System with a built-in Inventory Management System. It can be used to facilitate transactions of your business, manage your product inventory, manage your employees, and it also displays the analytics of your business' sales report. It is an all-in-one system that can assist you in controlling and operating your business with ease to increase your revenue."
  },
  {
    id: "projects-3",
    arr: 0,
    image: proj3Img,
    category: "Website",
    title: "Kinship Verification",
    demo: "https://www.youtube.com/watch?v=MeBTXjugsfQ",
    demoTitle: "KinUnite - Embracing Family Likeness (Demo)",
    embed: "https://www.youtube.com/embed/MeBTXjugsfQ",
    sourceCode: "https://github.com/PasionJP/Kinship-Relationship-Prediction",
    techStacks: "Python, Flask, OpenCV, Tensorflow, HTML, CSS, Javascript",
    projectDetail: "A kinship verification website that utilizes state-of-the-art machine learning technology to identify whether your precious child bears a closer resemblance to their devoted mother or their cherished father."
  },
];