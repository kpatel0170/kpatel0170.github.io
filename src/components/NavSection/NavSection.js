import React from "react";
import IconCard from "../IconCard/IconCard";
import { GraduationCap, Code2, FolderGit2, BookOpenCheck } from "lucide-react";

export const revalidate = 3600;

function NavSection({ content, children }) {
  const icons = [GraduationCap, Code2, FolderGit2, BookOpenCheck];

  return (
    <section>
      <div className="mx-auto flex flex-col items-center gap-8 py-4 px-4 max-w-7xl w-full">
        <div className="text-center">
          {content.subheading && (
            <span className="text-md md:text-md lg:text-lg text-muted-foreground">
              {content.subheading}
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.cards.map((card, index) => (
            <a href={card.url} rel="noopener noreferrer">
              <IconCard
                key={index}
                icon={icons[index]}
                heading={card.heading}
                description={card.description}
              />
            </a>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}

export default NavSection;
