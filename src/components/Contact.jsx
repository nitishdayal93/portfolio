import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="pb-12">
      <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="text-2xl font-semibold neon-text">Contact</motion.h3>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <motion.div 
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="p-6 rounded-lg bg-[#071025]/60 border border-slate-800 hover:border-slate-700 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-2xl text-[#00d4ff]" />
            <div className="font-medium text-lg">Email</div>
          </div>
          <a 
            className="text-slate-300 hover:text-[#00d4ff] transition-colors flex items-center gap-2" 
            href="mailto:nitishdayal93@gmail.com"
          >
            <span>nitishdayal93@gmail.com</span>
          </a>
          <div className="mt-6 flex gap-4">
            <motion.a 
              whileHover={{scale: 1.1}} 
              href="https://github.com/nitishdayal93" 
              target="_blank" 
              rel="noreferrer" 
              className="text-3xl text-slate-300 hover:text-white transition-colors"
            >
              <FaGithub/>
            </motion.a>
            <motion.a 
              whileHover={{scale: 1.1}} 
              href="https://www.linkedin.com/in/nitish-dayal-54526518a" 
              target="_blank" 
              rel="noreferrer" 
              className="text-3xl text-[#0077B5] hover:text-[#0088cc] transition-colors"
            >
              <FaLinkedin/>
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          className="p-6 rounded-lg bg-[#071025]/60 border border-slate-800 hover:border-slate-700 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#8a2be2] text-transparent bg-clip-text">ND</div>
            <div className="font-medium text-lg">Portfolio</div>
          </div>
          <a 
            href="https://NitishDayal.dev" 
            className="text-slate-300 hover:text-[#00d4ff] transition-colors"
          >
            NitishDayal.dev
          </a>
          <div className="mt-4 text-slate-300">
            Full-stack developer specializing in React and Node.js. Building scalable web applications and engaging user experiences.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
