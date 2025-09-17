import React from "react";
import experienceData from "@/content/experience.json";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { TimelineItem } from "@/components/timeline-item";
import { Code } from "lucide-react";

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
}) => (
  <TimelineItem
    title={role}
    subtitle={company}
    duration={duration}
    description={description}
    url={url}
    dotColor="bg-green-500"
  >
    {skills && skills.length > 0 && (
      <div className="bg-gradient-to-r from-blue-950/30 to-indigo-950/30 border border-blue-800/50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <Code className="w-5 h-5 text-blue-400" />
          <h4 className="text-base font-semibold text-blue-100">
            Technologies & Skills
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm font-medium border border-blue-700/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}
  </TimelineItem>
);

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader
        title="Experience"
        description={experienceData.header[0]}
        gradient="from-green-400 to-emerald-400"
      />

      <Timeline lineColor="from-green-400 via-green-500 to-green-900/70">
        {experienceData.experience.map((experience, index) => (
          <ExperienceBlock key={index} {...experience} />
        ))}
      </Timeline>
    </div>
  );
};

export default Experience;
