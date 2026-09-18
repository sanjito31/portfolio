import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Page from "@/components/BasicPageLayout";
import type { ProjectId } from "@/data/projects";
export const metadata: Metadata = { title: "Work — Sanjay Kumar", description: "Selected work in backend engineering, machine learning, embedded systems, and connected software." };
const order: ProjectId[] = ["small-businesses-payroll", "led-info-panel", "watchboxd", "cineclub", "sanjays-pics", "particle-simulator", "unified-ai-inbox"];
export default function Projects() {
  return (<Page pageTitle="Selected work." eyebrow="01 / Project index — 07 entries" intro="From data infrastructure to connected hardware. A collection of systems designed, built, and put to work.">
    <div className="project-grid">{order.map(projectId => <ProjectCard key={projectId} projectId={projectId} />)}</div>
  </Page>);
}
