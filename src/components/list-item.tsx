import React from "react";

interface ListItemProps {
  items: string[];
}

// Renders each string as an <li>. Text wrapped in *asterisks* becomes emphasized.
const ListItem: React.FC<ListItemProps> = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <li key={i} className="pl-1">
          {renderEmphasis(item)}
        </li>
      ))}
    </>
  );
};

const renderEmphasis = (text: string) =>
  text.split(/(\*[^*]+\*)/g).map((part, index) =>
    part.startsWith("*") && part.endsWith("*") && part.length > 2 ? (
      <strong key={index} className="font-medium text-foreground">
        {part.slice(1, -1)}
      </strong>
    ) : (
      part
    )
  );

export default ListItem;
