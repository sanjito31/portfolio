export type TechStackProps = {
  react?: boolean; nextjs?: boolean; prisma?: boolean; postgresql?: boolean;
  cloudinary?: boolean; betterAuth?: boolean; cPlusPlus?: boolean; cLang?: boolean;
  fastAPI?: boolean; docker?: boolean; additionalTechnologies?: string[];
  children?: React.ReactNode; className?: string;
};
const technologies = [
  ["react", "React frontend"], ["nextjs", "Next.js API routes & server actions"],
  ["prisma", "Prisma ORM"], ["postgresql", "PostgreSQL database"],
  ["cloudinary", "Cloudinary image hosting"], ["betterAuth", "Better Auth"],
  ["cPlusPlus", "C++"], ["cLang", "C"], ["fastAPI", "FastAPI"], ["docker", "Docker"],
] as const;
export default function TechStack(props: TechStackProps) {
  const labels = [...technologies.filter(([key]) => props[key]).map(([, label]) => label), ...(props.additionalTechnologies ?? [])];
  return (<section className={props.className} aria-labelledby="stack-heading"><h2 id="stack-heading" className="eyebrow">02 / Tools & technologies</h2>
    {props.children && <div className="custom-technologies">{props.children}</div>}
    <ul className="technology-list">{labels.map(label => <li key={label}><span aria-hidden="true">+</span>{label}</li>)}</ul>
  </section>);
}
