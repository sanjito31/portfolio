import Page from "@/components/BasicPageLayout"
import Link from "next/link"

type ExperienceItem = {
    company: string
    role: string
    location: string
    dates: string
    summary: string
    highlights: string[]
    tags?: string[]
}

const EXPERIENCES: ExperienceItem[] = [
    {
        company: "Cedars-Sinai Medical Center",
        role: "Research Associate II",
        location: "Los Angeles, CA",
        dates: "Feb 2022 – May 2024",
        summary:
            "Biomedical research studying Parkinson's and ALS using computational techniques for image analysis and stem cell culture.",
        highlights: [
            "Automated image analysis (10k+ imgs) with Python, CellProfiler, ilastik mache learning models.",
            "Analyzed 50+ experiments with ANOVA and statistics",
            "Evaluated ASO therapeutics in lung and mouse models",
        ],
        tags: ["Python", "CellProfiler", "ilastik", "Machine Learning", "High Throughput Imaging", "R", "ANOVA", "Stem Cell Culture"],
    },
    {
        company: "Arthritis & Pain Relief Medical Center",
        role: "Medical Scribe",
        location: "Los Angeles, CA",
        dates: "Sep 2020 – Jan 2024",
        summary:
            "Supported a busy clinic with efficient documentation, EHR upkeep, and workflow automations.",
        highlights: [
            "Built charting automations; throughput 15 → 25/day",
            "Maintained EHR for 200+ patients",
            "Patient communication in English and Spanish",
        ],
        tags: ["Automation", "EHR", "Clinical Ops", "Bilingual"],
    },
]

function ExperienceCard({
    company,
    role,
    location,
    dates,
    summary,
    highlights,
    tags = [],
}: ExperienceItem) {
    return (
        <article className="border-1 border-black p-8 transition-transform duration-300 hover:scale-[1.02] hover:bg-white hover:border-2 hover:border-black">
            <header className="mb-2">
                <h3 className="font-mono font-bold text-xl md:text-[2vw]">
                    {company}
                </h3>
                <h4 className="font-mono font-bold text-lg md:text-[1.75vw]">
                    {role}
                </h4>
                <p className="font-mono text-md md:text-[1vw]">
                    {location} <span className="mx-1">•</span> {dates}
                </p>
            </header>
            <p className="font-mono mb-3 text-md md:text-[1.5vw] ">{summary}</p>
            <ul className="mb-4 list-disc space-y-1 pl-5 font-mono text-sm md:text-[1.5vw]">
                {highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                ))}
            </ul>
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <span
                            key={t}
                            className="border-1 border-black px-2 py-1 font-mono text-md md:text-[1.25vw]"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            )}
        </article>
    )
}

export default function Experience() {
    return (
        <Page pageTitle="Experience">
            <div className="w-full flex justify-center md:justify-end border-1 border-black p-4">
                <Link
                    href="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/Sanjay_Kumar.pdf"
                    className="border-1 border-black px-4 py-2 font-mono font-semibold transition-colors hover:bg-black hover:text-white"
                >
                    Download Resume
                </Link>
            </div>
            <div className="flex flex-col border-t-1 border-b-1">

                {EXPERIENCES.map((e, i) => (
                    <div key={i} className="md:grid md:grid-cols-6">
                        <div className="hidden md:col-start-1 md:col-span-1 md:flex md:border-l-1">
                            <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" 
                                    className="my-auto ml-auto mr-4">
                                <circle r="12" cx="12" cy="12" fill="black"/>
                            </svg>
                        </div>
                        <div className="md:col-start-2 md:col-span-5 flex md:border-r-1 md:p-8">
                            <ExperienceCard {...e}>
                            </ExperienceCard>
                        </div>
                    </div>
                ))}
                

            </div>
        </Page>
    )
}
        
