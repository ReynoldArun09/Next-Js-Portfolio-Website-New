import { projects } from "@/data";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Card } from "../ui/card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative my-16 py-3 before:content-['<Projects>'] before:opacity-30 after:opacity-30 before:absolute before:-left-14 before:-top-3 
    before:font-extrabold before:text-muted-foreground before:text-xl after:content-['</Projects>'] after:absolute after:right-0 after:-bottom-10 after:text-muted-foreground after:text-xl after:font-extrabold"
    >
      <div>
        {projects.map((project, index) => (
          <Card key={`${project}-${index}`} className="flex my-5">
            <div className="group relative h-80 my-auto w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={350}
                height={350}
                className="object-cover ml-2 transition-transform duration-500 group-hover:-translate-y-[65%]"
              />
            </div>
            <div className="space-y-3 py-3">
              <h3 className="font-bold text-2xl">{project.name}</h3>
              <ul>
                {project.description.map((description, index) => (
                  <li key={`${description}-${index}`}>
                    <span className="mr-2 mt-1.5 text-sky-500">•</span>
                    <span>{description}</span>
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
                  <FaGithub size={25} />
                  <span>View Code</span>
                  <span className="sr-only">github link</span>
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaExternalLinkAlt size={25} />
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
