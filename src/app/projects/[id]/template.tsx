import { GridBackground } from "@/components/ui/GridBackground";
import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-[100vh] justify-center w-full md:w-1/2 mx-auto text-balance items-center pb-20 pt-36">
      <Spotlight className="-top40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-2/3 w-1/2" fill="#E5ACB6" />
      <Spotlight className="top-28 left-80 h-2/3 w-1/2" fill="blue" />
      <GridBackground />

      {children}
    </section>
  );
}

export default Template;
