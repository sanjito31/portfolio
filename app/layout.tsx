import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjay Kumar",
  description: "Sanjay Kumar — backend engineering, machine learning, and dependable software systems. Computer Science at Columbia University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function () {
            var theme;
            try { theme = localStorage.getItem('portfolio-theme'); } catch (error) {}
            if (theme !== 'light' && theme !== 'dark') {
              theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            document.documentElement.dataset.theme = theme;
          })();
        ` }} />
      </head>
      <body
        id="top" className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="site-shell">
          <NavBar />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
