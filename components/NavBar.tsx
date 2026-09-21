"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
const links = [
  { href: "/projects", label: "Work", number: "01" },
  { href: "/about", label: "About", number: "02" },
  { href: "/experience", label: "Experience", number: "03" },
  { href: "/contact", label: "Contact ↗", number: "04" },
];
export default function NavBar() {
  const pathname = usePathname();
  return (<header>
    <div className="top-bar eyebrow"><span>Independent work / Sanjay Kumar</span><div className="top-bar-actions"><span className="portfolio-edition">Portfolio index — 2026</span><ThemeToggle /></div></div>
    <nav className="site-nav" aria-label="Main navigation">
      <Link className="site-mark" href="/" aria-label="Sanjay Kumar home"><span className="mark-grid" aria-hidden="true"><i /><i /><i /><i>+</i></span>SK</Link>
      <div className="nav-links eyebrow">{links.map(({ href, label, number }) => <Link key={href} href={href} aria-current={pathname === href || pathname.startsWith(href + "/") ? "page" : undefined}><span className="nav-number">{number} / </span>{label}</Link>)}</div>
    </nav>
  </header>);
}
