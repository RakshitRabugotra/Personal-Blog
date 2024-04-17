import { twMerge } from "tailwind-merge";

// Internal Dependencies
import Heading from "@/components/Heading";
import Section from "@/components/Section";
import SubHeading from "@/components/Subheading";
import Text from "@/components/Text";

// Content Dependencies
import { SECTIONS, SKILLS } from "@constants";

// Type definitions
import type { SkillType } from "@constants";

// Information about this section
const thisSection = SECTIONS.skills;

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

function Skill({
  Icon,
  name,
  bgImageSrc,
  regime,
  experience,
  description,
}: SkillType) {
  return (
    <div
      className={twMerge(
        "flex gap-4 items-center justify-center shrink grow-0 border-2 rounded-xl px-4 border-zinc-200/30",
        // Background Images
        "bg-cover bg-center bg-neutral-900/90 bg-blend-darken bg-no-repeat",
        // For larger screens
        "md:flex-col md:basis-1/2 md:p-8 md:border-0",
        // Hover Effect
        "transition-all md:hover:scale-95 hover:shadow-lg md:hover:shadow-zinc-200/40"
      )}
      style={{
        backgroundImage: `url(${bgImageSrc})`,
      }}
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
