"use client";
import React from "react";
import experienceData from "@/content/experience.json";
import ListItem from "@/components/list-item";

interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills?: string[];
  url: string;
}

const ExperienceBlock: React.FC<ExperienceProps> = ({
  role,
  company,
  duration,
  description,
  skills,
  url
}) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-start">
        <div className="w-5 h-5 bg-blue-500 absolute -left-[11px] rounded-full z-10 md:mt-0"></div>
        <div className="ml-5">
          <h2 className="text-xl font-bold">{role}</h2>
          <h3 className="text-lg font-medium text-slate-400">{company}</h3>
          <p className="text-sm text-slate-600">{duration}</p>
          <ul className="list-disc list-inside mt-2">
            <ListItem items={description} />
          </ul>
          {skills && (
            <div className="mt-2 ml-2">
              <h3 className="text-md font-medium text-slate-300">Skills:</h3>
              <ul className="list-disc list-inside pl-6 mt-2">
                <ListItem items={skills} />
              </ul>
            </div>
          )}
          <a
            href={url}
            className="inline-flex items-center mt-4 ml-2 text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      <p className="mb-4">{experienceData.header}</p>
      <div className="space-y-8 border-l-2 border-blue-400">
        {experienceData.experience.map((experience, index) => (
          <div key={index} className="relative">
            <ExperienceBlock {...experience} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
