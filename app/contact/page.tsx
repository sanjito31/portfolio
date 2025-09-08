import ProjectCard from "@/components/ProjectCard";

export default function Contact() {
    return (
        <div className="flex flex-col">
            <h1 className="flex items-center justify-center 
                            font-mono font-bold text-[4vw] 
                            bg-black py-4 text-white"
                            >Contact Me</h1>

            <div className="grid grid-cols-2">



                <div className="col-start-1 col-span-1 aspect-[16/5]">
                    <ProjectCard title="Send me an email" href="mailto:svk2121@columbia.edu">
                        svk2121@columbia.edu
                    </ProjectCard>
                </div>

                <div className="col-start-2 col-span-1 aspect-[16/5]">
                    <ProjectCard title="Connect with me" href="https://www.linkedin.com/in/sanjayvkumar31/">
                        LinkedIn/sanjayvkumar31
                    </ProjectCard>
                </div> 

                <div className="col-start-1 col-span-2 aspect-[16/2.5]">
                    <ProjectCard title="Check out my code" href="https://github.com/sanjito31/">
                        Github
                    </ProjectCard>
                </div>

            </div>
            
        </div>
    )
}