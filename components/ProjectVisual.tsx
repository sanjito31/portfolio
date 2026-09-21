import ProjectDiagram from "@/components/ProjectDiagram";
import { Camera, Database, Film, Inbox, Network, ArrowRight, Users, Workflow, type LucideIcon } from "lucide-react";
import type { ProjectId } from "@/data/projects";
export const projectLabels: Record<ProjectId, { reference: string; category: string }> = {
  "small-businesses-payroll": { reference: "P—001", category: "Full-stack platform" },
  "led-info-panel": { reference: "P—002", category: "Connected hardware" },
  watchboxd: { reference: "P—003", category: "Data infrastructure" },
  cineclub: { reference: "P—004", category: "Collaborative software" },
  "sanjays-pics": { reference: "P—005", category: "Photography platform" },
  "particle-simulator": { reference: "P—006", category: "Simulation + analysis" },
  "unified-ai-inbox": { reference: "P—007", category: "Distributed systems" },
};
const glyphs: Partial<Record<ProjectId, [LucideIcon, LucideIcon]>> = {
  watchboxd: [Film, Database], cineclub: [Users, Film], "sanjays-pics": [Camera, Database],
  "particle-simulator": [Users, Network], "unified-ai-inbox": [Inbox, Workflow],
};
export default function ProjectVisual({ projectId }: { projectId: ProjectId }) {
  const diagram = projectId === "small-businesses-payroll" ? "payroll" : projectId === "led-info-panel" ? "minitron" : null;
  const [Input, Output] = glyphs[projectId] ?? [Network, Database];
  return (<div className="project-visual" aria-hidden="true">
    <span className="visual-label eyebrow">{projectLabels[projectId].reference} / System study</span>
    {diagram ? <ProjectDiagram kind={diagram} /> : <div className="vector-flow"><span><Input strokeWidth={1} /></span><ArrowRight strokeWidth={1} className="flow-arrow" /><span><Output strokeWidth={1} /></span></div>}
    <span className="visual-cross">+</span>
  </div>);
}
