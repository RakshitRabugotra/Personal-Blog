/* Contains all the constants for the webpage */

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
  about: { id: "about", title: "about", showInNav: true } as SectionType,
  skills: { id: "skills", title: "skills", showInNav: true} as SectionType,
  projects: { id: "projects", title: "projects", showInNav: true } as SectionType,
};

// Personal details of the human
export const PERSON = {
  fullName: "Rakshit Rabugotra",
  imgSrc: "/assets/images/person.jpg",
};

// The strings used in the website
export type SectionStringType = { heading?: string; text?: string | string[] };

export const STRINGS = {
  HERO: {
    text: "Welcome to my portfolio website! It has come to my attention that you might be a traveler who are journeying through the boundless realms of the internet. I hope you will find out soon enough that you've come to the right place.",
  } as SectionStringType,
  ABOUT: {
    heading: "about",
    text: [
      `I'm ${PERSON.fullName}, a skilled web developer with a passion for building dynamic online experiences. Delve into my digital showcase to witness the fusion of code and creativity.`,
      "From responsive layouts to seamless functionality, each project demonstrates my commitment to excellence and innovation in web development. Join me on a journey where pixels come to life, and user engagement is paramount. Let's collaborate to bring your digital vision to reality.",
    ],
  } as SectionStringType,
};
