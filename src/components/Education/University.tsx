import { type Univercity } from "@/data";
import Image from "next/image";
import TechComponent from "../ui/Tech/Tech";

function University({ university }: { university: Univercity }) {
  return (
    <div className="flex items-center gap-10">
      <div className="flex gap-2 items-center w-48">
        <Image src={university.img} width={500} height={500} alt={university.name} className="size-10 rounded-full" />
        <p>{university.name}</p>
      </div>

      <div>
        <span className="flex gap-1">
          {university.education}
          {university.edAt && <p className="text-primary">{university.edAt}</p>}
        </span>
        <div>
          <p>{university.period}</p>
        </div>
        <div className="flex">
          {university.techStack.map((tech) => (
            <TechComponent key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default University;
