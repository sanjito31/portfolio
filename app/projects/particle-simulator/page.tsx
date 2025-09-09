import ProjectPage from "@/components/ProjectPage/ProjectPage"
import { BasicInfoProps } from "@/components/ProjectPage/BasicInfo"
import { TechStackProps } from "@/components/ProjectPage/TechStack"

export default function ParticleSimulation() {
    const basicInfoParams: BasicInfoProps = {
        description: "Performant multidimensional particle movement and interaction simulator made to model crowd dispersal and flocking behaviors. Built in C.",
        contributor: "Sanjay Kumar, Robert Stott, Beverly Qin",
        date: "May 2025"
    }

    const techStackParams: TechStackProps = {
        cLang: true
    } 

    return(
        <ProjectPage 
            pageTitle="Particle Simulation" 
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