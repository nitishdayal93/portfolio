import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Nav(){
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold neon-text">Nitish Dayal</div>
        <div className="hidden md:flex gap-6 items-center text-sm">
          <ScrollLink to="hero" smooth={true} offset={-80} className="cursor-pointer hover:opacity-90">Home</ScrollLink>
          <ScrollLink to="skills" smooth={true} offset={-80} className="cursor-pointer hover:opacity-90">Skills</ScrollLink>
          <ScrollLink to="projects" smooth={true} offset={-80} className="cursor-pointer hover:opacity-90">Projects</ScrollLink>
          <ScrollLink to="education" smooth={true} offset={-80} className="cursor-pointer hover:opacity-90">Education</ScrollLink>
          <ScrollLink to="contact" smooth={true} offset={-80} className="cursor-pointer hover:opacity-90">Contact</ScrollLink>
        </div>
        <div className="md:hidden text-sm">Menu</div>
      </div>
    </nav>
  )
}
