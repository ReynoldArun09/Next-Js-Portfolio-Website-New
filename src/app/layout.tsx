import ScrollToTop from "@/components/common/scroll-to-top";
import ThemeButton from "@/components/theme-button";
import ThemeProvider from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reynold Sequeira",
  description: "MERN Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="max-w-2xl mx-auto py-10 min-h-screen relative">
            {children}
            <ThemeButton />
          </main>
        </ThemeProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
