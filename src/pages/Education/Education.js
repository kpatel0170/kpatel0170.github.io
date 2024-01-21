import React, { useEffect } from "react";

const EducationBlock = ({ education }) => {
  useEffect(() => {
    window.gtag("config", "G-SD76JRWJJP", {
      page_path: window.location.pathname
    });
  }, []);

  const renderListItems = (items) =>
    items.map((item, i) => <li key={i}>{item}</li>);

  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-start">
        <div className="w-4 h-4 bg-blue-500 absolute -left-2 rounded-full z-10 md:mt-0"></div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">{education.course}</h2>
          <h3 className="text-lg font-medium">{education.institute}</h3>
          <p className="text-sm text-gray-600">{education.duration}</p>
          <ul className="list-disc list-inside mt-2">
            {renderListItems(education.description)}
          </ul>
          {education.awards && (
            <div className="mt-2">
              <h3 className="text-lg font-medium">Awards:</h3>
              <ul className="list-disc list-inside mt-2">
                {renderListItems(education.awards)}
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
    <div className="flex flex-col justify-center items-center my-10">
      <div className="relative flex flex-col items-center max-w-[95%] mx-auto p-3">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Education</h1>
          <div className="space-y-8 border-l-2 border-blue-400">
            {educationData.education.map((education, index) => (
              <div key={index} className="relative">
                <EducationBlock education={education} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
