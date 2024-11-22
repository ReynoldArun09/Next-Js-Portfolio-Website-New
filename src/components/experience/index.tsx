import { experiences } from "@/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative my-16 py-3 before:content-['<Experience>'] before:opacity-30 after:opacity-30 before:absolute before:-left-14 before:-top-3 
  before:font-extrabold before:text-muted-foreground before:text-xl after:content-['</Experience>'] after:absolute after:right-0 after:-bottom-10 after:text-muted-foreground after:text-xl after:font-extrabold"
    >
      {experiences.map((experience, index) => (
        <div
          key={`${experience}-${index}`}
          className="py-6 flex items-center justify-between"
        >
          <div className="space-y-3">
            <h3 className="font-bold text-2xl">{experience.company}</h3>
            <p className="text-muted-foreground">{experience.title}</p>
          </div>
          <div>
            <p className="text-muted-foreground">{experience.date}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
