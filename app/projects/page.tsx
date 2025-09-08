import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
    return (
        <div className="flex flex-col">
            <h1 className="flex items-center justify-center font-mono font-bold text-[4vw] bg-black py-4 text-white">Projects</h1>
            
            <div className="grid grid-cols-2">
                
                <div className="col-start-1 col-span-1 aspect-video">
                    <ProjectCard title="Sanjay&apos;s Pics" href="/projects/sanjays-pics">
                        Photography portfolio with custom Fujifilm EXIF parser extracting 50+ undocumented metadata fields. Features admin dashboard, role-based auth, and cloud-optimized image pipeline.
                    </ProjectCard>
                </div>
                    
                <div className="col-start-2 col-span-1 aspect-video">
                    <ProjectCard title="LED Info Panel" href="/projects/led-info-panel">
                        Full-stack IoT display system using ESP32 microcontroller with 64x32 RGB LED matrix. Dockerized API service aggregates real-time data from weather, transit, music, and sports APIs with modular C++ architecture.
                    </ProjectCard>
                </div>

                <div className="col-start-1 col-span-1 aspect-video">
                    <ProjectCard title="F1 Pit Stop Strategist" href="/projects/f1-pit-stop-ml-tool">
                        Machine learning project that uses historical F1 race data from 2018 to 2024 to determine optimal pit window for maximum strategic benefit during race conditions.
                    </ProjectCard>
                </div>

                <div className="col-start-2 col-span-1 aspect-video">
                    <ProjectCard title="DocRound" href="/projects/docround">
                        Web application built for doctors to keep track, log, and organize patients seen in the hospital for improving the billing workflow for private practioners. Designed as a lightweight accessory for traditional EHRs and powered by AI for chart data input. 
                    </ProjectCard>
                </div>


                <div className="col-start-1 col-span-1 aspect-video">
                    <ProjectCard title="Particle Simulation" href="/projects/particle-simulator">
                        Performant multidimensional particle movement and interaction simulator made to model crowd dispersal and flocking behaviors. Built in C.
                    </ProjectCard>
                </div>

                <div className="col-start-2 col-span-1 aspect-video">
                    <ProjectCard title="Calendar To Do" href="/projects/to-do">
                        Full-stack web application that features a calendar centric to do list. Features user authentication and PostGreSQL for user information storage and retrieval.
                    </ProjectCard>
                </div>

                

            </div>
            
            
        </div>
    )
}