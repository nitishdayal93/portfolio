import React from 'react'
import { motion } from 'framer-motion'

export default function Education(){
  return (
    <section id="education">
      <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="text-2xl font-semibold neon-text">Education</motion.h3>
      <div className="mt-4">
        <div className="p-4 rounded-lg bg-[#071025]/60 border border-slate-800">
          <div className="font-medium">Bachelor of Computer Application (BCA)</div>
          <div className="text-sm text-slate-300">Indira Gandhi Open University, Patna — 2022–2025</div>
        </div>
      </div>
    </section>
  )
}
