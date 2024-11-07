import { loveTech } from "@/data";
import React from "react";
import TechComponent from "./ui/Tech/Tech";

export default function LoveTech() {
  return (
    <section className="section">
      <h1 className="heading">My areas of tech interest</h1>
      <div className="flex flex-row gap-2">
        {loveTech.map((tech) => (
          <TechComponent key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
}
