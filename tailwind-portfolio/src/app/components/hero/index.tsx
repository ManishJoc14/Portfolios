"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollToDiv = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - 100,
        behavior: "smooth",
      });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 2.6,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.main
      variants={container}
      // transition={{ staggerChildren: 0.5 }}
      initial="hidden"
      animate="show"
      className="container px-10 xl:px-0 mx-auto max-w-5xl flex flex-col gap-4 pt-20 xl:py-36"
    >
      <motion.p
        variants={childVariants}
        transition={{ delay: 1 }}
        className="text-secondary text-lg font-thin"
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        variants={childVariants}
        transition={{ delay: 1.2 }}
        className=" text-5xl font-sans sm:text-6xl md:text-7xl text-indigo-200 font-bold -tracking-tight"
      >
        {"Manish Joshi".split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: +index * 0.1,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h1
        variants={childVariants}
        transition={{ delay: 1.4 }}
        className="text-4xl font-sans sm:text-5xl md:text-6xl text-slate-400 font-bold -tracking-wide"
      >
        Engineering Digital Excellence.
      </motion.h1>
      <motion.p
        variants={childVariants}
        transition={{ delay: 1.6 }}
        className="text-slate-400 font-sans max-w-xl text-md md:text-lg mt-2"
      >
        With a focus on user accessibility and human-centered design, I bring
        innovation and expertise to every project. Join me on my journey as I
        create, code, and bring your digital dreams to life.
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.2 }}
        onClick={() => handleScrollToDiv("work")}
        className="rounded-md text-wrap max-w-64 mt-8 border border-secondary p-4 px-6 text-sm tracking-wider text-secondary transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-primary-shadow"
      >
        Checkout my projects!
      </motion.button>

      {/* socails icons  */}
      {socialLinksLeft(childVariants)}

      {/* gmail  */}
      {socialLinksRight(childVariants)}

      {/* animating SVG */}
      <motion.svg
        variants={childVariants}
        transition={{ delay: 2.2 }}
        className="invert mt-16 animate-bounce delay-[1000ms]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={60}
      >
        <path
          d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
          stroke="#000000"
          strokeWidth="1"
        ></path>
        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
        <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
      </motion.svg>
    </motion.main>
  );
}
function socialLinksLeft(childVariants: any) {
  return (
    <>
      <motion.ul
        variants={childVariants}
        transition={{ delay: 2.6 }}
        className="fixed z-[900] h-max p-2 w-9 lg:flex flex-col gap-7 -bottom-10 hidden left-4 xl:left-10 "
      >
        <li>
          <Link
            href="https://github.com/ManishJoc14"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github invert hover:invert-0 opacity-70 h-[20px] w-[20px] hover:text-secondary hover:opacity-100 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.facebook.com/profile.php?id=100028545702525"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="invert hover:invert-0 opacity-70 feather feather-instagram h-[20px] w-[20px] hover:text-secondary hover:opacity-100 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease"
            >
              <title>Instagram</title>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/manish-joshi-9762b2304/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="invert hover:invert-0 opacity-70 feather feather-linkedin h-[20px] w-[20px] hover:text-secondary hover:opacity-100 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.facebook.com/profile.php?id=100028545702525"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              fill="none"
              stroke="currentColor"
              strokeWidth="38"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="invert hover:invert-0 opacity-70 h-[20px] w-[20px] hover:text-secondary hover:opacity-100 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease"
              viewBox="0 0 320 512"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
          </Link>
        </li>
        <li className="w-[0.1px] mx-auto h-32 bg-gray-50"></li>
      </motion.ul>
    </>
  );
}

function socialLinksRight(childVariants: any) {
  return (
    <motion.div
      variants={childVariants}
      transition={{ delay: 2.8 }}
      className="fixed z-[900] h-max p-2 w-9 hidden lg:flex flex-col gap-10 -bottom-10 right-4 xl:right-10"
    >
      <Link
        href="https://mail.google.com/mail/?view=cm&fs=1&to=manishjoc14@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary font-mono tracking-widest text-sm rotate-90 mb-36 hover:mb-40 text-slate-400 transition-all duration-300 ease"
      >
        manishjoc14@gmail.com
      </Link>
      <span className="w-[0.1px] mx-auto h-32 bg-gray-50"></span>
    </motion.div>
  );
}
