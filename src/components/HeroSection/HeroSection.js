import React from "react";

const data = {
  heading: "Hi! 👋 I’m Kartik Patel",
  list: [
    "CS student at the University of Regina",
    "Software Developer Intern at FarmSimple",
    "Tech Enthusiast"
  ]
};

const HeroSection = () => {
  const newList = data.list.map((list, i) => (
    <li className="flex w-full text-lg gap-2" key={i}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
        aria-label="Checkmark Icon"
      >
        <path
          fill="currentColor"
          d="M9.752 3.137V8.24l-4.42-2.552-2.25 3.899 4.42 2.55-4.42 2.55 2.25 3.898 4.42-2.552v5.104h4.5v-5.104l4.42 2.552 2.25-3.898-4.42-2.55 4.42-2.55-2.25-3.899-4.42 2.552V3.137h-4.5Zm1.5 1.5h1.5v6.202l5.37-3.101.75 1.297-5.37 3.102 5.37 3.101-.75 1.297-5.37-3.1v6.202h-1.5v-6.203l-5.37 3.101-.75-1.297 5.37-3.101-5.37-3.102.75-1.297 5.37 3.101V4.637Z"
        ></path>
      </svg>
      {list}
    </li>
  ));

  return (
    <div className="container p-8 mx-auto xl-px-0 flex flex-wrap items-center justify-center">
      <div className="max-w-2xl mb-8 lg:w-1/2 lg:pr-8">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white">
          {data.heading}
        </h1>
        <div className="py-4 text-lg lg:text-xl xl:text-2xl leading-normal text-gray-600 dark:text-gray-300">
          <ul className="text-md md:text-lg lg:text-md xl:text-lg font-normal flex flex-col gap-2">
            {newList}
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-2/3 md:w-4/5 lg:w-3/4">
          <img
            src="/profile-new.png"
            alt="profile-new"
            width="616"
            height="617"
            className="object-cover rounded-full"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
