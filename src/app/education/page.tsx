import React from "react";
import educationData from "@/content/education.json";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { TimelineItem } from "@/components/timeline-item";
import { Award } from "lucide-react";

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
    duration={duration}
    description={description}
    url={url}
    dotColor="bg-blue-500"
  >
    {awards && awards.length > 0 && (
      <div className="bg-gradient-to-r from-amber-950/30 to-orange-950/30 border border-amber-800/50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-5 h-5 text-amber-400" />
          <h4 className="text-base font-semibold text-amber-100">
            Awards & Recognition
          </h4>
        </div>
        <ul className="space-y-1 text-sm text-amber-200/80">
          {awards.map((award, index) => (
            <li key={index} className="list-disc list-inside">
              {award}
            </li>
          ))}
        </ul>
      </div>
    )}
  </TimelineItem>
);

const Education: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader
        title="Education"
        description="My academic journey and continuous learning experiences that shape my expertise in computer science and software development."
        gradient="from-blue-400 to-cyan-400"
      />

      <Timeline lineColor="from-blue-400 via-blue-500 to-blue-900/70">
        {educationData.education.map((education, index) => (
          <EducationBlock key={index} {...education} />
        ))}
      </Timeline>
    </div>
  );
};

export default Education;
