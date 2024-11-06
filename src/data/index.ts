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

export const techStack: { JS: Tech; Jenkins: Tech; Delphi: Tech; GitHub: Tech; ProxMox: Tech; Meteor: Tech } = {
  JS: {
    name: "JavaScript",
    img: "/js.png"
  },
  Jenkins: {
    name: "Jenkins",
    img: "/jenkins.png"
  },
  Delphi: {
    name: "Delphi",
    img: "/delphi.png"
  },
  GitHub: {
    name: "GitHub",
    img: "/github.png"
  },
  ProxMox: {
    name: "ProxMox",
    img: "/proxmox.png"
  },
  Meteor: {
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
