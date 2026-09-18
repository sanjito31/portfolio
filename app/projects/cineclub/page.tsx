import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { NextJS, React } from "@/components/Icons"
import ProjectPage from "@/components/ProjectPage/ProjectPage"
import Highlights from "@/components/ProjectPage/Highlights"

export const metadata: Metadata = {
    title: `${projects["cineclub"].title} — Sanjay Kumar`,
    description: projects["cineclub"].description,
};

export default function Cineclub() {
    return (
        <ProjectPage
            pageTitle="Cineclub"
            basicInfoProps={{
                description: "A collaborative movie selection platform that coordinates movie nominations, ranked voting, and staged reveals through a five-phase room lifecycle.",
                contributor: "Sanjay Kumar",
                liveSiteLink: "https://cineclub-ruddy.vercel.app"
            }}
            techStackProps={{
                postgresql: true,
                prisma: true,
                additionalTechnologies: ["TypeScript", "Supabase Auth", "Tailwind CSS"],
                children: (
                    <>
                        <div className="flex m-2 items-center">
                            <NextJS width={24} height={24} className="mx-2" />
                            <div>Next.js 16</div>
                        </div>
                        <div className="flex m-2 items-center">
                            <React width={24} height={24} className="mx-2" />
                            <div>React 19</div>
                        </div>
                    </>
                )
            }}
        >
            <Highlights items={[
                {
                    title: "Collaborative movie selection",
                    description: "A five-phase room lifecycle guides participants through movie nominations, ranked voting, and staged reveals in a full-stack platform."
                },
                {
                    title: "Consistent concurrent workflows",
                    description: "Serializable database transactions, conflict retries, and idempotent finalization maintain consistent room state across simultaneous submissions."
                },
                {
                    title: "Representative ranked voting",
                    description: "A Borda-count voting engine uses rating-based tiebreakers and selects finalists while preserving every participant's representation, including when participants share nominations."
                },
                {
                    title: "Movie discovery and ratings",
                    description: "TMDB and a custom Letterboxd API supply movie discovery and ratings. Asynchronous jobs use bounded polling, cancellation, timeouts, and response validation."
                },
                {
                    title: "Room access and staged reveals",
                    description: "Server-side membership checks and composite database constraints enforce room-level authorization and relational integrity. Unrevealed movie details are withheld from client responses."
                },
                {
                    title: "Tested domain workflows",
                    description: "Automated tests cover voting edge cases, concurrent operations, authorization failures, and the complete nomination-to-reveal domain workflow."
                }
            ]} />
        </ProjectPage>
    )
}
