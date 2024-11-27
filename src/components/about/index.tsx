import { FaLocationDot } from "react-icons/fa6";
import { Button } from "../ui/button";
import React from "react";
import AboutCarousel from "./about-carousel";
import { SocialLinks } from "@/data";
import Link from "next/link";

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
      <div className="flex justify-between items-center tracking-wider font-bold py-10">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="font-extrabold text-3xl">Reynold Sequeira</h1>
            <h2 className="text-muted-foreground">MERN Stack Developer</h2>
            <h3 className="font-bold">Bachelor of commerce (B.com)</h3>
          </div>
          <div>
            <p className="flex items-center gap-2.5">
              <FaLocationDot size={24} />
              <span>Mangalore, India</span>
              <span className="sr-only">location</span>
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <Button>Download CV</Button>
            {SocialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="hover:scale-105"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <AboutCarousel />
      </div>
    </section>
  );
}
