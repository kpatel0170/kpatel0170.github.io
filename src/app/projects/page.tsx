"use client";
import React from "react";
import { Github, Eye } from "lucide-react";
import Image from "next/image";
import projects from "@/content/projects.json";
import ListItem from "@/components/list-item";

interface TechStackProps {
  techStack: string[];
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => (
  <li className="text-slate-400 ml-2">
    Tech Stack:{" "}
    <span className={`cursor-pointer text-slate-500 `}>
      {techStack.join(", ")}
    </span>
  </li>
);

interface ProjectLink {
  name: string;
  url: string;
}

interface ProjectLinksProps {
  links: ProjectLink[];
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => (
  <div className="flex space-x-4 mt-4 ml-2">
    {links.map((link, i) => {
      if (link.name === "GitHub") {
        return (
          <a
            key={i}
            href={link.url}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-slate-300 bg-slate-700 hover:bg-slate-800 focus:outline-none focus:border-slate-900 focus:shadow-outline-black active:bg-slate-900 transition duration-150 ease-in-out"
          >
            <Github className="w-5 h-5 mr-2 -ml-1" />
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
            <Eye className="w-5 h-5 mr-2 -ml-1" />
            {link.name}
          </a>
        );
      } else {
        return null;
      }
    })}
  </div>
);

interface Project {
  name: string;
  description: string[];
  techStack: string[];
  image?: string;
  links: ProjectLink[];
}

interface ProjectBlockProps {
  project: Project;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ project }) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex relative">
        <div className="w-5 h-5 bg-blue-500 absolute -left-[11px] rounded-full z-10 md:mt-0"></div>
        <div className="ml-5 flex flex-col">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <ul className="list-disc list-inside mt-2">
            <ListItem items={project.description} />
            <TechStack techStack={project.techStack} />
          </ul>
          {/* {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={400}
              className="mt-4"
            />
          )}{" "} */}
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </div>
  );
};

const Project: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
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
  );
};

export default Project;
