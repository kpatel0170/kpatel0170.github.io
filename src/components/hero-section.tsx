"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import DynamicIcon from "@/components/dynamic-icon";

interface SocialLink {
  icon: string;
  url: string;
}

interface HeroSectionProps {
  data: {
    heading: string;
    list: string[];
    sociallinks: SocialLink[];
  };
}

const renderSocialLinks = (sociallinks: SocialLink[]) => {
  return sociallinks.map((link, index) => {
    return (
      <Link
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center border border-transparent text-sm leading-5 font-medium rounded-md text-slate-200 hover:text-blue-500 focus:outline-none focus:shadow-outline-black transition duration-150 ease-in-out"
      >
        <DynamicIcon name={link.icon} />
      </Link>
    );
  });
};

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const newList = data.list.map((item, i) => (
    <li className="text-left text-lg gap-2" key={i}>
      <span className="text-slate-400">{"> "}</span>
      {item}
    </li>
  ));

  return (
    <section className="flex flex-col-reverse lg:flex-row h-[90vh] justify-between md:space-x-4">
      <div className="lg:w-2/3 flex flex-col justify-center items-center lg:items-start gap-2">
        <h1 className=" text-4xl lg:text-5xl xl:text-5xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white">
          {data.heading}
        </h1>
        <div className="py-3 text-lg lg:text-xl xl:text-2xl leading-normal text-gray-600 dark:text-gray-300">
          <ul className="text-lg font-normal flex flex-col gap-2">{newList}</ul>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative rounded-[20px] bg-slate-500 bg-opacity-50 shadow-xl p-3">
            <div className="flex justify-center space-x-4">
              {renderSocialLinks(data.sociallinks)}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 flex justify-center items-center my-auto">
        <Image
          src="/profile-new.png"
          alt="profile-new"
          className="rounded-full shadow-xl"
          width={300}
          height={500}
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
