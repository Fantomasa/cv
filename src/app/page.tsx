import { FloatingNav } from "@/components/FloatingNav";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { ReactNode } from "react";
import { FaHome } from "react-icons/fa";

export type NavItem = { name: string; link: string; icon: ReactNode };
const navItems: Array<NavItem> = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome />
  }
];

export default function Home() {
  return (
    <main className="relative bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
