import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";

const TechStack = ({ techStack }) => (
  <li className=" text-slate-400">
    Tech Stack:{" "}
    <span className={`cursor-pointer text-slate-600 `}>
      {techStack.join(", ")}
    </span>
  </li>
);

const ProjectLinks = ({ links }) => (
  <div className="flex space-x-4 mt-4">
    {links.map((link, i) => {
      if (link.name === "GitHub") {
        return (
          <a
            key={i}
            href={link.url}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-slate-300 bg-slate-700 hover:bg-slate-800 focus:outline-none focus:border-slate-900 focus:shadow-outline-black active:bg-slate-900 transition duration-150 ease-in-out"
          >
            <FaGithub className="w-5 h-5 mr-2 -ml-1" />
            {link.name}
          </a>
        );
      } else if (link.name === "Live") {
        return (
          <a
            key={i}
            href={link.url}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-slate-300 bg-slate-700 hover:bg-slate-800 focus:outline-none focus:border-slate-900 focus:shadow-outline-black active:bg-slate-900 transition duration-150 ease-in-out"
          >
            <FaEye className="w-5 h-5 mr-2 -ml-1" />
            {link.name}
          </a>
        );
      } else {
        return null;
      }
    })}
  </div>
);

const ProjectBlock = ({ project }) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex relative">
        <div className="w-5 h-5 bg-blue-500 absolute -left-[11px] rounded-full z-10 md:mt-0"></div>
        <div className="ml-4 flex flex-col">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <ul className="list-disc list-inside mt-2">
            {project.description.map((desc, i) => (
              <li key={i} className="text-slate-400">
                {desc}
              </li>
            ))}
            <TechStack techStack={project.techStack} />
          </ul>
          {project.image && (
            <img src={project.image} alt={project.name} className="mt-4" />
          )}{" "}
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const projects = require("./Projects.json");

  return (
    <div className="flex flex-col items-center my-10">
      <div className="max-w-[95%] mx-auto p-3">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">My Projects</h1>
          <p className="mb-4">{projects.projects.text}</p>
          <div className="space-y-8 border-l-2 border-blue-400">
            {projects.projects.list.map((project, index) => (
              <div key={index} className="relative">
                <ProjectBlock project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
