import React from "react";

interface TimelineProps {
  children: React.ReactNode;
  lineColor?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  children,
  lineColor = "from-primary/70 via-primary to-primary/30"
}) => {
  const childrenArray = React.Children.toArray(children);
  const hasMultipleItems = childrenArray.length > 1;

  return (
    <div className="relative pl-6">
      {hasMultipleItems && (
        <div
          className={`absolute left-2 w-0.5 bg-gradient-to-b ${lineColor}`}
          style={{
            top: "1.5rem", // Start at first dot
            bottom: "1.5rem" // End at last dot
          }}
        ></div>
      )}
      <div className="space-y-8">{children}</div>
    </div>
  );
};
