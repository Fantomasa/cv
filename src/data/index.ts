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

export const techStack: {
  JS: Tech;
  Jenkins: Tech;
  Delphi: Tech;
  GitHub: Tech;
  ProxMox: Tech;
  Meteor: Tech;
  Docker: Tech;
  PM2: Tech;
  Redis: Tech;
  TS: Tech;
  MongoDB: Tech;
  PostgreSQL: Tech;
  NextJS: Tech;
  TWCSS: Tech;
  FM: Tech;
} = {
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
  },
  Docker: {
    id: 7,
    name: "Docker",
    img: "/docker.png"
  },
  PM2: {
    id: 8,
    name: "PM2",
    img: "/pm2.png"
  },
  Redis: {
    id: 9,
    name: "Redis",
    img: "/redis.png"
  },
  TS: {
    id: 10,
    name: "TypeScript",
    img: "/TS.png"
  },
  MongoDB: {
    id: 11,
    name: "MongoDB",
    img: "/mongodb.png"
  },
  PostgreSQL: {
    id: 12,
    name: "PostgreSQL",
    img: "/postgresql.png"
  },
  NextJS: {
    id: 13,
    name: "NextJS",
    img: "/nextjs.png"
  },
  TWCSS: {
    id: 15,
    name: "TailwindCSS",
    img: "/tailwindcss.png"
  },
  FM: {
    id: 16,
    name: "FramerMotion",
    img: "/framer-motion.png"
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

export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  techStack: Array<Tech>;
  githubLink: string;
};
export const projects: Array<Project> = [
  {
    id: 1,
    title: "Scrapper",
    desc: "This project aggregates public data from various websites, providing a centralized source of information for easy access and analysis.",
    githubLink: "",
    img: "/scrapper.png",
    techStack: [techStack.TS, techStack.Docker, techStack.NextJS, techStack.TWCSS, techStack.GitHub, techStack.Redis, techStack.MongoDB]
  },
  {
    id: 2,
    title: "PulseScore",
    desc: "Your go-to platform for real-time sports data and scores across Football, Basketball, and Tennis. Dive into live scores, fixtures, league tables, and more.",
    githubLink: "https://github.com/Fantomasa/pulsescore_15",
    img: "/pulsescore.png",
    techStack: [techStack.TS, techStack.Docker, techStack.NextJS, techStack.MongoDB, techStack.TWCSS, techStack.GitHub]
  },
  {
    id: 3,
    title: "CV",
    desc: "About me and my skills",
    githubLink: "https://github.com/Fantomasa/cv",
    img: "/cv.png",
    techStack: [techStack.TS, techStack.NextJS, techStack.TWCSS, techStack.GitHub, techStack.FM]
  }
];
