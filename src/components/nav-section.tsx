import React from "react";
import Link from "next/link";
import { GraduationCap, Code, FolderOpen, BookOpen } from "lucide-react";

interface Card {
  heading: string;
  description?: string;
  url: string;
}

const data = {
  subheading:
    "I know it's hard to understand someone too quick. Take a look at my journey....",
  cards: [
    {
      heading: "Education",
      description: "",
      url: "/education"
    },
    {
      heading: "Experience",
      description: "",
      url: "/experience"
    },
    {
      heading: "Projects",
      description: "",
      url: "/projects"
    },
    {
      heading: "Resume",
      description: "",
      url: "/resume"
    }
  ] as Card[]
};

interface IconCardProps {
  icon: React.ElementType;
  heading: string;
  description?: string;
}

const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  heading,
  description
}) => {
  return (
    <div className="flex flex-col items-center gap-4 max-w-sm bg-card p-8 rounded-md border border-border cursor-default transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500 hover:text-blue-500">
      {Icon && <Icon className="w-12 h-12 lg:w-16 lg:h-16" />}
      <h3 className="text-xl lg:text-2xl font-bold text-center">{heading}</h3>
      <h4 className="text-sm lg:text-md text-center text-muted-foreground">
        {description}
      </h4>
    </div>
  );
};

const NavSection: React.FC = () => {
  const icons = [GraduationCap, Code, FolderOpen, BookOpen];

  return (
    <section className="mx-auto flex flex-col items-center gap-8 py-4 px-4 max-w-7xl w-full">
      <div className="text-center">
        {data.subheading && (
          <span className="text-md md:text-md lg:text-lg text-gray-500">
            {data.subheading}
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.cards.map((card, index) => (
          <Link
            key={index}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconCard
              icon={icons[index]}
              heading={card.heading}
              description={card.description}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NavSection;
