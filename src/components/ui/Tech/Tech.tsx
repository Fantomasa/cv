"use client";
import { type Tech } from "@/data";

import Image from "next/image";
import React, { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export default function Tech({ tech }: { tech: Tech }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <div
      className="mr-2 relative group"
      key={tech.name}
      onMouseEnter={() => setHoveredIndex(tech.id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence mode="popLayout">
        {hoveredIndex === tech.id && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 5
              }
            }}
            exit={{ opacity: 0, y: 5, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap"
            }}
            className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
          >
            {/* <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " /> */}
            <div className="absolute w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
            <div className="font-bold text-white relative z-30 text-base">{tech.name}</div>
            {/* <div className="text-white text-xs">{item.designation}</div> */}
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        onMouseMove={handleMouseMove}
        height={100}
        width={100}
        src={tech.img}
        alt={tech.name}
        className="object-cover bg-white !m-0 !p-0 object-top rounded-full size-7 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
      />
    </div>
  );
}
