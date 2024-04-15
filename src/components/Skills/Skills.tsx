// Internal Dependencies
import Heading from "@/components/Heading";
import Section from "@/components/Section";
import SubHeading from "@/components/Subheading";
import Text from "@/components/Text";

// Content Dependencies
import { SECTIONS } from "@constants";

// Type definitions
import { IconType } from "react-icons";

import {
  SiReact,
  SiNextdotjs,
  SiLua,
  SiFlask,
  SiSketchup,
  SiAutodesk,
} from "react-icons/si";
import { twMerge } from "tailwind-merge";

// Information about this section
const thisSection = SECTIONS.skills;

type SkillType = {
  name: string;
  Icon: IconType;
  regime: string;
  experience: number;
  description: string;
};

const SKILLS: SkillType[] = [
  {
    name: "ReactJS",
    Icon: SiReact,
    regime: "Web Development - Frontend",
    experience: 1,
    description:
      "With over 1 year of experience in ReactJS, I've mastered the art of building interactive and dynamic user interfaces. ReactJS, known for its efficiency and flexibility, empowers me to create reusable UI components and manage application state seamlessly. Leveraging its virtual DOM and component-based architecture, I craft frontend solutions that are not only visually appealing but also highly responsive and performant.",
  },
  {
    name: "Next.JS",
    Icon: SiNextdotjs,
    regime: "Web Development - Frontend",
    experience: 1 / 3,
    description:
      "In my 4 months of working with NextJS, I've swiftly adapted to its powerful capabilities for server-side rendering and static site generation. NextJS simplifies the process of building fast and SEO-friendly web applications by offering features like automatic code splitting and built-in CSS support. My experience with NextJS has equipped me to create modern web experiences that deliver exceptional performance and user engagement.",
  },
  {
    name: "Lua - LOVE2D",
    Icon: SiLua,
    regime: "Game Development",
    experience: 1.5,
    description:
      "With 1.5 years of experience in Lua and LOVE2D, I've honed my skills in game development and brought numerous creative projects to life. Lua's simplicity and flexibility combined with LOVE2D's robust framework have empowered me to build captivating 2D games efficiently. From designing game mechanics to implementing complex gameplay systems, my experience in Lua and LOVE2D enables me to deliver immersive gaming experiences that resonate with players.",
  },
  {
    name: "Python - Flask",
    Icon: SiFlask,
    regime: "Web Development - Backend",
    experience: 3,
    description:
      "Over the past 3 years, I've immersed myself in Python and Flask, mastering the art of backend web development. Flask's lightweight and flexible nature, combined with Python's versatility, allow me to build scalable and efficient web applications with ease. From designing RESTful APIs to integrating with databases, my experience in Python and Flask equips me to deliver robust backend solutions that meet the unique needs of each project.",
  },
  {
    name: "SketchUp",
    Icon: SiSketchup,
    regime: "Architecture/3D Modelling",
    experience: 2,
    description:
      "With 2 years of experience in SketchUp, I've become proficient in creating stunning 3D models for architectural and design projects. SketchUp's intuitive interface and powerful features enable me to bring my creative visions to life with precision and detail. Whether designing buildings, landscapes, or interior spaces, my experience in SketchUp allows me to efficiently explore and iterate on design concepts, turning ideas into compelling visualizations.",
  },
  {
    name: "AutoCAD",
    Icon: SiAutodesk,
    regime: "Architecture",
    experience: 2,
    description:
      "With 2 years of experience in AutoCAD, I've become adept at producing precise and detailed architectural drawings and models. AutoCAD's extensive toolset and customizable workflows enable me to streamline the design process and communicate complex ideas effectively. From drafting floor plans to creating 3D renderings, my experience in AutoCAD equips me to tackle architectural projects of varying scales with confidence and efficiency.",
  },
];

export default function Skills() {
  return (
    <Section {...thisSection}>
      <Heading center>{thisSection.title}</Heading>

      <div className="flex flex-col gap-y-4 md:flex-row md:flex-wrap">
        {SKILLS.map((skill, index) => {
          return <Skill {...skill} key={index} />;
        })}
      </div>
    </Section>
  );
}

function Skill({ Icon, name, regime, experience, description }: SkillType) {
  return (
    <div
      className={twMerge(
        "flex gap-4 items-center justify-center shrink grow-0 border-2 rounded-xl px-4 border-zinc-200",
        // For larger screens
        "md:flex-col md:basis-1/2 md:p-8 md:border-0",
        // Hover Effect
        "transition-all hover:scale-95 hover:shadow-lg hover:shadow-zinc-200/40"
      )}
    >
      {/* The icon of the technology */}
      <Icon size={128} className="py-8 md:p-0 max-w-[20%]" />

      {/* The name, regime and experience */}
      <div className="inline-flex w-full justify-between grow-0">
        <div className="md:max-w-[60%]">
          <SubHeading noTransform>{name}</SubHeading>
          <Text className="w-3/4 text-wrap text-sm">{regime}</Text>
        </div>
        <Text className="md:max-w-[20%] max-w-fit text-center my-auto uppercase font-bold">
          {experience < 1
            ? Math.ceil(experience * 12) + " mos"
            : experience + " yrs"}
        </Text>
      </div>

      <Text className="hidden md:block">{description}</Text>
    </div>
  );
}
