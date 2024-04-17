import Image from "next/image";

// Internal Dependencies
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Text from "@/components/Text";

// Content Dependencies
import { PERSON, SECTIONS, STRINGS } from "@constants";

// This section
const thisSection = SECTIONS.about;

export default function About() {
  return (
    <Section
      {...thisSection}
      className="md:flex-row-reverse md:items-stretch"
      fitHeight
    >
      <div className="flex flex-col">
        <Heading className="md:px-24 ">{thisSection.title}</Heading>
        {/* Shown in desktop mode */}
        <div className="hidden my-auto p-24 md:block">
          {STRINGS.ABOUT.text && (
            <Text className={"hidden mt-4 text-lg md:block"}>
              {STRINGS.ABOUT.text}
            </Text>
          )}
        </div>
      </div>

      {/* Image of the person */}

      <Image
        src={PERSON.imgSrc}
        width={600}
        height={600}
        alt={PERSON.fullName + " image"}
        className={
          "mt-2 w-full p-4 rounded-3xl aspect-square object-cover bg-center md:py-0 md:aspect-auto md:max-w-[30vw]"
        }
      />

      {/* Shown in mobile mode */}
      <div className="my-auto">
        {STRINGS.ABOUT.text && (
          <Text className={"text-sm my-8 md:hidden"}>{STRINGS.ABOUT.text}</Text>
        )}
      </div>
    </Section>
  );
}
