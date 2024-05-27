import React from "react";
import heroData from "./Home.json";
import HeroSection from "../../components/HeroSection/HeroSection";
import NavSection from "../../components/NavSection/NavSection";

const HomePage = () => {
  const { skills } = heroData;

  const renderSkills = () => {
    return skills.list.map((skill, i) => (
      <li className="flex items-center text-lg gap-2" key={i}>
        <span className="text-slate-400">{"> "}</span>
        {skill.type}
        {": "}
        <span className=" text-slate-400">{skill.list}</span>
      </li>
    ));
  };

  return (
    <div className="text-white">
      <HeroSection data={heroData} />
      <NavSection />

      <section className="container mx-auto mt-16">
        <h2 className="text-4xl font-bold text-gray-300 mb-8">Skills:</h2>
        <ul className="text-lg leading-[26px] font-normal flex flex-col gap-4 pl-5">
          {renderSkills()}
          <li className="flex items-center text-lg gap-2">
            <span className="text-slate-400">{"> "}</span>
            {skills.text}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
