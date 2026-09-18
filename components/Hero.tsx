import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (<>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-intro">
        <div><p className="eyebrow">Software engineering / Machine learning</p>
          <h1 id="hero-title">SANJAY<br />KUMAR<span className="accent">.</span></h1>
          <p className="hero-lead">Useful software.<br />Dependable systems.</p>
          <p className="hero-bio">I build backend systems and ML applications, with a particular interest in healthcare and biotech.</p>
        </div>
        <Link href="#selected-work" className="action-link">Explore selected work <ArrowDown size={19} aria-hidden="true" /></Link>
      </div>
      <figure className="system-figure">
        <div className="figure-heading eyebrow"><span>System architecture</span><span>Fig. 001</span></div>
        <Image src="/diagrams/system.svg" alt="Exploded technical drawing of three connected computing layers" width={320} height={350} priority />
        <figcaption><p className="eyebrow">Data → models → applications<br />Built from the ground up.</p><ArrowUpRight size={40} aria-hidden="true" /></figcaption>
      </figure>
    </section>
    <dl className="spec-strip">
      <div><dt>Current study</dt><dd>Columbia / MS CS</dd></div>
      <div><dt>Focus area</dt><dd>Backend + ML</dd></div>
      <div><dt>Background</dt><dd>UCLA / Microbiology</dd></div>
    </dl>
  </>);
}
