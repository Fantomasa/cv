import { FaLocationArrow } from "react-icons/fa";
import { GridBackground } from "./ui/GridBackground";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeams";

export default function Hero() {
  return (
    <div className="flex justify-center w-full items-center pb-20 pt-36">
      <Spotlight className="-top40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-2/3 w-1/2" fill="#E5ACB6" />
      <Spotlight className="top-28 left-80 h-2/3 w-1/2" fill="blue" />
      <GridBackground />

      <BackgroundBeamsWithCollision>
        <div className="flex justify-center my-20 z-10">
          <div></div>
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex-col items-center flex justify-center">
            <h2 className="uppercase tracking-widest text-center text-blue-100 max-w-80">Dynamic Web Magic with Next.js</h2>

            <TextGenerateEffect
              className="text-center text-lg md:text-5xl lg:text-6xl"
              words="Transofrming Concepts into Seamless Experiences"
            />

            <p className="telative text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi i&apos;m Ivaylo, a Software Developer
            </p>

            <a href="#about">
              <MagicButton icon={<FaLocationArrow />} position="right" title="Show my work" />
            </a>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
