import React from "react";
import type { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  eyebrow?: string;
  icon?: LucideIcon;
  title: string;
  description?: string;
}

// Short mono eyebrow above the title. The description is optional.
export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  icon: Icon,
  title,
  description
}) => {
  return (
    <header className="rise mb-14 space-y-5 border-b border-border pb-12">
      {eyebrow && (
        <p className="flex items-center gap-2 font-mono text-xs tracking-wider text-subtle-foreground uppercase">
          {Icon && <Icon className="size-3.5" aria-hidden="true" />}
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
};
