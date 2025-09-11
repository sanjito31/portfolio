type PageProps = {
    pageTitle: string,
    children: React.ReactNode
}

export default function Page({pageTitle, children}: PageProps) {
    return(
        <div className="flex flex-col">
            <h1 className="flex items-center justify-center font-mono font-bold 
                            bg-black text-white
                            text-4xl py-2
                            md:text-[4vw] md:py-4"
                            >{pageTitle}</h1>
            {children}
        </div>
    )
}