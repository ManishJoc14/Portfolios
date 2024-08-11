import Image from "next/image";
import Link from "next/link";
import { mainProjects } from "../../../../public/projects";

export function MainProjects() {
  return (
    <div
      id="work"
      className="container my-32 px-10 md:px space-y-10 mx-auto max-w-5xl"
    >
      <div className="flex flex-col md:flex-row font-bold gap-6 md:items-center">
        <div>
          <span className="text-lg md:text-2xl text-secondary pr-2">02.</span>
          <span className="font-sans text-xl md:text-4xl text-wrap md:text-nowrap tracking-wide text-slate-200">
            Some Things I’ve Built
          </span>
        </div>
        <hr className="w-full" />
      </div>

      <div className="grid gap-64 md:gap-32 ">
        {ProjectCardRight()} {ProjectCardLeft()}
      </div>
    </div>
  );
}

function ProjectCardRight() {
  let project = mainProjects[0];
  return (
    <>
      <div
        key={project.id}
        className="md:grid gap-2 max-h-96 mt-16 md:grid-cols-5 md:grid-rows-9 rounded-md relative"
      >
        <div className="col-start-1 row-start-2 row-span-7 col-span-3 relative cursor-pointer transition-all hover:z-50 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-primary-shadow rounded-md">
          <Image
            height={300}
            width={300}
            src={project.img}
            className="block h-full w-full rounded-md"
            alt="zingo"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-10 rounded-md transition-opacity hover:bg-opacity-0 ease-in duration-300"></div>
        </div>
        <p className="pt-6 col-start-5 row-start-1 font-mono text-sm text-secondary text-nowrap md:text-right">
          Featured Project
        </p>
        <Link
          target="_blank"
          href={project.demolink}
          className="underline col-start-4 row-start-2 col-span-2 md:text-right w-full font-mono text-3xl pt-2 text-slate-200 hover:underline cursor-pointer hover:text-secondary font-bold tracking-wide"
        >
          {project.title}
        </Link>
        <p className="col-start-3 row-start-4 row-span-2 col-span-3 font-sans tracking-wider text-sm text-slate-300 md:text-right z-10 md:bg-primary-light md:py-6 p-4 rounded-md">
          {project.description}
        </p>

        <p className="text-slate-300 row-start-6 col-start-4 col-span-3 text-nowrap md:text-right space-x-4 py-4 md:p-2 md:py-4 text-sm">
          {project.techs.map((tech, i) => (
            <span key={i + tech}>{tech}</span>
          ))}
        </p>

        <div className="row-start-8 col-start-5 flex gap-4 md:justify-end">
          <Link
            href={project.demolink}
            target="_blank"
            className="rounded-sm border border-secondary text-sm tracking-wider text-secondary transition-all hover:-translate-x-1 py-2 px-6 hover:-translate-y-1 hover:shadow-primary-shadow text-nowrap"
          >
            Demo
          </Link>
          <Link target="_blank" href={project.codelink}>
            {getGitHubLogo()}
          </Link>
        </div>
      </div>
    </>
  );
}

function ProjectCardLeft() {
  let project = mainProjects[1];
  return (
    <>
      <div
        key={project.id}
        className="md:grid space-y-2 md:space-y-0 max-h-96 mt-16 md:grid-cols-5 md:grid-rows-9 rounded-md relative"
      >
        {/* changed col-start-1 to col-start-3  */}
        <div className="col-start-3 row-start-2 row-span-7 col-span-3 relative cursor-pointer transition-all hover:z-50 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-primary-shadow rounded-md">
          <Image
            height={300}
            width={300}
            src={project.img}
            className="block h-full w-full rounded-md"
            alt="zingo"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-10 rounded-md transition-opacity hover:bg-opacity-0 ease-in duration-300"></div>
        </div>
        {/* changed col-start-5 to col-start-1 and removed md:text-right */}
        <p className="pt-6 col-start-1 row-start-1 font-mono text-sm text-secondary text-nowrap">
          Featured Project
        </p>

        {/* changed col-start-4 to col-start-1 and removed md:text-right */}
        <Link
          target="_blank"
          href={project.demolink}
          className="underline col-start-1 row-start-2 col-span-2 md:text-left w-full font-mono text-3xl pt-2 text-slate-200 hover:underline cursor-pointer hover:text-secondary font-bold tracking-wide"
        >
          {project.title}
        </Link>

        {/* changed col-start-3 to col-start-1 and removed md:text-right */}
        <p className="col-start-1 row-start-4 row-span-2 col-span-3 font-sans tracking-wider text-sm text-slate-300 z-10 md:bg-primary-light py-4 md:py-6 md:px-2 rounded-md">
          {project.description}
        </p>

        {/* changed col-start-6 to col-start-1 and removed md:text-right */}
        <p className="text-slate-300 row-start-6 col-start-1 col-span-3 text-nowrap space-x-4 py-4 md:p-2 md:py-4 text-sm">
          {project.techs.map((tech, i) => (
            <span key={i + tech}>{tech}</span>
          ))}
        </p>

        {/* changed col-start-5 to col-start-1 and removed md:text-right */}
        <div className="row-start-8 col-start-1 flex gap-4 items-center">
          <Link
            target="_blank"
            href={project.demolink}
            className="rounded-sm border border-secondary text-sm tracking-wider text-secondary transition-all hover:-translate-x-1 py-2 px-6 hover:-translate-y-1 hover:shadow-primary-shadow text-nowrap"
          >
            Demo
          </Link>
          <Link target="_blank" href={project.codelink}>
            {getGitHubLogo()}
          </Link>
        </div>
      </div>
    </>
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
