import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reynold Sequeria",
  description: "MERN Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="max-w-2xl mx-auto py-10 min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
