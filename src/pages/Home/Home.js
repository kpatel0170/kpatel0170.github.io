import React from 'react';
import heroData from './Home.json';
import heroImage from '../../assets/profile-new.png';

const HomePage = () => {
  const { hero, technologies, connectMeText, sociallinks, profilelinks } = heroData;

  return (
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="max-w-lg mx-auto md:mx-0 md:mr-10 sm:mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center text-gray-800 my-4">{hero[0]}</h1>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center text-gray-800 my-4">{hero[1]}</h1>
          <p className="text-lg md:text-xl lg:text-xl text-center text-gray-600 mb-5">{hero[2]}</p>
          <div className="flex justify-center">
            <button className="px-6 py-3 text-lg md:text-xl font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-300 ease-in-out">Get in touch</button>
          </div>
        </div>
        <div className="flex items-center justify-center w-64 h-64 relative">
          <div className="w-full h-full rounded-full overflow-hidden shadow-md border-4 border-white">
            <img src={heroImage} alt="Hero" className="object-cover w-full h-full" />
          </div>
          <div className="absolute inset-0 rounded-full"></div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Technologies I work with:</h2>
        <ul className="text-lg md:text-xl text-gray-600">
          {technologies.list.map((tech, index) => (
            <li key={index} className="flex mb-2">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d={tech.svg} />
              </svg>
              <a href={tech.url} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{tech.name}</a>
              <span className="text-sm ml-2 text-gray-500">{tech.description}</span>
            </li>
          ))}
          <li className="text-sm text-gray-500 mt-2">{technologies.text}</li>
        </ul>
      </div>
      <div className="container mx-auto mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">{connectMeText}</h2>
        <div className="flex justify-center space-x-4">
          {sociallinks.map((socialLink, index) => (
            <a key={index} href={socialLink.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              <span className="sr-only">{socialLink.name}</span>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {profilelinks.map((profileLink, index) => (
            <a key={index} href={profileLink.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              <span className="sr-only">{profileLink.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
