type HighlightsProps = { items: { title: string; description: string }[] };
export default function Highlights({ items }: HighlightsProps) {
  return (<section className="highlights" aria-labelledby="highlights-heading">
    <div className="technical-heading"><h2 id="highlights-heading" className="eyebrow">03 / Technical highlights</h2><span className="micro-label">Design / Implementation</span></div>
    <div className="highlights-list">{items.map(({ title, description }, index) => <article key={title}><span className="micro-label highlight-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
  </section>);
}
