import React from "react";
import { Briefcase, Wrench } from "lucide-react";
import experienceData from "@/content/experience.json";
import { PageHeader } from "@/components/page-header";
import { Timeline, TimelineDetail, TimelineItem } from "@/components/timeline";

interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills?: string[];
  url: string;
}

/* Renders one role; skills appear as a flat mono list under the details. */
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
    date={duration}
    icon={<Briefcase />}
    description={description}
    url={url}
  >
    {skills && skills.length > 0 && (
      <TimelineDetail label="Technologies" icon={Wrench}>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-foreground/80">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </TimelineDetail>
    )}
  </TimelineItem>
);

const Experience: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Work history"
        icon={Briefcase}
        title="Experience"
        description={experienceData.header[0]}
      />

      <Timeline>
        {experienceData.experience.map((experience, index) => (
          <ExperienceBlock key={index} {...experience} />
        ))}
      </Timeline>
    </div>
  );
};

export default Experience;
