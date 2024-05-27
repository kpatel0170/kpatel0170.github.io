import React from "react";

const ListItem = ({ items }) =>
  items.map((item, i) => (
    <li key={i} className="text-slate-400">
      {item}
    </li>
  ));

const EducationBlock = ({
  course,
  institute,
  duration,
  description,
  awards,
  url
}) => (
  <div className="flex flex-col mb-8">
    <div className="flex items-start">
      <div className="w-5 h-5 bg-blue-500 absolute -left-[11px] rounded-full z-10 md:mt-0"></div>
      <div className="ml-4">
        <h2 className="text-xl font-bold">{course}</h2>
        <h3 className="text-lg font-medium text-slate-400">{institute}</h3>
        <p className="text-sm text-slate-600">{duration}</p>
        <ul className="list-disc list-inside mt-2">
          <ListItem items={description} />
        </ul>
        {awards && (
          <div className="mt-2">
            <h3 className="text-lg font-medium text-slate-300">Awards:</h3>
            <ul className="list-disc list-inside mt-2">
              <ListItem items={awards} />
            </ul>
          </div>
        )}
        <a
          href={url}
          className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
);

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
                <EducationBlock {...education} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
