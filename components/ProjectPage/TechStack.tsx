export type TechStackProps = {
  react?: boolean; nextjs?: boolean; prisma?: boolean; postgresql?: boolean;
  cloudinary?: boolean; betterAuth?: boolean; cPlusPlus?: boolean; cLang?: boolean;
  fastAPI?: boolean; docker?: boolean; additionalTechnologies?: string[];
  className?: string;
};
const technologies = [
  ["react", "React"], ["nextjs", "Next.js"], ["prisma", "Prisma"],
  ["postgresql", "PostgreSQL"], ["cloudinary", "Cloudinary"], ["betterAuth", "Better Auth"],
  ["cPlusPlus", "C++"], ["cLang", "C"], ["fastAPI", "FastAPI"], ["docker", "Docker"],
] as const;
export default function TechStack(props: TechStackProps) {
  const labels = [...new Set([...technologies.filter(([key]) => props[key]).map(([, label]) => label), ...(props.additionalTechnologies ?? [])])];
  return (<section className={props.className} aria-labelledby="stack-heading">
    <div className="technical-heading"><h2 id="stack-heading" className="eyebrow">02 / Tools &amp; technologies</h2><span className="micro-label">{String(labels.length).padStart(2, "0")} tools</span></div>
    <ul className="technology-list">{labels.map(label => <li key={label}><span aria-hidden="true">+</span>{label}</li>)}</ul>
  </section>);
}
