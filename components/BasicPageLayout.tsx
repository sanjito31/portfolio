import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageProps = {
  pageTitle: string;
  eyebrow?: string;
  intro?: string;
  backLink?: boolean;
  serial?: string;
  count?: number;
  position?: number;
  children: React.ReactNode;
};
export default function Page({ pageTitle, eyebrow = "Portfolio / Field notes", intro, backLink, serial, count, position, children }: PageProps) {
  return (<>
    <header className={`page-heading${backLink ? " project-page-heading" : ""}`}>
      <div className="page-register">
        {backLink ? <Link href="/projects" className="back-link eyebrow"><ArrowLeft size={15} aria-hidden="true" /> Project index</Link> : <span className="micro-label">Portfolio / 2026</span>}
        <div className="page-register-meta micro-label">
          {serial && <span>SN: {serial}</span>}
          {count !== undefined && <span className="folio-count" aria-label={position !== undefined ? `Project ${position} of ${count}` : `${count} projects`}>{position !== undefined && <>{String(position).padStart(2, "0")} <span className="muted">/</span> </>}<span className="count-badge">{String(count).padStart(2, "0")}</span></span>}
          <span>REV: B</span>
        </div>
      </div>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{pageTitle}</h1>
      {intro && <p className="page-intro">{intro}</p>}
    </header>
    {children}
  </>);
}
