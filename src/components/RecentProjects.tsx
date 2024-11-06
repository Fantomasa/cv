import { projects } from "@/data";
import { AnimatedPin } from "./ui/PinContainer/PinContainer";

export default function RecentProjects() {
  return (
    <div id="projects" className="section">
      <h1 className="heading">
        My recent <span className="text-primary">projects</span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-5">
        {projects.map(({ id, title, desc, techStack, img }) => (
          <AnimatedPin key={id} title={title} href={`/projects/${id}`} description={desc} img={img} techStack={techStack} />
        ))}
      </div>
    </div>
  );
}
