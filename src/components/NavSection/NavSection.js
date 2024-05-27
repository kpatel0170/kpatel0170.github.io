import React from "react";
import { FaGraduationCap, FaCode, FaFolderOpen, FaBookOpen } from 'react-icons/fa';

const data = {
  "subheading":
    "I know it's hard to understand someone too quick. Take a look on my journey....",
  "cards": [
    {
      "heading": "Education",
      "description": "",
      "url": "/education"
    },
    {
      "heading": "Experience",
      "description": "",
      "url": "/experience"
    },
    {
      "heading": "Projects",
      "description": "",
      "url": "/projects"
    },
    {
      "heading": "Resume",
      "description": "",
      "url": "/resume"
    }
  ]
};

function IconCard({ icon: Icon, heading, description }) {
  return (
    <>
      <div className="flex flex-col items-center gap-4 max-w-sm bg-card dark:bg-card/50 p-8 rounded-md border border-border cursor-default transition-all duration-300 ease-in-out transform hover:-translate-y-2 drop-shadow-sm">
        {Icon && <Icon className="w-12 h-12 lg:w-16 lg:h-16" />}
        <h3 className="text-xl lg:text-2xl font-bold text-center">{heading}</h3>
        <h4 className="text-sm lg:text-md text-center text-muted-foreground">
          {description}
        </h4>
      </div>
    </>
  );
}

function NavSection() {
  const icons = [FaGraduationCap, FaCode, FaFolderOpen, FaBookOpen];

  return (
    <section className="mx-auto flex flex-col items-center gap-8 py-4 px-4 max-w-7xl w-full">
      <div className="text-center">
        {data.subheading && (
          <span className="text-md md:text-md lg:text-lg text-gray-500">
            {data.subheading}
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.cards.map((card, index) => (
          <a key={index} href={card.url} rel="noopener noreferrer">
            <IconCard
              icon={icons[index]}
              heading={card.heading}
              description={card.description}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default NavSection;
