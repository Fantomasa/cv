import { education } from "@/data";
import University from "./University";

export default function Education() {
  return (
    <section id="education" className="section">
      <h1 className="heading">Education</h1>
      <div className="flex flex-col gap-4">
        {education.map((univercity) => (
          <University key={univercity.id} university={univercity} />
        ))}
      </div>
    </section>
  );
}
