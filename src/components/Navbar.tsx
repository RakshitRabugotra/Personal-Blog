"use client";

// Icons
import { BiMenuAltRight } from "react-icons/bi";

// Content Dependencies
import { useState } from "react";
import { SECTIONS } from "@/constants/constants";

export default function Navbar() {
  // Show the menu
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed bg-neutral-900/95 backdrop-blur-md top-0 h-16 w-full inline-flex justify-center items-center gap-8 px-4 md:px-8">
        {/* Contact and nav-links */}
        {Object.entries(SECTIONS).map(
          ([section, { id, showInNav }], index) => {
            if (!showInNav) return <a className="hidden" key={index}></a>;
            return (
              <a
                href={"#" + id}
                key={index}
                className="hidden capitalize underline-offset-4 hover:underline md:block"
              >
                {section}
              </a>
            );
          }
        )}

        <BiMenuAltRight
          size={48}
          className=" md:hidden"
          onClick={() => {
            setShowMenu((prev) => false);
          }}
        />
      </nav>
    </>
  );
}
