import ProjectPage from "@/components/ProjectPage/ProjectPage"
import { BasicInfoProps } from "@/components/ProjectPage/BasicInfo"
import { TechStackProps } from "@/components/ProjectPage/TechStack"
import Image from "next/image"
import { Arduino, PlatformIO } from "@/components/Icons"

export default function LEDInfoPanel() {
    const basicInfoParams: BasicInfoProps = {
        description: "LED info panel and custom API to display user-chosen information such as time, date, current local weather, real time subway wait times, sports information, and Spotify currently playing.",
        contributor: "Sanjay Kumar",
        date: "August 2025",
        repoLink: "https://github.com/sanjito31/led_info_panel"
    }

    const techStackParams: TechStackProps = {
        cPlusPlus: true,
        fastAPI: true,
        docker: true
    } 

    return(
        <ProjectPage 
            pageTitle="LED Info Panel" 
            basicInfoProps={basicInfoParams} 
            techStackProps={{...techStackParams,
                children: (
                    <>
                        <div className="flex m-2 items-center">
                            <Arduino width={24} height={24} className="mx-2" />
                            <div>
                                Arduino
                            </div>
                        </div>
                        <div className="flex m-2 items-center">
                            <PlatformIO width={24} height={24} className="mx-2" />
                            <div>
                                PlatformIO
                            </div>
                        </div>
                    </>
                )
            }}
        >
            <h2 className="font-bold text-[2vw]">Overview</h2>
            <div className="grid grid-cols-2">
                <div className="col-start-1 col-span-1 m-8">
                    <Image 
                        className="rounded-lg shadow-lg"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/led-info-panel/led-info-panel-wired.JPG" 
                        alt="image of an LED panel connected with multicolor wires to a microcontroller"
                        width={800}
                        height={800}
                    >
                    </Image> 
                </div>
                <div className="col-start-2 col-span-1 flex my-auto mx-8">
                    <div className="text-[1.5vw]">
                        The <b>LED Matrix panel</b> is connected to the <b>ESP32</b> via the I2C interface using Dupont cables. The ESP32 obtains information via JSON from the <b>remote API endpoints</b> to then display on the LED panel.
                    </div>
                </div>
            </div>
        </ProjectPage>
    )
}