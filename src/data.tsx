import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiReact, DiMongodb } from "react-icons/di";

export const skills: string[] = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "MongoDB",
  "Node.js",
  "Express.js",
  "Docker",
  "Redis",
  "TanStack Query",
  "ShadCN UI",
  "Firebase",
];

interface Carouselskill {
  title: string;
  icon: JSX.Element;
}

export const Carouselskills: Carouselskill[] = [
  { title: "React", icon: <DiReact size={60} /> },
  { title: "Node", icon: <FaNodeJs size={60} /> },
  { title: "Express", icon: <SiExpress size={60} /> },
  { title: "Mongo", icon: <DiMongodb size={60} /> },
];

interface Experience {
  title: string;
  company: string;
  date: string;
}

export const experiences: Experience[] = [
  {
    title: "MERN Stack Developer",
    company: "Zephyr Technologies & Solutions",
    date: "2022 - 2024",
  },
  {
    title: "Web Developer (intership)",
    company: "Nimbus Tech Pvt Ltd",
    date: "2021 - 2021",
  },
];

interface Project {
  name: string;
  description: string[];
  technologies: string[];
  image: string;
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    name: "MangaSwipe",
    image: "/mangaswipe.png",
    github: "https://github.com/ReynoldArun09/MERN-Mangaswipe",
    live: "https://mangaswipe.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Manga Reading: Browse through a vast collection of manga titles and read them online.",
      "Search: Easily find your favorite manga titles using the search functionality.",
      "Responsive Design: Access MangaSwipe seamlessly across various devices including desktops, tablets, and mobile phones.",
      "Dark Mode: Toggle between light and dark mode for comfortable reading in different environments",
    ],
  },
];
