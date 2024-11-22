import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { Button } from "../ui/button";

export default function About() {
  return (
    <section
      id="about"
      className="relative my-16 py-3 before:content-['<About>'] before:opacity-30 after:opacity-30 before:absolute before:-left-14 before:-top-3 
before:font-extrabold before:text-muted-foreground before:text-xl after:content-['</About>'] after:absolute after:right-0 after:-bottom-10 after:text-muted-foreground after:text-xl after:font-extrabold"
    >
      <div className="space-y-1 py-6">
        <h1 className="text-2xl font-bold">Reynold Sequeria</h1>
        <h2>Mern Stack Developer</h2>
        <h3 className="flex items-center gap-2">
          <FaLocationDot /> <span>Mangalore, India</span>
        </h3>
      </div>
      <div className="flex items-center gap-3">
        <Button>Download CV</Button>
        <div className="flex items-center gap-3">
          <FaGithub size={24} />
          <FaXTwitter size={24} />
          <FaLinkedin size={24} />
        </div>
      </div>
    </section>
  );
}
