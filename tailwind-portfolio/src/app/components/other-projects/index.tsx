"use client";

import Link from "next/link";
import { otherProjects } from "../../../../public/projects";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OtherProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerRefInView = useInView(containerRef, {
    // once: true,
    margin: "-40px",
  });
  return (
    <>
      <motion.div
        ref={containerRef}
        className="container mx-auto px-8 pb-28 pt-56 sm:pt-52 md:pt-28 xl:py-10 max-w-4xl flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={isContainerRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl text-violet-200 font-sans tracking-wider font-bold text-center text-wrap md:text-nowrap"
        >
          Other Noteworthy Projects
        </motion.h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-col-3 py-16">
          {otherProjects.map((project, index) =>
            ProjectCard(project, isContainerRefInView, index)
          )}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={isContainerRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <Link
            href="https://github.com/ManishJoc14"
            target="_blank"
            className="rounded-md w-max mt-8 border border-secondary p-4 px-6 text-sm tracking-wider text-secondary transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-primary-shadow "
          >
            Show More
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}

function ProjectCard(
  project: {
    id: number;
    title: string;
    description: string;
    img: string;
    codelink: string;
    demolink: string;
    techs: string[];
  },
  isContainerRefInView: {},
  index: number
) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={isContainerRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ delay: (2.5 + index) * 0.3, duration: 0.6 }}
      key={project.id + project.title}
      className="p-6 bg-primary-light rounded-md"
    >
      <div className="flex justify-between">
        <Link href={project.codelink} target="_blank">
          {getGitHubLogo()}
        </Link>
        <Link href={project.demolink} target="_blank">
          {getLinkLogo()}
        </Link>
      </div>

      <div className="py-10 font-sans">
        <Link
          href={project.demolink}
          target="_blank"
          className="hover:text-secondary cursor-pointer text-teal-400 font-semibold text-xl hover:underline"
        >
          {project.title}
        </Link>
        <p className="text-slate-400 text-pretty mt-4">{project.description}</p>
        <p className="pt-6 text-zinc-400 font-mono text-md space-x-4 flex flex-wrap">
          {project.techs.map((tech, i) => (
            <span key={tech + i}>{tech}</span>
          ))}
        </p>
      </div>
    </motion.div>
  );
}

function getGitHubLogo() {
  return (
    <svg
      className="feather feather-github h-10 flex-shrink-0 text-secondary transition-colors cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Code</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}
function getLinkLogo() {
  return (
    <svg
      className="h-6 cursor-pointer hover:text-secondary text-slate-400 feather feather-external-link"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Demo</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

function getFileLogo() {
  return (
    <svg
      className="feather feather-github h-10 flex-shrink-0 text-secondary transition-colors cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Code</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}
