import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem key={item.id} id={item.id} title={item.title} description={item.description} />
        ))}
      </BentoGrid>
    </section>
  );
}
