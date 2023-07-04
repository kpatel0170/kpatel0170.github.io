import React from "react";

const ExperienceBlock = ({ experience }) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-start">
        <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">{experience.role}</h2>
          <h3 className="text-lg font-medium">{experience.company}</h3>
          <p className="text-sm text-gray-600">{experience.duration}</p>
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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      <p className="mb-4">{experienceData.header}</p>
      <div className="space-y-8">
        {experienceData.experience.map((experience, index) => (
          <div key={index} className="relative">
            <ExperienceBlock experience={experience} />
            {index !== experienceData.experience.length - 1 && (
              <div className="timeline-connector absolute bg-blue-500 h-full w-px left-2 top-7"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
