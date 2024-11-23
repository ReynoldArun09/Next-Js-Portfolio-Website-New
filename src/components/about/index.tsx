import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Carouselskills } from "@/data";

export default function About() {
  return (
    <section
      id="about"
      style={
        {
          "--content-before": '"<About>"',
          "--content-after": '"</About>"',
        } as React.CSSProperties
      }
    >
      <div className="flex justify-between items-center py-12">
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl tracking-wider">
              Reynold Sequeria
            </h1>
            <h2 className="font-bold text-md text-gray-400 tracking-wider">
              MERN Stack Developer
            </h2>
            <p className="flex gap-3 items-center font-medium">
              <FaLocationDot /> Mangalore, India
              <span className="sr-only">location</span>
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <Button>Download CV</Button>
            <FaGithub size={24} />
            <FaXTwitter size={24} />
            <FaLinkedin size={24} />
          </div>
        </div>
        <div>
          <Carousel
            className="w-[200px]"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {Carouselskills.map((skill) => (
                <CarouselItem key={skill.title}>
                  <div className="flex flex-col items-center gap-4">
                    {skill.icon}
                    {skill.title}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
