"use client";
import DynamicIcon from "@/components/dynamic-icon";
import HeroSection from "@/components/hero-section";
import NavSection from "@/components/nav-section";
import data from "@/content/home.json";

export default function Home() {
  return (
    <div className="">
      <HeroSection data={data} />
      <NavSection />

      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">Skills</h2>
        <div className="grid grid-cols-1 gap-2">
          {data.skills.list.map(
            (
              skill: { type: string; list: string; icon: string },
              index: number
            ) => (
              <div
                key={index}
                className="flex items-center px-4 shadow rounded-lg"
              >
                <DynamicIcon name={skill.icon} className="mr-4 text-gray-500" />
                <span>
                  <strong>{skill.type}:</strong> {skill.list}
                </span>
              </div>
            )
          )}
        </div>
        <p className="mt-4 italic text-gray-500 ml-5">{data.skills.text}</p>
      </section>
    </div>
  );
}
