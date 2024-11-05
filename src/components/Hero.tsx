import { GridBackground } from "./ui/GridBackground";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeams";

export default function Hero() {
  return (
    <div id="about" className="flex justify-center w-full items-center pb-20 pt-36">
      <Spotlight className="-top40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-2/3 w-1/2" fill="#E5ACB6" />
      <Spotlight className="top-28 left-80 h-2/3 w-1/2" fill="blue" />
      <GridBackground />

      <BackgroundBeamsWithCollision>
        <div className="flex justify-center my-10 z-10">
          <div></div>
          <div className="max-w-2/3 flex-col">
            <TextGenerateEffect
              className="text-start text-lg md:text-5xl lg:text-6xl"
              words="I'm a Softawre Engineer that writes code every day."
            />

            <p className="text-start w-full text-white/95 text-balance mt-5 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              I&apos;m Ivaylo Georgiev, and I&apos;m passionate about writing clean, high-quality code that&apos;s easy to maintain and
              improve over time. I&apos;m committed to continuous learning, exploring new solutions and technologies to enhance both my
              skills and the systems I work on.
            </p>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
