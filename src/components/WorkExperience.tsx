import Image from "next/image";
import { oddstormStack } from "@/data";
import TechComponent from "./ui/Tech/Tech";

export default function WorkExperience() {
  return (
    <section id="work-experience" className="section flex flex-col">
      <h1 className="heading">Work Experience</h1>
      <p className="sub-heading">I didn&apos;t switch a lot of companies.</p>
      <div className="flex gap-10">
        <div className="flex items-center gap-1 h-fit">
          <Image className="size-6" alt="oddstorm" src={"/oddstorm.png"} width={100} height={100} />
          <p className="font-semibold">OddStorm</p>
        </div>
        <div>
          <h1 className="heading flex gap-2">
            Software Engineer <p className="text-primary">@OddStorm</p>
          </h1>
          <div className="">
            <p>Dec 2016 - Nov 2024</p>
          </div>
          <div className="flex">
            {oddstormStack.map((tech) => (
              <TechComponent key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
