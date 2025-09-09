import Link from "next/link"
export default function Footer() {
    return(
        <footer className="pt-20 pb-5 border-1 flex">
          <div className="flex flex-col mx-auto font-mono font-bold text-xs sm:text-sm md:text-[1vw] items-center">
            <p className="text-sm sm:text-base md:text-[1.5vw]">Thanks for checking out my page!</p>
            <p className="p-4" />
            <p>Sanjay Kumar, 2025</p>
            <p>Created using Next.js. Hosted on Vercel.</p>
            <p>Design inspired by<Link href="https://ujjo.studiofreight.com/" target="_blank" rel="noopener noreferrer"> Ujjo</Link></p>
          </div>
        </footer>
    )
}