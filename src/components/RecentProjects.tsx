import { projects } from "@/data";
import { AnimatedPin } from "./ui/PinContainer/PinContainer";

export default function RecentProjects() {
  return (
    <div id="projects" className="section">
      <h1 className="heading">
        My recent <span className="text-primary">projects</span>
      </h1>
      <div className="flex flex-col items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, desc, techStack, img }) => (
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <AnimatedPin title={title} href={`/projects/${id}`} description={desc} img={img} techStack={techStack} />
          </div>
        ))}
      </div>
    </div>
  );
}
