import React from "react";

const EducationBlock = ({ education }) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-start">
        <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">{education.course}</h2>
          <h3 className="text-lg font-medium">{education.institute}</h3>
          <p className="text-sm text-gray-600">{education.duration}</p>
          <ul className="list-disc list-inside mt-2">
            {education.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          {education.awards && (
            <div className="mt-2">
              <h3 className="text-lg font-medium">Awards:</h3>
              <ul className="list-disc list-inside mt-2">
                {education.awards.map((award, i) => (
                  <li key={i}>{award}</li>
                ))}
              </ul>
            </div>
          )}
          <a
            href={education.url}
            className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const educationData = require("./Education.json");

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      <div className="space-y-8">
        {educationData.education.map((education, index) => (
          <div key={index} className="relative">
            <EducationBlock education={education} />
            {index !== educationData.education.length - 1 && (
              <div className="timeline-connector absolute bg-blue-500 h-full w-px left-2 top-7"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
