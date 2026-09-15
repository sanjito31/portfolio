import ProjectPage from "@/components/ProjectPage/ProjectPage"
import Highlights from "@/components/ProjectPage/Highlights"

export default function Project() {
    return (
        <ProjectPage
            pageTitle="Watchboxd"
            basicInfoProps={{
                description: "A persistent scrape-and-cache API that transforms Letterboxd profiles, watchlists, viewing histories, ratings, social graphs, and films into structured resources backed by PostgreSQL.",
                contributor: "Sanjay Kumar",
                date: "May 2025 - August 2026",
                dateLabel: "Project dates",
                liveSiteLink: "https://watchboxd.vercel.app",
                repoLink: "https://github.com/sanjito31/watchboxd"
            }}
            techStackProps={{
                nextjs: true,
                postgresql: true,
                prisma: true,
                additionalTechnologies: [
                    "TypeScript",
                    "Vercel Queues",
                    "Supabase",
                    "TMDB"
                ]
            }}
        >
            <Highlights items={[
                {
                    title: "Persistent movie data",
                    description: "Structured resources preserve Letterboxd profiles, watchlists, viewing histories, ratings, social graphs, and films in PostgreSQL for reuse across requests."
                },
                {
                    title: "Durable background jobs",
                    description: "A hierarchical job system combines Vercel Queues and PostgreSQL with database-enforced deduplication, idempotent queue delivery, transactional job claiming, bounded fan-out, retry policies, and atomic snapshot persistence."
                },
                {
                    title: "Stale-while-revalidate caching",
                    description: "Resource-specific cache lifetimes allow stale data to be served immediately while deduplicated background jobs refresh Letterboxd and TMDB data. Valid snapshots are replaced atomically, avoiding partial updates."
                },
                {
                    title: "Rating analysis",
                    description: "An ordinary least squares model characterizes how individual ratings vary relative to global movie ratings, providing a foundation for normalized taste comparisons and personalized recommendation features."
                }
            ]} />
        </ProjectPage>
    )
}
