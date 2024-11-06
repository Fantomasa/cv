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
  url: string;
  details: Array<ProjectDetails>;
};

export type ProjectDetails = {
  title: string;
  desc: Array<string>;
};

export const projects: Array<Project> = [
  {
    id: 1,
    title: "Scrapper",
    desc: "This project aggregates public data from various websites, providing a centralized source of information for easy access and analysis.",
    githubLink: "",
    img: "/scrapper.png",
    techStack: [techStack.TS, techStack.Docker, techStack.NextJS, techStack.TWCSS, techStack.GitHub, techStack.Redis, techStack.MongoDB],
    url: "#",
    details: [
      {
        title: "How it works?",
        desc: [
          `In project we have two main components: `,
          `1. Client: This part is responsible for preparing and configuring requests. 
          It defines what kind of request is needed (e.g., HTTP, HTTPS, controlled browser request, or WebSocket) and 
          sets any specific options, such as headers, payload, or connection parameters. However, the client itself does not execute the request—it just prepares it.`,
          `2. Server: This component handles the actual execution of requests configured by the client. 
          It takes the request details from the client and then performs the request, whether it's a simple HTTP/HTTPS call, a controlled browser interaction or a WebSocket connection.`
        ]
      },
      {
        title: "Why Docker?",
        desc: [
          `Docker streamlines project deployment by ensuring consistency across environments. 
          With Docker, we bundle the application along with all its dependencies so there are no unexpected issues with package versions or system configurations. 
          This setup makes it easy to upload and run the project reliably. 
          Docker’s lightweight containers allow for straightforward scaling—if you need more processing power, you can simply deploy the container to a more powerful machine or scale up with additional containers.`
        ]
      },
      {
        title: "Why NextJS?",
        desc: [
          `With Next.js, you can visualize task statuses dynamically, displaying real-time updates directly in the user interface.
           Editing task options like: Start/Stop the task. Edit the seasons etc..
          `
        ]
      }
    ]
  },
  {
    id: 2,
    title: "PulseScore",
    desc: "Your go-to platform for real-time sports data and scores across Football, Basketball, and Tennis. Dive into live scores, fixtures, league tables, and more.",
    githubLink: "https://github.com/Fantomasa/pulsescore_15",
    img: "/pulsescore.png",
    techStack: [techStack.TS, techStack.Docker, techStack.NextJS, techStack.MongoDB, techStack.TWCSS, techStack.GitHub],
    url: "https://pulsescore.net/",
    details: []
  },
  {
    id: 3,
    title: "CV",
    desc: "About me and my skills",
    githubLink: "https://github.com/Fantomasa/cv",
    img: "/cv.png",
    techStack: [techStack.TS, techStack.NextJS, techStack.TWCSS, techStack.GitHub, techStack.FM],
    url: "/",
    details: []
  }
];
