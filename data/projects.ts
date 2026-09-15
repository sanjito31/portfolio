type Project = {
    title: string,
    href: string,
    tags: readonly string[],
    description: string
}

export const projects = {
    "watchboxd": {
        title: "Watchboxd",
        href: "/projects/watchboxd",
        tags: ["Scrape and Persist API", "Vercel Queues", "Rating Analysis"],
        description: "Persistent Letterboxd data API with PostgreSQL caching, durable background jobs, and rating analysis. Turns profiles, watchlists, viewing histories, and films into structured resources."
    },
    "cineclub": {
        title: "Cineclub",
        href: "/projects/cineclub",
        tags: ["Group Movie Selection", "Ranked Voting", "Staged Reveals"],
        description: "Collaborative movie selection with nominations, ranked voting, and staged reveals. A five-phase room lifecycle combines representative finalist selection with TMDB and Letterboxd discovery and ratings."
    },
    "small-businesses-payroll": {
        title: "Small Businesses Payroll",
        href: "/projects/small-businesses-payroll",
        tags: ["Immutable Payrolls", "Multi-Tenant Access", "Docker CI/CD"],
        description: "Full-stack payroll platform with historical employee records, immutable payroll snapshots, and business-scoped access. Independently deployed web and API services with Docker and CI/CD."
    },
    "sanjays-pics": {
        title: "Sanjay's Pics",
        href: "/projects/sanjays-pics",
        tags: ["Fujifilm EXIF Parser", "Image Pipeline", "Photo Management"],
        description: "Photography portfolio with a custom TypeScript EXIF parser mapping 40 proprietary Fujifilm tags. Features authenticated administration, image management, and a Cloudinary/Vercel Blob image pipeline."
    },
    "led-info-panel": {
        title: "Minitron",
        href: "/projects/led-info-panel",
        tags: ["ESP32 LED Display", "FreeRTOS", "Live Data API"],
        description: "An ESP32-powered 64x32 HUB75 LED display with FreeRTOS animation rendering, I2S DMA refresh, and a Dockerized FastAPI service for live weather, transit, music, and Formula 1 data."
    },
    "particle-simulator": {
        title: "Particle Simulation",
        href: "/projects/particle-simulator",
        tags: ["Crowd Dynamics", "Boids Simulation", "R Analysis"],
        description: "Real-time crowd simulation in C and SDL2 modeling pedestrian interactions, obstacle avoidance, and group behavior. Concurrent experiments record 27 agent-level variables for reproducible analysis in R."
    },
    "unified-ai-inbox": {
        title: "Unified AI Inbox",
        href: "/projects/unified-ai-inbox",
        tags: ["Message Aggregation", "FastAPI Microservices", "Google Cloud"],
        description: "Distributed inbox unifying Gmail, Slack, Outlook, and other providers for centralized processing and classification. FastAPI microservices connected through Nginx across Google Cloud infrastructure."
    }
} as const satisfies Record<string, Project>

export type ProjectId = keyof typeof projects
