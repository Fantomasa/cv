/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { Tech } from "@/data";
import Image from "next/image";

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
    <div className="w-1/2 mt-20 flex items-center justify-center ">
      <PinContainer title={title} href={href}>
        <div className="flex items-center justify-end">
          <FaLocationArrow />
        </div>
        <div className="flex items-center justify-center w-[80vw] h-96 mb-10">
          <div className="w-full h-full bg-black-100 rounded-md">
            <Image width={100} height={100} src="/bg.png" alt="bg-img" />
          </div>
          <Image width={500} height={500} src={img} alt={title} className="z-10 absolute rounded-md" />
        </div>
        <h1 className="font-bold text-base md:text-xl line-clamp-1">{title}</h1>
        <p className="font-light text-sm line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            {techStack.map((tech) => (
              <div key={tech.id}>
                <Image src={`${tech.img}`} alt={tech.name} width={100} height={100} />
              </div>
            ))}
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
