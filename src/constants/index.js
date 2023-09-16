import { award, clients, people01, people02, people03, briefcase, facebook, github, linkedin, facebookBlue, linkedinBlue, githubBlue, css, html, javascript, react, mongo, git, csharp, net, sql, visualstudio, none, webbrowser, desktop, chart, game, mockup, proj1Img, proj2Img, proj3Img, proj4Img, proj5Img, proj6Img} from "../assets";

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
    content: "4+ Years",
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
    link: "https://github.com/pasionjp",
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
    link: "https://github.com/pasionjp",
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
    serviceInfo: "End-to-end web development services, from frontend design to backend functionality",
    serviceDetails: [
      {
        detail: "Can craft dynamic and responsive websites that adapt seamlessly to various screen sizes and devices",
      },
      {
        detail: "Can architect and develop robust backend systems using cutting-edge technologies for efficient data handling and processing.",
      },
      {
        detail: "Can provide tailored solutions to match the client's unique requirements",
      },
      {
        detail: "Can optimize websites for speed and performance",
      },
      {
        detail: "Can create intuitive user interfaces with a focus on user experience and accessibility",
      },
    ],
  },
  {
    index: 2,
    id: "services-2",
    icon: desktop,
    title: "Desktop C# .NET Application",
    serviceInfo: "Deliver tailored, high-performance desktop C# .NET application",
    serviceDetails: [
      {
        detail: "Can create feature-rich Windows applications",
      },
      {
        detail: "Can optimize and maintain existing C# .NET desktop applications, enhancing functionality and addressing any issues",
      },
      {
        detail: "Can offer expert consultation and support throughout the entire software development lifecycle, from concept to deployment",
      },
    ],
  },
  {
    index: 3,
    id: "services-3",
    icon: game,
    title: "Game Development",
    serviceInfo: "Unity-based game development",
    serviceDetails: [
      {
        detail: "Can design and develop custom gameplay mechanics",
      },
      {
        detail: "Can handle the entire game development pipeline, from concept to release",
      },
    ],
  },
  {
    index: 4,
    id: "services-4",
    icon: chart,
    title: "Data Science",
    serviceInfo: "Can provide personalized data-driven solutions to address specific challenges",
    serviceDetails: [
      {
        detail: "Can leverage advanced statistical techniques to extract actionable insights from complex datasets.",
      },
      {
        detail: "Can clean and preprocess data to ensure its quality and suitability for analysis",
      },
      {
        detail: "Can create data visualizations and dashboards for intuitive data exploration and decision-making",
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
    arr: 2,
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
  {
    id: "projects-4",
    arr: 3,
    image: proj4Img,
    category: "Website",
    title: "Portfolio Optimization",
    demo: "https://www.youtube.com/watch?v=Xwo3Ni7_GjY",
    demoTitle: "OptiPlex - Portfolio Optimization using Simplex Algorithm",
    embed: "https://www.youtube.com/embed/Xwo3Ni7_GjY",
    sourceCode: "https://github.com/PasionJP/Portfolio-Optimization-using-Simplex-Algorithm",
    techStacks: "Python, Flask, HTML, CSS",
    projectDetail: "Portfolio optimization using linear programming is like finding the perfect mix of ingredients for a recipe, where each ingredient represents a different investment option. Linear programming helps balance risk and return, just like adjusting ingredients to create the most delicious dish, ensuring your investment portfolio meets your financial goals while minimizing potential losses.."
  },
  {
    id: "projects-5",
    arr: 4,
    image: proj5Img,
    category: "Website",
    title: "Route Optimization",
    demo: "https://www.youtube.com/watch?v=2om_Z2yc0sE",
    demoTitle: "RoutePlanner - Solving the Travelling Salesman Problem using Swarm Intelligence",
    embed: "https://www.youtube.com/embed/2om_Z2yc0sE",
    sourceCode: "https://github.com/PasionJP/Route-Optimization-using-Swarm-Intelligence",
    techStacks: "Python, Flask, HTML, CSS, WazeAPI",
    projectDetail: "Discover the future of travel planning with our Swarm Intelligence-powered website, which optimizes routes for efficiency, saving you time, money, and reducing your environmental impact. Say goodbye to the Traveling Salesman Problem complexity and hello to effortless, eco-friendly journeys."
  },
  {
    id: "projects-6",
    arr: 5,
    image: proj6Img,
    category: "Website",
    title: "Educational Video Game Recommendation System",
    demo: "https://www.youtube.com/watch?v=4fC8pzA6mmA",
    demoTitle: "EducGames - Educational Video Game Recommendation System",
    embed: "https://www.youtube.com/embed/4fC8pzA6mmA",
    sourceCode: "https://github.com/PasionJP/Educational-Video-Game-Recommendation-System",
    techStacks: "Python, Flask, MySQL, HTML, CSS",
    projectDetail: "Imagine you have a wise old mentor who knows your learning style like the back of their hand. This educational video game recommendation system is like that mentor, but even better - it suggests engaging games tailored just for you, making learning a fun and personalized adventure."
  }
];