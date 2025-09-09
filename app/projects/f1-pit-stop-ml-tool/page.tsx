import ProjectPage from "@/components/ProjectPage/ProjectPage"
import { BasicInfoProps } from "@/components/ProjectPage/BasicInfo"
import { TechStackProps } from "@/components/ProjectPage/TechStack"

export default function F1PitStopStrategist() {
    const basicInfoParams: BasicInfoProps = {
        description: "Machine learning project that uses historical F1 race data from 2018 to 2024 to determine optimal pit window for maximum strategic benefit during race conditions.",
        contributor: "Sanjay Kumar",
        date: "September 2025"
    }

    const techStackParams: TechStackProps = {
    } 

    return(
        <ProjectPage 
            pageTitle="F1 Pit Stop Strategist" 
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