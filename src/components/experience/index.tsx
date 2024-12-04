import { experiences } from "@/data";

export default function Experience() {
  return (
    <section
      id="experience"
      style={
        {
          "--content-before": '"<Experience>"',
          "--content-after": '"</Experience>"',
        } as React.CSSProperties
      }
    >
      {experiences.map((experience, index) => (
        <div
          key={`${experience}-${index}`}
          className="py-12 flex flex-col mx-4 justify-between md:flex-row md:items-center"
        >
          <div className="space-y-1">
            <h3 className="font-bold text-xl">{experience.company}</h3>
            <p className="text-muted-foreground font-bold tracking-wider">
              {experience.title}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground font-extrabold">
              {experience.date}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
