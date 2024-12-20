import { GridBackground } from "./ui/GridBackground";
import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerate";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeams";

export default function Hero() {
  return (
    <section id="about" className="flex justify-center w-full md:w-1/2 mx-auto text-balance items-center pb-20 pt-36">
      <Spotlight className="-top40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-2/3 w-1/2" fill="#E5ACB6" />
      <Spotlight className="top-28 left-80 h-2/3 w-1/2" fill="blue" />
      <GridBackground />

      <BackgroundBeamsWithCollision>
        <div className="flex justify-center my-10 z-10">
          <div className="flex-col">
            {/* <TextGenerateEffect className="text-start text-lg" words="I'm a Softawre Engineer that writes code every day." /> */}
            <h1 className="text-balance text-2xl leading-snug tracking-wide font-bold">
              I&apos;m a Software Engineer who writes code <p className="text-primary">every day</p>
            </h1>
            <p className="text-start w-full text-white/95 mt-5 md:tracking-wider mb-4 text-sm md:text-base">
              I&apos;m Ivaylo Georgiev, and I&apos;m passionate about writing clean, high-quality code that&apos;s easy to maintain and
              improve over time. I&apos;m committed to continuous learning, exploring new solutions and technologies to enhance both my
              skills and the systems I work on.
            </p>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
