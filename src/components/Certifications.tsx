import { certifications } from "@/data";
import { InfiniteMovingCards } from "./ui/Slider/Slider";

export default function Certifications() {
  return (
    <section className="section">
      <h1 className="heading">Certifications</h1>

      <InfiniteMovingCards items={certifications} speed="slow" pauseOnHover={false} />
    </section>
  );
}
