type PageProps = {
    pageTitle: string,
    children: React.ReactNode
}

export default function Page({pageTitle, children}: PageProps) {
    return(
        <div className="flex flex-col">
            <h1 className="flex items-center justify-center font-mono font-bold text-[4vw] bg-black py-4 text-white">{pageTitle}</h1>
            {children}
        </div>
    )
}