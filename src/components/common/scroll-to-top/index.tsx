"use client";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="absolute -bottom-2 right-20">
      <Button onClick={handleClick} className="bg-inherit hover:bg-inherit">
        <span className="text-muted-foreground tracking-wider font-bold text-lg no-underline">
          &#60;Scroll to top/&#62;
        </span>
        <span className="sr-only">Scroll to top</span>
      </Button>
    </section>
  );
}
