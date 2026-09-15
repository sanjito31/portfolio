import Link from "next/link"

export type BasicInfoProps = {
    description: string,
    contributor: string,
    date?: string,
    liveSiteLink?: string,
    repoLink?: string,
    repoLinks?: { label: string, href: string }[],
    dateLabel?: string,
    className?: string
}

export default function BasicInfo({description, contributor, date, liveSiteLink, repoLink, repoLinks, dateLabel = "Date completed", className}: BasicInfoProps) {
    return (
        <div className={className}>
            <div className="mb-4">
                <b>Description:</b> {description}
            </div>
            <div className="mb-4">
                <b>Contributor(s):</b> {contributor}
            </div>
            {date && <div className="mb-8">
                <b>{dateLabel}:</b> {date}
            </div>}
            <div className="flex flex-wrap gap-4">
                {liveSiteLink && <Link href={liveSiteLink} target="_blank" className="border-1 p-4 hover:bg-black hover:text-white"><b>Live Site</b></Link>}
                {repoLink && <Link href={repoLink} target="_blank" className="border-1 p-4 hover:bg-black hover:text-white">Github Repo</Link>}
                {repoLinks?.map(({ label, href }) => (
                    <Link key={href} href={href} target="_blank" className="border-1 p-4 hover:bg-black hover:text-white">{label}</Link>
                ))}
            </div>
        </div>
    )
}
