import { skills } from "@/data";
import { Badge } from "../ui/badge";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative before:content-['<section>'] before:opacity-30 after:opacity-30 before:absolute before:-left-14 before:-top-3 
      before:font-extrabold before:text-muted-foreground before:text-xl after:content-['</section>'] after:absolute after:right-0 after:-bottom-10 after:text-muted-foreground after:text-xl after:font-extrabold"
    >
      <h2 className="py-5 text-2xl font-bold scroll-m-8 tracking-wider">
        Skills
      </h2>
      <div className="flex gap-x-2 gap-y-3 flex-wrap">
        {skills.map((skill, index) => (
          <Badge
            key={`${skill}-${index}`}
            className="hover:scale-110 cursor-pointer tracking-wide text-black"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
