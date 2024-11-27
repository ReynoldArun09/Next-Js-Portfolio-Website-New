import { projects } from "@/data";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Card } from "../ui/card";

export default function Projects() {
  return (
    <section
      id="projects"
      style={
        {
          "--content-before": '"<Projects>"',
          "--content-after": '"</Projects>"',
        } as React.CSSProperties
      }
    >
      <div>
        {projects.map((project, index) => (
          <Card
            key={`${project}-${index}`}
            className="flex justify-center mx-2 items-center my-6 gap-8 md:mx-0"
          >
            <div className="group relative h-80 my-auto overflow-hidden w-1/2 hidden md:block">
              <Image
                src={project.image}
                alt={project.name}
                width={350}
                height={350}
                className="object-cover ml-2 transition-transform duration-500 group-hover:-translate-y-[65%]"
              />
            </div>
            <div className="space-y-3 py-6 w-1/2 mr-4">
              <h3 className="font-bold text-2xl tracking-wider">
                {project.name}
              </h3>
              <p>{project.description}</p>
              <h4 className="font-bold">Key Features: </h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={`${feature}-${index}`}>
                    <span className="mr-2 mt-1.5 text-sky-500">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 py-3">
                {project.technologies.map((technology, index) => (
                  <Badge key={`${technology}-${index}`}>{technology}</Badge>
                ))}
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub size={24} />
                  <span>View Code</span>
                  <span className="sr-only">github link</span>
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGlobe size={24} />
                  <span>View Demo</span>
                  <span className="sr-only">live site</span>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
