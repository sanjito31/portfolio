import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
    title: string,
    href: string,
    children: React.ReactNode
}


export default function ProjectCard({
    title,
    href,
    children,

}: ProjectCardProps) {

    return(
        
        <div 
            className="flex flex-col 
                        border-1 border-black 
                        p-[1.25vw] h-full
                        transition-transform duration-300 
                        hover:scale-[1.05] hover:bg-white hover:border-2 hover:border-black">
            
            <h2 className="font-mono font-bold text-[4vw]">{title}</h2>
            <h3 className="font-mono text-[1.5vw]">{children}</h3>
            
            <Link
              href={`${href}`}
              className="ml-auto mr-4 mt-auto 
                            transition-transform duration-300 
                            hover:translate-x-[10px]">
              <ArrowRight size={64}></ArrowRight>
            </Link>
        
        </div>
    )
}