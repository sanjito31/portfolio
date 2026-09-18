type HighlightsProps = { items: { title: string; description: string }[] };
export default function Highlights({ items }: HighlightsProps) {
  return (<section className="highlights" aria-labelledby="highlights-heading">
    <div className="section-heading"><div><p className="eyebrow">03 / Engineering notes</p><h2 id="highlights-heading">Technical highlights</h2></div><span className="eyebrow">Design / Implementation</span></div>
    <div className="highlights-grid">{items.map(({ title, description }, index) => <article key={title}><span className="eyebrow highlight-number">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
  </section>);
}
