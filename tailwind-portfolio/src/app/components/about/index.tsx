"use client";

import Image from "next/image";
import {
  frontEndSkills,
  backendSkills,
  otherSkills,
} from "../../../../public/skills";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const isAboutRefInView = useInView(aboutRef, {
    // once: true,
    margin: "-40px",
  });
  const isSkillRefInView = useInView(aboutRef, {
    // once: true,
    margin: "100px 0px -100px 0%",
  });

  return (
    <motion.div
      id="about"
      ref={aboutRef}
      className="container  mx-auto px-10 xl:px-0 max-w-5xl space-y-28 py-20"
    >
      {/* Intro start*/}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={isAboutRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-10 sm:gap-16"
      >
        {/* left start */}
        <div className="flex-1 text-sm md:text-base lg:text-lg">
          <div className="flex font-bold gap-2 items-center text-nowrap">
            <div className="pr-2">
              <span className="text-2xl text-secondary pr-2">01.</span>
              <span className="font-sans text-4xl tracking-wide text-violet-200">
                About Me
              </span>
            </div>
            <hr className="w-full" />
          </div>
          <p className="mt-8 md:mt-16 text-slate-400 font-sans tracking-wide">
            Hello! I&apos;m Manish, a passionate web developer with a strong
            foundation in both frontend and backend technologies. My journey
            began with HTML, CSS, and JavaScript, and over the years, I’ve
            expanded my expertise to include a range of modern web development
            tools.
          </p>
          <p className="mt-4 text-slate-400 font-sans tracking-wide">
            I&apos;ve had the opportunity to work on diverse projects, building
            robust and scalable web applications. My experience spans both
            frontend and backend development, allowing me to create
            comprehensive and dynamic web solutions. If you have any questions
            or need assistance with web development, feel free to reach out!
          </p>
          <p className="mt-4 text-slate-400 font-sans tracking-wide">
            Here you can find an overview of my work history and the software
            and tools I use on a regular basis or have used in the past.
          </p>
        </div>
        {/* left end */}

        {/* right start */}
        <div className="group mt-4 md:mt-16 z-0 h-80 md:w-80 md:h-96 mx-auto relative">
          {/* my image */}
          <Image
            width={300}
            height={300}
            className="rounded-md mt-8 h-full block w-full transition-all transform -translate-x-4 -translate-y-4 group-hover:-translate-x-6 group-hover:-translate-y-6"
            src="/my-image.jpg"
            alt="my image"
          />

          {/* green overlay */}
          <div className="absolute top-4 -left-4 w-full h-full bg-secondary/30 rounded-md transition-opacity ease-in-out group-hover:opacity-0"></div>

          {/* bg border */}
          <div className="absolute w-full h-full border-2 border-secondary top-8 left-0 rounded-md transition-all -z-10 pointer-events-none group-hover:top-9 group-hover:left-1"></div>

          {/* signature */}
          <Image
            className="absolute scale-0 invert transition-all group-hover:scale-100  -bottom-12 -left-32 md:-left-24 lg:-left-32 w-44 h-32"
            src="/mySignature.png"
            alt="signature"
            height={300}
            width={300}
          />
        </div>
        {/* right end */}
      </motion.div>
      {/* Intro end */}

      {/* skills start*/}
      <div ref={skillRef} className="space-y-4 justify-center">
        {getDesignedSkillsUI(
          frontEndSkills,
          "Front-end Development",
          isSkillRefInView
        )}
        <div className="flex flex-col sm:flex-row gap-6">
          {getDesignedSkillsUI(
            backendSkills,
            "Back-end Development",
            isSkillRefInView
          )}
          {getDesignedSkillsUI(otherSkills, "Other Skills", isSkillRefInView)}
        </div>
      </div>
      {/* skills end*/}
    </motion.div>
  );
}

function getDesignedSkillsUI(
  skills: {
    name: string;
    svg: string;
  }[],
  title: string,
  isSkillRefInView: {}
) {
  return (
    <>
      <motion.div className="space-y-2 rounded-md border border-slate-600 flex flex-grow flex-col p-4">
        <div className="flex flex-wrap justify-center items-center gap-4 p-2">
          {skills.map((skill, i) => (
            <motion.div
              initial={{ scale: 0 }}
              animate={isSkillRefInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              key={i + skill.name}
              className="rounded-md text-secondary animate-pulse hover:animate-none relative group h-12 w-12 sm:h-16 sm:w-16 p-2 bg-gradient-to-r from-slate-400 to-slate-500 text-sm cursor-pointer hover:scale-110 transition-all"
            >
              {React.createElement("div", {
                dangerouslySetInnerHTML: { __html: skill.svg },
              })}
              <span className="hidden font-mono absolute group-hover:block scale-0 group-hover:scale-100 group-hover:transition-all group-hover:duration-300 -top-12 text-nowrap left-0 bg-primary-light px-3 py-2 rounded-md text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
        <p className="text-base pt-1 md:text-center text-blue-200 font-medium">
          {title}
        </p>
      </motion.div>
    </>
  );
}

{
  /* <ul className="text-slate-400 font-mono tracking-wider my-4 grid grid-cols-2 gap-x-24 text-nowrap">
          <li className="before:content-['▹'] before:text-secondary">
            JavaScript (ES6+)
          </li>
          <li className="before:content-['▹'] before:text-secondary">React</li>
          <li className="before:content-['▹'] before:text-secondary">
            Next.js
          </li>
          <li className="before:content-['▹'] before:text-secondary">Python</li>
          <li className="before:content-['▹'] before:text-secondary">Django</li>
          <li className="before:content-['▹'] before:text-secondary">
            Django REst
          </li>
          <li className="before:content-['▹'] before:text-secondary">
            WordPress
          </li>
          <li className="before:content-['▹'] before:text-secondary">
            Databases
          </li>
        </ul> */
}
