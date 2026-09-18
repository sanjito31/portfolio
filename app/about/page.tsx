import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Page from "@/components/BasicPageLayout";
export const metadata: Metadata = { title: "About — Sanjay Kumar", description: "From microbiology and biomedical research to backend engineering and machine learning at Columbia University." };
export default function About() {
  return (<Page pageTitle="A curious approach." eyebrow="02 / Background" intro="From biological systems to software systems.">
    <div className="about-layout">
      <figure className="portrait"><Image src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/svk_headshot.JPG" alt="Sanjay Kumar" width={800} height={900} sizes="(max-width: 700px) 100vw, 40vw" priority /><figcaption className="eyebrow"><span>Sanjay Kumar</span><span>Engineer / Researcher</span></figcaption></figure>
      <div className="about-copy">
        <p className="eyebrow">Research informs the way I build.</p>
        <h2>Complex problems.<br />Practical systems.</h2>
        <p>I’m a master’s student in Computer Science at Columbia University, focused on backend engineering, machine learning, and the systems that bring them together. I enjoy designing software that handles complex data and remains dependable as demands grow.</p>
        <p>My background includes a Microbiology degree from UCLA and biomedical research on Parkinson’s disease and ALS at Cedars-Sinai. Building tools to process microscopy images and analyze research data drew me toward software engineering and ML, and gives me a particular interest in healthcare, health AI, and biotech.</p>
        <p>I’m interested in opportunities across industries where I can build robust backend services, make systems resilient to failure, and solve challenging engineering problems. Whether supporting a healthcare product, an ML application, or another service people rely on, I want to build systems that work reliably in practice.</p>
        <Link href="/experience" className="action-link">Explore my experience <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </div>
    <dl className="spec-strip"><div><dt>Graduate study</dt><dd>Columbia / Computer Science</dd></div><div><dt>Undergraduate study</dt><dd>UCLA / Microbiology</dd></div><div><dt>Research</dt><dd>Cedars-Sinai / Biomedicine</dd></div></dl>
  </Page>);
}
