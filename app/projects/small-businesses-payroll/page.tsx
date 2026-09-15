import ProjectPage from "@/components/ProjectPage/ProjectPage"
import Highlights from "@/components/ProjectPage/Highlights"

export default function Project() {
    return (
        <ProjectPage
            pageTitle="Small Businesses Payroll"
            basicInfoProps={{
                description: "A full-stack payroll system with independently deployed web and API services, historical employee configuration, immutable finalized payrolls, and business-scoped access for owners, accountants, and employees.",
                contributor: "Sanjay Kumar",
                date: "June 2026 - August 2026",
                dateLabel: "Project dates"
            }}
            techStackProps={{
                react: true,
                postgresql: true,
                docker: true,
                additionalTechnologies: [
                    "TypeScript",
                    "Hono",
                    "Supabase Auth",
                    "Drizzle ORM",
                    "Zod",
                    "GitHub Actions"
                ]
            }}
        >
            <Highlights items={[
                {
                    title: "Independent deployments",
                    description: "Web and API services are containerized with Docker, then built, versioned, and deployed to self-hosted infrastructure through separate GitHub Actions CI/CD pipelines."
                },
                {
                    title: "Employee history",
                    description: "A temporal data model preserves employment history, compensation changes, withholding elections, deductions, and reimbursements. Each payroll calculation resolves the configuration effective for its pay period."
                },
                {
                    title: "Immutable payroll snapshots",
                    description: "Finalized payrolls preserve historical compensation, tax, deduction, reimbursement, and payment data. The audit trail remains intact when employee records or business configuration change later."
                },
                {
                    title: "Business-scoped authorization",
                    description: "Supabase Auth, role-based API middleware, and PostgreSQL Row Level Security enforce access for owners, accountants, and employees, including users who belong to multiple businesses."
                }
            ]} />
        </ProjectPage>
    )
}
