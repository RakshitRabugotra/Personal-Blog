"use client";

import * as Accordion from "@radix-ui/react-accordion";

// Internal Dependencies
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import SubHeading from "@/components/Subheading";
import Text from "@/components/Text";

// Icon dependencies
import { MdOutlineOpenInNew } from "react-icons/md";

// Content Dependencies
import { SECTIONS, PROJECTS } from "@constants";

// Type definitions
import type { ProjectType } from "@constants";

const thisSection = SECTIONS.projects;

export default function Projects() {
  return (
    <Section {...thisSection} fitHeight>
      <Heading>{thisSection.title}</Heading>
      <ProjectCards />
    </Section>
  );
}

function ProjectCards() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="h-fit overflow-y-auto rounded-md flex flex-col w-full gap-8"
    >
      {PROJECTS.map((project, index) => {
        return <Project {...project} key={index} value={`item-${index}`} />;
      })}
    </Accordion.Root>
  );
}

function Project({
  value,
  name,
  category,
  href,
  description,
  technologies,
}: { value: string } & ProjectType) {
  return (
    <Accordion.Item
      value={value}
      className={"bg-neutral-800 text-zinc-200/70 p-4"}
    >
      <Accordion.Trigger className="w-full text-left font-display text-xl">
        <SubHeading noTransform className="font-inter">
          {name}
        </SubHeading>
      </Accordion.Trigger>
      <Accordion.Content className="w-full py-2 text-left">
        <div className="py-2">
          <div className="inline-flex w-full justify-between items-center">
            <Text className="text-zinc-200/40">{category}</Text>
            <a href={href} target="_blank">
              <MdOutlineOpenInNew size={24} />
            </a>
          </div>
          <Text>{description}</Text>
        </div>
        <div className="py-2">
          <Text className="text-zinc-200/40">Technologies</Text>
          <Text>{technologies.join(", ")}</Text>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
