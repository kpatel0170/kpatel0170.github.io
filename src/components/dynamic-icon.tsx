import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";

const DynamicIcon = ({ name, ...props }: LucideProps & { name: string }) => {
  const LucideIcon = dynamic<LucideProps>(() =>
    import("lucide-react").then((mod) => mod[name as keyof typeof mod] as React.ComponentType<LucideProps>)
  );
  return <LucideIcon {...props} />;
};

export default DynamicIcon;
