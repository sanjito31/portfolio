import Page from "@/components/BasicPageLayout"


export default function About() {
    return (
        <Page pageTitle="About">
            <div className="font-mono font-semibold
                            text-lg p-4 
                            md:text-[1.5vw] md:p-20
                            flex flex-col items-center justify-center border-1">
                <p className="m-4 text-center">I&apos;m a Computer Science graduate student at <span className="bg-[#003ae8] text-white px-1">Columbia University</span> specializing in Machine Learning. My journey began with a Microbiology degree from UCLA and biomedical research on Parkinson&apos;s disease and ALS at Cedars-Sinai.</p>
                <br />
                <p className="m-4 text-center">While analyzing thousands of microscopy images and complex datasets, I discovered my passion for AI and how machine learning could automate analysis and accelerate discoveries that help patients.</p>
                <br />
                <p className="m-4 text-center">Today, I focus on using technology to create meaningful impact—particularly developing machine learning solutions to bridge brain signals and robotics, helping individuals with disabilities through intelligent prosthetics and assistive devices.</p>
                <br />
            </div>
        </Page>

    )
}