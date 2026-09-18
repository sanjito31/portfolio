import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects, type ProjectId } from "@/data/projects";
import ProjectVisual, { projectLabels } from "@/components/ProjectVisual";
export default function ProjectCard({ projectId }: { projectId: ProjectId }) {
  const { title, href, description, tags } = projects[projectId];
  const { reference, category } = projectLabels[projectId];
  return (<article className="project-card">
    <ProjectVisual projectId={projectId} />
    <div className="project-copy">
      <p className="eyebrow">{reference} / {category}</p>
      <h3><Link href={href}>{title}</Link></h3>
      <p className="project-description">{description}</p>
      <ul className="tag-list" aria-label="Project features">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      <Link href={href} className="project-link eyebrow">Inspect project <ArrowUpRight size={19} aria-hidden="true" /><span className="sr-only">: {title}</span></Link>
    </div>
  </article>);
}
