import Page from "@/components/BasicPageLayout";
import BasicInfo, { BasicInfoProps } from "@/components/ProjectPage/BasicInfo";
import TechStack, { TechStackProps } from "@/components/ProjectPage/TechStack";
import ProjectVisual, { projectLabels } from "@/components/ProjectVisual";
import { projects, type ProjectId } from "@/data/projects";

export type ProjectPageProps = {
  pageTitle: string;
  basicInfoProps: BasicInfoProps;
  techStackProps: TechStackProps;
  children?: React.ReactNode;
};
export default function ProjectPage({ pageTitle, basicInfoProps, techStackProps, children }: ProjectPageProps) {
  const projectId = (Object.keys(projects) as ProjectId[]).find(id => projects[id].title === pageTitle);
  const label = projectId ? projectLabels[projectId] : undefined;
  return (<Page pageTitle={pageTitle} eyebrow={label ? `${label.reference} / ${label.category}` : "01 / Project study"} backLink>
    <div className="project-specification">
      <BasicInfo {...basicInfoProps} className="basic-info" />
      <aside className="project-sidebar">{projectId && <ProjectVisual projectId={projectId} />}<TechStack {...techStackProps} className="tech-stack" /></aside>
    </div>
    {children && <div className="project-content">{children}</div>}
  </Page>);
}
