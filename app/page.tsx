import Hero from "@/components/Hero"
import Image from "next/image"
import { ArrowDown, ArrowRight } from "lucide-react"
import ProjectCard from "@/components/ProjectCard"
import Link from "next/link"

export default function Home() {


  return ( 
    <div className="flex flex-col">
        <div className="flex flex-col
                      md:grid md:grid-cols-2 md:auto-rows-[calc(50vw*(2.25/16))]">

          {/* Hero Section */}
          <div className="flex p-2
                        md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-4 md:p-4
                        border-black border-1 items-center justify-center">
            <Hero></Hero>
          </div>

          {/* About Me Line */}
          <div className="flex p-2
                          md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-2 md:p-[2vw]
                        border-black border-1 items-center justify-center">

            <p className="text-center font-mono 
                          text-md
                          md:text-[1.75vw]">
              Computer Science master&apos;s student at <i>Columbia University</i> focused on <b>machine learning.</b>
            </p>
          </div>

          {/* Headshot Image */}
          <div className="flex p-2 max-md:aspect-video
                          md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-4 
                          border-1 relative transition-transform duration-300 hover:scale-[1.05] hover:bg-white hover:border-2 hover:border-black">
            <Image 
                src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/svk_headshot.JPG"              
                fill
                className="w-full h-full object-cover p-2 md:p-[1vw]"
                alt="headshot of Sanjay Kumar"
              />
          </div>

          {/* Statement of purpose line */}
          <div className="flex p-2
                          md:col-start-2 md:col-span-1 md:row-start-5 md:row-span-2 md:p-[2vw]
                          items-center justify-center border-1 border-black ">
            <p className="text-center font-mono 
                          text-md
                          md:text-[1.75vw]">
              Passionate about improving the healthcare experience for patients and providers.
            </p>
          </div>


          <div className="flex p-4
                          md:col-start-1 md:col-span-2 md:row-start-7 md:row-span-1 md:p-[2vw]
                          items-center justify-center border-1 border-black ">
            
            <ArrowDown className="mx-4 w-[24px] h-[24px] bounce-animation
                                  md:mx-2 md:w-[2vw] md:h-[2vw] "/>
            
            <p className="text-center font-mono font-bold 
                          text-md
                          md:text-[2.5vw]">Take a look at my work
            </p>
            <ArrowDown className="mx-4 w-[24px] h-[24px] bounce-animation
                                  md:mx-2 md:w-[2vw] md:h-[2vw]"/>
          
          </div>

          
            <div className="
                            md:col-start-1 md:col-span-1 md:row-start-8 md:row-span-4">
              
                <ProjectCard title="Sanjay&apos;s Pics" href="/projects/sanjays-pics">
                  Photography portfolio with custom Fujifilm EXIF parser extracting 50+ undocumented metadata fields. Features admin dashboard, role-based auth, and cloud-optimized image pipeline.
                </ProjectCard>
              
            </div>
            
            <div className="
                            md:col-start-2 md:col-span-1 md:row-start-8 md:row-span-4">
              
                <ProjectCard title="LED Info Panel" href="/projects/led-info-panel">
                  Full-stack IoT display system using ESP32 microcontroller with 64x32 RGB LED matrix. Dockerized API service aggregates real-time data from weather, transit, music, and sports APIs with modular C++ architecture.
                </ProjectCard>
              
            </div>
          


          <div className="flex
                          md:col-start-1 md:col-span-2 md:row-start-12 md:row-span-1 
                          border-1 border-black justify-center items-center">
            <Link
              href="/projects"
              className="flex text-lg p-1
                          md:text-[2vw]
                          font-mono font-semibold items-center 
                          transition-transform hover:translate-x-[5px]"
                          >See all my projects 
                          <ArrowRight className="mx-2 w-4 h-4
                                                  md:ml-2 md:w-[2vw] md:h-[2vw] 
                                                  transition-transform hover:translate-x-[10px]" />
            </Link>
          </div>

        </div>

   
      </div>
        
    
  )
}

{/* Go to Projects
        <div className="col-start-1 row-start-3 col-span-1 row-span-2 border-b-2 flex flex-col items-center justify-center">
          <h2 className="text-[2vw] font-mono mb-[2vw]">See some of my projects</h2>
          <Link 
          className="text-[2vw] border-black border-2 py-[1vw] px-[2vw] font-mono hover:text-white hover:border-white hover:bg-black"
          href="/projects">PROJECTS</Link>
        </div> */}

        {/* Go To Experience
        <div className="col-start-2 col-span-1 row-start-4 row-span-1 border-l-2 border-b-2 flex flex-col items-center justify-center">
          <h2 className="text-[2vw] font-mono mb-[2vw]">Take a look at my experience</h2>
          <Link 
          className="text-[2vw] border-black border-2 py-[1vw] px-[2vw] font-mono hover:text-white hover:border-white hover:bg-black"
          href="/experience">EXPERIENCE</Link>
        </div> */}




        {/* <div>

          <a href="/projects" className="hover:cursor-pointer"><h1 className="text-6xl mb-4 font-mono">Projects</h1></a>
          <div className="border-black border-2 mb-10"/>
          <div className="grid grid-cols-4 grid-rows-3 gap-16 mb-20">
            <div className="col-start-1 row-start-1 col-span-2 row-span-2 bg-blue-700 rounded-2xl"></div>
            <div className="col-start-3 row-start-1 col-span-2 row-span-1 bg-amber-600 rounded-2xl"></div>
            <div className="col-start-1 row-start-3 col-span-1 aspect-square bg-emerald-600 rounded-2xl"></div>
            <div className="col-start-2 row-start-3 col-span-1 aspect-square bg-emerald-600 rounded-2xl"></div>
            <div className="col-start-3 row-start-2 col-span-2 row-span-2 bg-red-600 rounded-2xl"></div>
          </div>

          
          <a href="/experience" className="hover:cursor-pointer"><h1 className="text-6xl mb-4 font-mono">Experience</h1></a>
          <div className="border-black border-2 mb-10"/>
          <div className="grid grid-cols-5 ">
            
          </div>
        </div> */}