import React from 'react'
import { motion } from 'framer-motion'

export default function Education(){
  return (
    <section id="education">
      <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="text-2xl font-semibold neon-text">Education</motion.h3>
      <div className="mt-4 space-y-6">
        <motion.div 
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{delay: 0.2}}
          className="p-4 rounded-lg bg-white/60 dark:bg-[#071025]/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-300">
          <div className="font-medium text-xl mb-2">Master of Computer Application (MCA)</div>
          <div className="text-md text-slate-700 dark:text-slate-300 mb-4">Lovely Professional University, Phagwara, Punjab, India</div>
          <div className="w-full h-48 md:h-64 overflow-hidden rounded-lg">
            <img 
              src="/LPu1.png" 
              alt="Lovely Professional University Campus" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{delay: 0.3}}
          className="p-4 rounded-lg bg-white/60 dark:bg-[#071025]/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-300">
          <div className="font-medium text-xl mb-2">Bachelor of Computer Application (BCA)</div>
          <div className="text-md text-slate-700 dark:text-slate-300 mb-4">Indira Gandhi Open University, Patna — 2022–2025</div>
          <div className="w-full h-48 md:h-64 overflow-hidden rounded-lg">
            <img 
              src="/images (1).jpg" 
              alt="IGNOU Campus" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
