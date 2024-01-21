import React, { useEffect } from "react";
import heroData from "./Home.json";
import HeroSection from "../../components/HeroSection/HeroSection";
import NavSection from "../../components/NavSection/NavSection";

const HomePage = () => {
  useEffect(() => {
    // Track page view when the component mounts
    window.gtag("config", "G-SD76JRWJJP", {
      page_path: window.location.pathname
    });
  }, []);

  const { sociallinks, technologies } = heroData;

  const techList = technologies.list.map((tech, i) => (
    <li className="flex items-center text-lg gap-2" key={i}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        fill="none"
      >
        <path
          fill="white"
          d="M9.752 3.137V8.24l-4.42-2.552-2.25 3.899 4.42 2.55-4.42 2.55 2.25 3.898 4.42-2.552v5.104h4.5v-5.104l4.42 2.552 2.25-3.898-4.42-2.55 4.42-2.55-2.25-3.899-4.42 2.552V3.137h-4.5Zm1.5 1.5h1.5v6.202l5.37-3.101.75 1.297-5.37 3.102 5.37 3.101-.75 1.297-5.37-3.1v6.202h-1.5v-6.203l-5.37 3.101-.75-1.297 5.37-3.101-5.37-3.102.75-1.297 5.37 3.101V4.637Z"
        ></path>
      </svg>
      <a
        href={tech.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline text-sm text-blue-500"
      >
        {tech.name}
      </a>
      <span className="text-sm ml-2 text-gray-500">{tech.description}</span>
    </li>
  ));

  return (
    <div className="text-white">
      <HeroSection />

      <NavSection />

      <div className="flex flex-col items-center my-10">
        <div className="relative rounded-[20px] bg-white bg-opacity-30 shadow-xl p-3">
          <div className="flex justify-center space-x-4">
            {sociallinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <img
                  src={require(`../../assets/${link.svg}.svg`)}
                  alt={link.name}
                  className="w-5 h-5 mr-1"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <h2 className="text-4xl font-bold text-gray-300 mb-8">
          Technologies I work with:
        </h2>

        <ul className="text-lg leading-[26px] font-normal flex flex-col gap-4 pl-5">
          {techList}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
