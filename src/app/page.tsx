import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";

// export type NavItem = { name: string; link: string; icon: ReactNode };
// const navItems: Array<NavItem> = [
//   {
//     name: "Home",
//     link: "/",
//     icon: <FaHome />
//   }
// ];

export default function Home() {
  return (
    <main className="relative flex flex-col bg-black-100 justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Nav navItems={navItems} />
        <Hero />
        <RecentProjects />
      </div>
    </main>
  );
}
