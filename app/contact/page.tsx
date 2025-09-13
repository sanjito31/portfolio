import ProjectCard from "@/components/ProjectCard";
import Page from "@/components/BasicPageLayout";

export default function Contact() {
    return (
        <Page pageTitle="Contact Me">

            <div className="grid grid-cols-1
                            md:grid-cols-2">
                <div className="col-start-1 col-span-1
                                md:col-start-1 md:col-span-1 md:aspect-[16/6]">
                    <ProjectCard title="Send me an email" href="mailto:svk2121@columbia.edu">
                        <b>svk2121@columbia.edu</b>
                    </ProjectCard>
                </div>

                <div className="col-start-1 col-span-1
                                md:col-start-2 md:col-span-1 md:aspect-[16/6]">
                    <ProjectCard title="Connect with me" href="https://www.linkedin.com/in/sanjayvkumar31/">
                        <b>LinkedIn/sanjayvkumar31</b>
                    </ProjectCard>
                </div> 

                <div className="col-start-1 col-span-1
                                md:col-start-1 md:col-span-2 md:aspect-[16/3]">
                    <ProjectCard title="Check out my code" href="https://github.com/sanjito31/">
                        <b>Github/sanjito31</b>
                    </ProjectCard>
                </div>

            </div>
        </Page>
    )
}