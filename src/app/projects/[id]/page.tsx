import TechComponent from "@/components/ui/Tech/Tech";
import { ProjectDetails, projects, Tech } from "@/data";
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
    <section className="relative flex flex-col w-full md:w-1/2 p-2">
      <div className="flex justify-between">
        <div>
          <Link href={`${project.url}`} className="underline">
            <h1 className="heading">{project.title}</h1>
          </Link>
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

      <Link href={project.url}>
        <Image className="w-full rounded-md border-2 border-primary" src={project.img} width={1200} height={1000} alt={project.title} />
      </Link>
      {project.details.map((detail) => (
        <ProjectDetailsComponent key={detail.title} details={detail} />
      ))}
    </section>
  );
}

function ProjectDetailsComponent({ details }: { details: ProjectDetails }) {
  return (
    <div className="mt-10">
      <h1 className="heading">{details.title}</h1>
      {details.desc.map((p, idx) => (
        <h1 key={idx} className="sub-heading text-balace">
          {p}
        </h1>
      ))}
    </div>
  );
}
