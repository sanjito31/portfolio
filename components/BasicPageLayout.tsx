import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageProps = {
  pageTitle: string;
  eyebrow?: string;
  intro?: string;
  backLink?: boolean;
  children: React.ReactNode;
};
export default function Page({ pageTitle, eyebrow = "Portfolio / Field notes", intro, backLink, children }: PageProps) {
  return (<>
    <header className="page-heading">
      {backLink && <Link href="/projects" className="back-link eyebrow"><ArrowLeft size={15} aria-hidden="true" /> Project index</Link>}
      <p className="eyebrow">{eyebrow}</p>
      <h1>{pageTitle}</h1>
      {intro && <p className="page-intro">{intro}</p>}
    </header>
    {children}
  </>);
}
