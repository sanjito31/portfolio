import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
    title: string,
    href: string,
    tags?: string[],
    children: React.ReactNode
}


export default function ProjectCard({
    title,
    href,
    tags,
    children,

}: ProjectCardProps) {

    return(
        <Link href={href}>
            <div 
                className="
                            grid grid-cols-[90%_10%] grid-rows-[85%_15%]
                            border-1 border-black 
                            p-4 
                            md:p-[1.25vw] md:h-full
                            transition-transform duration-300 
                            hover:scale-[1.1] hover:bg-white hover:border-2 hover:border-black">
                <div className="col-start-1 col-span-1 row-start-1 row-span-1">
                    <h2 className="font-mono font-bold 
                                    text-4xl mb-2
                                    md:text-[4vw]">{title}</h2>

                    <div className="flex flex-col">
                        <h3 className="font-mono text-md md:text-[1.5vw] mb-4">{children}</h3>
                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {tags.map((t) => (
                                    <span
                                        key={t}
                                        className="font-extrabold text-white bg-[#003ae8] px-2 py-1 font-mono text-sm md:text-[1.25vw]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                
                
                <ArrowRight className="col-start-2 col-span-1 row-start-2 row-span-1
                                        w-8 h-8 
                                        md:w-[4vw] md:h-[4vw] 
                                        transition-transform duration-300 hover:translate-x-[10px]"></ArrowRight>

                

                
            
            </div>
        </Link>
    )
}