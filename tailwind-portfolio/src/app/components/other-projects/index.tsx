"use client";

import Link from "next/link";
import { webProjects, aiMlProjects, appProjects, Project, threeDProjects } from "../../../../public/projects";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const categories = ["Web", "AI", "3D", "App"];

export default function OtherProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerRefInView = useInView(containerRef, {
    // once: true,
    margin: "-40px",
  });

  const [selectedCategory, setSelectedCategory] = useState("Web");
  const [filteredProjects, setFilteredProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    if (selectedCategory === "Web") {
      setFilteredProjects(webProjects);
    }
    else if (selectedCategory === "AI") {
      setFilteredProjects(aiMlProjects);
    }
    else if (selectedCategory === "App") {
      setFilteredProjects(appProjects);
    } else if (selectedCategory === "3D") {
      setFilteredProjects(threeDProjects);
    }
  }, [selectedCategory]);

  return (
    <>
      <motion.div
        ref={containerRef}
        className="container mx-auto px-8 pb-28 pt-56 sm:pt-52 md:pt-28 xl:py-10 max-w-5xl flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={isContainerRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl text-violet-200 font-sans tracking-wider font-bold text-center text-wrap md:text-nowrap"
        >
          Other Noteworthy Projects
        </motion.h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 py-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border transition-all duration-200 text-sm font-medium ${selectedCategory === cat
                ? "bg-secondary text-black"
                : "border-secondary text-secondary hover:bg-secondary hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-col-4 py-16">
          {filteredProjects && filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isContainerRefInView={isContainerRefInView}
              index={index}
            />
          ))}

        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={isContainerRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <button className="rounded-md text-wrap max-w-64 mt-8 border border-secondary p-4 px-6 text-sm tracking-wider text-secondary transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-primary-shadow">
            <Link href="https://github.com/ManishJoc14" target="_blank">
              Show more
            </Link>
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}

function ProjectCard({
  project,
  isContainerRefInView,
  index,
}: {
  project: Project;
  isContainerRefInView: boolean;
  index: number;
}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={isContainerRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        whileHover={{ y: -10, transition: { delay: 0, duration: 0.2 } }}
        transition={{ delay: (2.5 + index) * 0.3, duration: 0.4 }}
        key={project.title}
        className="bg-primary-light rounded-xl shadow-lg group transition-all duration-300 hover:shadow-xl flex flex-col"
      >
        {/* Image */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="overflow-hidden rounded-t-md aspect-video bg-slate-800 cursor-pointer"
        >
          <Image
            height={500}
            width={500}
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4 pt-0">
          {/* Title + Description */}
          <div className="py-6 font-sans flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              {project.demolink ? (
                <Link
                  href={project.demolink}
                  target="_blank"
                  className="group-hover:text-secondary text-indigo-200 font-bold text-lg tracking-wide hover:underline"
                >
                  {project.title}
                </Link>
              ) : (
                <span className="text-indigo-200 font-bold text-lg tracking-wide">
                  {project.title}
                </span>
              )}

              <div className="flex gap-3 items-center justify-end">
                <Link href={project.codelink} target="_blank">
                  {getGitHubLogo()}
                </Link>
                {project.demolink && (
                  <Link href={project.demolink} target="_blank">
                    {getLinkLogo()}
                  </Link>
                )}
              </div>
            </div>

            <p className="text-indigo-100 text-pretty text-[0.94rem] mt-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <p className="pt-5 text-indigo-100 tracking-widest text-[0.8rem] space-x-2 flex flex-wrap">
              {project.techs.map((tech, i) => (
                <code className="bg-gray-700 rounded-md px-1" key={tech + i}>{tech}</code>
              ))}
            </p>
          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full p-4"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-4 right-0 text-red-500 text-4xl hover:text-red-600"
            >
              &times;
            </button>
            <Image
              src={project.img}
              alt={project.title}
              width={1000}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      )}

    </>
  );
}

function getGitHubLogo() {
  return (
    <svg
      className="feather feather-github h-6 flex-shrink-0 text-secondary transition-colors cursor-pointer"
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
      className="h-5 cursor-pointer hover:text-secondary text-slate-400 feather feather-external-link"
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
