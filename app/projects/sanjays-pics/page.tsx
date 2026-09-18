import type { Metadata } from "next";
import { projects } from "@/data/projects";
import Image from "next/image"
import Highlights from "@/components/ProjectPage/Highlights"
import ProjectPage from "@/components/ProjectPage/ProjectPage"
import { BasicInfoProps } from "@/components/ProjectPage/BasicInfo"
import { TechStackProps } from "@/components/ProjectPage/TechStack"
import { Tags } from "lucide-react"

export const metadata: Metadata = {
    title: `${projects["sanjays-pics"].title} — Sanjay Kumar`,
    description: projects["sanjays-pics"].description,
};

export default function SanjaysPics() {
    const basicInfoParams: BasicInfoProps = {
        description: "A Next.js photography portfolio with a custom TypeScript TIFF/IFD parser for proprietary Fujifilm MakerNote metadata, authenticated administration, image management, and EXIF visualization.",
        contributor: "Sanjay Kumar",
        date: "May 2025 - August 2025",
        dateLabel: "Project dates",
        liveSiteLink: "https://www.sanjayspics.com/",
        repoLink: "https://github.com/sanjito31/sjayspics"
    }

    const techStackParams: TechStackProps = {
        react: true,
        nextjs: true,
        prisma: true,
        postgresql: true,
        cloudinary: true,
        betterAuth: true,
        additionalTechnologies: ["TypeScript", "Vercel Blob"]
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
            <Highlights items={[
                {
                    title: "Custom Fujifilm parser",
                    description: "Reverse-engineered Fujifilm MakerNote metadata and built a TypeScript TIFF/IFD parser to extract proprietary camera settings unavailable through standard EXIF libraries."
                },
                {
                    title: "Binary TIFF parsing",
                    description: "Supports little-endian 12-byte IFD entries, inline and offset-based values, and all 12 TIFF field types, including signed and unsigned integers, strings, arrays, floating-point values, and rationals."
                },
                {
                    title: "40 proprietary Fujifilm tags",
                    description: "Maps tag IDs and encoded values to human-readable film simulation, white balance, grain, dynamic range, clarity, and color effect settings, persisting selected metadata through Prisma."
                },
                {
                    title: "Photography platform",
                    description: "The surrounding Next.js platform combines authenticated administration, image management, and EXIF visualization with a Cloudinary/Vercel Blob image pipeline for optimized delivery."
                }
            ]} />
            <h2 className="gallery-heading">Overview</h2>
            <div className="project-gallery">
                
                <div className="gallery-image">
                    <Image 
                        className="study-image"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-homepage.png" 
                        alt="screenshot of the homepage for sanjays pics"
                        width={800}
                        height={800}
                    >
                    </Image>
                </div>
                <div className="gallery-caption">
                    <div className="gallery-text">
                        The <b>Homepage</b> consists of the image to the left, and information about the image on the right.
                    </div>
                </div>
                <div className="gallery-image">
                    <Image
                        className="study-image"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-film-sim-page.png" 
                        alt="screenshot of the film sim page"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="gallery-caption">
                    <div className="gallery-text">
                        From the homepage, click on a <b>film simulation</b> to view other images with the same film simulation.
                    </div>
                </div>
                <div className="gallery-image">
                    <Image
                        className="study-image"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-login-page.png" 
                        alt="screenshot of the login page"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="gallery-caption">
                    <div className="gallery-text">
                        Hidden admin dashboard <b>login page</b> using email and password credentials.
                    </div>
                </div>
                <div className="gallery-image">
                    <Image
                        className="study-image"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-dashboard.png" 
                        alt="screenshot of the dashboard"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="gallery-caption">
                    <div className="gallery-text">
                        <b>Administrator dashboard</b> to manage photos on the site including photo attributes such as hidden or not.
                    </div>
                </div>
                <div className="gallery-image">
                    <Image
                        className="study-image"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-upload-page.png" 
                        alt="screenshot of the upload form"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="gallery-caption">
                    <div className="gallery-text">
                        An <b>upload form</b> to add multiple images at a time including a title and description. The upload form uses a Vercel Blob to handle chunked data upload, which is then reconstructed and uploaded to Cloudinary.
                    </div>
                </div>
                <div className="gallery-image">
                    <Image
                        className="study-image"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-fujifilm-recipe-management.png" 
                        alt="screenshot of the recipe management page"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="gallery-caption">
                    <div className="gallery-text">
                        Fujifilm <b>recipe management</b> section.
                    </div>
                </div>
                <div className="gallery-image">
                    <Image
                        className="study-image"
                        src="https://agdha7peszt0aou5.public.blob.vercel-storage.com/assets/sanjays-pics/sanjays-pics-add-fujifilm-recipe.png" 
                        alt="screenshot of the recipe addition page"
                        width={800}
                        height={800}>
                    </Image>
                </div>
                <div className="gallery-caption">
                    <div className="gallery-text">
                        Fujifilm <b>recipe addition</b> page.
                    </div>
                </div>
            </div>
        </ProjectPage>
    )
}