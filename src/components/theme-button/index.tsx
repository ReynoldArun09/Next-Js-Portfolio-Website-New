"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from "../ui/button";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <section className="absolute top-0 -right-10">
      {theme === "dark" ? (
        <Button
          variant="link"
          onClick={() => setTheme("light")}
          className="flex gap-2 items-center hover:animate-spin"
        >
          <FaSun />
          <span className="sr-only">theme button</span>
        </Button>
      ) : (
        <Button
          variant="link"
          onClick={() => setTheme("dark")}
          className="flex gap-2 items-center hover:animate-spin"
        >
          <FaMoon />
          <span className="sr-only">theme button</span>
        </Button>
      )}
    </section>
  );
}
