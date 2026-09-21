import Page from "@/components/BasicPageLayout";
import BasicInfo, { BasicInfoProps } from "@/components/ProjectPage/BasicInfo";
import TechStack, { TechStackProps } from "@/components/ProjectPage/TechStack";
import { projectLabels } from "@/components/ProjectVisual";
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
  return (<Page pageTitle={pageTitle} eyebrow={label ? `${label.reference} / ${label.category}` : "01 / Project study"} backLink serial={projectId ? projects[projectId].serial : undefined} count={Object.keys(projects).length} position={label ? Number(label.reference.slice(2)) : undefined}>
    <BasicInfo {...basicInfoProps} className="basic-info" />
    <TechStack {...techStackProps} className="tech-stack" />
    {children && <div className="project-content">{children}</div>}
  </Page>);
}
