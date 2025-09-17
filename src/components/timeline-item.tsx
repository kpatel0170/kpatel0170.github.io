import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  duration?: string;
  description: string[];
  images?: string[];
  children?: React.ReactNode;
  url?: string;
  dotColor?: string;
  hideExternalLink?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  duration,
  description,
  images,
  children,
  url,
  dotColor = "bg-primary",
  hideExternalLink = false
}) => {
  return (
    <div className="relative">
      {/* Simple dot aligned with the timeline line */}
      <div
        className={`absolute -left-6 top-6 w-4 h-4 ${dotColor} border-3 border-slate-500 rounded-full shadow-lg z-10`}
      ></div>
      <Card className="ml-8 transition-all duration-300 border border-slate-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500 hover:text-blue-400">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="space-y-2">
            {subtitle && (
              <div className="text-lg font-semibold text-primary">
                {subtitle}
              </div>
            )}
            {duration && (
              <div className="inline-flex items-center bg-muted px-3 py-1 rounded-full text-sm font-medium">
                {duration}
              </div>
            )}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="prose prose-neutral max-w-none">
            <ul className="space-y-1 text-sm leading-relaxed text-muted-foreground">
              {description.map((item, index) => (
                <li key={index} className="list-disc list-inside">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {images && images.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">Media</h4>
              <div
                className={`grid gap-4 ${
                  images.length === 1
                    ? "grid-cols-1"
                    : images.length === 2
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                }`}
              >
                {images.map((imageSrc, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden  bg-muted/20"
                  >
                    <Image
                      src={imageSrc}
                      alt={`${title} - Image ${index + 1}`}
                      width={600}
                      height={400}
                      className={`w-full h-auto object-contain hover:scale-103 transition-transform duration-300 rounded-md ${
                        images.length === 1 ? "max-h-96" : "max-h-64"
                      }`}
                      unoptimized
                      onError={(e) => {
                        // Hide image if it fails to load
                        const target = e.target as HTMLElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {children}

          {url && !hideExternalLink && (
            <div className="pt-2">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Learn More
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
