import React from "react";
import { GraduationCap, Medal, Trophy } from "lucide-react";
import educationData from "@/content/education.json";
import { PageHeader } from "@/components/page-header";
import { Timeline, TimelineDetail, TimelineItem } from "@/components/timeline";

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
  <TimelineItem
    title={course}
    subtitle={institute}
    date={duration}
    icon={<GraduationCap />}
    description={description}
    url={url}
  >
    {awards && awards.length > 0 && (
      <TimelineDetail label="Awards & Recognition" icon={Trophy} tone="award">
        <ul className="space-y-2">
          {awards.map((award) => (
            <li key={award} className="flex gap-2.5 font-medium text-foreground/90">
              <Medal className="mt-0.5 size-4 shrink-0 text-award" aria-hidden="true" />
              {award}
            </li>
          ))}
        </ul>
      </TimelineDetail>
    )}
  </TimelineItem>
);

const Education: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Academic record"
        icon={GraduationCap}
        title="Education"
        description="My academic journey and continuous learning experiences that shape my expertise in computer science and software development."
      />

      <Timeline>
        {educationData.education.map((education, index) => (
          <EducationBlock key={index} {...education} />
        ))}
      </Timeline>
    </div>
  );
};

export default Education;
