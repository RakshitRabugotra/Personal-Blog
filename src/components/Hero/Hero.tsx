// Internal Dependencies
import Heading from "@/components/Heading";
import Section from "@/components/Section";

// Content Dependencies
import { PERSON as person, SECTIONS, STRINGS } from "@constants";

// Information about this section
const thisSection = SECTIONS.hero;

export default function Hero() {
  return (
    <Section className="items-center gap-4" {...thisSection}>
      <Heading className="mt-8 text-6xl leading-[3rem]">
        Hello! <br />
        <span className="text-wrap text-5xl">
          I&apos;m {person.fullName.split(" ")[0]}
        </span>
      </Heading>

      <div>
        <p className="mt-2 text-lg font-light">{STRINGS.HERO.text}</p>
      </div>
    </Section>
  );
}
