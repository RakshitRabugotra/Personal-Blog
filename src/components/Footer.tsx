// Internal Dependencies
import Text from "./Text";

// Content Dependencies
import { SECTIONS, STRINGS } from "@constants";

// Information about this section
const thisSection = SECTIONS.footer;

export default function Footer() {
  return (
    <footer className="w-full mt-8" {...thisSection}>
      <nav className="flex flex-row flex-wrap max-w-[40vw] justify-around mx-auto">
        {Object.entries(SECTIONS).map(([section, { id, showInNav }], index) => {
            if(!showInNav) return <a className="hidden" key={index}></a>
          return (
            <a href={"#" + id} key={index} className="capitalize m-2">
              {section}
            </a>
          );
        })}
      </nav>
      <Text className="text-center p-8">{STRINGS.FOOTER.text}</Text>
    </footer>
  );
}
