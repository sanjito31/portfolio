import ProjectCard from "@/components/ProjectCard";
import Page from "@/components/BasicPageLayout";

export default function Contact() {
    return (
        <Page pageTitle="Contact Me">

            <div className="grid grid-cols-1
                            md:grid md:grid-cols-2">
                <div className="col-start-1 col-span-1
                                md:col-start-1 md:col-span-1 md:aspect-[16/5]">
                    <ProjectCard title="Send me an email" href="mailto:svk2121@columbia.edu">
                        <b>svk2121@columbia.edu</b>
                    </ProjectCard>
                </div>

                <div className="col-start-1 col-span-1
                                md:col-start-1 md:col-span-1 md:aspect-[16/5]">
                    <ProjectCard title="Connect with me" href="https://www.linkedin.com/in/sanjayvkumar31/">
                        <b>LinkedIn/sanjayvkumar31</b>
                    </ProjectCard>
                </div> 

                <div className="col-start-1 col-span-1
                                md:col-start-1 md:col-span-1 md:aspect-[16/5]">
                    <ProjectCard title="Check out my code" href="https://github.com/sanjito31/">
                        <b>Github/sanjito31</b>
                    </ProjectCard>
                </div>

            </div>
        </Page>
    )
}