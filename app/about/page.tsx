export default function About() {
    return (
        <div className="flex flex-col">
            <h1 className="flex items-center justify-center 
                            font-mono font-bold text-[4vw] 
                            bg-black py-4 text-white"
                            >About Me</h1>

            <div className="font-mono font-semibold text-[1.5vw] flex items-center justify-center p-20 border-1">
                Hey thanks for checking out my portfolio!
                I&apos;m currently getting my master&apos;s degrees in Computer Science at Columbia University.
                My goal is to utilize cutting edge machine learning technologies, AI, and advances in data analytics to improve the healthcare experience for patients and providers.
            </div>
        </div>
    )
}