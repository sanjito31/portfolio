import Link from "next/link"

export type BasicInfoProps = {
    description: string,
    contributor: string,
    date: string,
    liveSiteLink?: string,
    repoLink?: string,
    className?: string
}

export default function BasicInfo({description, contributor, date, liveSiteLink, repoLink, className}: BasicInfoProps) {
    return (
        <div className={className}>
            <div className="mb-4">
                <b>Description:</b> {description}
            </div>
            <div className="mb-4">
                <b>Contributor(s):</b> {contributor}
            </div>
            <div className="mb-8">
                <b>Date completed:</b> {date}
            </div>
            <div>
                {liveSiteLink && <Link href={liveSiteLink} target="_blank" className="border-1 p-4 mr-8 hover:bg-black hover:text-white"><b>Live Site</b></Link>}
                {repoLink && <Link href={repoLink} target="_blank" className="border-1 p-4 hover:bg-black hover:text-white">Github Repo</Link>}
            </div>
        </div>
    )
}