import ProjectPage from "@/components/ProjectPage/ProjectPage"
import Highlights from "@/components/ProjectPage/Highlights"

export default function Project() {
    return (
        <ProjectPage
            pageTitle="Particle Simulation"
            basicInfoProps={{
                description: "A real-time agent-based crowd simulation in C and SDL2 modeling pedestrian navigation, collision response, obstacle avoidance, congestion, points of interest, and group behavior using force-based vector dynamics.",
                contributor: "Sanjay Kumar, Robert Stott, Beverly Qin",
                date: "April 2025 - May 2025",
                dateLabel: "Project dates"
            }}
            techStackProps={{
                cLang: true,
                additionalTechnologies: [
                    "SDL2",
                    "Agent-Based Modeling",
                    "Statistical Analysis",
                    "R"
                ]
            }}
        >
            <Highlights items={[
                {
                    title: "Crowd dynamics",
                    description: "Coordinated development of a real-time simulation that models pedestrian navigation, collision response, obstacles, congestion, points of interest, and group behavior with force-based vector dynamics."
                },
                {
                    title: "Reproducible agent behavior",
                    description: "Pairwise pedestrian interactions combine Boids separation, alignment, and cohesion with family-group attraction and probabilistic navigation decisions. Seeded randomness makes emergent crowd behavior reproducible."
                },
                {
                    title: "Concurrent experiments",
                    description: "An automated experiment runner executes independent simulation processes concurrently and records 27 agent-level behavioral and physical variables for reproducible parameter studies."
                },
                {
                    title: "Statistical analysis in R",
                    description: "Parameter sweeps, principal component analysis (PCA), outlier filtering, correlation analysis, and trajectory visualization reveal how attraction radii and force constants affect crowd behavior."
                }
            ]} />
        </ProjectPage>
    )
}
