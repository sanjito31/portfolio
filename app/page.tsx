import { projects } from "@/data/projects";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (<>
    <Hero />
    <section id="selected-work" aria-labelledby="work-heading">
      <div className="section-heading"><div><p className="eyebrow">01 / Project index</p><h2 id="work-heading">Selected work</h2></div><Link href="/projects" className="index-counter micro-label"><span>Full index</span><span className="count-badge">{String(Object.keys(projects).length).padStart(2, "0")}</span></Link></div>
      <div className="project-grid"><ProjectCard projectId="small-businesses-payroll" /><ProjectCard projectId="led-info-panel" /></div>
      <Link href="/projects" className="index-link eyebrow">Explore all seven projects <ArrowRight size={18} aria-hidden="true" /></Link>
    </section>
    <section className="profile-strip" aria-labelledby="background-heading">
      <div><p className="eyebrow">02 / Background</p><h2 id="background-heading">From biological systems<br />to software systems.</h2></div>
      <div><p>My path into engineering started with microbiology at UCLA and biomedical research at Cedars-Sinai. Building tools for microscopy and research data led me toward software and machine learning.</p><p>Now studying computer science at Columbia, I’m interested in systems that stay useful and dependable in practice.</p><Link href="/about" className="text-link eyebrow">More about me <ArrowRight size={16} aria-hidden="true" /></Link></div>
    </section>
  </>);
}
