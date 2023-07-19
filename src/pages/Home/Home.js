import React, {useEffect} from "react";
import heroData from "./Home.json";
import heroImage from "../../assets/profile-new.png";

const HomePage = () => {

  useEffect(() => {
    // Track page view when the component mounts
    window.gtag('config', 'G-SD76JRWJJP', {
      page_path: window.location.pathname,
    });
  }, []);

  const { hero, technologies, connectMeText, sociallinks, profilelinks } =
    heroData;

  return (
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="max-w-lg mx-auto md:mx-0 md:mr-10 ">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center text-gray-800 my-4">
            {hero[0]}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center text-gray-800 my-4">
            {hero[1]}
          </h1>
          <p className="text-lg md:text-xl lg:text-xl text-center text-gray-600 mb-5">
            {hero[2]}
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-3 text-lg md:text-xl font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-300 ease-in-out">
              Get in touch
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-64 h-64 mt-10">
          <div className="w-full h-full rounded-full overflow-hidden shadow-md border-4 border-white ">
            <img
              src={heroImage}
              alt="Hero"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="inset-0 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-xl p-3">
        <div className="mt-2 mb-8 w-full">
          <p className="mt-2 px-2 text-base text-gray-600">
            I know it's hard to understand someone too quick. Take a look on the cool stuff I've been doing so far....
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <a href="/education">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-md hover:shadow-lg">
              <p className="text-base font-medium text-gray-900">Education</p>
            </div>
          </a>

          <a href="/experience">
            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-md hover:shadow-lg">
              <p className="text-base font-medium text-gray-900">Experience</p>
            </div>
          </a>

          <a href="/projects">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-md hover:shadow-lg">
              <p className="text-base font-medium text-gray-900">Projects</p>
            </div>
          </a>

          <a href="/resume.pdf">
            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-md hover:shadow-lg">
              <p className="text-base font-medium text-gray-900">Resume</p>
            </div>
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-5">
          {sociallinks.map((Link, index) => (
            <a
              key={index}
              href={Link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 flex items-center"
            >
              <img
                src={require(`../../assets/${Link.svg}.svg`)}
                alt={Link.name}
                className="w-5 h-5 mr-1"
              />
            </a>
          ))}
        </div>
      </div>
    </div>



      <div className="container mx-auto mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Technologies I work with:
        </h2>
        <ul className="text-lg md:text-xl text-gray-600">
          {technologies.list.map((tech, index) => (
            <li key={index} className="flex mb-2">
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                {tech.name}
              </a>
              <span className="text-sm ml-2 text-gray-500">
                {tech.description}
              </span>
            </li>
          ))}
          <li className="text-sm text-gray-500 mt-2">{technologies.text}</li>
        </ul>
      </div>
      <div className="container mx-auto mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          {connectMeText}
        </h2>
        
        <div className="flex justify-center mt-4 space-x-4">
          {profilelinks.map((profileLink, index) => (
            <a
              key={index}
              href={profileLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 flex items-center"
            >
              <img
                src={require(`../../assets/${profileLink.svg}.svg`)}
                alt={profileLink.name}
                className="w-5 h-5 mr-1"
              />
              <span>{profileLink.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
