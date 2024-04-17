// Internal Dependencies
import Heading from "@/components/Heading";
import Section from "@/components/Section";

// Icon dependencies
import { MdOutlineOpenInNew } from "react-icons/md";

// Content Dependencies
import { SECTIONS } from "@constants";
import SubHeading from "../Subheading";

// Information about this section
const thisSection = SECTIONS.contact;

export type ContactType = { name: string; href: string };

export const CONTACT: ContactType[] = [
  {
    name: "Email",
    href: "mailto:rakshit.rabugotra360@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rakshit-rabugotra-a29b5821a/",
  },
  {
    name: "Github",
    href: "https://www.github.com/RakshitRabugotra",
  },
];

export default function Connect() {
  return (
    <Section {...thisSection} className="md:flex-row justify-between" fitHeight>
      <Heading center className="md:text-left md:max-w-fit">{thisSection.title}</Heading>
      <div className="w-full md:max-w-[40vw] max-h-[50vh] my-10 md:grow md:mx-auto">
        {CONTACT.map((contact: ContactType, index) => {
          return <Contact {...contact} key={index} />;
        })}
      </div>
    </Section>
  );
}

function Contact({ name, href }: ContactType) {
  return (
    <a
      className="inline-flex justify-between items-center border-y-2 border-collapse w-full border-zinc-200/60 py-4"
      href={href}
      target="_blank"
    >
      <SubHeading className="font-inter" noTransform>
        {name}
      </SubHeading>
      <MdOutlineOpenInNew
        size={32}
        className="cursor-pointer text-zinc-200/50 hover:text-zinc-200/80"
      />
    </a>
  );
}
