import React from 'react';
import heroData from './Home.json';
import heroImage from '../../assets/profile-new.png';

const HomePage = () => {
  return (
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="max-w-lg mx-auto md:mx-0 md:mr-10 sm:mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center text-gray-800 my-4">{heroData.hero[0]}</h1>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center text-gray-800 my-4">{heroData.hero[1]}</h1>
          <p className="text-base md:text-lg lg:text-l text-center text-gray-600 mb-5">{heroData.hero[2]}</p>
          <div className="flex justify-center">
            <button className="px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-300 ease-in-out">Get in touch</button>
          </div>
        </div>
        <div className="flex items-center justify-center w-64 h-64 relative">
          <div className="w-full h-full rounded-full overflow-hidden shadow-md border-4 border-white">
            <img src={heroImage} alt="Hero" className="object-cover w-full h-full" />
          </div>
          <div className="absolute inset-0 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
