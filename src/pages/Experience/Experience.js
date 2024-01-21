import React, { useEffect } from "react";

const ExperienceBlock = ({ experience }) => {
  useEffect(() => {
    // Track page view when the component mounts
    window.gtag("config", "G-SD76JRWJJP", {
      page_path: window.location.pathname
    });
  }, []);

  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-start">
        <div className="w-4 h-4 bg-blue-500 absolute -left-2 rounded-full z-10 md:mt-0"></div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">{experience.role}</h2>
          <h3 className="text-lg font-medium">{experience.company}</h3>
          <p className="text-sm text-gray-500">{experience.duration}</p>
          <ul className="list-disc list-inside mt-2">
            {experience.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          <div className="mt-2">
            <h3 className="text-lg font-medium">Skills:</h3>
            <ul className="list-disc list-inside pl-6 mt-2">
              {experience.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
          <a
            href={experience.url}
            className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experienceData = require("./Experience.json");

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="relative flex flex-col items-center max-w-[95%] mx-auto p-3">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Experience</h1>
          <p className="mb-4">{experienceData.header}</p>
          <div className="space-y-8 border-l-2 border-blue-400">
            {experienceData.experience.map((experience, index) => (
              <div key={index} className="relative">
                <ExperienceBlock experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
