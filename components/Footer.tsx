import Link from "next/link"
export default function Footer() {
    return(
        <footer className="pt-10 pb-4 border-1 flex">
          <div className="flex flex-col mx-auto font-mono font-bold text-[10px] sm:text-xs md:text-[0.85vw] items-center">
            <p className="text-xs sm:text-sm md:text-[1.1vw]">Thanks for checking out my page!</p>
            <p className="p-2" />
            <p>Sanjay Kumar, 2026</p>
            <p>Created using Next.js. Hosted on Vercel.</p>
            <p>Design inspired by<Link href="https://ujjo.studiofreight.com/" target="_blank" rel="noopener noreferrer"> Ujjo</Link></p>
          </div>
        </footer>
    )
}
