import ProjectPage from "@/components/ProjectPage/ProjectPage"
import { BasicInfoProps } from "@/components/ProjectPage/BasicInfo"
import { TechStackProps } from "@/components/ProjectPage/TechStack"

export default function CalendarToDo() {
    const basicInfoParams: BasicInfoProps = {
        description: "Full-stack web application that features a calendar centric to do list. Features user authentication and PostgreSQL for user information storage and retrieval.",
        contributor: "Sanjay Kumar",
        date: "July 2025"
    }

    const techStackParams: TechStackProps = {
        react: true,
        nextjs: true,
        prisma: true,
        betterAuth: true,
        postgresql: true
    } 

    return(
        <ProjectPage 
            pageTitle="Calendar To Do" 
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