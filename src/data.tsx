import { DiMongodb, DiReact, DiRedis } from "react-icons/di";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

interface SocialLinksProps {
  name: string;
  icon: JSX.Element;
  link: string;
}

export const SocialLinks: SocialLinksProps[] = [
  {
    name: "Github",
    icon: <FaGithub size={24} />,
    link: "https://github.com/ReynoldArun09",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin size={24} />,
    link: "https://www.linkedin.com/in/reynold-arun/",
  },
];

interface SkillsProps {
  title: string;
  list: string[];
}

export const skills: SkillsProps[] = [
  {
    title: "Frontend",
    list: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    list: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    list: ["MongoDB", "Firebase", "Postgres", "Redis"],
  },
  {
    title: "Tools",
    list: ["Docker", "Git", "Github", "VS Code", "Postman", "Prisma"],
  },
];

interface Carouselskill {
  title: string;
  icon: JSX.Element;
}

export const Carouselskills: Carouselskill[] = [
  { title: "Mongo", icon: <DiMongodb size={60} /> },
  { title: "Express", icon: <SiExpress size={60} /> },
  { title: "React", icon: <DiReact size={60} /> },
  { title: "Node", icon: <FaNodeJs size={60} /> },
  { title: "Javascript", icon: <TbBrandJavascript size={60} /> },
  { title: "Docker", icon: <FaDocker size={60} /> },
  { title: "Redis", icon: <DiRedis size={60} /> },
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
    date: "2023 - 2024",
  },
];

interface Project {
  name: string;
  features: string[];
  technologies: string[];
  image: string;
  github: string;
  live: string;
  description: string;
}

export const projects: Project[] = [
  {
    name: "MangaSwipe",
    image: "/mangaswipe.png",
    github: "https://github.com/ReynoldArun09/MERN-Mangaswipe",
    live: "https://mangaswipe.netlify.app/",
    technologies: ["React", "Tailwind css", "MongoDB", "JavaScript", "Node", "Express", "Tanstack Query"],
    description:
      "MangaSwipe is a website dedicated to providing manga/manhwa enthusiasts with an immersive and convenient reading experience",
    features: [
      "Responsive Design for mobile, tablet, and desktop",
      "Browse through a vast collection of manga titles and read them online",
      "Easily find your favorite manga titles using the search functionality",
      "Toggle between light and dark mode",
    ],
  },
  {
    name: "One-Stop Ecommerce",
    image: "/ecommerce.png",
    github: "https://github.com/ReynoldArun09/MERN-Ecommerce-Store",
    live: "https://one-stop-ecommerce.netlify.app/",
    technologies: [
      "React",
      "Tailwind css",
      "MongoDB",
      "Node",
      "TypeScript",
      "Express",
      "Tanstack Query",
      "Shadcn UI",
      "Stripe",
      "Cloudinary",
    ],
    features: [
      "Authentication and Authorization",
      "Admin Dashboard to manage products, orders",
      "Stripe Payment Integration",
      "Responsive Design",
      "Cloudinary Image Upload and stripe payment integration",
      "Featured products, categories, and shopping cart",
      "Testing with Jest",
    ],
    description: "A user-friendly ecommerce platform built with the mern stack.",
  },
  {
    name: "Hotel Booking",
    image: "/booking.png",
    github: "https://github.com/ReynoldArun09/MERN-Hotel-Booking-App",
    live: "https://mern-hotel-booking-app.netlify.app/",
    technologies: [
      "React",
      "Tailwind css",
      "Tanstack Query",
      "Shadcn UI",
      "MongoDB",
      "Node",
      "Express",
      "Stripe",
      "Cloudinary",
      "Playwright",
    ],
    features: [
      "Authentication and Authorization",
      "Booking Hotels, Create Hotels, Delete Hotels, Update Hotels",
      "Search Hotels with advanced filters",
      "Payment Integration with Stripe",
      "Responsive Design for mobile, tablet, and desktop",
      "End-to-end testing with Playwright",
    ],
    description: "A user-friendly hotel booking platform built with the MERN stack.",
  },
  {
    name: "FoodZone",
    image: "/foodapp.png",
    github: "https://github.com/ReynoldArun09/MERN-Food-Delivery-App",
    live: "https://foodzonenewapp.netlify.app/",
    technologies: [
      "React",
      "Tailwind css",
      "MongoDB",
      "Node",
      "Typescript",
      "Express",
      "Tanstack Query",
      "Shadcn UI",
      "Stripe",
      "Cloudinary",
    ],
    features: [
      "Authentication and Authorization",
      "Admin Dashboard with CRUD Operations",
      "Search Products",
      "Product list, Category list, and manage cart",
      "Payment Integration with Stripe",
    ],
    description: "A seamless and intuitive food delivery platform built with the mern stack with dashboard for admin",
  },
  {
    name: "Blogging App",
    image: "/blog.png",
    github: "https://github.com/ReynoldArun09/MERN-Blog-App",
    live: "https://super-jelly-727c23.netlify.app/",
    technologies: [
      "React",
      "Tailwind css",
      "MongoDB",
      "Node",
      "Typescript",
      "Express",
      "Tanstack Query",
      "Shadcn UI",
      "Cloudinary",
    ],
    features: [
      "Authentication and Authorization",
      "Search Blogs/Posts",
      "Create Post, Delete Post, add comments, delete comments",
      "Responsive Design with theme toggle",
      "Update Profile picture",
    ],
    description: "Basic Blog App built with mern stack",
  },
  {
    name: "Job Portal App",
    image: "/jobportal.png",
    github: "https://github.com/ReynoldArun09/MERN-Job-Portal-Application",
    live: "https://job-portal-mern-stack.netlify.app/",
    technologies: [
      "React",
      "Tailwind css",
      "MongoDB",
      "Node",
      "Typescript",
      "Express",
      "Tanstack Query",
      "Shadcn UI",
      "Cloudinary",
      "Zod",
      "Jest",
      "swagger-ui",
    ],
    features: [
      "Authentication and Authorization",
      "Search jobs",
      "Create job, apply job, create company, update company, view applicants",
      "Responsive Design",
      "Dark mode",
      "recruiter dashboard",
    ],
    description: "job Portal App built with mern stack and typescript",
  },
  {
    name: "Visual Studio Code UI Clone",
    image: "/vs-code-ui.png",
    github: "https://github.com/ReynoldArun09/Next-Js-Visual-studio-ui-clone",
    live: "https://visual-studio-ui-clone.netlify.app/",
    technologies: ["Next Js", "Tailwind css", "Typescript", "Shadcn UI", "Zustand", "React icons"],
    features: ["Resizable Panels, dropdowns", "State Management with zustand"],
    description: "Visual studio code clone build with next-js, tailwind, shadcn",
  },
  {
    name: "Movie App (NETFLIX clone)",
    image: "/netflex.png",
    github: "https://github.com/ReynoldArun09/React-Firebase-Movie-app",
    live: "https://incomparable-quokka-b46fcb.netlify.app/shows",
    technologies: ["React", "Tailwind css", "Chakra ui", "Firebase Authentication", "TMDB API", "Axios", "Vite"],
    features: [
      "Firebase Authentication and Authorization",
      "Search Movies",
      "Responsive Design",
      "Dark mode",
      "Toggle Popular/Top Rated",
      "Pagination",
    ],
    description: "Movie App (netflix clone) built with react, firebase and TMDB Api",
  },
];
