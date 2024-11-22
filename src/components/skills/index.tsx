import { skills } from "@/data";
import { Badge } from "../ui/badge";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative my-16 py-3 before:content-['<Skills>'] before:opacity-30 after:opacity-30 before:absolute before:-left-14 before:-top-3 
    before:font-extrabold before:text-muted-foreground before:text-xl after:content-['</Skills>'] after:absolute after:-right-10 after:-bottom-10 after:text-muted-foreground after:text-xl after:font-extrabold"
    >
      <div className="flex gap-x-2 gap-y-3 py-6 flex-wrap">
        {skills.map((skill, index) => (
          <Badge
            key={`${skill}-${index}`}
            className="hover:scale-110 cursor-pointer tracking-wide text-white dark:text-white"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
