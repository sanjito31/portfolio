import ProjectCard from "@/components/ProjectCard"
import Page from "@/components/BasicPageLayout"

export default function Projects() {
    return (

        <Page pageTitle="Projects">

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="md:col-start-1 md:col-span-1 aspect-video">
                    <ProjectCard title="Watchboxd" href="/projects/watchboxd">
                        Persistent Letterboxd data API with PostgreSQL caching, durable background jobs, and rating analysis. Turns profiles, watchlists, viewing histories, and films into structured resources.
                    </ProjectCard>
                </div>

                <div className="md:col-start-2 md:col-span-1 aspect-video">
                    <ProjectCard title="Cineclub" href="/projects/cineclub">
                        Collaborative movie selection with nominations, ranked voting, and staged reveals. A five-phase room lifecycle combines representative finalist selection with TMDB and Letterboxd discovery and ratings.
                    </ProjectCard>
                </div>

                <div className="md:col-start-1 md:col-span-1 aspect-video">
                    <ProjectCard title="Small Businesses Payroll" href="/projects/small-businesses-payroll">
                        Full-stack payroll platform with historical employee records, immutable payroll snapshots, and business-scoped access. Independently deployed web and API services with Docker and CI/CD.
                    </ProjectCard>
                </div>

                <div className="md:col-start-2 md:col-span-1 aspect-video">
                    <ProjectCard title="Sanjay&apos;s Pics" href="/projects/sanjays-pics" tags={["Next.js", "TypeScript", "Cloudinary", "EXIF Tags", "PostgreSQL", "Prisma"]}>
                        Photography portfolio with a custom TypeScript EXIF parser mapping 40 proprietary Fujifilm tags. Features authenticated administration, image management, and a Cloudinary/Vercel Blob image pipeline.
                    </ProjectCard>
                </div>

                <div className="md:col-start-1 md:col-span-1 aspect-video">
                    <ProjectCard title="Minitron" href="/projects/led-info-panel">
                        An ESP32-powered 64x32 HUB75 LED display with FreeRTOS animation rendering, I2S DMA refresh, and a Dockerized FastAPI service for live weather, transit, music, and Formula 1 data.
                    </ProjectCard>
                </div>

                <div className="md:col-start-2 md:col-span-1 aspect-video">
                    <ProjectCard title="Particle Simulation" href="/projects/particle-simulator">
                        Real-time crowd simulation in C and SDL2 modeling pedestrian interactions, obstacle avoidance, and group behavior. Concurrent experiments record 27 agent-level variables for reproducible analysis in R.
                    </ProjectCard>
                </div>

                <div className="md:col-start-1 md:col-span-1 aspect-video">
                    <ProjectCard title="Unified AI Inbox" href="/projects/unified-ai-inbox">
                        Distributed inbox unifying Gmail, Slack, Outlook, and other providers for centralized processing and classification. FastAPI microservices connected through Nginx across Google Cloud infrastructure.
                    </ProjectCard>
                </div>
            </div>
        </Page>
    )
}
