import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  gradient?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  gradient = "from-primary to-blue-500"
}) => {
  return (
    <div className="text-center space-y-4 mb-12">
      <h1
        className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
      >
        {title}
      </h1>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
