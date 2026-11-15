import React from "react";
import { ArrowUpRight, Layers, Rocket } from "lucide-react";
import Icon from "@/components/icon";
import projects from "@/content/projects.json";
import { PageHeader } from "@/components/page-header";
import { Timeline, TimelineDetail, TimelineItem } from "@/components/timeline";

interface ProjectLink {
  name: string;
  url: string;
}

interface Project {
  name: string;
  description: string[];
  techStack: string[];
  image?: string;
  links: ProjectLink[];
}

const linkClassName =
  "link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground";

/* Only GitHub and Live links render; other names in the content are skipped. */
const ProjectLinks: React.FC<{ links: ProjectLink[] }> = ({ links }) => (
  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
    {links.map((link) => {
      if (link.name === "GitHub") {
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            <Icon name="Github" className="size-4" />
            GitHub
          </a>
        );
      }
      if (link.name === "Live") {
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            Live
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        );
      }
      return null;
    })}
  </div>
);

const ProjectBlock: React.FC<{ project: Project }> = ({ project }) => (
  <TimelineItem
    title={project.name}
    description={project.description}
    icon={<Rocket />}
  >
    <TimelineDetail label="Stack" icon={Layers}>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-foreground/80">
        {project.techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </TimelineDetail>
    <ProjectLinks links={project.links} />
  </TimelineItem>
);

const Project: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Selected builds"
        icon={Rocket}
        title="My Projects"
        description={projects.projects.text}
      />

      <Timeline>
        {projects.projects.list.map((project, index) => (
          <ProjectBlock key={index} project={project} />
        ))}
      </Timeline>
    </div>
  );
};

export default Project;
