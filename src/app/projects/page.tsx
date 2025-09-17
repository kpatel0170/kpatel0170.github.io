import React from "react";
import { Github, Eye, Code } from "lucide-react";
import projects from "@/content/projects.json";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { TimelineItem } from "@/components/timeline-item";
import { Button } from "@/components/ui/button";

interface TechStackProps {
  techStack: string[];
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => (
  <div className="bg-gradient-to-r from-slate-950/30 to-gray-950/30 border border-slate-800/50 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-3">
      <Code className="w-5 h-5 text-slate-400" />
      <h4 className="text-base font-semibold text-slate-100">Tech Stack</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {techStack.map((tech, index) => (
        <span
          key={index}
          className="bg-slate-800/50 text-slate-200 px-3 py-1 rounded-full text-sm font-medium border border-slate-700/50"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

interface ProjectLink {
  name: string;
  url: string;
}

interface ProjectLinksProps {
  links: ProjectLink[];
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => (
  <div className="flex flex-wrap gap-3">
    {links.map((link, i) => {
      if (link.name === "GitHub") {
        return (
          <Button key={i} variant="outline" size="sm" asChild>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 hover:bg-gray-700/50 hover:text-gray-300"
            >
              <Github className="w-4 h-4" />
              {link.name}
            </a>
          </Button>
        );
      } else if (link.name === "Live") {
        return (
          <Button key={i} variant="default" size="sm" asChild>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 hover:bg-gray-700/50 hover:text-gray-300"
            >
              <Eye className="w-4 h-4" />
              {link.name}
            </a>
          </Button>
        );
      } else {
        return null;
      }
    })}
  </div>
);

interface Project {
  name: string;
  description: string[];
  techStack: string[];
  image?: string;
  links: ProjectLink[];
}

interface ProjectBlockProps {
  project: Project;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ project }) => (
  <TimelineItem
    title={project.name}
    subtitle=""
    duration=""
    description={project.description}
    url=""
    dotColor="bg-purple-500"
    hideExternalLink={true}
  >
    <TechStack techStack={project.techStack} />
    <div className="pt-2">
      <ProjectLinks links={project.links} />
    </div>
  </TimelineItem>
);

const Project: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader
        title="My Projects"
        description={projects.projects.text}
        gradient="from-purple-400 to-pink-400"
      />

      <Timeline lineColor="from-purple-400 via-purple-500 to-purple-900/70">
        {projects.projects.list.map((project, index) => (
          <ProjectBlock key={index} project={project} />
        ))}
      </Timeline>
    </div>
  );
};

export default Project;
