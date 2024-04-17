"use client";
import { animated, useInView, useSpring, useTrail } from "@react-spring/web";
import { useState, useEffect } from "react";

// Icons
import { BiMenuAltRight } from "react-icons/bi";

// Content Dependencies
import { SECTIONS as sections } from "@/constants/constants";

export default function Navbar() {
  // Animate in and out
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuRef, menuInView] = useInView();
  const [spring, api] = useSpring(() => ({
    transform: "translateX(-100%)",
  }));

  useEffect(() => {
    api.start({
      transform: showMenu ? "translateX(0%)" : "translateX(-100%)",
    });
  }, [showMenu, api]);

  // Animate Menu items
  const [trail, trailApi] = useTrail(Object.values(sections).length, () => ({
    from: {
      transform: "translateY(-10%)",
      opacity: 0,
    },
    to: {
      transform: "translateY(0%)",
      opacity: 1,
    },
    reset: true,
  }));

  useEffect(() => {
    if (menuInView && trailApi)
      trailApi.start({ to: { opacity: 1 }, reset: true });
  }, [menuInView, trailApi]);

  return (
    <>
      <nav className="fixed bg-neutral-900/95 backdrop-blur-md top-0 h-16 w-full inline-flex justify-end items-center gap-8 px-4 md:px-8 md:justify-center">
        {/* Contact and nav-links */}
        {Object.entries(sections).map(([section, { id, showInNav }], index) => {
          if (!showInNav) return <a className="hidden" key={index}></a>;
          return (
            <a
              href={"#" + id}
              key={index}
              rel="noopener noreferrer"
              className="hidden capitalize underline-offset-4 hover:underline md:block"
            >
              {section}
            </a>
          );
        })}

        <BiMenuAltRight
          size={48}
          className="md:hidden"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        />
      </nav>

      <animated.div
        className="fixed left-0 top-0 z-40 h-screen w-full bg-neutral-900/90 p-2 backdrop-blur-sm"
        style={spring}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowMenu((prev) => false)}
          className="absolute right-0 top-0 m-4 rounded-lg border-2 border-solid border-zinc-200 bg-zinc-200 p-2 px-4 text-base font-semibold text-neutral-900 md:hidden"
        >
          Close
        </button>

        <animated.div
          className="flex h-full flex-col items-center justify-center gap-8"
          ref={menuRef}
        >
          {trail.map((props, index) =>
            Object.values(sections)[index].showInNav ? (
              <animated.a
                href={"#" + Object.values(sections)[index].id}
                onClick={() => setShowMenu((prev) => false)}
                key={index}
                style={props}
                className="rounded-xl p-2 text-3xl font-semibold uppercase text-zinc-200"
              >
                {Object.keys(sections)[index]}
              </animated.a>
            ) : (
              <a className="hidden" key={index}></a>
            )
          )}
        </animated.div>
      </animated.div>
    </>
  );
}
