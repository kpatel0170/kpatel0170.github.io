import React from "react";

interface ListItemProps {
  items: string[];
}

const ListItem: React.FC<ListItemProps> = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <li key={i} className="text-md text-slate-400 ml-2">
          {parseDescription(item)}
        </li>
      ))}
    </>
  );
};

const parseDescription = (description: string) => {
  const parts = description.split(/(\*.*?\*)/g).map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <strong key={index} className="text-slate-300">
          {part.slice(1, -1)}
        </strong>
      );
    }
    return part;
  });

  return <>{parts}</>;
};

export default ListItem;
