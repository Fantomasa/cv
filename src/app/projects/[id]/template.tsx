import { GridBackground } from "@/components/ui/GridBackground";
import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="abolute top-0 w-full overflow-hidden">
        <Spotlight className="-top40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-2/3 w-1/2" fill="#E5ACB6" />
        <Spotlight className="top-28 left-80 h-2/3 w-1/2" fill="blue" />
        <GridBackground />
        <div className="flex w-full justify-center overflow-hidden mt-24">{children}</div>
      </section>
    </>
  );
}
