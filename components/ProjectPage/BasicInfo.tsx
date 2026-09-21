import { ArrowUpRight } from "lucide-react";
export type BasicInfoProps = {
  description: string;
  contributor: string;
  date?: string;
  liveSiteLink?: string;
  repoLink?: string;
  repoLinks?: { label: string; href: string }[];
  dateLabel?: string;
  className?: string;
};
export default function BasicInfo({ description, contributor, date, liveSiteLink, repoLink, repoLinks, dateLabel = "Date completed", className }: BasicInfoProps) {
  const links = [
    ...(liveSiteLink ? [{ label: "Live site", href: liveSiteLink }] : []),
    ...(repoLink ? [{ label: "GitHub repository", href: repoLink }] : []),
    ...(repoLinks ?? []),
  ];
  return (<section className={className} aria-labelledby="project-overview">
    <h2 id="project-overview" className="eyebrow">01 / Overview</h2><p className="overview-description">{description}</p>
    <dl className="project-facts"><div><dt>Contributors</dt><dd>{contributor}</dd></div>{date && <div><dt>{dateLabel}</dt><dd>{date}</dd></div>}</dl>
    {links.length > 0 && <div className="project-actions">{links.map(({ label, href }) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="action-link">{label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}</div>}
  </section>);
}
