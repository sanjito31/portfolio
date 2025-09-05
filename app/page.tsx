import Hero from "@/components/Hero"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import ProjectCard from "@/components/ProjectCard"

export default function Home() {


  return ( 
    // grid-rows-[repeat(10,calc(50vw*(2.25/16)))]
      <div className="flex flex-col">
        <div className="grid grid-cols-2 auto-rows-[calc(50vw*(2.25/16))]">

          {/* Hero Section */}
          <div className="col-start-1 col-span-1 row-start-1 row-span-4 border-black border-1 p-4 flex items-center justify-center">
            <Hero></Hero>
          </div>

          {/* Statement of purpose line */}
          <div className="col-start-2 col-span-1 row-start-1 row-span-2 border-black border-1 flex items-center justify-center p-[2vw]">
            <p className="text-center font-mono text-[1.75vw]">
              Computer Science master&apos;s student at <i>Columbia University</i> focused on <b>machine learning.</b>
            </p>
          </div>

          {/* Headshot Image */}
          <div className="col-start-2 col-span-1 row-start-3 row-span-4 border-1 relative transition-transform duration-300 hover:scale-[1.05] hover:bg-white hover:border-2 hover:border-black">
            <Image 
              src="/svk_headshot.jpg"
              fill
              className="object-cover p-[1vw]"
              alt="headshot of Sanjay Kumar"
            />
          </div>

          <div className="col-start-1 col-span-1 row-start-5 row-span-2 flex flex-col items-center justify-center border-1 border-black p-[2vw]">
            <p className="text-center font-mono text-[1.75vw]">
              Passionate about improving the healthcare experience for patients and providers.
            </p>
          </div>

          <div className="col-start-1 col-span-2 row-start-7 row-span-1 flex items-center justify-center border-1 border-black p-[2vw]">
            <ArrowDown 
              size={36}
              className="mx-8 periodic-animation"
            />
            <p className="text-center font-mono font-bold text-[2vw]">
              Take a look at my work
            </p>
            <ArrowDown 
              size={36}
              className="mx-8 periodic-animation"
            />
          </div>

          <div className="col-start-1 col-span-1 row-start-8 row-span-4">
            <ProjectCard title="Sanjay&apos;s Pics" href="/projects/sanjays-pics">
              Photography portfolio with custom Fujifilm EXIF parser extracting 50+ undocumented metadata fields. Features admin dashboard, role-based auth, and cloud-optimized image pipeline.
            </ProjectCard>
          </div>
          
          <div className="col-start-2 col-span-1 row-start-8 row-span-4">
            <ProjectCard title="LED Info Panel" href="/projects/led-info-panel">
              Full-stack IoT display system using ESP32 microcontroller with 64x32 RGB LED matrix. Dockerized API service aggregates real-time data from weather, transit, music, and sports APIs with modular C++ architecture.
            </ProjectCard>
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