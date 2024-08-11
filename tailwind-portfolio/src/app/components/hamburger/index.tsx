"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navLinks = ["About", "Work", "Contact"];

  const handleScrollToDiv = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - 100,
        behavior: "smooth",
      });
      toggleMenu();
    }
  };

  const listItemVariants = {
    closed: {
      x: 10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div
        id="hamburger"
        onClick={toggleMenu}
        className="group cursor-pointer z-[500] h-6 w-8 flex flex-col items-end gap-y-2 relative sm:hidden"
      >
        <div
          className={`h-0.5 w-8 rounded-sm bg-secondary absolute top-0 transition-all duration-500 ${
            isOpen ? "animate-hamburgerOpenTop" : "animate-hamburgerCloseTop"
          }`}
        ></div>
        <div
          className={`h-0.5 w-7 rounded-sm bg-secondary absolute top-2 transition-all duration-500 ${
            isOpen
              ? "animate-hamburgerOpenMiddle"
              : "animate-hamburgerCloseMiddle"
          }`}
        ></div>
        <div
          className={`h-0.5 w-6 rounded-sm bg-secondary absolute top-4 transition-all duration-500 ${
            isOpen
              ? "animate-hamburgerOpenBottom"
              : "animate-hamburgerCloseBottom"
          }`}
        ></div>
      </div>
      <ul
        className={`${
          isOpen ? "right-0" : "-right-52"
        } transition-all duration-300 ease-out flex flex-col py-36 px-12 fixed z-50 min-h-screen w-52 top-0 bg-primary-light sm:hidden gap-8`}
      >
        {navLinks.map((item, i) => (
          <motion.li
            variants={listItemVariants}
            animate={isOpen ? "opened" : "closed"}
            transition={{ delay: (i + 1) * 0.1, duration: 0.4 }}
            key={i + item}
            className="cursor-pointer text-lg hover:text-secondary"
            onClick={() => handleScrollToDiv(item.toLowerCase())}
          >
            <motion.span className="text-sm text-secondary">
              0{i + 1}.{" "}
            </motion.span>
            <motion.span>{item}</motion.span>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
