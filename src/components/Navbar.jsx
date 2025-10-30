import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-gray-900 text-lg">My Portfolio</a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition">About</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900 transition">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-900/5 transition text-gray-700">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-900/5 transition text-gray-700">
            <Linkedin size={18} />
          </a>
          <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-gray-900/5 transition text-gray-700">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
