import Highlights from "@/components/ProjectPage/Highlights"
import ProjectPage from "@/components/ProjectPage/ProjectPage"
import { BasicInfoProps } from "@/components/ProjectPage/BasicInfo"
import { TechStackProps } from "@/components/ProjectPage/TechStack"
import Image from "next/image"
import { Arduino, PlatformIO } from "@/components/Icons"

export default function Minitron() {
    const basicInfoParams: BasicInfoProps = {
        description: "Minitron is an ESP32-powered 64x32 HUB75 LED information panel with a FreeRTOS animation pipeline and a Dockerized FastAPI backend aggregating live weather, NYC subway, Spotify, and Formula 1 data.",
        contributor: "Sanjay Kumar",
        date: "May 2025 - August 2025",
        dateLabel: "Project dates",
        repoLinks: [
            { label: "Firmware Repo", href: "https://github.com/sanjito31/minitron-hdk" },
            { label: "API Repo", href: "https://github.com/sanjito31/minitron-led-panel-api" }
        ]
    }

    const techStackParams: TechStackProps = {
        cPlusPlus: true,
        fastAPI: true,
        docker: true,
        cLang: true,
        additionalTechnologies: ["ESP32", "FreeRTOS", "I2S DMA", "HUB75", "libwebp"]
    } 

    return(
        <ProjectPage 
            pageTitle="Minitron"
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
            <Highlights items={[
                {
                    title: "FreeRTOS rendering pipeline",
                    description: "Compressed WebP animations are downloaded over HTTP, decoded into composited RGBA frames with libwebp, and streamed into a DMA-backed framebuffer."
                },
                {
                    title: "Safe live content updates",
                    description: "Mutex-protected, PSRAM-aware buffer management coordinates network and rendering workloads. Versioned shared state allows display content to be replaced without invalidating active animation buffers."
                },
                {
                    title: "Continuous display refresh",
                    description: "I2S DMA keeps the timing-sensitive HUB75 display scan running independently of Wi-Fi communication and image decoding."
                },
                {
                    title: "Live data API",
                    description: "A FastAPI backend aggregates OpenWeatherMap, NYC MTA, Spotify, and Formula 1 services and runs as a Dockerized service on self-hosted infrastructure."
                }
            ]} />
            <h2 className="font-bold text-2xl my-2 md:text-[2vw]">Overview</h2>
            <div className="max-md:flex max-md:flex-col md:grid md:grid-cols-2">
                <div className="md:col-start-1 md:col-span-1 md:m-8">
                    <Image 
                        className="md:rounded-lg md:shadow-lg"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/led-info-panel/led_weather.JPG" 
                        alt="image of an LED panel connected with multicolor wires to a microcontroller"
                        width={800}
                        height={800}
                    >
                    </Image> 
                </div>
                <div className="m-2 md:col-start-2 md:col-span-1 md:flex md:my-auto md:mx-8">
                    <div className="text-md md:text-[1.5vw]">
                        The <b>64x32 HUB75 LED matrix</b> is driven by an <b>ESP32</b> using continuous <b>I2S DMA refresh</b>. Display scanning runs independently of Wi-Fi communication and image decoding, while the firmware downloads WebP animations over HTTP from the remote API.
                    </div>
                </div>
                <div className="md:col-start-1 md:col-span-1 md:m-8">
                    <Image 
                        className="md:rounded-lg md:shadow-lg"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/led-info-panel/led_time_2.jpg" 
                        alt="image of an LED panel connected with multicolor wires to a microcontroller"
                        width={800}
                        height={800}
                    >
                    </Image> 
                </div>
                <div className="m-2 md:col-start-2 md:col-span-1 md:flex md:my-auto md:mx-8">
                    <div className="text-md md:text-[1.5vw]">
                        Panel can display the time with dynamic animations.
                    </div>
                </div>
                <div className="md:col-start-1 md:col-span-1 md:m-8">
                    <Image 
                        className="md:rounded-lg md:shadow-lg"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/led-info-panel/led_plane_2.png"
                        alt="image of an LED panel connected with multicolor wires to a microcontroller"
                        width={800}
                        height={800}
                    >
                    </Image> 
                </div>
                <div className="m-2 md:col-start-2 md:col-span-1 md:flex md:my-auto md:mx-8">
                    <div className="text-md md:text-[1.5vw]">
                        Track planes flying overhead
                    </div>
                </div>
            </div>
        </ProjectPage>
    )
}