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
      <div className="flex flex-col gap-4 py-10">
        {skills.map((skill) => (
          <div key={skill.title} className="space-y-2">
            <h3 className="font-bold tracking-wider">{skill.title}</h3>
            <div className="space-x-2">
              {skill.list.map((item, index) => (
                <Badge
                  key={`${item}-${index}`}
                  className={
                    skill.title === "Frontend"
                      ? "bg-rose-500"
                      : skill.title === "Backend"
                      ? "bg-blue-500"
                      : skill.title === "Databases"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
