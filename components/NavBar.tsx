import Link from "next/link"

export default function NavBar() {

    return (
        <div className="flex flex-col border-l-1 border-r-1">
            <nav className="grid grid-cols-5 p-[2vw] text-[1.5vw] font-mono font-semibold">
                <Link href="/projects" className="flex justify-center items-center hover:underline transition-transform duration-300 hover:translate-y-[-5px]">Projects</Link>
                <Link href="/experience" className="flex justify-center items-center hover:underline transition-transform duration-300 hover:translate-y-[-5px]">Experience</Link>

                <Link href="/" className="flex text-[3vw] justify-center items-center transition-transform duration-300 hover:scale-[1.1]">SK</Link>
                
                <Link href="/about" className="flex justify-center items-center hover:underline transition-transform duration-300 hover:translate-y-[-5px]">About</Link>
                <Link href="/contact" className="flex justify-center items-center hover:underline transition-transform duration-300 hover:translate-y-[-5px]">Contact</Link>
            </nav>
            <div className="border-black border-b-1"/>
      </div>
    )
}