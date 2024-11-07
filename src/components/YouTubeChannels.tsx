import Image from "next/image";
import { channelsArr } from "@/data";
import { YouTubeInfiniteCards } from "./ui/Slider/YouTube";

export default function YouTubeChannels() {
  return (
    <section className="section">
      <h1 className="heading flex items-center gap-2">
        <Image src="/yt.png" alt="youtube" width={500} height={500} className="size-10" />
        YouTube channels I enjoy watching
      </h1>
      <h2 className="sub-heading">
        I learn interesting things from these channels; they inspire me to explore new technologies and experiment with fresh ideas.
      </h2>
      <YouTubeInfiniteCards direction="right" items={channelsArr} />
    </section>
  );
}
