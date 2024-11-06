import { NavItem } from "@/components/Nav";

export const navItems: Array<NavItem> = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work", link: "#work-experience" }
];

export type Tech = {
  id: number;
  name: string;
  img: string;
};

export const techStack: { JS: Tech; Jenkins: Tech; Delphi: Tech; GitHub: Tech; ProxMox: Tech; Meteor: Tech } = {
  JS: {
    id: 1,
    name: "JavaScript",
    img: "/js.png"
  },
  Jenkins: {
    id: 2,
    name: "Jenkins",
    img: "/jenkins.png"
  },
  Delphi: {
    id: 3,
    name: "Delphi",
    img: "/delphi.png"
  },
  GitHub: {
    id: 4,
    name: "GitHub",
    img: "/github.png"
  },
  ProxMox: {
    id: 5,
    name: "ProxMox",
    img: "/proxmox.png"
  },
  Meteor: {
    id: 6,
    name: "Meteor",
    img: "/meteor.png"
  }
};

export const oddstormStack: Array<Tech> = [
  techStack.Delphi,
  techStack.Jenkins,
  techStack.JS,
  techStack.GitHub,
  techStack.ProxMox,
  techStack.Meteor
];
