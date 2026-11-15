import Icon from "@/components/icon";
import HeroSection from "@/components/hero-section";
import NavSection from "@/components/nav-section";
import data from "@/content/home.json";

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32">
      <HeroSection data={data} />
      <NavSection />

      <section className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with to build exceptional software
            solutions.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-b border-border">
          {data.skills.list.map((skill) => (
            <li
              key={skill.type}
              className="flex items-start gap-3 border-t border-border py-4"
            >
              <Icon
                name={skill.icon}
                className="mt-1 size-4 shrink-0 text-subtle-foreground"
              />
              <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:gap-6">
                <h3 className="w-28 shrink-0 font-medium text-foreground">
                  {skill.type}
                </h3>
                <p className="text-muted-foreground">{skill.list}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="italic text-muted-foreground">{data.skills.text}</p>
      </section>
    </div>
  );
}
