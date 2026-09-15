type HighlightsProps = {
    items: { title: string, description: string }[]
}

export default function Highlights({ items }: HighlightsProps) {
    return (
        <section className="w-full p-4 md:p-8">
            <h2 className="font-bold text-2xl mb-4 md:text-[2vw]">Technical Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {items.map(({ title, description }) => (
                    <div key={title}>
                        <h3 className="font-bold text-lg mb-2 md:text-[1.5vw]">{title}</h3>
                        <p className="text-base md:text-[1.25vw]">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
