/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaDev,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaHackerrank
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const iconMap = {
  FaLinkedin: FaLinkedin,
  FaDev: FaDev,
  FaInstagram: FaInstagram,
  FaGithub: FaGithub,
  FaTwitter: FaTwitter,
  SiLeetcode: SiLeetcode,
  SiGeeksforgeeks: SiGeeksforgeeks,
  FaHackerrank: FaHackerrank
};

const renderSocialLinks = (sociallinks) => {
  return sociallinks.map((link, index) => {
    const IconComponent = iconMap[link.icon];
    return (
      <Link
        key={index}
        to={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center  border border-transparent text-sm leading-5 font-medium rounded-md  text-slate-200 hover:text-slate-400 focus:outline-none  focus:shadow-outline-black  transition duration-150 ease-in-out"
      >
        <IconComponent className="w-5 h-5 mr-1" />
      </Link>
    );
  });
};

const HeroSection = ({ data }) => {
  const newList = data.list.map((item, i) => (
    <li className="flex w-full text-lg gap-2" key={i}>
      <span className="text-slate-400">{"> "}</span>
      {item}
    </li>
  ));

  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white">
          {data.heading}
        </h1>
        <div className="py-4 text-lg lg:text-xl xl:text-2xl leading-normal text-gray-600 dark:text-gray-300">
          <ul className="text-lg font-normal flex flex-col gap-2">{newList}</ul>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative rounded-[20px] bg-slate-500 bg-opacity-50 shadow-xl p-3">
            <div className="flex justify-center space-x-4">
              {renderSocialLinks(data.sociallinks)}
            </div>
          </div>
        </div>
      </div>
      <div className="p-15 flex justify-center items-center">
        <img
          src="/profile-new.png"
          alt="profile-new"
          className="rounded-full shadow-xl md:w-2/3 xl:w-2/3 2xl:w-1/2"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;
