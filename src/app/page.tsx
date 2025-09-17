import DynamicIcon from "@/components/dynamic-icon";
import HeroSection from "@/components/hero-section";
import NavSection from "@/components/nav-section";
import { Card, CardContent } from "@/components/ui/card";
import data from "@/content/home.json";

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection data={data} />
      <NavSection />

      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional software
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.skills.list.map(
            (
              skill: { type: string; list: string; icon: string },
              index: number
            ) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-800/50 border-gray-700/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <DynamicIcon
                        name={skill.icon}
                        className="w-6 h-6 text-blue-400"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-100 mb-2">
                        {skill.type}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {skill.list}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>

        <div className="text-center">
          <p className="text-gray-400 italic max-w-3xl mx-auto">
            {data.skills.text}
          </p>
        </div>
      </section>
    </div>
  );
}
