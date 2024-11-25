import React from "react";
import educationData from "@/content/education.json";
import ListItem from "@/components/list-item";

interface EducationBlockProps {
  course: string;
  institute: string;
  duration: string;
  description: string[];
  awards?: string[];
  url: string;
}

const EducationBlock: React.FC<EducationBlockProps> = ({
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
      <div className="ml-5">
        <h2 className="text-xl font-bold">{course}</h2>
        <h3 className="text-lg font-medium text-slate-400">{institute}</h3>
        <p className="text-sm text-slate-600">{duration}</p>
        <ul className="list-disc list-inside mt-2">
          <ListItem items={description} />
        </ul>
        {awards && (
          <div className="mt-2 ml-2">
            <h3 className="text-lg font-medium text-slate-300">Awards:</h3>
            <ul className="list-disc list-inside mt-2">
              <ListItem items={awards} />
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

const Education: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      <div className="space-y-8 border-l-2 border-blue-400">
        {educationData.education.map((education, index) => (
          <div key={index} className="relative">
            <EducationBlock {...education} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
