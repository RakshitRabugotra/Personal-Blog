/* Contains all the constants for the webpage */

// Type definitions
import { IconType } from "react-icons";
// Icon Dependencies
import {
  SiReact,
  SiNextdotjs,
  SiLua,
  SiFlask,
  SiSketchup,
  SiAutodesk,
} from "react-icons/si";

// Details about the webpage
export const TITLE = "Rakshit Rabugotra";
export const DESCRIPTION =
  "Greetings! I'm Rakshit Rabugotra, a skilled web developer with a passion for building dynamic online experiences. Delve into my digital showcase to witness the fusion of code and creativity. From responsive layouts to seamless functionality, each project demonstrates my commitment to excellence and innovation in web development. Join me on a journey where pixels come to life, and user engagement is paramount. Let's collaborate to bring your digital vision to reality.";

export const DEFAULT_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:8080";

// Details about the logo of the webpage
export const LOGO = {
  width: 100,
  height: 100,
  src: "/assets/logo/logo.jpg",
  alt: "RR-logo",
};

/* The sections in the page */
export type SectionType = { id: string; title: string; showInNav: boolean };
export const SECTIONS = {
  hero: { id: "hero", title: "hero", showInNav: false } as SectionType,
  about: { id: "about", title: "Introduction", showInNav: true } as SectionType,
  skills: { id: "skills", title: "I know", showInNav: true } as SectionType,
  projects: { id: "projects", title: "My Work", showInNav: true } as SectionType,
  contact: { id: "contact", title: "Let's connect", showInNav: true } as SectionType,
  footer: {id: "footer", title: "", showInNav: false } as SectionType
};

// Personal details of the human
export const PERSON = {
  fullName: "Rakshit Rabugotra",
  imgSrc: "/assets/images/person.jpg",
};

export type SkillType = {
  name: string;
  Icon: IconType;
  bgImageSrc: string;
  regime: string;
  experience: number;
  description: string;
};

export const SKILLS: SkillType[] = [
  {
    name: "ReactJS",
    Icon: SiReact,
    bgImageSrc: "/assets/images/skills/react.png",
    regime: "Web Development - Frontend",
    experience: 1,
    description:
      "With over 1 year of experience in ReactJS, I've mastered the art of building interactive and dynamic user interfaces. ReactJS, known for its efficiency and flexibility, empowers me to create reusable UI components and manage application state seamlessly. Leveraging its virtual DOM and component-based architecture, I craft frontend solutions that are not only visually appealing but also highly responsive and performant.",
  },
  {
    name: "Next.JS",
    Icon: SiNextdotjs,
    bgImageSrc: "/assets/images/skills/nextjs.png",
    regime: "Web Development - Frontend",
    experience: 1 / 3,
    description:
      "In my 4 months of working with NextJS, I've swiftly adapted to its powerful capabilities for server-side rendering and static site generation. NextJS simplifies the process of building fast and SEO-friendly web applications by offering features like automatic code splitting and built-in CSS support. My experience with NextJS has equipped me to create modern web experiences that deliver exceptional performance and user engagement.",
  },
  {
    name: "Lua - LOVE2D",
    Icon: SiLua,
    bgImageSrc: "/assets/images/skills/game.png",
    regime: "Game Development",
    experience: 1.5,
    description:
      "With 1.5 years of experience in Lua and LOVE2D, I've honed my skills in game development and brought numerous creative projects to life. Lua's simplicity and flexibility combined with LOVE2D's robust framework have empowered me to build captivating 2D games efficiently. From designing game mechanics to implementing complex gameplay systems, my experience in Lua and LOVE2D enables me to deliver immersive gaming experiences that resonate with players.",
  },
  {
    name: "Python - Flask",
    Icon: SiFlask,
    bgImageSrc: "/assets/images/skills/flask.png",
    regime: "Web Development - Backend",
    experience: 3,
    description:
      "Over the past 3 years, I've immersed myself in Python and Flask, mastering the art of backend web development. Flask's lightweight and flexible nature, combined with Python's versatility, allow me to build scalable and efficient web applications with ease. From designing RESTful APIs to integrating with databases, my experience in Python and Flask equips me to deliver robust backend solutions that meet the unique needs of each project.",
  },
  {
    name: "SketchUp",
    Icon: SiSketchup,
    bgImageSrc: "/assets/images/skills/sketchup.png",
    regime: "Architecture/3D Modelling",
    experience: 2,
    description:
      "With 2 years of experience in SketchUp, I've become proficient in creating stunning 3D models for architectural and design projects. SketchUp's intuitive interface and powerful features enable me to bring my creative visions to life with precision and detail. Whether designing buildings, landscapes, or interior spaces, my experience in SketchUp allows me to efficiently explore and iterate on design concepts, turning ideas into compelling visualizations.",
  },
  {
    name: "AutoCAD",
    Icon: SiAutodesk,
    bgImageSrc: "/assets/images/skills/autodesk.png",
    regime: "Architecture",
    experience: 2,
    description:
      "With 2 years of experience in AutoCAD, I've become adept at producing precise and detailed architectural drawings and models. AutoCAD's extensive toolset and customizable workflows enable me to streamline the design process and communicate complex ideas effectively. From drafting floor plans to creating 3D renderings, my experience in AutoCAD equips me to tackle architectural projects of varying scales with confidence and efficiency.",
  },
];

export type ProjectType = {
  name: string;
  category: "WebApp" | "Game" | "Website";
  href: string;
  description: string;
  technologies: string[];
};

export const PROJECTS: ProjectType[] = [
  {
    name: "Expense Tracker",
    category: "WebApp",
    href: "https://github.com/RakshitRabugotra/Expense-Tracker",
    description: "",
    technologies: ["NextJS", "PocketBase"],
  },
  {
    name: "Aarkay Associates",
    category: "Website",
    href: "https://github.com/RakshitRabugotra/Aarkay-Associates",
    description:
      "This is the website for Aarkay Associates, Pathankot — An architectural firm based in the city of Pathankot, Punjab.",
    technologies: ["NextJS", "TailwindCSS", "Vercel", "Supabase"],
  },
  {
    name: "Confluence",
    category: "Website",
    href: "https://github.com/RakshitRabugotra/confluence",
    description:
      "Confluence is the name of the annual fest of Hansraj College, University of Delhi. This repo is for the website of the same.",
    technologies: ["NextJS", "TailwindCSS", "Vercel"],
  },
  {
    name: "Wishlist Price Alert",
    category: "WebApp",
    href: "https://github.com/RakshitRabugotra/Wishlist-Price-Alert",
    description:
      "A WebApp which scrapes Amazon to find the price of the requested item and notifies when the price of that item drops below certain threshold.",
    technologies: ["Flask", "SQLAlchemy", "BeautifulSoup4"],
  },
  {
    name: "Tetris",
    category: "Game",
    href: "https://github.com/RakshitRabugotra/Tetris",
    description:
      'Implementation of the famous game "Tetris". Using Java language.',
    technologies: ["Java", "Java-Swing"],
  },
  {
    name: "Super Smash Paddle",
    category: "Game",
    href: "https://github.com/RakshitRabugotra/SuperSmashPaddle",
    description:
      "A remake of the original retro game 'Pong' made in 1972 for the Atari Arcade machine.",
    technologies: ["Lua", "LOVE2D"],
  },
];

// The strings used in the website
export type SectionStringType = { heading?: string; text?: string | string[] };

export const STRINGS = {
  HERO: {
    text: "Welcome to my portfolio website! It has come to my attention that you might be a traveler who are journeying through the boundless realms of the internet. I hope you will find out soon enough that you've come to the right place.",
  } as SectionStringType,
  ABOUT: {
    text: [
      `I'm ${PERSON.fullName}, a skilled web developer with a passion for building dynamic online experiences. Delve into my digital showcase to witness the fusion of code and creativity.`,
      "From responsive layouts to seamless functionality, each project demonstrates my commitment to excellence and innovation in web development. Join me on a journey where pixels come to life, and user engagement is paramount. Let's collaborate to bring your digital vision to reality.",
    ],
  } as SectionStringType,
  FOOTER: {
    text: "\u00a9 2024 Rakshit Rabugotra. All rights reserved."
  }
};
