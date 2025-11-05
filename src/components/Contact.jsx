import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="pb-12">
      <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="text-2xl font-semibold neon-text">Contact</motion.h3>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-lg bg-[#071025]/60 border border-slate-800">
          <div className="font-medium">Email</div>
          <a className="text-slate-300" href="mailto:nitishdayal93@gmail.com">nitishdayal93@gmail.com</a>
          <div className="mt-4 flex gap-4">
            <a href="https://github.com/nitishdayal93" target="_blank" rel="noreferrer" className="text-2xl"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/nitish-dayal-54526518a" target="_blank" rel="noreferrer" className="text-2xl"><FaLinkedin/></a>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-[#071025]/60 border border-slate-800">
          <div className="font-medium">Portfolio</div>
          <a href="https://NitishDayal.dev" className="text-slate-300">NitishDayal.dev (placeholder)</a>
          <div className="mt-4 text-slate-300">Achievements: Built an ecommerce website. Created scalable web platforms.</div>
        </div>
      </div>
    </section>
  )
}
