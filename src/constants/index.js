import { award, clients, people01, people02, people03, briefcase, facebook, instagram, linkedin, twitter, facebookBlue, linkedinBlue, githubBlue, css, html, javascript, react, mongo, git, csharp, net, sql, visualstudio, webbrowser, desktop, chart, prototype, mockup} from "../assets";

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
    id: "services",
    title: "Services",
  },
  {
    id: "projects",
    title: "Projects",
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
    content: "2+ Years",
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

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const heroSocials = [
  {
    id: "hero-social-1",
    icon: facebookBlue,
    link: "https://www.facebook.com/",
  },
  {
    id: "hero-social-2",
    icon: linkedinBlue,
    link: "https://www.linkedin.com/",
  },
  {
    id: "hero-social-3",
    icon: githubBlue,
    link: "https://www.github.com/",
  },
];

export const skills = [
  {
    title: "Web Developer",
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
    title: "Desktop App Developer",
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
        skill: "VSC",
        icon: visualstudio,
      },
    ],
  },
];

export const services = [
  {
    id: "services-1",
    icon: webbrowser,
    title: "Full-stack Web Development",
  },
  {
    id: "services-2",
    icon: desktop,
    title: "Desktop C# .NET Application",
  },
  {
    id: "services-3",
    icon: prototype,
    title: "UI/UX Prototyping",
  },
  {
    id: "services-4",
    icon: chart,
    title: "Data Analyst",
  },
];

export const projects = [
  {
    id: "projects-1",
    image: mockup,
    category: "Website",
    title: "Portfolio Website Template",
  },
  {
    id: "projects-2",
    image: mockup,
    category: "Desktop",
    title: "Inventory Management System",
  },
];