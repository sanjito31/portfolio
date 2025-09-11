import Image from "next/image"
import ProjectPage from "@/components/ProjectPage/ProjectPage"
import { BasicInfoProps } from "@/components/ProjectPage/BasicInfo"
import { TechStackProps } from "@/components/ProjectPage/TechStack"
import { Tags } from "lucide-react"

export default function SanjaysPics() {
    const basicInfoParams: BasicInfoProps = {
        description: "Blog style photography portfolio website with custom EXIF parser specifically designed to pull Fujifilm specific metadata fields such as Film Simulation and recipe information.",
        contributor: "Sanjay Kumar",
        date: "August 2025",
        liveSiteLink: "https://www.sanjayspics.com/",
        repoLink: "https://github.com/sanjito31/sjayspics"
    }

    const techStackParams: TechStackProps = {
        react: true,
        nextjs: true,
        prisma: true,
        postgresql: true,
        cloudinary: true,
        betterAuth: true
    }

    return (
        <ProjectPage 
            pageTitle="Sanjay's Pics" 
            basicInfoProps={basicInfoParams} 
            techStackProps={{
                ...techStackParams,
                children: (
                    <div className="flex m-2 items-center">
                        <Tags size={24} className="mx-2"></Tags>
                        <div>
                            Custom Fujifilm EXIF tag parser
                        </div>
                    </div>
                )
            }}
        >
            <h2 className="font-bold text-2xl my-2 md:text-[2vw]">Overview</h2>
            <div className="flex flex-col md:grid md:grid-cols-2">
                
                <div className="md:col-start-1 md:col-span-1 md:m-8">
                    <Image 
                        className="md:rounded-lg"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-homepage.png" 
                        alt="screenshot of the homepage for sanjays pics"
                        width={800}
                        height={800}
                    >
                    </Image>
                </div>
                <div className="m-2 md:col-start-2 md:col-span-1 flex md:my-auto md:mx-8">
                    <div className="text-md md:text-[1.5vw]">
                        The <b>Homepage</b> consists of the image to the left, and information about the image on the right.
                    </div>
                </div>
                <div className="md:col-start-1 md:col-span-1 md:m-8">
                    <Image
                        className="md:rounded-lg"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-film-sim-page.png" 
                        alt="screenshot of the film sim page"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="md:col-start-2 md:col-span-1 flex m-2 md:my-auto md:mx-8">
                    <div className="text-md md:text-[1.5vw]">
                        From the homepage, click on a <b>film simulation</b> to view other images with the same film simulation.
                    </div>
                </div>
                <div className="md:col-start-1 md:col-span-1 md:m-8">
                    <Image
                        className="md:rounded-lg"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-login-page.png" 
                        alt="screenshot of the login page"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="md:col-start-2 md:col-span-1 flex m-2 md:my-auto md:mx-8">
                    <div className="text-md md:text-[1.5vw]">
                        Hidden admin dashboard <b>login page</b> using email and password credentials.
                    </div>
                </div>
                <div className="md:col-start-1 md:col-span-1 md:m-88">
                    <Image
                        className="md:rounded-lg"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-dashboard.png" 
                        alt="screenshot of the dashboard"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="m-2 md:col-start-2 md:col-span-1 flex md:my-auto md:mx-8">
                    <div className="text-md md:text-[1.5vw]">
                        <b>Adminastrator dashboard</b> to manage photos on the site including photo attributes such as hidden or not.
                    </div>
                </div>
                <div className="md:col-start-1 md:col-span-1 md:m-8">
                    <Image
                        className="md:md:rounded-lg"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-upload-page.png" 
                        alt="screenshot of the upload form"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="m-2 md:col-start-2 md:col-span-1 flex md:my-auto md:mx-8">
                    <div className="text-md md:text-[1.5vw]">
                        An <b>upload form</b> to add multiple images at a time including a title and description. The upload form uses a Vercel Blob to handle chunked data upload, which is then reconstructed and uploaded to Cloudinary.
                    </div>
                </div>
                <div className="md:col-start-1 md:col-span-1 md:m-8">
                    <Image
                        className="md:rounded-lg"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-fujifilm-recipe-management.png" 
                        alt="screenshot of the recipe management page"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="m-2 md:col-start-2 md:col-span-1 flex md:my-auto md:mx-8">
                    <div className="text-md md:text-[1.5vw]">
                        Fujifilm <b>recipe management</b> section.
                    </div>
                </div>
                <div className="md:col-start-1 md:col-span-1 md:m-8">
                    <Image
                        className="md:rounded-lg"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-add-fujifilm-recipe.png" 
                        alt="screenshot of the recipe addition page"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="m-2 md:col-start-2 md:col-span-1 flex md:my-auto md:mx-8">
                    <div className="text-md md:text-[1.5vw]">
                        Fujifilm <b>recipe addition</b> page.
                    </div>
                </div>
            </div>
        </ProjectPage>
    )
}