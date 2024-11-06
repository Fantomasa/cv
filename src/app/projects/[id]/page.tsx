import TechComponent from "@/components/ui/Tech/Tech";
import { projects, Tech } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BsGithub } from "react-icons/bs";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const currentId = +id;

  if (isNaN(currentId)) redirect("/");

  const filteredProjects = projects.filter((x) => x.id === currentId);
  const project = filteredProjects[0];

  return (
    <section className="absolute top-36 flex flex-col w-full md:w-1/2 p-2">
      <div className="flex justify-between">
        <div>
          <h1 className="heading">{project.title}</h1>
          <span className="flex mt-4">
            {project.techStack.map((tech: Tech) => (
              <TechComponent key={tech.id} tech={tech} />
            ))}
          </span>
        </div>

        {project.githubLink !== "" ? (
          <Link href={project.githubLink}>
            <BsGithub size={40} />
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <p className="text-xs">Private</p>
            <BsGithub className="cursor-not-allowed" size={40} />
          </div>
        )}
      </div>
      <h2 className="sub-heading">{project.desc}</h2>
      <Image className="w-full rounded-md" src={project.img} width={500} height={500} alt={project.title} />
    </section>
  );
}
