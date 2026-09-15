import ProjectCard from "@/components/ProjectCard"
import Page from "@/components/BasicPageLayout"

export default function Projects() {
    return (

        <Page pageTitle="Projects">

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="md:col-start-1 md:col-span-1 aspect-video">
                    <ProjectCard projectId="watchboxd" />
                </div>

                <div className="md:col-start-2 md:col-span-1 aspect-video">
                    <ProjectCard projectId="cineclub" />
                </div>

                <div className="md:col-start-1 md:col-span-1 aspect-video">
                    <ProjectCard projectId="small-businesses-payroll" />
                </div>

                <div className="md:col-start-2 md:col-span-1 aspect-video">
                    <ProjectCard projectId="sanjays-pics" />
                </div>

                <div className="md:col-start-1 md:col-span-1 aspect-video">
                    <ProjectCard projectId="led-info-panel" />
                </div>

                <div className="md:col-start-2 md:col-span-1 aspect-video">
                    <ProjectCard projectId="particle-simulator" />
                </div>

                <div className="md:col-start-1 md:col-span-1 aspect-video">
                    <ProjectCard projectId="unified-ai-inbox" />
                </div>
            </div>
        </Page>
    )
}
