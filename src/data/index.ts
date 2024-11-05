import { NavItem } from "@/components/Nav";

export const navItems: Array<NavItem> = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work", link: "#work-experience" }
];

type Tech = {
  name: string;
  img: string;
};
export const techStack: { [key: string]: Tech } = {};
