import { projects } from "@/data";
import { AnimatedPin } from "./ui/PinContainer/PinContainer";

export default function RecentProjects() {
  return (
    <div id="projects" className="relative py-20">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        Selection of <span className="text-primary">recent projects</span>
      </h1>
      <div className="flex flex-col items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, iconLists, img, link }) => (
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <AnimatedPin title={title} href={link} description={des} img={img} iconLists={iconLists} />
          </div>
        ))}
      </div>
    </div>
  );
}
