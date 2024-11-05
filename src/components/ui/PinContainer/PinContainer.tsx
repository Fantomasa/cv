/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import { FaLocationArrow } from "react-icons/fa";

export function AnimatedPin({
  title,
  href,
  description,
  img,
  iconLists
}: {
  title: string;
  href: string;
  description: string;
  img: string;
  iconLists: Array<string>;
}) {
  return (
    <div className="w-full flex items-center justify-center ">
      <PinContainer title={title} href={href}>
        <div className="flex items-center justify-end">
          <FaLocationArrow />
        </div>
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-black-100">
            <img src="/bg.png" alt="bg-img" />
          </div>
          <img src={img} alt={title} className="z-10 absolute bottom-0" />
        </div>
        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center gap-2">
            {iconLists.map((icon) => (
              <div key={icon}>
                <img src={icon} alt={icon} />
              </div>
            ))}
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
