

'use client';

export default function Home() {

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Global ambient glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-green-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/5 w-56 h-56 bg-orange-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Global gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative bg-neutral-800/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-neutral-700/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group">
          {/* Glowing background effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative flex space-x-8">
            <a href="#hero" className="text-white hover:text-blue-300 hover:scale-110 transition-all duration-300 text-sm font-medium relative group/link">
              <span className="relative z-10">Home</span>
              <div className="absolute -inset-2 rounded-lg bg-blue-500/0 group-hover/link:bg-blue-500/20 transition-all duration-300"></div>
            </a>
            <a href="#about" className="text-white hover:text-green-300 hover:scale-110 transition-all duration-300 text-sm font-medium relative group/link">
              <span className="relative z-10">About</span>
              <div className="absolute -inset-2 rounded-lg bg-green-500/0 group-hover/link:bg-green-500/20 transition-all duration-300"></div>
            </a>
            <a href="#projects" className="text-white hover:text-purple-300 hover:scale-110 transition-all duration-300 text-sm font-medium relative group/link">
              <span className="relative z-10">Projects</span>
              <div className="absolute -inset-2 rounded-lg bg-purple-500/0 group-hover/link:bg-purple-500/20 transition-all duration-300"></div>
            </a>
            <a href="#skills" className="text-white hover:text-orange-300 hover:scale-110 transition-all duration-300 text-sm font-medium relative group/link">
              <span className="relative z-10">Skills</span>
              <div className="absolute -inset-2 rounded-lg bg-orange-500/0 group-hover/link:bg-orange-500/20 transition-all duration-300"></div>
            </a>
            <a href="#contact" className="text-white hover:text-pink-300 hover:scale-110 transition-all duration-300 text-sm font-medium relative group/link">
              <span className="relative z-10">Contact Me</span>
              <div className="absolute -inset-2 rounded-lg bg-pink-500/0 group-hover/link:bg-pink-500/20 transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="min-h-screen flex items-center py-8 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left relative">
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight relative z-10">
                Hi, I&apos;m Sanjay
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-lg mx-auto lg:mx-0 relative z-10">
                Passionate about using software to improve quality of life.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              About
            </h2>
            <div className="space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              <p>
                I&apos;m a Computer Science graduate student at Columbia University specializing in Machine Learning. My journey began with a Microbiology degree from UCLA and biomedical research on Parkinson&apos;s disease and ALS at Cedars-Sinai.
              </p>
              <p>
                While analyzing thousands of microscopy images and complex datasets, I discovered my passion for AI and how machine learning could automate analysis and accelerate discoveries that help patients.
              </p>
              <p>
                Today, I focus on using technology to create meaningful impact—particularly developing machine learning solutions to bridge brain signals and robotics, helping individuals with disabilities through intelligent prosthetics and assistive devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on recently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Project Card 1 - RGB Information Panel */}
            <div className="bg-neutral-800/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-r from-red-500 to-orange-600 group-hover:from-red-600 group-hover:to-orange-700 transition-all duration-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">RGB Information Panel</h3>
                <p className="text-gray-300 mb-4">
                  Full-stack IoT display system using ESP32 microcontroller with 64x32 RGB LED matrix. Aggregates real-time data from weather, transit, music, and sports APIs with modular C++ architecture.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">C++</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">ESP32</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">FastAPI</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Docker</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">View Project</a>
                  <a href="https://github.com/sanjito31" className="text-gray-400 hover:text-gray-300 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project Card 2 - Sanjay's Pics */}
            <div className="bg-neutral-800/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Sanjay&apos;s Pics</h3>
                <p className="text-gray-300 mb-4">
                  Photography portfolio with custom Fujifilm EXIF parser extracting 50+ undocumented metadata fields. Features admin dashboard, role-based auth, and cloud-optimized image pipeline.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">PostgreSQL</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Prisma</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://www.sanjayspics.com" className="text-blue-400 hover:text-blue-300 font-medium">View Project</a>
                  <a href="https://github.com/sanjito31" className="text-gray-400 hover:text-gray-300 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project Card 3 - Portfolio Website */}
            <div className="bg-neutral-800/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 group-hover:from-green-600 group-hover:to-teal-700 transition-all duration-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Portfolio Website</h3>
                <p className="text-gray-300 mb-4">
                  Modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode design, floating navigation, interactive animations, and ambient rainbow glow effects.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Tailwind</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">TypeScript</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#hero" className="text-blue-400 hover:text-blue-300 font-medium">View Project</a>
                  <a href="https://github.com/sanjito31" className="text-gray-400 hover:text-gray-300 font-medium">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              Let&apos;s Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12">
              Interested in collaborating on ML projects, discussing opportunities, or just want to chat about technology? I&apos;d love to hear from you.
            </p>
            
            <div className="space-y-8">
              {/* Email */}
              <div className="bg-neutral-800/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 text-xl">✉</span>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-300 text-sm mb-2">Email</p>
                    <a href="mailto:svk2121@columbia.edu" className="text-white hover:text-purple-300 transition-colors text-lg">
                      svk2121@columbia.edu
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-neutral-800/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Find me online</h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/sanjito31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-neutral-700/50 hover:bg-gray-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title="GitHub"
                  >
                    <svg className="w-7 h-7 text-gray-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/sanjayvkumar31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-neutral-700/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title="LinkedIn"
                  >
                    <svg className="w-7 h-7 text-gray-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
                <div className="mt-4 text-sm text-gray-400 text-center">
                  <p>Check out my code and connect professionally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
