import Link from "next/link";

function Globe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="100" cy="100" rx="55" ry="88" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="100" cy="100" rx="20" ry="88" stroke="currentColor" strokeWidth="0.75" />
      <line x1="12" y1="100" x2="188" y2="100" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="100" cy="55" rx="82" ry="18" stroke="currentColor" strokeWidth="0.75" />
      <ellipse cx="100" cy="145" rx="82" ry="18" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-intro">
        <div className="hero-register micro-label"><span>SN: SKV-2026-001</span><span>REV: B</span></div>
        <h1 id="hero-title">SANJAY<br />KUMAR</h1>
        <p className="hero-bio">CS Master&apos;s student at Columbia building backend systems &amp; ML applications for healthcare and biotech.</p>
        <div className="hero-spec micro-label"><Link href="#selected-work" className="portfolio-jump">Portfolio</Link><span>Continuous · 2024–2026</span></div>
        <div className="hero-social eyebrow">
          <a href="mailto:svk2121@columbia.edu">Email ↗</a>
          <a href="https://www.linkedin.com/in/sanjayvkumar31/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/sanjito31/" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://sanjayspics.com/" target="_blank" rel="noopener noreferrer">Photography ↗</a>
        </div>
      </div>
      <div className="hero-credentials">
        <span className="hero-location micro-label">40.80°N, 73.96°W</span>
        <Globe className="hero-globe" />
        <div className="hero-education">
          <strong>Columbia Univ.</strong>
          <details className="coursework-details">
            <summary>M.S. Comp. Sci.<span className="coursework-hint" aria-hidden="true"> +</span></summary>
            <div className="coursework-panel">
              <span className="micro-label">Relevant coursework</span>
              <ul>
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Linear Algebra</li>
                <li>Operating Systems</li>
                <li>Cloud Computing</li>
                <li>Databases</li>
                <li>Analysis of Algorithms</li>
              </ul>
            </div>
          </details>
          <span className="credential-focus">Machine learning</span>
          <span className="hero-city micro-label">NYC</span>
        </div>
      </div>
      <Link href="#selected-work" className="hero-work-link micro-label"><span>Explore the work</span><span aria-hidden="true">↓</span></Link>
    </section>
  );
}
