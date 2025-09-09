import { 
    React, 
    Prisma, 
    NextJS, 
    PostgreSQL, 
    Cloudinary, 
    BetterAuth, 
    CPlusPlus, 
    CLang, 
    FastAPI,
    Docker 
} from "@/components/Icons"

export type TechStackProps = {
    react?: boolean,
    nextjs?: boolean,
    prisma?: boolean,
    postgresql?: boolean,
    cloudinary?: boolean,
    betterAuth?: boolean,
    cPlusPlus?: boolean,
    cLang?: boolean,
    fastAPI?: boolean,
    docker?: boolean,
    children?: React.ReactNode,
    className?: string
}


export default function TechStack({
    react = false,
    nextjs = false,
    prisma = false,
    postgresql = false,
    cloudinary = false,
    betterAuth = false,
    cPlusPlus = false,
    cLang = false,
    fastAPI = false,
    docker = false,
    children, 
    className
}: TechStackProps) {


    return (
        <div className={className}>
            <h2 className="font-bold text-[1.5vw] mb-4">Tech Stack</h2>
            <div className="flex flex-col items-start">

                {children}

                {react && <div className="flex m-2 items-center">                                
                    <React width={24} height={24} className="mx-2"/>
                    <div>
                        React Frontend
                    </div>
                </div>}

                {nextjs && <div className="flex m-2 items-center">
                    <NextJS width={24} height={24} className="mx-2"/>
                    <div>
                        NextJS API Routes and Server Actions
                    </div>
                </div>}

                {prisma && <div className="flex m-2 items-center">
                    <Prisma width={24} height={24} className="mx-2"/>
                    <div>
                        Prisma ORM
                    </div>
                </div>}

                {postgresql && <div className="flex m-2 items-center">
                    <PostgreSQL  width={24} height={24} className="mx-2"/>
                    <div>
                        PostgreSQL Database
                    </div>
                </div>}

                {cloudinary && <div className="flex m-2 items-center">
                    <Cloudinary width={24} height={24} className="mx-2"/>
                    <div>
                        Cloudinary Remote Image Hosting
                    </div>
                </div>}

                {betterAuth && <div className="flex m-2 items-center">
                    <BetterAuth width={24} height={24} className="mx-2"/>
                    <div>
                        Better Auth
                    </div>
                </div>}

                {cPlusPlus && <div className="flex m-2 items-center">
                    <CPlusPlus width={24} height={24} className="mx-2"/>
                    <div>
                        C++
                    </div>
                </div>}

                {cLang && <div className="flex m-2 items-center">
                    <CLang width={32} height={32} className="mx-2"/>
                    <div>
                        C
                    </div>
                </div>}

                {fastAPI && <div className="flex m-2 items-center">
                    <FastAPI width={24} height={24} className="mx-2" />
                    <div>
                        FastAPI
                    </div>
                </div>}

                {docker && <div className="flex m-2 items-center">
                    <Docker width={24} height={24} className="mx-2" />
                    <div>
                        Docker
                    </div>
                </div>}

            </div>
        </div>
    )
}