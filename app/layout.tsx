import type { Metadata } from "next";
import { Geist, Geist_Mono, Cactus_Classical_Serif } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
        className={`${geistSans.variable} ${geistMono.variable} ${serifFont.variable} antialiased mx-2 sm:mx-4 md:mx-8 border-black border-l-1 border-r-1`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}