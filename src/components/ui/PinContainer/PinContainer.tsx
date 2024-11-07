/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import { type Tech } from "@/data";
import Image from "next/image";
import TechComponent from "../Tech/Tech";

export function AnimatedPin({
  title,
  href,
  description,
  img,
  techStack
}: {
  title: string;
  href: string;
  description: string;
  img: string;
  techStack: Array<Tech>;
}) {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold tracking-wide  text-base text-slate-100">{title}</h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-300 tracking-wide">{description}</span>
          </div>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
          <div className="flex flex-col gap-1 w-full">
            <Image src={img} width={500} height={500} alt={title} className="rounded-lg mt-4 border-2 border-primary" />
            <div className="flex gap-0.5">
              {techStack.map((tech) => (
                <TechComponent key={tech.id} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
