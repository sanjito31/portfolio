import Page from "@/components/BasicPageLayout"


export default function About() {
    return (
        <Page pageTitle="About">
            <div className="font-mono font-semibold
                            text-lg p-4 
                            md:text-[1.5vw] md:p-20
                            flex flex-col items-center justify-center border-1">
                <p className="m-4 text-center">I&apos;m a master&apos;s student in Computer Science at <span className="bg-[#003ae8] text-white px-1">Columbia University</span>, focused on backend engineering, machine learning, and the systems that bring them together. I enjoy designing software that handles complex data and remains dependable as demands grow.</p>
                <br />
                <p className="m-4 text-center">My background includes a Microbiology degree from UCLA and biomedical research on Parkinson&apos;s disease and ALS at Cedars-Sinai. Building tools to process microscopy images and analyze research data drew me toward software engineering and ML, and gives me a particular interest in healthcare, health AI, and biotech.</p>
                <br />
                <p className="m-4 text-center">I&apos;m interested in opportunities across industries where I can build robust backend services, make systems resilient to failure, and solve challenging engineering problems. Whether supporting a healthcare product, an ML application, or another service people rely on, I want to build systems that work reliably in practice.</p>
                <br />
            </div>
        </Page>

    )
}
