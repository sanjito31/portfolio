import type { Metadata } from "next";
import Page from "@/components/BasicPageLayout";
import { ArrowUpRight } from "lucide-react";
export const metadata: Metadata = { title: "Experience — Sanjay Kumar", description: "Research and clinical experience connecting biomedical science, image analysis, and software automation." };

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
            "Automated image analysis (10k+ imgs) with Python, CellProfiler, ilastik machine learning models.",
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

export default function Experience() {
  return (<Page pageTitle="Work in practice." eyebrow="03 / Experience" intro="Research, analysis, and automation. A background grounded in real-world problems.">
    <div className="experience-toolbar"><p className="eyebrow">Professional experience / 02 entries</p><a className="action-link" href="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/Sanjay_Kumar.pdf" target="_blank" rel="noopener noreferrer">View résumé <ArrowUpRight size={17} aria-hidden="true" /></a></div>
    {EXPERIENCES.map((experience, index) => <article className="experience-row" key={experience.company}>
      <div className="experience-dates"><span className="eyebrow">E—00{index + 1}</span><p>{experience.dates}</p><span className="eyebrow">{experience.location}</span></div>
      <div className="experience-copy"><p className="eyebrow">{experience.role}</p><h2>{experience.company}</h2><p>{experience.summary}</p><ul className="experience-highlights">{experience.highlights.map(item => <li key={item}>{item}</li>)}</ul><ul className="tag-list" aria-label="Skills">{experience.tags?.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
    </article>)}
  </Page>);
}
