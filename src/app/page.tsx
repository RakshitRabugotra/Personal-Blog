// Internal Dependencies
import Heading from "@/components/Heading";
import Section from "@/components/Section";

// Content Dependencies
import { PERSON } from "@constants";

export default function Index() {
  return (
    <>
      <Section className="items-center">
        <Heading>Hello I'm {PERSON.NAME}</Heading>
      </Section>
    </>
  );
}
