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

interface Experience {
  title: string;
  company: string;
  date: string;
}

export const experiences: Experience[] = [
  {
    title: "MERN Stack Developer",
    company: "Self-Employed",
    date: "2022 - Present",
  },
  {
    title: "MERN Stack Developer",
    company: "Self-Employed",
    date: "2022 - Present",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "Food Delivery App",
    image: "/foodzone.png",
    github: "https://github.com/ReynoldArun09/MERN-Food-Delivery-App",
    live: "https://foodzonenewapp.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "Hotel Booking App",
    image: "/booking.png",
    github: "https://github.com/ReynoldArun09/MERN-Hotel-Booking-App",
    live: "https://mern-hotel-booking-app.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "Blog App",
    image: "/blog.png",
    github: "https://github.com/Beast-Rey/mern-blog-app",
    live: "https://super-jelly-727c23.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "Mern Chat App",
    image: "/chat.png",
    github: "https://github.com/ReynoldArun09/MERN-chat-app",
    live: "https://poetic-narwhal-e5d4fa.netlify.app",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "Visual Studio Ui Clone",
    image: "/visual.png",
    github: "https://github.com/ReynoldArun09/Visual-studio-ui-clone",
    live: "https://venerable-snickerdoodle-1ceece.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "NETFLIX clone",
    image: "/netflix.png",
    github: "https://github.com/ReynoldArun09/React-Firebase-Movie-app",
    live: "https://incomparable-quokka-b46fcb.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "Yelp Review",
    image: "/yelp.png",
    github: "https://github.com/ReynoldArun09/MERN-Yelp-Review",
    live: "https://creative-chebakia-4ac9dc.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "youtube clone",
    image: "/YtubeClone.png",
    github: "https://github.com/ReynoldArun09/YtubeClone",
    live: "https://dashing-beignet-42ebdb.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "SunnySide Agency",
    image: "/SunnysideAgency.png",
    github: "https://github.com/ReynoldArun09/front-end-mentor-projects",
    live: "https://bucolic-melba-92d7e4.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "Advice Generator",
    image: "/AdviceGeneratorApp.png",
    github: "https://github.com/ReynoldArun09/front-end-mentor-projects",
    live: "https://boisterous-palmier-646e1f.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "Testimonials Grid",
    image: "/TestimonialsGrid.png",
    github: "https://github.com/ReynoldArun09/front-end-mentor-projects",
    live: "https://peaceful-cajeta-05aed3.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "Tour App",
    image: "/tour.png",
    github: "https://github.com/ReynoldArun09/react-projects-typescript",
    live: "https://gleeful-peony-d9813d.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "Birthday Reminder",
    image: "/birthday.png",
    github: "https://github.com/ReynoldArun09/react-projects-typescript",
    live: "https://main--illustrious-rabanadas-6c5b0a.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
  {
    name: "Reviews App",
    image: "/reviews.png",
    github: "https://github.com/ReynoldArun09/react-projects-typescript",
    live: "https://lucent-lolly-d6b364.netlify.app/",
    technologies: [
      "React",
      "Tailwind Css",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tanstack Query",
    ],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum.",
    ],
  },
];
