import { NavItem } from "@/components/Nav";

export const navItems: Array<NavItem> = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work", link: "#work-experience" },
  { name: "Contact", link: "#contact" }
];

export type Certificat = {
  name: string;
  img: string;
};

export const certifications: Array<Certificat> = [
  {
    name: "basics",
    img: "/basics.png"
  },
  {
    name: "team",
    img: "/team.png"
  },
  {
    name: "fundamentals",
    img: "/fundamentals.png"
  },
  {
    name: "oop",
    img: "/oop.png"
  },
  {
    name: "entity",
    img: "/entity.png"
  },
  {
    name: "js-adv",
    img: "/js-adv.png"
  },
  {
    name: "js-app",
    img: "/js-app.png"
  },
  {
    name: "data-struc",
    img: "/data-struc.png"
  },
  {
    name: "alg",
    img: "/alg.png"
  },
  {
    name: "wsa",
    img: "/wsa.png"
  },
  {
    name: "wsa-adv",
    img: "/wsa-adv.png"
  },
  {
    name: "react",
    img: "/react.png"
  }
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
  Jest: Tech;
  Prisma: Tech;
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
  },
  Jest: {
    id: 17,
    name: "Jest",
    img: "/jest.png"
  },
  Prisma: {
    id: 18,
    name: "Prisma",
    img: "/prisma.png"
  }
};

export type Univercity = {
  id: number;
  img: string;
  name: string;
  period: string;
  education: string;
  edAt?: string;
  techStack: Array<Tech>;
};
export const education: Array<Univercity> = [
  {
    id: 0,
    img: "/university.png",
    name: "University of Economics - Varna",
    education: "Bachelor",
    edAt: "@Informatics",
    period: "Dec 2011 - Dec 2015",
    techStack: []
  },
  {
    id: 1,
    img: "/softuni.png",
    name: "Software University",
    education: "C#",
    period: "Mart 2016 - Dec 2016",
    techStack: []
  },
  {
    id: 2,
    img: "/softuni.png",
    name: "Software University",
    education: "JavaScript",
    period: "May 2017 - Aug 2017",
    techStack: []
  },
  {
    id: 3,
    img: "/softuni.png",
    name: "Software University",
    education: "Data Structures with C#",
    period: "Dec 2018 - Mart 2019",
    techStack: []
  },
  {
    id: 4,
    img: "/softuni.png",
    name: "Software University",
    education: "Algorithms with C#",
    period: "Mart 2019 - Jun 2019",
    techStack: []
  },
  {
    id: 5,
    img: "/softuni.png",
    name: "Software University",
    education: "WSA",
    period: "Aug 2020 - Sep 2020",
    techStack: []
  },
  {
    id: 6,
    img: "/softuni.png",
    name: "Software University",
    education: "WSA Advanced",
    period: "Nov 2020 - Feb 2021",
    techStack: []
  },
  {
    id: 7,
    img: "/softuni.png",
    name: "Software University",
    education: "ReactJS",
    period: "Nov 2021 - Dec 2021",
    techStack: []
  }
];

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
          sets any specific options, such as headers, proxies, payload, or connection parameters. However, the client itself does not execute the request—it just prepares it.`,
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
          Docker’s lightweight containers allow for straightforward scaling—if we need more processing power, we can simply deploy the container to a more powerful machine or scale up with additional containers.`
        ]
      },
      {
        title: "Why NextJS?",
        desc: [
          `With Next.js, we can visualize task statuses dynamically, displaying real-time updates directly in the user interface.
           Editing task options like: Start/Stop the task. Edit the seasons etc..`
        ]
      },
      {
        title: "Why Redis?",
        desc: [
          `Redis is ideal for managing proxy statuses because it's an in-memory database, offering high-speed access to frequently updated data. 
          By centralizing proxy information in Redis, we ensure that all scrapers pull from the same, up-to-date set of proxies, making it easier to manage and monitor proxy usage 
          across different scraping tasks. This setup helps streamline resource sharing and improves scraping operations.
          `
        ]
      },
      {
        title: "Why MongoDB?",
        desc: [
          `When storing collected data, the choice of database depends significantly on how frequently the data is updated. We can store to any DB we want.
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
    techStack: [
      techStack.TS,
      techStack.NextJS,
      techStack.TWCSS,
      techStack.Jest,
      techStack.MongoDB,
      techStack.Prisma,
      techStack.Docker,
      techStack.GitHub
    ],
    url: "https://pulsescore.net/",
    details: [
      {
        title: "About the project",
        desc: [
          "This is a website witch hightly depends on the scrapper project. Because all of collected data we visualise here.",
          `1. The "Fixtures" section on website is a comprehensive list of football events, organized by leagues. Each league has its own dedicated table, making it easy for users to browse events within a specific league. This structure helps users quickly find relevant matches and view detailed scheduling information.`,
          `2. The "Live" section on website represent real-time updates for Football, Tennis, and Basketball events. This section refreshes every 5 seconds, ensuring that users receive up-to-the-moment scores and updates for each sport. This frequent refresh rate provides a dynamic, up-to-date experience for users tracking live events.`
        ]
      },
      {
        title: "How it works?",
        desc: [
          `Here we have 3 main components:`,
          `1. Scrapper: Collects all publicly available data required for the website.`,
          `2. API: Manages data accessibility, allowing for filtering and merging to provide only the necessary data.`,
          `3. Website: Presents the data visually for clients, making it easy to navigate and interact with the information collected`
        ]
      },
      {
        title: "Why NextJS?",
        desc: [`Next.js is a particularly for projects that demand fast, dynamic, and SEO-friendly web applications. `]
      },
      {
        title: "Why Jest?",
        desc: [
          `Jest is a popular testing framework, particularly suited for JavaScript and TypeScript projects. Great with React Testing Library. 
          Is particularly useful for testing API calls, asynchronous code, and external dependencies.`
        ]
      },
      {
        title: "Why MongoDB?",
        desc: [
          `MongoDB is a flexible and scalable NoSQL database, well-suited for applications that handle large, semi-structured, or unstructured datasets.
           MongoDB supports rapid read and write operations, which is useful for handling live data updates, such as scores and event statuses.`
        ]
      },
      {
        title: "Why Prisma ORM?",
        desc: [
          `Prisma ORM offers several advantages, especially for a project that uses MongoDB with Next.js and TypeScript. 
           Prisma generates types based on database schema, ensuring that code remains type-safe.
           Generates efficient queries for database operations.
           Abstracts away the complexity of direct database interaction. So Focus is on writing application logic rather than worrying about complex SQL queries.
           `
        ]
      },
      {
        title: "Why Docker?",
        desc: [
          `Docker streamlines project deployment by ensuring consistency across environments. 
           With Docker, we bundle the application along with all its dependencies so there are no unexpected issues with package versions or system configurations. 
           Docker makes it easier to run Jest tests in isolated environments, so you can be confident that everything works as expected when the tests pass.
          `
        ]
      },
      {
        title: "Why GitHub?",
        desc: [
          `
          Using GitHub for version control and to manage CI/CD pipeline. 
          Ensuring a smooth and automated workflow. This setup allows to easily deploy to production when the project is ready. 
          The CI/CD process helps maintain consistency and reliability throughout the deployment process.
          `
        ]
      }
    ]
  },
  {
    id: 3,
    title: "CV Website",
    desc: "About me and my skills",
    githubLink: "https://github.com/Fantomasa/cv",
    img: "/cv.png",
    techStack: [techStack.TS, techStack.NextJS, techStack.TWCSS, techStack.GitHub, techStack.FM],
    url: "/",
    details: [
      {
        title: "About the project",
        desc: [
          "The website is meant to show what I'm good at, what I love to do, and what my interests are. It’s a way to share my skills and passions with others."
        ]
      },
      {
        title: "Why NextJS?",
        desc: [`Next.js is a particularly for projects that demand fast, dynamic, and SEO-friendly web applications. `]
      },
      {
        title: "Why GitHub?",
        desc: [
          `
          Using GitHub for version control and to manage CI/CD pipeline.           
          `
        ]
      },
      {
        title: "Why Framer Motion?",
        desc: [
          `
          Framer Motion is a popular library for animations in React applications. It's easy to use, customizable and have server-Side Rendering Support.
          `
        ]
      }
    ]
  }
];
