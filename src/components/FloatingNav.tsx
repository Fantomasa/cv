"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100
        }}
        animate={{
          y: 0,
          opacity: 0.9
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          "flex max-w-full fixed top-10 inset-x-0 mx-auto border rounded-full bg-blackshadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[150] px-10 py-5  items-center justify-center space-x-4 border-white/[0.2] bg-black-100",
          className
        )}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn("relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-500")}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
