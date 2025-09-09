import ProjectPage from "@/components/ProjectPage/ProjectPage"
import { BasicInfoProps } from "@/components/ProjectPage/BasicInfo"
import { TechStackProps } from "@/components/ProjectPage/TechStack"

export default function DocRound() {
    const basicInfoParams: BasicInfoProps = {
        description: "Web application built for doctors to keep track, log, and organize patients seen in the hospital for improving the billing workflow for private practitioners. Designed as a lightweight accessory for traditional EHRs and powered by AI for chart data input.",
        contributor: "Sanjay Kumar",
        date: "August 2025"
    }

    const techStackParams: TechStackProps = {
        react: true,
        nextjs: true,
        prisma: true,
        postgresql: true
    } 

    return(
        <ProjectPage 
            pageTitle="DocRound" 
            basicInfoProps={basicInfoParams} 
            techStackProps={techStackParams}
        >
            <h2 className="font-bold text-[2vw]">Overview</h2>
            <div className="grid grid-cols-2">
                <div className="col-start-1 col-span-1 m-8">
                    {/* Add project image here */}
                </div>
                <div className="col-start-2 col-span-1 flex my-auto mx-8">
                    <div className="text-[1.5vw]">
                        
                    </div>
                </div>
            </div>
        </ProjectPage>
    )
}