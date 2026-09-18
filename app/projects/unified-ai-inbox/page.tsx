import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectPage from "@/components/ProjectPage/ProjectPage"
import Highlights from "@/components/ProjectPage/Highlights"

export const metadata: Metadata = {
    title: `${projects["unified-ai-inbox"].title} — Sanjay Kumar`,
    description: projects["unified-ai-inbox"].description,
};

export default function Project() {
    return (
        <ProjectPage
            pageTitle="Unified AI Inbox"
            basicInfoProps={{
                description: "A collaborative distributed inbox platform that normalizes messages from Gmail, Slack, Outlook, and other providers into a common model for centralized processing and classification.",
                contributor: "Sanjay Kumar (team project)",
                date: "August 2025 - December 2025",
                dateLabel: "Project dates"
            }}
            techStackProps={{
                fastAPI: true,
                docker: true,
                additionalTechnologies: [
                    "Python",
                    "Google Cloud Run",
                    "Compute Engine",
                    "Cloud SQL",
                    "Nginx",
                    "JWT"
                ]
            }}
        >
            <Highlights items={[
                {
                    title: "Unified message model",
                    description: "Messages from Gmail, Slack, Outlook, and other providers are normalized into a shared representation for centralized processing and classification."
                },
                {
                    title: "Distributed service integration",
                    description: "Independently deployed FastAPI microservices communicate through HTTP APIs and a custom containerized Nginx reverse proxy across multiple Google Cloud projects."
                },
                {
                    title: "Authenticated message ingestion",
                    description: "JWT-based authentication and asynchronous message-ingestion endpoints support communication between independently deployed application services."
                },
                {
                    title: "Heterogeneous cloud deployment",
                    description: "Containerized services span Cloud Run, Compute Engine, and separately hosted database services, integrating managed compute, virtual machines, self-hosted databases, and managed database services."
                }
            ]} />
        </ProjectPage>
    )
}
