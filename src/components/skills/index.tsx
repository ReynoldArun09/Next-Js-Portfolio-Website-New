import { skills } from "@/data";
import { Badge } from "../ui/badge";

export default function Skills() {
  return (
    <section
      id="skills"
      style={
        {
          "--content-before": '"<Skills>"',
          "--content-after": '"</Skills>"',
        } as React.CSSProperties
      }
    >
      <div className="flex gap-x-2 gap-y-3 py-6 flex-wrap">
        {skills.map((skill, index) => (
          <Badge
            key={`${skill}-${index}`}
            className="hover:scale-110 cursor-pointer tracking-wide"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
