"use client"

import Link from "next/link"
import { useState } from "react"

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {/* Desktop Navigation - hidden on small screens, visible on md and up */}
            <nav className="hidden md:grid grid-cols-5 gap-2 p-2
                            text-sm
                            md:p-[2vw] md:text-[1.5vw] 
                            font-mono font-semibold
                            border-l-1 border-r-1 border-b-1">
                
                <Link href="/about" className="flex mx-auto items-center justify-center text-center hover:underline transition-transform duration-300 hover:translate-y-[-5px]">About</Link>
                <Link href="/projects" className="flex mx-auto items-center justify-center text-center hover:underline transition-transform duration-300 hover:translate-y-[-5px]">Projects</Link>
                
                <Link href="/" className="flex mx-auto items-center justify-center text-center text-3xl md:text-[3vw] transition-transform duration-300 hover:scale-[1.1]">SK</Link>

                <Link href="/experience" className="flex mx-auto items-center justify-center text-center hover:underline transition-transform duration-300 hover:translate-y-[-5px]">Experience</Link>
                <Link href="/contact" className="flex mx-auto items-center justify-center text-center hover:underline transition-transform duration-300 hover:translate-y-[-5px]">Contact</Link>
            </nav>

            {/* Mobile Navigation - visible only on small screens */}
            <nav className="md:hidden relative border-l-1 border-r-1 border-b-1 p-4">
                <div className="flex justify-between items-center">
                    {/* Burger Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        className="flex flex-col justify-center items-center w-6 h-6 space-y-1 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>

                    {/* Logo */}
                    <Link href="/" className="text-3xl font-mono font-semibold transition-transform duration-300 hover:scale-[1.1]"
                                    onClick={() => setIsMenuOpen(false)}>SK</Link>
                    
                    {/* Spacer to center the logo */}
                    <div className="w-6"></div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b-2 z-50 shadow-lg">
                        <div className="flex flex-col p-4 space-y-4 font-mono font-semibold">
                            <Link 
                                href="/about" 
                                className="text-center hover:underline transition-transform duration-300 hover:translate-y-[-2px]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link 
                                href="/projects" 
                                className="text-center hover:underline transition-transform duration-300 hover:translate-y-[-2px]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link 
                                href="/experience" 
                                className="text-center hover:underline transition-transform duration-300 hover:translate-y-[-2px]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Experience
                            </Link>
                            <Link 
                                href="/contact" 
                                className="text-center hover:underline transition-transform duration-300 hover:translate-y-[-2px]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}