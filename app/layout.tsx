import type { Metadata } from "next";
import { Geist, Geist_Mono, Cactus_Classical_Serif } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serifFont = Cactus_Classical_Serif({
  variable: "--font-custom-serif",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Sanjay Kumar",
  description: "Personal portfolio for Sanjay Kumar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${serifFont.variable} antialiased mx-8 border-black border-l-1 border-r-1`}
      >
        <NavBar />
        {children}
             <footer className="pt-20 pb-5 border-1 flex">
          <div className="flex flex-col mx-auto font-mono font-bold text-[1vw] items-center">
            <p className="text-[1.5vw]">Thanks for checking out my page!</p>
            <p className="p-4" />
            <p>Sanjay Kumar, 2025</p>
            <p>Created using Next.js. Hosted on Vercel.</p>
            <p>Design inspired by<Link href="https://ujjo.studiofreight.com/" target="_blank" rel="noopener noreferrer"> Ujjo</Link></p>
          </div>
        </footer>
      </body>
    </html>
  );
}