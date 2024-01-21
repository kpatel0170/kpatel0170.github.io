import React, { useEffect, useState } from "react";

const ProjectBlock = ({ project }) => {
  const [showTech, setShowTech] = useState(false);

  useEffect(() => {
    // Track page view when the component mounts
    window.gtag("config", "G-SD76JRWJJP", {
      page_path: window.location.pathname
    });
  }, []);

  return (
    <div className="flex flex-col mb-8">
      <div className="flex relative">
        <div className="w-4 h-4 bg-blue-500 absolute -left-2 rounded-full z-10 mt-2 md:mt-0"></div>
        <div className="ml-4 flex flex-col">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <ul className="list-disc list-inside mt-2">
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          <p className="mt-2">
            Tech Stack:{" "}
            <span
              className={`cursor-pointer text-blue-500 ${
                showTech ? "underline" : ""
              }`}
              onClick={() => setShowTech(!showTech)}
            >
              {showTech ? project.techStack.join(", ") : "Show Tech Stack"}
            </span>
          </p>
          <div className="flex space-x-4 mt-4">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:border-gray-900 focus:shadow-outline-black active:bg-gray-900 transition duration-150 ease-in-out"
              >
                <svg
                  className="w-5 h-5 mr-2 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d={getSvgPath(link.svg)} />
                </svg>
                {link.name}
              </a>
            ))}
          </div>
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

function getSvgPath(name) {
  switch (name) {
    case "GitHub":
      return "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.88 8.14 6.84 9.47.5.09.68-.22.68-.48v-1.69c-2.8.62-3.39-1.34-3.39-1.34-.46-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.9 1.55 2.37 1.1 2.95.84.09-.65.35-1.1.64-1.35-2.23-.25-4.57-1.11-4.57-4.94 0-1.1.39-2 .84-2.7-.08-.26-.36-1.28.08-2.66 0 0 .84-.27 2.75 1.03A9.47 9.47 0 0 1 12 5.79c.85 0 1.7.11 2.5.33 1.91-1.31 2.75-1.03 2.75-1.03.44 1.38.16 2.4.08 2.66.46.69.84 1.6.84 2.7 0 3.85-2.34 4.69-4.58 4.94.36.31.68.92.68 1.86v2.76c0 .26.18.57.69.48A10.03 10.03 0 0 0 22 12c0-5.52-4.48-10-10-10z";
    case "Eye":
      return "M3.999 12c0-4.42 3.589-8 8-8 4.42 0 8 3.589 8 8 0 4.42-3.58 8-8 8-4.411 0-8-3.58-8-8zm9-6.5c-4.137 0-7.5 3.363-7.5 7.5 0 4.137 3.363 7.5 7.5 7.5 4.137 0 7.5-3.363 7.5-7.5 0-4.137-3.363-7.5-7.5-7.5zm1.5 11h-3v-1h3v1zm0-2h-3v-5h3v5z";
    default:
      return "";
  }
}
